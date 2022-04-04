import React, { useState }  from "react";

export default function ArraysEx( ){
    const [colors, setColors] = useState(["red", "blue", "yellow"])
    const [pets, setPets] = useState([
        {
            name: "Bongus",
            type: "Dog",
            id: 1,
        },
        {
            name: "Bongus Jr",
            type: "???",
            id: 2
        },
        {
            name: "Hank",
            type: "turtle",
            id: 3
        }
    ])
    function addColor(color: string): void {
        setColors(prev => [... prev, color])
    }
    return (
        <div>
        <ol>
            {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ol>
        <div className = "Buttons">
        <button id="button" onClick = {() => addColor("Green")}>Add green</button>
        <button id = "button" onClick = {() => addColor("blue")}> Add Blue</button>
        <button id = "button" onClick = {() => addColor("Violet")}> Add violet</button> 
        </div>
        <div className = "PetBox">
        <table>
        <tr>
                    <th>Name</th>
                    <th>Type</th>    
            </tr>
            {pets.map(pet => <tr key = {pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                </tr>
                )}
                </table>
        </div>
        </div>
    )
}