import React, { useEffect, useState } from "react";

const GameForm = () => {

    const originalGameTitle = "testtitle"
    const originalGameDescription = "Jk"

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")

    const [ game, setGame ] =  useState({
        title: originalGameTitle,
        description: originalGameDescription,
    })

    useEffect(() => {
        if (originalGameTitle === game.title &&
            originalGameDescription === game.description) {
            setHasUnsavedChanges(false)
            setSumbitBtnBgTW("bg-gray-500")
        }
        else {
            setHasUnsavedChanges(true)
            setSumbitBtnBgTW("bg-blue-500 hover:bg-blue-700")
        }
    }, [ game ])

    const handleOnInputChange = ({ target }) => {
        setGame({
            ...game,
            [target.id]: target.value
        })
    }


    return (
        <>
        <p>fdhsaj</p>
            <p>jfsdak: {hasUnsavedChanges ? "true" : "false"}</p>
            <form>
            <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="title">Game title:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="title" name="title" value={ game.title } onChange={ handleOnInputChange } />
                </fieldset>
                <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="description">Game description:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="description" name="description" value={ game.description } onChange={ handleOnInputChange } />
                </fieldset>
                

                <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ !hasUnsavedChanges }>Save</button>
            </form>
        </>
    )
}


export default GameForm
