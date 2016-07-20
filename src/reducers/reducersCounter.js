export default function (state = '', action) {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return state + 1;
        case 'CLEAR_OUTPUT_VALUE':
            return '';
        case 'OUTPUT_VALUE':
            return state !== 0 ? state + '' + action.data :  ''+ action.data;
        case 'RESULT':
            return;
        case '+':
            return action.data.a + action.data.b;
        case '-':
            return action.data.a - action.data.b;
        case '/':
            return action.data.a / action.data.b;
        case '*':
            return action.data.a * action.data.b;
        case 'ADDITION_OUTPUT_VALUE':
            return +state + +action.data;
        default:
            return state
    }
}
