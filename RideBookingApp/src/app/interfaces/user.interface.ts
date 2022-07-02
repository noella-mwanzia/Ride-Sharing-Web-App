import { Roles } from "./roles"

export interface User{
  
  displayName: string,
  email: string, 
  phone: number,
  uId: string, 
  id: string,
  roles: Roles,
  createdOn: Date

}