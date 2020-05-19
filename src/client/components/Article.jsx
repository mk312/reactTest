import React from 'react';
// Case 1

const Article = (props) => React.createElement(
    'div',
    props,
    `Dear ${props.username}! ${props.text}`
);

export default Article;