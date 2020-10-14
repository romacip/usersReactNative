import getUsers from '../__mocks__/UsersApi/getUsers.json';

async function getUsersApi(){
    // method call
    return getUsers;
}

export default {
    getUsersApi,
}