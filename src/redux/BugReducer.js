import {
  BUG_ADDED,
  BUG_REMOVED,
  BUG_SOLVED,
  CLEAN_REMOVED_BUGS,
  DELETE_REMOVED_BUG,
  GET_BUG,
  LOGIN,
  LOGOUT,
  RESTORE_REMOVED_BUG,
} from "./ActionsType";

/**
 * @param {*} user current user
 * @param {*} bug bug to view
 * @param {*} bugs list of current bugs
 * @param {*} trashBugs list of removed bugs
 */
const initial_state = {
  user: null,
  bugs: [],
  trashBugs: [],
  bug: null,
};

/**
 * @description reducer for our store
 * @param {*} state state of our applications
 * @param {*} type dispatched action
 * @param {*} payload data coming with action
 * @returns
 */
const BugReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    /***************** AUTHENTICATION *******************/
    // user has logged in
    case LOGIN:
      return {
        ...state,
        user: payload.username,
      };

    // user logged out
    case LOGOUT:
      return {
        user: null,
        bugs: [],
        trashBugs: [],
      };

    /********************** BUG TASK ********************/
    // get bug
    case GET_BUG:
      return {
        ...state,
        bug: state.bugs.filter((bug) => bug.id === payload.id)[0],
      };

    // bug added
    case BUG_ADDED:
      //   const {
      //     id,
      //     founder,
      //     subject,
      //     description,
      //     found_time,
      //     resolved,
      //     resolver,
      //     resolved_time,
      //   } = payload;
      return {
        ...state,
        bugs: [...state.bugs, payload],
      };

    // bug SOLVED
    case BUG_SOLVED:
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id !== payload.id
            ? bug
            : {
                ...bug,
                resolver: bug.resolved ? null : payload.resolver,
                resolved_time: bug.resolved ? null : payload.resolved_time,
                resolved: !bug.resolved,
              }
        ),
      };

    // bug removed
    case BUG_REMOVED:
      const new_bug_list = state.bugs.filter((bug) => bug.id !== payload.id);
      const removed_bug = state.bugs.filter((bug) => bug.id === payload.id);
      return {
        ...state,
        bugs: new_bug_list,
        trashBugs: [
          ...state.trashBugs,
          {
            ...removed_bug[0],
            remover: payload.remover,
          },
        ],
      };

    // clean the removed bugs
    case CLEAN_REMOVED_BUGS:
      return {
        ...state,
        trashBugs: [],
      };

    case RESTORE_REMOVED_BUG:
      const new_trash_list = state.trashBugs.filter(
        (bug) => bug.id !== payload.id
      );
      const bug_to_restore = state.trashBugs.filter(
        (bug) => bug.id === payload.id
      );
      const { remover, ...restoredBug } = bug_to_restore[0];
      return {
        ...state,
        bugs: [...state.bugs, restoredBug],
        trashBugs: new_trash_list,
      };

    case DELETE_REMOVED_BUG:
      return {
        ...state,
        trashBugs: state.trashBugs.filter((bug) => bug.id !== payload.id),
      };

    default:
      return state;
  }
};

export default BugReducer;
