import React from 'react'
import { examplePlaylists as pl } from '../sitebuild/domain/playlist'


const PlaylistList = ({selectedPl, setSelectedPl, setSelectedTrack, selectedTrack}) => {
    const handleClick = (e)=> {
        setSelectedPl(e)
        if(selectedTrack && !e.tracks.find(e => e.id === selectedTrack.id)){
            setSelectedTrack(null)
        }
    }
    return (
        <div>
            <h3>Playlists</h3>
            <div className="ui very relaxed selection list">
                {pl.map(e =>
                    <div 
                        className={`item ${selectedPl?.id === e.id ? "active" : ""}`} 
                        key={e.id} 
                        onClick={()=>handleClick(e)}
                    >
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
        </div>
    )
}

export default PlaylistList
