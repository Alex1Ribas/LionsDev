export default function errorMiddleware(err,req, res){
    const status = err.status || 500 // se o .status() não for preenchido ele preeche com 500
    const message = err.message || 'Erro interno no servidor';
    if(status >= 500){console.error('*', err)}
    return res.status(status).json({message})
}
