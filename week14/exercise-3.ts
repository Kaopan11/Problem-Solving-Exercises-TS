// Exercise 3: Find Max Number
/* 
ให้เขียน Function ที่ชื่อว่า findMax ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ nums มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
    - Function นี้จะ Return ค่าเป็น ตัวเลขที่มากที่สุด ใน Array นั้น
*/

// วิธีการ run code ใช้คำสั่ง npx tsx <name-file-want-run>.ts

function findMax(nums: number[]): number {
    // Start Coding Here
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
};


let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2