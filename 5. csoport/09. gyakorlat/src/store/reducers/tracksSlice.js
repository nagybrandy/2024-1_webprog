import { createSlice } from "@reduxjs/toolkit";
import { exampleTracks } from "../../domain/track";

const initialState =  {
    tracks: exampleTracks,
    numberOfTracks: exampleTracks.length
}

const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers : {
        addTrack : (state, {payload}) => {
            console.log(payload)
            state.tracks.push(payload)
            state.numberOfTracks = state.tracks.length
        },
        removeLastTrack : (state) => {
            state.tracks.pop()
            state.numberOfTracks = state.tracks.length
        }
    }
})

export const {addTrack, removeLastTrack} = tracksSlice.actions
export default tracksSlice.reducer