import axios from 'axios';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        axios.get(url)
            .then((res) => dispatch(itemsFetchDataSuccess(res.data)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}