import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

    function App() {
return (
    <>
      <Router>
        <div className="page-layout">
          <Navbar />
          <div className="main-container">
            <main className="container">
              <div>
                <Routes>
                    <Route path='/about' element={<About />} />
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
    </>
  )
}

export default App