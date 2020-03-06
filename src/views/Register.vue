<template>
 <div>
      <div class="card w-75">
        <div class="card-body">
            <div class="card-title" ><h1>Join our garden !!!!</h1></div>
            <div class="card-title">
                <label>Name</label>
                <input v-model="user.name"
                type="text" class="form-control">
                <br>
                <label>Email</label>
                <input v-model="user.email"
                type="text" class="form-control">
                <br>
                <label>User name</label>
                <input v-model="user.username"
                type="text" class="form-control">
                <br>
                <label>Bias</label>
                <input v-model="user.bias"
                type="text" class="form-control">
                <br><br>
                <button class="btn btn-outline-info" >Cancel</button>&nbsp;
                <button class="btn btn-info" @click="register(user)">Join</button>
            </div>
            </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      user: {
        id: '',
        name: '',
        email: '',
        username: '',
        bias: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addUser: 'addUser'
    }),
    async register (user) {
      console.log(user)
      const result = await this.addUser(user)
      console.log('result =' + result)
      if (result === 'saved') {
        console.log('At vue : User Added')
        this.$router.push({ name: 'Home' })
      }
    }
  }

}
</script>

<style>

</style>
