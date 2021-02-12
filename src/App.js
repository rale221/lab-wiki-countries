import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import CountriesList from './Components/CountriesList';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList list={countries} />
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/country/:cca3"
          render={(props) => <CountryDetails list={countries} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;