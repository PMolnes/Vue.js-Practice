<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="usernameInput" />
    <button @click="addUser()">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Petter', 'Kari', 'Olga', 'Sune'],
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
    addUser() {
      this.users.unshift(this.$refs.usernameInput.value);
      this.$refs.usernameInput.value = '';
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

li {
  border: 1px solid lightgray;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
