import store99names from './reducers_99names';
const initialState = store99names;

export default function action99names(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'Filter':
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

        case 'Reset':
            return [...initialState];
    }

    return state;
}