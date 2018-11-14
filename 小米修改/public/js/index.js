new Vue({
  el:"#main>div:nth-child(2)>h3:first-child",
  data:{
    res:[
      {price:0},
      {price:0},
      {price:0}
    ]
  },
  mounted(){
    axios.get("http://localhost:3000/index/getIndexProducts").then(res=>this.res=res.data)
  }
})
