import React from "react";
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
  const hasAddressData = Object.keys(addressData).length > 0;

  function resetInput() {
    setCepInput("");
    setIsEmptyField(false);
  }

  async function handleSearchCep() {
    const isEmptyInputCep = cepInput.trim() === "";

    if (isEmptyInputCep) {
      setIsEmptyField(true);
      return;
    }

    try {
      const cepResponse = await api.get(`${cepInput}/json/`);
      setAddressData(cepResponse.data);
      resetInput();
      setHasError(false);

    } catch (error) {
      resetInput();
      setHasError(true);
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

      {hasAddressData && <ContainerResultAddress addressData={addressData} />}
    </div>
  );
}

export default MainContent;
