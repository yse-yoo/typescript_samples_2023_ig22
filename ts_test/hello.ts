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
var id:number = 1;
var email:string = "test@test.com";
var isActive:boolean = true;
var none:any;

// id = "東京"
// email = 5
// isActive = "横浜"

none = "YSE";
none = 5;