import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouterApp from './RouterApp/RouterApp';
import Header from './components/Header';
import Footer from './components/Footer';
import UserContextProvider from './Store/useContext';



function App() {
  return (
    <div>
      <UserContextProvider>
      <BrowserRouter>
        <Header />
        <RouterApp />     
        <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App;
