/**
 * The SettingsContextProvider component is responsible for providing the timer settings and tasks state
 * to the child components through the SettingsContext. It is a wrapper component that uses the useState
 * hook from React to manage the state variables.
 *
 * The component:
 * - Imports necessary elements from 'react' for creating the context and managing state.
 * - Creates the SettingsContext using the createContext function from React.
 * - Defines the SettingsContextProvider function component that manages the state variables:
 *    - 'pomodoro': Represents the current duration for the timer.
 *    - 'executing': Represents the active timer settings.
 *    - 'startAnimate': Indicates whether the timer animation should be started or paused.
 *    - 'tasks': Holds an array of tasks.
 * - Defines functions to update the state:
 *    - 'setCurrentTimer': Sets the active state of the timer and updates the timer accordingly.
 *    - 'startTimer': Starts the timer animation.
 *    - 'pauseTimer': Pauses the timer animation.
 *    - 'children': A helper function that formats and returns the remaining time as a string.
 *    - 'SettingsBtn': Clears the session storage by resetting the executing state and setting pomodoro to 0.
 *    - 'updateExecute': Updates the executing state and configures the timer based on the new settings.
 *    - 'setTimerTime': Sets the timer according to the currently active state.
 *    - 'stopAimate': Stops the timer animation.
 *    - 'addTask': Adds a new task to the tasks array.
 * - Returns the SettingsContext.Provider component, which provides the state variables and functions to the child components.
 *    - The value prop of the provider component contains the state variables and functions.
 *    - The props.children represents the child components wrapped by the provider.
 * - Exports the SettingsContextProvider component as the default export.
 *
 * By wrapping the application with this SettingsContextProvider component, child components can access and manipulate
 * the shared state related to the timer settings and tasks.
 */

import React from "react";
import { useState, createContext } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  const [tasks, setTasks] = useState([]);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAimate() {
    setStartAnimate(false);
  }

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAimate,
        tasks,
        addTask,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
