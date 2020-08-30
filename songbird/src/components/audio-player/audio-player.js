import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from '../progress-bar/index'



export default class AudioPlayer extends Component {
    constructor(){
        super()
        this.audio = React.createRef()
    }
    state = {
        isPlaying: true,
        volume: '1',

    }

    onPlay = () => {
        this.audio.current.play();
        this.setState(() => ({isPlaying: false}));
        
    }
    onPause = () => {
        this.audio.current.pause();
        this.setState(() => ({isPlaying: true})); 
        
    }
    onChangeVolume = () => {
        const volume = this.InputVolume;
        this.setState(() => ({volume: volume.value}));
        this.audio.current.volume=this.state.volume;
    }
   onEndedAudio() {
    this.setState(() => ({isPlaying: true})); 
    } 

    componentDidUpdate(prevProps) {
        if (this.props.done !== prevProps.done) {
            this.setState(() => ({isPlaying: true})); 
            this.audio.current.pause();
        }
        if (this.props.element !== prevProps.element) {
            this.setState(() => ({isPlaying: true})); 
            
        }
      }
  
render(){
    return(
        <div className='audio-player'>
            
        <audio key={this.props.keys} id='audio' ref={this.audio} src={this.props.element.audio}  style={{ display: 'none' }} /> 
            {this.state.isPlaying ? (
                <button type="button" className="play" onClick={() => this.onPlay()} >          
                    <FontAwesomeIcon icon={["far", "play-circle"]}/>
                </button> 
                ) : (
                <button type="button" className="pause" onClick={() => this.onPause()} >
                    <FontAwesomeIcon icon={["far", "pause-circle"]}/>
                </button> 
                )}
                <ProgressBar 
                audio={this.audio} 
                onEndedAudio={() => this.onEndedAudio()}
                element={this.props.element}/>
                <FontAwesomeIcon icon='volume-up' />
                <input 
                ref={(ref) => this.InputVolume = ref} 
                type="range" 
                className='volume e-range'  
                name="volume"  
                 min="0" 
                 max="1" 
                 step="0.1" onChange={() => this.onChangeVolume()}></input>
        </div>
    )
}

}
