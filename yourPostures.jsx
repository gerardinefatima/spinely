const yourPostures = () => {
  function handleSettingsChange(value) {
    if (value === "update") {
      location.href = "calibrate.html";
    } else if (value === "delete") {
      // Handle delete functionality
    }
  }
  return(
    <div>
        <head>
          <title>Your Posture</title>
          <link rel="stylesheet" type="text/css" href="styles.css"/>

        </head>
        <body>
          <h1>Your Posture</h1>
          <div class="dashboard">
            {/* POSTURE 1 */}
            <div class="session-item">
              <div class="session-title">Posture 1</div>
              <div class="session-settings">
                <label for="posture-settings-1">Settings:</label>
                <select id="posture-settings-1" onchange="handleSettingsChange(this.value)">
                  <option value="">Select an option</option>
                  <option value="update">Update Calibration</option>
                  <option value="delete">Delete Recorded Session</option>
                </select>
              </div>
            </div>
            {/* ADD MORE SESSION ITEMS HERE */}
          </div>

          <button class="add-new-button" onclick="location.href='calibration.html'">Add New Posture</button>
          <button class="back-home-button" onclick="location.href='dashboard.html'">Back to Dashboard</button>
        </body>
    </div>
  )
}
export default yourPostures;