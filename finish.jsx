const finish = () => {
  // Add event listeners to the buttons
  const seeResultsButton = document.getElementById('see-results-button');
  seeResultsButton.addEventListener('click', function() {
      window.location.href = 'calibrationResults.jsx';
  });

  const yourPosturesButton = document.getElementById('your-postures-button');
  yourPosturesButton.addEventListener('click', function() {
    window.location.href = 'yourPosture.jsx';
  });

  return(
    <div>
      <head>
      <title>Finish</title>
      </head>
      <body>
        <div class="done-text">Done!</div>
        <div class="small-text">See results</div>
        <div class="action-buttons">
          <button class="see-results-button" onclick="location.href='calibrationResults.jsx'">See Results</button>
          <button class="your-postures-button" onclick="location.href='yourPostures.jsx'">Your Postures</button>
        </div>
      </body> 
    </div>
  )
}
export default finish;
