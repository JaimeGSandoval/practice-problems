// Examples only. They won't work

function saveBreed(breed) {
  localStorage.setItem('breed', breed);
}

function getSavedBreed() {
  return localStorage.getItem('breed');
}

function removeBreed() {
  return localStorage.removeItem('breed');
}


function applyBreedPreferences(filters) {
  const breed = getSavedBreed();
  if (breed) {
    filters.set('breed', breed);
  }
  return filters;
}

function retrievePreferences() {
  const preferences = JSON.parse(localStorage.getItem('preferences'));
  return new Map(preferences);
}


function clearPreferences() {
  localStorage.clear();
}
