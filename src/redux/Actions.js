import { BUG_ADDED, BUG_REMOVED, BUG_SOLVED, CLEAN_REMOVED_BUGS, DELETE_REMOVED_BUG,  GET_BUG,  LOGIN, LOGOUT, RESTORE_REMOVED_BUG } from "./ActionsType";

/******************************* AUTHENTICATE SECTION **************************************/
/**
 * @description create a user 
 * @param {} username name of the user
 */
const logged_in = ({username}) => ({
    type: LOGIN,
    payload: {
        username,
    }
})

/**
 * @description Log out the current user loss in all app data
 */
const logged_out = () => ({
    type:LOGOUT
})


/************************************ BUG TASKS ****************************************/
/**
 * 
 * @param {*} id - bug id
 * @returns bug having the given id
 */
const getBug = ({id}) => ({
    type: GET_BUG,
    payload: {
        id,
    }
})
/**
 * @description  add bug to the curent list
 * @param {*} founder a person who has finded the bug 
 * @param {*} subject subject of bug 
 * @param {*} description bug description in detail
 */
const added = ({founder ,name, description}) => ({
    type: BUG_ADDED,
    payload: {
        id: new Date().getTime().toString(),
        founder,
        name,
        description,
        found_time: new Date().toUTCString(),
        resolved: false,
        resolver: null,
        resolved_time: null,    
    },
})

/**
 * @description add who solved the bug
 * @param {*} id unique id of the bug 
 * @param {*} id who resolved the bug 
 */
const solved = ({id, resolver}) => ({
    type: BUG_SOLVED,
    payload: {
        id,
        resolver,
        resolved_time: new Date().toUTCString(),
    },
})

/**
 * 
 * @param {*} id unique id of the bug
 * @param {*} remover who removed the bug
 */
const removed = ({id, remover}) => ({
    type: BUG_REMOVED,
    payload: {
        id,
        remover
    },
})

/****************************** TRASH ACTIONS *************************************************/

/**
 * @description clear all the bugs from removed list 
 */
const cleanRemovedBugs = () => ({
    type: CLEAN_REMOVED_BUGS,
})


/**
 * 
 * @param {*} id - bug id which has to restore
 */
const restoreBug = ({id}) => ({
    type: RESTORE_REMOVED_BUG,
    payload: {
        id
    }
})

const deleteBug = ({id}) => ({
    type: DELETE_REMOVED_BUG,
    payload: {
        id
    }
})

export {
    logged_in,
    logged_out,
    added,
    removed,
    solved,
    cleanRemovedBugs,
    restoreBug,
    deleteBug,
    getBug
}