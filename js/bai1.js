setInterval(() => {
    const number = Math.floor(Math.random() * 100)
    const checkNumber = (number) => {
        if (number < 2) return false;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
    if (checkNumber(number)) {
        console.log(number + " là số nguyên tố");
    } else {
        console.log(number + " không phải là số nguyên tố");
    }
}, 2000)