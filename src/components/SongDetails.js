import React from "react";

const SongDetails = ({ song, index }) => {
    const link = song.link[0].attributes.href
    return (
        <li>
            <a href={link} >{song.title.label} </a>
        </li>
    )
}



export default SongDetails;