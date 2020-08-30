import React, { Component } from 'react';

export default class ButtonNextRound extends Component{
    render(){
        const className = this.props.done ? 'btn btn-primary next-level' : 'btn btn-secondary next-level'
        return (
            <>
                <button  type="button" className={className} onClick={() => this.props.update()}>Next level</button>
            </>
        )
    }
}