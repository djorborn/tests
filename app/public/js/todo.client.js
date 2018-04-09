var vm = new Vue({
  el: '#todo',
  data: {
    listTitle: '',
    newItem: '',
    items: [],
    id: location.search.split('=')[1],
  },
  methods: {
    addItem: function () {
      axios.post('/todo/add-item', {
        item: this.newItem,
        id: this.id
      }).then(
        (res) => {
          var count = this.items.length
          var item = {
            id: count++,
            item: this.newItem
          }
          this.items.push(item)
          this.newItem = ''
        }
      )
    },
    updateTitle: function () {
      axios.post('/todo/update-title', {
        title: this.listTitle,
        id: this.id
      }).then(
        (res) => {
          console.log('Title updated');
        }
      )
    },
    getData: function () {
      axios.post('/todo?id=' + this.id)
      .then(
        (res) => {
          this.listTitle = res.data.title
          this.items = res.data.items
          console.log(res);
        }
      )
    }
  },
  mounted: function () {
    this.getData()
  }
})
