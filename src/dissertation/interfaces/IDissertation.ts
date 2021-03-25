export type IDissertation = Partial<{
  id: string;
  fullName: string;
  academicDegree: string;
  speciality: string;
  defendPlace: string;
  defendDate: Date;
  theme: string;
  supervisor: string;
  autoRefFile: string;
  dissertationFile: string;
  createdAt: Date;
  updatedAt: Date;
}>;

export type IDissertationFields = {
  [P in keyof IDissertation]?: string;
};
