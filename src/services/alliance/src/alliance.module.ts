import { forwardRef, Module } from '@nestjs/common';
import { AllianceService } from './alliance.service';
import { AllianceController } from './alliance.controller';
import { ESIModule } from '@new-eden-social/esi';
import { ZKillboardModule } from '@new-eden-social/zkillboard';
import { CorporationModule } from '../../../src/modules/corporation/corporation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllianceRepository } from './alliance.repository';
import { FollowModule } from '../../../src/modules/follow/follow.module';
import { PostModule } from '../../post/src/post.module';
import { LoggerModule } from '@new-eden-social/logger';
import { UtilsModule } from '@new-eden-social/utils';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';

@Module({
  imports: [
    LoggerModule,
    UtilsModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: process.env.DB_LOG as LoggerOptions,
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: process.env.DB_SYNC === 'true',
    }),

    TypeOrmModule.forFeature([AllianceRepository]),

    ZKillboardModule,
    ESIModule,
    forwardRef(() => CorporationModule),
    forwardRef(() => FollowModule),
    forwardRef(() => PostModule),
  ],
  controllers: [
    AllianceController,
  ],
  providers: [
    AllianceService,
  ],
  exports: [
    AllianceService,
  ],
})
export class AllianceModule {
}
