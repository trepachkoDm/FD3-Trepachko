export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FILTER_POPART = 'FILTER_POPART';
export const FILTER_ABSTACTION = 'FILTER_ABSTACTION';
export const FILTER_IMPRESSIONISM = 'FILTER_IMPRESSIONISM';
export const FILTER_CLASSICISM = 'FILTER_CLASSICISM';
export const FILTER_CUBISM = 'FILTER_CUBISM';
export const FILTER_MODERNISM = 'FILTER_MODERNISM';
export const SHOW_ALL_PRICE = 'SHOW_ALL_PRICE';
export const FILTER_SEARCH = 'FILTER_SEARCH';
export const ACTIVE_OR_NOT = 'ACTIVE_OR_NOT';
export const CNT_CHANGE = 'CNT_CHANGE';
export const CNT_START = 'CNT_START';


export const filterPopart = (name) => {
    return {
        type: FILTER_POPART,
        name: name,
    }
};

export const filterAbstraction = (name) => {
    return {
        type: FILTER_ABSTACTION,
        name: name,
    }
};
export const filterImpressionism = (name) => {
    return {
        type: FILTER_IMPRESSIONISM,
        name: name,
    }
};

export const filterClassicism = (name) => {
    return {
        type: FILTER_CLASSICISM,
        name: name,
    }
};

export const filterCubism = (name) => {
    return {
        type: FILTER_CUBISM,
        name: name,
    }
};

export const filterModernism = (name) => {
    return {
        type: FILTER_MODERNISM,
        name: name,
    }
};

export const filterAll = () => {
    return {
        type: SHOW_ALL_PRICE,
    }
};

export const filterSearch = (value) => {
    return {
        type: FILTER_SEARCH,
        value: value,
    }
};

export const activeStatus = (id, status) => {
    return {
        type: ACTIVE_OR_NOT,
        id: id,
        status: status,
    }
};


export const cntStartValue = (id, cntValue) => {
    return {
        type: CNT_START,
        id: id,
        cntValue: cntValue,
    }
};

export const cntChange = (id, cntValue) => {
    return {
        type: CNT_CHANGE,
        id: id,
        cntValue: cntValue,
    }
};





