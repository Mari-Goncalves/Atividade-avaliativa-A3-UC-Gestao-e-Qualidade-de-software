import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ input, setInput, emptyField, erro, searchCEP }) {
  return (
    <section className="search_container">
      <SearchInput
        input={input}
        setInput={setInput}
        emptyField={emptyField}
        erro={erro}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
    </section>
  );
}

export default ContainerSearch;
