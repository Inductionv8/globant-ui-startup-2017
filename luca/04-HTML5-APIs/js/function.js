window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn-save").addEventListener('click', saveText);
    document.getElementById("btn-delete").addEventListener('click', deleteText);
});

let dataindex = {
  lcounter: 1
};

function saveText() {
  const text = document.getElementById("in-text");
  if (text.value !== "") {
    localStore(dataindex.lcounter, text.value);
    indexdatabase(dataindex.lcounter, text.value);
    dataindex.lcounter += 1;
    text.value = "";
  } else {
    alert("You must add a text first");
  }
}

function localStore(id, text) {
  // Check browser support. Could use modernizr
  if (typeof(Storage) !== "undefined") {
    window.localStorage.setItem(id, text);
    console.log(window.localStorage);
  } else {
    alert("Storage has no power here!");
  }
}

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
function indexdatabase(id, text) {

  // Open (or create) the database
  var open = window.indexedDB.open("MyData", 1);

  // Checks for error opening or creating the database.
  open.onerror = function(event) {
    alert("DataBase error: " + event.target.errorCode);
  };
  //  Create the schema. Only triggered if MyData does not exist or version upgraded.
  open.onupgradeneeded = function(event) {
    var db = event.target.result;
    var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
  };

  open.onsuccess = function(event) {
    // Start a new transaction
    var db = event.target.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");

    // Add data
    store.put({id: id, texto: text});

    // Close the db when the transaction is done
    tx.oncomplete = function() {
      db.close();
    };
  };
}

/* Delete the content from databases */

function deleteText() {
  if (dataindex.lcounter !== 1) {
    deleteLocalStorage();
    indexDBDelete("MyData");
    console.log(window.localStorage);
    dataindex.lcounter = 1;
  } else {
    alert("DataBases are empty.");
  }
}

function deleteLocalStorage() {
  window.localStorage.clear();
}

function indexDBDelete(database) {
  var DBDeleteRequest = window.indexedDB.deleteDatabase(database);

  DBDeleteRequest.onerror = function(event) {
    console.log("Error deleting database.");
  };

  DBDeleteRequest.onsuccess = function(event) {
    console.log("Database deleted successfully");
    console.log(event.result); // should be undefined
  };

}
