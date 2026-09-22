/* 
- ให้เขียน Function ที่ชื่อว่า `getPassedStudents` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `students` ซึ่งเป็น Array ของ Object
        - โดย Object แต่ละอันจะมี Key 2 ตัวได้แก่ `name` และ `score`
    - Function นี้จะ Return Array ของ ชื่อ นักเรียนที่มีคะแนนมากกว่าหรือเท่ากับ 50
*/

// วิธีการ run code ใช้คำสั่ง npx tsx <name-file-want-run>.ts

type Student = {
    name: string;
    score: number;
};

const students: Student[] = [
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 },
]

function getPassedStudents(students: Student[]): string[] {
    // Start Coding Here
    let result: string[] = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 50) {
            result.push(students[i].name);
        }
    }
    return result;
};


let result1: string[] = getPassedStudents(students);
console.log(result1); // ["A", "C"]