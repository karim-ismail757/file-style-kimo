export class User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface CurrentObjectDate {
  year: number;
  month: { name: string; number: number };
  days: { name: string; number: number }[];
}
