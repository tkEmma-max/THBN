//this is a simulation of an API call to get the user data, in a real application this would be replaced with an actual API call to the backend

//simulated user data
const user = {
  id: 1,
  username: "kmercier",
  email: "kevin.mercier@example.com",
  first_name: "Kévin",
  last_name: "Mercier",
  date_joined: "2019-03-15T10:30:00Z",
  last_login: "2026-06-03T08:45:00Z",
  is_verified: true
};
const users = [
  {
    id: 1,
    username: "johndoe",
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    date_joined: "2018-03-15T10:30:00Z",
    last_login: "2026-06-03T08:45:00Z",
    is_verified: true
  },
  {
    id: 2,
    username: "marieL",
    email: "marie.laurent@example.com",
    first_name: "Marie",
    last_name: "Laurent",
    date_joined: "2019-07-22T14:15:00Z",
    last_login: "2026-06-04T09:20:00Z",
    is_verified: true
  },
  {
    id: 3,
    username: "pierreT",
    email: "pierre.toure@example.com",
    first_name: "Pierre",
    last_name: "Touré",
    date_joined: "2020-01-10T08:00:00Z",
    last_login: "2026-06-02T16:30:00Z",
    is_verified: true
  },
  {
    id: 4,
    username: "sophieB",
    email: "sophie.bello@example.com",
    first_name: "Sophie",
    last_name: "Bello",
    date_joined: "2020-11-05T11:45:00Z",
    last_login: "2026-06-01T10:10:00Z",
    is_verified: false
  },
  {
    id: 5,
    username: "thomasR",
    email: "thomas.romain@example.com",
    first_name: "Thomas",
    last_name: "Romain",
    date_joined: "2021-04-18T09:30:00Z",
    last_login: "2026-05-28T14:00:00Z",
    is_verified: true
  }
];

//function to simulate an API call to get the user data
export function getMyUser() {
  return user;
}       

export function getUser(id){
  return users.find(e => e.id = id);
}