import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gameCreateAttemptAction } from "../../../store/actions/gameActions";


const CreateGameForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm()
    const { gameCreateSuccess, gameCreateError } = useSelector(state => state.gameReducer)

    // Local states
    const [ game, setGame ] =  useState({
        title: "",
        description: "",
        dateFrom: "",
        dateTo: "",
        participants: "25",
    })

    useEffect(() => {
        if (gameCreateSuccess) {
            navigate("/")
        }
    }, [gameCreateSuccess, navigate])

    // Style className constants
    const lableStyle = "block text-lg text-gray-700 font-bold mb-2 mt-6"
    const inputStyle = "shadow appearance-none border rounded w-4/5 max-w-xs ml-4 py-2 px-3 text-gray-700 leading-tight"
    const datetimeStyle = "shadow border text-gray-700 rounded ml-4 w-64 pl-10 py-2 px-3"
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid text-white font-bold cursor-pointer appearance-none rounded h-9 w-16 ml-2 text-center content-center border bg-blue-600 peer-checked:bg-blue-800 focus:outline-none"

    
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

    // Create game
    const onFormSubmit = async () => {
        dispatch(gameCreateAttemptAction(game))
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
        let message = "Input error"
        if (errors.title) {
            if (errors.title.type === "required") {
                message = "Title is required"
            }
        }
        else if (errors.dateFrom) {
            if (errors.dateFrom.type === "required") {
                message = "Start date is required"
            }
        }
        else if (errors.dateTo) {
            if (errors.dateTo.type === "required") {
                message = "End date is required"
            }
        }
        else if (gameCreateError) {
            message = "Unable to create game"
        }
        else {
            return null
        }

        return <span className=" border border-red-700 rounded p-2.5 ml-8 w-64">{ message }</span>
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
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants25" value="25" onChange={ handleParticipantsChange } defaultChecked />
                        <label className={ radioBtnLableStyle } htmlFor="participants25">25</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants50" value="50" onChange={ handleParticipantsChange } />
                        <label className={ radioBtnLableStyle } htmlFor="participants50">50</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants100" value="100" onChange={ handleParticipantsChange } />
                        <label className={ radioBtnLableStyle } htmlFor="participants100">100</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants500" value="500" onChange={ handleParticipantsChange } />
                        <label className={ radioBtnLableStyle } htmlFor="participants500">500</label>
                    </div>
                </fieldset>

                <button className="bg-blue-500 hover:bg-blue-700 ml-4 mt-10 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
                { errorMessage }
            </form>
        </>
    )
}


export default CreateGameForm
