import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.PORT ?? 5505;
    // eslint-disable-next-line no-useless-catch
    try {
        app.listen(PORT, () => {
             
            logger.info(`Server is running on PORT: ${PORT}`);
        });
    } catch (error) {
        throw error;
    }
};
startServer();
