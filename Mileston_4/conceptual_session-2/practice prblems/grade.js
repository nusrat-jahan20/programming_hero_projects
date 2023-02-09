// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function calculateGrade(marks) {
    if(marks >= 90) {
    console.log('A+ Grade');
    }
    else if(marks >= 80) {
        console.log('A Grade');
    }
    else if(marks >= 70) {
        console.log('A- Grade');
    }
    else if(marks >= 60) {
        console.log('B Grade');
    }
    else if(marks >= 50) {
        console.log('C Grade');
    }
    else if(marks >= 40) {
        console.log('D Grade');
    }
    else if(marks <= 39) {
        console.log('F Grade');
    }
}

calculateGrade(65);