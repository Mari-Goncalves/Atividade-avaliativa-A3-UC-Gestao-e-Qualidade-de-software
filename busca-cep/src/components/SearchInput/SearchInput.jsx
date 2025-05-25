import "./style.css";

function SearchInput({ input, setInput, emptyField, error }) {
  return (
    <div>
      <input
        type="text"
        className="search_input"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        {emptyField == true && (
          <p className="alert">O campo está vazio! Digite seu cep.</p>
        )}
        {error == true && (
          <p className="alert">Erro ao buscar. Tente novamente!</p>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
