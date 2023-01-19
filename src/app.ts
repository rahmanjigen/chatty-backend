import express , { Express } from 'express';
import { ChattyServer } from './setupServer';
import databaseconnection from  './setupDatabase';
import {config} from './config';

 class Application {
    static initialize() {
        throw new Error('Method not implemented.');
    }
    public initialize() : void {
        this.loadconfig();
        databaseconnection();
        const app: Express = express (); 
        const server: ChattyServer = new ChattyServer (app);
        server.start();
    }

    private loadconfig(): void {
        config.validateConfig();     
    }

 }

 const application: Application = new Application();
application.initialize();
