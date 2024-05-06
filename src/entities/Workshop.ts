import { Collection, EntitySchema, type Opt } from '@mikro-orm/core';
import { WorkshopParagraph } from './WorkshopParagraph.js';

export class Workshop {
  id!: number;
  title!: string;
  isActived?: boolean;
  isDeleted?: boolean;
  updatedAt?: Date;
  updatedBy?: number;
  createdAt!: Date & Opt;
  createdBy!: number;
  description?: string;
  imageUrl?: string;
  workshopInverse = new Collection<WorkshopParagraph>(this);
}

export const WorkshopSchema = new EntitySchema({
  class: Workshop,
  schema: 'my_knowledge_main',
  properties: {
    id: { primary: true, type: 'number' },
    title: { type: 'string' },
    isActived: { type: 'boolean', nullable: true },
    isDeleted: { type: 'boolean', nullable: true },
    updatedAt: { type: 'Date', length: 6, nullable: true, defaultRaw: `CURRENT_TIMESTAMP` },
    updatedBy: { type: 'number', nullable: true },
    createdAt: { type: 'Date', length: 6, defaultRaw: `CURRENT_TIMESTAMP` },
    createdBy: { type: 'number' },
    description: { type: 'string', nullable: true },
    imageUrl: { type: 'string', columnType: 'text', nullable: true },
    workshopInverse: { kind: '1:m', entity: () => WorkshopParagraph, mappedBy: 'workshop' },
  },
});
