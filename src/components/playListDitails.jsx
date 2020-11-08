import React, { Component } from "react";
const PlayListDitais = (props) => {
  console.log(props);
  let playListDitails = props.playListsData.map((playList) => {
    return playList.playListDitais;
  });
  //console.log(playListDitails);

  playListDitails = playListDitails.map((playList) => {
    //console.log(playList, index);
    const playListDitals = playList.filter((ditails) => {
      //console.log(ditails);
      return ditails.id === parseInt(props.match.params.id);
    });
    return playListDitals;
    //console.log(c);
  });

  playListDitails = playListDitails.filter((targetDitals) => {
    return targetDitals.length !== 0;
  })[0][0];
  console.log(playListDitails);
  //console.log(playListDitais);
  //console.log(parseInt(props.match.params.id));

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img src={playListDitails.playListImg} alt="pic" />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>{playListDitails.playListTitle}</h1>

            <p className="tagline">{playListDitails.playListCont}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListDitais;
/*
    <div>
      <div>{playListDitails.id}</div>
      <div>{playListDitails.playListCont}</div>
      <div>{playListDitails.playListTitle}</div>
    </div>
*/
