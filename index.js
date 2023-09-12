function classNameArray(cName) {
  return Array.from(document.getElementsByClassName(cName));
}

function select(e) {
  classNameArray("header-button").forEach((b) => {
    b.classList.remove("active-header-button");
    let content = document.getElementById(b.dataset.content);
    content.hidden = true;
  });
  var target = e.target;
  target.classList.add("active-header-button");
  document.getElementById(target.dataset.content).hidden = false;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function helloDeobfuscation() {
  const elem = document.getElementById("hello")
  const text = elem.innerHTML;
  for(let i = 0; i < text.length; i++) {
    
    let cur = text.substring(0, i + 1);
    elem.innerHTML = cur;
    sleep(100);
  }
}

window.onload = function () {
  classNameArray("header-button").forEach((b) => {
    b.onclick = select;
  });
  classNameArray("photo").forEach((p) => {
    tippy(p, {
      content: p.dataset.blurb
    });
  });

  // document.getElementById("hello").onchange = helloDeobfuscation;

  const aboutElem = document.getElementById("c3");
  var observer = new MutationObserver(async function(){
    if(aboutElem.hidden != true) {
        // doSomething
        await helloDeobfuscation();
    }
  });

  observer.observe(aboutElem, { attributes: true, childList: true });
};
