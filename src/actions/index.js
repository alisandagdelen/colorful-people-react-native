import _ from 'lodash';
import componentActions from "~/src/actions/actions.js";

const generateActionConstantName = (name) => {
  return _.snakeCase(name).toUpperCase();
};


const generateActionCreator = (action, name) => {
  const actionConstant = generateActionConstantName(name);

  if (!action.dispatch) {
    return (...args) => {
      const payload = action.arguments
        ? _.zipObject(action.arguments, args)
        : args[0];
      return { type: actionConstant, payload };
    };
  }

  return (...args) => {
    return dispatch => {
      _.forEach(action.dispatch, (subAction, subActionName) => {
        const argumentNames = subAction.argumentIndices.map(index => action.arguments[index]);
        const argumentz = subAction.argumentIndices.map(index => args[index]);
        const subActionConstant = generateActionConstantName(subActionName);
        const payload = _.zipObject(argumentNames, argumentz);
        dispatch({ type: subActionConstant, payload });
      })
    };
  };
};


const generateActionCreators = (componentActions) => {
  const generatedActions = {};

  _.forEach(componentActions, (actions, component) => {
    if (!generatedActions[component]) {
      generatedActions[component] = {}
    }

    _.forEach(actions, (action, name) => {
      generatedActions[component][name] = generateActionCreator(action, name)
    })
  });

  return generatedActions
};


const generateActionConstants = (componentActions) => {
  const constants = {};

  _.forEach(componentActions, (actions) => {

    _.forEach(actions, (action, name) => {
      if (action.dispatch) {
        return _.forEach(action.dispatch, (action, name) => {
          const actionConstant = generateActionConstantName(name);
          constants[actionConstant] = actionConstant;
        })
      }

      const actionConstant = generateActionConstantName(name);
      constants[actionConstant] = actionConstant;
    })
  });

  return constants;
};

export const actions = generateActionCreators(componentActions);
export const types = generateActionConstants(componentActions);
