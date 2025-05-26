import React from 'react';
import { useState } from "react";
import api from "../../services/api";
import "./style.css";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import ContainerSearch from "../ContainerSearch/ContainerSearch";

function MainContent() {
  const [cepInput, setCepInput] = useState("");
  const [addressData, setAddressData] = useState({});
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSearchCep() {
    if (cepInput == "") {
      setIsEmptyField(true);
      return;
    }

    try {
      const cepResponse = await api.get(`${cepInput}/json/`);
      setAddressData(cepResponse.data);
      setCepInput("");
      setIsEmptyField(false);
      setHasError(false);
    } catch (error) {
      setIsEmptyField(false);
      setHasError(true);
      setCepInput("");
    }
  }
  return (
    <div className="mainContent">
      <ContainerSearch
        cepInput={cepInput}
        setCepInput={setCepInput}
        isEmptyField={isEmptyField}
        hasError={hasError}
        handleSearchCep={handleSearchCep}
      />

      {Object.keys(addressData).length > 0 && <ContainerResultAddress addressData={addressData} />}
    </div>
  );
}

export default MainContent;
