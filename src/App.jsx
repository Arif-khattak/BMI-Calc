import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <>
      <div className="card container" style={{ width: "20rem" }}>
        <div className="card-body items">
          <Header></Header>
          <div className="card-text input">
            <Input></Input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
