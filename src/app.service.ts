import { MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor (
    private readonly orm: MikroORM
  ) {}

  // This method is called when the application is initialized
  // onModuleInit() {
  //   this.GenerateEntity()
  // }

  getHello(): string {
    return 'Hello World!';
  }

  async GenerateEntity(): Promise<string> {
    try {
      await this.orm.entityGenerator.generate({
        entitySchema: true,
        bidirectionalRelations: true,
        identifiedReferences: true,
        esmImport: true,
        save: true,
        path: 'src/entities',
      });

      console.log('Entities generated');
    } catch (error) {
      console.error(error);
      return 'Error generating entities';
    }
  }
}
