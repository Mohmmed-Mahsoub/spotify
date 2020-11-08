import React, { Component } from "react";
import Categorys from "./categorys";
import PlayListDitais from "./playListDitails";
class HomeMainCont extends Component {
  state = {};
  render() {
    //console.log(this.props);
    return (
      <div className="content">
        {this.props.categorys.map((category, index) => {
          return (
            <Categorys
              key={category.id}
              category={category}
              playListDitais={this.props.playListsData[index]}
            />
          );
        })}
      </div>
    );
  }
}

export default HomeMainCont;
