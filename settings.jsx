const settings = () => {
	return(
		<div>
			<head>
				<meta charset="UTF-8"/>
				<meta http-equiv="X-UA-Compatible"content="IE=edge"/>
				<meta name="viewport"content="width=device-width,initial-scale=1.0"/>
				<title>Spinely</title>
				<link rel="stylesheet"href="styleindex.css"/>
				<link rel="stylesheet"href="responsiveindex.css"/>
			</head>
		<body>
			<header>
				<div class="logosec">
					<div class="logo">Spinely</div>
					<img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"lass="icn menuicn"id="menuicn"alt="menu-icon"/>
				</div>
			</header>
			<div class="main-container">
				<div class="navcontainer">
				<nav class="nav">
					<div class="nav-upper-options">
					<div class="nav-option option6">
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
			
					<div class="nav-option option1">
						<a href="settings.jsx">
						<h3> Settings</h3>
						</a>
					</div>
						<div class="nav-option logout">
							<a href="login.jsx"><h3> Logout</h3></a>
						</div>
					</div>
					</nav>
				</div>
				<div class="main">
					<div class="report-container">
						<div class="report-header">
							<h1 class="recent-Articles">Profile settings</h1>
						</div>
					</div>
				</div>
			</div>
			<script src="./index.js"></script>
		</body>
		</div>
	)
}
export default settings;
