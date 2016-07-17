export default function (state = '', action) {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return state + 1;
        case 'CLEAR_OUTPUT_VALUE':
            return '';
        case 'OUTPUT_VALUE':
            return state + '' + action.data;
        case 'ADDITION_OUTPUT_VALUE':
            return state + action.data;
        default:
            return state
    }
}
