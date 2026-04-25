window.OriginPage = {
  template: `
    <main class="pt-24 sm:pt-28 md:pt-32">
      <!-- Hero -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 mb-16 sm:mb-24 md:mb-32 grid grid-cols-12 gap-6 md:gap-8 items-end">
        <div class="col-span-12 md:col-span-7">
          <h1 data-reveal="up" class="serif-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.12] tracking-tight text-[#334537]">
            万物生息<br/><span class="italic font-light">有迹可循</span>
          </h1>
          <p data-reveal="up" data-delay="150" class="mt-6 sm:mt-10 md:mt-12 text-[#5f5e5d] max-w-md text-sm leading-relaxed tracking-wider">
            在水一方秉承对自然的敬畏，通过精密溯源与科学种养，在崇山峻岭间还原食材最本真的生命周期。
          </p>
        </div>
        <div class="col-span-12 md:col-span-5 aspect-[4/5] max-h-[min(70vh,520px)] md:max-h-none bg-[#f5f3ee] relative overflow-hidden" data-reveal="right">
          <img class="w-full h-full object-cover"
            src="assets/img/origin-hero.jpg"
            alt="幼苗破土" />
          <div class="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-[#c0d5c2] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-label uppercase">Authentic Origin</div>
        </div>
      </section>

      <!-- 时间之重 -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 py-16 sm:py-24 md:py-32 bg-[#f5f3ee]">
        <div class="flex flex-col md:flex-row justify-between items-start mb-12 sm:mb-16 md:mb-24 gap-8 md:gap-12">
          <div class="max-w-xl">
            <span data-reveal="up" class="text-[10px] sm:text-xs tracking-[0.4em] text-[#5f5e5d] font-label uppercase mb-3 sm:mb-4 block">Section 01</span>
            <h2 data-reveal="up" data-delay="100" class="serif-display text-3xl sm:text-4xl md:text-5xl text-[#334537] leading-tight">时间之重</h2>
            <p data-reveal="up" data-delay="200" class="mt-4 sm:mt-6 text-[#5f5e5d] text-sm tracking-wide">不违农时，不掠地力。我们记录从种子苏醒到成熟采撷的每一个365天。</p>
          </div>
          <div class="w-full md:w-auto text-left md:text-right" data-reveal="up" data-delay="100">
            <span class="serif-display text-5xl sm:text-6xl md:text-8xl text-[#334537]/10">
              <span data-count="3600" data-suffix="+">3,600+</span>
            </span>
            <p class="text-[10px] tracking-[0.2em] uppercase text-[#5f5e5d] mt-1">Hours of Sunlight per Cycle</p>
          </div>
        </div>
        <!-- 移动端：纵向卡片；md+：横向滚动时间轴 -->
        <div class="hidden md:block relative py-12 md:py-20 overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div class="flex min-w-[1000px] gap-24 items-end">
            <div v-for="s in seasons" :key="'d-'+s.season" class="flex-shrink-0 w-64 group">
              <div class="h-[1px] bg-[#c3c8c1] w-full mb-12 relative">
                <div class="absolute left-0 -top-1 w-2 h-2 bg-[#334537] group-hover:scale-150 transition-transform"></div>
              </div>
              <span class="text-[10px] tracking-widest text-[#5f5e5d] uppercase font-label">{{ s.season }}</span>
              <h4 class="serif-display text-xl mt-2 mb-4 text-[#334537]">{{ s.title }}</h4>
              <div class="aspect-square bg-[#fbf9f4] mb-4">
                <img :src="s.img" :alt="s.alt" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <p class="text-xs text-[#5f5e5d] leading-relaxed">{{ s.desc }}</p>
            </div>
          </div>
        </div>
        <div class="md:hidden flex flex-col gap-12 py-4">
          <div v-for="s in seasons" :key="'m-'+s.season" class="group border-t border-[#c3c8c1] pt-8 first:border-t-0 first:pt-0">
            <div class="h-[1px] bg-[#c3c8c1] w-full mb-8 relative">
              <div class="absolute left-0 -top-1 w-2 h-2 bg-[#334537]"></div>
            </div>
            <span class="text-[10px] tracking-widest text-[#5f5e5d] uppercase font-label">{{ s.season }}</span>
            <h4 class="serif-display text-lg mt-2 mb-4 text-[#334537]">{{ s.title }}</h4>
            <div class="aspect-[5/4] sm:aspect-square bg-[#fbf9f4] mb-4 max-w-md">
              <img :src="s.img" :alt="s.alt" class="w-full h-full object-cover grayscale-0 sm:grayscale transition-all duration-700" />
            </div>
            <p class="text-xs text-[#5f5e5d] leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 全程可视 -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 py-16 sm:py-24 md:py-40 bg-[#fbf9f4] overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <!-- Bento Grid -->
          <div class="order-2 md:order-1 min-w-0">
            <div class="grid grid-cols-6 grid-rows-6 gap-2 sm:gap-4 h-[min(72vh,560px)] sm:h-[min(70vh,600px)] md:h-[600px]">
              <div class="col-span-4 row-span-4 bg-[#e4e2dd] overflow-hidden">
                <img class="w-full h-full object-cover"
                  src="assets/img/client-cilantro-harvest.jpg"
                  alt="田间传感器" />
              </div>
              <div class="col-span-2 row-span-3 bg-[#4a5d4e] flex flex-col justify-center p-4 sm:p-8 text-white min-h-0">
                <span class="material-symbols-outlined text-3xl sm:text-4xl mb-2 sm:mb-4">qr_code_2</span>
                <h5 class="text-base sm:text-lg serif-display">一物一码</h5>
                <p class="text-[10px] mt-2 opacity-70 tracking-widest leading-relaxed">Unique Identity Tracking System</p>
              </div>
              <div class="col-span-2 row-span-3 bg-[#eae8e3] overflow-hidden">
                <img class="w-full h-full object-cover"
                  src="assets/img/client-garden-rows.jpg"
                  alt="梯田鸟瞰" />
              </div>
              <div class="col-span-4 row-span-2 border border-[#c3c8c1]/15 flex items-center px-4 sm:px-8 gap-4 sm:gap-8 min-h-0">
                <div class="flex-1 min-w-0">
                  <div class="text-[10px] text-[#5f5e5d] uppercase tracking-[0.2em] mb-1">Real-time Data</div>
                  <div class="h-1 bg-[#f5f3ee] w-full relative">
                    <div class="absolute top-0 left-0 h-full bg-[#334537] w-[78%]"></div>
                  </div>
                </div>
                <div class="text-xl sm:text-2xl serif-display text-[#334537] shrink-0">
                  <span data-count="78" data-suffix="%">78%</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Text -->
          <div class="order-1 md:order-2 min-w-0">
            <span data-reveal="up" class="text-[10px] sm:text-xs tracking-[0.4em] text-[#5f5e5d] font-label uppercase mb-3 sm:mb-4 block">Section 02</span>
            <h2 data-reveal="up" data-delay="100" class="serif-display text-3xl sm:text-4xl md:text-5xl text-[#334537] leading-tight mb-6 sm:mb-8">全程可视<br/>纪录每一帧纯净</h2>
            <p data-reveal="up" data-delay="200" class="text-[#5f5e5d] text-sm leading-relaxed mb-8 sm:mb-12 tracking-wide">我们不仅是在种养，更是在编写一部关于信任的日志。从地理坐标定位、土壤成分分析到24小时高清影像监测，所有数据实时同步，让透明成为奢华的底色。</p>
            <ul class="space-y-8 sm:space-y-12">
              <li v-for="item in traceItems" :key="item.num" class="flex items-start gap-4 sm:gap-6 group">
                <div class="w-12 h-12 flex items-center justify-center border border-[#c3c8c1]/30 text-[#334537] group-hover:bg-[#334537] group-hover:text-white transition-all duration-500 shrink-0">{{ item.num }}</div>
                <div>
                  <h6 class="font-bold text-sm tracking-widest uppercase mb-1">{{ item.title }}</h6>
                  <p class="text-xs text-[#5f5e5d] leading-relaxed">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 山泉野趣 -->
      <section class="px-4 sm:px-6 md:px-10 lg:px-12 py-16 sm:py-24 md:py-32 bg-[#1b1c19] text-[#fbf9f4]">
        <div class="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24 px-1">
          <span class="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.5em] opacity-40 font-label uppercase mb-4 sm:mb-6 block">Section 03</span>
          <h2 class="serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-8">山泉野趣，天生地养</h2>
          <p class="text-xs sm:text-sm opacity-60 max-w-xl mx-auto tracking-wider sm:tracking-widest leading-relaxed">最好的技术是对自然的零干预。我们的产地均选址于远离尘嚣的原始水系旁，引用富矿山泉水灌溉，以天地之气滋养万物。</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800/20">
          <div v-for="item in naturalItems" :key="item.title" class="group relative overflow-hidden bg-stone-900 aspect-[4/5] sm:aspect-[3/4]">
            <img :src="item.img" :alt="item.alt" class="w-full h-full object-cover opacity-80 sm:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" />
            <div class="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end bg-gradient-to-t from-stone-950 to-transparent">
              <h4 class="serif-display text-xl sm:text-2xl mb-2 sm:mb-4">{{ item.title }}</h4>
              <p class="text-xs opacity-50 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 溯源验证 -->
      <section class="py-16 sm:py-24 md:py-40 px-4 sm:px-6 text-center">
        <div class="max-w-2xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-8 border border-[#c3c8c1]/20 relative">
          <div class="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#fbf9f4] px-4 sm:px-6 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.4em] text-[#5f5e5d] uppercase font-label whitespace-nowrap max-w-[90vw]">Traceability Search</div>
          <h3 class="serif-display text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-[#334537]">验证您的溯源档案</h3>
          <div class="max-w-sm mx-auto flex items-center border-b border-[#334537]/30 pb-2 gap-2">
            <input
              v-model="traceCode"
              class="w-full min-w-0 bg-transparent border-none focus:ring-0 text-sm tracking-wider placeholder-[#5f5e5d]/40 font-label outline-none"
              placeholder="输入溯源码以查看生长纪录"
              type="text"
              autocomplete="off"
            />
            <button type="button" class="text-[#334537] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0 hover:translate-x-1 transition-transform" aria-label="提交">
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <p class="mt-6 text-[10px] text-[#5f5e5d]/60 tracking-widest px-2">每一份来自在水一方的馈赠，都拥有其独一无二的身世。</p>
        </div>
      </section>
    </main>
  `,
  data() {
    return {
      traceCode: '',
      seasons: [
        {
          season: 'Spring / 惊蛰', title: '唤醒萌发',
          img: 'assets/img/client-cilantro-patch.jpg',
          alt: '深山腐殖土壤', desc: '严选非转基因原种，在深山腐殖土中静待第一次破土。',
        },
        {
          season: 'Summer / 小暑', title: '野性生长',
          img: 'assets/img/client-vine-harvest.jpg',
          alt: '雨滴滑落叶脉', desc: '遵循自然农法，无人工干预，吸收高海拔充足的紫外线。',
        },
        {
          season: 'Autumn / 秋分', title: '丰盈积累',
          img: 'assets/img/client-carrot-bunch.jpg',
          alt: '夕阳余晖成熟果实', desc: '昼夜温差带来的糖分沉积，赋予食材无与伦比的深沉风味。',
        },
        {
          season: 'Winter / 大雪', title: '敛藏之味',
          img: 'assets/img/client-cabbage-field.jpg',
          alt: '枯木霜晶微距', desc: '在寒冷中沉淀精华，完成最后一次风味的蜕变与凝练。',
        },
      ],
      traceItems: [
        { num: '01', title: '环境监测系统', desc: '动态监测水源、土壤及空气质量，确保生长环境始终处于特级标准。' },
        { num: '02', title: '数字化生长日志', desc: '记录每一株作物的关键生长期，建立完整的数字化档案，随时查阅。' },
      ],
      naturalItems: [
        {
          title: '活水之源', desc: '取自海拔1800米以上的深山活泉，天然弱碱，赋予食材灵动之气。',
          img: 'assets/img/client-geese-river.jpg',
          alt: '山泉水流青苔',
        },
        {
          title: '原生厚土', desc: '十年未曾耕种的原始净土，富含腐殖质与微量元素，是食材生长的摇篮。',
          img: 'assets/img/client-field-tilling.jpg',
          alt: '森林地面绿苔',
        },
        {
          title: '林间气象', desc: '负氧离子含量极高的山林环境，天然屏障阻隔外界污染，让每一次生长都纯净无瑕。',
          img: 'assets/img/client-goat-pen.jpg',
          alt: '晨雾松林山坡',
        },
      ],
    }
  },
}
