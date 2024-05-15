import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deck: [],
    hands: {
       player: [],
       dealer: []
    },
    isGameStarted: false,
    isPlayerRoundDone: false,
    roundWinner: null,
    winnings: {
       player: 0,
       dealer: 0
    }
 }

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    new_game: (state)=> {
        state = initialState
        state.deck = _.shuffle(Array.from(Array(51).keys()))
    },
    next_card: (state, { player }) => {
      state.hands[player].push(state.deck.pop())
    },
    player_finished: (state) => {
      state.isPlayerRoundDone = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = gameSlice.actions

export default gameSlice.reducer