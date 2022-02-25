import "./App.css";
import { musicDataMock } from "./mock";
import { MainPage } from "./page/Main/Main";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <MainPage trackList={musicDataMock} />
      </div>
    </div>
  );
};

export default App;
