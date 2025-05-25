import { useState } from "react";
import api from "../../services/api";
import "./style.css";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import ContainerSearch from "../ContainerSearch/ContainerSearch";

function MainContent() {
  const [cepInput, setCepInput] = useState("");
  const [data, setData] = useState({});
  const [emptyField, setEmptyField] = useState(false);
  const [error, setError] = useState(false);

  async function searchCEP() {
    if (cepInput == "") {
      setEmptyField(true);
      return;
    }

    try {
      const cepResponse = await api.get(`${cepInput}/json/`);
      setData(cepResponse.data);
      setCepInput("");
      setEmptyField(false);
      setError(false);
    } catch (error) {
      setEmptyField(false);
      setError(true);
      setCepInput("");
    }
  }
  return (
    <div className="mainContent">
      <ContainerSearch
        cepInput={cepInput}
        setCepInput={setCepInput}
        emptyField={emptyField}
        error={error}
        searchCEP={searchCEP}
      />

      {Object.keys(data).length > 0 && <ContainerResultAddress data={data} />}
    </div>
  );
}

export default MainContent;
