const fs = require('fs'); 
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); // Path to the Logs directory

function deleteLogs() {
    if (fs.existsSync(logsDir)) { 
        const files = fs.readdirSync(logsDir); // Read the files in the directory

        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(logsDir, files[i]); // Full path to the file
            fs.unlinkSync(filePath); // Delete the file
            console.log(`Deleted: ${files[i]}`); 
        }

        fs.rmdirSync(logsDir); // Remove the Logs directory
        console.log('Removed the Logs directory.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Call the function
deleteLogs();
