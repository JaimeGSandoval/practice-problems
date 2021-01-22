import { view } from './view.js';
import { model } from './model.js';
const controller = {
  init: function () {
    view.render()
  },

  addItem: function (item) {
    var list_item = { text: item, completed: false }
    model.items.push(list_item)
    console.log(list_item)
    document.getElementById("add-item").value = ""
    view.render()
  },

  completeItem: function (item_index) {
    model.items[item_index].completed = !model.items[item_index].completed
    console.log(model.items[item_index].completed)
    view.render()
  },

  deleteItem: function (item_index) {
    model.items.splice(item_index, 1)
    view.render()
  }
}

const addItem = document.getElementById('add-item');
addItem.addEventListener('keypress', view.addItem);
controller.init()

export { controller };
