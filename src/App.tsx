import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './Main';

const App: FC = (): ReactElement => {

  console.log('App is starting');
  return (
    <div className="container">
      <header>
        <Link to='/'> Home </Link>
        <Link to='/projects'>Projects</Link>
      </header>
      <hr />
      <Main />
    </div>
  );
}

export default App;
