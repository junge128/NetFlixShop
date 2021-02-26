<template>
    <div>
        <div class="container">
            <h1 class="header_title">
                用户中心
            </h1>
            <div class="box-item-container">
                <div class="box-item">
                    <div class="Left-time">
                        <div class="verticle-center">
                            <h3>账号剩余时长</h3>
                            <van-circle class="time-circle" v-model="currentRate" :stroke-width="80" :rate="50" :speed="50" :text="text" />
                        </div>
                    </div>
                    <div class="Right-Text">
                        <div class="row">
                            <van-tag class="item-tag" size="large" type="primary">下单时间 :</van-tag>
                            <van-tag class="item-tag-Right" type="primary">TTTT</van-tag>
                        </div>
                        <div class="row">
                            <van-tag class="item-tag" size="large" type="primary">套餐 :</van-tag>
                            <van-tag class="item-tag-Right" type="primary">TTTT</van-tag>
                        </div>
                        <div class="row">
                            <van-tag class="item-tag" size="large" type="primary">账号 :</van-tag>
                            <van-tag class="item-tag-Right" type="primary">TTTT</van-tag>
                        </div>
                        <div class="row">
                            <van-tag class="item-tag" size="large" type="primary">密码 :</van-tag>
                            <van-tag class="item-tag-Right" type="primary">TTTT</van-tag>
                        </div>
                    </div>
                </div>
                <van-divider :style="{borderColor: 'black'}"/>
                <div class="ps_text">
                    <van-icon size="25" name="volume-o" />
                    <van-tag class="ps_detail" type="primary" size="large" color="#ed1941">本套餐车位为第 5 位。请新添加属于您的子账户</van-tag>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import 'vant/lib/index.css'
import Vue from 'vue';
import { Divider } from 'vant';
import { Circle } from 'vant';
import { Tag } from 'vant';
import { Icon } from 'vant';
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Circle);
Vue.use(Tag);

export default {
data() {
    return {
        timer: '',
        currentRate: 0.0001,
        rate: 1
    };
  },
  computed: {
    text() {
      return this.currentRate + '%';
    }
  }
}
</script>

<style scoped src="../css/user.css"></style>