import React, { useState } from "react";
import api from "../../services/api";
import "./style.css";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import ContainerSearch from "../ContainerSearch/ContainerSearch";

function MainContent() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [emptyField, setEmptyField] = useState(false);
  const [error, setError] = useState(false);

  async function searchCEP() {
    if (input == "") {
      setEmptyField(true);
      return;
    }

    try {
      const response = await api.get(`${input}/json/`);
      setData(response.data);
      setInput("");
      setEmptyField(false);
      setError(false);
    } catch (error) {
      setEmptyField(false);
      setError(true);
      setInput("");
    }
  }
  return (
    <div className="main_content">
      <ContainerSearch
        input={input}
        setInput={setInput}
        emptyField={emptyField}
        error={error}
        searchCEP={searchCEP}
      />

      {Object.keys(data).length > 0 && <ContainerResultAddress data={data} />}
    </div>
  );
}

export default MainContent;
