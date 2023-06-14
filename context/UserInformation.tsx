import { createContext, useContext, useState } from "react";

export type UserContextProp = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}
type UserState = {
    user: UserContextProp | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserContextProp | undefined>>
}

export const UserContext = createContext<UserState>({
    user: undefined,
    setUser: () => { },
});