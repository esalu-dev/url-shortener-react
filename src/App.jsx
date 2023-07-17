import MainHeader from "./components/MainHeader.jsx"
import { MainContainer } from "./components/MainContainer.jsx"
import { DarkModeButton } from "./components/DarkModeButton.jsx"
import { useState } from "react"
function App() {
  const [state, setState] = useState("")

  const toggleDark = () =>{
    if(state==="dark"){
      setState("")
    }
    else{
      setState("dark")
    }
  } 

  return (
    <>
      <main className={`${state} bg-gradient-to-tr from-green-200 via-green-300 to-blue-500 flex h-screen w-screen justify-center items-center`}>
        <MainContainer/>
        <DarkModeButton onToggle={toggleDark}/>
      </main>
    </>
     )
}

export default App
