import "./App.css";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
function App() {
  // const ToggleMode = () =>{
  //   if(mode == 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }
  return (
    <>
      <NavBar />
      <div className="container">
        {/* <Alert alert = "This is a temp alert"></Alert> */}
        {/* <TextForm heading = "Text Utils" /> */}
        <About>

        </About>
      </div>
    </>
  );
}

export default App;
