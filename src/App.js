import './App.css';
import { HashRouter  } from "react-router-dom";
import RouterApp from './RouterApp/RouterApp';
import Header from './components/Header';
import Footer from './components/Footer';
import UserContextProvider from './Store/useContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function App() {
  return (
    <div>
      <UserContextProvider>
      <HashRouter>
        <Header />
        <RouterApp />     
        <Footer />
        </HashRouter>
      </UserContextProvider>
    </div>
  )
}

export default App;
