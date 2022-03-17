const GameForm = () => {


    const handleGameTitleChange = ({ target }) => {
        console.log(target.value);
    }

    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="gameTitle">Game title:</label>
                    <input type="text" id="gameTitle" name="gameTitle" value="John" onChange={ handleGameTitleChange } />
                </fieldset>
            </form>
        </>
    )
}


export default GameForm
