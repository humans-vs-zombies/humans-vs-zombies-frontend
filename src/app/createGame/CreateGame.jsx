import CenterChild from "../commonComponents/hoc/CenterChild"
import CreateGameForm from "./components/CreateGameForm"

const CreateGame = () => {

    return (
        <>
            <h1>Create game Page</h1>
            <main>
                <CenterChild>
                    <CreateGameForm />
                </CenterChild>
            </main>
        </>
    )
}


export default CreateGame