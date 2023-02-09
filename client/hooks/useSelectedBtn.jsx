import { useReducer } from "react";

export const useSelectedButton = () => {
  /**
   * this function is used to generate new state object based on user click
   * and it make sure that user's last click become invalid
   * @param {string} clickText
   * @param {{ home : boolean,
   *           projects: boolean,
   *           inbox: boolean,
   *           settings : boolean
   * }} oldState
   *
   * @returns {{ home : boolean,
   *            projects: boolean,
   *            inbox: boolean,
   *            settings : boolean
   * }} updated object
   */
  const invalidateLastClick = (clickText, oldState) => {
    const newState = {};
    for (const key in oldState) {
      if (key === clickText) {
        newState[key] = true;
        continue;
      }
      newState[key] = false;
    }
    return newState;
  };

  // reducer
  const reducer = (state, action) => {
    switch (action.buttonText) {
      case "home":
        return invalidateLastClick("home", state);
      case "projects":
        return invalidateLastClick("projects", state);
      case "inbox":
        return invalidateLastClick("inbox", state);
      case "settings":
        return invalidateLastClick("settings", state);
      default:
        new Error("unknow click");
    }
  };

  // state that keep track of selected section from the menu
  const [selectedButton, dispatch] = useReducer(reducer, {
    home: true,
    projects: false,
    inbox: false,
    settings: false,
  });

  return [selectedButton, dispatch];
};
