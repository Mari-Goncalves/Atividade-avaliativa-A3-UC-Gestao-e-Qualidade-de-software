import React from 'react';
import "./style.css";

function SearchInput({ cepInput, setCepInput, isEmptyField, hasError }) {
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
        {isEmptyField == true && (
          <p className="errorMessage">O campo está vazio! Digite seu cep.</p>
        )}
        {hasError == true && (
          <p className="errorMessage">Erro ao buscar. Tente novamente!</p>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
