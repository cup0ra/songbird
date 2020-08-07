import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class AudioPlayer extends Component {
    state = {
        isPlaying: true,
        volume: '0.5',
        duration: '0',
        currentTime: '0',
        timeValue: '0',
        
    }
interval = () => {
    let q
    if(!this.isPlaying){
       q =  setInterval(() => {
            this.setState({
                currentTime: String(Math.round(this.audioRef.currentTime)),
                timeValue: String(Math.round(this.audioRef.currentTime))
             })
        
        }, 1000);
    } else {
        clearInterval(q);
    }

}
    onPlay = () => {
        this.audioRef.play();
        this.setState(() => ({isPlaying: false}))
        this.interval()
    }
    onPause = () => {
        this.audioRef.pause();
        this.setState(() => ({isPlaying: true})) 
        
    }
    onChangeVolume = () => {
        const volume = document.getElementById("volume")
        this.setState(() => ({volume: volume.value}))
        this.audioRef.volume=this.state.volume
    }
    onChangeTime = () => {
        const time = document.getElementById("time");
        this.setState(() => ({currentTime: time.value}))
        this.audioRef.currentTime = time.value 
        console.log(time.value)
    }

    formatTime(seconds) {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
            .filter(a => a)
            .join(':')
    }

    componentDidMount() {
        const audio = this.audioRef
        
        audio.onloadedmetadata = () => {
            console.log('duration', this.audioRef.duration,this.audioRef.currentTime)
            this.setState({
               duration: String(Math.round(this.audioRef.duration)),
               currentTime: String(Math.round(this.audioRef.currentTime)),
               timeValue: String(Math.round(this.audioRef.currentTime)),
            })
        }
    }

render(){
    console.log('render ')
    return(
        <div className='audio-player'>
        <audio id='audio' ref={(input) => {this.audioRef = input}} src={this.props.element.audio}  style={{ display: 'none' }} />
            {this.state.isPlaying ? (
                <button type="button" className="play" onClick={() => this.onPlay()} >          
                    <FontAwesomeIcon icon='play' />
                </button> 
                ) : (
                <button type="button" className="pause" onClick={() => this.onPause()} >
                    <FontAwesomeIcon icon='pause' />
                </button> 
                )}
                <div className='progress'>
                    <span>{this.formatTime(this.state.currentTime)} </span>
                    <input ref={(ref) => this.myInput = ref} type="range" className='time e-range' id="time" min='0'  max={this.state.duration}   value={this.state.currentTime} onChange={() => this.onChangeTime()}></input>
                    <span>{this.formatTime(this.state.duration)} </span>
                </div>
                <FontAwesomeIcon icon='volume-up' />
                <input type="range" className='volume e-range' id="volume" name="volume"   min="0" max="1" step="0.1" onChange={() => this.onChangeVolume()}></input>
        </div>
    )
}

}
