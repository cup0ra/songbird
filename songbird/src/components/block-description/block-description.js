import React, { Component } from 'react';

export default class BlockDescription extends Component {

render(){
    const {array, index} = this.props;

    return (
      <div className='block-description'>
        {index === null ? (
            <div>Послушайте плеер.
                Выберите птицу из списка
            </div>
            ) : (
                <>
            <div className='block-description__item1'>
                <img className='block-description___img' src={ array[index].image } alt={ array[index].name }/>
                <ul className='block-description__audio'>
                    <li className='block-description__name-bird'><h5>{ array[index].name}</h5></li>
                    <li className='block-description__name-bird-english'><h6>{ array[index].species}</h6></li>
                    <li>
               
                    </li>
            </ul>
            </div>
            <div className='description-bird'>{array[index].description}</div>
                </>
    
    )
    
    }
            
          
      
        </div>
    )
}
}
  