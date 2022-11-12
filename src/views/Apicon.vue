<template>
<div> 
  <v-btn color="success" @click="newItemMode()">New data</v-btn>

  <v-row no-gutters>
    <v-col clos="3" v-for="(item,index) in apidata" :key="index">

    <v-card max-width="200">

    <v-img
      src="https://i.pinimg.com/originals/fb/15/6e/fb156e8234b500185a7daa0305387dfc.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.username}}
    </v-card-title>

    <v-card-subtitle>
      {{item.password}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="editItemMode(item)"
      >
        Edit
      </v-btn>
      <v-btn
        color="red lighten-2"
        text
        @click="delItemMode(item)"
      >
        Delete
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>

  <v-dialog
    v-model="dialogedit"
    max-width="500px"
    >
    <v-card>
      <v-card-title primary title>
      {{savemode}}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            name="username"
            label="username"
            id="username"
            v-model="postdata.username"
          ></v-text-field>
      </v-col>
      <v-col cols="6">
          <v-text-field
            name="password"
            label="password"
            id="password"
            v-model="postdata.password"
          ></v-text-field>
      </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
<v-btn text color="error" @click="closeData()">cancle</v-btn>
<v-btn outlined color="success" @click="selectSave()">save</v-btn>
    </v-card-actions>
    </v-card>
    
  </v-dialog>
  <v-dialog
    v-model="dialogdel"
    max-width="500px" 
  >
  <v-card>
    <v-card-title primary-title>
      Delete it
    </v-card-title>
    <v-card-text>
      are you sure ?
    </v-card-text>
    <v-card-actions>
<v-spacer></v-spacer>
<v-btn text color="error" @click="closeData()">cancle</v-btn>
<v-btn outlined color="success" @click="delData()">delete</v-btn>
    </v-card-actions>
  </v-card>
    
  </v-dialog>
  
  </div>
  
 
</template>

<script>
export default {
  data() {
    return{
      id:'',
      apidata: [],
      dialogedit: false,
      dialogdel: false,
      postdata:{
        username:'',
        password:'',
        fname:'',
        lname:'',
        age:'',
        gender: ''
      },
      postdefault:{
        username:'',
        password:'',
        fname:'',
        lname:'',
        age:'',
        gender: ''
      }
  }
  },
  created(){
    this.getData ()
  },
  computed:{
    savemode(){
      return this.id == ''? 'New Item': 'Edit Item'
    }
  },
methods: {
  getData () {
    this.axios.get('http://localhost:3000/users/').then((response) => {
    console.log(response.data)
    this.apidata = response.data.data
    })
  },
  newItemMode(){
    this.dialogedit = true
    this.id = ''
  },
  editItemMode(item){
    this.dialogedit = true
    this.id = item._id
    this.postdata = {...item}
  },
  selectSave (){ //เลือกโหมดบันทึก
    if (this.savemode == 'Edit Item'){
    this.putData ()

    }else this.postData()

  },
  delItemMode(item){
    this.dialogdel = true
    this.id = item._id
  },
  async postData(){
    try {
    const{data} = await this.axios.post('http://localhost:3000/users/', this.postdata) 
    alert(data.message)
    this.getData()
    this.postData = {...this.postdefault}
    this.dialogedit = false
    } catch (error) {
      console.log(error)
    }
  },
       async putData (){
      try{
        const {data} = await this.axios.put('http://localhost:3000/users/' + this.id, this.postdata)
        alert(data.message)
        this.getData()
        this.postdata = Object.assign({}, this.postdefault)
        this.dialogedit = false
        //ใช้แทน object.assign
        // this.postdata = {...this.postdefault}
      }catch(error){
        console.log(error)
      }
    },
  async delData(){
    try {
    const{data} = await this.axios.delete('http://localhost:3000/users/'+ this.id) 
    alert(data.message)
    this.getData()
    this.postData = {...this.postdefault}
    this.id = ''
    this.dialogdel = false
    } catch (error) {
      console.log(error)
    }
  },
 closeData () {
        this.postdata = Object.assign({}, this.postdefault)
        this.dialogedit = false
        this.dialogdel = false
    }
}
}

</script>

<style>

</style>

