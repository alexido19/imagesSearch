import {combineReducers} from 'redux';


const songReducer = () => {
    return [
        {artist: 'Burna Boy',title: 'Dangote', duration: '2.14'},
        { artist: 'Imaginary',title: 'Overkill', duration: '6.14'},
        {artist: 'Khalid', title: 'Better', duration: '3.14'},
        {artist: 'Wizkid', title: 'Soco', duration: '3.44'}
    ]
};



const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type ==='SELECTED_SONG'){
       return action.payload
    }
    return selectedSong;
}

export default combineReducers ({
    songs: songReducer,
    selectedSong: selectedSongReducer
})