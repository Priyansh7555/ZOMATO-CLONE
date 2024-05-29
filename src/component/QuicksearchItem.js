import React from "react";
class QuicksearchItem extends React.Component {
    render() {
        // const { name, content, image } = this.props.quickSearchItemData;
        return (
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="qs-box-contents">
                
                    <img src={`./${this.props.quickSearchItemData.image}`} height='150' width='140' className="qs-image" />

                    <div classNameName="tileComponent2">
                        <div className="componentHeading">
                            {this.props.quickSearchItemData.name}
                        </div>

                        <div className="componentSubHeading">
                            {this.props.quickSearchItemData.content}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default QuicksearchItem;