// scripts/components/tabs.js
export function initTabs(){
  document.querySelectorAll('.tabs__btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.target;
      location.hash = id;
    });
  });
}
export function setActiveTab(sectionId){
  document.querySelectorAll('.tabs__btn').forEach(btn => {
    const on = btn.dataset.target === sectionId;
    btn.classList.toggle('tabs__btn--active', on);
    btn.setAttribute('aria-selected', String(on));
  });
}
