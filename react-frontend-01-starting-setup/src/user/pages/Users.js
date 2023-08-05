import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{ id: "u1", name: "Max Schwarz", image: "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", places: 3}];

    return <UsersList items={USERS} />;
};

export default Users;