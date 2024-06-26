<template lang="">
    <div v-for="project in projectData()" :key="project.name">
        <h1>jhh{{project.name}} </h1>
    
        
 </div>
</template>
<script>
export default {
    methods:{
        projectData(){
        return this.$store.state.projects
        }
    },
    computed:{
        getAboutMe(){
           return this.$store.dispatch('getAboutMe')   
            },
            

    },
    mounted(){
        this.getAboutMe
    }
}
</script>
<style>
    
</style>