import CenterChild from "../commonComponents/hoc/CenterChild"

const NotFound = () => {
    return (
        <>
            <CenterChild>
                <h1 className="py-6 text-xl md:text-2xl">404</h1>
            </CenterChild>
            <CenterChild>
                <p>Page not found</p>
            </CenterChild>
        </>
    )
}


export default NotFound