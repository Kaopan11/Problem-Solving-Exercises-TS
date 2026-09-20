// Exercise 2: Reverse String

/* 
ให้เขียน Function ที่ชื่อว่า reverseString ซึ่งมีคุณสมบัติดังนี้
 - รับ Parameter 1 ตัวคือ text มี Value Type เป็น String
 - Function นี้จะ Return ค่า String ที่มีการเรียงตัวอักษรจากหลังไปหน้า
*/

/* 
plan logic
  1. ใช้ .split() ในการแยกข้อความออกเป็น Array
  2. ใข้ .reverse() ในการกลับด้านลำดับข้อมูลหน้าไปหลัง
  3. ใช้ .join() ในการรวม Array เข้าด้วยกันเป็น String
*/

// วิธีการ run code ใช้คำสั่ง npx tsx <name-file-want-run>.ts

function reverseString(text: string): string {
    // Start Coding Here
    /* Type 1
    return text
        .split("")
        .reverse()
        .join("")
    */

    // Type 2
    const letters = text.split("");
    const reversed = letters.reverse();
    const result = reversed.join("");

    return result;
};


let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"