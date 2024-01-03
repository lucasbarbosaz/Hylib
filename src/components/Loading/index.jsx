import React from 'react';
import StoreContext from '../../store/Context';

const Loading = () => {
    const { config } = React.useContext(StoreContext);

    return (
        <>
            <div className="loader">
                <div className="flex-column margin-auto">
                    <icon name="logo-hybbe-mini" className="margin-bottom-max" style={{ background: `url(${config.cmsStyles.logoUrl})` }}></icon>
                    <div className="loader-spin margin-auto-left-right"></div>
                    <p style={{
                        color: "#FFF",
                        position: "relative",
                        textAlign: "center"
                    }}>
                        <strong>Astro Server</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Loading;