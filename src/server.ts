import app from './app';
import { Config } from './config';

const startServer = () => {
    const PORT = Config.PORT ?? 5505;
    // eslint-disable-next-line no-useless-catch
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running on PORT: ${PORT}`);
        });
    } catch (error) {
        throw error;
    }
};
startServer();
