import React from "react";
import '../Style/Filter.css';
class Filter extends React.Component {
    render() {
        return (
            <div>
                <body>
                {/* <div className="main">
                    <div className="maincontents">
                        <div className="image"><img src="./Assets/zomato.png" height="30px" width="50" /></div>

                        <div className="imagecontents">
                            <button className="btn">Login</button>
                            <button className="btn2">Create an account</button>
                        </div>
                    </div>
                </div> */}
                <div className="breakfastheading">
                    <h1>BREAKFAST PLACES IN JABALPUR</h1>
                </div>
                <div className="left">
                    <div className="heading">filters</div>
                    <div className="subheading">select location</div>
                    <div className="selecttag">
                        <select className="tag">
                            <option disabled selected> Select location</option>
                            <option>Jabalpur</option>
                            <option>Bhopal</option>
                            <option>Pune</option>
                            <option>Indore</option>
                            <option>saugar</option>
                        </select>
                    </div>
                    <div className="cusine">
                        <h2 className="cusinehead">Cusine</h2>

                        <input type="checkbox" id="food1" name="food1" value="Northindian" />
                        <label for="food1"> Northindian</label><br />
                        <input type="checkbox" id="food2" name="food2" value="Southindian" />
                        <label for="food2">Southindian</label><br />
                        <input type="checkbox" id="food3" name="food3" value="Chiness" />
                        <label for="food3">Chiness</label><br />
                        <input type="checkbox" id="food4" name="food4" value="Fastfood" />
                        <label for="food4">Fastfood</label><br />

                        <h2>Cost for two</h2>
                        <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Less than $500</label><br />
                        <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2">$1000 to $1500</label><br />
                        <input type="radio" id="vehicle3" name="vehicle3" value="boat" />
                        <label for="vehicle3">$1500 to $2000</label><br />
                        <input type="radio" id="vehicle4" name="vehicle4" value="boat" />
                        <label for="vehicle4">$2000 to $2500</label><br />
                        <input type="radio" id="vehicle5" name="vehicle5" value="boat" />
                        <label for="vehicle5">$2500+</label><br />

                        <h2>Sort</h2>
                        <input type="radio" id="vehicle1" name="vehicle1" value="bike" />
                        <label for="vehicle1">Price low to high</label><br />
                        <input type="radio" id="vehicle2" name="vehicle2" value="car" />
                        <label for="vehicle2">Price high to low</label><br/>
                    </div>
                </div>
                <div className="right1">
                    <div className="imageright"><img src="./Assets/northindian.jpg" height="100px" width="100px" /></div>
                    <h3 className="imgtxt">The Best Northindian</h3>
                    <h4 className="imgtxt1">Font</h4><br />
                    <p className="imgtxt2">Shop1, Plot-d, Samruddhi complex</p><hr/>

                        <table style={{width:50 + '%'}}>
                            <tr>
                                <td>Cusine</td>
                                <td>bakery</td>

                            </tr>
                            <tr>
                                <td>Cost for two</td>
                                <td>700</td>
                            </tr>
                        </table>
                </div>
                <div className="right2">
                    <div className="imageright"><img src="./Assets/dosa.jpg" height="80px" width="80px" /></div><br />
                    <h3 className="imgtxt">Dosa Crush</h3>
                    <h4 className="imgtxt1">Fort</h4><br />
                    <p className="imgtxt2">shop1, plot-d, samruddhi complex</p><hr />
                    <table style= {{width: 20 + '%'}}>
                        <tr>
                            <td>Cusine</td>
                            <td>bakery</td>
                        </tr>
                        <tr>
                            <td>cost for two</td>
                            <td>800</td>
                        </tr>
                    </table>
                </div>
                <div className="right3">
                    <div className="imageright"><img src="./Assets/photos.jpg" height="80px" width="80px" /></div><br />
                    <h3 className="imgtxt">Best Chiness</h3>
                    <h4 className="imgtxt1">Fort</h4><br />
                    <p className="imgtxt2">shop1, plot-d, samruddhi complex</p><hr/>
                        <table style= {{width: 20 + '%'}}>
                            <tr>
                                <td>Cusine</td>
                                <td>bakery</td>
                            </tr>
                            <tr>
                                <td>cost for two</td>
                                <td>500</td>
                            </tr>
                        </table>
                </div>
                <div className="right4">
                    <div className="imageright"><img src="./Assets/fastfood.jpg" height="80px" width="80px" /></div><br />
                    <h3 className="imgtxt">The Fastfood</h3>
                    <h4 className="imgtxt1">Fort</h4><br />
                    <p className="imgtxt2">shop1, plot-d, samruddhi complex</p><hr />
                    <table style={{width: 20 + '%'}}>
                        <tr>
                            <td>Cusine</td>
                            <td>bakery</td>
                        </tr>
                        <tr>
                            <td>cost for two</td>
                            <td>800</td>
                        </tr>
                    </table>
                </div>
                <div className="bottom">
                    <div className="pagination">
                        <div className="paginationbtn">Back</div>
                        <div className="paginationbtn">1</div>
                        <div className="paginationbtn">2</div>
                        <div className="paginationbtn">3</div>
                        <div className="paginationbtn">4</div>
                        <div className="paginationbtn">5</div>
                        <div className="paginationbtn">Next</div>
                    </div>
                </div>
                </body>
            </div>
            

        );
    }
}
export default Filter;