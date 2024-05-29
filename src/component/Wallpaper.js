import React from 'react';
import axios from 'axios';
// import './Style/Home.css';
class Wallpaper extends React.Component {
    constructor (){
        super();
        this.state = {
            restaurants: [],
            inputText: '',
            suggestions: []
        }
    }
handleLocation =(event) =>{
const locationId = event.target.value;
console.log("locationId="+locationId);
axios.get("http://localhost:3001/getRestaurantFilterByLocationId/"+locationId)
.then(response => {
    this.setState({restaurants: response.data.restaurants })
    console.log(response.data.restaurants)
})
.catch(err => console.log(err));
}
handleSearch =(event) => {
    let inputText = event.target.value;
    // const {restaurants} = this.state;
    //debugging line used to check user
    console.log('input => '+inputText)
    const suggestions = this.state.restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
    this.setState({suggestions,inputText});
}

selectingRestaurant(item){
    console.log(item)
}
showSuggestion =() => {
    const {suggestions, inputText } = this.state;
    if(suggestions.length == 0 & inputText == undefined){
        return null;
    }
    if(suggestions.length > 0 && inputText == ''){
        return null;
    }
    if (suggestions.length == 0 && inputText) {
        return <ul>
            <li>No Serach Results Found</li>
        </ul>
    }
    return(
        <ul>
            {
                suggestions.map((item,index) => (<li key={index} onClick={() => this.selectingRestaurant(item)}>{`${item.name}. ${item.locality}, ${item.city}`}</li>))
            }
        </ul>
    )
}
    render() {
        // const {locationsData } = this.setState
        // console.log(this.props.locationsData)
        return (
            <div >
                <img src="../Assets/food2.jpg" alt="image not found" className="homeimage" />
                <div className="topSection">
                    <div className='logo'><img src='../Assets/logo.png' width={300+ 'px'} height={250+ 'px'}/></div>
                    <div className="headerText">Find best restaurants</div>
                    <div className="searchOption">
                        <span>
                            <select className="locationBox" onChange={this.handleLocation}>
                                <option value="0">Select</option>
                                {this.props.locationsData.map((item)=>{
                                    return<option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                                })}
                                {/* <option selected disabled> Select City </option>
                                <option value="jbp" label="Jabalpur">Jabalpur</option>
                                <option value="kat" label="Katni">Katni</option>
                                <option value="sih" label="Bhopal">Bhopal</option>
                                <option value="sat" label="Indore">Indore</option> */}
                            </select>
                        </span>
                        <span className="glyphicon glyphicon-search search"> </span>
                        <div id='notebook'> 
                        <i className="bi bi-search searchIcon"></i>
                            <input id="query" type="text" className="searchInput" placeholder="search for restaurant"  onChange={this.handleSearch}/>
                            {this.showSuggestion()}
                      </div>
                           
                        
                    </div>
                </div>

                
                <div className="bottomSection">
                    <h1 className="qs-heading">Quick searches</h1>
                    <h3 className="qs-subheading">Discover restaurants by type of meal</h3>
                    <div className="qs-boxes-container">
                        <div className="qs-box">
                            <div className="qs-box-contents">
                                <img src="./Assets/breakfast.jpg" className="qs-image" />
                                <h4 classNameName="qs-items-heading">Breakfast</h4>
                                <p className="qs-item-description">start your day with exclusive Breakfast </p>
                            </div>
                        </div>
                        <div className="qs-box">
                            <div className="qs-box-contents">
                                <img src="./Assets/lunch.jpg" className="qs-image" />
                                <h4 className="qs-items-heading">Lunch</h4>
                                <p className="qs-item-description">start your day with exclusive Breakfast </p>
                            </div>
                        </div>
                        <div className="qs-box">
                            <div className="qs-box-contents">
                                <img src="./Assets/northindian.jpg" className="qs-image" />
                                <h4 className="qs-items-heading">Dinner</h4>
                                <p className="qs-item-description">start your day with exclusive Breakfast </p>
                            </div>
                        </div>
                        <div className="qs-box">
                            <div className="qs-box-contents">
                                <img src="./Assets/drink.jpg" className="qs-image" />
                                <h4 className="qs-items-heading">Drinks</h4>
                                <p className="qs-item-description">start your day with exclusive Breakfast </p>
                            </div>
                        </div>
                        <div className="qs-box">
                            <div className="qs-box-contents">
                                <img src="./Assets/photos.jpg" className="qs-image" />
                                <h4 className="qs-items-heading">Chinese</h4>
                                <p className="qs-item-description">start your day with exclusive Breakfast </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallpaper;