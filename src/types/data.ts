export type DetailItem = {
  year: number;
  description: string;
};

export type DataItem = {
  id: string;
  label: string;
  timespan: {
    start: number;
    end: number;
  };
  details: DetailItem[];
};
