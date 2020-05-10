import React, { Component } from 'react';
import './JournalCard.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

class JournalCard extends Component {
    render() {
        // creates the path for the journal that is selected
        const journalPath = `/journals/${this.props.id}`;

        return (
            <div className="journalCard">
                <div className="journalCard-container">
                    <h2>{this.props.name}</h2>
                    <p>{moment(this.props.created).format('LL')}</p>
                    <p>{this.props.short}</p>
                    <Link to={journalPath}><button type="button" className="journalCard-button">Read More</button></Link>
                </div>
            </div>
        )
    }
}

export default JournalCard;