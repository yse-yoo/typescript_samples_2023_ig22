export type User = {
    id: number;
    name: {
        first: string;
        last: string;
    };
    email: string;
    isActive: boolean;
}

// interface User {
//     id: number;
//     name: {
//         first: string;
//         last: string;
//     };
//     email: string;
//     isActive: boolean;
// }
