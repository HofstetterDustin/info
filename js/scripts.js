/*on load this should show*/
fetch('/profiles/objective.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('objective').innerHTML = content;
    });
/* too many button click to make it a button*/
fetch('/profiles/skills.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('profileSkills').innerHTML = content;
    });

//control individual characters
const title = document.getElementsByTagName('h1')[0]
    .innerText
    .split("")
    .map((e, i) => e != " " ? `<span class="char">${e}</span>` : `<span class="space">&nbsp;</span>`)
    .join("");

document.getElementsByTagName('h1')[0].innerHTML = title

let title2 = document.getElementsByTagName('h1')[0];
var tl = new TimelineMax();

tl.staggerFrom('h1 .char', 1, {
    autoAlpha: 0,
    scale: 50,
    cycle: {
        x: randomPos,
        y: randomPos,
    },
    rotation: -1080,
    ease: Power4.easeOut,
}, .1, "heading")
    .staggerFrom('.horizontal', 1, {
        cycle: { x: [2000, -2000], },
        ease: Power3.easeOut,
    }, 0, "heading+=1.25", "horizontal")
    .staggerFrom('.vertical', 1, {
        cycle: {
            y: [-2000, 2000],
        },
        ease: Power4.easeOut,
    }, 0, "horizontal-=0.9")

// To do 
// *stagger disappear from both ends
// *animate right/left lines to center
// *rotate lines & collapse
/*   .staggerTo('h1 .char', .2, {
      autoAlpha: 0,
      ease: Power4.easeOut,
   }, -0.1, "staggerHide")

.staggerTo('h1 .char', .2, {
      autoAlpha: 0,
      ease: Power4.easeOut,
   }, 0.1, "staggerHide")
  .to('.right', .2, {
    x: $('window').innerheight / 2,
    }, "staggerHide")*/

function randomPos(i) {
    let val = (Math.random() * 1000) * (i + 1);
    val *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return val;
}    