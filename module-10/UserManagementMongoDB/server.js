import dotenv from 'dotenv';
import app from './app.js';
import connect from './src/config/db.js';

dotenv.config();

const port = process.env.PORT || 3000;

(async () => {
    try {        
        // Connect to the database before starting the server
        await connect(process.env.MONGODB_URI);
        app.listen(port, () => console.log(`API running at: http://localhost:${port}`));
    } catch (error) {
        console.error('Error connecting to the database or starting the server:', error);
        process.exit(1);
    }
})();
