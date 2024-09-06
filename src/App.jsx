import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Routes from './router';


function App() {
  return (
    <>
      <Navbar />
      <Routes/>
      <Footer />
    </>
  );
}

export default App;

