let max = 50;
const animated = document.querySelector(".santa");

/*const music = document.embeds["Santa"];
music.play(); // Start playback if supported
music.stop(); // Stop playback if supported
*/


let snow = document.querySelector(".snowfall");

for (i = 0; i < max; i++){
    span = document.createElement("span");

    let size = 8 + Math.random() * 16;
    let pos = Math.random() * 100;
    let delay = Math.random() * 8;
    let duration = 8 + Math.random() * 15;
    let opacity = 0.2 + Math.random();

    span.style.setProperty("--i", i);

    span.style.setProperty("--opacity", opacity);
    span.style.setProperty("--size", size+"px");
    span.style.setProperty("--pos", pos+"%");
    span.style.setProperty("--delay", delay+"s");
    span.style.setProperty("--duration", duration + "s");

    snow.append(span);
    
}

