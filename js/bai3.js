let box = document.querySelector('.box')
let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            box.style.right = 0;
            //box.style.transition = '0.5s';
            resolve();
        }, 2000);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.right = 0;
                box.style.bottom = 0;
                resolve();
            }, 2000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.bottom = 0;
                box.style.left = 0;
                resolve();
            }, 2000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.bottom = 0;
                box.style.top = 0;
                resolve();
            }, 2000);
        })
    });