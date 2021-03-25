var app = new Vue({
  el: '#app',
  data: {
    inputTxt: '',
    event: [
      {title: 'dare da mangiare ai pesci'}
      ,
      {title: 'lavare piatti'}
      ,
      {title: 'mettere patate a bollire'}
      ,
      {title: 'comprare un etto di prosciutto'}
      ,
      {title: 'scolare le patate'}
      ,
    ],
  },
  methods: {
    add : function () {
      if (this.inputTxt != ''){
        let obj = {
          title : this.inputTxt

        }
        this.event.push(obj);
        console.log(inputTxt);
      }
    }

  }
})
