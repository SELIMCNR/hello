import React from 'react';
import PropTypes from "prop-types";

const name = "Selim";
const city = "Kahramanmaraş";
const age = 22

function User({ title, data, friends }) {
    return (
        <div>
            <strong>{title}</strong>

            <div>İsim: {name}</div>
            <div>Şehir : {city}</div>
            <div>Yaş : {age}</div>

            <h3>Arkadaşları</h3>


            <hr />


        </div>);
}
User.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.exact({
        name: PropTypes.string,
        age: PropTypes.number,
        city: PropTypes.string,
    }),
    friends: PropTypes.array,
};

User.defaultProps = {
    title: "Kişi",
};

export default User;