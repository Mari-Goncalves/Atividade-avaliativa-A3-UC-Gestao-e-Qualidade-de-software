import { useState } from "react";
import api from "../../services/api";
import "./style.css";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import ContainerSearch from "../ContainerSearch/ContainerSearch";

function MainContent() {
  const [cepInput, setCepInput] = useState("");
  const [addressData, setAddressData] = useState({});
  const [emptyField, setEmptyField] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearchCep() {
    if (cepInput == "") {
      setEmptyField(true);
      return;
    }

    try {
      const cepResponse = await api.get(`${cepInput}/json/`);
      setAddressData(cepResponse.data);
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
        handleSearchCep={handleSearchCep}
      />

      {Object.keys(addressData).length > 0 && <ContainerResultAddress addressData={addressData} />}
    </div>
  );
}

export default MainContent;
