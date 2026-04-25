// ── 路由配置 ──────────────────────────────────────────────
const { createRouter, createWebHashHistory } = VueRouter

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',        component: window.HomePage,    meta: { title: '在水一方 — 京北山地天然食材' } },
    { path: '/origin',  component: window.OriginPage,  meta: { title: '溯源 — 在水一方' } },
    { path: '/service', component: window.ServicePage, meta: { title: '服务 — 在水一方' } },
    { path: '/about',   component: window.AboutPage,   meta: { title: '关于 — 在水一方' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

// ── 根组件 ────────────────────────────────────────────────
const { createApp } = Vue

const App = {
  template: `
    <div class="bg-[#fbf9f4] min-h-screen">
      <nav-bar />
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
      <site-footer />
    </div>
  `,
  components: {
    NavBar:      window.NavBar,
    SiteFooter:  window.SiteFooter,
  },
}

// ── 挂载 ──────────────────────────────────────────────────
createApp(App).use(router).mount('#app')
