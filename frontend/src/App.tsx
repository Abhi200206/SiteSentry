import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Home } from "./pages/Home"
import { Create } from "./pages/Create"
import { Help } from "./pages/Help"
import { View } from "./pages/View"
import { Landing } from "./pages/Landing"
import { Profile } from "./pages/Profile"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
