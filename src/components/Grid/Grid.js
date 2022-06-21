import React, {Component} from 'react';
import Bar from '../Bar/Bar';
import './Grid.css'

export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid : [5,10,2,31,25,18,27]
        };
    }

    render(){
        const {grid} = this.state;

        return(
            <div className = "grid">
                {grid.map((val) => {
                    return(
                        <Bar style = 'height:"$val"'></Bar>
                    );
                })}
            </div>
        );
    }
}
