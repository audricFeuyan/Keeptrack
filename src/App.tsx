import { FC, ReactElement } from 'react';
import ProjectsPage from './projects/ProjectsPage';
import './App.css';

const App: FC = (): ReactElement => {

  console.log('App is starting');
  return (
    <div className="container">
      <ProjectsPage />
    </div>
  );
}

export default App;
