import { createSlice } from "@reduxjs/toolkit";
import { exampleTracks } from "../../domain/track";


const tracksSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: exampleTracks,
        numberOfTracks: exampleTracks.length,
    },
    reducers : {
        addTrack: (state, {payload}) => {
            console.log(payload)
            state.tracks.push(payload)
            state.numberOfTracks = state.tracks.length
        },
        deleteLastTrack: state => {
            state.tracks.pop()
            state.numberOfTracks = state.tracks.length
        }
    }
})

export const { addTrack, deleteLastTrack } = tracksSlice.actions

export default tracksSlice