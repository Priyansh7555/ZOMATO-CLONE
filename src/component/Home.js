import React from "react";
import axios from "axios";
import Wallpaper from "./Wallpaper";
import Quicksearch from "./Quicksearch";
class Home extends React.Component{
    constructor(){
        super();
        this.state ={
            locations: [],
            mealtypes: []
        }
    }

     componentDidMount()  {
        
       axios.get("http://localhost:3001/getAllLocation")
        .then(response =>{
               console.log(' response' + response.data.locations)
            this.setState({locations: response.data.locations})
        })
        .catch(err => console.log(err));

           console.log('Test')

           axios.get("http://localhost:3001/getAllmealtype")
           .then(response =>{
                  console.log('Test response' + response.data.mealtypes)
               this.setState({mealtypes: response.data.mealtypes})
           })
           .catch(err => console.log(err));
   
              console.log('test')
    }
    render(){
        const{locations} = this.setState;
        return(
            <div>
                <Wallpaper locationsData={this.state.locations}/>
                <Quicksearch quickSearchData = {this.state.mealtypes}/>
            </div>
        )
    }
} 
export default Home;