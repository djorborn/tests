var vm = new Vue({
  el:'#dash',
  data: {
    lists: []
  },
  methods: {
    getLists: function () {
      axios.post('/get-lists')
      .then(function (res) {
        this.lists = res.data
      })
    }
  },
  mounted: function () {
    this.getLists()
  }
})
