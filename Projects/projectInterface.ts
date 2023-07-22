export interface Project{
    name?: string,
    id?: number,
    createdOn?: EpochTimeStamp,
    lastUpdatedOn?: EpochTimeStamp,
    members?: Array<string>
}
export interface Chat{
    message:string,
    sender:string,
    project:string,
    timestamp: EpochTimeStamp,
    type: Type,
}
export enum Type {
    message = "message",
    code = "code",
    error = "error"
  }
  