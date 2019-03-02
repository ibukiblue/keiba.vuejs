<template>
  <div class="all-horse">
    <table class="horse-table">
      <tbody>
        <tr>
          <th>NO, 馬名, 年齢</th>
        </tr>
        <tr>
          <td v-for="{ id, name, age } in list" :key="id">
            <router-link :to="`/horse/${ id }`">{{ id }}, {{ name }}, {{ age }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="horse-table horse-add">
      <tbody>
        <tr>
          <th>NO, 馬名, 年齢</th>
          <th>
            <router-link to="/add">新規追加</router-link>
          </th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import horses from '@/api/horses.js'
import AddHorse from '@/components/AddHorse.vue'
export default {
  computed: {
    list: () => horses.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-horse {
  width: 300px;
}
.horse-table {
  margin: 0,auto;
  width: 300px;
}
tr {
  display: table-row;
}
td {
  display: block;
  width: 100%;
}
.horse-add {
  margin: 60px auto;
}
</style>
