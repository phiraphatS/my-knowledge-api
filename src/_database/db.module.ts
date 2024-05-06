import { MikroOrmModule, MikroOrmModuleOptions } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { EntityGenerator } from '@mikro-orm/entity-generator';

@Module({
    imports: [
        MikroOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const connection:MikroOrmModuleOptions = {
                    // metadataProvider: TsMorphMetadataProvider,
                    entities: ['./dist/entities'],
                    entitiesTs: ['./src/entities'],
                    dbName: configService.get('database.dbName'),
                    driver: PostgreSqlDriver,
                    host: configService.get('database.dbHost'),
                    port: configService.get('database.dbPort'),
                    user: configService.get('database.dbUser'),
                    password: configService.get('database.dbPassword'),
                    schema: configService.get('database.dbSchema'),
                    extensions: [EntityGenerator],
                    autoLoadEntities: true,
                    debug: true,
                };

                return connection;
            }
        }),
    ],
})
export class DatabaseModule { }