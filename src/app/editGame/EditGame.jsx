import CenterChild from "../commonComponents/hoc/CenterChild"
import GameForm from "./components/GameForm"


const EditGame = () => {

    return (
        <>
            <CenterChild>
                <h1 className="py-6 text-xl md:text-2xl">Edit game Page</h1>
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