import "./app.css";
import Title from "./components/Title/Title.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

function App() {
  return (
    <main className="app">
      <div className="app_container">
        <Title titleValue={"Busca CEP"} />
        <MainContent />
      </div>
    </main>
  );
}

export default App;
