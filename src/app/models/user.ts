export class User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface CurrentObjectDate {
  year: number;
  month: string;
  days: { name: string; number: number }[];
}
