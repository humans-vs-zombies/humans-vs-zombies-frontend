import React, { useEffect, useState } from "react";

const GameForm = () => {

    const originalGameTitle = "testtitle"
    
    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ gameTitle, setGameTitle ] = useState(originalGameTitle)


    useEffect(() => {
        if (originalGameTitle === gameTitle) {
            setHasUnsavedChanges(false)
        }
        else {
            setHasUnsavedChanges(true)
        }
    }, [ gameTitle ])

    const handleGameTitleChange = ({ target }) => {
        setGameTitle(target.value)
        console.log(target.value);
    }

    return (
        <>
        <p>fdhsaj</p>
            <p>jfsdak: {hasUnsavedChanges ? "true" : "false"}</p>
            <form>
                <fieldset>
                    <label htmlFor="gameTitle">Game title:</label>
                    <input type="text" id="gameTitle" name="gameTitle" value={ gameTitle } onChange={ handleGameTitleChange } />
                </fieldset>

                <button className="Submit-btn Login" type="submit" disabled={ hasUnsavedChanges }>{">"}</button>
            </form>
        </>
    )
}


export default GameForm
