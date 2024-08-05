import './App.scss';
import Nav from './components/Nav';
import HeadLine from './components/HeadLine';
import About from './components/About';
import Info from './components/Info';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./styles/MediaQueries.scss";


function App() {
  return (
    <div className="App">
      <Nav/>
      <HeadLine/>
      <About/>
      <Info/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
