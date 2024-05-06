import { EntitySchema, type Opt, type Ref } from '@mikro-orm/core';
import { Workshop } from './Workshop.js';

export class WorkshopParagraph {
  id!: number;
  type!: string;
  content?: string;
  isActived?: boolean;
  isDeleted?: boolean;
  updatedAt?: Date;
  updatedBy?: number;
  createdAt!: Date & Opt;
  createdBy!: number;
  workshop?: Ref<Workshop>;
}

export const WorkshopParagraphSchema = new EntitySchema({
  class: WorkshopParagraph,
  schema: 'my_knowledge_main',
  properties: {
    id: { primary: true, type: 'number' },
    type: { type: 'string' },
    content: { type: 'string', columnType: 'text', nullable: true },
    isActived: { type: 'boolean', nullable: true },
    isDeleted: { type: 'boolean', nullable: true },
    updatedAt: { type: 'Date', length: 6, nullable: true, defaultRaw: `CURRENT_TIMESTAMP` },
    updatedBy: { type: 'number', nullable: true },
    createdAt: { type: 'Date', length: 6, defaultRaw: `CURRENT_TIMESTAMP` },
    createdBy: { type: 'number' },
    workshop: { kind: 'm:1', entity: () => Workshop, ref: true, nullable: true },
  },
});
