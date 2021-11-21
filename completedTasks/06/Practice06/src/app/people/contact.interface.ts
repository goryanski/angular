export interface Person {
  id?: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  birth: Date;
  email: string;
  phonesNumbers: string[];
  isSelected: boolean;
}
