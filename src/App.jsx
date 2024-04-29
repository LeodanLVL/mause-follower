
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("Efecto");
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      
      setPosition({x:clientX,y:clientY})

      console.log(`X: ${clientX} , Y: ${clientY}`)
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    return ()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <main>
      <div className='ball' style={{

        transform: `translate(${position.x}px,${position.y}px)`
      }}></div>

      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? "Desactivar" : "Activar"} Seguir Puntero</button>
    </main>
  )
}

export default App
