// 姝ラ1锛氬鍏� vue杩欎釜鍖�
// var Vue = require('vue');
import Vue from 'vue';

// 姝ラ2锛氭兂瑕佽В鏋愬拰鍛堢幇App.vue缁勪欢鐨勫唴瀹癸紝鍒欏鍏� App.vue缁勪欢
// var App = require('./App.vue');
import App from './App.vue';

import routes from './router'

//1.0.0 瀵煎寘
import vueRouter from 'vue-router';
//1.0.2
Vue.use(vueRouter);
//1.0.3

import layout from './components/site/layout.vue';

import goodslist from './components/site/goodslist.vue';

//导入商品详情页面
import goodsinfo from './components/site/goodsinfo.vue';


var router = new vueRouter({
    routes: [
        //璁剧疆璺敱榛樿璺宠浆
        { name: 'default', path: '/', redirect: '/site' },
        {
            name: 'layout',
            path: '/site',
            component: layout,
            children: [
                { name: 'goodslist', path: 'goodslist', component: goodslist },
                { name: 'goodsinfo', path: 'goodsinfo/:goodsid', component: goodsinfo }
            ]
        }
    ]
});


// 2.0 axios鐨勪娇鐢�
// 2.0.1 瀵煎叆axios鍖�
import axios from 'axios';
// 2.0.2 璁惧畾axios鐨勫熀鏈殑url璇锋眰鍓嶇紑
axios.defaults.baseURL = 'http://157.122.54.189:9095';

// 2.0.3 鎯宠鍦ㄥ皢鏉ョ殑姣忎釜瀛愮粍浠朵腑鐨勬柟娉曚腑鍧囧彲浠ヤ娇鐢� this.$http鍘昏皟鐢ㄥ叾鏂规硶鎵цajax璇锋眰
//灏辫灏哸xios瀵硅薄鎸傝浇鍒皏ue鐨勫師鍨嬪睘鎬�$http涓�
Vue.prototype.$http = axios;

// 2.0.4 缁戝畾鍒皏ue涓�
Vue.use(axios);

// 3.0 浣跨敤elementUI杩欎釜ui妗嗘灦鐨勬楠�
// 3.0.1銆佸鍖�
import elementUI from 'element-ui';
// 3.0.2 瀵煎叆elemeui鐨刢ss鎺у埗鏍峰紡
// 鐢变簬椤圭洰鐨勬牱寮忓拰elementui鐨刢ss鏍峰紡鏈変簺涓嶄竴鏍凤紝閭ｄ箞淇敼浜嗚繖涓牱寮忎互鍚庯紝瑕佸埄鐢ㄨ嚜宸辩殑鏍峰紡鏇挎崲鍘熸潵鐨勫師鏈夋牱寮�

// import 'element-ui/lib/theme-default/index.css';
import '../statics/site/css/style.css';

// 3.0.3 缁戝畾
Vue.use(elementUI);

Vue.config.productionTip = false

// 4.0 瀹氫箟鍏辨湁杩囨护鍣紙 鍏ㄥ眬杩囨护鍣級 鏉ュ疄鐜版棩鏈熷瓧绗︿覆鐨勬牸寮忓寲鎿嶄綔
Vue.filter('datefmt', (input, fmtstring) => {
    var mydate = new Date(input);
    var y = mydate.getFullYear();
    var m = mydate.getMonth() + 1;
    var d = mydate.getDate();
    var h = mydate.getHours();
    var mi = mydate.getMinutes();
    var s = mydate.getSeconds();

    if (fmtstring == "YYYY-MM-DD") {
        return y + '-' + m + '-' + d;
    }
    if (fmtstring == 'YYYY-MM-DD HH:mm:ss') {
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
    }
});


var state = {
    //购物车中的购买数量
    buyCount: 0
}


var actions = {
    changeBuyCount({ commit }, parmsBuyCount) {
        commit('changeBuyCount', parmsBuyCount);
    }
}

var mutations = {
    changeBuyCount(state, parmsBuyCount) {
        state.buyCount += parmsBuyCount;
    }
}

var getters = {

}

import vuex from 'vuex';
Vue.use(vuex);

// 4.0 实例化一个Store对象
var store = new vuex.Store({
    state,
    actions,
    mutations,
    getters
});


//实例化一个Store对象
// var store = new vuex.store({
//     state,
//     actions,
//     mutations,
//     getters
// })


new Vue({
    el: '#app',
    router,
    store,
    // render: create => create(App),
    template: '<App/>',
    components: { App }
})