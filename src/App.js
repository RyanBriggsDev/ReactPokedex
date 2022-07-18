import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { PokeProvider } from "./context/PokeContext";

    function App() {
return (
    <>
    <PokeProvider>
      <Router>
        <div className="page-layout">
          <Navbar />
          <div className="main-container">
            <main className="container">
              <div>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/search' element={<Home />} />
                </Routes>
              </div>
            </main>
          </div>
          <Footer />
        </div>
        </Router>
      </PokeProvider>
    </>
  )
}

export default App