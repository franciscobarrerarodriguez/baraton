import React from 'react';

const Range = (props) => (
    <div className="filter-item">
        <label className="filter-item-head">Price</label>
        <div className="filter-item-body filter-group filter-range">
            <input type="range" onChange={ props.handleChangeRange }/>
        </div>
        <div className="filter-item-footer filter-group filter-range-values no-padding no-padding-top">
            <label>
                $0
            </label>
            <label>
                ${ props.range }
            </label>
        </div>
    </div>
)

export default Range;