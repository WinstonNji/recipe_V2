
import SideBar from "./components/sidebar"
import Homepage from "./pages/homepage"
import { Routes, Route } from "react-router"
import Favourites from "./pages/Favourites"

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
        </Routes>
      </div>
    </div>
  );
}
