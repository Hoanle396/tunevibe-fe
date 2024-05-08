"use client"
import React, { memo, useEffect, useState } from "react";

type Props = {
  lastTime: number;
};

const TimeLive = ({ lastTime }: Props) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = currentTime - lastTime;

      if (timeLeft < 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      } else {
        setTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [lastTime]);

  const weeks =
    timeLeft > 0 ? Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7)) : 0;
  const days =
    timeLeft > 0
      ? Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        )
      : 0;
  const hours =
    timeLeft > 0
      ? Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      : 0;
  const minutes =
    timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) : 0;
  const seconds =
    timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60)) / 1000) : 0;

  return (
    <p>
      {weeks ? weeks + " weeks " : days + " days "}
      {(hours > 9 ? hours : `0${hours}`) +
        " : " +
        (minutes > 9 ? minutes : `0${minutes}`) +
        " : " +
        (seconds > 9 ? seconds : `0${seconds}`)}
    </p>
  );
};

export default memo(TimeLive);