import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import RouterApp from './components/RouterApp/RouterApp';
import Skills from './components/Skills';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        
        <RouterApp />
        <Skills />
      </BrowserRouter>
    </div>
  );
}

export default App;
