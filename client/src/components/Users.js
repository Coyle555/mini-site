import React, { useState } from 'react'


function Users() {
    const [results, setResults] = useState()
    const displayData = async () => {
        const dataLink = 'https://gentle-earf-0092.herokuapp.com/api'
        const response = await fetch(dataLink)
        const data = await response.json()
        setResults(data)
        console.log(results)
    }
    return (
        <>
        <a style={{display:'flex', justifyContent:'center', alignContent:'center'}} href='##' onClick={displayData}> click me for users</a>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop: '200px'}} results={results}>
            { (!results) ? '' : results[0].name}
            </div>
        </>
    )
}

export default Users
