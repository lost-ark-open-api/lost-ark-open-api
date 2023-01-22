import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { ConfigModule } from '@nestjs/config';
import { MarketModule } from './market/market.module';

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
    MarketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
