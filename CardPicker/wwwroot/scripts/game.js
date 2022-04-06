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

window.StartWaiting = () => {
    document.getElementById("uroboros-glow").classList.remove("hide-element");
    document.getElementById("uroboros").classList.remove("hide-element");
    document.getElementById("waiting-sound-effect").play();
}

window.PresentCard = () => {
    document.getElementById("uroboros").classList.add("hide-element");
    document.getElementById("uroboros-glow").classList.add("hide-element");

    let audioElement = document.getElementById("waiting-sound-effect");
    audioElement.pause();
    audioElement.currentTime = 0;

    document.getElementById("drawed-card").classList.remove("hide-element");
    document.getElementById("draw-sound-effect").play();
}