interface InfoPage {
  name: string;
  id: string;
  image: string;
}

export type HomeStackParams = {
  MainPage: undefined;
  List: undefined;
  Armors: undefined;
  Bosses: undefined;
  Weapons: undefined;
  AshesOfWar: undefined;
  Classes: undefined;
  Creatures: undefined;
  Incantations: undefined;
  Items: undefined;
  NPCs: undefined;
  Locations: undefined;
  Shields: undefined;
  Sorcery: undefined;
  BossInfo: InfoPage;
  WeaponInfo: InfoPage;
};
