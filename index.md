---
layout: default
title: TABLE books pro
sitemap:
  priority: 0.9
---

<style>
    @media (min-width: 767.98px) {
      .desktop-padding {
        padding-top: 100px !important;
      }
    }
  </style>

<main>
  <article class="desktop-padding">
    <div class="creative-hero__container container container--size-large">
      <div class="row d-flex align-items-center col-md-4">
        <!-- Text Section -->
        <div class="col-6" data-aos="fade-right" data-aos-delay="0">
          <div class="services-section__text">
            <h2 class="creative-hero__title">
              <span style="display: inline-block; width: 50%;">OWN</span>
              <span style="display: inline-block; width: 50%;">THE</span>
              <span style="display: inline-block; width: 50%;">EDGE</span>
            </h2>
          </div> 
        </div> 
        <!-- Image Section -->
        <div class="col-6">
          <img src="{{ '/assets/img/logo/table-book-logo.png' | relative_url }}" style="max-width: 100%; height: auto;"
            class="img-fluid" alt="Table Book Logo">
        </div>
        <div class="row">
          <div class="col-12" style="padding-right: 0px;">
            <div class="single-project__hero-text" style="max-width: 100%; text-align: justify;" data-aos="fade-up"
              data-aos-delay="50">
              {{ site.description }}
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="col-md-8" style="height: 1px;"></div>
      <section class="portfolio-section container container--size-large portfolio-section--no-padding">
        <header class="portfolio-section__header row align-items-end">
          <div class="col-8 col-xl-6 offset-xl-2">
            <h2 class="portfolio-section__title">THE BOOKS</h2>
          </div>
          <div class="col-4 text-right">
            <a class="portfolio-section__more arrow-link" href="/books/">
              <span class="arrow-link__text">View All Books</span>
              <span class="arrow-link__icon">
                <svg width="75" height="75">
                  <use xlink:href="#link-arrow"></use>
                </svg>
              </span>
            </a>
          </div>
        </header>
        <ul class="portfolio-section__grid __js_portfolio-section-masonry">
          <li class="portfolio-section__item __js_masonry-item">
            <a class="project-preview project-preview--elastic project-preview--vertical" href="/books/american/">
              <span class="project-preview__image">
                <img src="{{ '/assets/img/american/american-coffee-table-book-1.png' | relative_url }}"
                  alt="American Coffee Table Book">
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
            <a class="project-preview project-preview--elastic project-preview--vertical" href="/books/bitcoin/">
              <span class="project-preview__image">
                <img src="{{ '/assets/img/bitcoin/bitcoin-coffee-table-book-1.png' | relative_url }}" alt="Bitcoin Coffee Table Book">
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
      <section class="tooltip tooltip--theme-light">
        <div class="tooltip__container container container--size-large">
          <div class="tooltip__section">
            <div class="tooltip__marquee __js-marquee">
              <div class="tooltip__list">
                <a class="tooltip__item animsition-link" href="/books/bitcoin/">Bitcoin Coffee Table Book</a>
                <a class="tooltip__item animsition-link" href="/books/american/">American Coffee Table Book</a>
                <a class="tooltip__item animsition-link" href="/books/sun/">SUN by D.H. Lawrence</a>
              </div>
            </div>
          </div>
          <div class="tooltip__section">
            <div class="tooltip__marquee __js-marquee--reverse">
              <div class="tooltip__list">
                <a class="tooltip__item animsition-link" href="/books/sun/">SUN by D.H. Lawrence</a>
                <a class="tooltip__item animsition-link" href="/books/bitcoin/">Bitcoin Coffee Table Book</a>
                <a class="tooltip__item animsition-link" href="/books/american/">American Coffee Table Book</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  </article>
</main>