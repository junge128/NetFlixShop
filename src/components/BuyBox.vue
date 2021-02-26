<template>
    <div>
        <div class="van-overlay">
        </div>
        <div class="van-popup">
            <div class="van-header">
                <div class="van-image">
                    <img src="https://www.vip6.pro:8090/wx/storage/fetch/ie6b2l6jwtqi3js3bmfd.jpg" alt="">
                </div>
                <div class="van-goods-info">
                    <div class="van-goods-price">
                        <span class="van-price-symbol">￥</span>
                        <span class="van-price-num">15.00</span>
                    </div>
                    <div class="van-header-item">已选 1 个月 1个车位</div>
                </div>
            </div>
            <div class="van-body">
                <div class="van-group-container">
                    <div class="van-hairline-bottom">
                        <div class="van-row-title">时长</div>
                        <div class="van-row-item van-row-item-active">
                            1个月
                        </div>
                        <div class="van-row-item">
                            3个月
                        </div>
                        <div class="van-row-item">
                            6个月
                        </div>
                        <div class="van-row-item">
                            12个月
                        </div>
                    </div>
                    <div class="van-hairline-bottom">
                        <div class="van-row-title">车位个数</div>
                        <div class="van-row-item van-row-item-active">
                            1个车位
                        </div>
                    </div>
                </div>
            </div>
            <div class="van-actions">
                <van-button type="primary">主要按钮</van-button>
                <van-button type="info">信息按钮</van-button>
                <van-button type="default">默认按钮</van-button>
                <van-button type="warning">警告按钮</van-button>
                <van-button type="danger">危险按钮</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css'
Vue.use(Button);

export default {
  name: 'BuyBox',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import '../css/BuyBox.css';
</style>