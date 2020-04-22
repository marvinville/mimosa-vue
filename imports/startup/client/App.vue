<template>
  <div>
    <h2>{{ timeStamp }}</h2>
    <button v-if="clicked === false" @click="run()">Run</button>
    {{ apiResponse }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
      apiResponse: '',
      timeStamp: new Date()
    }
  },
  // Vue Methods
  methods: {
    run() {
      this.clicked = true

      this.getData()
    },
    getData() {

      const interval = Meteor.settings.public.api.interval

      this.polling = setInterval(() => {
        console.log(`Fetching data...`)

        const username = Meteor.settings.public.api.username
        const password = Meteor.settings.public.api.password

        this.timeStamp = new Date()

        fetch(
          `https://192.168.1.20/core/api/service/status?username=${username}&password=${password}`
        )
          .then(response => {
            this.timeStamp = new Date()
            this.apiResponse = response
          })
          .catch(error => console.log(error))
      }, interval)
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>
