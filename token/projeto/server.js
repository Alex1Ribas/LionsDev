import dotenv from 'dotenv';
import app from './app.js';
import connect from './src/config/db.js';

dotenv.config();

const port = process.env.PORT || 3000;

(async () =>{
    try{        
        await connect(process.env.MONGODB_URI);
        app.listen(port,() => console.log(`API rodando em: http//localhost:${port}`));
    } catch(error){
        console.error('Erro ao conectar ao banco de dados ou ao iniciar o servidor', error);
        process.exit(1);
    };
})();