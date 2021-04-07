
<template>
<div>

  <div class="p-3">
<button @click="IncreaseFont" class="btn btn-danger ml-2">Increase</button> 
<button @click="DecreaseFont" class="btn btn-danger ml-2">Decrease</button>
  </div>

    <div :style="{color:'red',fontSize:fontSize + 'px'}" class="form-control mb-2">{{message}}</div>
  
 <p class="form-control">{{reverseMessage}}</p>


    </div>

  
</template>


<!-- #checking whether completed is true means line line-throughwill work -->

<script>


export default {
  name:"TodoItems",
   props:["todos"],
 data()
 {
   return{
    message: "Hello",
    msg:'vue js',
    fontSize: 12,
    
   }
   
 },

//   #fetching from todo pagefrom v-for
    methods:{
        markComplete()
        {
    console.log("working");
        },
        IncreaseFont:function() {
      this.fontSize++;
    },

    DecreaseFont:function() {
      this.fontSize--;
    },
  },
   
    
         computed:
          {
             reverseMessage()
             {
                 return this.msg.split('').reverse('').join('');
             }
         }
  };
  
</script>
<style scoped>

.is-completed{
    text-decoration: line-through;
    }

</style>