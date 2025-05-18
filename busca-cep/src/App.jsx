import Title from "./components/Title/Title.jsx";
import ContainerResultCEP from "./components/ContainerResultCEP/ContainerResultCEP.jsx";

function App() {
  return (
    <main className="app">
      <div className="app_container">
        <Title titleValue={"Busca CEP"} />
        <ContainerResultCEP />
      </div>
    </main>
  );
}

export default App;
