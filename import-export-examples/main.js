import defaultModel from './model.js';
import defaultController from './controller.js';
import defaultView from './view.js';
console.log(defaultModel.message);
console.log(defaultView.message);
console.log(defaultController.message);

import { model } from './model.js';
import { view } from './view.js';
import { controller } from './controller.js';
console.log(model.message);
console.log(view.message);
console.log(controller.message);
