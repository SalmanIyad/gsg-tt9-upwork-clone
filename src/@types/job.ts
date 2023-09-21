export interface IJob {
  title: string;
  type: string;
  date: Date;
  desc: string;
  tags: string[];
  proposals: number[];
  like: boolean;
}
