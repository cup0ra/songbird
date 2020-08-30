import React from 'react';
import image from '../../assets/image/ho.gif'

const BlockVictory = ({score, restart}) => {
return(
    <div className='jumbotron block-victory'>
        <h2 >Поздравляем!</h2>
        {score === 30 ?(
            <p>Вы прошли викторину и набрали максимальное количество баллов <b>30</b></p>
        ) : (
            <p>Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов</p>
        )}
        {score === 30 ?(
        <img className='image-victory' src={image} alt='images'/> 
        ) : (
       <button  type="button" onClick={() => restart()} className="btn btn-primary next-level" >Попробовать еще раз! </button>
        )}
        
    </div>
)
}

export default BlockVictory;