import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ input, setInput, emptyField, error, searchCEP }) {
  return (
    <section className="searchCepContainer">
      <SearchInput
        input={input}
        setInput={setInput}
        emptyField={emptyField}
        error={error}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
    </section>
  );
}

export default ContainerSearch;
