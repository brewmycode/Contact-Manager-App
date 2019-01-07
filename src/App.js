import "./App.scss";
import Header from "./components/Header";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John" email="jdoe@gmail.com" phone="453-656-6886" />
        <Contact name="Karen" email="karen@gmail.com" phone="232-656-9987" />
      </div>
    );
  }
}

export default App;
