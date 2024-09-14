import Nav from "./Nav"
import Hero from "./Hero"
import { useState } from "react"
function App() {
  const [expand, setExpand] = useState(false)
  return (
    <div className="flex h-screen">
      <Nav expand={expand} setExpand={setExpand} />
      <Hero expand={expand} setExpand={setExpand} />
    </div>
  )
}

export default App
