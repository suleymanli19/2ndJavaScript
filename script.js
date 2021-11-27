// let a = 55;
// console.log(a);

// if (a > 0 && a < 6) {
//     console.log("Korpe")
// } else if (a > 6 && a < 12) {
//     console.log("Uwaq")
// } else if (a > 12 && a < 18) {
//     console.log("Yeniyetme")
// } else if (a > 18 && a < 30) {
//     console.log("Genc")
// } else if (a > 30 && a < 50) {
//     console.log("Yawli")
// } else if (a > 50) {
//     console.log("Qoca")
// }


//1.	Üçrəqəmli ədəd verilib. Bu ədədin rəqəmləri arasına boşluq simvolu qoymaqla çıxışa verin. İn 123  -  Out 1 2 3

// let a = 123;
// let b = parseInt(a / 100);
// let c = parseInt(a / 10) % 10; 
// let d = a % 10; 
// console.log(a, b, c, d)


//2.	İki tam ədəd verilib. Onların qiymətlərinin yerini dəyişin. İn 5 3 - Out 3 5

// let a = 5;
// let b = 3;
// let c;
// console.log(a, b)
// c = a;
// a = b;
// b = c;
// console.log(a, b)

//3.	İkirəqəmli tam ədəd verilib. Bu ədədin öncə soldakı rəqəmini (onluqları) sonra isə 2 boşluq simvolundan sonra sağdakı rəqəmini (təklikləri) çıxışa verin. İn 98  Out 9  8
// let a = 98;
// let b = parseInt(a / 10);
// let c = a % 10;
// console.log(a, b, c)

//4. İkirəqəmli müsbət tam ədəd verilib. Onun rəqəmlərinin cəmini və hasilini tapın. İn 34 Out 7   12
// let a = 34;
// let b = parseInt(a / 10);
// let c = a % 10;
// console.log(b + c)
// console.log(b * c)

//5. Verilmiş  natural ədədin sağdan üçüncü rəqəmini çıxışa verin. İn 1234567 Out 5
// let a = 1234567;
// let b = a % 1000;
// let c = parseInt(b / 100)
// console.log(c)

//6. Üçrəqəmli tam ədəd verilib. Bu ədədin öncə sonuncu rəqəmini (təklikləri), sonra isə ortadakı rəqəmini (onluqları) çıxışa verin.  İn 307 Out 70
// let a = 307;
// console.log(a)
// let b = a % 10;
// let c = (a % 100) - (a % 10)
// console.log(b, c)

//7. Üçrəqəmli tam ədəd verilib. Onun rəqəmlərinin cəmini və hasilini tapın. İn 456 Out 15 120
// let a = 456;
// let b = parseInt(a / 100);
// let c = parseInt(a / 10) % 10;
// let d = a % 10;
// console.log(a)
// console.log(b + c + d)
// console.log(b * c * d)

//8. Üçrəqəmli tam ədəd verilib. Bu ədədin rəqəmlərini sağdan sola oxuduqda alınan ədədi çıxışa verin. İn 123 Out 321
// let a = 123;
// console.log(a)
// let b = a % 10;
// let c = parseInt(a / 10) % 10;
// let d = parseInt(a / 100)
// let f = b*100 + c*10 + d;
// console.log(f)

//9. Üçrəqəmli tam ədəd verilib. Onun soldan birinci rəqəmini pozub ədədin sağına yazdılar. Alınan ədədi çıxışa verin. İn 123 Out 231
// let a = 123;
// console.log(a)
// let b = a % 10;
// let c = parseInt(a / 10) % 10;
// let d = parseInt(a / 100)
// let f = c*100 + b*10 + d;
// console.log(f)

//10. Üçrəqəmli tam ədəd verilib. Onun sağdan birinci rəqəmini pozub ədədin soluna yazdılar. Alınan ədədi çıxışa verin. İn 123 Out 312
// let a = 123;
// console.log(a)
// let b = a % 10;
// let c = parseInt(a / 10) % 10;
// let d = parseInt(a / 100)
// let f = b*100 + d*10 + c;
// console.log(f)

//11. 999-dan böyük tam ədəd verilib. Bir qalıqsız bölmə (div) və bir bölmənin qalığını alma (mod) əməlindən istifadə etməklə həmin ədədin yazılışındakı minlik rəqəmini tapın. İn 12345 Out 2
// let a = 12345;
// let b = parseInt(a / 1000) % 10
// console.log(b)

//12. Dördrəqəmli tam ədəd verilib. Bu ədədin palindrom olub-olmadığını müəyyən edin. İn 1234 Out NO
// let a = 1234;
// console.log(a)
// let b = parseInt(a / 1000); 
// let c = parseInt(a / 100) % 10; 
// let d = (parseInt(a / 10) % 100) % 10; 
// let f = a % 10; 
// let i = f * 1000 + d * 100 + c * 10 + b;
// console.log(i)
// if(i !== a) console.log('NO')
// else console.log('YES')

// let q = 1441;
// console.log(q)
// let w = parseInt(q / 1000); 
// let e = parseInt(q / 100) % 10; 
// let r = (parseInt(q / 10) % 100) % 10;
// let t = q % 10; 
// let y = t * 1000 + r * 100 + e * 10 + w;
// console.log(y)
// if(y === q) console.log('YES')
// else console.log('NO')

//13. Beşrəqəmli ədəd verilib. Bu ədədin ilk iki rəqəminin cəmi ilə son iki rəqəminin fərqini hesablayın. İn 12345 Out -6
// let a = 12345;
// let b = parseInt(a / 10000);
// let c = parseInt(a / 1000) % 10;
// console.log(b + c)
// let d = parseInt(a / 10) % 10;
// let f = a % 10;
// console.log(f - d)

//14. Beşrəqəmli ədəd verilib. Bu ədədin rəqəmlərinin kvadratları cəmini tapın. İn 12345 Out 55
// let a = 12345;
// let b = parseInt(a / 10000);
// let c = parseInt(a / 1000) % 10;
// let d = parseInt(a / 100) % 10;
// let f = parseInt(a / 10) % 10;
// let g = a % 10;
// let l = g*g + f*f + d*d + c*c + b*b;
// console.log(l)

//15. Beşrəqəmli ədəd verilib. Bu ədədin soldan birinci rəqəmdən başlayaraq, bütün rəqəmlərinin artan sıra ilə düzülüb-düzülmədiyini müəyyən etmək lazımdır. Məsələn, 15689 ədədinin bütün rəqəmləri artan sıra ilə düzülüb. İn 12345 Out YES
// let a = 12345;
// let b = parseInt(a / 10000);
// let c = parseInt(a / 1000) % 10;
// let d = parseInt(a / 100) % 10;
// let f = parseInt(a / 10) % 10;
// let g = a % 10;
// if (g>f && f>d && d>c && c>b) {
//     console.log("YES")
// } else console.log("NO")

//Programming Problems - 2. Bew dene mesele var onlari yaziram.
//1.Verilmiş 3 rəqəmli ədədin Armstrong ədədi(Armstrong Number) olduğunu yoxlayın. Əgər Armstrong ədədirsə o zaman konsola "YES", əks halda isə "NO" çıxardın.
// let a = 153;
// let b = parseInt(a / 100)
// let c = parseInt(a / 10) % 10;
// let d = a % 10;
// let f = b**3 + c**3 + d**3;
// if (a === f) {
//     console.log("YES")
// } else console.log("NO")


//2.Verilmiş 4 rəqəmli ədədin Armstrong ədədi(Armstrong Number) olduğunu yoxlayın. Əgər Armstrong o zaman konsola "YES", əks halda isə "NO" çıxardın.
// let a = 1634;//or any 4 digit number
// let b = parseInt(a / 1000)
// let c = parseInt(a / 100) % 10;
// let d = parseInt(a / 10) % 10;
// let f = a % 10;
// let h = b**4 + c**4 + d**4 + f**4;
// if (a === h) {
//     console.log("YES")
// } else console.log("NO")

//3. 3 ədəd daxil edilir. Onlarını ən böyüyünü konsola çıxardın
// let a = 4;
// let b = 2;
// let c = 3;
// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else if (c > a && c > b) {
//     console.log(c)
// }

//4. 3 ədəd daxil edilir. Onlarını ən kiçiyini konsola çıxardın
// let a = 4;
// let b = 2;
// let c = 3;
// if (a < b && a < c) {
//     console.log(a)
// } else if (b < a && b < c) {
//     console.log(b)
// } else if (c < a && c < b) {
//     console.log(c)
// }

//5. 3 eded daxil edilir. onlarin ortancilini konsola cixarin
let a = 3;
let b = 5;
let c = 1;
if (b > c && b < a)  {
    console.log(b)
} else if (b < c && b > a) {
    console.log(b)
} 
if (c > a && c < b) {
    console.log(c)
} else if (c < a && c > b) {
    console.log(c)
}
if (a > b && a < c) {
    console.log(a)
} else if (a < b && a > c) {
    console.log(a)
}