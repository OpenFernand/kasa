import React from 'react';
import './DescriptionPanel.scss';

export function DescriptionPanel(props) {
    return (
        <div className="description__panel">
        <p className="description__header">
            <span>{props.title}</span>
            <i className="fas fa-chevron-up"></i>
        </p>

        <p className="description__content" >{props.content} </p>
        </div>
    );
}