
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function saveTasks(tasks) {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    } else {
        console.log('localStorage is not available');
    }
}

export function loadTasks() {
    if (storageAvailable('localStorage')) {
        const stored = localStorage.getItem('todoTasks');
        return stored ? JSON.parse(stored) : [];
    } else {
        console.log('localStorage is not available');
        return [];
    }
}