import { EntitySchema } from '@mikro-orm/core';

export class Test {
  id!: number;
}

export const TestSchema = new EntitySchema({
  class: Test,
  schema: 'my_knowledge_main',
  properties: {
    id: { primary: true, type: 'number' },
  },
});
