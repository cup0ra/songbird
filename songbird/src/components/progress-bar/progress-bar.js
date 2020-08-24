import React, { Component } from 'react';

export default class ProgressBar extends Component {
    state = {
        duration: null,
        currentTime: '0',
        timeValue: '0', 
    }
    onChangeTime = () => {
        const time = this.InputTime;
        this.setState(() => ({currentTime: time.value}));
        this.props.audio.current.currentTime = time.value; 
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
        this.audio = this.props.audio.current;
        this.audio.onloadedmetadata = (e) => {
            this.setState({
               duration: String(Math.round(e.target.duration)),
               currentTime: String(Math.round(e.target.currentTime)),
               timeValue: String(Math.round(e.target.currentTime)),
            })
        }
       this.audio.onplay = (e) => {
			this.currentTimeInterval = setInterval( () => {
                this.InputTime.value = this.audio.currentTime;
                this.setState({
                    duration: String(Math.round(e.target.duration)),
                    currentTime: String(Math.round(e.target.currentTime)),
                    timeValue: String(Math.round(e.target.currentTime)),
                 })
            }, 500);
        };
        this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
        };
        this.audio.onended = () => {
            this.props.onEndedAudio();
            this.setState(() => ({
                currentTime: '0',
                timeValue: '0',
            })); 
        }
    }
    componentWillUnmount() {
        clearInterval(this.currentTimeInterval);
        this.setState = (state,callback)=>{
            return;
        };
      
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.element !== prevProps.element) {
            clearInterval(this.currentTimeInterval);
        }
      }
render(){
    return(
    <div className='progress'>
        <span>{this.formatTime(this.state.currentTime)} </span>
        <input 
        ref={(ref) => this.InputTime = ref} 
        type="range" 
        className='time e-range'  
        min='0'  
        max={this.state.duration}   
        value={this.state.currentTime} onChange={() => this.onChangeTime()}></input>
        <span>{this.formatTime(this.state.duration)} </span>
    </div>
    )
}
}