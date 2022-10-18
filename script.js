const handleOnMouseMove = e =>
{
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
        // w = rect.width,
        // h = rect.height,
        // browserZoomLevel = window.devicePixelRatio;
        // r = Math.min(w, h) * 0.06;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    // target.style.setProperty("border-radius", `${r}px`);
}

for(const card of document.querySelectorAll(".card, .wide-card"))
{
    card.onmousemove = e => handleOnMouseMove(e);
    // const rect = card.getBoundingClientRect(),
    //     w = rect.width,
    //     h = rect.height,
    //     browserZoomLevel = window.devicePixelRatio;
    //     r = Math.min(w, h) * 0.06;
    // card.style.setProperty("border-radius", `${r}px`);
}