# Smash-or-pass
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smash or Pass</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <div class="container">
        <h1>Smash or Pass</h1>
        <p class="instructions">
            Press Smash or Pass for each photo.
        </p>

        <div class="image-box">
            <img id="personImage" src="images/placeholder1.png" alt="Person">
        </div>

        <div class="buttons">
            <button id="smashBtn" class="smash">SMASH</button>
            <button id="passBtn" class="pass">PASS</button>
        </div>
    </div>

    <div id="overlay" class="overlay hidden">
        <h2 id="overlayText"></h2>
    </div>

    <script src="script.js"></script>
</body>
</html>