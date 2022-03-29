import CenterChild from "../commonComponents/hoc/CenterChild"

const NotAuthorized = () => {
    return (
        <>
            <CenterChild>
                <h1>401</h1>
            </CenterChild>
            <CenterChild>
                <p>Not authorized</p>
            </CenterChild>
        </>
    )
}


export default NotAuthorized