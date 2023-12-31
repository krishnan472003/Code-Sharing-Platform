export interface Project{
    name?: string,
    members?: Array<string>
}
export interface Chat{
    message:string,
    senderMail:string,
    project:string,
    timestamp: EpochTimeStamp,
    type: Type,
}
export enum Type {
    message = "message",
    code = "code",
    error = "error"
  }

  