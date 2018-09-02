$(document).ready(function () {
    var video = document.getElementById("video")
    var videoCapture = document.getElementById("videoCapture")
    var videoSrcHls = "video/out.m3u8"

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrcHls);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else {
        addSourceToVideo(video, videoSrcInMp4, 'video/mp4');
        video.play();
    }

    video.onplay = function () {
        var stream = video.captureStream();
        videoCapture.srcObject = stream
        videoCapture.play()
    }

    function addSourceToVideo(element, src, type) {
        var source = document.createElement('source');
        source.src = src;
        source.type = type;
        element.appendChild(source);
    }
})