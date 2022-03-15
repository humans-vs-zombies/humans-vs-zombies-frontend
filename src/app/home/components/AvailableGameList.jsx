const AvailableGameList = () => {

    return (
        <>
            <main>
                <h2>Available games</h2>
                <table className="border-collapse border-4 min-w-full">
                    <thead className="bg-gray-100">
                        <tr className="border-2">
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Title</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Date</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Participants</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">State</th>
                        </tr>
                    </thead>
                    
                </table>
            </main>
        </>
    )
}


export default AvailableGameList