import 'reflect-metadata';
import { Container } from 'typedi';
import { Server } from './core/graphql/server';
import { Configuration } from './core/config/configuration';

export const startMsg = () => console.log('GRAPHQL-BCI-API is started...');

(async () => {
    startMsg();
    const server = Container.get(Server);
    const config: Configuration = {
        express: {
            bodyLimit: '100kb'
        },
        graphql: {
            port: 4400
        }
    };
    server.configuration = config;
    await server.startAsync();
})();
