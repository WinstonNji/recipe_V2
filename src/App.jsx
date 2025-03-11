
import SideBar from "./components/sidebar"
import Homepage from "./pages/homepage"
import { Routes, Route } from "react-router"
import Favourites from "./pages/Favourites"

export default function App() {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
      </Routes> 
    </div>
  )
}