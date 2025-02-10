import * as pages from '../pages'
import { Route } from '../types/route.ts'

export const routes: Array<Route> = [
  {
    path: '/',
    component: pages.LoginPage
  },
  {
    path: '/sign-up',
    component: pages.SignUpPage
  },
  {
    path: '/messenger',
    component: pages.ChatsPage
  },
  {
    path: '/settings',
    component: pages.ProfilePage
  },
  {
    path: '/settings/edit',
    component: pages.ProfilePageEdit
  },
  {
    path: '/settings/change-password',
    component: pages.ProfileChangePswdPage
  },
  {
    path: '*',
    component: pages.ErrorPage
  }
]
