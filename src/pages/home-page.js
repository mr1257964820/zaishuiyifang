window.HomePage = {
  template: `
    <div>
      <!-- Hero（视差） -->
      <header class="relative min-h-[100dvh] min-h-screen w-full overflow-hidden flex items-center justify-center">
        <img
          data-parallax="0.3"
          class="absolute inset-0 w-full h-full object-cover scale-[1.08]"
          src="assets/img/home-hero.jpg"
          alt="京北云蒙山脉晨雾" />
        <div class="absolute inset-0 bg-black/15"></div>
        <div class="relative z-10 text-center text-white px-4 sm:px-6 max-w-[100vw]">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 sm:mb-8 tracking-[0.15em] sm:tracking-[0.3em] md:tracking-[0.4em] font-light text-white drop-shadow-sm leading-tight">在水一方</h1>
          <p class="text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] font-light opacity-90 px-2">京北山地的天然食材服务体系</p>
        </div>
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span class="text-[10px] tracking-[0.5em] uppercase text-white">Scroll to Explore</span>
          <div class="w-px h-16 bg-white/40 animate-pulse"></div>
        </div>
      </header>

      <main class="relative bg-[#fbf9f4]">
        <!-- 山野源头 -->
        <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div class="md:col-span-5 mb-8 md:mb-0">
              <h2 data-reveal="up" class="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 tracking-widest leading-tight">
                山野源头<br/>
                <span class="text-[#5f5e5d] italic font-light text-xl sm:text-2xl md:text-3xl">时间的深远价值</span>
              </h2>
              <div class="space-y-8 text-[#5f5e5d] leading-relaxed max-w-md">
                <p data-reveal="up" data-delay="100">在京北海拔千米的群山深处，我们守护着一片被时间遗忘的净土。这里的食材不追赶季节，而是顺应山林的呼吸，在岩石与清泉间缓慢沉淀养分。</p>
                <p data-reveal="up" data-delay="200">每一株野菜的生长，每一头散养山禽的成熟，都遵循着自然界的原始律法。我们相信，最好的滋味，源于对时间的极致耐心。</p>
              </div>
            </div>
            <div class="md:col-span-7" data-reveal="right">
              <div class="aspect-[4/5] relative overflow-hidden bg-[#f5f3ee]">
                <img
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  src="assets/img/home-mountain.jpg"
                  alt="高对比黑白山峰摄影" />
                <div class="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white z-20">
                  <span class="text-[10px] sm:text-xs tracking-widest uppercase opacity-60 block mb-1 sm:mb-2">Location</span>
                  <span class="text-sm sm:text-lg tracking-widest">北京 · 云蒙山脉</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 小院菜畦 -->
        <section class="py-16 sm:py-24 md:py-32 bg-[#f5f3ee] px-4 sm:px-6 md:px-12 lg:px-24">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start mb-12 sm:mb-16 md:mb-24 gap-8 md:gap-12">
              <div class="max-w-xl">
                <h2 data-reveal="up" class="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 tracking-widest">小院菜畦</h2>
                <p data-reveal="up" data-delay="100" class="text-[#5f5e5d] tracking-wide leading-relaxed">拒绝规模化的工业逻辑。我们与深山里的数十户农家合作，在方寸间的庭院菜畦里，保留了近乎绝迹的本土品种。这种非规模化的稀缺种养，是我们对食材多样性的最后坚持。</p>
              </div>
              <div class="pt-4" data-reveal="up" data-delay="200">
                <router-link to="/service" class="text-[#334537] border-b border-[#334537]/30 pb-2 hover:border-[#334537] transition-all text-sm tracking-widest uppercase">了解供应标准</router-link>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div
                v-for="(card, i) in galleryCards" :key="card.label"
                class="group relative aspect-[3/4] overflow-hidden"
                :class="card.offset"
                :data-reveal="'up'"
                :data-delay="String(i * 150)"
              >
                <img class="w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700" :src="card.img" :alt="card.label" />
                <div class="absolute inset-0 bg-black/25 sm:bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="text-white text-sm tracking-widest px-2 text-center">{{ card.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 核心理念 -->
        <section class="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
          <span data-reveal="up" class="text-[#334537]/40 tracking-[0.35em] sm:tracking-[0.6em] uppercase text-[10px] sm:text-xs mb-10 sm:mb-16">Core Philosophy</span>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-24 lg:gap-32 w-full max-w-5xl">
            <div
              v-for="(value, i) in coreValues" :key="value.title"
              class="flex flex-col items-center"
              data-reveal="up"
              :data-delay="String(i * 150)"
            >
              <span class="material-symbols-outlined text-4xl font-light text-[#334537] mb-8">{{ value.icon }}</span>
              <h3 class="text-2xl mb-6 tracking-widest">{{ value.title }}</h3>
              <p class="text-[#5f5e5d] text-sm leading-relaxed tracking-wider">{{ value.desc }}</p>
            </div>
          </div>
        </section>

        <!-- 编辑特辑 -->
        <section class="pb-16 sm:pb-32 md:pb-48 px-4 sm:px-6 md:px-12 lg:px-24">
          <div class="bg-[#f0eee9] relative grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center order-2 md:order-1">
              <h2 data-reveal="up" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 tracking-widest leading-relaxed font-light">
                "在这一方山水间，我们不只是食材的搬运者，更是山野秩序的记录员。"
              </h2>
              <p data-reveal="up" data-delay="150" class="text-[#5f5e5d] font-serif italic">— 品牌溯源人札记</p>
              <div class="mt-12" data-reveal="up" data-delay="250">
                <router-link to="/origin" class="text-[#334537] border-b border-[#334537]/30 pb-2 hover:border-[#334537] transition-all text-sm tracking-widest uppercase">查看溯源档案</router-link>
              </div>
            </div>
            <div class="min-h-[220px] h-[42vh] sm:h-[50vh] md:h-[600px] max-h-[600px] overflow-hidden order-1 md:order-2" data-reveal="scale">
              <img
                class="w-full h-full object-cover"
                src="assets/img/client-geese-river.jpg"
                alt="农家木屋窗口远眺山景" />
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  data() {
    return {
      galleryCards: [
        { label: '时令采集', img: 'assets/img/client-tomato-vine.jpg', offset: '' },
        { label: '传统农艺', img: 'assets/img/client-cucumber-hand.jpg', offset: 'md:mt-24' },
        { label: '稀缺品种', img: 'assets/img/client-carrot-bunch.jpg', offset: '' },
      ],
      coreValues: [
        { icon: 'air',           title: '安静', desc: '剥离喧嚣的营销辞令，让食物本身在静默中发声。' },
        { icon: 'nature',        title: '自然', desc: '不干预、不强求，是对生命演化最大的尊重。' },
        { icon: 'verified_user', title: '信任', desc: '从泥土到餐桌，每一环节都是庄重的承诺。' },
      ],
    }
  },
}
