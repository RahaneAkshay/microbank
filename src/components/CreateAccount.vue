<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        {{ checkForm }}
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              v-model="userDetails.fullName"
            />
          </div>
          <div class="mb-3">
            <label for="DOI" class="form-label">Date of Incorporation</label>
            <input
              type="date"
              class="form-control"
              id="DOI"
              v-model="userDetails.DOI"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="userDetails.email"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              id="Password"
              v-model="userDetails.Password"
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label"
              >Confirm Password</label
            >
            <input
              type="text"
              class="form-control"
              id="confirmPassword"
              v-model="userDetails.confirmPassword"
            />
          </div>
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="getFormData()"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateAccount extends Vue {
  userDetails = {
    fullName: "",
    DOI: null,
    email: "",
    Password: "",
    confirmPassword: "",
  };
  getFormData(): void {
    console.log(this.checkForm());
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkForm(): boolean {
    if (
      this.userDetails.fullName &&
      this.userDetails.DOI &&
      this.userDetails.email &&
      this.userDetails.Password &&
      this.userDetails.confirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  }
  validateFormData(): void {
    console.log();
  }
}
</script>
<style scoped>
label {
  text-align: right;
}
</style>
