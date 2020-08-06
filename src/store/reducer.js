import * as actionTypes from './actionTypes';
import FreightData from './FreightData';
import SubsetOptionGuide from '../components/FreightOptions/SubsetOptionGuide/SubsetOptionGuide.js';
const initialState = {
    subsetOptions:[
        {
            "type":"STATUS",
            "id":"Status",
            "selected":false,
            "detail_data":{...SubsetOptionGuide["STATUS"]}
        },
        {
            "type":"MODE",
            "id":"Mode",
            "selected":false,
            "detail_data":{...SubsetOptionGuide["MODE"]}
        },
        {
            "type":"CLIENT NAME",
            "id":"Client Name",
            "selected":false,
            "detail_data":{...SubsetOptionGuide["CLIENT NAME"]}
        },
        {
            "type":"ID",
            "id":"ID",
            "selected":false,
            "detail_data":{...SubsetOptionGuide["ID"]}
        }
    ],
    FreightShipmentsData: [...FreightData],
    selectedSubsetOption:null,
};
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SELECT_SUBSET_OPTION: {
            let selectedSubsetDetail = {};
            let updatedSubsetOptions = state.subsetOptions.map((element) => {
                let selected = false;
                if(element.id === action.id){
                    selected = true;
                    //use this as the selected Subset Object
                    selectedSubsetDetail = {
                        ...element,
                        selected
                    }
                }
                return {
                    ...element,
                    selected: selected
                }
            })
            return{
                ...state,
                subsetOptions: [
                    ...updatedSubsetOptions
                ],
                selectedSubsetOption: selectedSubsetDetail,
            }
        }
        case actionTypes.UPDATE_SELECTED_SUBSET_OPTION: {
            let updatedSubsetOptions = [...state.subsetOptions]
            updatedSubsetOptions = state.subsetOptions.map((element) => {
                if(element.id === action.id){
                    return{
                        ...element,
                        detail_data : action.updatedSubset.detail_data
                    }
                }
                else return {
                    ...element,
                }
            })
            return{
                ...state,
                subsetOptions: [
                    ...updatedSubsetOptions
                ],
                selectedSubsetOption: action.updatedSubset,            }
        }
        default:
            return state
    }
};

export default reducer;