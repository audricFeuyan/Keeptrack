import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ProjectsPage from './projects/ProjectsPage';
import Main from './Main';
import './App.css';

const App: FC = (): ReactElement => {

  console.log('App is starting');
  return (
    <div className="container">
      <header>
        <Link to='/'> Home </Link>
        <Link to='projects'>Projects</Link>
      </header>
      <hr />
      <Main />
    </div>
  );
}

export default App;
