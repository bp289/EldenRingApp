interface InfoPage {
  name: string;
  id: string;
  image: string;
}

export type HomeStackParams = {
  MainPage: undefined;
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
  Spirits: undefined;
  Talismans: undefined;
  LocationInfo: InfoPage;
  BossInfo: InfoPage;
  WeaponInfo: InfoPage;
  ShieldInfo: InfoPage;
  AshOfWarInfo: InfoPage;
  ClassInfo: InfoPage;
  CreaturesInfo: InfoPage;
  IncantationsInfo: InfoPage;
  ItemsInfo: InfoPage;
  NPCInfo: InfoPage;
  SorceryInfo: InfoPage;
  SpiritInfo: InfoPage;
  TalismanInfo: InfoPage;
  ArmorInfo: InfoPage;
};
