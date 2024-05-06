import { ProjectConfigModule } from './_config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './_database/db.module';

@Module({
  imports: [
    DatabaseModule,
    ProjectConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
