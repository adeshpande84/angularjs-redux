import cloneDeep from 'lodash.clonedeep';

const initialState = {};

export function ProviderReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT_STAGING':
            console.log('ProviderReducer ACCEPT_STAGING',state,action);
            var stateCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            stateCopy.addressList[addressIndex].master = stateCopy.addressList[addressIndex].staging;
            stateCopy.addressList[addressIndex].staging = {};
            return stateCopy;
        case 'SAVE':
            //create new state by copying staging to master. mark staging as processed. DO NOT mutate existing state. Return a new copy of state
            return state;
        case 'ROLLBACK':
            //create new state by marking staging as processed. master remains same. DO NOT mutate existing state. Return a new copy of state
            return state;
        default:
            return state;
    }
}