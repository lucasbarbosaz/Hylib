import { useEffect, useState } from 'react';

const Relationships = ({ userData }) => {
    const [heartRelationships, setHeartRelationships] = useState([]);
    const [smileRelationships, setSmileRelationships] = useState([]);
    const [bobbaRelationships, setBobbaRelationships] = useState([]);
    const [poopRelationships, setPoopRelationships] = useState([]);

    useEffect(() => {
        if (!userData.userRelationsShips) {
            return;
        }
        userData.userRelationsShips.forEach((element) => {
            if (element.type === 'heart') {
                heartRelationships.push(element);
                setHeartRelationships(heartRelationships);
            }
            if (element.type === 'smile') {
                smileRelationships.push(element);
                setSmileRelationships(smileRelationships);
            }
            if (element.type === 'bobba') {
                bobbaRelationships.push(element);
                setBobbaRelationships(bobbaRelationships);
            }
            if (element.type === 'poop') {
                poopRelationships.push(element);
                setPoopRelationships(poopRelationships);
            }
        });
    }, []);

    return (
        <>
            {heartRelationships.length > 0 && (
                <div className='flex margin-bottom-minm'>
                    <icon name='heart' className='margin-right-minm'></icon>
                    <label className='gray-clear'>
                        <h5>
                            {heartRelationships.map((e, i) => {
                                if (i > 4) {
                                    return '';
                                }
                                if (i === 4) {
                                    return 'e outros...';
                                }
                                if (i === heartRelationships.length - 1) {
                                    return <a href={`/profile/${e.partner}`}>{e.partner}</a>;
                                }
                                return <a href={`/profile/${e.partner}`}>{`${e.partner} | `}</a>;
                            })}
                        </h5>
                    </label>
                </div>
            )}
            {smileRelationships.length > 0 && (
                <div className='flex margin-bottom-minm'>
                    <icon name='smile' className='margin-right-minm'></icon>
                    <label className='gray-clear'>
                        <h5>
                            {smileRelationships.map((e, i) => {
                                if (i > 4) {
                                    return '';
                                }
                                if (i === 4) {
                                    return 'e outros...';
                                }
                                if (i === smileRelationships.length - 1) {
                                    return <a href={`/profile/${e.partner}`}>{e.partner}</a>;
                                }
                                return <a href={`/profile/${e.partner}`}>{`${e.partner} | `}</a>;
                            })}
                        </h5>
                    </label>
                </div>
            )}
            {bobbaRelationships.length > 0 && (
                <div className='flex margin-bottom-minm'>
                    <icon name='bobba' className='margin-right-minm'></icon>
                    <label className='gray-clear'>
                        <h5>
                            {bobbaRelationships.map((e, i) => {
                                if (i > 4) {
                                    return '';
                                }
                                if (i === 4) {
                                    return 'e outros...';
                                }
                                if (i === bobbaRelationships.length - 1) {
                                    return <a href={`/profile/${e.partner}`}>{e.partner}</a>;
                                }
                                return <a href={`/profile/${e.partner}`}>{`${e.partner} | `}</a>;
                            })}
                        </h5>
                    </label>
                </div>
            )}
            {poopRelationships.length > 0 && (
                <div className='flex margin-bottom-minm'>
                    <icon name='poop' className='margin-right-minm'></icon>
                    <label className='gray-clear'>
                        <h5>
                            {poopRelationships.map((e, i) => {
                                if (i > 4) {
                                    return '';
                                }
                                if (i === 4) {
                                    return 'e outros...';
                                }
                                if (i === poopRelationships.length - 1) {
                                    return <a href={`/profile/${e.partner}`}>{e.partner}</a>;
                                }
                                return <a href={`/profile/${e.partner}`}>{`${e.partner} | `}</a>;
                            })}
                        </h5>
                    </label>
                </div>
            )}
        </>
    );
};

export default Relationships;
