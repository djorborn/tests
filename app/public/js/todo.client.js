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
          var item = {
            id: res.data._id,
            txt: this.newItem
          }
          items.push(item)
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
          console.log(this.items[0]);
        }
      )
    }
  },
  mounted: function () {
    this.getData()
  }
})
