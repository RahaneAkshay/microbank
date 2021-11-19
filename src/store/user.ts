/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'user' })
class User extends VuexModule {
  public users:Array<any> = [{name:'akshay'},{age:25}]
  @Mutation
  public setUser(newUser:any): void {
    this.users.push(newUser)
  }
  @Action
  public updateName(newUser: any): void {
    this.context.commit('setUser', newUser)
  }
  get getAllUsers(){
      return this.users
  }
}
export default User