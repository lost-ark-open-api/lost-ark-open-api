import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { CharacterEntity } from './entity/character.entity';

@Injectable()
export class CharacterService {
  url = process.env.API_URL;

  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  constructor(private http: HttpService) {}

  async findCharacterList(nickname: string) {
    const url = `${this.url}/characters/${nickname}/siblings`;
    const req = this.http
      .get(url, { headers: this.header })
      .pipe(
        map((res) => {
          console.log(url);
          const item: any = res.data;
          const new_item: CharacterEntity[] = item.map((value) => {
            return new CharacterEntity({
              ServerName: value.ServerName,
              CharacterName: value.CharacterName,
              CharacterClassName: value.CharacterClassName,
              ItemMaxLevel: value.ItemMaxLevel,
            });
          });
          return new_item;
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

  async findCharacter(nickname: string) {
    const item_list: CharacterEntity[] = await this.findCharacterList(nickname);
    const item: CharacterEntity[] = item_list.filter(
      (value) => value.CharacterName == nickname,
    );
    return item;
  }

  async findCharterServer(nickname: string, ServerName: string) {
    const item_list: CharacterEntity[] = await this.findCharacterList(nickname);
    const item: CharacterEntity[] = item_list.filter(
      (value) => value.ServerName == ServerName,
    );
    return item;
  }
}
