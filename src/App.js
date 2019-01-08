import "./App.scss";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contacts />
      </div>
    );
  }
}

export default App;
