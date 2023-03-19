import { createSlice } from "@reduxjs/toolkit";
import profArray from './profile.json';

const prof = {
    "_id": 123,
    "name": "Chloe DiPetrillo",
    "handle": "@chlodip",
    "profilePicture": "https://imageio.forbes.com/specials-images/imageserve/dv424076/0x0.jpg?format=jpg&width=1200",
    "bannerPicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKfRTuGmudOek5wwrXoC4vAFAANBFv7N17nezL6Ow&s",
    "bio": "It's not easy being this famous. Follow for daily knock-knock jokes!",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "1997-05-18",
    "dateJoined": "4/2009",
    "followingCount": 3,
    "followersCount": 32000,
    "numTuits": 64390
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profArray,
    reducers: {
        saveProf(state, action) {
            state[0] = action.payload
        }
    }
});

export const {saveProf} = profileSlice.actions;
export default profileSlice.reducer;