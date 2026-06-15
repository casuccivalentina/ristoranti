import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import RestaurantPage from "./pages/RestaurantPage"

export default function App() {
  return (
    <BrowserRouter>

      <div className="bg-black text-white min-h-screen">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/:slug"
            element={<RestaurantPage />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}