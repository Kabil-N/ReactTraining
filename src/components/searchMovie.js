import { Search } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import SuggestionList from './suggestionList';
import '../App.css';

function searchMovie({fetchSuggestion}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleChange=(e)=>{
      fetchSuggestion(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search-group">
          <input onChange={handleChange} className="search" type="text" placeholder="Type your search here" required />
          <button className="search-btn" type="submit">
            <Search />
          </button>
        </div>
      </form>
      <SuggestionList/>
    </div>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchSuggestion :(val)=>{
      dispatch({
        type:'FETCH_STARTED',
        search:val,
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(searchMovie);
