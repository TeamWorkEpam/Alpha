import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadIssues, loadIssuesById} from '../actions/actions'

class App extends Component {
    handleClick() {
        this.props.dispatch(loadIssues());
        this.props.dispatch(loadIssuesById());
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div>{this.props.counter}</div>
                <button onClick={::this.handleClick}>Load issues</button>
                <ul>
                    {this.props.issues.map((issue) => <li>issues: {issue}</li>)}
                    {this.props.issuesById.map((issue) => <li>issue by id: {issue}</li>)}
                </ul>
            </div>
        );
    }
}


export default connect(
    (state) => {
        return {counter: state.counter, issues: [state.issues], issuesById: [state.issuesById]};
    },
    (dispatch) => bindActionCreators({loadIssues}, dispatch),
)(App);