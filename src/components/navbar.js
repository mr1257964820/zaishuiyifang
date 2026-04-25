window.NavBar = {
  template: `
    <div class="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)]">
      <nav class="relative bg-[#fbf9f4]/70 backdrop-blur-xl flex justify-between items-center gap-3 px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6">
        <!-- Logo -->
        <router-link to="/" class="text-lg sm:text-xl md:text-2xl font-serif text-[#334537] tracking-[0.12em] sm:tracking-[0.2em] hover:opacity-80 transition-opacity shrink-0 min-w-0 truncate max-w-[70vw]">
          在水一方
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-10 font-['Noto_Serif_SC','Noto_Serif'] tracking-widest text-sm items-center">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="transition-colors duration-300 whitespace-nowrap"
            :class="$route.path === link.to
              ? 'text-[#334537] border-b border-[#334537] pb-1'
              : 'text-[#5f5e5d] hover:text-[#334537]'"
          >{{ link.label }}</router-link>
        </div>

        <!-- CTA Button -->
        <router-link
          to="/about"
          class="hidden md:block bg-[#334537] text-white px-6 py-2 tracking-widest text-xs font-label hover:opacity-90 transition-opacity shrink-0"
        >
          专属咨询
        </router-link>

        <!-- Mobile Hamburger -->
        <button type="button" class="md:hidden text-[#334537] -mr-1 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0" @click="menuOpen = !menuOpen" aria-label="菜单" :aria-expanded="menuOpen">
          <span class="material-symbols-outlined text-2xl">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
      </nav>

      <!-- Mobile Dropdown：紧贴导航栏底部，适配任意导航高度与安全区 -->
      <transition name="menu">
        <div
          v-if="menuOpen"
          class="absolute left-0 right-0 top-full z-40 max-h-[min(70vh,calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-5rem))] overflow-y-auto bg-[#fbf9f4]/96 backdrop-blur-xl flex flex-col gap-0 border-t border-[#c3c8c1]/20 md:hidden shadow-lg pb-[env(safe-area-inset-bottom)]"
        >
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 sm:px-8 py-4 sm:py-5 tracking-widest border-b border-[#c3c8c1]/10 transition-colors min-h-[48px] flex items-center"
            :class="$route.path === link.to
              ? 'text-[#334537] font-medium'
              : 'text-[#5f5e5d] hover:text-[#334537]'"
            @click="menuOpen = false"
          >{{ link.label }}</router-link>
          <div class="px-4 sm:px-8 py-6">
            <router-link
              to="/about"
              class="block w-full bg-[#334537] text-white py-3.5 min-h-[48px] flex items-center justify-center tracking-widest text-xs text-center hover:opacity-90 transition-opacity"
              @click="menuOpen = false"
            >专属咨询</router-link>
          </div>
        </div>
      </transition>
    </div>
  `,
  data() {
    return {
      menuOpen: false,
      navLinks: [
        { to: '/',        label: '首页' },
        { to: '/origin',  label: '溯源' },
        { to: '/service', label: '服务' },
        { to: '/about',   label: '关于' },
      ],
    }
  },
}
