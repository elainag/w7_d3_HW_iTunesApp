import React from "react";

const SongDetails = ({ song, index }) => {
    const link = song.link[0].attributes.href
    return (

        <div>
            <h5># {index + 1}</h5>
            <img src={song['im:image'][2]['label']} alt='song image' />
            <p>{song['im:name']['label']}</p>
            <p>{song['im:artist']['label']}</p>

            <a href={link} >Listen Now </a>
        </div>
    )
}



export default SongDetails;