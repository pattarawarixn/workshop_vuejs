<template>
  <div>
    <h1>HI</h1>
    <h1>{{name}} {{lastname}}</h1>
    <v-btn color="success" @click="callmain('เรียกใช้งานจาก subsimple')">submit_import_simple</v-btn>
  </div>
</template>

<script>
import {EventBus} from '@/EventBus.js'

export default {
  props:['name','lastname'],
  
  mounted(){
        EventBus.$on('callsub', this.displaysub)
    },
    methods: {
        callmain(item) {
            EventBus.$emit('callmain',item)
        },
        displaysub(){
            alert('แจ้งเตือนจาก component sub')
        }
    }
}
</script>

<style>

</style>
