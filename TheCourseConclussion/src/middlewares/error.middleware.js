export default function errorMiddleware(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    
    if (status >= 500) {
        console.error('Critical Error:', err);
    }
    
    return res.status(status).json({ message });
}
