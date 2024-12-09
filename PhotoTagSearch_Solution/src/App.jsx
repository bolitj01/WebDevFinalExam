import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SearchDisplay from "./SearchDisplay";
import "./App.css";

function App() {
  //TODO Any needed hooks
  

  //TODO Function for server database search
  

  //TODO Function for deleting a search display
  

  //Rendered contents
  return (
    <div className="App">
      {/*TODO Finish form for searching photos */}
      <h1>Photo Tag Search</h1>
      <form onSubmit={/*TODO*/}>
        <label htmlFor="name">Tag: </label>
        <input type="text" name="tag" id="tag" placeholder="dog" />
        <button data-testid="search-btn" type="submit">Search</button>
      </form>

      {/*TODO Display potential error message */}
      
      <div>
        {/*TOO Display all searches*/}

      </div>
    </div>
  );
}

export default App;

//npm run dev to start React app and Express server
//npm run prod to build React app and start Express server