window.ServicePage = {
  template: `
    <main class="pt-24 sm:pt-28 md:pt-32">
      <!-- Hero -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 mb-16 sm:mb-24 md:mb-32">
        <div class="flex flex-col md:flex-row items-stretch md:items-end gap-8 md:gap-12">
          <div class="w-full md:w-2/5 min-w-0">
            <span data-reveal="up" class="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#5f5e5d] mb-4 sm:mb-6 block">Service Philosophy</span>
            <h1 data-reveal="up" data-delay="100" class="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.15] text-[#334537] mb-6 sm:mb-8">温润如玉<br/>交付山野的本真</h1>
            <p data-reveal="up" data-delay="200" class="text-[#5f5e5d] max-w-sm leading-relaxed mb-0 md:mb-12 text-sm sm:text-base">我们不仅仅是食材的搬运者，更是自然馈赠的守护人。从深山到餐桌，每一公里的跨越都承载着极致的专业与敬畏。</p>
          </div>
          <div class="w-full md:w-3/5 min-h-[220px] h-[42vh] sm:h-[48vh] md:h-[600px] max-h-[640px] md:max-h-none bg-[#f0eee9] overflow-hidden" data-reveal="right">
            <img class="w-full h-full object-cover"
              src="assets/img/service-hero.jpg"
              alt="极简天然亚麻包装" />
          </div>
        </div>
      </section>

      <!-- 专属交付 -->
      <section class="bg-[#f5f3ee] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div class="md:col-span-4">
            <h2 data-reveal="up" class="font-headline text-2xl sm:text-3xl md:text-4xl text-[#334537] mb-4 sm:mb-6">专属交付</h2>
            <p data-reveal="up" data-delay="100" class="text-[#5f5e5d] mb-12">全程冷链，原产地直发，将时间的痕迹凝固在最佳时刻。</p>
            <div class="space-y-10 md:space-y-16">
              <div v-for="item in deliveryItems" :key="item.icon" class="flex gap-4 sm:gap-6 items-start">
                <span class="material-symbols-outlined text-[#334537] text-3xl">{{ item.icon }}</span>
                <div>
                  <h4 class="font-bold text-[#334537] mb-2">{{ item.title }}</h4>
                  <p class="text-sm text-[#5f5e5d]">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-start-6 md:col-span-7 grid grid-cols-2 gap-2 sm:gap-4 w-full min-w-0">
            <div class="aspect-[3/4] overflow-hidden">
              <img class="w-full h-full object-cover"
                src="assets/img/client-garden-worker.jpg"
                alt="专业物流配送" />
            </div>
            <div class="aspect-[3/4] mt-6 sm:mt-10 md:mt-12 overflow-hidden">
              <img class="w-full h-full object-cover"
                src="assets/img/client-carrot-bunch.jpg"
                alt="有机蔬菜木箱" />
            </div>
          </div>
        </div>
      </section>

      <!-- 会员套餐 -->
      <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 lg:px-12">
        <div class="text-center mb-12 sm:mb-16 md:mb-24">
          <span class="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#5f5e5d] mb-3 sm:mb-4 block">Membership Experience</span>
          <h2 class="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#334537] px-2">高标准家庭定制包</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="plan in plans" :key="plan.title"
            class="p-6 sm:p-8 md:p-12 flex flex-col justify-between min-h-0 md:min-h-[500px]"
            :class="plan.bg">
            <div>
              <h3 class="font-headline text-2xl mb-4" :class="plan.titleColor">{{ plan.title }}</h3>
              <p class="text-sm mb-8" :class="plan.textColor">{{ plan.desc }}</p>
              <ul class="space-y-4 text-xs tracking-widest opacity-80" :class="plan.listColor">
                <li v-for="feature in plan.features" :key="feature">• {{ feature }}</li>
              </ul>
            </div>
            <button class="w-full py-4 text-xs tracking-widest transition-colors" :class="plan.btnClass">{{ plan.btn }}</button>
          </div>
        </div>
      </section>

      <!-- 交付标准 -->
      <section class="mb-16 sm:mb-24 md:mb-32 px-4 sm:px-6 md:px-10 lg:px-12">
        <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch md:items-center">
          <div class="w-full md:w-1/2 min-w-0">
            <img class="w-full min-h-[240px] h-auto max-h-[85vh] md:max-h-none md:h-[700px] object-cover"
              src="assets/img/client-cucumber-farmer.jpg"
              alt="主厨白制服、按标准流程精细装盘出餐" />
          </div>
          <div class="w-full md:w-1/2 space-y-10 md:space-y-16 min-w-0">
            <div>
              <h2 class="font-headline text-2xl sm:text-3xl md:text-4xl text-[#334537] mb-6 sm:mb-8">交付标准</h2>
              <div class="h-px bg-[#c3c8c1]/30 w-32 mb-8"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div v-for="std in standards" :key="std.label">
                <h5 class="text-xs uppercase tracking-[0.2em] text-[#5f5e5d] mb-4">{{ std.label }}</h5>
                <h4 class="font-headline text-xl mb-3">{{ std.title }}</h4>
                <p class="text-sm text-[#5f5e5d] leading-relaxed">{{ std.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  data() {
    return {
      deliveryItems: [
        { icon: 'inventory_2',          title: '呼吸感包装', desc: '采用天然可降解材料，确保食材在运输过程中维持微环境平衡。' },
        { icon: 'thermostat',           title: '恒温护航',   desc: '针对不同食材设定精准温域，从-18℃到8℃的严苛温控体系。' },
        { icon: 'precision_manufacturing', title: '数字化追踪', desc: '每一份包裹均可追溯其物流轨迹与实时温湿度状态。' },
      ],
      plans: [
        {
          title: '旬味私享卡',
          desc: '按季递送当令绝色食材，捕捉四季流转的味觉精华。',
          features: ['每月一次顶级珍稀食材', '主厨定制烹饪指南', '优先参与产地探访'],
          bg: 'bg-[#eae8e3]', titleColor: '', textColor: 'text-[#5f5e5d]', listColor: 'text-[#334537]',
          btn: '探索详情', btnClass: 'border border-[#334537]/20 hover:bg-[#334537] hover:text-white',
        },
        {
          title: '御席定制服务',
          desc: '针对家庭健康需求，由营养学专家与大厨联合制定的周期性配菜方案。',
          features: ['全方位饮食健康管理', '1对1管家式配送对接', '稀缺食材预留权'],
          bg: 'bg-[#334537]', titleColor: 'text-white', textColor: 'text-white/70', listColor: 'text-white',
          btn: '立即预约', btnClass: 'bg-[#fbf9f4] text-[#334537] hover:bg-[#eae8e3]',
        },
        {
          title: '山野礼赠礼遇',
          desc: '为尊贵社交场合定制的礼遇，将山川之美装进礼盒。',
          features: ['定制化品牌联名包装', '全国重点城市极速送达', '个性化贺卡与礼仪服务'],
          bg: 'bg-[#f5f3ee]', titleColor: '', textColor: 'text-[#5f5e5d]', listColor: 'text-[#334537]',
          btn: '探索详情', btnClass: 'border border-[#334537]/20 hover:bg-[#334537] hover:text-white',
        },
      ],
      standards: [
        { label: 'Precision',    title: '极致时效', desc: '核心城市承诺24小时闭环交付，从采摘到餐桌，分秒必争，保留初味。' },
        { label: 'Etiquette',   title: '仪礼交付', desc: '交付专员经过严格礼仪培训，全程佩戴洁净手套，以专业姿态呈递每一份珍视。' },
        { label: 'Temperature', title: '感知温控', desc: '不仅仅是冷链，更是感官的舒适。温润的包装质感，让每次拆箱都充满仪式感。' },
        { label: 'Responsibility', title: '无忧售后', desc: '任何不符合标准的瑕疵，我们承诺闪电处理，守护您的信任底线。' },
      ],
    }
  },
}
