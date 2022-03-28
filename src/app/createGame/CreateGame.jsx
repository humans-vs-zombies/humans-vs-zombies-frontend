import CenterChild from "../commonComponents/hoc/CenterChild"
import CreateGameForm from "./components/CreateGameForm"

const CreateGame = () => {

    return (
        <>
            <CenterChild>
                <h1 className="py-6 text-xl md:text-2xl">Create a New Game</h1>
            </CenterChild>
            <main>
                <CenterChild>
                    <CreateGameForm />
                </CenterChild>
            </main>
        </>
    )
}


export default CreateGame