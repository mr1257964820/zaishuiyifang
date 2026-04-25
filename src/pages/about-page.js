window.AboutPage = {
  template: `
    <main class="pt-24 sm:pt-28 md:pt-32">
      <!-- Hero -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 mb-16 sm:mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <div class="md:col-span-7">
          <h1 data-reveal="up" class="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-[#334537] leading-[1.15] tracking-tight">
            山野美学<br/>与专业服务的<br/><span class="italic font-light">平衡</span>。
          </h1>
        </div>
        <div class="md:col-span-5 pb-0 md:pb-4" data-reveal="up" data-delay="200">
          <p class="text-[#5f5e5d] text-base sm:text-lg font-body leading-relaxed max-w-sm">
            "在水一方"不仅是一个坐标，更是一种在喧嚣之外寻求静谧生活的方式。我们致力于将大自然的礼赠与现代专业管家服务完美融合。
          </p>
        </div>
      </section>

      <!-- 品牌缘起 -->
      <section class="mb-16 sm:mb-24 md:mb-48">
        <div class="grid grid-cols-1 md:grid-cols-2 bg-[#f5f3ee] md:min-h-[560px] lg:min-h-[700px]">
          <div class="relative min-h-[220px] h-[38vh] sm:h-[45vh] md:h-auto md:min-h-[400px] overflow-hidden">
            <img class="w-full h-full object-cover"
              src="assets/img/about-brand.jpg"
              alt="日出薄雾山脉" />
          </div>
          <div class="p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center space-y-8 md:space-y-12">
            <div class="space-y-3 md:space-y-4">
              <span class="text-xs sm:text-sm font-label tracking-[0.3em] uppercase text-[#334537]/60">Brand Origin</span>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-headline text-[#334537]">品牌缘起</h2>
            </div>
            <div class="space-y-6 md:space-y-8 text-[#5f5e5d] font-body text-base sm:text-lg leading-loose">
              <p>"在水一方"溯源于《诗经》，寓意着一种可望而可及的纯粹生活境界。我们的创始初衷，是为了给在城市中穿梭的灵魂，寻找一处可以停泊的山野。</p>
              <p>在这里，每一滴山泉，每一缕晨曦，都被赋予了专业的温情。我们相信，最好的服务是如水般润物无声，却又无处不在。深耕山野多年，我们将文化底蕴融入现代旅居。</p>
            </div>
            <div class="pt-8">
              <router-link to="/origin" class="text-[#334537] font-bold tracking-widest border-b border-[#334537]/20 pb-2 hover:border-[#334537] transition-all">阅读完整故事 —</router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- 专属管家咨询 -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 mb-16 sm:mb-24 md:mb-48 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
        <!-- 左侧联系 -->
        <div class="lg:col-span-5 space-y-12">
          <div class="space-y-4">
            <span class="text-sm font-label tracking-[0.3em] uppercase text-[#334537]/60">Bespoke Service</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-headline text-[#334537]">专属管家咨询</h2>
            <p class="text-[#5f5e5d] font-body leading-relaxed pt-4">为了保障每一位客人的绝对私密与专业体验，我们采用一对一预约制。您的管家将在1小时内与您取得联系。</p>
          </div>
          <div class="bg-[#fbf9f4] p-5 sm:p-8 border-l border-[#334537]/10 space-y-5 sm:space-y-6">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 bg-[#e4e2dd] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[#334537] text-3xl">headset_mic</span>
              </div>
              <div>
                <p class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]">致电垂询</p>
                <p class="text-lg sm:text-xl font-headline text-[#334537] break-all">400-888-9999</p>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 bg-[#e4e2dd] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[#334537] text-3xl">chat_bubble</span>
              </div>
              <div>
                <p class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]">微信即时通</p>
                <p class="text-base sm:text-xl font-headline text-[#334537] break-all">WAISHUI_YIFANG</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧表单 -->
        <div class="lg:col-span-7 bg-[#f5f3ee] p-6 sm:p-10 md:p-16 lg:p-20 w-full min-w-0">
          <form class="space-y-8 sm:space-y-12" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div class="space-y-2">
                <label class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]/60">姓名 Name</label>
                <input v-model="form.name" class="w-full bg-transparent border-0 border-b border-[#c3c8c1]/40 py-4 focus:border-[#334537] transition-colors font-body outline-none" placeholder="如何称呼您" type="text" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]/60">联系电话 Contact</label>
                <input v-model="form.phone" class="w-full bg-transparent border-0 border-b border-[#c3c8c1]/40 py-4 focus:border-[#334537] transition-colors font-body outline-none" placeholder="便于管家联系您" type="tel" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]/60">咨询事项 Subject</label>
              <select v-model="form.subject" class="w-full bg-transparent border-0 border-b border-[#c3c8c1]/40 py-4 focus:border-[#334537] transition-colors font-body appearance-none outline-none">
                <option>定制化行程规划</option>
                <option>小院私享预约</option>
                <option>商务合作洽谈</option>
                <option>其他</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-xs font-label uppercase tracking-widest text-[#5f5e5d]/60">留言 Message</label>
              <textarea v-model="form.message" class="w-full bg-transparent border-0 border-b border-[#c3c8c1]/40 py-4 focus:border-[#334537] transition-colors font-body resize-none outline-none" placeholder="请告知您的特殊需求..." rows="4"></textarea>
            </div>
            <button type="submit" class="w-full md:w-auto bg-[#334537] text-white px-16 py-4 font-label tracking-widest text-sm hover:opacity-90 transition-all">提交预约</button>
            <p v-if="submitted" class="text-[#334537] text-sm tracking-widest">✓ 已收到您的预约，管家将尽快与您联系。</p>
          </form>
        </div>
      </section>

      <!-- 小院联系 -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 mb-16 sm:mb-24 md:mb-32">
        <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch md:items-center">
          <div class="w-full md:w-1/3 space-y-6 md:space-y-8 min-w-0">
            <div class="space-y-3 md:space-y-4">
              <span class="text-xs sm:text-sm font-label tracking-[0.3em] uppercase text-[#334537]/60">The Sanctuary</span>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-headline text-[#334537]">小院联系</h2>
            </div>
            <div class="relative pl-7 sm:pl-8 space-y-8 md:space-y-12">
              <div class="absolute left-0 top-2 bottom-2 w-px border-l border-dashed border-[#c3c8c1]"></div>
              <div v-for="loc in locations" :key="loc.name" class="relative">
                <div class="absolute -left-[36px] top-1 w-2.5 h-2.5 bg-[#334537] rounded-full"></div>
                <h4 class="font-bold text-[#334537] mb-2">{{ loc.name }}</h4>
                <p class="text-[#5f5e5d] text-sm leading-relaxed break-words">{{ loc.address }}</p>
              </div>
              <div class="relative">
                <div class="absolute -left-[36px] top-1 w-2.5 h-2.5 bg-[#334537] rounded-full"></div>
                <h4 class="font-bold text-[#334537] mb-2">预约说明</h4>
                <p class="text-[#5f5e5d] text-sm">为保障入住品质，各小院每日仅限接待3组客人。</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/3 min-h-[240px] h-[42vh] sm:h-[48vh] md:h-[500px] max-h-[560px] md:max-h-none bg-[#f5f3ee] relative overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-700">
            <img class="w-full h-full object-cover"
              src="assets/img/about-location.jpg"
              alt="传统建筑群鸟瞰" />
            <div class="absolute inset-0 bg-[#334537]/5 flex items-center justify-center">
              <div class="bg-white/90 backdrop-blur px-8 py-4 shadow-xl border border-[#334537]/5">
                <p class="text-xs font-label tracking-widest text-[#334537] font-bold uppercase">View on Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  data() {
    return {
      submitted: false,
      form: { name: '', phone: '', subject: '定制化行程规划', message: '' },
      locations: [
        { name: '坐标·云隐山居', address: '北京市怀柔区雁栖湖畔云蒙山路18号' },
        { name: '坐标·石泉小院', address: '北京市密云区古北口镇司马台长城脚下' },
      ],
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true
      setTimeout(() => { this.submitted = false }, 4000)
    },
  },
}
