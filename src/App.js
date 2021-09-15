import "./App.css";
import ContentWrapper from "./components/ContentWrapper";
import Login from "./components/Login";
import MainSidebar from "./components/MainSidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
