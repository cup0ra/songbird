import React, { Component } from 'react';
import BlockAnswerOptions from '../block-answer-options/index'
import BlockDescription from '../block-description/index'
import BlockCurrentQuestion from '../block-current-question/index';

export default class MainBlock extends Component {
    state = {
        index: null,
        color: true,
      }
      updateIndex(value) {
              this.setState(() => ({index:value}))
      }
      componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
          this.setState(() => ({index:null}))
           this.element = this.props.array[Math.floor(Math.random()*this.props.array.length)]
        }
      }
      
      element = this.props.array[Math.floor(Math.random()*this.props.array.length)]
    render(){
        const {index, color} = this.state;
        const {array, done, updateDone, value} = this.props;
       
        
        return(
          <>
          <BlockCurrentQuestion array = {this.element} plug ={done} />
            <div className='main-block'>
            <BlockAnswerOptions 
            array = {array} 
            updateIndex={(value) => this.updateIndex(value)} 
            color={color} 
            done={done}
            value={value} 
            numberQuestion={this.element.id}
            updateDone={updateDone}
            />
            <BlockDescription 
            array = {array} 
            index= {index}
            />
            </div>
            </>
        )
    }
}