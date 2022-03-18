import React, { useEffect, useState } from "react";

const GameForm = () => {

    const originalGameTitle = "testtitle"

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")
    const [ gameTitle, setGameTitle ] = useState(originalGameTitle)

    useEffect(() => {
        if (originalGameTitle === gameTitle) {
            setHasUnsavedChanges(false)
            setSumbitBtnBgTW("bg-gray-500")
        }
        else {
            setHasUnsavedChanges(true)
            setSumbitBtnBgTW("bg-blue-500 hover:bg-blue-700")
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
                    <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="gameTitle">Game title:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="gameTitle" name="gameTitle" value={ gameTitle } onChange={ handleGameTitleChange } />
                </fieldset>

                <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ hasUnsavedChanges }>Save</button>
            </form>
        </>
    )
}


export default GameForm
