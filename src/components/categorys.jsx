import React, { Component } from "react";
import PlayLists from "./playLists";
class Categorys extends Component {
  state = {};
  render() {
    const category = this.props.category;
    const playListDitais = this.props.playListDitais;
    //console.log(this.props.playListDitais.playListDitais);
    return (
      <div className="category">
        <h2 className="title">{category.title}</h2>
        <div className="sub-title">{category.subTitle}</div>

        <div className="cards">
          {this.props.playListDitais.playListDitais.map((playList) => {
            return <PlayLists key={playList.id} playListDitais={playList} />;
          })}
        </div>
      </div>
    );
  }
}

export default Categorys;
