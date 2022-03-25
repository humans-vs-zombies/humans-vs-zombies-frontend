import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameAPI } from "../../../api/GameAPI";
import { gameGetSpecificAttemptAction, gameGetSpecificSuccessAction, gameGetSpesificErrorAction, gameUpdateAttemptAction } from "../../../store/actions/gameActions";


const GameForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {
        gameGetSpecificAttempting,
        gameGetSpecificSuccess, 
        gameGetSpecificError, 
        gameGetSpecificErrorMessage, 
        currentGame, 
        gameUpdateAttempting, 
        gameUpdateSuccess, 
        gameUpdateError, 
        gameNextStateUpdateAttempting, 
        gameNextStateUpdateSuccess, 
        gameNextStateUpdateError } = useSelector(state => state.gameReducer)
    const { currentGameId } = useSelector(state => state.sessionReducer)

    // Local states
    const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    const [ sumbitBtnBgStyle, setSumbitBtnBgTW ] = useState("bg-gray-500")
    const [ game, setGame ] =  useState({
        title: "-",
        description: "",
        dateFrom: "2000-01-01T12:00",
        dateTo: "2000-01-01T12:00",
        participants: "",
        state: "",
        goToNextState: "no",
    })
    const [ currentState, setCurrentState ] = useState("1");
    const [ nextState, setNextState ] = useState("2");

    // Set original game data in input fields
    useEffect(() => {
        dispatch(gameGetSpecificAttemptAction(currentGameId))

        GameAPI.getGame(currentGameId)
            .then(res => {
                let fetchedGame = res.data.payload;
                dispatch(gameGetSpecificSuccessAction(fetchedGame))
                setGame({
                    title: fetchedGame.name,
                    description: fetchedGame.description,
                    dateFrom: fetchedGame.dateFrom.slice(0, -13),
                    dateTo: fetchedGame.dateTo.slice(0, -13),
                    participants: fetchedGame.participants,
                    state: fetchedGame.state,
                    goToNextState: "no",
                })
                setCurrentState(getFormattedState(fetchedGame.state));
                setNextState(getFormattedState(getNextGameState(fetchedGame.state)));
            })
            .catch((error) => {
                dispatch(gameGetSpesificErrorAction("Unable to fetch the game (" + error.message + ")"))
            });
    }, [currentGameId, dispatch])

    // Format states
    const getFormattedState = gameState => {
        switch (gameState) {
            case "CONFIGURATION":
                return "Configuration";
            case "REGISTRATION":
                return "Registration";
            case "IN_PROGRESS":
                return "In progress";
            case "COMPLETE":
                return "Complete";
            default: return "-";
        }
    }

    const getNextGameState = gameState => {
        switch (gameState) {
            case "CONFIGURATION":
                return "REGISTRATION";
            case "REGISTRATION":
                return "IN_PROGRESS";
            case "IN_PROGRESS":
                return "COMPLETE";
            case "COMPLETE":
                return "COMPLETE";
            default: return "-";
        }
    }

    // Style className constants
    const lableStyle = "block text-lg text-gray-700 font-bold mb-2 mt-6"
    const inputStyle = "shadow appearance-none border rounded w-4/5 max-w-xs ml-4 py-2 px-3 text-gray-700 leading-tight"
    const datetimeStyle = "shadow border text-gray-700 rounded ml-4 w-64 pl-10 py-2 px-3"
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid text-white font-bold cursor-pointer appearance-none rounded h-9 w-16 ml-2 text-center content-center border bg-blue-600 peer-checked:bg-blue-800 focus:outline-none"

    // Activate submit/save button if any input field have changed
    useEffect(() => {
        if (currentGame.title === game.title &&
            currentGame.description === game.description &&
            currentGame.dateFrom.slice(0, -13) === game.dateFrom &&
            currentGame.dateTo.slice(0, -13) === game.dateTo &&
            parseInt(currentGame.participants) === parseInt(game.participants) &&
            game.goToNextState === "no") {
            setHasUnsavedChanges(false)
            setSumbitBtnBgTW("bg-gray-500")
        }
        else {
            setHasUnsavedChanges(true)
            setSumbitBtnBgTW("bg-blue-500 hover:bg-blue-700")
        }
    }, [ game, currentGame ])

    // Navigate to home after succsessfull update
    useEffect(() => {
        if ((
            gameUpdateSuccess && game.goToNextState === "no" && !gameNextStateUpdateError) ||
            (gameNextStateUpdateSuccess && game.goToNextState === "yes")) {
            navigate("/")
        }
    }, [gameUpdateSuccess, gameNextStateUpdateSuccess, gameNextStateUpdateError, game.goToNextState, navigate])

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

    const handleNextStateChange = ({ target }) => {
        setGame({
            ...game,
            goToNextState: target.value
        })
    }

    // Save game changes
    const onFormSubmit = async () => {
        dispatch(gameUpdateAttemptAction(currentGameId, game, game.goToNextState))
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
        else if (gameUpdateError) {
            message = "Unable to update game"
        }
        else if (gameNextStateUpdateError) {
            message = "Couldn't go to next state"
        }
        else {
            return null
        }

        return <span className=" border border-red-700 rounded p-2.5 ml-8 w-64">{ message }</span>
    })()


    return (
        <>
            { gameGetSpecificAttempting && 
                <p>Loading...</p>
            }
            { gameUpdateAttempting && 
                <p>Updating game...</p>
            }
            { gameNextStateUpdateAttempting && 
                <p>Updating next state...</p>
            }
            { gameGetSpecificSuccess &&
                <form onSubmit={ handleSubmit(onFormSubmit) }>
                    <fieldset>
                        <label className={ lableStyle } htmlFor="title">Title:</label>
                        <input className={ inputStyle } type="text" id="title" name="title" value={ game.title } { ...register("title", titleConfig) } />
                    </fieldset>
                    <fieldset>
                        <label className={ lableStyle } htmlFor="description">Description:</label>
                        <textarea className={ inputStyle } type="textarea" id="description" name="description" value={ game.description } { ...register("description", descriptionConfig) } />
                    </fieldset>
                    <fieldset>
                        <label className={ lableStyle } htmlFor="dateFrom">Date:</label>
                        <input className={ datetimeStyle } type="datetime-local" id="dateFrom" name="dateFrom" value={ game.dateFrom } { ...register("dateFrom", datetimeConfig) } />
                        
                        <label className="block ml-4 my-1 text-lg" htmlFor="dateTo">to</label>
                        <input className={ datetimeStyle } type="datetime-local" id="dateTo" name="dateTo" value={ game.dateTo } { ...register("dateTo", datetimeConfig) } />
                    </fieldset>
                    <fieldset>
                        <label className={ lableStyle } htmlFor="participants">Max participants:</label>
                        
                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants25" value="25" onChange={ handleParticipantsChange } defaultChecked={25 === currentGame.participants ? "checked" : ""} />
                            <label className={ radioBtnLableStyle } htmlFor="participants25">25</label>
                        </div>

                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants50" value="50" onChange={ handleParticipantsChange } defaultChecked={50 === currentGame.participants ? "checked" : ""} />
                            <label className={ radioBtnLableStyle } htmlFor="participants50">50</label>
                        </div>

                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants100" value="100" onChange={ handleParticipantsChange } defaultChecked={100 === currentGame.participants ? "checked" : ""} />
                            <label className={ radioBtnLableStyle } htmlFor="participants100">100</label>
                        </div>

                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="participantsRadioOptions" id="participants500" value="500" onChange={ handleParticipantsChange } defaultChecked={500 === currentGame.participants ? "checked" : ""} />
                            <label className={ radioBtnLableStyle } htmlFor="participants500">500</label>
                        </div>
                    </fieldset>
                    { currentGame.state !== "COMPLETE" &&
                    <fieldset>
                        <label className={ lableStyle } htmlFor="nextState">Go to next state?<br/> (from "{ currentState }" to "{ nextState }")</label>
                        
                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="nextStateRadioOptions" id="dontGoToNextState" value="no" onChange={ handleNextStateChange } defaultChecked />
                            <label className={ radioBtnLableStyle } htmlFor="dontGoToNextState">No</label>
                        </div>

                        <div className={ radioBtnContainerStyle }>
                            <input className={ radioBtnStyle } type="radio" name="nextStateRadioOptions" id="goToNextState" value="yes" onChange={ handleNextStateChange } />
                            <label className={ radioBtnLableStyle } htmlFor="goToNextState">Yes</label>
                        </div>
                    </fieldset>
                    }

                    <button className={`${sumbitBtnBgStyle} ml-4 mt-4 text-white font-bold py-2 px-4 rounded`} type="submit" disabled={ !hasUnsavedChanges }>Save</button>
                    { errorMessage }
                </form>
            }
            { gameGetSpecificError &&
                <p>{ gameGetSpecificErrorMessage }</p>
            }
        </>
    )
}


export default GameForm
