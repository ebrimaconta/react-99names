import store99names from './Data99Names';
import { NAMES_NULL, FILTER, RESET } from '../actions/Actions';
const initialState = store99names;

export default function action99names(state = initialState, action) {
    switch (action.type) {
        case FILTER:
            let filter = Object.assign(initialState, {});
            let pushArray = [];
            let checkFilter = filter.filter((name) => {
                let splitNames = name.EnglishName.split('-')[1];
                if (splitNames) {
                    if (action.payload.toUpperCase() === splitNames[0]) {
                        pushArray.push(name);
                        return pushArray;
                    }
                }
            });
            return checkFilter;

        case RESET:
            return [...initialState];

        case NAMES_NULL:
            let checkNull = Object.assign(initialState, {});
            let alphat = 'abcdefghijklmnopqrstuvwxyz'.split('');

            let arrNames = checkNull.map((name) => {
                let splitNames = name.EnglishName.split('-')[1];
                if (splitNames !== undefined) {
                    return splitNames[0].toLowerCase();
                }
            });
            let uniqueNames = [...new Set(arrNames)];

            let getNullValues = alphat.filter(
                (item) => uniqueNames.indexOf(item) === -1
            );

            return getNullValues;
    }

    return state;
}