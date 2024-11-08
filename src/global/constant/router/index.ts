export const ROOT_ROUTER = {
  name: 'Root',
  path: '/'
}

export const HOME_ROUTER = {
  name: 'Home',
  path: '/home'
}

export const PAGE_NOT_MATCH_ROUTER = {
  name: 'ErrorPageNotMatch',
  path: '/:pathMatch(.*)*'
}

export const NO_RESOURCE_PERMISSION_ROUTER = {
  name: 'ErrorNoResourcePermission',
  path: '/error/noResourcePermission'
}

export const PAGE_NOT_FOUND_ROUTER = {
  name: 'ErrorPageNotFound',
  path: '/error/pageNotFound'
}

export const LAYOUT_ROUTER = {
  name: 'Layout',
  path: '/layout'
}

export const SIGN_IN_ROUTER = {
  name: 'AuthSignIn',
  path: '/auth/sign-in'
}

export const WHITE_LIST_ROUTES = [SIGN_IN_ROUTER.path]