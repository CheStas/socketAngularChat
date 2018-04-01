export interface User {
    id: string;
    name: string;
    info: string;
    isActive: boolean;
    img: string;
    currentUser?: boolean;
    newMsg?: number;
}
