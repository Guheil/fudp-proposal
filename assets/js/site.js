(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  const updateHeader = () => {
    if (!header || header.classList.contains('force-solid')) return;
    header.classList.toggle('is-solid', window.scrollY > 48);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuToggle?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('is-open') ?? false;
    document.body.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const cravingButtons = [...document.querySelectorAll('.craving-button')];
  const cravingImage = document.querySelector('#craving-image');
  const cravingTitle = document.querySelector('#craving-title');
  const cravingNote = document.querySelector('#craving-note');

  const activateCraving = (button) => {
    if (!button || !cravingImage) return;
    cravingButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    cravingImage.style.opacity = '0';
    window.setTimeout(() => {
      cravingImage.src = button.dataset.image || cravingImage.src;
      cravingImage.alt = button.dataset.alt || '';
      if (cravingTitle) cravingTitle.textContent = button.dataset.title || '';
      if (cravingNote) cravingNote.textContent = button.dataset.note || '';
      cravingImage.style.opacity = '1';
    }, 150);
  };

  cravingButtons.forEach((button) => {
    ['mouseenter', 'focus', 'click'].forEach((eventName) => {
      button.addEventListener(eventName, () => activateCraving(button));
    });
  });

  const preview = document.querySelector('.vendor-preview');
  const vendorRows = [...document.querySelectorAll('[data-preview]')];
  if (preview && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      preview.style.left = `${event.clientX}px`;
      preview.style.top = `${event.clientY}px`;
    }, { passive: true });

    vendorRows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        preview.src = row.dataset.preview;
        preview.alt = row.dataset.previewAlt || '';
        preview.classList.add('is-visible');
      });
      row.addEventListener('mouseleave', () => preview.classList.remove('is-visible'));
    });
  }


  const inquiryForm = document.querySelector('[data-event-inquiry-form]');
  if (inquiryForm) {
    const preparedWrap = inquiryForm.querySelector('[data-prepared-inquiry]');
    const preparedMessage = inquiryForm.querySelector('[data-prepared-message]');
    const formStatus = inquiryForm.querySelector('[data-form-status]');

    inquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(inquiryForm);
      const categories = data.getAll('categories');
      const message = [
        'Event inquiry for Elyu\'s Food Park',
        '',
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Contact number: ${data.get('phone') || ''}`,
        `Event type: ${data.get('eventType') || ''}`,
        `Event date: ${data.get('eventDate') || ''}`,
        `Event location: ${data.get('eventLocation') || ''}`,
        `Number of stalls needed: ${data.get('stalls') || ''}`,
        `Preferred food categories: ${categories.length ? categories.join(', ') : 'Not specified'}`,
        '',
        'Notes / special requests:',
        data.get('notes') || 'None yet.'
      ].join('\n');

      if (preparedMessage) preparedMessage.value = message;
      if (preparedWrap) preparedWrap.hidden = false;

      try {
        await navigator.clipboard?.writeText(message);
        if (formStatus) formStatus.textContent = 'Message prepared and copied. Paste it into the official Facebook page to send.';
      } catch (error) {
        if (formStatus) formStatus.textContent = 'Message prepared. Copy it and send it to the official Facebook page.';
      }

      preparedMessage?.focus();
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !window.gsap || !window.ScrollTrigger) {
    reveals.forEach((element) => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    });
    document.querySelector('.intro-curtain')?.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const curtain = document.querySelector('.intro-curtain');
  if (curtain) {
    if (sessionStorage.getItem('elyus-modern-intro')) {
      curtain.remove();
    } else {
      sessionStorage.setItem('elyus-modern-intro', '1');
      gsap.timeline({ defaults: { ease: 'power4.inOut' } })
        .from('.intro-curtain p', { y: 70, opacity: 0, duration: .65 })
        .to('.intro-curtain p', { y: -30, opacity: 0, duration: .4, delay: .25 })
        .to(curtain, { yPercent: -100, duration: .82 })
        .set(curtain, { display: 'none' });
    }
  }

  gsap.from('.hero h1 span > *, .page-hero h1', {
    yPercent: 110,
    opacity: 0,
    stagger: .09,
    duration: 1.05,
    delay: .15,
    ease: 'power4.out'
  });
  gsap.from('.hero-side, .page-hero p', {
    y: 30,
    opacity: 0,
    duration: .8,
    delay: .52,
    ease: 'power3.out'
  });

  document.querySelectorAll('.hero-media img, .page-hero-media img').forEach((image) => {
    const section = image.closest('.hero, .page-hero');
    gsap.to(image, {
      yPercent: 11,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true }
    });
  });

  reveals.forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: .85,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 84%', once: true }
    });
  });

  document.querySelectorAll('.food-story-image, .editorial-image, .map-frame').forEach((frame) => {
    gsap.from(frame, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.15,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: frame, start: 'top 82%', once: true }
    });
    const image = frame.querySelector('img');
    if (image) {
      gsap.to(image, {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }
  });

  document.querySelectorAll('.vendor-row, .menu-category, .event-row').forEach((row) => {
    gsap.from(row, {
      y: 24,
      opacity: 0,
      duration: .7,
      ease: 'power3.out',
      scrollTrigger: { trigger: row, start: 'top 90%', once: true }
    });
  });

  const fullBleedImage = document.querySelector('.full-bleed > img');
  if (fullBleedImage) {
    gsap.to(fullBleedImage, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: { trigger: '.full-bleed', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  const nightSection = document.querySelector('.night-story');
  const nightSteps = [...document.querySelectorAll('.night-step')];
  const timeDisplay = document.querySelector('.night-time');

  if (nightSection && nightSteps.length) {
    const setActiveStep = (index) => {
      nightSteps.forEach((step, stepIndex) => {
        const active = stepIndex === index;
        step.classList.toggle('is-active', active);
        gsap.to(step, {
          autoAlpha: active ? 1 : 0,
          y: active ? '-50%' : '-46%',
          duration: .42,
          overwrite: true,
          ease: 'power2.out'
        });
      });
      if (timeDisplay) timeDisplay.textContent = nightSteps[index].dataset.time || '';
    };

    setActiveStep(0);
    ScrollTrigger.create({
      trigger: nightSection,
      start: 'top top',
      end: () => `+=${window.innerHeight * 3.2}`,
      pin: window.innerWidth > 980,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const index = Math.min(nightSteps.length - 1, Math.floor(self.progress * nightSteps.length));
        setActiveStep(index);
      }
    });
  }
})();
