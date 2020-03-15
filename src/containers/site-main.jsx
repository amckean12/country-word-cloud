//Libraries
import React, { Component } from 'react';

//Components
import WordCloud from '../components/word-cloud';
import WordSidebar from '../components/word-sidebar';

//Styling
import '../styles/main.scss'

class SiteMain extends Component {
    render(){
        return(
            <section className="main__container">
                <section className="word-cloud">
                    <WordCloud />
                </section>
                <aside className="word-sidebar">
                    <WordSidebar 
                        gatherLyricData={this.gatherLyricData}/>
                </aside>
            </section> 
        )
    }
}

export default SiteMain; 