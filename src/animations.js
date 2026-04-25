/* ============================================================
   在水一方 — 高级交互动画系统
   ============================================================ */

;(function () {
  'use strict'

  /* ── 1. 自定义光标 ─────────────────────────────────────── */
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return // 跳过触屏
    const cursor = document.createElement('div')
    cursor.id = 'site-cursor'
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>'
    document.body.appendChild(cursor)

    const dot  = cursor.querySelector('.cursor-dot')
    const ring = cursor.querySelector('.cursor-ring')
    let rx = 0, ry = 0, mx = 0, my = 0

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })

    // ring 用 lerp 跟随，dot 立即到位
    function loop() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.transform  = `translate(${mx}px,${my}px)`
      ring.style.transform = `translate(${rx}px,${ry}px)`
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)

    // hover 放大
    document.addEventListener('mouseover', e => {
      const t = e.target.closest('a,button,[data-cursor-grow]')
      if (t) ring.classList.add('is-hover')
    })
    document.addEventListener('mouseout', e => {
      const t = e.target.closest('a,button,[data-cursor-grow]')
      if (t) ring.classList.remove('is-hover')
    })

    document.addEventListener('mousedown', () => ring.classList.add('is-click'))
    document.addEventListener('mouseup',   () => ring.classList.remove('is-click'))
  }

  /* ── 2. Navbar 滚动变态 ─────────────────────────────────── */
  function initNavbarScroll() {
    const update = () => {
      const nav = document.querySelector('nav')
      if (!nav) return
      if (window.scrollY > 60) {
        nav.classList.add('nav-scrolled')
      } else {
        nav.classList.remove('nav-scrolled')
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
  }

  /* ── 3. Scroll Reveal（Intersection Observer）─────────────── */
  function initScrollReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el  = entry.target
        const delay = el.dataset.delay || 0
        setTimeout(() => el.classList.add('is-visible'), Number(delay))
        io.unobserve(el)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    function attach() {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.add('reveal-init')
        const variant = el.dataset.reveal || 'up'
        el.classList.add('reveal-' + variant)
        io.observe(el)
      })
    }
    attach()

    // 路由切换后重新挂载（Vue Router 换页时 DOM 更新）
    window.__revealAttach = attach
  }

  /* ── 4. 数字滚动计数器 ──────────────────────────────────── */
  function initCounters() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el  = entry.target
        const target = parseFloat(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        const prefix = el.dataset.prefix || ''
        const duration = 1800
        const start = performance.now()
        const startVal = 0

        function tick(now) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // easeOutQuart
          const eased = 1 - Math.pow(1 - progress, 4)
          const val = startVal + (target - startVal) * eased
          const display = target % 1 === 0 ? Math.round(val).toLocaleString() : val.toFixed(1)
          el.textContent = prefix + display + suffix
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.unobserve(el)
      })
    }, { threshold: 0.5 })

    function attachCounters() {
      document.querySelectorAll('[data-count]').forEach(el => io.observe(el))
    }
    attachCounters()
    window.__counterAttach = attachCounters
  }

  /* ── 5. Hero 视差 ───────────────────────────────────────── */
  function initParallax() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (reduceMotion || isMobile) return // 移动端关闭视差，避免卡顿与地址栏跳动

    function update() {
      const targets = document.querySelectorAll('[data-parallax]')
      const sy = window.scrollY
      targets.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.35
        el.style.transform = `translateY(${sy * speed}px) scale(1.08)`
      })
    }
    window.addEventListener('scroll', update, { passive: true })
  }

  /* ── 6. 图片 clip-path reveal ───────────────────────────── */
  function initImageReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('img-revealed')
        io.unobserve(entry.target)
      })
    }, { threshold: 0.15 })

    function attach() {
      document.querySelectorAll('[data-img-reveal]').forEach(el => {
        el.classList.add('img-reveal-init')
        io.observe(el)
      })
    }
    attach()
    window.__imgRevealAttach = attach
  }

  /* ── 7. 路由变化后重新挂载所有动画 ──────────────────────── */
  function watchRouteChange() {
    let debounceTimer = null

    function reinit() {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        if (window.__revealAttach)    window.__revealAttach()
        if (window.__counterAttach)   window.__counterAttach()
        if (window.__imgRevealAttach) window.__imgRevealAttach()
        initNavbarScroll()
      }, 120)
    }

    // subtree: true 确保能捕获 Vue Router 在深层替换组件的变化
    const mo = new MutationObserver(reinit)
    const app = document.getElementById('app')
    if (app) mo.observe(app, { childList: true, subtree: true })
  }

  /* ── 初始化 ──────────────────────────────────────────────── */
  function init() {
    initCursor()
    initNavbarScroll()
    initScrollReveal()
    initCounters()
    initParallax()
    initImageReveal()
    watchRouteChange()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
