window.PlayAudio = (elementName) => {
    document.getElementById(elementName).play();
}

function DrawCard(imagePath) {
    document.getElementById("card").src = imagePath;
}

