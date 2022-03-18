import React, { useEffect, useState } from "react";

const GameForm = () => {

    const originalGameTitle = "testtitle"
    const originalGameDescription = "Jk"

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")
    const [ gameTitle, setGameTitle ] = useState(originalGameTitle)
    const [ gameDescription, setGameDescription ] = useState(originalGameDescription)

    useEffect(() => {
        if (originalGameTitle === gameTitle &&
            originalGameDescription === gameDescription) {
            setHasUnsavedChanges(false)
            setSumbitBtnBgTW("bg-gray-500")
        }
        else {
            setHasUnsavedChanges(true)
            setSumbitBtnBgTW("bg-blue-500 hover:bg-blue-700")
        }
    }, [ gameTitle, gameDescription ])

    const handleGameTitleChange = ({ target }) => {
        setGameTitle(target.value)
        console.log(target.value);
    }

    const handleGameDescriptionChange = ({ target }) => {
        setGameDescription(target.value)
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
                <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="gameDescription">Game description:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="gameDescription" name="gameDescription" value={ gameDescription } onChange={ handleGameDescriptionChange } />
                </fieldset>
                

                <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ !hasUnsavedChanges }>Save</button>
            </form>
        </>
    )
}


export default GameForm
