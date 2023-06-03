const calibration = () => {
  return(
    <div>
      <head>
        <title>Prepare</title>
      </head>
      <body>
        <h1>Prepare</h1>
        <div className={styles.instructions}>
          Let's calibrate the device while you are sitting straight up.<br/>
          Please make sure to place the sensors correctly before we begin.
        </div>
        <button className={styles.ready-button} onclick="location.href='configure.jsx'">Ready!</button>
      </body>
    </div>
  )
}
export default calibration;
