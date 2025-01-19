import * as pages from '../pages/index.js'

export const routes = [
  {
    path: '/',
    component: pages.HomePage
  },
  {
    path: '/sign-up',
    component: pages.SignUpPage
  },
  {
    path: '/login',
    component: pages.LoginPage
  },
  {
    path: '/chats',
    component: pages.ChatsPage
  },
  {
    path: '/profile',
    component: pages.ProfilePage
  },
  {
    path: '/profile/edit',
    component: pages.ProfilePageEdit
  },
  {
    path: '/profile/change-password',
    component: pages.ProfilePageChangePswd
  },
  {
    path: '*',
    component: pages.ErrorPage
  }
]
