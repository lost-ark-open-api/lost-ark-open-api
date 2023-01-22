import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get('list/:nickname')
  getCharacterList(@Param('nickname') nickname: string) {
    return this.characterService.findCharacterList(
      encodeURIComponent(nickname),
    );
  } //해당 유저가 가지고 있는 캐릭터 리스트를 모두 가져온다

  @Get(':nickname')
  getCharacter(@Param('nickname') nickname: string) {
    return this.characterService.findCharacter(nickname);
  }

  @Get('server/:nickname')
  getCharacterServerName(
    @Param('nickname') nickname: string,
    @Query('ServerName') ServerName: string,
  ) {
    return this.characterService.findCharterServer(nickname, ServerName);
  }
}
