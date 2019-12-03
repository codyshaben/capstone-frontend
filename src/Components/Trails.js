import React from  'react'

const Trails = (props) => {
    const { runName, resortID, groomed, runType, status, terrainName  } = props.trails


        return(
            <li className="projects">
                <p>{runName}</p>
                <p>{resortID}</p>
                <p>{groomed}</p>
                <p>{runType}</p>
                <p>{status}</p>
                <p>{terrainName}</p>
            </li>
        )

}

export default Trails