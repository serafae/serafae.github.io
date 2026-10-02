// Sparkles helper script
// Moved out of the HTML so the page can be edited cleanly.

(function () {
  const clock = document.getElementById("clock");

  if (clock) {
    const updateClock = () => {
      const d = new Date();
      const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map((n) => n.toString().padStart(2, "0"))
        .join(":");

      clock.textContent = time;
    };

    updateClock();
    setInterval(updateClock, 999);
  }

  const cursorImg = document.getElementById("imagineCursor");
  const cursorContainer = document.getElementById("containerCursor");

  if (cursorImg && cursorContainer) {
    document.addEventListener("mousemove", (event) => {
      cursorContainer.style.display = "block";
      cursorImg.style.left = `${event.pageX}px`;
      cursorImg.style.top = `${event.pageY}px`;
    });

    document.addEventListener("mouseleave", () => {
      cursorContainer.style.display = "none";
    });
  }
})();
