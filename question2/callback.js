function resolvedPromise() { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('The promise was successfully resolved!');
        }, 500); 
    });
}

function rejectedPromise() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject('The promise was rejected with an error!'); 
        }, 500); 
    });
}

function executePromises() {
    // Handling the resolved promise
    resolvedPromise()
        .then(success => {
            console.log(success); // Output of success message
        })
        .catch(err => {
            console.error(err); 
        });

    // Handling the rejected promise
    rejectedPromise()
        .then(success => {
            console.log(success); 
        })
        .catch(err => {
            console.error(err); // Output the error message
        });
}

// Execute the function to handle promises
executePromises();
