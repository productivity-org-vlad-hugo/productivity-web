import "./Pomodoro.css";
import { useEffect } from "react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pomodoro = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [stopPressed, setStopPressed] = useState(false);

  
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours}:${minutes}:${remainingSeconds}`;
    };

    useEffect(() => {
        let timerId;

        if (isRunning) {
            timerId = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
        setStopPressed(true);
    };

    const handleRestart = () => {
        setCount(0);
    };

    return (
        <div className="pomodoro-page">
            <h1>Counter: {formatTime(count)}</h1>
            <div>
                <button
                    className="pomodoro-button"
                    onClick={handleStart}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    className="pomodoro-button"
                    onClick={handleStop}
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button className="pomodoro-button" onClick={handleRestart}>
                    Restart
                </button>
            </div>

            {stopPressed && (
                <h2 className="productivity-message-new-post">
                    Add your productivity to a new post!
                </h2>
            )}

            {stopPressed && (
                <Link to="/posts/create" className="pomodoro__link">
                    <button className="pomodoro-button">Create Post</button>
                </Link>
            )}
        </div>
    );
};

export default Pomodoro;
  
  
 