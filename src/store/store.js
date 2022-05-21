import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import phoneReducer from './reducers/phoneSlice'
import partPhoneReducer from './reducers/orderPartPhone'

const rootReducer = combineReducers({
    userReducer,
    phoneReducer,
    partPhoneReducer
})

export const setupStore =()=>{
    return configureStore({
        reducer: rootReducer,
    })
}
