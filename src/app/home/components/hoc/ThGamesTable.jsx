const ThGamesTable = ({ children, withStyle }) => {
    return (
        <th className={`py-3 self-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase ${withStyle}`}>{ children }</th>
    )
}


export default ThGamesTable
