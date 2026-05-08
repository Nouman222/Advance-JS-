const onfullfilled = (value) => {
    console.log('Promise resolved with value:', value);
}
const onrejected = (reason) => {
    console.log('Promise rejected with reason:', reason);
}

const prom = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

prom.then(onfullfilled).catch(onrejected);


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5;
//             if (success) {
//                 resolve('Data fetched successfully!');
//             } else {
//                 reject('Failed to fetch data.');
//             }
//         }, 1000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// function prom (complete) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (complete) {
//                 resolve('Task completed successfully!');
//             } else {
//                 reject('Task failed to complete.');
//             }
//         }, 1000);
//     });
// }

// prom(true)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });