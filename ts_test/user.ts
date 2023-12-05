var user: {
    id: number;
    name: {
        first: string;
        last: string;
    };
    email: string;
    isActive: boolean;
} = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo",
    },
    email: "test@test.com",
    isActive: true,
}

console.log(user)

//型推論（Type Inference）  
// var user  = {
//      id: 1,
//      name: {
//         first: "Taro",
//         last: "Tokyo",
//     },
//     email: "test@test.com",
//     isActive: true,
// }