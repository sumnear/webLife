<template>
  <div>
    aaa
    <span id="s1">{{msg}}</span>
    <CmpA/>
    bbb
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'aaa'
    }
  },
  name: 'HelloWorld',
  components: {
    CmpA: ()=>import('@/components/a')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {width:300px; height:100px; background:#CCC; border:1px solid black}
</style>
