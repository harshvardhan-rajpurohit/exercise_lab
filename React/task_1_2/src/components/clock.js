import React,{ Component } from "react";
import './tasks.css';

class Clock extends Component{

    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    constructor(props) {
        super(props)
        this.state={
            date: new Date(),
            time: new Date()
        }
    }

    
    componentDidMount(){
        this.timerID = setInterval(
            ()=>{
                this.tick();
            }
            ,1000
        )
    }

    tick=()=>{
        this.setState({
            time: new Date()
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                    </div>
                    <div className="col-lg">
                        <center>
                            <h5 className="middle">{this.days[this.state.date.getUTCDay()]}</h5>
                            <h2>{this.state.time.toLocaleTimeString('en-US')} </h2>
                            <h5> {this.months[this.state.date.getMonth()]} {this.state.date.getDate()} {this.state.date.getFullYear()}</h5>
                        </center>
                    </div>
                    <div className="col-lg">
                    </div>
                </div>
            </div>
        )
    }

    
}
export default Clock;