import React from 'react'
import { examplePlaylists as playlist } from "../sitebuild/domain/playlist"
const PlaylistsList = ({selectedPl,setSelectedPl}) => {
    return (
        <>
            <h3>Playlists</h3>
            <div className="ui very relaxed selection list">
                {playlist.map(e =>
                    <div className={`item ${selectedPl === e.id ? "active" : ""}`} key={e.id} onClick={()=> setSelectedPl(e.id)}>
                        <i className="large compact disc middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{e.title}</a>
                            <div className="description">{e.tracks.length} songs</div>
                        </div>
                    </div>
                )}

                <div className="item" id="newPlaylist">
                    <i className="large green plus middle aligned icon"></i>
                    <div className="content">
                        <a className="header">New</a>
                        <div className="description">Create a new playlist</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistsList
