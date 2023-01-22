import { ForbiddenException, Injectable } from '@nestjs/common';
import * as process from 'process';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { ItemEntity } from './entity/item.entity';

enum ItemCode {
  '아바타' = 20000,
  '각인서' = 40000,
  '전투용품' = 60000,
  '생활' = 90000,
  '모험의서' = 100000,
}

@Injectable()
export class MarketService {
  url = process.env.API_URL;
  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };
  data = {
    Sort: '',
    CategoryCode: 0,
    CharacterClass: '',
    ItemTier: 0,
    ItemGrade: '',
    ItemName: '',
    PageNo: 0,
    SortCondition: '',
  };

  constructor(private http: HttpService) {}

  async findItemList(
    sort: string,
    category: string,
    grade: string,
    sort_condition: string,
  ) {
    const item = this.data;
    item['Sort'] = sort;
    item['CategoryCode'] = ItemCode[category];
    item['ItemGrade'] = grade;
    item['SortCondition'] = sort_condition;

    console.log(item);

    const url = `${this.url}/markets/items`;
    const req = this.http
      .post(url, item, { headers: this.header })
      .pipe(
        map((res) => {
          const response = res.data['Items'];
          const item_list: ItemEntity[] = response.map((value) => {
            return new ItemEntity(value);
          });
          return item_list;
        }),
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new ForbiddenException('API not available');
        }),
      );
    const fact = await lastValueFrom(req);
    return fact;
  }

  //Item 종류를 입력하면 가장 비싼 아이템부터 리턴해주는 API
}
