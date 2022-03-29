import CenterChild from "../commonComponents/hoc/CenterChild"

const NotAuthorized = () => {
    return (
        <>
            <CenterChild>
                <h1 className="py-6 text-xl md:text-2xl">401</h1>
            </CenterChild>
            <CenterChild>
                <p>Not authorized</p>
            </CenterChild>
        </>
    )
}


export default NotAuthorized