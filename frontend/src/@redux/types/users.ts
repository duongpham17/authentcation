export interface IUsersApi {
    _id: string,
    name: string,
    email: string,
    role: "user" | "admin",
    title: string,
    verified: boolean,
    code: string,
    confirmation: string,
    confirmation_expiration: number,
    createdAt: number,
};