import './App.scss';
import Nav from './components/Nav';
import HeadLine from './components/HeadLine';
import About from './components/About';
import Info from './components/Info';
import Portfolio from './components/Portfolio';




function App() {
  return (
    <div className="App">
      <Nav/>
      <HeadLine/>
      <About/>
      <Info/>
      <Portfolio/>
    </div>
  );
}

export default App;
