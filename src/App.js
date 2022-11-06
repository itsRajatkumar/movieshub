import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import Home from "./Home"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact  element={<Home />}/>
          <Route path="/:id"  element={<MovieDetailPage />}/>
        </Switch>
    </Router>
  );
}