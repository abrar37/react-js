import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter(counter + 1)
  }

  let navItems = ["Home", "About"]
  return (
    <>
    <Header name="header" navItems = {navItems}/>
    <div className="App">
      <header className="App-header">
        <Heading count=""/>
        <h1>Counter: {counter}</h1>
        <button onClick={counterHandler}>Click me to update counter</button>
      </header>
    </div>
    </>
  );
}

export default App;
