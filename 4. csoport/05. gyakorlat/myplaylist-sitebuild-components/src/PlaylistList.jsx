import React from 'react'
import { examplePlaylists as pl } from '../sitebuild/domain/playlist'

const PlaylistList = ({selectedPl, setSelectedPl}) => {
    console.log(selectedPl)
    return (
        <>
            <h3>Playlists</h3>
            <div className="ui very relaxed selection list">
                {pl.map(e =>
                    <div className={`item ${e.id===selectedPl.id ? "active": ""}`} key={e.id} onClick={()=> setSelectedPl(e)}>
                        <i className="large compact disc middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{e.title}</a>
                            <div className="description">{e.tracks.length} songs</div>
                        </div>
                    </div>)}

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

export default PlaylistList
