import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { IGDB } from "../util/API";

class App extends React.Component {
  componentDidMount() {
    IGDB.getAccessToken();
  }
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Searchbar />
        </main>
      </div>
    );
  }
}

export default App;
