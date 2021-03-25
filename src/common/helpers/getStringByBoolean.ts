import { StringBoolean } from '../enums/stringBoolean';

export const getStringByBoolean = (value: boolean | undefined): StringBoolean =>
  value ? StringBoolean.TRUE : StringBoolean.FALSE;
