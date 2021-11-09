
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/tableau', component: () => import('pages/Tableau.vue') },
      { path: '/map', component: () => import('components/map/testmap.vue') },
      { path: '/table', component: () => import('pages/Tables.vue') },
      { path: '/graphe', component: () => import('pages/Graphes.vue') },
      { path: '/mesvehicules', component: () => import('pages/mesvehicules.vue') },
      { path: '/midipile01', component: () => import('pages/vehicules/Midipile01.vue') },
      { path: '/midipile02', component: () => import('pages/vehicules/Midipile02.vue') },
      { path: '/midipile03', component: () => import('pages/vehicules/Midipile03.vue') },
      { path: '/midipile04', component: () => import('pages/vehicules/Midipile04.vue') },
      { path: '/midipile05', component: () => import('pages/vehicules/Midipile05.vue') }    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
