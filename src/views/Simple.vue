<template>
  <div>
    <h1>SIMPLE</h1>
    <h2 v-if="show">{{name}} {{lastname}}</h2>
    <v-btn color="success" @click="display()">CALL ALERT</v-btn>
    <v-btn color="success" @click="display2('hi')">CALL ALERT2</v-btn>

    <!-- <v-text-field name="no1" label="Number1" id="id" v-model="number1"></v-text-field>
    <v-text-field name="no2" label="Number2" id="id" v-model="number2"></v-text-field>
    <h1> RESULT : {{result}}</h1>
    <v-btn color="success" @click="calsum()">sum</v-btn> -->

 <v-text-field name="no1" label="Number 1" id="id" v-model="number1"></v-text-field>
    <v-text-field name="no2" label="Number 2" id="id" v-model="number2"></v-text-field>
    <h1>Result : {{result}}</h1>
    <v-btn color="success" @click="calsum()">sum</v-btn>
<br>
<br>
    <h1>Grade</h1>
    <v-text-field name="score" label="score" id="id" v-model="score"></v-text-field>
    <v-btn color="success" @click="sum()">check</v-btn>
    <h1>Grade : {{summary}}</h1>
    <subsimple :name="name" :lastname="lastname"/>

  
  <v-btn color="success" @click="callsub()">sub</v-btn>
    </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import subsimple from "../components/subsimple.vue"
export default {
    components:{
        subsimple
    },
  data: () => ({
    name: 'aomsin',
    lastname: 'kim',
    show: false,
    number1:'',
    number2:'',
    result: '',
    score: '',
    summary: '',
    items: [{ message: 'Foo', address: 'ooo' }, { message: 'Bar', address: 'aao' }],
    personal: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618'
          }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653'
          }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      }
      ]
}),
mounted(){
    EventBus.$on('callmain', this.display2)
  },
methods: {
  display(){
    alert('hello')
  },
  callsub(){
        EventBus.$emit('callsub')
    },

  display2(item){
    alert(item)
  },
  calsum() {
        this.result = parseInt(this.number1) + parseInt(this.number2)
    },
  sum() {
    if(this.score>=80&&this.score<=100){
      this.summary=('A')
    }else if(this.score>=70&&this.score<=79){
      this.summary=('B')
    }else if(this.score>=60&&this.score<=69){
      this.summary=('C')
    }else if(this.score>=50&&this.score<=59){
      this.summary=('D')
    }else if(this.score>=0&&this.score<=49){
      this.summary=('F')
    }else{
    this.summary=('ERROR')
    alert('error')
     
    }      
  },
  
 
}

}
</script>

<style>

</style>
