/**
 * The TaskList component is responsible for rendering the list of tasks. It is a functional component
 * that uses the 'useContext' hook from React to access the SettingsContext.
 *
 * This component:
 * - Destructures the 'tasks' variable from the SettingsContext, which contains the list of tasks.
 * - Returns a JSX expression which renders a title and an unordered list of tasks.
 *
 * Within the JSX returned by this component:
 * - The tasks are mapped over using the 'map' function, and each task is displayed as a separate list item.
 * - Each list item is given a unique key by using its index in the tasks array.
 *
 * This component doesn't take any props.
 *
 * By exporting this component, it can be imported and used in other parts of the application where required.
 */

import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const TaskList = () => {
  const { tasks } = useContext(SettingsContext);

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
