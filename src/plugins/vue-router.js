import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/VAccount.vue';
import VAddCustomer from '../views/VAddCustomer.vue';
import VEditCustomer from '../views/VEditCustomer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'VAccount',
      component: HomeView
    },
    {
      path: '/areaGroup',
      name: 'VAreaGroup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VAreaGroup.vue')
    },
    {
      path: '/customerColumn',
      name: 'VCustomerColumn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VCustomerColumn.vue')
    },
    {
      path: '/businessColumn',
      name: 'VBusinessColumn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VBusinessColumn.vue')
    },
    {
      path: '/businessManagement',
      name: 'VBusiness',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VBusiness.vue')
    },
    {
      path: '/customerManagement',
      name: 'VCustomerManagement',
      component: () => import('../views/VCustomerManagement.vue'),
      children: [
        {
          path: 'addCustomer',
          name: 'VAddCustomer',
          component: VAddCustomer
        },
        {
          path: 'editCustomer/:id',
          name: 'VEditCustomer',
          props: true,
          component: VEditCustomer
        }
      ]
    }
  ]
});

export default router;
