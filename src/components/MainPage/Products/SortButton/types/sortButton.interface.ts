import { SortType } from '../../../../../hooks/useToggleSort';

type ClassType = boolean | null;

type ValueType = 'price' | 'count';

export interface SortButtonsType {
  content: string;
  mode: ValueType;
  toggleSort: (label: keyof SortType) => void;
  classState: (label: keyof SortType) => ClassType;
  stateValue?: boolean | null;
  classes?: string;
}
