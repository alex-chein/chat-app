const socket = io();

// Elements
const $listForm = document.querySelector('.list-fieldset');

// Templates
const listTemplate = document.querySelector('#list-template').innerHTML;

socket.emit('getRooms', (rooms) => {
    if(rooms.length === 0) return console.log('No rooms available.');

    const html = Mustache.render(listTemplate, {
        rooms
    });

    $listForm.innerHTML = html;
    document.listForm.querySelector('[type=submit]').disabled = false;
});