import React, { Component } from 'react';
import './Journals.css';
import PersonalWebsiteContext from '../../personalWebsiteContext';
import JournalCard from '../journalCard/JournalCard.js';

class Journal extends Component {
    static contextType = PersonalWebsiteContext;

    render() {
        const orderedJournals = this.context.journals.sort((journal1, journal2) => {
            return journal2.id - journal1.id;
        })

        const journalCards = orderedJournals.map((journal) => {
            return <JournalCard {...journal} {...this.props} />
        })

        return (
            <div className="journals">
                <div className="journals-container">
                    <p>I'm just a normal guy who enjoys pondering about life. I wanted to share my thoughts and get your feedback to learn and grow together.</p>
                    {journalCards}
                </div>
            </div>
        )
    }
}

export default Journal;