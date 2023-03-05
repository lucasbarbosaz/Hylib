import React from 'react';

const Check = ({ type, message }) => {

    return (
        <>
            {
                type === 'error' &&
                <div class="error flex">
                    <h6> {message} </h6>
                    <icon name="error-1"></icon>
                </div>
            }

            {
                type === 'success' &&
                <div class="success flex">
                    <icon name="ok-3"></icon>
                </div>
            }

        </>
    )
}

export default Check;