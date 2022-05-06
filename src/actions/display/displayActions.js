import { SWITCH_THEME, SWITCH_LANGUAGE } from "./actionTypes";

export const switchTheme = () => {
    return function(dispatch) {
        dispatch({
            type: SWITCH_THEME,
            payload: null
        })
    }
}

export const switchLanguage = () => {
    return function(dispatch) {
        dispatch({
            type: SWITCH_LANGUAGE,
            payload: null
        })
    }
}