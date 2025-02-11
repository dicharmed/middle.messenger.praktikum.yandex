import * as pages from '../pages'
import { ROUTES } from '../constants/enums.ts'
import { RouteType } from '../types/types.ts'

export const routes: Array<RouteType> = [
  {
    path: ROUTES.LOGIN,
    component: pages.LoginPage
  },
  {
    path: ROUTES.SIGNUP,
    component: pages.SignUpPage
  },
  {
    path: ROUTES.CHATS,
    component: pages.ChatsPage
  },
  {
    path: ROUTES.PROFILE,
    component: pages.ProfilePage
  },
  {
    path: ROUTES.PROFILE_EDIT,
    component: pages.ProfilePageEdit
  },
  {
    path: ROUTES.PROFILE_EDIT_PASSWORD,
    component: pages.ProfileChangePswdPage
  },
  {
    path: ROUTES.INTERNAL_SERVER,
    component: pages.ErrorPage500
  },
  {
    path: ROUTES.NOT_FOUND,
    component: pages.ErrorPage404
  }
]
