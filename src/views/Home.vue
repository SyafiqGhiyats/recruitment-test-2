<template>
  <div class="min-h-screen container">
    <button class="btn glass btn-logout center" @click="logout">logout</button>
    <div class="glass">
      <h2>User List</h2>
      <div
        class="list"
        v-for="(user, i) in users"
        :key="i"
        @click="showModal(user)"
      >
        <div class="list-avatar"><img :src="user.avatar" alt="" /></div>
        <div class="list-item">
          <div class="list-item-title">
            {{ user.first_name + " " + user.last_name }}
          </div>
          <div class="list-item-subtitle">{{ user.email }}</div>
        </div>
      </div>
    </div>
    <div class="glass mt-1">
      <h2>Create new User</h2>
      <form @submit.prevent="onSubmit">
        <div class="d-flex">
          <div class="input-box">
            <input
              type="text"
              class="input glass"
              id="email"
              style="padding: 0.9rem 1rem"
              placeholder="enter your name..."
              required
              v-model="form.name"
            />
          </div>
          <div class="input-box" style="margin-left: 5px">
            <input
              type="text"
              class="input glass"
              id="email"
              style="padding: 0.9rem 1rem"
              placeholder="enter your job..."
              required
              v-model="form.job"
            />
          </div>
        </div>

        <button
          class="glass btn center"
          style="margin-top: 0.5rem; padding: 0.7rem 0"
        >
          submit
        </button>
      </form>
      <div
        class="mt-1 d-flex"
        style="flex-direction: column"
        v-if="newUsers.length"
      >
        <div
          class="list-item"
          v-for="(newUser, index) in newUsers"
          :key="index"
        >
          <div style="width: 80%">
            <div class="list-item-title">{{ newUser.name }}</div>
            <div class="list-item-subtitle">as {{ newUser.job }}</div>
          </div>
          <div class="list-action">
            <span>
              {{ new Date(newUser.createdAt).toLocaleDateString() }}
            </span>
            <div class="d-flex" style="justify-content: end">
              <svg
                class="glass cursor-pointer edit"
                @click="showUpdateModal(newUser, index)"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="1.5rem"
                style="margin-right: 0.5rem"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <svg
                @click="deleteUser(index)"
                class="glass cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modal">
      <div class="avatar">
        <img :src="selectedUser.avatar" alt="" />
      </div>
      <h3>{{ selectedUser.first_name + " " + selectedUser.last_name }}</h3>
      <h5>{{ selectedUser.email }}</h5>
    </Modal>
    <Modal v-model="updateModal">
      <h3>Update data</h3>
      <form @submit.prevent="update(updateForm.id)">
        <label for="name">Name</label>
        <div class="input-box">
          <input
            style="padding: 0.9rem 1rem"
            required
            type="text"
            class="input glass"
            id="name"
            v-model="updateForm.name"
            placeholder="enter your name..."
          />
        </div>
        <label for="job">Job</label>
        <div class="input-box">
          <input
            style="padding: 0.9rem 1rem"
            required
            type="text"
            class="input glass"
            id="job"
            v-model="updateForm.job"
            placeholder="enter your job..."
          />
        </div>
        <button
          class="glass btn center"
          style="margin-top: 0.5rem; padding: 0.7rem 0"
        >
          submit
        </button>
      </form>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  name: "Home",
  components: { Modal },
  data: () => ({
    users: [],
    modal: false,
    updateModal: false,
    selectedUser: {},
    form: {
      name: "",
      job: "",
    },
    updateForm: {
      name: "",
      job: "",
    },
    newUsers: [],
  }),
  methods: {
    logout() {
      delete localStorage.token;
      this.$router.push("/login");
    },
    async getUsers() {
      try {
        const { data } = await axios.get("https://reqres.in/api/users");
        this.users = data.data;
      } catch ({ response }) {
        this.bus.$emit("snackbar", {
          show: true,
          message: response.data.error,
          danger: true,
        });
      }
    },
    async onSubmit() {
      const { data } = await axios.post(
        "https://reqres.in/api/users",
        this.form
      );
      this.newUsers.push(data);
      this.form = {
        name: "",
        job: "",
      };
    },
    showModal(user) {
      this.selectedUser = user;
      this.modal = true;
    },
    showUpdateModal(user, index) {
      this.updateForm = { ...user, index };
      this.updateModal = true;
    },
    async deleteUser(index) {
      const id = this.newUsers[index].id;
      await axios.delete("https://reqres.in/api/users/" + id);
      this.newUsers.splice(index, 1);
    },
    async update(id) {
      const { data } = await axios.put(
        "https://reqres.in/api/users/" + id,
        this.updateForm
      );
      this.newUsers[this.updateForm.index] = data;
      this.updateForm = { name: "", job: "" };
      this.updateModal = false;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
<style lang="scss" >
.container {
  position: relative;
  z-index: 10;
  padding: 0 0.5rem;
  padding-bottom: 1rem;
  & > .glass {
    padding: 1rem;
    // margin: 1rem 0;
  }
  .list {
    display: flex;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    &-action {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &-avatar {
      border-radius: 50%;
      overflow: hidden;
      width: 3.5rem;
      height: 3.5rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      margin-right: 0.5rem;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }
    &-item {
      flex-grow: 1;
      position: relative;
    }
    &-item-title {
      font-weight: 800;
    }
    &-item-subtitle {
      font-size: 0.95rem;
      color: darken(#fff, 10);
    }
  }
}
.avatar {
  & img {
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.5);
  }
}
.inline-form {
  display: flex;
}
.btn-logout {
  margin: 0.5rem 0;
}
</style>
