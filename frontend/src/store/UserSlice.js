import {createSlice} from "@reduxjs/toolkit"
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

const userSlice = createSlice({
    name: 'user',
    initialState: {
        wallet : null,
        seedPhrase : null
    },

    reducers:{

        login(state,action){
            const wallet = action.payload.wallet;
            const seedPhrase = action.payload.seedPhrase;

            state.wallet = wallet;
            state.seedPhrase = seedPhrase;

            cookies.set('wallet',wallet);
            cookies.set('seedPhrase',seedPhrase);
        },

        logout(state,action){
            state.wallet = null;
            state.seedPhrase = null;
            cookies.remove('wallet');
            cookies.remove('seedPhrase');
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;