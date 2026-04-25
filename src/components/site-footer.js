window.SiteFooter = {
  template: `
    <footer class="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-[#1b1c19]/5 bg-[#f5f3ee] pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div class="space-y-6" data-reveal="up">
          <div class="text-2xl font-serif text-[#334537] tracking-[0.3em]">在水一方</div>
          <p class="text-xs tracking-[0.2em] text-[#5f5e5d] max-w-xs leading-loose">
            北京 · 云蒙山脉腹地<br/>
            京北山地天然食材服务体系
          </p>
          <p class="text-[10px] uppercase tracking-[0.3em] text-[#5f5e5d]/50">
            © 在水一方  All Rights Reserved
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 md:gap-16" data-reveal="up" data-delay="150">
          <div class="space-y-4">
            <p class="text-[10px] uppercase tracking-[0.3em] text-[#334537]/40 mb-4">Pages</p>
            <div class="flex flex-col gap-3">
              <router-link to="/"       class="text-xs tracking-widest text-[#5f5e5d] hover:text-[#334537] transition-colors">首页</router-link>
              <router-link to="/origin" class="text-xs tracking-widest text-[#5f5e5d] hover:text-[#334537] transition-colors">溯源</router-link>
              <router-link to="/service" class="text-xs tracking-widest text-[#5f5e5d] hover:text-[#334537] transition-colors">服务</router-link>
              <router-link to="/about"  class="text-xs tracking-widest text-[#5f5e5d] hover:text-[#334537] transition-colors">关于</router-link>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-[10px] uppercase tracking-[0.3em] text-[#334537]/40 mb-4">Contact</p>
            <div class="flex flex-col gap-3 text-xs tracking-widest text-[#5f5e5d]">
              <span>怀柔区雁栖湖畔</span>
              <span>密云区古北口镇</span>
              <router-link to="/about" class="mt-2 text-[#334537] border-b border-[#334537]/20 pb-1 hover:border-[#334537] transition-all">专属管家咨询 →</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
}
