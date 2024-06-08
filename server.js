const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rute untuk menyajikan file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rute untuk menangani login POST
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log(`Received login request: username=${username}, password=${password}`);

    // Buat workbook baru atau baca workbook yang ada
    let workbook;
    const filePath = 'user_data.xlsx';

    try {
        if (fs.existsSync(filePath)) {
            console.log(`File ${filePath} exists. Reading file...`);
            workbook = xlsx.readFile(filePath);
        } else {
            console.log(`File ${filePath} does not exist. Creating new workbook...`);
            workbook = xlsx.utils.book_new();
        }

        let worksheet = workbook.Sheets['Users'];
        if (!worksheet) {
            console.log('Worksheet "Users" does not exist. Creating new worksheet...');
            worksheet = xlsx.utils.json_to_sheet([]);
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Users');
        }

        const newData = [{ Username: username, Password: password }];
        console.log('Adding new data to worksheet:', newData);

        xlsx.utils.sheet_add_json(worksheet, newData, { skipHeader: true, origin: -1 });

        console.log('Worksheet "Users" after adding data:', xlsx.utils.sheet_to_json(worksheet));

        // Coba menulis file dengan penanganan kesalahan tambahan
        try {
            xlsx.writeFile(workbook, filePath);
            console.log('Data has been written to Excel successfully.');
            res.send('Login data has been saved to Excel.');
        } catch (writeError) {
            console.error('Error writing to Excel:', writeError);
            res.status(500).send('An error occurred while saving data to Excel.');
        }
    } catch (error) {
        console.error('Error reading or processing Excel file:', error);
        res.status(500).send('An error occurred while reading or processing the Excel file.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
