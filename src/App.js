import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import RouterApp from './RouterApp/RouterApp';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />  
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
