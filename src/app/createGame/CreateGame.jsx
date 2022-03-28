import CenterChild from "../commonComponents/hoc/CenterChild"
import CreateGameForm from "./components/CreateGameForm"

const CreateGame = () => {

    return (
        <>
            <CenterChild>
                <h1 className="">Create Game</h1>
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