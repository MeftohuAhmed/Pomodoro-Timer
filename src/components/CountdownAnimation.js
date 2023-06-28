/**
 * The CountdownAnimation component is responsible for rendering and controlling
 * the visual countdown timer animation. The countdown timer displays the remaining
 * time for the current pomodoro session and updates in real time.
 * 
 * The timer uses the react-countdown-circle-timer library for the countdown animation.
 * 
 * The component takes the following props:
 * - `key`: A unique React key to ensure the timer properly resets when the countdown ends.
 * - `timer`: The initial time (in minutes) for the countdown.
 * - `animate`: A boolean to control whether the timer should be running or paused.
 * - `children`: Any child components or elements to render inside of the timer.
 * 
 * The CountdownAnimation component uses the SettingsContext to access the stopAnimate function,
 * which stops the countdown animation when it's complete.
 * 
 * The CountdownCircleTimer component's colors, strokeWidth, size, trailColor, and onComplete props
 * are hardcoded for the current use case, but could be passed as props if this component needed to be 
 * reused with different styling or behavior.
 */


import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#FE6F6B", 0.33],
        ["#FE6F6B", 0.33],
        ["#FE6F6B", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
