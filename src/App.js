import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App container_app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
