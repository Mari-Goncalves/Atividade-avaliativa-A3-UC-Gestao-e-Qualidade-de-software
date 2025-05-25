import "./style.css";

function SearchInput({ cepInput, setCepInput, emptyField, error }) {
  return (
    <div>
      <input
        type="text"
        className="inputSearch"
        placeholder="Digite seu CEP"
        value={cepInput}
        onChange={(e) => setCepInput(e.target.value)}
      />

      <div>
        {emptyField == true && (
          <p className="errorMessage">O campo está vazio! Digite seu cep.</p>
        )}
        {error == true && (
          <p className="errorMessage">Erro ao buscar. Tente novamente!</p>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
