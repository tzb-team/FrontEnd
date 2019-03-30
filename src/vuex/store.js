import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import getWeb3 from '../util/getWeb3'
import getContract from '../util/getContract'
import pollWeb3 from '../util/pollWeb3'
Vue.use(Vuex);

/**
 * 这里用到了localStorage 是很不推荐的, 以后再改
 * */

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      roles: null
    },
    token: null,
    title: '',
    remember: false,
  //下面是web3的实例部分
    web3: {
      isInjected: false,
      web3Instance: null,
      networkId: null,
      coinbase: null,
      balance: null,
      error: null
    },
    contractInstance: null
  },
  actions: {
    registerWeb3 ({commit}) {
      console.log('registerWeb3 Action being executed')
      getWeb3.then(result => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('error in action registerWeb3', e)
      })
    },
    getContractInstance ({commit}) {
      getContract.then(result => {
        commit('registerContractInstance', result)
      }).catch(e => console.log(e))
    },
    pollWeb3 ({commit}, payload) {
      console.log('pollWeb3 action being executed')
      commit('pollWeb3Instance', payload)
    }

  },
  getters: {
    isLogin: state => {
      console.log(localStorage.token)
      return (localStorage.token !== null && localStorage.token !== undefined);
    },
    isAdmin: state => {
      if(localStorage.roles && localStorage.roles.length > 1 && localStorage.roles.indexOf("ROLE_ADMIN") >= 0) {
        return true;
      }
      return false;
    },
    isRemember: state => {
      if(localStorage.password !== null && localStorage.password !== undefined) {
        return true;
      }
      return false;
    }
  },
  mutations: {

    [types.LOGIN]: (state, data) => {
      localStorage.token = data['accessToken'];
      localStorage.username = data['username'];
      state.token = data['accessToken'];
      state.user.username = data['username'];
      state.user.roles = data['roles'];
      let roles = '';
      for(let i of state.user.roles){
        roles += i;
        roles += ' ';
      }
      localStorage.roles = roles;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('roles');
      state.user.username = null;
      state.user.roles = null;
      state.token = null;
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },
    [types.REMEMBER]: (state, data) => {
      state.remember = true;
      localStorage.username = data.username;
      localStorage.password = window.btoa(data.password)
    },
    [types.CANCELREMEMBER]: (state) => {
      state.remember = false
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    },

    registerWeb3Instance (state, payload) {
      console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
      pollWeb3()
    },
    registerContractInstance (state, payload) {
      console.log('Casino contract instance: ', payload)
      state.contractInstance = () => payload
    },
    pollWeb3Instance (state, payload) {
      console.log('pollWeb3Instance mutation being executed', payload)
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseInt(payload.balance, 10)
    }
  }
})

