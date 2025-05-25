import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ cepInput, setCepInput, emptyField, error, handleSearchCep }) {
  return (
    <section className="searchCepContainer">
      <SearchInput
        cepInput={cepInput}
        setCepInput={setCepInput}
        emptyField={emptyField}
        error={error}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={handleSearchCep} />
    </section>
  );
}

export default ContainerSearch;
