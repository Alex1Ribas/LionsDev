export default function errorMiddleware(err,req, res){
    const status = err.status || 500 
    const message = err.message || 'Internal Server error!';
    if(status >= 500){console.error('*', err)}
    return res.status(status).json({message})
}
