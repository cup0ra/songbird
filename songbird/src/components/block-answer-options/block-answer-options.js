import React, { Component } from 'react';
import BlockAnswerOptionsItem from '../block-answer-options-item/index'

export default class BlockAnswerOptions extends Component {
state={
  score: 5,
}

updateScore = () => {
  if(this.state.score > 0){
    this.setState((state) => ({score: state.score - 1}))
  }
}

componentDidUpdate(prevProps) {
  if (this.props.value !== prevProps.value) {
    this.setState(() => ({score: 5}))
     
  }
}
render(){
  const {updateIndex, done, numberQuestion, updateDone, value} = this.props;
  const element = this.props.array.map((item) => {
    return (
     <BlockAnswerOptionsItem  key={item.id}
     items={item} 
     update={updateIndex}
     done={done}
     value={value} 
     numberQuestion={numberQuestion}
     updateDone={updateDone}
     updateScore ={this.updateScore}
     score={this.state.score}/> 
     
    )
  })
    return (
        <div className='block-answer-options'>
                <ul className="list-group todo-list">
                {element}
            </ul>
        </div>
    )
}
}
    
