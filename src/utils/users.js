const users = [];

const addUser = ({ id, username = '', room = '' }) => {
    username = username.trim();
    room = room.trim();

    if(!username || !room) {
        return { error: 'Username and Room are required!' };
    }

    const existingUser = users.find((user) => {
        return user.room.toLowerCase() === room.toLowerCase() && user.username.toLowerCase() === username.toLowerCase()
    });
    if(existingUser) {
        return { error: 'Username is in use!' };
    }

    const user = { id, username, room };
    users.push(user);
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

const getRooms = () => users.reduce((rooms, { room }) => {
    if(!rooms.includes(room)) {
        return [ ...rooms, room ];
    }
    return [ ...rooms ];
}, []);

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getRooms }