// scripts/components/fade.js
export function fadeSwap(main, fromEl, toEl){
  main.classList.add('is-transitioning');
  setTimeout(()=>{
    if(fromEl){ fromEl.classList.remove('active'); fromEl.hidden = true; }
    toEl.hidden = false; toEl.classList.add('active');
    requestAnimationFrame(()=> main.classList.remove('is-transitioning'));
  }, 200);
}
