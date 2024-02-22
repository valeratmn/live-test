interface IOwner {
  avatar_url: string;
  url: string;
  login: string;
}

export interface IRepository {
  id: string;
  owner: IOwner;
  description: string | null; 
}
export interface IStatistics {
  posts: number;
  followers: number;
  following: number;
}
