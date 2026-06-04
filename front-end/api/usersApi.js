//this is a simulation of an API call to get the user data, in a real application this would be replaced with an actual API call to the backend

//simulated user data
const user = {
  id: 1,
  username: "johndoe",
  email: "john.doe@example.com",
  first_name: "John",
  last_name: "Doe",
  date_joined: "2018-03-15T10:30:00Z",
  last_login: "2026-06-03T08:45:00Z",
  is_verified: true
};

//function to simulate an API call to get the user data
export function getUserData() {
    return user;
}               