export class UserService{

 private kindUser:'Manager'| 'General' | 'Client' | '' = ""

  getKindUser()
  {
    return this.kindUser
  }

  setKindUser(kind:'Manager'| 'General' | 'Client' | '')
  {
    this.kindUser = kind;
  }


}
