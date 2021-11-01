
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/tableau', component: () => import('pages/Tableau.vue') },
      { path: '/table', component: () => import('pages/Tables.vue') },
      { path: '/graphe', component: () => import('pages/Graphes.vue') }
        ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
