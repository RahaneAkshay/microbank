
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              v-model="userFormGroup.props.fullName"
            />
          </div>
          <div class="mb-3">
            <label for="DOI" class="form-label">Date of Incorporation</label>
            <input
              type="date"
              class="form-control"
              id="DOI"
              v-model="userFormGroup.props.dateOfIncorporation"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="userFormGroup.props.email"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
              v-model="userFormGroup.props.password"
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              v-model="userFormGroup.props.confirmPassword"
            />
          </div>
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="getFormData()"
            :disabled="!userFormGroup.valid"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue } from "vue-property-decorator";
import { required, RxFormBuilder, IFormGroup } from "@rxweb/reactive-forms";
import { User } from "../model/user.model";
import { namespace } from 'vuex-class'
const user = namespace('User')
@Component
export default class CreateAccount extends Vue {
  userFormGroup: IFormGroup<User>;
  formBuilder: RxFormBuilder = new RxFormBuilder();
  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
  }
 
  @user.State
  public users!:Array<any>

   @user.Getter
  public getAllUsers!: Array<any>
  getFormData() {
    console.log(this.userFormGroup.props);
    console.log(this.getAllUsers);
  }
}
</script>
<style scoped>
label {
  text-align: right;
}
</style>
