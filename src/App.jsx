import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import bg from "./assets/images/home_title_background.jpg"
import Profile from "./components/pages/Profile"


function App() {
    const [scroll, setScroll] = useState(false)
    
    const isAuth = localStorage.getItem("accessToken");

     
  const handelScroll = () => {

    if (window.scrollY > 150) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handelScroll)
    handelScroll()
  })
  return (
    <>
      <div className={`app-container ${scroll ? 'main-bg' : ""} `} style={{ backgroundImage: `url(${bg})` }}>
        <Header navbarBg ={scroll} isAuth={isAuth}/>
        <Routes>
          <Route path="/" element={<Home cardOpacity={scroll} downArrow={scroll} />} />
          <Route path="/login" exact element={<Login isAuth={isAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile isAuth={isAuth}/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
