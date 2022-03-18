import React, { useEffect, useState } from "react";

const GameForm = () => {

    const originalGameTitle = "testtitle"
    const originalGameDescription = "Jk"
    const originalGameDateFrom = "2022-04-01T12:00"
    const originalGameDateTo = "2022-04-07T12:00"

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")

    const [ game, setGame ] =  useState({
        title: originalGameTitle,
        description: originalGameDescription,
        dateFrom: originalGameDateFrom,
        dateTo: originalGameDateTo,
    })

    useEffect(() => {
        if (originalGameTitle === game.title &&
            originalGameDescription === game.description &&
            originalGameDateFrom === game.dateFrom &&
            originalGameDateTo === game.dateTo) {
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
                    <label className="block text-lg text-gray-700 font-bold mb-2 mt-6" htmlFor="title">Game title:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight" type="text" id="title" name="title" value={ game.title } onChange={ handleOnInputChange } />
                </fieldset>
                <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2 mt-6" htmlFor="description">Game description:</label>
                    <input className="shadow appearance-none border rounded w-4/5 ml-4 py-2 px-3 text-gray-700 leading-tight" type="text" id="description" name="description" value={ game.description } onChange={ handleOnInputChange } />
                </fieldset>
                <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2 mt-6" htmlFor="dateFrom">Game date:</label>
                    <input className="shadow border text-gray-700 rounded ml-4 w-64 pl-10 py-2 px-3" type="datetime-local" id="dateFrom" name="dateFrom" value={ game.dateFrom } onChange={ handleOnInputChange } />
                    
                    <label className="block ml-4 my-1 text-lg" htmlFor="dateTo">to</label>
                    <input className="shadow border text-gray-700 rounded ml-4 w-64 pl-10 py-2 px-3" type="datetime-local" id="dateTo" name="dateTo" value={ game.dateTo } onChange={ handleOnInputChange } />
                </fieldset>
                <fieldset>
                    <label className="block text-lg text-gray-700 font-bold mb-2 mt-6" htmlFor="participants">Game participants:</label>
                    
                    <div className="inline-block">
                        <input className="hidden peer" type="radio" name="participantsRadioOptions" id="participants10" value="option1" />
                        <label className="inline-grid text-gray-700 cursor-pointer appearance-none rounded h-8 w-16 text-center content-center border bg-blue-400 peer-checked:bg-blue-600 focus:outline-none" htmlFor="participants10">10</label>
                    </div>

                    <div className="inline-block">
                        <input className="hidden peer" type="radio" name="participantsRadioOptions" id="participants25" value="option2" />
                        <label className="inline-grid text-gray-700 cursor-pointer appearance-none rounded h-8 w-16 text-center content-center border bg-blue-400 peer-checked:bg-blue-600 focus:outline-none" htmlFor="participants25">25</label>
                    </div>                    
                </fieldset>

                <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ !hasUnsavedChanges }>Save</button>
            </form>
        </>
    )
}


export default GameForm
