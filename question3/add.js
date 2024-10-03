const fs = require('fs');
const path = require('path');

// This define path to the Logs directory
const logsDir = path.join(process.cwd(), 'Logs');

function createLogFiles() {
    if (!fs.existsSync(logsDir)) {// If the log directory din't exists, then it creates ones
        fs.mkdirSync(logsDir); // Create the Logs directory
        console.log(`${logsDir}`);
    }

    // Change the current working directory to Logs
    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log_${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}.`); // write content into the file
        console.log(`${fileName}`); 
    }
}

createLogFiles();
