const AvailableGame = ({ index, game }) => {

    let rowBg = index % 2 === 0 ? "" : "bg-gray-100"

    return (
        <>
            <tbody>
                <tr className={`border ${rowBg} hover:bg-gray-200 cursor-pointer`}>
                    <td className="py-2 px-6 text-s text-left">{ game.title }</td>
                    <td className="py-2 px-6 text-s text-left">{ game.date }</td>
                    <td className="py-2 px-6 text-s text-left">{ game.participants}</td>
                    <td className="py-2 px-6 text-s text-left">{ game.state }</td>
                </tr>
            </tbody>
        </>
    )
}


export default AvailableGame
