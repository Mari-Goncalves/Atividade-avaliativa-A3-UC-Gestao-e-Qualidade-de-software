import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";

function ContainerSearch({ input, setInput, campoVazio, erro, searchCEP }) {
  return (
    <section className="search_container">
      <SearchInput
        input={input}
        setInput={setInput}
        campoVazio={campoVazio}
        erro={erro}
      />
      <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
    </section>
  );
}

export default ContainerSearch;
