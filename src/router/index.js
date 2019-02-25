import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import login from '@/pages/login'
import enterLoan from '@/pages/enterLoan'
import checkMyLoan from '@/pages/checkMyLoan'
import loan from '@/pages/loan'
import largeLoan from '@/pages/largeLoan'
import repay from '@/pages/repay'
import checkInvest from '@/pages/checkInvest'
import signup from '@/pages/signup'
import UserSpace from '@/pages/UserSpace'
import NormalCheck from '@/pages/NormalCheck'
import AdvancedCheck from '@/pages/AdvancedCheck'
import FinancialStanding from '@/pages/FinancialStanding'
import BasicInformation from '@/pages/BasicInformation'
import usermanage from '@/pages/usermanage'
import userdetail from '@/pages/userdetail'
import invest from '@/pages/invest'
import DoInvesting from '@/pages/DoInvesting'
import AlumniCheck from '@/pages/AlumniCheck'
import CrossCheck from '@/pages/CrossCheck'
import LoanInformation from '@/pages/LoanInformation'
import ProjectFavorite from '@/pages/ProjectFavorite'
import InvestInformation from '@/pages/InvestInformation'
import InvestEarnings from '@/pages/InvestEarnings'
import LoanStatistics from '@/pages/LoanStatistics'
import SchoolPerformance from '@/pages/SchoolPerformance'
import EnterVerify from '@/pages/EnterVerify'
import userverify from '@/pages/userverify'
import targetverify from '@/pages/targetverify'
import smalltargetcheck from '@/pages/smalltargetcheck'
import largetargetcheck from '@/pages/largetargetcheck'
import enterInvest from '@/pages/enterInvest'
import largeInvest from '@/pages/largeInvest'
import notice from '@/pages/notice'
import recommend from '@/pages/recommend'
import mesunderway from '@/pages/mesunderway'
import mesdone from '@/pages/mesdone'
import lost from '@/pages/lost'
import upload from '@/pages/upload'
import trade from '@/pages/trade'
import tradeMine from '@/pages/tradeMine'
import tradeGoing from '@/pages/tradeGoing'
import tradeFinished from '@/pages/tradeFinished'
import backAdminData from '@/pages/backAdminData'
import test from '@/pages/test'
import subjectManage from '@/pages/subjectManage'
import subjectManageDetail from '@/pages/subjectManageDetail'
import findPassword from '@/pages/findPassword'
import resetPassword from '@/pages/resetPassword'
import messageList from '@/pages/messageList'
import guide from '@/pages/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/enterLoan',
      name: 'enterLoan',
      component: enterLoan,
      meta: {
        requireAuth: true
      },

    },
    {
      path: '/checkMyLoan',
      name: '/checkMyloan',
      component: checkMyLoan,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/largeloan',
      name: 'largeLoan',
      component: largeLoan,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/UserSpace',
      name: 'UserSpace',
      component: UserSpace,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/repay',
      name: 'repay',
      component: repay,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/checkInvest',
      name: 'checkInvest',
      component: checkInvest,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/SchoolPerformance',
      name: 'SchoolPerformance',
      component: SchoolPerformance,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/BasicInformation',
      name: 'BasicInformation',
      component: BasicInformation,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/NormalCheck',
      name: 'NormalCheck',
      component: NormalCheck,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/AdvancedCheck',
      name: 'AdvancedCheck',
      component: AdvancedCheck,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/FinancialStanding',
      name: 'FinancialStanding',
      component: FinancialStanding,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/AlumniCheck',
      name: 'AlumniCheck',
      component: AlumniCheck,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/CrossCheck',
      name: 'CrossCheck',
      component: CrossCheck
    },
    {
      path: '/UserSpace/LoanInformation',
      name: 'LoanInformation',
      component: LoanInformation,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/ProjectFavorite',
      name: 'ProjectFavorite',
      component: ProjectFavorite,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/InvestInformation',
      name: 'InvestInformation',
      component: InvestInformation,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/InvestEarnings',
      name: 'InvestEarnings',
      component: InvestEarnings,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/UserSpace/LoanStatistics',
      name: 'LoanStatistics',
      component: LoanStatistics,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: usermanage,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/userdetail',
      name: 'userdetail',
      component: userdetail,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/invest',
      name:'invest',
      component:invest,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/DoInvesting/:id',
      name:'DoInvesting',
      component: DoInvesting,
      meta: {
        requireAuth: true
      },

    },
    {
      path:'/EnterVerify',
      name:'EnterVerify',
      component:EnterVerify,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/userverify',
      name:'userverify',
      component:userverify,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/targetverify',
      name:'tergetverify',
      component:targetverify,
      meta: {
        requireAuth: true
      },
    },{
      path:'/smalltargetcheck',
      name:'smalltargetcheck',
      component:smalltargetcheck,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/largetargetcheck',
      name:'largetargetcheck',
      component:largetargetcheck,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/enterInvest',
      name:'enterInvest',
      component:enterInvest,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/largeInvest',
      name:'largeInvest',
      component:largeInvest,
      meta: {
        requireAuth: true
      },
    },{
      path:'/notice',
      name:'notice',
      component:notice,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/recommend',
      name:'recommend',
      component:recommend,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/notice/mesunderway',
      name:'mesunderway',
      component:mesunderway,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/notice/mesdone',
      name:'mesdone',
      component:mesdone,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/notice/lost',
      name:'lost',
      component:lost,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/notice/upload',
      name:'upload',
      component:upload,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/trade',
      name:'trade',
      component: trade,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/trade/mine',
      name:'tradeMine',
      component:tradeMine,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/trade/going',
      name:'tradeGoing',
      component:tradeGoing,
      meta: {
        requireAuth: true
      },
    },
    {
      path:"/trade/finished",
      name:'tradeFinished',
      component:tradeFinished,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/backAdminData',
      name:'backAdminData',
      component:backAdminData,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/subjectManage',
      name:'subjectManage',
      component:subjectManage,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/subjectManageDetail',
      name:'subjectManageDetail',
      component:subjectManageDetail,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/findPassword',
      name:'findPassword',
      component:findPassword,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/resetPassword',
      name:'resetPassword',
      component:resetPassword,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/messageList',
      name:'messageList',
      component:messageList,
      meta: {
        requireAuth: true
      },
    },
    {
      path:'/guide',
      name:'guide',
      component:guide
    },


  ],
  mode:"history"
})
