import React from 'react'

const SongList = ({ selectedPl, selectedSong, setSelectedSong }) => {
    return (
        <>
            <h3>{selectedPl.title}</h3>
            <div className="ui very relaxed selection list">
                {selectedPl.tracks.map(e =>
                    <div className={`item ${e.id===selectedSong?.id ? "active": ""}`} onClick={()=> setSelectedSong(e)} key={e.id}>
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{e.title}</a>
                            <div className="description">{e.artist}</div>
                        </div>
                    </div>)}

            </div>
        </>
    )
}

export default SongList
