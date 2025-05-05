import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import CustomizerPage from "./pages/CustomizerPage"
import AuctionsPage from "./pages/AuctionsPage"

function App() {
  const [darkMode, setDarkMode] = useState(false)  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/customize/:id" element={<CustomizerPage/>} />
            <Route path="/auctions" element={<AuctionsPage />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  )
}

export default App
