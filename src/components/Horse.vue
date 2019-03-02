<template>
  <div>
      <h3>詳細情報</h3>
      <dl>
        <dt>id</dt><dd>{{ horse.id }}</dd>
        <dt>name</dt><dd>{{ horse.name }}</dd>
        <dt>age</dt><dd>{{ horse.age }}</dd>
      </dl>
      <div>
        <router-link to="/">お気に入り馬一覧へ</router-link>
      </div>
  </div>
</template>
<script>
import horses from '@/api/horses.js'
export default {
  props: {
    id: Number
  },
  data() {
    return {
      horse: null
    }
  },
  watch: {
    id: {
      handler() {
        horses.asyncFind(this.id, horse => {
          this.horse = horse
        })
      }, immediate: true
    }
  }
}
</script>

<style scoped>
dl {
  display: inline-block;
  width: 300px;
  margin: 0 auto;
  text-align: left;
}
dt {
  display: inline-block;
  width: 30%;
}
dd {
  display: inline-block;
  width: 68%;
  margin: 0;
}
</style>
