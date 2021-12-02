
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/mesvehicules', component: () => import('pages/mesvehicules.vue') },
      { path: '/midipile01', component: () => import('pages/vehicules/Midipile01.vue') },
      { path: '/midipile02', component: () => import('pages/vehicules/Midipile02.vue') },
      { path: '/midipile03', component: () => import('pages/vehicules/Midipile03.vue') },
      { path: '/midipile04', component: () => import('pages/vehicules/Midipile04.vue') },
      { path: '/midipile05', component: () => import('pages/vehicules/Midipile05.vue') },

      //Composants : Charts
      { path: '/columnlabel', component: () => import('pages/charts/ColumnLabelPage.vue') },
      { path: '/stackedcolumn', component: () => import('pages/charts/StackedColumnPage.vue') },
      { path: '/basiccircle', component: () => import('pages/charts/BasicCirclePage.vue') },
      { path: '/batteryradial', component: () => import('pages/charts/BatteryRadialPage.vue') },
      { path: '/radialbarcustom', component: () => import('pages/charts/RadialBarCustomPage.vue') },
      { path: '/spark', component: () => import('pages/charts/SparkPage.vue') },
      { path: '/basicline', component: () => import('pages/charts/BasicLinePage.vue') },

      //Composants : Cartes
      { path: '/simplemap', component: () => import('pages/maps/SimpleMapPage.vue') },
      { path: '/iconmap', component: () => import('pages/maps/IconMapPage.vue') },
      { path: '/popupmap', component: () => import('pages/maps/PopupMapPage.vue') },
      { path: '/polylinemap', component: () => import('pages/maps/PolylineMapPage.vue') },

      //Composants : Table
      { path: '/tableprogress', component: () => import('pages/table/TableProgressPage.vue') },
      { path: '/tabletripstat', component: () => import('pages/table/TableTripStatPage.vue') },
      { path: '/tableactu', component: () => import('pages/table/TableActuPage.vue') },
      { path: '/tableactive', component: () => import('pages/table/TableActivePage.vue') },

      //Dashboards
      { path: '/dashboard1', component: () => import('pages/dashboards/Dashboard1.vue') },
      { path: '/dashboard2', component: () => import('pages/dashboards/Dashboard2.vue') },

      //Détail voyage
      { path: '/01trip001', component: () => import('pages/midipile01/trip001.vue') },

      //Administration
      { path: '/administration', component: () => import('pages/Administration.vue') }
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
