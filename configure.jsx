const configure = () => {
  return(
    <div>
      <title>Configure</title>
      <h1>Configure</h1>
      <p>Choose the duration of the calibration:</p>
      <div className={styles.duration-buttons}>
        <button>30s</button>
        <a href="calibrate.jsx"><button>1min</button></a>
        <span className={styles.note}>Recommended for accurate results</span>
      </div>
    </div>
  );
}
export default configure;