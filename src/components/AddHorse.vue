<template>
  <div>
    <h2>新規追加</h2>
    <table class="add-horse">
      <tr>
        <th>NO,{{ id }} </th>
      </tr>
      <tr>
        <th>馬名, {{ name }} </th>
      </tr>
      <tr>
        <th>年齢, {{ age }} </th>
      </tr>
    </table>
    <form class="text-form">
      <input type="text" v-model="id">
      <input type="text" v-model="name">
      <input type="text" v-model="age">
      <input type="submit" value="add">
    </form>
    <div>
      <router-link to="/">お気に入り馬一覧へ</router-link>
    </div>
  </div>
</template>

<script>
import Horses from '@/components/Horses.vue'
export default {
  data() {
    return {
      id: "",
      name: "",
      age: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-horse {
  text-align: left;
}
.text-form {
  width: 150px;
  margin: 0 auto;
}
</style>
