import React, { useState, useEffect } from "react";
const countDown = () => {
  const currentDate = new Date().getTime();
  const futureDate = new Date("2/10/23").getTime();
  const gap = Math.floor(+futureDate - +currentDate);
  if (gap < 0) {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
    };
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return {
    d,
    h,
    m,
    s,
  };
};
const CountdownTimer = () => {
  const [time, setTime] = useState(countDown());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(countDown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const { d, h, m, s } = time;

  return (
    <div className="timer">
      <span> {d} days </span>
      <span> {h} hours </span>
      <span> {m} Minute </span>
      <span> {s} Second </span>
    </div>
  );
};

export default CountdownTimer;
