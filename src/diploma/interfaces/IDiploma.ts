import { EducationType } from '../../common/enums/education-type.enum';

export type IDiploma = Partial<{
  id: string;
  fullName: string;
  workName: string;
  supervisor: string;
  educationType: EducationType;
  grade: number;
  year: Date;
  workFile: string;
  presentationFile: string;
  createdAt: Date;
  updatedAt: Date;
}>;

export type IDiplomaFields = {
  [P in keyof IDiploma]?: string;
};
