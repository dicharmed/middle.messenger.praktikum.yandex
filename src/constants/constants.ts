import { LinkType } from '../types/types.ts'
import { NAV_LINKS } from './enums.ts'

export const navLinks: Array<LinkType> = [
  { title: NAV_LINKS.home, href: '/' },
  { title: NAV_LINKS.login, href: '/login' },
  { title: NAV_LINKS.signUp, href: '/sign-up' },
  { title: NAV_LINKS.chats, href: '/chats' },
  { title: NAV_LINKS.profile, href: '/profile' },
  { title: NAV_LINKS.profileEdit, href: '/profile/edit' },
  { title: NAV_LINKS.profilePasswordChange, href: '/profile/change-password' }
]
