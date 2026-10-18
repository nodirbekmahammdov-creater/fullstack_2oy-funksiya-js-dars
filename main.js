// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.

// function sum(x,y) {
//  return x+y
// }
// console.log(sum(2,4));




// ===================================================================================




// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.

// function toSekunds(minutes) {
//  return minutes * 60
// }
// console.log(toSekunds(6));




// =========================================================================================================




// Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
// function nextInteger(int) {

//     return int+1

// }
// console.log(nextInteger(5));




// =====================================================================





// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchbur-
// chak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {
//     return (asos*balandlik)/2
// }

// console.log(uchburchakYuzi(3,2));



// =========================================================================================




//5 Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.


// function ageToDays(age) {
//     return age*365
// // code...
// }
// console.log(ageToDays(20));




// =============================================================================================




// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// const kub = function(son){
//     console.log(Math.pow(son,3));
    
// }
// kub(5)




// ====================================================================================



// Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// function firstElement(arr) {
//     console.log(arr[0]);
    
// }
// firstElement([2,4,3])




// ==============================================================================================



// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// function power(x,y) {
//     return x*y    
// }
// console.log(power(3,5));



// ============================================================================




// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
// function hourToSekunds(hour) {
//     return hour*3600
// }
// console.log(hourToSekunds(2));



// =====================================================================



// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.

// function uchinchiTomon(tomon1, tomon2) {
//     return (tomon1+tomon2)-1
// }
// console.log((uchinchiTomon(2,4)));




// ================================================



// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonни bir-
// inchisini ikkinchisiga bo’lgandagi qoldiqни       qaytarib beradigan
// funksiya yasang.

// function qoldiq(son1, son2) {
//     return son1%son2    
// }
// console.log(qoldiq(1,3));




// ===============================================================





// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// function turtburchakYuzi(boyi, eni) {
//     return boyi*eni     
// }
// console.log(turtburchakYuzi(6,7));



// ============================================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
//     return 'something'+' '+ a
// }
// console.log(stringQoshish('sfd gfbf'));



// ============================================================================================


// 14.Quyidagi namunalarga qaragan holatda funksiya yasang


// function kv(a){
//     return Math.pow(a,2)
// }
// console.log(kv(5));



// ============================================================================================



// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on




// function noldan(raqam) {
//     if(raqam >0) return false
//     else return true
// }
// console.log(noldan(-2));


// ============================================================================================


// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180



// function ichkiBurchaklar(n) {
    
//     return (n-2)*180
// }

// console.log(ichkiBurchaklar(4));






// ============================================================================================



// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.



// function ochkolar(x,y) {
//     return 2*x+3*y
// }
// console.log(ochkolar(7,5));


// ============================================================================================



// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang


// function qoshi(str){
//     return str+"Edabit"
// }
// console.log(qoshi("salom"));




// ============================================================================================




// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.



// function ikkitaSon(x,y) {
//     let sum = x+y
//     if(sum<100){
//         return true
//     }
//     else return false


// }
// console.log(ikkitaSon(2,5));






// ============================================================================================



// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.





function printArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));
// ============================================================================================