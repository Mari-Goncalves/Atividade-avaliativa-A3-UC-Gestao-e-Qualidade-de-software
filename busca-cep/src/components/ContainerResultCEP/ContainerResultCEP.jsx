import { useState } from "react";
import api from "../../services/api";
import "./style.css";
import SearchButton from "../SearchButton/SearchButton";
import ContainerResultAddress from "../ContainerResultAddress/ContainerResultAddress";

function ContainerResultCEP() {
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
        <div>
          <input
            type="text"
            className="search_input"
            placeholder="Digite seu CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div>
            {campoVazio == true && (
              <p className="alert">O campo está vazio! Digite seu cep.</p>
            )}
            {erro == true && (
              <p className="alert">Erro ao buscar. Tente novamente!</p>
            )}
          </div>
        </div>

        <SearchButton buttonText={"Pesquisar"} onClick={searchCEP} />
      </section>

      {Object.keys(data).length > 0 && <ContainerResultAddress data={data} />}
    </div>
  );
}

export default ContainerResultCEP;
