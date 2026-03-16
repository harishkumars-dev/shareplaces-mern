import { UsersList } from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Harish",
      image:
        "https://images.pexels.com/photos/35851519/pexels-photo-35851519.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
