import React from "react";
import axios from "axios";
import Wallpaper from "./Wallpaper";
class Home extends React.Component{
    constructor(){
        super();
        this.state ={
            locations: []
        }
    }

     componentDidMount()  {
        
       axios.get("http://localhost:3001/getAllLocation")
        .then(response =>{
               console.log('Test response' + response.data.locations)
            this.setState({locations: response.data.locations})
        })
        .catch(err => console.log(err));

           console.log('Test')
    }
    render(){
        const{locations} = this.setState;
        return(
            <div>
                <Wallpaper locationsData={this.state.locations}/>
            </div>
        )
    }
} 
export default Home;