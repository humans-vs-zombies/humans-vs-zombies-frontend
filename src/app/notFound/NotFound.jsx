import CenterChild from "../commonComponents/hoc/CenterChild"

const NotFound = () => {
    return (
        <>
            <CenterChild>
                <h1>404</h1>
            </CenterChild>
            <CenterChild>
                <p>Page not found</p>
            </CenterChild>
        </>
    )
}


export default NotFound