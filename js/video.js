const openpopup = document.querySelector(".play");
const video = document.querySelector("#video-container")
openpopup.onclick = function () {

    video.classList.add("video-hidden");

}

document.onclick = function (e) {
    const attr = e.target.getAttribute('data-outside')
    if (attr == 'close') {
        video.classList.remove("video-hidden");
    }

}