import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const githubImg = require('../images/github.PNG');

export default () => {
    return(
        <Card
            image={githubImg}
            header='Github'
        />
    )
}