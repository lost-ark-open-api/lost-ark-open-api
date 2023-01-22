import { Controller, Get, Query } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private marketService: MarketService) {}

  @Get('list')
  getItemList(
    @Query('sort_type') sort_type: string,
    @Query('category') category: string,
    @Query('grade') grade: string,
    @Query('sort_condition') sort_condition: string,
  ) {
    //todo item dto 유효성 검증 코드 작성하기
    return this.marketService.findItemList(
      sort_type,
      category,
      grade,
      sort_condition,
    );
  }
}
