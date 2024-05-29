import React from 'react';
import QuicksearchItem from './QuicksearchItem';
class Quicksearch extends React.Component {
    render() {
        // const{quickSearchData} = this.props.quickSearchData;
        return (
            <div>
                <div className="bottomSection">
                    <p className="qs-subheading">
                        Quick Searches
                    </p>

                    <p className="qs-item-description">
                        Discover restaurants by type of meal
                    </p>
                    <div className="container-fluid">
                        <div className="qs-box">{
                            this.props.quickSearchData.map((item) => {
                                return<QuicksearchItem quickSearchItemData ={item}/>
                            })
                        }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Quicksearch;