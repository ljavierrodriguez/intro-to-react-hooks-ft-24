import React, { useEffect, useState } from 'react'
import Test from './Test'

const Estado = () => {
    // String, Number, Boolean, Null, Array, Object
    const [nombre, setNombre] = useState("Luis") // [valor, function] = (valorInicial)
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState(20)

    const [user, setUser] = useState({
        name: 'John',
        lastname: 'Doe'
    })

    useEffect(() => {
        console.log("Componente Renderizado...") // componentDidMount

        return () => { // componentWillUnMount
            console.log("Componente sera eliminado...")
        }

    }, [])

    useEffect(() => { // componentDidUpdate
        console.log("Componente sufrio un cambio....")
    }, [open])

    useEffect(() => {
        console.log("Componente sufrio un cambio....")
    }, [nombre])

    return (
        <>
            <div>Nombre: {nombre}</div>
            <div>
                <p>User:</p>
                <p>Name: {user.name} Lastname: {user.lastname}</p>
                <p>Open: {open ? "Abierto" : "Cerrado"}</p>
            </div>
            {
                open ?
                    (
                        <Test />
                    ) : (
                        <h1>Aqui estara el componente Test</h1>
                    )
            }
        </>
    )
}

export default Estado