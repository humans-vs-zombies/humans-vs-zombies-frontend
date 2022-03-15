const AvailableGame = ({ index, game }) => {

    console.log(game.title);
    console.log("Key: " + index);

    return (
        <>
            <tbody>
                <tr className="border">
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
