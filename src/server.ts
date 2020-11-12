import app from './app';

const port: number = Number(process.env.PORT) || 3000;

const listen = () => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/`);
    });
};

listen();
