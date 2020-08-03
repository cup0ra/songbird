import React, { Component } from 'react';
import AppHeader from '../header/index';
import birdsData from '../../data/birdsData';
import MainBlock from '../main-block/index';
import ButtonNextRound from '../button-next-round/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faPlay } from '@fortawesome/free-solid-svg-icons';
import 'regenerator-runtime/runtime';

library.add(fab, faCheckSquare, faCoffee, faPlay)


export default  class App extends Component  {

    state = {
      value: 0,
      score: 0 ,
      done: false,
    }

  updateState() {
    if(this.state.value < 5 && this.state.done){
      this.setState((state) => ({value:state.value + 1}))
      if(this.state.done){
        this.setState(() => ({done:false}))
        console.log('props',this.props)
      }
    }
   
  }
  updateStateDone(value) {
      this.setState(() => ({done: true})) 
      this.setState((state) => ({score:state.score + value})) 
      console.log(this.state.score)
  }


  render(){
    const {value, score,  done} = this.state
    return (
      <div className='app'>
      <AppHeader index ={value} score={score}/>
      <MainBlock 
      array = {birdsData[value]}
      value={value} 
      done={done} 
      updateDone={(value) => this.updateStateDone(value)}/>
      <ButtonNextRound update={() => this.updateState()} />
    </div>
    )
  }

}
 
