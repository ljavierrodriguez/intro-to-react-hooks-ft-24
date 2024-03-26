import React, { useEffect } from 'react'



const Test = () => {


    useEffect(() => { // componentDidMount
        console.log("Componente Renderizado...")


        return () => { // componentWillUnMount
            console.log("Componente sera eliminado...")
        }

    }, [])

    return (
        <h1>Function Component</h1>
    )
}


/* class Test extends React.Component {

    componentDidMount(){
        console.log("Componente Renderizado...")
    }

    componentDidUpdate(){
        console.log("Componente ha sido actualizado...")
    }

    componentWillUnmount(){
        console.log("Componente sera eliminado...")
    }


    render(){
        return (
            <h1>Class Component</h1>
        )
    }
} */

export default Test