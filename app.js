// Main Application Logic for Adarsh Kashyap Portfolio

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PortfolioData;
  if (!data) {
    console.error("PortfolioData not loaded.");
    return;
  }

  // 1. Initialize Splash Screen Dismissal
  initSplash();

  // 2. Initialize Navigation & Mobile Drawer
  initNavbar();

  // 3. Render App Showcase & Filters
  renderAppShowcase(data.appsShowcase);

  // 4. Initialize App Detail Modal
  initAppModal(data.appsShowcase);

  // 5. Initialize Audio Player Demo (SangeetStream)
  initAudioPlayer(data.demoTracks);

  // 6. Initialize Attached Card Tabs Click Handler
  initAttachedCardTabs();
});

// Splash Screen Control
function initSplash() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  setTimeout(() => {
    splash.classList.add('splash-fade');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }, 1800);
}

// Mobile Menu Navigation
function initNavbar() {
  const hamburger = document.getElementById('hamburger-btn') || document.getElementById('mobile-menu-toggle') || document.querySelector('.hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// Attached Card Tabs Click Handler
function initAttachedCardTabs() {
  const tabs = document.querySelectorAll('.card-attached-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const parentCard = tab.closest('.project-block-stacked');
      if (parentCard) {
        parentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

// Render App Showcase
function renderAppShowcase(apps) {
  const grid = document.getElementById('apps-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || !apps || !apps.length) return;

  function displayApps(filterCategory = 'all') {
    const filtered = filterCategory === 'all' 
      ? apps 
      : apps.filter(app => app.category === filterCategory);

    grid.innerHTML = filtered.map((app) => {
      const coverImg = app.previewImages && app.previewImages.length > 0 ? app.previewImages[0] : null;

      return `
        <article class="app-card tilt-card reveal-on-scroll in-view" data-app-id="${app.id}">
          <div class="app-card-header">
            <span class="app-badge" style="background-color: ${app.badgeBg}">${app.badge}</span>
            <span class="app-device-tag">📱 Device Preview</span>
          </div>
          <div class="app-mockup-frame">
            <div class="iphone-screen">
              <div class="iphone-notch"></div>
              <div class="app-screen-content">
                ${coverImg ? `
                  <img src="${coverImg}" alt="${app.name} Screenshot" class="iphone-screenshot-img" loading="lazy">
                ` : `
                  <div class="app-placeholder-graphic">
                    <span class="app-icon-symbol"></span>
                    <h3>${app.name}</h3>
                    <p>${app.shortDesc}</p>
                  </div>
                `}
              </div>
            </div>
          </div>
          <div class="app-card-body">
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.4rem;">${app.name}</h3>
            <p class="app-desc">${app.shortDesc}</p>
            <div class="app-tech-pills">
              ${app.techStack.slice(0, 3).map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
            </div>
            <button class="btn-app-details" data-id="${app.id}">
              Inspect Screenshots & Features &rarr;
            </button>
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll('.btn-app-details, .app-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const appId = btn.getAttribute('data-app-id') || btn.getAttribute('data-id');
        openAppModal(appId, apps);
      });
    });
  }

  // Initial render
  displayApps('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      displayApps(category);
    });
  });
}

// App Modal Controller using Native <dialog>
function initAppModal(apps) {
  const dialog = document.getElementById('app-dialog');
  const closeBtn = document.getElementById('dialog-close-btn');

  if (!dialog) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  }

  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      dialog.close();
    }
  });
}

function openAppModal(appId, apps) {
  const app = apps.find(a => a.id === appId);
  const dialog = document.getElementById('app-dialog');
  if (!app || !dialog) return;

  document.getElementById('dialog-title').innerText = app.name;
  document.getElementById('dialog-badge').innerText = app.badge;
  document.getElementById('dialog-badge').style.backgroundColor = app.badgeBg;
  document.getElementById('dialog-desc').innerText = app.fullDesc;

  const galleryContainer = document.getElementById('dialog-gallery');
  if (galleryContainer) {
    if (app.previewImages && app.previewImages.length > 0) {
      galleryContainer.innerHTML = `
        <h4 style="font-family: var(--font-mono); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem;">App Screenshots Gallery:</h4>
        <div class="modal-screenshots-scroll">
          ${app.previewImages.map((imgSrc, i) => `
            <div class="modal-iphone-frame">
              <div class="iphone-notch"></div>
              <img src="${imgSrc}" alt="${app.name} Screen ${i+1}" class="modal-screenshot-img">
            </div>
          `).join('')}
        </div>
      `;
    } else {
      galleryContainer.innerHTML = '';
    }
  }

  const techContainer = document.getElementById('dialog-tech');
  techContainer.innerHTML = app.techStack.map(t => `<span class="tech-pill-lg">${t}</span>`).join('');

  const linksContainer = document.getElementById('dialog-links');
  let linksHTML = '';
  if (app.github) {
    linksHTML += `<a href="${app.github}" target="_blank" class="btn-artsy btn-artsy-primary">View GitHub Repository 🐙</a>`;
  }
  if (app.liveUrl) {
    linksHTML += `<a href="${app.liveUrl}" target="_blank" class="btn-artsy btn-artsy-secondary">Open Live Site 🚀</a>`;
  }
  linksContainer.innerHTML = linksHTML;

  dialog.showModal();
}

// SangeetStream Audio Player Demo Widget
function initAudioPlayer(tracks) {
  const audio = new Audio();
  let currentTrackIndex = 0;
  let isPlaying = false;

  const playPauseBtn = document.getElementById('player-play-btn');
  const prevBtn = document.getElementById('player-prev-btn');
  const nextBtn = document.getElementById('player-next-btn');
  const titleEl = document.getElementById('player-track-title');
  const artistEl = document.getElementById('player-track-artist');
  const progressBar = document.getElementById('player-progress');
  const currentTimeEl = document.getElementById('player-time-current');
  const durationEl = document.getElementById('player-time-duration');

  if (!playPauseBtn) return;

  function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    audio.src = track.src;
    if (titleEl) titleEl.innerText = track.title;
    if (artistEl) artistEl.innerText = track.artist;
    if (progressBar) progressBar.value = 0;
  }

  function togglePlay() {
    if (!audio.src) loadTrack(0);
    
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      playPauseBtn.innerHTML = '▶';
    } else {
      audio.play().then(() => {
        isPlaying = true;
        playPauseBtn.innerHTML = '⏸';
      }).catch(err => console.log("Audio play error:", err));
    }
  }

  playPauseBtn.addEventListener('click', togglePlay);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
      loadTrack(currentTrackIndex);
      if (isPlaying) audio.play();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
      loadTrack(currentTrackIndex);
      if (isPlaying) audio.play();
    });
  }

  audio.addEventListener('timeupdate', () => {
    if (audio.duration && progressBar) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progressPercent;
      
      const currMins = Math.floor(audio.currentTime / 60);
      const currSecs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
      const durMins = Math.floor(audio.duration / 60);
      const durSecs = Math.floor(audio.duration % 60).toString().padStart(2, '0');
      
      if (currentTimeEl) currentTimeEl.innerText = `${currMins}:${currSecs}`;
      if (durationEl) durationEl.innerText = `${durMins}:${durSecs}`;
    }
  });

  if (progressBar) {
    progressBar.addEventListener('input', () => {
      if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
      }
    });
  }

  loadTrack(0);
}
