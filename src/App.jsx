import "./App.css";
import Home from "./pages/Home";
import StoreList from "./pages/StoreList";
import GlobalStyle from "./components/global/GlobalStyle";
// import StyledButton, {
//   FancyButton,
//   SubmitButton,
// } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Home /> */}
      <StoreList />
    </div>
  );
}

export default App;
