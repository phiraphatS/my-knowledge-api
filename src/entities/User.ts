import { EntitySchema, type Opt } from '@mikro-orm/core';

export class User {
  id!: number;
  username!: string;
  password!: string;
  createdAt!: Date & Opt;
  createdBy: number & Opt = 0;
  updatedAt?: Date;
  updatedBy?: number & Opt = 0;
  isActived?: boolean & Opt = true;
  isDeleted?: boolean & Opt = false;
}

export const UserSchema = new EntitySchema({
  class: User,
  schema: 'my_knowledge_main',
  properties: {
    id: { primary: true, type: 'number' },
    username: { type: 'string' },
    password: { type: 'string' },
    createdAt: { type: 'Date', length: 6, defaultRaw: `CURRENT_TIMESTAMP` },
    createdBy: { type: 'number' },
    updatedAt: { type: 'Date', length: 6, nullable: true, defaultRaw: `CURRENT_TIMESTAMP` },
    updatedBy: { type: 'number', nullable: true },
    isActived: { type: 'boolean', nullable: true },
    isDeleted: { type: 'boolean', nullable: true },
  },
});
