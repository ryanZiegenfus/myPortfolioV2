import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const resumeImg = require('../images/resume.PNG');

export default () => {
    return(
        <Card
            image={resumeImg}
            header='Resume'
        />
    )
}