import React from 'react';

const Subcategories = props => (
    <ul className="no-margin no-margin-full no-padding no-padding-full list list-none subcategory-list">
        {
            props.subcategories.map((subcategory, index) => {
                return(
                    <li className="subcategory-item" key={ index }>
                        <a href="#!">{ subcategory.name }</a>
                        {
                            subcategory.sublevels !== null && subcategory.sublevels !== undefined &&
                                <Subcategories subcategories={ subcategory.sublevels }/>
                        }
                    </li>
                )
            })
        }
    </ul>
)

export default Subcategories;