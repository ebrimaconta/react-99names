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
        case 'Sort':
            let newSort = Object.assign(initialState, {});

            let sorted = newSort.sort((a, b) => {
                let nameA = a.EnglishName.split('-')[1];
                let nameB = b.EnglishName.split('-')[1];

                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            });
            console.log(sorted);
            return sorted;

        case 'Names that are null':
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