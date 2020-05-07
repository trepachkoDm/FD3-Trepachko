import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FILTER_POPART,
    FILTER_ABSTACTION,
    FILTER_IMPRESSIONISM,
    FILTER_CLASSICISM,
    FILTER_CUBISM,
    FILTER_MODERNISM,
    SHOW_ALL_PRICE,
    FILTER_SEARCH,
    ACTIVE_OR_NOT,
    CNT_CHANGE,
    CNT_START
} from '../redux/catalogAC'

const initialState = {
    isLoaded: false,
    startPriceList: [],
    priceList: [],
    checkedRadio: 0,
    foundNull: false,
};

const CatalogReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            if (!state.isLoaded) {
                let newState = { ...state, isLoaded: true };
                newState.startPriceList = action.priceList;
                newState.priceList = action.priceList;
                return newState;
            } else {
                return {
                    ...state,
                    foundNull: false
                };
            }
        case FETCH_DATA_FAILURE:
            console.log('ошибка связи');
            return {
                ...state,
                isLoaded: false,
            };
        case CNT_START:
            let changeCntStartListNull = { ...state };
            let coppyCntStartListNull = changeCntStartListNull.startPriceList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, cnt: action.cntValue };
                }
                return item;
            });
            changeCntStartListNull.startPriceList = coppyCntStartListNull;
            //-иммутабельные изменениея для перерисовки только одного элемента а не всех 50ти
            let changeCntCurrentPriceListNull = changeCntStartListNull.priceList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, cnt: action.cntValue };
                }
                return item;
            });
            changeCntStartListNull.priceList = changeCntCurrentPriceListNull;
            return changeCntStartListNull;
        case CNT_CHANGE:
            let changeCntStartList = { ...state };
            let coppyCntStartList = changeCntStartList.startPriceList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, cnt: item.cnt + action.cntValue };
                }
                return item;
            });
            changeCntStartList.startPriceList = coppyCntStartList;
            //-иммутабельные изменениея для перерисовки только одного элемента а не всех 50ти
            let changeCntCurrentPriceList = changeCntStartList.priceList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, cnt: item.cnt + action.cntValue };
                }
                return item;
            });
            changeCntStartList.priceList = changeCntCurrentPriceList;
            return changeCntStartList;
        case ACTIVE_OR_NOT:
            let changeStatusStartList = { ...state };
            let coppyStartList = [...changeStatusStartList.startPriceList];
            coppyStartList[action.id - 1].status = action.status;
            changeStatusStartList.startPriceList = coppyStartList;
            //-иммутабельные изменениея для перерисовки только одного элемента а не всех 50ти
            let changeStatusCurrentPriceList = changeStatusStartList.priceList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, status: action.status };
                }
                return item;
            });
            changeStatusStartList.priceList = changeStatusCurrentPriceList;
            return changeStatusStartList;
        case FILTER_SEARCH:
            if (action.value) {
                let filterSearch = { ...state, checkedRadio: 7 };
                let finelSearchArr = state.startPriceList.filter((item) => {
                    return (item.type.toLowerCase().indexOf(action.value.toLowerCase()) > -1)
                        || (item.model.toLowerCase().indexOf(action.value.toLowerCase()) > -1)
                        || (item.price.toLowerCase().indexOf(action.value.toLowerCase()) > -1)
                });
                if (finelSearchArr.length === 0) {
                    filterSearch.foundNull = true;
                } else {
                    filterSearch.foundNull = false;
                }
                filterSearch.priceList = finelSearchArr;
                return filterSearch;
            } else {
                return { ...state, priceList: [], checkedRadio: 7, foundNull: true };
            }
        case FILTER_POPART:
            let filterPopart = { ...state, checkedRadio: 1, foundNull: false };
            let filterPopartFromstartPriceList = state.startPriceList.filter((item) => {
                return item.type === action.name;
            }
            );
            filterPopart.priceList = filterPopartFromstartPriceList;
            return filterPopart;
            case FILTER_ABSTACTION:
                let filterAbstraction = { ...state, checkedRadio: 2, foundNull: false };
                let filterAbstractionFromstartPriceList = state.startPriceList.filter((item) => {
                    return item.type === action.name;
                }
                );
                filterAbstraction.priceList = filterAbstractionFromstartPriceList;
                return filterAbstraction;
        case FILTER_IMPRESSIONISM:
            let filterImpressionism = { ...state, checkedRadio: 3, foundNull: false };
            let filterImpressionismFromstartPriceList = state.startPriceList.filter((item) => {
                return item.type === action.name;
            }
            );
            filterImpressionism.priceList = filterImpressionismFromstartPriceList;
            return filterImpressionism;
        case FILTER_CLASSICISM:
            let filterClassicism = { ...state, checkedRadio: 4, foundNull: false };
            let filterClassicismFromstartPriceList = state.startPriceList.filter((item) => {
                return item.type === action.name;
            }
            );
            filterClassicism.priceList = filterClassicismFromstartPriceList;
            return filterClassicism;
        case FILTER_CUBISM:
            let filterCubism = { ...state, checkedRadio: 5, foundNull: false };
            let filterCubismFromstartPriceList = state.startPriceList.filter((item) => {
                return item.type === action.name;
            }
            );
            filterCubism.priceList = filterCubismFromstartPriceList;
            return filterCubism;
        case FILTER_MODERNISM:
            let filterModernism = { ...state, checkedRadio: 6, foundNull: false };
            let filterModernismFromstartPriceList = state.startPriceList.filter((item) => {
                return item.type === action.name;
            }
            );
            filterModernism.priceList = filterModernismFromstartPriceList;
            return filterModernism;
        case SHOW_ALL_PRICE:
            let showAllPrice = { ...state, checkedRadio: 7, foundNull: false };
            showAllPrice.priceList = state.startPriceList;
            return showAllPrice;
        default:
            return state;
    }
};

export default CatalogReduser;