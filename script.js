const videoElements = document.querySelectorAll(".video-box, .video-title");

      if (videoElements.length && "IntersectionObserver" in window) {
        videoElements.forEach((element) => element.classList.add("will-animate"));

        const videoObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });

        videoElements.forEach((element) => videoObserver.observe(element));
      }