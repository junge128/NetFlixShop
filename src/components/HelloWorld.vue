<template>
  <div class="hello">
    <!-- <div class="nav-top">
      <div class="nav-line">
        <div class="nav-line-item">
          <p>青柠 - Netflix</p>
        </div>
        <div class="nav-line-item">
          <a href="">小铺首页</a>
          <a href="">购买记录</a>
          <a href="">帮助中心</a>
        </div>
      </div>
    </div> -->
    
    <div class="hot-container">
      <div class="max-width">
        <div class="header">
            <div class="title-container">
                <h2> 「 流媒体账号合租一站式服务 」 </h2>
                <h3> 推荐朋友购买，实时返现10%起 </h3>
            </div>
        </div>
        <div class="flex-hot">
            <div class="item-imgs">
              <div class="imgs-box">
                <img src="https://www.vip6.pro:8090/wx/storage/fetch/c9u6g7f5r7ujtmg9vovw.png" alt="">
              </div>
              <div class="tags-box">
                <span>已售51</span>
              </div>
            </div>
            <div class="item-title">
                <p class="item-title-name">Netflix</p>
                <p>
                  <span class="del-text">￥</span>15  
                  <span class="del-text" style="text-decoration: line-through; margin-right: 5px;">20/月</span>
                </p>
            </div>
            <div class="item-info">
              <p>可长期续费不换号</p>
              <p>独立观影记录，4K高清</p>
              <p>即买即用，现号秒发</p>
              <p>浏览器，电视盒子，手机全平台支持</p>
              <p>不限观看区域</p>
            </div>
            <div class="item-bottom">
              <div class="svg-box">
                <i class="fa fa-weixin" aria-hidden="true"></i>
                <i class="fa fa-qq" aria-hidden="true"></i>
              </div>
              <van-button @click="showBase = true" style="padding:0 60px 0 60px" color="#ff5252" round type="info">快捷购买</van-button>
              <!-- <button class="van-button">
                  <span class="van-button__text">快捷购买</span>
              </button> -->
            </div>
        </div>
      </div>
    </div>

    <!-- <div class="footer">
      <div class="footer-container">
        <div class="icon-box">
          <img src="https://www.vip6.pro/img/freetry.5d039441.png" alt="">
          <p>免费试用</p>
        </div>
        <div class="icon-box">
          <img src="https://www.vip6.pro/img/fast.61b07487.png" alt="">
          <p>现号秒发</p>
        </div>
        <div class="icon-box">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAANgElEQVR4Xu1dC9B21RR+HrdqELlHuUSRSaRUpOhidCNUROjm+s+IlDIuXcSQ+iVdh6aoUZJCqcyvYpREKmWISu4qpIxLYXjM89sv7//1ft97ztlnr/N+73vWzJn3/+fbe6+91n7OPnuvvdbaRE8zrQHOtPS98OgBMOMg6AHQA2DGNTDj4vczQA+AGdfAjIvfzwA9AGZcAzMufj8D9ACYcQ3MuPj9DNADYMY1MOPi9zNAD4AZ18CMiz/1M4Ck1QE8FsCDR4z13QBuIvnHWcXBVABAkgf4mel5FoCnABgMfJWxNQBuAnBzeq4FcC3JX1apvJjLLGoASFoJwFsBvBPAmgUGwsAwGL4PYBmAr5P8ZwE+nTW5qAEwrDVJWwPYE8BrC2rzHwDONxAAXEby+oK8QpqeGgAMtCVpbQC7A3g1gHUKa/HbAL7iZ7GCYeoAMAQEfx72SZ+HJxcGgpu/OIHhLJK3BfBrhcXUAmAICI9MINgPgEFRmn4F4AQAx5P8c2lmue1PPQCGgPBsAAZByTXC8Hj8OAHhBJL/yh2oUvVnBgBDQHhpAsILSyl1TrvXADic5JeC+NViM3MAGALCuwB8tJa28gp/HMBhJO/Ka6bd2jMLAKtR0vYAPgbgqe2qdd7WbE8wCCZmNphpACQQPDGB4OVBIDCbI0keGMhvXlYzD4ChT8LhAN4XOCgXAdif5A2BPO/FqgfAkEok2Xi0NJ0jRIyLzxoMgi9EMBvFY2IAIGljAEsAXEXy+K4UIml9AKelg6WobhxK8rAoZsN8OgeApFXTgY4PdZ6QOrc1yUu7UEhaF6wF4EwABmUUHUXSO5NQ6hQAkrwn91v/4jlS3wFgA5K2qnVGkr4JYPPADpxE0i9CGHUCAEk+pLGg71hA0stJRip/ZFckfQ3ANmEjAiwleUAUv3AASHpTssQ9rYKQJ5N8Y4VyRYtI+jyAXYsyWbHxfUkeG8EvDACStgCwL4CdawrmVbKNNZ2SpI8AOCiwE5uS/E5pfsUBIMmncW9LyntAQ4F2Inlew7qtVZP0OQCvaq3B8Q2tRfJn44s1L1EUAJKsLL81GzTv4vKafwHwPJI/yGwnu7qkWwA8Kbuhag1cAsDg/2u14vVLFQGApGekgbdnTlt0FYCtSBoMnZEkm46LvpVzhDuV5N6lBG4VAJLuB8B7Wb/1DynQ6dNI7lGg3VpNSvI6JtJ6txvJs2p1smLh1gAgaac08M+tyLtpsc6sZsMdlvQhAO9pKkTNenY+3YLkn2rWG1s8GwCSfJTqk61i09QIKfYk+Zmx0hUuIMkHOtsWZjNovsgJYhYAJHngPeU/IkgJAzb2zd+GpC11nZEku5l5q+ZPXwS1biJvBIBkwvXgbxYh9Tw8vCPYYQLMxfb0eXuQHs4huUubvGoBoKPpfiF5zyPptUdnJMlhaJ4FHhbUiQ1J2s+wFaoMgA6n+3GCHkNyoTOFcfWz/y7JR7kHZzdUrYFWTw3HAmBCpvtxqtmPpKfiTkjSo9IsYBtBafo1gPVJ3tkGo3kBMIHT/Th5dyZ57rhCpf4uaX8AR5Vqf067S0ie2AavkQCY4Ol+IZkdjrUjyavbUEzdNlKkstcCDlMvTReRtEdzNq0AgEUy3S8k9HftXNKV770kn3Yekz0q1RpYk6Q/B1m0HACLcLpfSOizSb4ySysNKyc9OiQsglr5DFCSHTPWBeDfweP/j0qpEiFYGzxCvWqGOyzJUcLOVVCaWvkMLLQIdMYN73EdWu1fu3ENgFJauDbaD/OqmQOAyJCzlUg6aUVjGrsNnNuypEcPgWIAjtc07kHZituTtL0+jCTZs/nnQQy3I/nVHF61ATACEA9MDhs5/ShV9zcAtiTpBFBhJOkyAM8PYJi9DmgDAJsAuDJA2KYsnMZlM5Jq2kDdeoG7gWyrYBsAcBqWk+sqKbj8mSTDPlPJMnh7gIzZh0NtAODoMf79AXqoxMJJGqLs9d5a/zYgxvAakhtWkn6eQm0AwLHunZ7I1VDAHiQd91ecJH3LjqyFGd1JMusUsg0A2F3JTqAlaUsAPmjxY4/cwb8f34Cp1wNXNKhXq4qkzwIo/tkhmTWGWZWtEUnOhPWgWtqpX3hdkiMtbJIeA2CN9Dwu/dqGMQCK08gOk7dom5D8Xf1uVK8h6YMA3lu9RrOSnQJAkl3Bft+s67VqrdbEvi/pPnOAMQDIGiR3q9WDmoUlhSyOuwZAxBbwdpJ+yxcVSdoKgAM7ilLXAHhRSqJcUsjrSUYcsbYqgyR/ghxFVJS6BsCOKXlySSGXkZybP6Akv9ballTc+NQ1ACIiZE4n+frWRiWoIUmrASh+EUXXAPA2x9udkpRt7izZufnaluQ0Mz8tzbtrADg//6mFhezsbD9HLkm20H0vp40qdbsGwJsBnFSloxllziDZZpRxRleqV5XktDJOL1OS7iG5Sg6DLENQ0KnXpSQjPGxy9HivupKcUsapZUrSjSSz0tzmAiDC++UGkk8vqcV06dQRAP6QDFv+9WOny1tI+t+1KMgQdDFJb8UbUy4AnFrVKVZL0l0kvaIuSpI2cpLKEUz+NgcUtnzajOw9vhNFLP8l+ffhupJ8N0Hp3EankLTFsTHlAsBBkREROauQvKexlBUrJrf4L1csPrfYACjObTgAxyEN26pazZnHD61aeFS5XAA40WNThdXpd/FkSYPOSHoLgFaibuoI2LDs3iSzdmG5AFgPQETippAj3CEQfADA+xsOSmQ150jIOm/IBUCUQ+jBJEuvNVYYOEl2c8v6vgYgYZ1ch9csAFhASfZ9c3RsSbqOpK+EDSVJFwLYLpRpPWYrz1181qsOtAEAewT7WLg0rUfyh6WZDLcv6aEAvhEU8NlENGcqs++h3d/9eNtq28CtVRtrAwBRTqEHkYy85Gm5DlPonP38o/MgVR3DUeWcTWwACv/emC7H9q8B8r8dVRsA8F07EXH5V5IsnYJupNIl2Sexs/sLcpCwQF3fjLK0DQDY/y7qmvWNOoz/93UyZxQajMhmffG1D9guMNNsAKRp0lesRyzSDiHpLVonFGTdKyWbPwv/fetJG62WU1sA+CSAiLz+V5O0ybYzkuR1SPjVLpkCO3bDA3/53HbaAkDUOsD9z7Z+ZSrTC0MHl7wut52A+r/weQTJT8zHqxUApM9AVETsFSS7TFBpAKwMwPcXZJ3EFQaAU+n6rV/QUtsmAPwJ8KcggnYn2emCLKWNNwhKR0XV1acjtfzWV8ql3CYA/Fb4btwsB4WK0k6Ek4gkx/6dH5gldJx6PNX7ra+8K2sNAOkz4PTpTqMeQbuQPCeC0UI8gjx/xonppNlHN7mUum0AOILHqdpsGyhNrSRJaqOTkpyq1hbRaPLWbvDWN7pLoFUApFng3QA+HKSJV5D8YhCvBdlIOhJA2H1/6dPjt96GncZUAgBOL+dZoMq9gI07nio60ndbkj/JbaiN+pK8MLXFsCR5a3csSRt1sql1AKRZwNfEzbv3zO71ig1cSHKHltts1Jyk+ydX8Bc0amB8pdPtgtdJuvjxfft/CUn3TbOAb9SIoCLXqTTpeNoeOh7AuRXbIm/t/Na3noupyAyQZgEHRjiHncEQQXuR/HQEo3E8JDlF3DIAWUEbic9x6a0vEmZWDAAJBFFew2bnQEyvB0a5do8bs9b/LskJKHwFfVPy1u44kmc3baBKvaIASCD4FIA3VOlMC2V82GEQFLtps04fJXlX4N1BHfJ2zhdH+yaU2gEpdRi5bAQAVk2fgihnjnNJ1r2guq7eKpeXVOdSKVsV/db78xFCxQGQZoH1k9eQcwtH0AUknbxiIkiSffcWAqW3dv7W+633lXhhFAKABAJnGrfRwsmmI+gSkl6Idk4pWZXzBm46ojPe2vmtt+0knMIAkECwenJQLJ1WbqDIy0luHq7VEQwl2Tzu/IROaWcqtrWrI28oABIIfGp4d51OZpa9iuTGmW20Ul2S10EGgad7v/WdWzDDATDQpCQbS6Km6EmaCXYtvbWrg9bOAJBmA8ffRTl53pzu24ucfeqMRSdlOwVAAkF0NK7TxHay4OpkhMcw7RwACQQvS44kRTOBDOliH5KnTOKARPdpIgAwtEOwN9FeQUqwA8cBJP8dxG8i2UwMAIYWh848ZiA8PEBjvuLtQJIObJlJmjgApNnAuYF9C+feAaPiKBkniDoiN9Q6oK+ts5hIAAzNBjbiLAFQNLV74uekjgaBzbYzQxMNgCEgbJuA8JKAkXHUj4HwowBenbNYFAAYAsJzADgBox9fG1OK7kwg8KdhqmlRAWAICM5NNABCK9eozzPK1wFwhM3JJH01ztTRogTA8ChIsu+d8/gMnhKD5NQrdjc7kaRTskwNLXoAzAMGfyq8k7AfQptkM7LjHw2Ezg9y2hBsqgAwVyGSfOxsEPixldGzxdoNPXadoMoLw+V5dgY5d0je0cZAdNXGVANgIaWmT4dv+nYgi4HiXz/2Yr5t6LmVpP8/lTSzAJjK0WwgVA+ABkqbpio9AKZpNBvI0gOggdKmqUoPgGkazQay9ABooLRpqtIDYJpGs4EsPQAaKG2aqvQAmKbRbCBLD4AGSpumKj0Apmk0G8jSA6CB0qapSg+AaRrNBrL8BwcV3sRK35lnAAAAAElFTkSuQmCC" alt="">
          <p>无限续费</p>
        </div>
        <div class="icon-box">
          <img src="https://www.vip6.pro/img/24hours.6be5c073.png" alt="">
          <p>7*24小时售后</p>
        </div>
      </div>
    </div> -->

    <van-sku
      v-model="showBase"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :initial-sku="initialSku"
      :hide-quota-text="skuData.hide_quota_text"
      :close-on-click-overlay="closeOnClickOverlay" 
      :custom-sku-validator="customSkuValidator" 
      :show-add-cart-btn="false"
      :buy-text="skuData.buy_text"

      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>

</template>

<script>
import Vue from 'vue';
import { Sku } from 'vant';
import { Button } from 'vant';
import 'vant/lib/index.css'

import skuData from './data'; 

Vue.use(Button);
Vue.use(Sku);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      skuData:skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '1',
        s2: '1',
      },
      customSkuValidator: () => '请选择套餐', 
    };
  }
}
</script>


<style scoped src="../assets/font-awesome/css/font-awesome.min.css"></style>
<style scoped src="../css/Index.css"></style>


