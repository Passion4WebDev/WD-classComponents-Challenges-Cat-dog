import React from 'react';
import Dogs from './Dogs';

export default class DogIndex extends React.Component {
    constructor() {
        super()
        this.state = {
        dogList: "",

        }
    }
    componentDidMount() {
        //https://dog.ceo/api/breeds/list/all
        this.fetchDog()
    }
     
   fetchDog = async () => {
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(json =>{
            console.log(json)
                this.setState({ dogList: json.message })
            })
                    .catch(e => console.error(e))
        console.log("Hello")
    }
  
    render() {
        return (
            <div>
                <h1>Dogs Component</h1>
            <img src={this.state.dogList} style={{height:"700px", width: "700px", borderBlockStyle: "200px"}} />
            <button onClick={this.fetchDog}>Fetch Dog</button>

            </div>)
      
    }
}


