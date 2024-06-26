<template lang="">
    <div id="parent">
        <form @submit.prevent ="formSubmit">
            <h1>Sign Up Form</h1>
            <label>Email:</label>
            <input type="email" required v-model="email">
            <label>Password:</label>
            <input type="password" required v-model="password">
            <label>Role:</label>
           <select v-model="role">
            <option value="developer">
                Web Developer
            </option>
            <option value="designer">
                Web Designer
            </option>
            <option value="">
                Select a Role
            </option>

           </select>

        </form>
        
    </div>
  </template>
  <script>
  export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            terms:'',
            names:[],
            currentLanguage:'',
            languages:['something']
        }
    },
    methods: {
        formSubmit(){
            console.log('This page has been refreshed');
            this.email = '',
            this.password = '',
            this.terms = false
            this.currentLanguage = '',
            this.role = ''
        }
    },
    
  }
  </script>
  <style lang="">
    
  </style>