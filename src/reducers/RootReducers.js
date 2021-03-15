import store99names from './Data99Names';
const initialState = store99names;
export default function action99names(state = initialState, action) {
    switch (action.type) {
        case 'FILTER':
            const filterArr = Object.assign(initialState, {});
            let pushArray = [];
            let checkFilter = filterArr.filter((name) => {
                let splitNames = name.EnglishName.split('-')[1];
                if (splitNames) {
                    if (action.payload.toUpperCase() === splitNames[0]) {
                        pushArray.push(name);
                        return pushArray;
                    }
                }
            });

            return checkFilter;

        case 'RESET':
            return initialState;

        default:
            return initialState;
    }
}