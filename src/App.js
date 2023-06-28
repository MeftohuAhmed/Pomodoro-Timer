/**
 * The App component is the main application component that aggregates other components and
 * renders the application interface.
 *
 * It imports all the necessary components such as Button, CountdownAnimation, SetPomodoro,
 * AddTask, and TaskList from their respective directories. It also imports the SettingsContext
 * to have access to the global state and its manipulation functions.
 *
 * App component is a functional component that:
 * - Destructures the necessary state variables and functions from the SettingsContext.
 * - Uses a useEffect hook to update the execute state each time 'executing' or 'startAnimate' changes.
 * - Returns a JSX expression which renders the application interface. The rendered interface consists of a
 *   title, a short description, AddTask component, TaskList component, and depending on the state of the
 *   pomodoro timer, either the SetPomodoro component or the timer control buttons and the countdown animation.
 *
 * The state variables and functions used in this component include:
 * - pomodoro: the current value of the timer.
 * - executing: an object that represents the current executing timer (work, short break, or long break).
 * - startAnimate: a boolean that represents whether the timer should be running or not.
 * - children: an array of child elements to be passed to the CountdownAnimation component.
 * - startTimer: a function that starts the timer.
 * - pauseTimer: a function that pauses the timer.
 * - updateExecute: a function that updates the executing state.
 * - setCurrentTimer: a function that sets the current timer type (work, short break, or long break).
 * - SettingsBtn: a function that shows the settings when clicked.
 *
 * Exporting the App component allows it to be used as the main component in other parts of the application.
 */

import React, { useEffect, useContext } from "react";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate, updateExecute]);

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      <AddTask />
      <TaskList />
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <div>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={
                  executing.active === "long" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>

          <div className="button-wrapper">
            <Button
              title="Start"
              activeClass={!startAnimate ? "active" : undefined}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
