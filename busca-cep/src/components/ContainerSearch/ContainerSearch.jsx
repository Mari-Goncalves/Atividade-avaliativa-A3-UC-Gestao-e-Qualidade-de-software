import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ cepInput, setCepInput, emptyField, error, searchCEP }) {
  return (
    <section className="searchCepContainer">
      <SearchInput
        cepInput={cepInput}
        setCepInput={setCepInput}
        emptyField={emptyField}
        error={error}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
    </section>
  );
}

export default ContainerSearch;
