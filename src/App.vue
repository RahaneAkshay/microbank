<template>

  <div id="app">
       <create-account></create-account>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAccount from './components/CreateAccount.vue'
import { ReactiveFormConfig, ClientLibrary } from "@rxweb/reactive-forms";

@Component({
  components: {
    
    CreateAccount
  },
})
export default class App extends Vue {}
ReactiveFormConfig.clientLib = ClientLibrary.Vue;
ReactiveFormConfig.set({
  validationMessage: {
    required: "This Field is required",
    alpha: "Only Alpha Numerics are allowed.",
    minLength: "Minimum {{1}} characters you have to enter."
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
