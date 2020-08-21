import React, { Component } from 'react';
import AppHeader from '../header/index';
import birdsData from '../../data/birdsData';
import BlockVictory from '../block-victory/index';
import MainBlock from '../main-block/index';
import ButtonNextRound from '../button-next-round/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import 'regenerator-runtime/runtime';


library.add(fab, faCheckSquare, faCoffee, faPlay, faPause, faVolumeUp)


export default  class App extends Component  {

    state = {
      value: 0,
      score: 0 ,
      done: false,
      victory: false,
    }

  updateState() {

    if(this.state.value < 5 && this.state.done){
      this.setState((state) => ({value:state.value + 1}))
      if(this.state.done){
        this.setState(() => ({done:false}))
      }  
    }
    if(this.state.value === 5){
      this.setState(() => ({victory: true}))
    }
   
  }
  updateStateDone(value) {
      this.setState(() => ({done: true})) 
      this.setState((state) => ({score:state.score + value})) 
  }
 
  restartGame() {
    this.setState(() => ({
      value: 0,
      score: 0 ,
      done: false,
      victory: false,
    })) 
  }

  render(){
    const {value, score,  done, victory} = this.state
    return (
     
      <div className='app'>
        <AppHeader index ={value} score={score}/>
       {victory ? (
         <>
         <BlockVictory restart={() => this.restartGame()}  score={score}/>
         </>
         ) : (
           <> 
          <MainBlock 
          array = {birdsData[value]}
          value={value} 
          done={done} 
          updateDone={(value) => this.updateStateDone(value)}/>
          <ButtonNextRound 
          update={() => this.updateState()}
          done={done} />
          </>
       )} 
      
    </div>
    )
  }

}
 
