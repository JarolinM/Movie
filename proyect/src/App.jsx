import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./components/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>

        <Link to="/home"></Link>
        <br />
        <Link to="/movies"></Link>
      </header>
      <main>
        <Switch>
          <Route exact path={"/movies/:movieId"}>
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
