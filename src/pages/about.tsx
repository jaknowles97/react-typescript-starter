import React, { useEffect } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';

const AboutPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [])

    return <p>dis da About page</p>
}

export default AboutPage;