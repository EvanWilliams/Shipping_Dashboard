import * as actionTypes from '../../actionTypes';

export const selectSubsetOption = (id) => {
    return {
        type:actionTypes.SELECT_SUBSET_OPTION,
        id: id
    };
};

export const updateSelectedSubsetOption = (updatedSubset,id) => {
    return {
        type:actionTypes.UPDATE_SELECTED_SUBSET_OPTION,
        updatedSubset: updatedSubset,
        id: id
    };
};