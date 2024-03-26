import React, { useEffect, useState } from 'react'
import Button from './components/Button'



const App = (props) => {

    const [nombre, setNombre] = useState(props.name)

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const handleClick = (evento) => {
        console.log(evento)
        console.log("Haciendo click en el botón")
        //setOpen(open ? false : true)
        setOpen(!open)
    }

    const cambiarNombre = (e, nombre) => {
        console.log(e)
        setNombre(nombre)
    }

    useEffect(() => {

        setNombre("Gabriela")

    }, [])

    return (
        <>
            <p>Nombre: {nombre}</p>

            <input className='form-control' type="text" onChange={(e) => setNombre(e.target.value)} />

            <button
                className={"btn btn-sm " + (open ? "btn-danger" : "btn-success")}
                onClick={handleClick}
            >{open ? "Cerrar" : "Abrir"}</button>
            <button
                className={"btn btn-sm " + (open2 ? "btn-danger" : "btn-success")}
                onClick={function (evento) {
                    console.log(evento)
                    console.log("Haciendo click en el botón")
                    //setOpen(open ? false : true)
                    setOpen2(!open2)
                }}
            >{open2 ? "Cerrar" : "Abrir"}</button>

            <button className="btn btn-primary" onClick={(e) => {
                cambiarNombre(e, "Luis")
            }}>Cambiar Nombre</button>


            <Button className={"btn btn-sm btn-primary"} onClick={() => {
                console.log("Button Primary")
                setNombre("Hugo")
            }}><i class="bi bi-info-circle"></i> Primary</Button>

            <Button className={"btn btn-sm btn-warning"} onClick={() => {
                console.log("Button Warning")
                setNombre("Paco")
            }}><i class="bi bi-info-circle"></i> Warning</Button>

            <Button className={"btn btn-sm btn-danger"} onClick={() => {
                console.log("Button Danger")
                setNombre("Luis")
            }} text={"Danger"} />

        </>
    )
}

export default App