export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
};

export type Ammo = {
  __typename?: 'Ammo';
  attackPower?: Maybe<Array<Maybe<AttributeEntry>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passive?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Armor = {
  __typename?: 'Armor';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dmgNegation?: Maybe<Array<Maybe<AttributeEntry>>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resistance?: Maybe<Array<Maybe<AttributeEntry>>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type AshOfWar = {
  __typename?: 'AshOfWar';
  affinity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skill?: Maybe<Scalars['String']['output']>;
};

export type AttributeEntry = {
  __typename?: 'AttributeEntry';
  amount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Boss = {
  __typename?: 'Boss';
  description?: Maybe<Scalars['String']['output']>;
  drops?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  healthPoints?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type Class = {
  __typename?: 'Class';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<ClassStats>;
};

export type ClassStats = {
  __typename?: 'ClassStats';
  arcane?: Maybe<Scalars['String']['output']>;
  dexterity?: Maybe<Scalars['String']['output']>;
  endurance?: Maybe<Scalars['String']['output']>;
  faith?: Maybe<Scalars['String']['output']>;
  inteligence?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  mind?: Maybe<Scalars['String']['output']>;
  strenght?: Maybe<Scalars['String']['output']>;
  vigor?: Maybe<Scalars['String']['output']>;
};

export type Creature = {
  __typename?: 'Creature';
  description?: Maybe<Scalars['String']['output']>;
  drops?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Incantation = {
  __typename?: 'Incantation';
  cost?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  effects?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requires?: Maybe<Array<Maybe<AttributeEntry>>>;
  slots?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']['output']>;
  effect?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type Npc = {
  __typename?: 'Npc';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  ammo?: Maybe<Array<Maybe<Ammo>>>;
  armor?: Maybe<Array<Maybe<Armor>>>;
  ashOfWar?: Maybe<Array<Maybe<AshOfWar>>>;
  boss?: Maybe<Array<Maybe<Boss>>>;
  class?: Maybe<Array<Maybe<Class>>>;
  creature?: Maybe<Array<Maybe<Creature>>>;
  getAmmo: Ammo;
  getArmor: Armor;
  getAshOfWar: AshOfWar;
  getBoss: Boss;
  getClass: Class;
  getCreature: Creature;
  getIncantation: Incantation;
  getItem: Item;
  getLocation: Location;
  getNpc: Npc;
  getShield: Shield;
  getSorcery: Sorcery;
  getSpirit: Spirit;
  getTalisman: Talisman;
  getWeapon: Weapon;
  incantation?: Maybe<Array<Maybe<Incantation>>>;
  item?: Maybe<Array<Maybe<Item>>>;
  location?: Maybe<Array<Maybe<Location>>>;
  npc?: Maybe<Array<Maybe<Npc>>>;
  shield?: Maybe<Array<Maybe<Shield>>>;
  sorcery?: Maybe<Array<Maybe<Sorcery>>>;
  spirit?: Maybe<Array<Maybe<Spirit>>>;
  talisman?: Maybe<Array<Maybe<Talisman>>>;
  weapon?: Maybe<Array<Maybe<Weapon>>>;
};

export type QueryAmmoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  passive?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QueryArmorArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type QueryAshOfWarArgs = {
  affinity?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skill?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBossArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  healthPoints?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryClassArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCreatureArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetAmmoArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetArmorArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetAshOfWarArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetBossArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetClassArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetCreatureArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetIncantationArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetItemArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetLocationArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetNpcArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetShieldArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetSorceryArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetSpiritArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetTalismanArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetWeaponArgs = {
  id: Scalars['String']['input'];
};

export type QueryIncantationArgs = {
  cost?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QueryItemArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLocationArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryNpcArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryShieldArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type QuerySorceryArgs = {
  cost?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySpiritArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fpCost?: InputMaybe<Scalars['String']['input']>;
  hpCost?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTalismanArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryWeaponArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type ScalingEntry = {
  __typename?: 'ScalingEntry';
  name?: Maybe<Scalars['String']['output']>;
  scaling?: Maybe<Scalars['String']['output']>;
};

export type Shield = {
  __typename?: 'Shield';
  attack?: Maybe<Array<Maybe<AttributeEntry>>>;
  category?: Maybe<Scalars['String']['output']>;
  defence?: Maybe<Array<Maybe<AttributeEntry>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requiredAttributes?: Maybe<Array<Maybe<AttributeEntry>>>;
  scalesWith?: Maybe<Array<Maybe<ScalingEntry>>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Sorcery = {
  __typename?: 'Sorcery';
  cost?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  effects?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requires?: Maybe<Array<Maybe<AttributeEntry>>>;
  slots?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Spirit = {
  __typename?: 'Spirit';
  description?: Maybe<Scalars['String']['output']>;
  effect?: Maybe<Scalars['String']['output']>;
  fpCost?: Maybe<Scalars['String']['output']>;
  hpCost?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Talisman = {
  __typename?: 'Talisman';
  description?: Maybe<Scalars['String']['output']>;
  effect?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Weapon = {
  __typename?: 'Weapon';
  attack?: Maybe<Array<Maybe<AttributeEntry>>>;
  category?: Maybe<Scalars['String']['output']>;
  defence?: Maybe<Array<Maybe<AttributeEntry>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requiredAttributes?: Maybe<Array<Maybe<AttributeEntry>>>;
  scalesWith?: Maybe<Array<Maybe<ScalingEntry>>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ArmorsQueryVariables = Exact<{[key: string]: never}>;

export type ArmorsQuery = {
  __typename?: 'Query';
  armor?: Array<{
    __typename?: 'Armor';
    id: string;
    name?: string | null;
    image?: string | null;
    category?: string | null;
  } | null> | null;
};

export type ArmorDetailsQueryVariables = Exact<{[key: string]: never}>;

export type ArmorDetailsQuery = {
  __typename?: 'Query';
  getArmor: {
    __typename?: 'Armor';
    description?: string | null;
    weight?: number | null;
    dmgNegation?: Array<{
      __typename?: 'AttributeEntry';
      name?: string | null;
      amount?: number | null;
    } | null> | null;
    resistance?: Array<{
      __typename?: 'AttributeEntry';
      name?: string | null;
      amount?: number | null;
    } | null> | null;
  };
};

export type AshesOfWarQueryVariables = Exact<{[key: string]: never}>;

export type AshesOfWarQuery = {
  __typename?: 'Query';
  ashOfWar?: Array<{
    __typename?: 'AshOfWar';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type AshesOfWarDetailsQueryVariables = Exact<{[key: string]: never}>;

export type AshesOfWarDetailsQuery = {
  __typename?: 'Query';
  getAshOfWar: {
    __typename?: 'AshOfWar';
    description?: string | null;
    affinity?: string | null;
    skill?: string | null;
  };
};

export type BossQueryVariables = Exact<{[key: string]: never}>;

export type BossQuery = {
  __typename?: 'Query';
  boss?: Array<{
    __typename?: 'Boss';
    id: string;
    name?: string | null;
    image?: string | null;
    description?: string | null;
  } | null> | null;
};

export type BossDetailsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type BossDetailsQuery = {
  __typename?: 'Query';
  getBoss: {
    __typename?: 'Boss';
    description?: string | null;
    location?: string | null;
    region?: string | null;
    drops?: Array<string | null> | null;
    healthPoints?: string | null;
  };
};

export type ClassesQueryVariables = Exact<{[key: string]: never}>;

export type ClassesQuery = {
  __typename?: 'Query';
  class?: Array<{
    __typename?: 'Class';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type ClassDetailsQueryVariables = Exact<{[key: string]: never}>;

export type ClassDetailsQuery = {
  __typename?: 'Query';
  getClass: {
    __typename?: 'Class';
    id: string;
    name?: string | null;
    image?: string | null;
    description?: string | null;
    stats?: {
      __typename?: 'ClassStats';
      level?: string | null;
      vigor?: string | null;
      mind?: string | null;
      endurance?: string | null;
      strenght?: string | null;
      dexterity?: string | null;
      inteligence?: string | null;
      faith?: string | null;
      arcane?: string | null;
    } | null;
  };
};

export type CreaturesQueryVariables = Exact<{[key: string]: never}>;

export type CreaturesQuery = {
  __typename?: 'Query';
  creature?: Array<{
    __typename?: 'Creature';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type CreatureDetailsQueryVariables = Exact<{[key: string]: never}>;

export type CreatureDetailsQuery = {
  __typename?: 'Query';
  getCreature: {
    __typename?: 'Creature';
    id: string;
    name?: string | null;
    image?: string | null;
    location?: string | null;
    description?: string | null;
    drops?: Array<string | null> | null;
  };
};

export type IncantationsQueryVariables = Exact<{[key: string]: never}>;

export type IncantationsQuery = {
  __typename?: 'Query';
  incantation?: Array<{
    __typename?: 'Incantation';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type IncantationDetailsQueryVariables = Exact<{[key: string]: never}>;

export type IncantationDetailsQuery = {
  __typename?: 'Query';
  getIncantation: {
    __typename?: 'Incantation';
    description?: string | null;
    type?: string | null;
    cost?: number | null;
    slots?: number | null;
    effects?: string | null;
    requires?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
  };
};

export type ItemsQueryVariables = Exact<{[key: string]: never}>;

export type ItemsQuery = {
  __typename?: 'Query';
  item?: Array<{
    __typename?: 'Item';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type ItemDetailsQueryVariables = Exact<{[key: string]: never}>;

export type ItemDetailsQuery = {
  __typename?: 'Query';
  getItem: {
    __typename?: 'Item';
    description?: string | null;
    effect?: string | null;
    type?: string | null;
  };
};

export type LocationsQueryVariables = Exact<{[key: string]: never}>;

export type LocationsQuery = {
  __typename?: 'Query';
  location?: Array<{
    __typename?: 'Location';
    id: string;
    name?: string | null;
    image?: string | null;
    region?: string | null;
  } | null> | null;
};

export type LocationDetailsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type LocationDetailsQuery = {
  __typename?: 'Query';
  getLocation: {
    __typename?: 'Location';
    description?: string | null;
    region?: string | null;
  };
};

export type LocationImageByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type LocationImageByNameQuery = {
  __typename?: 'Query';
  location?: Array<{
    __typename?: 'Location';
    image?: string | null;
  } | null> | null;
};

export type NpcsQueryVariables = Exact<{[key: string]: never}>;

export type NpcsQuery = {
  __typename?: 'Query';
  npc?: Array<{
    __typename?: 'Npc';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type NpcDetailsQueryVariables = Exact<{[key: string]: never}>;

export type NpcDetailsQuery = {
  __typename?: 'Query';
  getNpc: {
    __typename?: 'Npc';
    description?: string | null;
    quote?: string | null;
    location?: string | null;
    role?: string | null;
  };
};

export type SearchDataQueryVariables = Exact<{[key: string]: never}>;

export type SearchDataQuery = {
  __typename?: 'Query';
  creature?: Array<{
    __typename: 'Creature';
    id: string;
    name?: string | null;
  } | null> | null;
  location?: Array<{
    __typename: 'Location';
    id: string;
    name?: string | null;
  } | null> | null;
  boss?: Array<{
    __typename: 'Boss';
    id: string;
    name?: string | null;
  } | null> | null;
  weapon?: Array<{
    __typename: 'Weapon';
    id: string;
    name?: string | null;
  } | null> | null;
};

export type ShieldsQueryVariables = Exact<{[key: string]: never}>;

export type ShieldsQuery = {
  __typename?: 'Query';
  shield?: Array<{
    __typename?: 'Shield';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type ShieldDetailsQueryVariables = Exact<{[key: string]: never}>;

export type ShieldDetailsQuery = {
  __typename?: 'Query';
  getShield: {
    __typename?: 'Shield';
    description?: string | null;
    category?: string | null;
    weight?: number | null;
    attack?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
    defence?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
    scalesWith?: Array<{
      __typename?: 'ScalingEntry';
      scaling?: string | null;
      name?: string | null;
    } | null> | null;
    requiredAttributes?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
  };
};

export type SorceriesQueryVariables = Exact<{[key: string]: never}>;

export type SorceriesQuery = {
  __typename?: 'Query';
  sorcery?: Array<{
    __typename?: 'Sorcery';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type SorceryDetailsQueryVariables = Exact<{[key: string]: never}>;

export type SorceryDetailsQuery = {
  __typename?: 'Query';
  getSorcery: {
    __typename?: 'Sorcery';
    id: string;
    name?: string | null;
    image?: string | null;
    description?: string | null;
    cost?: number | null;
    slots?: number | null;
    effects?: string | null;
    requires?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
  };
};

export type SpiritsQueryVariables = Exact<{[key: string]: never}>;

export type SpiritsQuery = {
  __typename?: 'Query';
  spirit?: Array<{
    __typename?: 'Spirit';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type GetSpritsQueryVariables = Exact<{[key: string]: never}>;

export type GetSpritsQuery = {
  __typename?: 'Query';
  getSpirit: {
    __typename?: 'Spirit';
    description?: string | null;
    fpCost?: string | null;
    hpCost?: string | null;
    effect?: string | null;
  };
};

export type TalismansQueryVariables = Exact<{[key: string]: never}>;

export type TalismansQuery = {
  __typename?: 'Query';
  talisman?: Array<{
    __typename?: 'Talisman';
    id: string;
    name?: string | null;
    image?: string | null;
  } | null> | null;
};

export type TalismanDetailsQueryVariables = Exact<{[key: string]: never}>;

export type TalismanDetailsQuery = {
  __typename?: 'Query';
  getTalisman: {
    __typename?: 'Talisman';
    description?: string | null;
    effect?: string | null;
  };
};

export type WeaponsQueryVariables = Exact<{[key: string]: never}>;

export type WeaponsQuery = {
  __typename?: 'Query';
  weapon?: Array<{
    __typename?: 'Weapon';
    id: string;
    name?: string | null;
    image?: string | null;
    category?: string | null;
  } | null> | null;
};

export type WeaponDetailsQueryVariables = Exact<{[key: string]: never}>;

export type WeaponDetailsQuery = {
  __typename?: 'Query';
  getWeapon: {
    __typename?: 'Weapon';
    description?: string | null;
    category?: string | null;
    weight?: number | null;
    attack?: Array<{
      __typename?: 'AttributeEntry';
      name?: string | null;
      amount?: number | null;
    } | null> | null;
    defence?: Array<{
      __typename?: 'AttributeEntry';
      name?: string | null;
      amount?: number | null;
    } | null> | null;
    scalesWith?: Array<{
      __typename?: 'ScalingEntry';
      name?: string | null;
      scaling?: string | null;
    } | null> | null;
    requiredAttributes?: Array<{
      __typename?: 'AttributeEntry';
      amount?: number | null;
      name?: string | null;
    } | null> | null;
  };
};
