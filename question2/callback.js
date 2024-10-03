function resolvedPromise() { // This function create a promise that resolves after 500 milliseconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('The promise was successfully resolved!'); // Successful resolution message
        }, 500); // Delay of 500 milliseconds
    });
}

// Function to create a promise that rejects after 500ms with an error message
function rejectedPromise() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject('The promise was rejected with an error!'); // Error rejection message
        }, 500); // Delay of 500 milliseconds
    });
}

// Function to handle both promises
function executePromises() {
    // Handling the resolved promise
    resolvedPromise()
        .then(success => {
            console.log(success); // Output the success message
        })
        .catch(err => {
            console.error(err); 
        });

    // Handling the rejected promise
    rejectedPromise()
        .then(success => {
            console.log(success); // This won't be executed
        })
        .catch(err => {
            console.error(err); // Output the error message
        });
}

// Execute the function to handle promises
executePromises();
