const calibrate = () => {
    // JavaScript code for the countdown timer
    const startTime = (duration, display) => {
      var timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time Remaining: " + minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(timer);
          display.textContent = "Time Up!";
          location.href = "finish.jsx";
        }
      }, 1000);

    }

    window.useEffect = function () {
      var duration = 2; // Duration in seconds
      var display = document.querySelector(".timer");
      startTimer(duration, display);
    };

  return(
    <div>
      <title>Calibrate</title>
      <h1>Calibrate</h1>
      <button className={styles.start-button}>"Start Calibrating"</button>
      <div className={styles.timer}>"Time Remaining: 01:00"</div>
      <div className={styles.message}>"Please don't move."</div>
    </div>
  )
}
export default calibrate;
