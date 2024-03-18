import React from 'react'

const TrackList = ({ selectedPl, selectedTrack, setSelectedTrack }) => {
  return (
    selectedPl && <div>
      <h3>{selectedPl.title}</h3>
      <div className="ui very relaxed selection list">
        {selectedPl.tracks.map(e =>
          <div 
            className={`item ${selectedTrack?.id === e.id ? "active" : ""}`} 
            key={e.id}
            onClick={()=> setSelectedTrack(e)}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <a className="header">{e.title}</a>
              <div className="description">{e.artist}</div>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default TrackList
