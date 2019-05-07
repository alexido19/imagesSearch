import React from 'react';
import {connect} from 'react-redux';


const SongDetail = ({song}) => {
    console.log(song)
    if (!song) {
        return <div>Select a Song</div>
    }
   
    return (
        <div>
            <h3>
                Now Playing:
            </h3>
            <p>Artist: {song.artist}</p>
            <br/>
            <p>Title: {song.title}</p>
            <br/>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);