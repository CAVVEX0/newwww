import GlobalStyles from "./Styles/GlobalStyles";
import About from "./components/About";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <GlobalStyles/>
      <Navbar/>
      <Home/>
      <About/>
      <Grid/>
    </>
  );
}

export default App;
