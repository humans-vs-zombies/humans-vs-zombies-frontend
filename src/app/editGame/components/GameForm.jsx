import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const GameForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm()

    // Values before they are edited
    const originalGameTitle = "test title"
    const originalGameDescription = "test description"
    const originalGameDateFrom = "2022-04-01T12:00"
    const originalGameDateTo = "2022-04-07T12:00"
    const originalGameParticipants = "50"
    const originalGameState = "3"

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")
    const [ game, setGame ] =  useState({
        title: originalGameTitle,
        description: originalGameDescription,
        dateFrom: originalGameDateFrom,
        dateTo: originalGameDateTo,
        participants: originalGameParticipants,
        state: originalGameState,
    })

    // Style className constants
    const lableStyle = "block text-lg text-gray-700 font-bold mb-2 mt-6"
    const inputStyle = "shadow appearance-none border rounded w-4/5 max-w-xs ml-4 py-2 px-3 text-gray-700 leading-tight"
    const datetimeStyle = "shadow border text-gray-700 rounded ml-4 w-64 pl-10 py-2 px-3"
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid text-white font-bold cursor-pointer appearance-none rounded h-9 w-16 ml-2 text-center content-center border bg-blue-600 peer-checked:bg-blue-800 focus:outline-none"
    const selectStyle = "form-select appearance-none w-64 px-3 py-2 ml-4 shadow text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

    useEffect(() => {
        if (originalGameTitle === game.title &&
            originalGameDescription === game.description &&
            originalGameDateFrom === game.dateFrom &&
            originalGameDateTo === game.dateTo &&
            originalGameParticipants === game.participants &&
            originalGameState === game.state) {
            setHasUnsavedChanges(false)
            setSumbitBtnBgTW("bg-gray-500")
        }
        else {
            setHasUnsavedChanges(true)
            setSumbitBtnBgTW("bg-blue-500 hover:bg-blue-700")
        }
    }, [ game ])

    // Event handlers
    const handleOnInputChange = ({ target }) => {
        setGame({
            ...game,
            [target.id]: target.value
        })
    }

    const handleParticipantsChange = ({ target }) => {
        setGame({
            ...game,
            participants: target.value
        })
    }

    const handleGameStateChange = ({ target }) => {
        setGame({
            ...game,
            state: target.value
        })
    }

    // Save game changes
    const onFormSubmit = async () => {
        console.log(game.title);
    }

    // Form input requirements
    const titleConfig = {
        required: true,
        onChange: handleOnInputChange,
    }

    const descriptionConfig = {
        required: false,
        onChange: handleOnInputChange,
    }

    const datetimeConfig = {
        required: true,
        onChange: handleOnInputChange,
    }

    // Render function
    // Check if the input follows the requirements, if not -> show corresponding error-message
    const errorMessage = (() => {
        if (errors.title) {
            if (errors.title.type === "required") {
                return <span>Title is required</span>
            }
        }
        else if (errors.dateFrom) {
            if (errors.dateFrom.type === "required") {
                return <span>Start date is required</span>
            }
        }
        else if (errors.dateTo) {
            if (errors.dateTo.type === "required") {
                return <span>End date is required</span>
            }
        }
        else {
            return null
        }
    })()


    return (
        <>
            <form onSubmit={ handleSubmit(onFormSubmit) }>
                <fieldset>
                    <label className={ lableStyle } htmlFor="title">Game title:</label>
                    <input className={ inputStyle } type="text" id="title" name="title" value={ game.title } { ...register("title", titleConfig) } />
                </fieldset>
                <fieldset>
                    <label className={ lableStyle } htmlFor="description">Game description:</label>
                    <textarea className={ inputStyle } type="textarea" id="description" name="description" value={ game.description } { ...register("description", descriptionConfig) } />
                </fieldset>
                <fieldset>
                    <label className={ lableStyle } htmlFor="dateFrom">Game date:</label>
                    <input className={ datetimeStyle } type="datetime-local" id="dateFrom" name="dateFrom" value={ game.dateFrom } { ...register("dateFrom", datetimeConfig) } />
                    
                    <label className="block ml-4 my-1 text-lg" htmlFor="dateTo">to</label>
                    <input className={ datetimeStyle } type="datetime-local" id="dateTo" name="dateTo" value={ game.dateTo } { ...register("dateTo", datetimeConfig) } />
                </fieldset>
                <fieldset>
                    <label className={ lableStyle } htmlFor="participants">Game participants:</label>
                    
                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants25" value="25" onChange={ handleParticipantsChange } defaultChecked={"25" === game.participants ? "checked" : ""} />
                        <label className={ radioBtnLableStyle } htmlFor="participants25">25</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants50" value="50" onChange={ handleParticipantsChange } defaultChecked={"50" === game.participants ? "checked" : ""} />
                        <label className={ radioBtnLableStyle } htmlFor="participants50">50</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants100" value="100" onChange={ handleParticipantsChange } defaultChecked={"100" === game.participants ? "checked" : ""} />
                        <label className={ radioBtnLableStyle } htmlFor="participants100">100</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants500" value="500" onChange={ handleParticipantsChange } defaultChecked={"500" === game.participants ? "checked" : ""} />
                        <label className={ radioBtnLableStyle } htmlFor="participants500">500</label>
                    </div>
                </fieldset>
                <fieldset>
                    <label className={ lableStyle } htmlFor="state">Game state:</label>
                    <select className={ selectStyle } defaultValue={ originalGameState } onChange={ handleGameStateChange }>
                        <option value="1" disabled={ originalGameState > 1 }>Configuration</option>
                        <option value="2" disabled={ originalGameState > 2 }>Registration</option>
                        <option value="3" disabled={ originalGameState > 3 }>In progress</option>
                        <option value="4" disabled={ originalGameState > 4 }>Complete</option>
                    </select>
                </fieldset>

                <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ !hasUnsavedChanges }>Save</button>
                { errorMessage }
            </form>
        </>
    )
}


export default GameForm
