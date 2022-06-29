import React from "react";
import SongDetails from "./SongDetails";

const MusicList = ({ songs }) => {
    const songsItems = songs.map((song, index) => {
        return <SongDetails song={song} index={index} />

    })

    return (
        <div>
            <ul>
                {songsItems}
            </ul>
        </div>
    )



}

export default MusicList;