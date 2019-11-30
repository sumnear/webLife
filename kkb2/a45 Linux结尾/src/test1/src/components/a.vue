<template lang="html">
  <div>
    aaaa
    {{count}}
    <input type="button" value="按钮" @click="fn">
    <ul v-if="list">
      <li v-for="a in list">{{a}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CmpA',
  data(){
    return {
      count: 0,
      list: null
    }
  },
  methods: {
    fn(){
      this.count++;
    }
  },
  async mounted(){
    let arr=await (await fetch('http://192.168.208.132:8090/')).json();

    console.log(arr);

    this.list=arr;
  }
}
</script>

<style lang="css">
</style>
