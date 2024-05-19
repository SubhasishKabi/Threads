import { atom } from "recoil";

const userAtom = atom({
    key: "userAtom",
    default: JSON.parse(localStorage.getItem("user-threads")),
});

export default userAtom;

//This code snippet defines a state atom using Recoil, a state management library for React applications.
//It defines a new state atom called userAtom