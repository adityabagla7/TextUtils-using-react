import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <TextForm heading = "Text Analysis" />
      </div>
    </>
  );
}

export default App;
