import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Girl_lady_user_woman-512.png"
                className="avatar"
                alt="my look"
            />
            <h2 className="main-name">Sampada Naik</h2>
            <p className="subtitle">"A Student of MGM'S COE,NANDED"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};