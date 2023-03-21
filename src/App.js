import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import MainComponent from './Components/MainComponent/MainComponent';

const Router = createBrowserRouter([
  {
    path: '/', element: <MainComponent />, children: [
      { path: 'home', element: <Home /> },
      { path: '/', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }
    ]
  }

]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
      {/* <ModalComp /> */}
    </div>
  );
}

export default App;
