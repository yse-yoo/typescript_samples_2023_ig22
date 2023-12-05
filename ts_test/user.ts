// var user: {
//     id: number;
//     name: {
//         first: string;
//         last: string;
//     };
//     email: string;
//     isActive: boolean;
// } = {
//     id: 1,
//     name: {
//         first: "Taro",
//         last: "Tokyo",
//     },
//     email: "test@test.com",
//     isActive: true,
// }

type User = {
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

var user: User = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo",
    },
    email: "test@test.com",
    isActive: true,
}

console.log(user)