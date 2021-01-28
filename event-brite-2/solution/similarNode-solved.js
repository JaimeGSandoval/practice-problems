var nodeToFind = document.getElementById("node-two");
var rootOne = document.getElementById("root-one");
var rootTwo = document.getElementById("root-two");
var nodeOne = document.getElementById("node-one");

// find elements
function findSimilar(rootOne, rootTwo, theNode) {
  var path = getPath(rootOne, theNode);
  return getNode(path, rootTwo);
}

function getPath(root, node) {
  let cur = node;
  let path = [];
  while (cur !== root) {
    //get the parent of cur
    let parent = cur.parentNode;
    let children = [...parent.childNodes];
    path.push(children.indexOf(cur));
    cur = parent;
  }
  return path;
}

//path is a stack
function getNode(path, root) {
  let res = root;
  while (path.length > 0) {
    let idx = path.pop();
    let children = res.childNodes;
    res = children[idx];
  }
  return res;
}

let theSol = findSimilar(rootOne, rootTwo, nodeOne);
console.log(theSol);
console.log("answer: ", theSol === nodeToFind);
