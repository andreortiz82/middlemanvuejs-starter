<template>
  <section id="app-component">
    <div class="app-component-wrapper">
      <h1>{{title}}</h1>

      <div class="flexbox-container">
        <brick v-for="brick in brickData" :name="brick.name" :imageURL="brick.imageURL"></brick>
      </div>
    </div>
  </section>
</template>

<script>
  import brick from './Brick.vue'
  export default {
    name: 'appComponent',
    data() {
      return {
        title: 'Hello from the App Component',
        brickData: [
          {name:'Sports', imageURL:'http://lorempixel.com/200/200/sports/'},
          {name:'City', imageURL:'http://lorempixel.com/200/200/city/'},
          {name:'People', imageURL:'http://lorempixel.com/200/200/people/'},
          {name:'Cats', imageURL:'http://lorempixel.com/200/200/cats/'}
        ]
      }
    },
    components: { brick }
  }
</script>

<style lang="scss" scoped>
.app-component-wrapper {
  padding:20px;
}
</style>
