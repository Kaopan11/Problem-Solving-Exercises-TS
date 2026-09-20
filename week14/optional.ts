// Optional: Palindrome Checker Exercise
/* 
ให้เขียน Function ที่ชื่อว่า isPalindrome ซึ่งมีคุณสมบัติดังนี้
 - รับ Parameter 1 ตัวคือ word มี Value Type เป็น String
 - Function นี้จะ Return ค่า true ถ้า word เป็น Palindrome
 - หากไม่ใช่ ให้ Return false
 - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น “madam”, “racecar”
*/

// วิธีการ run code ใช้คำสั่ง npx tsx <name-file-want-run>.ts

function isPalindrome(word: string): boolean {
    //Start Coding Here
    /* Type 1
    const reversed = word.split("").reverse().join("");
    return word === reversed;
    */

    // Type 2
    const letters = word.split("");
    const reversedLetters = letters.reverse();
    const reversed = reversedLetters.join("");

    if (word === reversed) {
        return true;
    }
    else {
        return false;
    }
};


let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false