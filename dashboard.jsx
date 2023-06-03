import finish from "./finish"

const dashboard = () => {
  return(
    <div>
      <body>
      <header>
        <div class="logosec">
          <div class="logo">Spinely</div>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png" class="icn menuicn" id="menuicn" alt="menu-icon"/>
        </div>
      </header>
        <div class="main-container">
          <div class="navcontainer">
            <nav class="nav">
              <div class="nav-upper-options">
                <div class="nav-option option1">
                  <a href="dashboard.jsx">
                    <h3> Dashboard</h3>
                  </a>
                </div>

                <div class="option2 nav-option">
                  <a href="history.jsx">
                    <h3> History</h3>
                  </a>
                </div>

                <div class="option2 nav-option">
                  <a href="calibration.jsx">
                    <h3>Calibrate</h3>
                  </a>
                </div>

                <div class="nav-option option6">
                  <a href="settings.jsx">
                    <h3> Settings</h3>
                  </a>
                </div>

                <div class="nav-option logout">
                  <a href="login.jsx">
                    <h3> Logout</h3>
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div class="main">
            <div class="report-container">
              <div class="report-header">
                <h1 class="recent-Articles">Report</h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}
export default finish;