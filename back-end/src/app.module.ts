import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
          type: 'postgres',
          database: 'lost-ark',
          entities: [],
          synchronize: true,
        }),*/
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      isGlobal: true,
    }),
    CharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
