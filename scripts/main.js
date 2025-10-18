// scripts/main.js
import { initRouter } from './router.js';
import { initTabs } from './components/tabs.js';
import { initIntro } from './pages/intro.js';
import { initProject1 } from './pages/project1.js';
import { initProject2 } from './pages/project2.js';
import { initSkills } from './pages/skills.js';

window.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initRouter();
  initIntro(); initProject1(); initProject2(); initSkills();
});
