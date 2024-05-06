import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [() => ({
                port: parseInt(process.env.PORT, 10) || 5001,
                database: {
                    dbName: process.env.DB_NAME,
                    dbPort: parseInt(process.env.DB_PORT, 10),
                    dbHost: process.env.DB_HOST,
                    dbUser: process.env.DB_USER,
                    dbPassword: process.env.DB_PASSWORD,
                    dbSchema: process.env.DB_SCHEMA,
                },
            })
            ],
        }),
    ]
})

export class ProjectConfigModule { }