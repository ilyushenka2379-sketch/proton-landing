const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

// При заходе на сайт отдаем твойabout.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Landing running on port ${PORT}`));
