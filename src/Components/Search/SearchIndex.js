import React, {Component} from 'react';
import { Input } from 'reactstrap';


export default class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors',
        'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator',
        'laminating sheets', 'protective sheets', 'index cards']
      }
    }
   
  search(e){
    console.log(e)
      }

  render() {
    return (
      <div>
         <h3>Results:</h3>
        <Input onChange={(e) => {this.search(e.target.value)}} type="text" placeholder='Search Here' />
        <ul>
        <li>{this.state.things}</li>  
        {/*<li>{filterdthings.map}((things))</li> */}
        
        </ul>
      </div>
    )
  }
}