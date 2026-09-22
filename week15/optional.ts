/* 
- ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
    - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
        - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array
*/

// วิธีการ run code ใช้คำสั่ง npx tsx <name-file-want-run>.ts

function findMode(arr: number[]): number {
    // Start Coding Here
    const counts: { [key: number]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
    }

    let mode = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        if (counts[num] > counts[mode]) {
            mode = num;
        }
    }
    return mode;
};


let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7