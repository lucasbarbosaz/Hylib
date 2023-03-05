import React from 'react';

const Card = (props) => {
    const { children} = props;

    return (
        <>
            <div className="another-header-menu">
                <div className="webcenter">
                    <div className="another-header-menu-icon">
                        <icon name="fame"></icon>
                    </div>
                    <div className="flex">
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;