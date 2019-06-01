import React from 'react';

const Subcategories = props => (
    <ul className="no-margin no-margin-full no-padding no-padding-full list list-none subcategory-list">
        {
            props.subcategories.map((subcategory, index) => {
                return(
                    <li className={ `subcategory-item ${ props.activeCategory === subcategory.id ? 'active' : '' }` } key={ index }>
                        <a href="#!" onClick={ () => { props.handleChangeCategory(subcategory.id) } }>{ subcategory.name } { props.activeCategory } - { subcategory.id }</a>
                        {
                            subcategory.sublevels !== null && subcategory.sublevels !== undefined &&
                                <Subcategories subcategories={ subcategory.sublevels } handleChangeCategory={ props.handleChangeCategory }
                                               activeCategory={ props.activeCategory }/>
                        }
                    </li>
                )
            })
        }
    </ul>
)

export default Subcategories;