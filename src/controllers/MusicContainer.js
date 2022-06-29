import React, { useState, useEffect } from "react";
import MusicList from "../components/MusicList";

const MusicContainer = () => {


    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongList();
    }, [])

    const getSongList = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(result => result.json())
            .then(songs => setSongs(songs.feed.entry))
    }


    return (
        <div>
            <h2> current top 20</h2>
            <li><MusicList songs={songs} /></li>
        </div>

    )
}









export default MusicContainer;