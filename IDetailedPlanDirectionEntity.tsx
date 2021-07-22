export interface IDetailedPlanDirectionEntity {
    id: number;
    createdDate: Date;
    creatorFirstName: string;
    creatorLastName: string;
    issueLogId: number;
    roleName: string;
    responseText: string;
}

export interface IIssueLogResponseEntity {
    createdById: number;
    issueLogId: number;
    responseText: string;
}

//AS is in SQL
    //ilr.Id as ResponseId,
    //ilr.IssueLogId,
    //ilr.ResponseText,
    //up.FirstName as CreatorFirstName,
    //up.LastName as CreatorLastName,
    //ar.RoleName