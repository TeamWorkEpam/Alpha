import React, {Component} from 'react';
// import appStyle from './appStyle';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadIssues, loadIssuesById} from '../actions/actions'
const stubs = {
    row1: [1, 2, 3],
    row2: [4, 5, 6, ' + '],
    row3: [7, 8, 9, ' - '],
    row4: [0, '*', ' / '],
    clearOutput: {data: ' C ', action: 'CLEAR_OUTPUT_VALUE'},
    result: {data: '=', action: 'RESULT'},
}
class App extends Component {
    handleClick(action, data) {
        this.props.dispatch({
            type: action,
            data: data
        });
    }

    loadIssuesById() {
        this.props.dispatch(loadIssuesById());
    }

    loadIssues() {
        this.props.dispatch(loadIssues());
    }

    clearIssues() {
        this.props.dispatch({type: 'CLEAR_ISSUES'});
    }
    splitValue(data) {
        let value = data.split(' ');
        value.a = +value[0];
        value.action = value[1];
        value.b = +value[2];
        return value;
    }
    result(action, data) {
        let value = this.splitValue(data);
        this.props.dispatch({
            type: value.action,
            data: value
        });
    }


    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <button onClick={::this.loadIssuesById}>Load issues by ID</button>
                <button onClick={::this.loadIssues}>Load issues</button>
                <button onClick={::this.clearIssues}>Clear Issues</button>
                <ul>
                    {this.props.issues.map((issue, key) => <li key={key}>issues: {issue}</li>)}
                    {this.props.issuesById.map((issue, key) => <li key={key}>issue by id: {issue}</li>)}
                </ul>
                <input value={this.props.counter == '' ? 0 : this.props.counter}></input>
                <div></div>
                <table>
                    <tr>
                        {stubs.row1.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                        {<td>
                            <button
                                onClick={this.handleClick.bind(this, stubs.clearOutput.action)}>{stubs.clearOutput.data}</button>
                        </td>}
                    </tr>
                    <tr>
                        {stubs.row2.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                    </tr>
                    <tr>
                        {stubs.row3.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                    </tr>
                    <tr>
                        {stubs.row4.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                        {<td>
                            <button
                                onClick={this.result.bind(this, stubs.result.action, this.props.counter)}>{stubs.result.data}</button>
                        </td>}
                    </tr>
                </table>
            </div>
        );
    }
}


export default connect(
    (state) => {
        return {counter: state.counter, issues: [state.issues], issuesById: [state.issuesById]};
    },
    // (dispatch) => bindActionCreators({loadIssues}, dispatch),
)(App);