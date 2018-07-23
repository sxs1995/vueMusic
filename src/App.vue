<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Mheader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    Mheader,
    Tab
  }
}
</script>

<style>
</style>
