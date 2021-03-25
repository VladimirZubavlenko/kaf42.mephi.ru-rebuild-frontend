export interface INews {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  body?: string;
  createdAt: Date;
  updatedAt?: Date;
}
