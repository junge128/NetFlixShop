<template>
    <van-sku
    v-model="show"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    :message-config="messageConfig"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
    />
</template>

<script>
import Vue from 'vue';
import { Sku } from 'vant';
Vue.use(Sku);
import 'vant/lib/index.css'

export default {
    name: 'BuyBoxVant',
    data() {
    return {
        show: false,
        sku: {
        // 数据结构见下方文档
        },
        goods: {
        // 数据结构见下方文档
        },
        messageConfig: {
        // 数据结构见下方文档
        },
    };
    },
};
</script>