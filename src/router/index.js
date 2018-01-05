import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups/Meetups'
import CreateMeetup from '@/components/Meetups/CreateMeetup'
import Profile from '@/components/Users/Profile'
import Signup from '@/components/Users/Signup'
import Signin from '@/components/Users/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/Meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/Meetups/Create',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/Users/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Users/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Users/Signin',
      name: 'Signin',
      component: Signin
    }

  ],
  mode: 'history'
})
