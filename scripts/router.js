// scripts/router.js
import { fadeSwap } from './components/fade.js';
import { setActiveTab } from './components/tabs.js';

export function showSection(id){
  const target = document.getElementById(id);
  if(!target) return;
  const main = document.getElementById('main');
  const current = document.querySelector('main > section.active');
  if(target === current) return;
  fadeSwap(main, current, target);
  setActiveTab(id);
}
export function syncFromHash(){
  const h = (location.hash || '#intro').slice(1);
  const valid = document.getElementById(h) ? h : 'intro';
  showSection(valid);
}
export function initRouter(){
  window.addEventListener('hashchange', syncFromHash);
  syncFromHash();
}
