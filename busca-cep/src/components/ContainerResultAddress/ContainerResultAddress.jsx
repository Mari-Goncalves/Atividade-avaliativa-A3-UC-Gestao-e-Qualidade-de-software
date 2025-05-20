import React from 'react'; // Import necessário para JSX
import "./style.css";

function ContainerResultAddress({ data }) {
  return (
    <section className="address_data">
      <p>
        <strong>CEP:</strong> {data.cep}
      </p>
      <p>
        <strong>Estado:</strong> {data.estado}
      </p>
      <p>
        <strong>Cidade:</strong> {data.localidade}
      </p>
      <p>
        <strong>Logradouro:</strong> {data.logradouro}
      </p>
      <p>
        <strong>Bairro:</strong> {data.bairro}
      </p>
    </section>
  );
}

export default ContainerResultAddress;
