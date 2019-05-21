import React from 'react';

const Availability = (props) => (
    <div className="filter-item">
        <label className="filter-item-head">Disponibilidad</label>
        <div className="filter-item-body">
            <input type="checkbox" onChange={ props.handleToggleAvailability }
                   defaultChecked={ props.available } id="available"/>
            <label htmlFor="available">
                Disponibilidad
            </label>
        </div>
    </div>
)

export default Availability;