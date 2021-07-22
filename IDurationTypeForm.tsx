import { IDurationTypeEntity } from "./IDurationTypeEntity";

export interface IDurationTypeForm {
    durationTypeEntity: IDurationTypeEntity;
    onChange: (fieldName: string, value: any) => void;
    onSubmit: () => void;    
}