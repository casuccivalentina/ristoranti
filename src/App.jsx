import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Home = lazy(() => import("./pages/Home"))
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"))

export default function App() {
  return (
    <BrowserRouter>

      <div className="bg-black text-white min-h-screen">

        <Navbar />

        <Suspense fallback={<main className="min-h-screen bg-black" />}>
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
        </Suspense>

        <Footer />

      </div>

    </BrowserRouter>
  )
}
