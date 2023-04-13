<template>
  <div class="login">
    <div class="loginForm">
      <a-form-model
        :model="formInline"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="formModel"
      >
        <a-form-model-item label="用户名" style="margin-top: 10px">
          <a-input v-model="formInline.user" placeholder="Username"> </a-input>
        </a-form-model-item>
        <a-form-model-item label="密码">
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
          </a-input>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button
            type="primary"
            :disabled="formInline.user === '' || formInline.password === ''"
            @click="handleSubmit"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: "uerLogin",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formInline: {
        user: "1",
        password: "1",
      },
    };
  },
  methods: {
    handleSubmit() {
      const { password, user } = this.formInline;
      if (password === "1" && user === "1") {
        this.$router.push("/layout");
      } else {
        this.$message.warning("用户名或密码错误");
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(skyblue, pink, white);
}
.loginForm {
  width: 450px;
  height: 250px;
  border: 1px solid black;
}
/deep/.ant-form-item label {
  font-size: 16px;
}
</style>
