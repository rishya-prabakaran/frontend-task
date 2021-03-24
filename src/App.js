import './App.css';
import Header from './Header/Header';
import Search from './Header/Search';
import VideoRecommendation from './VideoRecommendation/VideoRecommendation';
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar />
                <Search/>
              </div>
          </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <VideoRecommendation/>
              </div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
