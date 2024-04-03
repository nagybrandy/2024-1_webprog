import React from 'react'
import { examplePlaylists as playlist } from "../sitebuild/domain/playlist"
const SongList = ({ selectedPl, selectedSong, setSelectedSong }) => {
    const pl = playlist.find(e => e.id === selectedPl)
    return (
        <>
            <h3>{pl.title}</h3>
            <div className="ui very relaxed selection list">
                {pl.tracks.map(e =>
                    <div className={`item ${selectedSong === e.id ? "active" : ""}`} key={e.id} onClick={()=> setSelectedSong(e.id)}>
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{e.title}</a>
                            <div className="description">{e.artist}</div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default SongList
