export interface IDurationTypeEntity {
    id: number;
    typeName: string;
    typeDescription: string;
    isActive: boolean; //type bit in sql 
    totalPages: number;
}