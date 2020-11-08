import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SideNav from "./components/sideNav";
import HomeMainCont from "./components/homeMainCont";
import SerchMainCont from "./components/serchMainCont";
import LibraryMainCont from "./components/libraryMainCont";
import PlayListDitais from "./components/playListDitails";

class App extends Component {
  state = {
    categorys: [
      {
        id: 1,
        title: "title1",
        subTitle: "sub title1",
      },
      {
        id: 2,
        title: "title2",
        subTitle: "sub title2",
      },
    ],
    playListsData: [
      {
        category_id: 1,
        playListDitais: [
          {
            id: 101,
            playListTitle: "playlist 1",
            playListImg:
              "https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
            playListCont: "play list content 1",
          },
          {
            id: 102,
            playListTitle: "playlist 2",
            playListImg:
              "https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
            playListCont: "play list content 2",
          },
        ],
      },
      {
        category_id: 2,
        playListDitais: [
          {
            id: 103,
            playListTitle: "playlist 3",
            playListImg:
              "https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
            playListCont: "play list content 3",
          },
          {
            id: 104,
            playListTitle: "playlist 4",
            playListImg:
              "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
            playListCont: "play list content 4",
          },
          {
            id: 105,
            playListTitle: "playlist 5",
            playListImg:
              "https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            playListCont: "play list content 5",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <SideNav />

        <main className="text-right dash-main">
          <div className="upperNav">dummy text</div>
          <div className="main-content">
            <Switch>
              <Route
                path="/playLists/:id"
                render={(props) => (
                  <PlayListDitais
                    playListsData={this.state.playListsData}
                    {...props}
                  />
                )}
              />

              <Route path="/serch" component={SerchMainCont} />
              <Route path="/library" component={LibraryMainCont} />
              <Route
                path="/home"
                render={() => (
                  <HomeMainCont
                    categorys={this.state.categorys}
                    playListsData={this.state.playListsData}
                  />
                )}
              />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </main>
        <footer>music controls</footer>
      </div>
    );
  }
}

export default App;
