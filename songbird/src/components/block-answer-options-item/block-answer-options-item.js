import React, { Component } from 'react';
import correct from '../../assets/audio/correct.mp3'
import wrong from '../../assets/audio/wrong.mp3'

export default class BlockAnswerOptionsItem extends Component{
state = {
   color:'',
   correct: '.'
}
handleClick = () => {
  this.props.update(this.props.items.id-1)
  if(!this.props.done){
    if(this.props.items.id === this.props.numberQuestion){
        this.props.updateDone(this.props.score)
        this.setState({color:'green'})
        this.audio = new Audio(correct);
        this.audio.play();
    }else{
      this.setState({color:'red'}) 
      this.props.updateScore()
      this.audio = new Audio(wrong);
          this.audio.play();
    }
   
}
  }
 
componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState(() => ({color:''}))
    }
  }
    render(){
        const{items, done} = this.props
        let className = "li-btn"
        let style = {backgroundColor: this.state.color}
        console.log(items.id)
        return(
            <li 
            key={ items.id }  
            className="list-group-item d-flex justify-content-start align-items-center"
            onClick={() => this.handleClick()}
            >
            <span className={className} style={style}> </span>
            {items.name}
          </li>
        )
    }

}