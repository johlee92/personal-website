import React, { Component } from 'react';
import './JournalPage.css';
import moment from 'moment';
import PersonalWebsiteContext from '../../personalWebsiteContext';

class JournalPage extends Component {
    static contextType = PersonalWebsiteContext;

    navigateBack = () => {
        this.props.history.goBack();
    }

    render() {
        let targetJournal;
        
        targetJournal = this.context.journals.find((journal) =>
            journal.id === parseInt(this.props.match.params.journalId, 10) || journal.id === this.props.match.params.journalId
        )

        return (
            <div className="journalPage">
                <div className="journalPage-container">
                    <h2>{targetJournal.name}</h2>
                    <h4>{moment(targetJournal.created).format('LL')}</h4>
                    <p>{targetJournal.content}</p>
                    <br />
                    <button type="button" className="journalCard-button" onClick={this.navigateBack}>Back</button>
                </div>
            </div>
        )
    }
}

export default JournalPage;