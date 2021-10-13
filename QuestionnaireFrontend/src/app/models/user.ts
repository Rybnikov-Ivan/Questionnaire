export interface User{
  id: number,
  username: String,
  email: String,
  roles: Array<Role>
}

export interface Role{
  id: number,
  name: String
}
