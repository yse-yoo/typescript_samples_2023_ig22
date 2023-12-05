"use strict";
// TypeInference で string型が自動的に設定
var message = "Hello!!!!";
// string型に number型は入れられない
// message = 4;
if (message) {
    console.log(message);
}
// Type Inference （型推論）
var id = 1;
var email = "test@test.com";
var isActive = true;
var none;
// Type Definition （型定義）
var id = 1;
var email = "test@test.com";
var isActive = true;
var none;
//email = 1000
// none = "YSE";
// none = 5;
console.log(id, typeof id);
console.log(email, typeof email);
console.log(isActive, typeof isActive);
console.log(none, typeof none);
