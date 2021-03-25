import { EducationType } from '../enums/education-type.enum';

const educationNames = {
  [EducationType.MASTER]: 'Магистратура',
  [EducationType.BACHELOR]: 'Бакалавриат',
  [EducationType.POSTGRADUATE]: 'Аспирантура',
};

export const getEducationNameByType = (type: EducationType) => educationNames[type];
