export interface IProjectExecutionDetails {
    id            : number;
    projectName   : String;
    releaseTime   : String;
    resourceName  : String;
    testingType   : String;
    totalFailed   : String;
    totalPassed   : String;
    totalSkipped  : String;
    totalTestcase : String;
}