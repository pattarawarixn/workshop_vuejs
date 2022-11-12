<template>
<div>

  <v-card
    
  >
    <v-toolbar
      extended
      extension-height="20"
    >
      <v-toolbar-title>
      <v-img
      src="https://i.pinimg.com/564x/38/aa/15/38aa15e0f3f2fd43210da6501c8975d0.jpg"
      height="100px"
      width="100px"
    ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="black">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon color="black" @click="shopCart()">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

    </v-toolbar>
  </v-card>
  
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
   <br>
<v-container>
<h1>Sneakers Playground</h1>
<h2>" STORIES, STYLES AND SPORTSWEAR AT SNEAKERS PLAYGROUND, SINCE 2021 "</h2> 
<h3>Recommended</h3>
  <!-- CARD PART -->
  <v-row no-gutters>
    <v-col clos="3" v-for="(item,index) in apidata" :key="index">   
<v-row class="pa-12">
    <v-card max-width="300" >
    <center><v-img :src = "item.img"
      height="200"
      max-width="300"></v-img>
    </center>
    <v-card-title>
      {{item.product_name}}
    </v-card-title>
    <v-card-subtitle>
       ฿ {{item.price}}
    </v-card-subtitle>

    <v-card-subtitle>
      Color : {{item.detail.color}} 
    </v-card-subtitle>
    <v-card-text>
      Size :
      <v-chip-group
        v-model="selection"
        active-class="black accent-4 white--text"
        column
      >
        <v-chip>{{item.detail.size[0]}}</v-chip>
        <v-chip>{{item.detail.size[1]}}</v-chip>
        <v-chip>{{item.detail.size[2]}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
    <v-row class="pa-6">  
      <v-btn
      outlined
      small
      rounded
      color="black"
      class ="mx-2"
      
      >
      <v-icon small>mdi-cards-heart-outline</v-icon> wishlist
    </v-btn>
      <v-btn
      outlined
      small
      rounded
      class="black accent-4 white--text"
      @click="addCart()"
      
      >
      <v-icon
      small>mdi-cart-plus</v-icon> Add to Cart
      </v-btn>
     
      </v-row>
      <!-- <v-btn
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
      </v-btn> -->

      <v-spacer></v-spacer>

    </v-card-actions>
    
  </v-card></v-row>
    </v-col>
  </v-row>
  <br>
  <br>
  <br>
  
</v-container>
  <!-- FOOTER PART -->
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="dark white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{icon}}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
        Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

<!-- DIALOGS PART -->

<!-- EDIT -->
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

<!-- DELETE -->
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
  
  <!-- CART -->
<v-dialog
    v-model="dialogcart"
    max-width="500px" 
  >
  <v-card>
    <v-card-title primary-title>
      Shopping Cart
    </v-card-title>
    <v-card-text>
      No item in your cart.
    </v-card-text>
    <v-card-text>
    {{cartdata.product_name}}
    </v-card-text>     
    <v-card-text>
    {{cartdata.price}}
    </v-card-text>
       
    <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="error" @click="closeData()">cancle</v-btn>
        <v-btn outlined color="success" @click="delData()">delete</v-btn>
    </v-card-actions> -->
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
      dialogcart: false,
      cartData: false,
      postdata:{
        product_name:'',
        price:'',
        
        amount:'',
        detail:[{color:'',size:''}],
      },
      postdefault:{
        product_name:'',
        price:'',
        amount:'',
        detail:[{color:'',size:''}],
      },
      cartdata:{
        product_name:'',
        price:'',
      },
      items: [
          {
            src: 'https://img.freepik.com/free-photo/concrete-structure-city-with-copy-space_23-2148814167.jpg?w=1380&t=st=1668054586~exp=1668055186~hmac=d204d98b6ad50dd09809cb423d31dd6be0c0a10edb47f31a78cec112009505ca',
          },
          {
            src: 'https://img.freepik.com/free-photo/sporty-man-tying-his-shoelaces_53876-139586.jpg?w=1380&t=st=1668055246~exp=1668055846~hmac=7caa5cd585eb31b6f06ef845a9b0861f6eb53a7ccb6c0f75af84db471e018626',
          },
          {
            src: 'https://img.freepik.com/free-photo/low-view-modern-skyscrapers-office-buildings_23-2148836791.jpg?w=1380&t=st=1668055476~exp=1668056076~hmac=6e995f2fd3eacf989a338afc3b759a7ae34992a5294775d679071680969e9642',
          },
          {
            src: 'https://img.freepik.com/free-photo/leather-slip-sneakers-gray-white-summer-fashion-unisex-footwear_53876-102092.jpg?w=1380&t=st=1668055571~exp=1668056171~hmac=97b3f64d9a2ca653a14fb994d05fd412fedeb7eb73ffac91ade50dd31a3731a3',
          },
        ],icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
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
    this.axios.get('http://localhost:3000/products').then((response) => {
    console.log(response.data)
    this.apidata = response.data.data
    })
  },
  newItemMode(){
    this.dialogedit = true
    this.id = ''
  },
  shopCart(){
    this.dialogcart = true
  },
  addCart(){
    this.cartdata = true
    this.id=item._id
    this.dialogcart = true
    
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
  async addData(){
    try {
    const{data} = await this.axios.post('http://localhost:3000/users/', this.cartdata) 
    alert(data.message)
    this.getData()
    this.addCart = {...this.cartdata}
    this.dialogcart = false
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
h1 {
  color:rgb(0, 0, 0);
  font-family: sans-serif;
  font-size: 60px;
  text-align: center;
  padding-bottom: 5x;
  padding-top: 50px;
}
h2 {
  color:#818589;
  font-family: serif;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  font-weight:lighter;
  padding-top: 50px;
  padding-bottom: 50px;
}
h3{
  color:rgb(32, 31, 31);
  font-family: sans-serif;
  text-align: left;
  padding-left: 40px; 
  font-size: 25px;
}
</style>