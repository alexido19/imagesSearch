//Action Creator

export const selectSong = (song) => {
    //Return an object
    return {
        type: 'SELECTED_SONG',
        payload: song
    };
};