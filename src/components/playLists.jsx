import React, { Component } from "react";
import { Link } from "react-router-dom";
class PlayLists extends Component {
  state = {};
  render() {
    const playListDitais = this.props.playListDitais;
    console.log(playListDitais);
    return (
      <Link to={`/playLists/${playListDitais.id}`}>
        <div className="card" style={{ width: "14rem" }}>
          <div className="cardImg">
            <img
              src={playListDitais.playListImg}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{playListDitais.playListTitle}</h5>
            <p className="card-text">{playListDitais.playListCont}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default PlayLists;
