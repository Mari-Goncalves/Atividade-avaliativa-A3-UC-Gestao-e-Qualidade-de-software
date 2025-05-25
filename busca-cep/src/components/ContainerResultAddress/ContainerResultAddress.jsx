import "./style.css";

function ContainerResultAddress({ addressData }) {
  return (
    <section className="cepDataResult">
      <p>
        <strong>CEP:</strong> {addressData.cep}
      </p>
      <p>
        <strong>Estado:</strong> {addressData.estado}
      </p>
      <p>
        <strong>Cidade:</strong> {addressData.localidade}
      </p>
      <p>
        <strong>Logradouro:</strong> {addressData.logradouro}
      </p>
      <p>
        <strong>Bairro:</strong> {addressData.bairro}
      </p>
    </section>
  );
}

export default ContainerResultAddress;
