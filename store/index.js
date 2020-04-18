import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "尚未登陆",
		userSex: "?",
		userHead: "../../../static/img/user.jpg",
    },
    mutations: {
        login(state, userName, headimg) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
			
        },
		setSex(state,sex){
			state.userSex = sex;
		},
		setUserHead(state, headimg){
			state.userHead = headimg;
		},
        logout(state) {
            state.userName = "尚未登陆";
            state.hasLogin = false;
			state.userHead =  "../../../static/img/user.jpg";
        }
    }
})

export default store
