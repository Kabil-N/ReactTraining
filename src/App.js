import logo from "./logo.svg";
import "./App.css";
import GenreList from "./component/GenreList";
import MovieList from "./component/MovieList";
import SearchMovie from "./component/SearchMovie";
import styled from "styled-components";
import ImgSlider from "./component/ImgSlider";
import Load from "./component/Loader";
import Test from "./component/Test";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
        <Container>
        
        <div className="navbar"><Link className="link"to="/Search">
          <img src="/images/search-icon.svg" /><span>Search a Movie</span></Link>
          <Link className="link" to="/Genre"><img src="/images/movie-icon.svg" /><span>Select a Genre</span></Link>
          </div></Container>
          <ImgSlider/>
          <Switch>
            <Route exact path="/">
              <SearchMovie />
            </Route>
            <Route exact path="/Search">
              <SearchMovie />
            </Route>
            <Route exact path="/Genre">
              <GenreList />
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;

const Container=styled.div`
  height:70px;
  background:#090b13;
  //overflow-x:hidden;

  img{
    height:15px;
    padding: -1px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    padding:-1px;
    position:relative;

    &:after{
      content:"";
      height:2px;
      background:white;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform-origin:left corner;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      transform: scaleX(0);
    }
  }
  &:hover{
    span:after{
      transform:scaleX(1);
      opacity:1;
    }
  }

`
