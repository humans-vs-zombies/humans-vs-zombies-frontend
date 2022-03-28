import CenterChild from "../commonComponents/hoc/CenterChild"
import GameForm from "./components/GameForm"


const EditGame = () => {

    return (
        <>
            <CenterChild>
                <h1>Edit game Page</h1>
            </CenterChild>
            <main>
                <CenterChild>
                    <GameForm />
                </CenterChild>
            </main>
        </>
    )
}


export default EditGame