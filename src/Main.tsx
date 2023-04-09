import React from 'react';
import {Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./home/Home'));
const ProjectsPage = React.lazy(() => import('./projects/ProjectsPage'));

const Loading = () => <p>Loading...</p>

const Main = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsPage />} />
            </Routes>
        </React.Suspense>
    );
};

export default Main;