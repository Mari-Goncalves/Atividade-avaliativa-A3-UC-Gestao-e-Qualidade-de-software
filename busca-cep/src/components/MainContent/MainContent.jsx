import { useState } from "react";
import api from "../../services/api";
import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";
import SearchInput from "../SearchInput/SearchInput";

function MainContent() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [campoVazio, setCampoVazio] = useState(false);
  const [erro, setErro] = useState(false);

  async function searchCEP() {
    if (input == "") {
      setCampoVazio(true);
      return;
    }

    try {
      const response = await api.get(`${input}/json/`);
      setData(response.data);
      setInput("");
      setCampoVazio(false);
      setErro(false);
    } catch (error) {
      setCampoVazio(false);
      setErro(true);
      setInput("");
    }
  }
  return (
    <div className="main_content">
      <section className="search_container">
        <SearchInput
          input={input}
          setInput={setInput}
          campoVazio={campoVazio}
          erro={erro}
        />
        <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
      </section>

      {Object.keys(data).length > 0 && <ContainerResultAddress data={data} />}
    </div>
  );
}

export default MainContent;
