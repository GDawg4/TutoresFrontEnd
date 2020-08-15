import { combineReducers } from 'redux';
import * as types from '../types/classes';

const selectedClass = (state = null, action) => {
    switch (action.type) {
        case types.CLASS_SELECTED:{
            return null;
        }
        default:{
            return null;
        }
    }
};

const classes = combineReducers({selectedClass});

export default classes;

export const getSelectedClass = state => state.selectedClass;
