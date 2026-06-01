import { Route, Routes } from "react-router-dom"
import MainPage from "./Pages/MainPage"
import { useState } from "react"
import ProjectDetails from "./Pages/ProjectDetails"

function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project-details/:index" element={<ProjectDetails/>} />
      </Routes>
    </div>
  )
}

export default App



