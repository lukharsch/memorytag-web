<template>
  <div class="onepager">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-grid">
          <div class="hero-left">
            <img src="/logo.svg" alt="MemoryTag Logo" class="logo" />
            <h1 class="hero-title">MemoryTag</h1>
            <p class="subtitle">
              Effortlessly tag, find, and relive your memories.<br />Minimal. Magical.
            </p>
            <IconButton
              icon="arrow-right"
              text="Get Started"
              color="blue"
              variant="filled"
              class="hero-btn"
              @click="scrollToSection('features')"
            />
          </div>
          <div class="hero-right">
            <img src="https://picsum.photos/300/300" alt="MemoryTag Example" class="memorytag-img" />
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToSection('features')">
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M16 22l-8-8h16z" fill="#fff"/></svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="section-overline">FEATURES</div>
      <h2>Features</h2>
      <div class="feature-list">
        <div class="feature-card">
          <img src="https://picsum.photos/300/200" alt="Feature 1" />
          <h3>Easy Tagging</h3>
          <p>Tag memories instantly with a single tap.</p>
        </div>
        <div class="feature-card">
          <img src="https://picsum.photos/300/200" alt="Feature 2" />
          <h3>Smart Search</h3>
          <p>Find memories in seconds with intelligent search.</p>
        </div>
        <div class="feature-card">
          <img src="https://picsum.photos/300/200" alt="Feature 3" />
          <h3>Cloud Sync</h3>
          <p>Access your tags anywhere, anytime.</p>
        </div>
      </div>
    </section>

    <!-- How To Section -->
    <section class="howto">
      <div class="section-overline">HOW TO</div>
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step-card">
          <img src="https://picsum.photos/200/300" alt="Step 1" />
          <h4>Create a Tag</h4>
          <p>Start by creating a tag for your memory.</p>
        </div>
        <div class="step-card">
          <img src="https://picsum.photos/200/300" alt="Step 2" />
          <h4>Attach to Memory</h4>
          <p>Link your tag to any photo, note, or file.</p>
        </div>
        <div class="step-card">
          <img src="https://picsum.photos/200/300" alt="Step 3" />
          <h4>Find Anytime</h4>
          <p>Recall your memories instantly, whenever you need.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="section-overline">START</div>
      <h2>Ready to get started?</h2>
      <IconButton
        icon="check"
        text="Sign Up Now"
        color="green"
        variant="filled"
        @click="onSignUp"
      />
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="section-overline">DAS TEAM</div>
      <h2 class="team-title">Meet Our Team</h2>
      <div class="team-list">
        <div class="team-member">
          <img src="https://picsum.photos/120/120?1" alt="Team Member 1" class="team-avatar" />
          <div class="team-name">Alex</div>
          <div class="team-desc">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
        <div class="team-member">
          <img src="https://picsum.photos/120/120?2" alt="Team Member 2" class="team-avatar" />
          <div class="team-name">Jamie</div>
          <div class="team-desc">Sed do eiusmod tempor incididunt ut labore.</div>
        </div>
        <div class="team-member">
          <img src="https://picsum.photos/120/120?3" alt="Team Member 3" class="team-avatar" />
          <div class="team-name">Taylor</div>
          <div class="team-desc">Ut enim ad minim veniam, quis nostrud.</div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <span>&copy; 2025 MemoryTag. All rights reserved.</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import IconButton from "../components/IconButton.vue";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const onSignUp = () => {
  // Placeholder for sign up action
  alert("Sign up coming soon!");
};
</script>

<style>
:root {
  --primary-color: #0771b3;
  --secondary-color: #34495e;
  --background-color: #ffffff;
  --surface-color: #ffffff;
  --background-color-darker: #dcdcdc;
  --text-color: #2c3e50;
  --text-color-inverted: #e3f1ff;
  --border-color: #cdcdcd;
  --error-text-color: red;
  --icon-filter: brightness(0) saturate(100%);
  --skeleton-gradient: linear-gradient(
      90deg,
      #f0f0f0 0%,
      #e0e0e0 50%,
      #f0f0f0 100%
  );
  --logo-pill-background: rgba(255, 255, 255, 0.4);
  --logo-pill-box-shadow: inset 0 0px 8px 3px rgba(220, 220, 220, 0.3);
  --navigation-container-box-shadow: 0px 15px 15px 1px rgb(0 0 0 / 30%);
}

[data-theme="dark"] {
  --primary-color: #0b8bdc;
  --secondary-color: #e3f1ff;
  --background-color: #202020;
  --surface-color: #202020;
  --background-color-darker: #121212;
  --text-color: #e3f1ff;
  --text-color-inverted: #2c3e50;
  --border-color: #5c5c5c;
  --icon-filter: brightness(0) saturate(100%) invert(96%) sepia(38%)
  saturate(0%) hue-rotate(298deg) brightness(108%) contrast(101%);
  --skeleton-gradient: linear-gradient(
      90deg,
      #555555 0%,
      #2c2c2c 50%,
      #555555 100%
  );
  --logo-pill-background: rgba(0, 0, 0, 0.2);
  --logo-pill-box-shadow: inset 0 0px 8px 3px rgb(37 37 37 / 30%);
  --navigation-container-box-shadow: 0px 15px 15px 1px rgb(0 0 0 / 82%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: var(--background-color);
}

body {
  font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.onepager {
  font-family: 'SF Pro Display', 'Inter', Arial, sans-serif;
  background: #f8f9fa;
  color: #222;
  min-height: 100vh;
}
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
  z-index: 1;
  opacity: 0.9;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.hero-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}
.hero-left {
  flex: 1 1 320px;
  text-align: left;
  min-width: 320px;
}
.hero-right {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 120px;
  margin-bottom: 2rem;
  filter: drop-shadow(0 2px 16px rgba(0,0,0,0.08));
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}
.subtitle {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
}
.hero-btn {
  margin-top: 1.5rem;
  transition: transform 0.2s;
}
.hero-btn:hover {
  transform: scale(1.05);
}
.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(12px) translateX(-50%); }
}
.features {
  padding: 6rem 2rem 4rem;
  background: #fff;
  text-align: center;
}
.feature-list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.feature-card {
  background: #f4f6fb;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  width: 300px;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feature-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transform: translateY(-4px) scale(1.03);
}
.feature-card img {
  border-radius: 16px;
  margin-bottom: 1rem;
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.howto {
  padding: 6rem 2rem 4rem;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
  text-align: center;
}
.steps {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.step-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  width: 240px;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transform: translateY(-4px) scale(1.03);
}
.step-card img {
  border-radius: 16px;
  margin-bottom: 1rem;
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.cta {
  padding: 5rem 2rem 3rem;
  background: #fff;
  text-align: center;
}
.team {
  background: #fff;
  padding: 6rem 2rem 4rem;
  text-align: center;
}

.team-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: -0.5px;
}
.team-list {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
}
.team-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin-bottom: 1.2rem;
}
.team-name {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.team-desc {
  font-size: 0.98rem;
  color: #666;
}
.footer {
  background: #f4f6fb;
  color: #888;
  text-align: center;
  padding: 2rem 0 1rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
}
.section-overline {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #7a7a7a;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
@media (max-width: 900px) {
  .feature-list, .steps {
    flex-direction: column;
    align-items: center;
  }
  .hero-grid {
    flex-direction: column;
    gap: 2rem;
  }
  .hero-left, .hero-right {
    text-align: center;
    justify-content: center;
  }
  .team-list {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
</style>