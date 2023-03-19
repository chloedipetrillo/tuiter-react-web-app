import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
    initialState: tuits,
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