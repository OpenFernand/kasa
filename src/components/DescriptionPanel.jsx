import React, { useState } from 'react';
import './DescriptionPanel.scss';

export function DescriptionPanel(props) {
// Actuel
    const [isContentVisible, setIsContentVisible] = useState(false)
    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }
    return (
        <div className="description__panel">
        <p className="description__header">
            <span>{props.title}</span>
            <i className="fas fa-chevron-down" onClick={showContent}></i>
        </p>
        {isContentVisible && <p className="description__content" >{props.content} </p>}
        </div>
    );
// Fin actuel

/* version définitive---
    const [isContentVisible, setIsContentVisible] = useState(false)
    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    const contentClass = (isContentVisible ? 'visible' : "hidden") + 'description__content'
    const chevronClass = (isContentVisible ? 'fa-chevron-up' : "fa-chevron-down") + 'fas'
    return (
        <div className="description__panel">
            <p className="description__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );
*/

}