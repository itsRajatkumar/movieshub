import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import Home from "./Home"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact  element={
            <>
            <Link to="/movieshub">Go to Movie Page</Link>
            </>
          }/>
          <Route path="/movieshub" exact  element={<Home />}/>
          <Route path="/movieshub/:id"  element={<MovieDetailPage />}/>
        </Switch>
    </Router>
  );
}