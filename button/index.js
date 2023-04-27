const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (Event) => {
    const x = (Event.pageX - btnEl.offsetLeft);
    const y = (Event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x+"px");
    btnEl.style.setProperty("--yPos", y+"px" );
})