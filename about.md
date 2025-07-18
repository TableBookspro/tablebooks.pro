---
layout: default
title: About
---


<main>
  <article class="desktop-padding">
    <section class="about-section">
      <div class="about-section__container container container--size-large">
        <div class="row g-0">
          <div class="about-section__main col-12 col-md-6 order-1">
            <h2 class="about-section__title" data-aos="fade-up">ABOUT</h2>
            <div class="about-section__wrapper">
              <div class="about-section__text" data-aos="fade-up">{{ site.about }}</div>
              <a class="about-section__more arrow-link" href="/contact/" data-aos="fade-up">
                <span class="arrow-link__text">CONTACT</span>
                <span class="arrow-link__icon">
                  <svg width="75" height="75">
                    <use xlink:href="#link-arrow"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div class="about-section__aside col-md-6">
            <div class="about-section__image" data-aos="fade-up">
              <img src="/assets/img/founder/eric.jpg" alt="Team">
            </div>
          </div>
          <div class="about-section__steps col-12 col-md-8 order-md-last">
            <ul class="about-section__list" data-aos="fade-up">
              <li class="about-section__item">
                <span>PUBLISHER: ERIC FREEBURG</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio-section container container--size-large">
      <header class="portfolio-section__header row align-items-end">
        <div class="col-8 col-xl-6 offset-xl-2">
          <h2 class="portfolio-section__title">THE BOOKS</h2>
        </div>
        <div class="col-4 text-right">
        </div>
      </header>
      <ul class="portfolio-section__grid __js_portfolio-section-masonry">
        <li class="portfolio-section__item __js_masonry-item">
          <a class="project-preview project-preview--elastic project-preview" href="/books/american/">
            <span class="project-preview__image">
              <img src="{{ '/assets/img/american/american-coffee-table-book-1.png' | relative_url }}" width="531"
                height="417" alt="American Coffee Table Book">
            </span>
            <span class="project-preview__bottom">
              <span class="project-preview__title">American Coffee Table Book</span>
              <span class="project-preview__icon">
                <svg width="24" height="23">
                  <use xlink:href="#link-arrow2"></use>
                </svg>
              </span>
            </span>
          </a>
        </li>
        <li class="portfolio-section__item __js_masonry-item">
          <a class="project-preview project-preview--elastic project-preview" href="/books/bitcoin/">
            <span class="project-preview__image">
              <img src="{{ '/assets/img/bitcoin/bitcoin-coffee-table-book-1.png' | relative_url }}" width="531"
                height="417" alt="Bitcoin Coffee Table Book">
            </span>
            <span class="project-preview__bottom">
              <span class="project-preview__title">Bitcoin Coffee Table Book</span>
              <span class="project-preview__icon">
                <svg width="24" height="23">
                  <use xlink:href="#link-arrow2"></use>
                </svg>
              </span>
            </span>
          </a>
        </li>
        <li class="portfolio-section__item __js_masonry-item">
          <a class="project-preview project-preview--elastic project-preview" href="/books/sun/">
            <span class="project-preview__image">
              <img src="{{ '/assets/img/american/american-coffee-table-book-2.jpg' | relative_url }}" width="531"
                height="417" alt="SUN by D.H. Lawrence">
            </span>
            <span class="project-preview__bottom">
              <span class="project-preview__title">SUN by D.H. Lawrence</span>
              <span class="project-preview__icon">
                <svg width="24" height="23">
                  <use xlink:href="#link-arrow2"></use>
                </svg>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  </article>
</main>