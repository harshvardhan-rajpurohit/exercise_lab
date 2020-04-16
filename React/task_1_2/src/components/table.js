import React, { Component } from 'react'
import './tasks.css'

 

export default class Table extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             fname:"",
             lname:""
        }
        this.state.arr=[{fname:"Harshvardhan",lname:"Rajpurohit"},{fname:"Vedant",lname:"Rajpurohit"}]
    }

    fnameChange=(event)=>{
        this.setState({
            fname:event.target.value
        })
    }

    lnameChange=(event)=>{
        this.setState({
            lname:event.target.value
        })
    }

    oldVal={};
    edit = (event,item) => {
    console.log("EDITING");
        document.getElementById("fname").value=item.fname;
        document.getElementById("lname").value=item.lname;
        document.getElementById("addBtn").innerText="Update";
        this.oldVal=item;
    }
  
    remove = (event,item) => {    
        var array = [...this.state.arr]; // make a new copy of array instead of mutating the same array directly. 
        var index = array.indexOf(item)
        array.splice(index, 1);
        this.setState({arr: array});
    }


    submitForm=event=>{
        if(document.getElementById("addBtn").innerText==="Add"){
            if(this.state.fname.length<=0 && this.state.lname.length<=0){
                alert("Please enter data in the fields!");
            }
            else {
                var array = [...this.state.arr];
                let value = {fname:this.state.fname,lname:this.state.lname};
                array.push(value);
                this.setState({arr:array});
                event.preventDefault();
            }
        }
        else {
            if(this.state.fname.length<=0 && this.state.lname.length<=0){
                alert("Please enter data in the fields!");
            }
            else { 
                if(this.oldVal.fname.length>0){
                    var up_arr = [...this.state.arr];
                    let value = {fname:this.state.fname,lname:this.state.lname};
                    var index = up_arr.indexOf(this.oldVal)
                    up_arr.splice(index,1,value);
                    event.preventDefault();
                    this.setState({arr:up_arr});
                    document.getElementById("fname").value=null;
                    document.getElementById("lname").value=null;
                    document.getElementById("addBtn").innerText="Add";
                }                
            }
        }

    }
    
    render() {
        return (
            <div className="table_sec">
                <hr/>
                <center>
                <div>
                    <h3>Table</h3>

                    <form id="mForm" className="form-inline mid" onSubmit={this.submitForm}>
                        <div className="form-group ">
                            <input type="text" className="form-control"  value={this.state.fname} id="fname" placeholder="Firstname" onChange={this.fnameChange}/> &nbsp;&nbsp;
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.lname} id="lname" placeholder="lastname" onChange={this.lnameChange}/>&nbsp;&nbsp;
                        </div>
                        <button type="submit" className="btn btn-primary"  id="addBtn">Add</button>
                    </form>   
                </div>
                </center>
                <div>
                    <br/>

                    <table id="mTable" >
                       <tbody id="tBody">
                            {this.state.arr.map((item)=>{
                                return (
                                    <tr key={item.fname}>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td><button className="btn btn-primary" onClick={(event) => this.edit(event, item)}>Edit</button></td>
                                        <td><button className="btn btn-danger"onClick={(event) => this.remove(event, item)}>Delete</button></td>
                                    </tr>
                                )
                            })}

                       </tbody>
                    </table>    
                </div>
            </div>            
        )
    }
}
