import dotenv from 'dotenv';
import app from './app.js';
import { connect } from './config/db';

dotenv.config();

const PORT = process.env.PORT || 3000

(async () =>{
    try{
        await connect(process.env.MONGODB_URI);
        app.listen(PORT,() => console.log(`API rondo em: http//localhost:${PORT}`));
    } catch(error){
        console.error('Erro ao conectar ao banco de dados ou ao iniciar o servidor', error);
        process.exit(1);
    };
})();