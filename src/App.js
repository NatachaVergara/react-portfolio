import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouterApp from './RouterApp/RouterApp';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />  
        <RouterApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
