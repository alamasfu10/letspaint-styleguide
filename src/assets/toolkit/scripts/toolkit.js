import forEach from 'lodash/forEach';

// import {init} from './utilities/init';
import {inject as injectIcons} from './utilities/icons';

// import <materialInitMethod> from '<materialScriptPath>';

// Inject icons into DOM
if (global.iconsConfig) {
  forEach(global.iconsConfig, injectIcons);
}

// Script to init materials, when required. Check .gitkeep
// init('.<materialClassName>', <materialInitMethod>);
