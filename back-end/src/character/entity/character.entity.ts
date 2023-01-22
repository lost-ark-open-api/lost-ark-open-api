export class CharacterEntity {
  ServerName: string;

  CharacterName: string;

  CharacterClassName: string;

  ItemMaxLevel: string;

  constructor(item: {
    ServerName: string;
    CharacterName: string;
    CharacterClassName: string;
    ItemMaxLevel: string;
  }) {
    Object.assign(this, item);
  }
}
