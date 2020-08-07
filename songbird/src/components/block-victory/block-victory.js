import React from 'react';

const BlockVictory = ({score}) => {
return(
    <div className='jumbotron block-victory'>
        <h2 >Поздравляем!</h2>
        <p >Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов</p>
        <button  type="button" className="btn btn-primary next-level" >Попробовать еще раз! </button>
    </div>
)
}

export default BlockVictory;