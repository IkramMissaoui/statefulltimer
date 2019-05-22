import React, { Component } from 'react';
import './timer.css';
class Timer extends Component {
    constructor(props){
        super(props)
        this.state={
            h: 0,
            m:0,
            s:0,
            etat:"false"
          }
        }
      timer= ()=>{
      setTimeout(()=>{
        if(this.state.etat==="true" ){
        if(this.state.s===60){
          this.setState({
            s:0,
            m:this.state.m+1
          })
        }else{
          this.setState({
            s:this.state.s+1
          })
        }
       if(this.state.m===60){
        this.setState({
          m:0,
          h:this.state.h+1
        })
       } 
      this.timer() }
      },1000)
      }
      
       reset =()=>{
      this.setState(
      {
        
        h: 0,
        m:0,
        s:0,
        etat:"false" 
      })
      }
     
      etat=()=>{
        if(this.state.etat==="true"){
          this.setState({
            etat:"false"
          })
        }else{
          
          this.setState({
            etat:"true"
          })
          this.timer()
         
        }
       
      }
        render() {
          return (
            <div className='gosdiv'>
            <div className='divT'>
            <div className='div2'>
            <div className='lesdiv'>
             <div className="ss">
             <span>{this.state.h<10?"0"+this.state.h:this.state.h}</span>:
             <span>{this.state.m<10?"0"+this.state.m:this.state.m}</span>:
             <span>{this.state.s<10?"0"+this.state.s:this.state.s}</span>
            </div>
            <div className="div2-1">
                <div id='div21'> <sapn id="span1"><strong>Hour</strong> </sapn></div>
                <div id='div22'><span id="span2"><strong>Minute</strong> </span></div>
                <div id='div23'><span id="span3"><strong>Second</strong> </span></div>
             </div>
            <div className="lesbtn">
               <button className="btn1" onClick={this.etat}>{this.state.etat==="true"?"Stop":"Start"}</button>
               <button className="btn2" onClick={this.reset}>Reset</button>
               </div>
              </div>
              </div>
              </div>
              </div>
          );
        }
      }
export default Timer;