import React, {Component} from 'react';
import Bar from '../Bar/Bar';
import './Grid.css'

export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid : [5,10,2,31,25,18,27,50,84,69,35,74,25,15,69,3,45,75]
        };
    }

    bubbleSort(){
        const {grid} = this.state;
        var g = grid.slice();
        var n=grid.length;
        for(var i=0;i<n;i++){
            for(var j=i+1;j<n;j++){
                if(g[i]>g[j]){
                    var t=g[j];
                    g[j]=g[i];
                    g[i]=t;
                    var p = g.slice();
                    var k = i;
                    this.animate(p,k);
                }
            }
        }
    }

    animate(a,k){
        for(var i=0;i<18;i++)
        console.log(`${i} ${a[i]}`);
        console.log("end");
        setTimeout(() => {
            this.setState({grid:a});
            console.log(k);
        }, 500*k);
    }

    newArray(){
        let v = [];
        for(let i=0;i<25;i++)
        v.push(Math.random()*100);
        this.setState({grid:v});
    }

    render(){
        const {grid} = this.state;

        return(
            <div>
                <div className = "grid">
                    {grid.map((val,valIdx) => {
                        return(
                            <Bar key={valIdx} height = {`${5*val}px`}></Bar>
                        );
                    })}
                </div>
                <button onClick = {() => this.bubbleSort()}>BubbleSort</button>
                <button onClick = {() => this.newArray()}>New Array</button>
            </div>
        );
    }
}

const swap = ( a, b) => {
    var t = a;
    a=b;
    b=t;
} 
