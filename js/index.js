import UserList from './components/UserList.js';

//const users = ['inhyuck', 'sujie'];

const BASE_URL = 'https://js-todo-list-9ca3a.df.r.appspot.com';

fetch(`${BASE_URL}/api/users`)
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    new UserList(document.getElementById('user-list'), users);
  });

// const userList = new UserList(document.getElementById('user-list'), users);
// 고생하셨습니다

// const onUserCreateHandler = () => {
//   const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
// }

// const userCreateButton = document.querySelector('.user-create-button')
// userCreateButton.addEventListener('click', onUserCreateHandler)