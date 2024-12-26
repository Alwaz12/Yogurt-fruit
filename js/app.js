document.addEventListener('DOMContentLoaded', () => {
    const videoSections = document.querySelectorAll('.video-section');
    const videos = document.querySelectorAll('video');

    // Intersection Observer for video playback and reset
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            
            if (entry.isIntersecting) {
                // Reset video to beginning when scrolled into view
                video.currentTime = 0;
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Trigger when at least 50% of video is in view
    });

    // Observe both video sections
    videoSections.forEach(section => videoObserver.observe(section));
});