import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ cepInput, setCepInput, isEmptyField, hasError, handleSearchCep }) {
  return (
    <section className="searchCepContainer">
      <SearchInput
        cepInput={cepInput}
        setCepInput={setCepInput}
        isEmptyField={isEmptyField}
        hasError={hasError}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={handleSearchCep} />
    </section>
  );
}

export default ContainerSearch;
