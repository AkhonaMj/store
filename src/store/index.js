import { createStore } from 'vuex'
export default createStore({
  // work the same as variables
  state: {
    //data is property name and null is the value of the property
    about: null,
    education:null,
    skills: null,
    testimonials: null,
    workExp:null,
    projects:null

  },
  getters: {
    //used to get things, will always use filter inside of it
    filterData(){
      return Array.filter()
    }
  },
  mutations: {
    //use this to change or update the state
    //commiting mutations
    setAboutMe(state, payload){
      state.about = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    },
    setWorkExp(state,payload){
      state.workExp = payload
    },
    setProjects(state, payload){
      state.projects = payload
    }

  },
  actions: {
    //run async code
    //dispatching an action
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://akhonamj.github.io/first_api/data/data.json')
      let data = await fetchedInfo.json()
      let {aboutMe, projects, education, skills, workExp, testimonials} = data
      console.log(data)
      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setWorkExp', workExp)
      commit('setTestimonials', testimonials)

    }
  },
  modules: {
    //Used to seperate your code to make it more readable
  }
})
