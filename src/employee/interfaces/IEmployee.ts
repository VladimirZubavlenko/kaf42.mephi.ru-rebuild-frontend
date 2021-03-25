import { EmployeeTypeEnum } from '../enums/EmployeeTypeEnum';

export interface IEmployee {
  id: string;
  fullName: string;
  academicDegree: string;
  rank: string;
  position: string;
  job: string;
  subjects: string[];
  type: EmployeeTypeEnum;
  createdAt: Date;
  updatedAt: Date;
}
