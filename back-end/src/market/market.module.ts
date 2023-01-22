import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketController } from './market.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MarketService],
  controllers: [MarketController],
})
export class MarketModule {}
