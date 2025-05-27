import React from "react";
import "./style.css";
import useCepSearch from "../../hooks/useSearchCep";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import ContainerSearch from "../ContainerSearch/ContainerSearch";

function MainContent() {
  const {
    cepInput,
    setCepInput,
    addressData,
    isEmptyField,
    hasError,
    hasAddressData,
    handleSearchCep,
  } = useCepSearch();

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
