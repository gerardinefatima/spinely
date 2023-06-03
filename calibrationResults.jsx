export default calibrationResults(){
  return(
    <div>
      <title>Calibration Results</title>
      <h1>Calibration Results</h1>
      <div className={dashboard}>
        <div className={dashboard-heading}>Acceptable ranges</div>
        <ul className={styles.angle-list}>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Upper back</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Middle back</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Lower back</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Left shoulder</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Right shoulder</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Left side</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
          <li className={styles.angle-list-item}>
            <span className={styles.angle-name}>Right side</span>
            <span className={styles.angle-values}>minstyles.angle to maxstyles.angle</span>
          </li>
        </ul>
      </div>
      <button className={back-button} onclick={location.href='finish.jsx'}>Back</button>
    </div>
  )
}
