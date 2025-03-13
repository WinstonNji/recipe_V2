
import SideBar from "./components/SideBar"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router"
import Favourites from "./pages/Favourites"
import SingleProduct from "./pages/SingleProduct"

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed Full Height */}
      <SideBar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </div>
  );
}
