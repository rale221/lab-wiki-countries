import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const CountryLink = ({ name, flag, cca3 }) => {
        return (
            <Link
                to={`/country/${cca3}`}
                className="list-group-item list-group-item-action"
            >
                {flag} {name.common}
            </Link>
        );
    };

    const List = () => {
        return props.list.map((eachCountry) => <CountryLink {...eachCountry} />);
    };

    return (
        <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div class="list-group">
                <List />
            </div>
        </div>
    );
}

export default CountriesList;