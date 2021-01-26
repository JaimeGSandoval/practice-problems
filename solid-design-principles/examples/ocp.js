// OPEN CLOSED PRINCIPLE

// GOOD EXAMPLE

let allowedRoles = ['ceo', 'cto', 'cfo', 'staff'];

function checkPrivilege(employee) {
  if (allowedRoles.includes(employee.role)) {
    return true;
  } else {
    return false;
  }
}

function addRoles(role) {
  allowedRoles.push(role);
}
