import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from 'react-loader-spinner';
import { PageLoaderDiv } from './components/styles/loaders.style';

const Home = lazy(() => import('./components/Home'));

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <PageLoaderDiv>
            <Loader type='TailSpin' color='#00BFFF' height={80} width={80} />
          </PageLoaderDiv>
        }
      >
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/Portfolio/about' component={About}/>
             */}
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
