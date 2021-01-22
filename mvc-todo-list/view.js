import { model } from './model.js';
import { controller } from './controller.js';
const view = {

  clearList: function () {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("list"));
    range.deleteContents();
  },

  render: function () {

    this.clearList();

    if (model.items.length != 0) {

      var list = document.getElementById("list")

      for (var i = model.items.length - 1; i >= 0; i--) {
        console.log(model.items[i])

        var item = document.createElement('li');
        var span = document.createElement('span');
        var check = document.createElement('a');
        var cross = document.createElement('a');
        var iconCheck = document.createElement('i')
        var iconCross = document.createElement('i');

        item.className = "item"
        span.className = "item-text"
        check.className = "item-complete"
        cross.className = "item-delete"

        span.textContent = model.items[i].text

        // Put a line through any items we've 'ticked' off
        if (model.items[i].completed) {
          span.setAttribute("style", "text-decoration: line-through; color: #bbb")
        }


        // Add our icons
        iconCheck.setAttribute("class", "icon ion-md-checkmark")
        iconCheck.setAttribute("data-id", i)
        iconCross.setAttribute("class", "icon ion-md-trash")
        iconCross.setAttribute("data-id", i)

        // Add our onclick functions for complete/delete actions
        check.setAttribute("onclick", "controller.completeItem('" + i + "')")
        cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")

        // Append all our elements and add to DOM
        check.appendChild(iconCheck)
        cross.appendChild(iconCross)
        item.appendChild(span)
        item.appendChild(check)
        item.appendChild(cross)
        list.appendChild(item);
      }
    }
  },

  addItem: function (e) {
    if ((e.code == "Enter") || (e.code == "NumpadEnter")) {
      if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) {
        var item = document.getElementById("add-item").value;
        controller.addItem(item);
        return false;
      }
    }
  },
}

export { view };
