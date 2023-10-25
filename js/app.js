console.log('LINKED');

const { createApp } = Vue;
createApp({

  data: () => {

    return {
      newTask: "",
      error: 'Inserisci una parola composta da 5 lettere',
      button: 'Aggiungi',
      title: 'ToDo List',
      todos: [
        {
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ],
    }
  },
  methods: {
    addTask() {
      this.todos.unshift({
        text: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    },
    addDoneClass(index) {
      this.todos[index].done = true;
    },
  },

  mounted() {
    console.log('MOUNTED')
  }
}).mount('#app')