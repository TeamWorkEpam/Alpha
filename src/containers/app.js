import React, {Component} from 'react';
// import appStyle from './appStyle';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadIssues, loadIssuesById} from '../actions/actions'
const stubs = {
    row1: [1, 2, 3],
    row2: [4, 5, 6],
    row3: [7, 8, 9, '-'],
    row4: [0, '*', '/'],
    clearOutput: {data: 'C', action: 'CLEAR_OUTPUT_VALUE'},
    additionOutput: {data: '+', action: 'OUTPUT_VALUE'},
    result: {data: '=', action: 'RESULT'},
}
class App extends Component {
    handleClick(action, data) {
        // console.log(this.props)
        // this.props.dispatch(loadIssues());
        // this.props.loadIssues()
        this.props.dispatch({
            type: action,
            data: data
        });
    }

    handleClickCounter(data) {
        console.log(data);
        this.props.dispatch({type: 'INCREASE_COUNTER'});
    }

    loadIssuesById() {
        this.props.dispatch(loadIssuesById());
    }

    clearIssues() {
        this.props.dispatch({type: 'CLEAR_ISSUES'});
    }

    resetCounter() {
        this.props.dispatch({type: 'RESET_COUNTER'});
    }

    outputValue(action) {
        this.props.dispatch({
            type: 'OUTPUT_VALUE',
            data: data
        });
    }

    clearOutputValue(data) {
        this.props.dispatch({
            type: data,
        });
    }
    additionOutput(data) {
        this.props.dispatch({
            type: data,
        });
    }
    result(data) {
        this.props.dispatch({
            type: 'RESULT',
            data: data
        });
    }


    render() {
        return (
            <div>
                <h1>Hello world!</h1>

                <button onClick={::this.handleClickCounter}>Counter</button>
                <button onClick={::this.resetCounter}>Reset counter</button>
                <button onClick={::this.handleClick}>Load issues</button>
                <button onClick={::this.loadIssuesById}>Load issues by ID</button>
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
                            <button onClick={this.handleClick.bind(this, stubs.clearOutput.action)}>{stubs.clearOutput.data}</button>
                        </td>}
                    </tr>
                    <tr>
                        {stubs.row2.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                        {<td>
                            <button onClick={this.handleClick.bind(this, stubs.additionOutput.action, stubs.additionOutput.data)}>{stubs.additionOutput.data}</button>
                        </td>}

                    </tr>
                    <tr>
                        {stubs.row3.map((number, key) => <td key={key}>
                            <button onClick={this.handleClick.bind(this, 'OUTPUT_VALUE', number)}>{number}</button>
                        </td>)}
                    </tr>
                    <tr>
                        {stubs.row4.map((number, key) => <td key={key}>
                            <button>{number}</button>
                        </td>)}
                        {<td>
                            <button onClick={this.handleClick.bind(this, this.props.counter)}>{stubs.result.data}</button>
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