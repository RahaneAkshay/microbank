<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" />
          </div>
          <div class="mb-3">
            <label for="DOI" class="form-label">Date of Incorporation</label>
            <input type="date" class="form-control" id="DOI" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="text" class="form-control" id="Password" />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input type="text" class="form-control" id="confirmPassword" />
          </div>
          <button type="submit" class="btn btn-outline-warning">Create an account</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateAccount extends Vue {}
</script>
<style scoped>
label{
    text-align:right
}
</style>
