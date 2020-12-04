import React from "react"
import {TakeNum} from "./TakeNum"

export const Home = (props) => {

    const bakers = ["Anita", "Ginger", "Dusty", "Alice"]
    return (
        <>
        <TakeNum />
        <h1>Hello everyone</h1>
        <p>Welcome to Bay and Marble Doughnut shoppe, {props.user.name} </p>
        <p>We are going to bake somthing great.</p>
        <h2>Our Bakers</h2>
        
        <ul>
            {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
        </ul>
        
        </>
    )
}