export class ItemEntity {
  id: number;
  //아이템 아이디
  name: string;
  //아이템 이름
  grade: string;
  //아이템 등급
  icon: string;
  //아이템 아이콘 이미지 url
  bundleCount: number;
  //번들 하나에 들어가는 아이템 갯수
  TradeRemainCount: number;
  //교환가능횟수
  YDayAvgPrice: number;
  //전날 평균가격
  RecentPrice: number;
  //최근가격
  CurrentMinPrice: number;

  //현재 최저가

  constructor(item: any) {
    this.id = item.Id;
    this.name = item.Name;
    this.grade = item.Grade;
    this.bundleCount = item.BundleCount;
    this.icon = item.Icon;
    this.TradeRemainCount = item.TradeRemainCount;
    this.CurrentMinPrice = item.CurrentMinPrice;
    this.YDayAvgPrice = item.YDayAvgPrice;
    this.RecentPrice = item.RecentPrice;
  }
}
