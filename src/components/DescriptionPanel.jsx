import React from 'react';
import './DescriptionPanel.scss';

export function DescriptionPanel() {
    return (
        <div className="description__panel">
        <p className='description__header'>
            <span>Description</span>
            <i className="fas fa-chevron-up"></i>
        </p>

        <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam. Facere odit ea veniam laborum neque nam dicta eligendi dolorum maxime reprehenderit, eum cupiditate a ex commodi ipsum nisi voluptate perspiciatis error delectus nostrum placeat unde officiis iusto. Minima vel ad assumenda praesentium? Nemo asperiores adipisci sunt inventore quaerat. Ad.</p>
        </div>
    );
}