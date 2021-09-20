import React, {Component} from 'react';
import { Input } from 'reactstrap';


export default class SearchIndex extends Component {
 
  constructor(props) { 
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors',
        'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator',
        'laminating sheets', 'protective sheets', 'index cards'],
        input: "",
      }
    }
   
include () 
    {
      return(
        <div>
        {this.state.things.includes(this.state.input) ?<p>{this.state.input}</p> :null }
        </div>)}
    
  search(e){
    this.setState({ input: e.target.value})
  
      }

  render() {
   

    return (

      <div>
         <h3>Results:</h3>
         
        <Input value={this.state.input} onChange={(e) => {this.search(e)}} type="text" placeholder='Search Here' /> 
        {this.include()}
        {this.state.things.map((current)=> <p>{current}</p>)}   
        {/* <p> {this.state.input}</p> : null}  */}
        {/* <p> {current}</p> :null}     */}
        <div>
        <ul>
         <li>{this.state.things}</li> 
         </ul>
         </div>
      </div>
    )
  }
}
// 
// {this.state.things.map((current) => <p> {current}</p>)}
{/*  */}