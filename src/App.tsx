import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTest from '~/components/MyTest';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // eslint no-console log test
  console.log('1');

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyTest />
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button type='button' onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
