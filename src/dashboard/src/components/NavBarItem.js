import React from 'react';

function NavbarItem(props) {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href={props.url} id="alertsDropdown">
                    <i className={`fas ${props.icon} fa-fa`}></i>
                 
                    <span className={`badge badge-${props.color} badge-counter`}>{props.value}</span>
                </a>
            </li>
    );
}

export default NavbarItem;