import reduxFastActions from 'redux-fast-actions';
import actionsConfig from "./actions.js";

const fastActions = reduxFastActions(actionsConfig);
export const actions = fastActions.actions;
export const types = fastActions.types;
