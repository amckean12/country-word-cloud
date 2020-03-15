import React from 'react';
import ContentComponent from './content.jsx';


const WordSidebar = (props) => {
    return(
        <div class="word-sidebar__container">
            <ContentComponent 
                block={"word-sidebar"}
                modifier={"default"}
                contentStack={['h2', 'p']}/>
        </div>
    );
};

export default WordSidebar;