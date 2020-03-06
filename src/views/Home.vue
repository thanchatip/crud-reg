<template>
  <div class="home">
    <div class="card mb-2 w-50 " v-for="user in users" v-bind:key="user.id">
      <div class="card-header">
        User No : {{user.id}}
      </div>
      <div class="card-body">
        <h4 class="card-title">Username {{user.username}}</h4>
        <h5 class="card-subtitle">Name {{user.name}}</h5>
        <p class="card-text">Bias :{{user.bias}} <br>  Email :{{user.email}}</p>
      </div>
      <div class="row">
        <div class="col-auto mr-auto">
          <button class="btn btn-primary" @click="edit(user.id)"> Edit </button>&nbsp;
          <button class="btn btn-danger" @click="del(user.id)">Delete</button><br>
        </div>
        <br>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  async mounted () {
    console.log('mounting....')
    this.users = await this.loadUsers()
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    ...mapActions({
      loadUsers: 'loadUsers',
      removeUser: 'removeUser'
    }),
    async del (userID) {
      const deleteResult = await this.removeUser(userID)
      if (deleteResult === 'deleted') {
        console.log('deleted in vue')
        this.users = await this.loadUsers()
      }
    }
  }

}

</script>
