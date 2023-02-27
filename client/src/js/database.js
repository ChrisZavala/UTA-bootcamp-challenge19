import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');

//create a connection to the database and version. 
const contactDb = await openDB('jate', 1);

//Create a transaction on the contact database with readwrite access.
const tx = contactDb.transaction('jate','readwrite');

//Access the object store.
const store = tx.objectStore('jate');

//Add the content to the object store.
const request = store.add({ id: 1, value: content});

//Get the confirmation of the request.
const result = await request;
console.log('Saved content to the database', result);

};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.error('getDb not implemented');

//create a connection to the database and version.
const contactDb = await openDB('jate', 1);

//Create a transaction on the contact database with readwrite access.
const tx = contactDb.transaction('jate','readonly');

//Access the object store.
const store = tx.objectStore('jate');

//Use the getAll() method on the object store get all the content.
const request = store.getAll();

//Get the confirmation of the request.
const result = await request;
console.log('result.value', result);
return result?.value;

};

initdb();
