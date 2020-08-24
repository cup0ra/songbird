import React, { Component } from 'react';
import level from '../../data/level';


export default class AppHeader extends Component  {

render(){
 const element =  level.map((item,i) => {
    const active = this.props.index === i ? 'page-item active' : 'page-item ';
    return (
      <li key={i} className={active}>
      <a className="page-link" href="/#" >{item}</a>
    </li>
    )
  })
  return (
    <div className='header'> 
    <div className='header__item'>
    <h2>Song<span>Bird</span></h2>
      <div className='score'>Score: {this.props.score} </div>
    </div>
      
    <div>
    <ul className="pagination">
      {element}
    </ul>
    </div>
    </div>

    
)}

  }