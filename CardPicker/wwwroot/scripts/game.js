window.PlayAudio = (elementName) => {
    document.getElementById(elementName).play();
}

window.StopAudio = (elementName) => {
    let audioElement = document.getElementById(elementName);
    audioElement.pause();
    audioElement.currentTime = 0;
}

window.HideElement = (elementName) => {
    document.getElementById(elementName).classList.add("hide-element");
}

window.ShowElement = (elementName) => {
    document.getElementById(elementName).classList.remove("hide-element");
}