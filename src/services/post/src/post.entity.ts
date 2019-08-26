import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { POST_TYPES } from './post.constants';
import { AggregateRoot } from '@nestjs/cqrs';
import { IURLMetadata } from '@new-eden-social/api-metascraper';

@Entity()
export class Post extends AggregateRoot {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  content: string;

  @Column('varchar')
  type: POST_TYPES;

  @Column()
  killmailId: number;

  @Column('jsonb', { nullable: true })
  url: IURLMetadata;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  locationId: number;

  @Column()
  characterId?: number;

  @Column()
  corporationId?: number;

  @Column()
  allianceId?: number;

  @Column()
  characterWallId?: number;

  @Column()
  corporationWallId?: number;

  @Column()
  allianceWallId?: number;

  @Column()
  hashtags: string[];
}
