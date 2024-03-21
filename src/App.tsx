import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GetInTouch from './components/GetInTouch'
import Sponser from './components/Sponser'
import NewsLetter from './components/NewsLetter'
import './index.css';
import "./components/component.css"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <NewsLetter/>
      <Sponser/>
      <GetInTouch/>
      <Footer />
    </div>
  );
}

export default App;
