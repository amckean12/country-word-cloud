import React from 'react';

const ContentComponent = (props) => {
    return(
        <div className={`${props.block}__content--${props.modifier}`}>
            {props.contentStack[0]}
            {props.contentStack[1]}
        </div>
    );
};

export default ContentComponent;