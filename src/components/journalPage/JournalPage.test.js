import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import JournalPage from './JournalPage';
import App from '../../App.js';
import PersonalWebsiteContext from '../../personalWebsiteContext';


describe(`JournalPage component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <App>
                <PersonalWebsiteContext.Provider>
                    <JournalPage/>
                </PersonalWebsiteContext.Provider>
            </App>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <App>
                    <PersonalWebsiteContext.Provider>
                        <JournalPage/>
                    </PersonalWebsiteContext.Provider>
                </App>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
