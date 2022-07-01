import React, {Component} from 'react';
import Bar from '../Bar/Bar';
import './Grid.css'

export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid : [],
        };
    }

    componentDidMount(){
        this.newArray();
    }

    bubbleSort(){
        const {grid} = this.state;
        var g = grid.slice();
        var n=grid.length;
        for(var i=0;i<n;i++){
            let m = 0;
            for(var j=0;j<n-i;j++){
                if(g[m]<g[j])
                m=j;
            }
            if(g[m]>g[n-i-1]){
                var t=g[n-i-1];
                g[n-i-1]=g[m];
                g[m]=t;
                var p = g.slice();
                var k = i;
                this.animate(p,k);
            }
        }
    }

    quickSort(){
        const {grid} = this.state;
        var g = grid.slice();
        var l=0,h=g.length;
        this.partition(g,l,h-1,0);
    }

    
    partition(g,l,h,i){
        
        if(l>=h)
        return;
        var k=l-1;
        for(var j=l;j<=h;j++){
            if(g[j]<=g[h]){
                k++;
                var t = g[k];
                g[k]=g[j];
                g[j]=t;
            }
        }
        this.setState({grid:g});
        setTimeout(() => {
            this.partition(g,l,k-1,i+1);
            this.partition(g,k+1,h,i+2);
        }, 500);
    }

    animate(a,k){
        setTimeout(() => {
            this.setState({grid:a});
        }, 500*k);
    }

    newArray(){
        let v = [];
        for(let i=0;i<100;i++){
            var t = Math.random()*100;
            t = Math.trunc(t);
            v.push(t);
        }
        this.setState({grid:v});
    }

    render(){
        const {grid} = this.state;

        return(
            <div>
                <div className = "grid">
                    {grid.map((val,valIdx) => {
                        return(
                            <Bar id={valIdx} key={valIdx} height = {5*val}></Bar>
                        );
                    })}
                </div>
                <button onClick = {() => this.bubbleSort()}>BubbleSort</button>
                <button onClick = {() => this.quickSort()}>quickSort</button>
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
