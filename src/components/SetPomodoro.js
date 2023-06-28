/**
 * The SetPomodoro component allows users to configure the durations for the different pomodoro timers.
 * It uses a form to collect the settings for work, short break, and long break timers.
 *
 * The component manages its own local state for the new timer settings with the useState hook,
 * and uses the SettingsContext to access the updateExecute function.
 *
 * The component takes no props.
 *
 * The handleChange function handles changes to the input fields, updating the newTimer state accordingly.
 * The handleSubmit function handles form submission, preventing the default form submission behavior
 * and updating the global timer settings using the updateExecute function from the SettingsContext.
 *
 * The component returns a form wrapped in a div with the class "form-container". Inside the form, there
 * are input fields for the work, short break, and long break timer settings, and a submit button to save
 * the new settings.
 */

import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2, // The initial work timer setting in minutes
    short: 0.1, // The initial short break timer setting in minutes
    long: 0.5, // The initial long break timer setting in minutes
    active: "work", // The timer currently being set
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case "work":
        setNewTimer({ ...newTimer, work: parseInt(value) });
        break;
      case "shortBreak":
        setNewTimer({ ...newTimer, short: parseInt(value) });
        break;
      case "longBreak":
        setNewTimer({ ...newTimer, long: parseInt(value) });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
