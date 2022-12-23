// pages/api/images/[name].js

// Tell Next.js to pass in Node.js HTTP
export const config = {
    api: { externalResolver: true }
 }
 
 import express from 'express';
 const handler = express();
 
 const serveFiles = express.static('./public');
 handler.use(['/api/public', '/public'], serveFiles);
 
 export default handler;