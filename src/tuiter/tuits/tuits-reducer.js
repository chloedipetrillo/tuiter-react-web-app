import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "Rock",
    "handle": "@rock",
    "image": "https://betterpet.com/wp-content/uploads/2022/08/Shih-tzu-funfacts.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "This is the default topic!",
    "time": "now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        //[createTuitThunk.fulfilled]:
           // (state, { payload }) => {
           //     state.loading = false
           //     state.tuits.push(payload)
          //  },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.unshift({
                    ...payload,
                    ...templateTuit,
                })
            },

        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }




    },

    reducers: {
        likeTuit(state, action) {
            const likeIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[likeIndex].liked = true;
            state[likeIndex].likes += 1;

        },

        unlikeTuit(state, action) {
            const unlikeIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[unlikeIndex].liked = false;
            state[unlikeIndex].likes -= 1;

        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },


    }
});

export const {likeTuit, unlikeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;