import { SWITCH_THEME, SWITCH_LANGUAGE } from "../actions/display/actionTypes";
import * as l from '../Resources/languages';

const initialState = {
    darkMode : false,
    lang : "en",
    content: l.en
}



export default function DisplayReducer(state = initialState, action) {
    switch(action.type){
        case SWITCH_THEME :
            return {...state, darkMode: !state.darkMode}
            //return {darkMode: !state.darkMode, lang: state.lang}
        case SWITCH_LANGUAGE :
            let newLang = state.lang==='en' ? 'fr' : 'en'
            return {darkMode: state.darkMode, lang: newLang, content: l[newLang]}
        default:
            return initialState;
    }
}