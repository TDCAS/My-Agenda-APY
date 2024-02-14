import express from 'express';
interface User {
    url: string;
    port: number;
 
  }
const app = express()

app.use(express.json());

const server:User = {
    url:'localhost',
    port:3000,
}
app.listen(server.port,server.url, () => {
    console.log(`CTRL + Clique em http://${server.url}:${server.port}`);
  });