
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
    const [country, setCountry] = useState({});

    useEffect(() => {
        console.log(props.match.params.cca3);
        console.log(props.list);

        const found = props.list.find(
            (element) => element.cca3 == props.match.params.cca3
        );
        console.log(found);

        setCountry(found);
    }, [props]);

    console.log(country);
    const showBorders = () => {
        return country.borders.map(borderCountry => {

            let border = props.list.find(
                (element) => element.cca3 == borderCountry
            )
            return (<>
                <li>
                    <Link
                        to={`/country/${borderCountry}`}
                        className="list-group-item list-group-item-action"
                    >
                        {border.name.common}
                    </Link>
                </li>
            </>)
        })
    }

    return (
        <div className="col-7">
            <h1>{country.name?.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{country?.capital?.[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country?.area} km
              <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {showBorders()}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;