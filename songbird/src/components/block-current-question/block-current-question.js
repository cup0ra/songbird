import React, { Component } from 'react';
import bird from '../../assets/image/bird.jpg';
import AudioPlayer from '../audio-player/index'

export default class BlockCurrentQuestion extends Component {
render(){

    console.log('1')
    const element = this.props.array
    const image = this.props.plug === false ? bird : element.image;
    const nameBird = this.props.plug === false ? '******' : element.name;
    return (
        <div className='block-current-question'>
            <img className='block-current-question___img' src={ image } alt={ element.name}/>
            <ul className='block-current-question__audio'>
                <li className='block-current-question__name-bird'><h4>{nameBird}</h4></li>
                <li>
                    <AudioPlayer element={element}/> 
                </li>
            </ul>
        </div>
    )
}
}
    

