import { createStore, combineReducers } from "redux";
import appReduceer from './app_reducer'
import adminReduceer from './admin_reducer'
const allReduceer = combineReducers({
    appReduceer,
    adminReduceer
})
export default createStore(
    allReduceer
)