var app = new Vue({
  el: '#app',
  data: {
    index: 0,
    inputTxt: '',
    event: [
      {title: 'dare da mangiare ai pesci',
      status: 'todo'}
      ,
      {title: 'lavare piatti',
      status: 'todo'}
      ,
      {title: 'mettere patate a bollire',
      status: 'todo'}
      ,
      {title: 'comprare un etto di prosciutto',
      status: 'todo'}
      ,
    ],
  },
  computed: {
    eventcomputed: function () {
      let eventDone = this.event.filter((todo) => todo.status == 'done');
      let eventTodo = this.event.filter((todo) => todo.status == 'todo');

      return [...eventTodo, ...eventDone];
     }
  },
  methods: {
    aggiungi: function() {
      if (this.inputTxt != ''){
        let obj = {
          title : this.inputTxt,
          status : 'todo'
        }
        this.event.push(obj);
        this.inputTxt = '';
      }

    },
    check: function (todo) {
    let index = this.event.indexOf(todo);
     this.event[todo].status = 'done';
     console.log( this.event[todo].status);
   },
   edit: function (index) {
    console.log( this.event[index].status);
  },
  remove: function (todo) {
    let index = this.event.indexOf(todo);
    this.event[todo].title = '';


  }
 }
})
