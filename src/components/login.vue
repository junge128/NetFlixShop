<template>
    <div class="login-container">
        <div class="logo-box">
            <img class="logo" src="../assets/logo.png" alt="">
            <p> 流媒体账号合租一站式服务 </p>
            <p> 「未注册的手机将自动注册登录，本小店账号仅用于保存您的购买记录」 </p>
        </div>
        <van-field class="account" v-model="account" type="digit" label="手机号" :error-message="error_id" placeholder="请输入手机号" required/>
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field class="account" v-model="password" label="密码" :error-message="error_pw" placeholder="请输入密码" required/>
        <van-button @click="login" class="btn" block type="primary">登录</van-button>

    </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import 'vant/lib/index.css'
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(Field);

export default {
  data() {
    return {
      account:'',
      password: '',
      error_id: '',
      error_pw: ''
    };
  },
  methods:{
    valid:function(){
        if(!/^1[3456789]\d{9}$/.test(this.account)){
            this.error_id = '请填写正确的手机号';
            return
        }
        if(this.password == ''){
            this.error_pw = '请填写密码';
            return
        }
        this.error_id = '';
        this.error_pw = '';
    },
    login: function () {
        this.valid();
        axios.get('http://127.0.0.1:8081/login',{       // 还可以直接把参数拼接在url后边
                params:{
                    id: this.account,
                    pw: this.password
                }
            }).then(function(res){
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
            }
  }
}
</script>

<style scoped src="../css/login.css"></style>