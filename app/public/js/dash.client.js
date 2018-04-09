var vm = new Vue({
  el:'#dash',
  data: {
    lists: 'hi',
    hi: 'hi'
  },
  methods: {
    getLists: function () {
      axios.post('/get-lists')
      .then(function (res) {
        console.log(res.data[0]);
        this.lists = res.data
      })
    }
  },
  mounted: function () {
    this.getLists()
  }
})
