---
layout: default
title: About
---

<article class="desktop-padding">
  <section style="padding-top: 10em;">
    <div class="about-section__container container container--size-large">
      <div class="row g-0">
        <div class="about-section__main col-12 col-md-6 order-1">
          <h2 class="about-section__title" data-aos="fade-up">ABOUT</h2>
          <div class="about-section__wrapper">
            <div class="about-section__text" data-aos="fade-up">{{ site.description }}</div>
            <a class="about-section__more arrow-link" href="/contact/" data-aos="fade-up">
              <span class="arrow-link__text">CONTACT</span>
              <span class="arrow-link__icon">
                <svg width="75" height="75"><use xlink:href="#link-arrow"></use></svg>
              </span>
            </a>
          </div>
        </div>
        <div class="col-12 col-md-2">
        </div>
        <div class="about-section__aside col-12 col-md-4">
          <div class="about-section__image" data-aos="fade-up">
            <img src="/assets/img/logo/table-book-logo.png" alt="TABLE books pro Logo">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="about-section">
    <div class="about-section__container container container--size-large">
      <div class="row g-0">
        <div class="about-section__main col-12 col-md-6">
          <h2 class="about-section__title" data-aos="fade-up">ERIC FREEBURG<br><span style="font-size: .6em;">PRINTER</span></h2>
          <div class="about-section__wrapper">
            <div class="about-section__text" data-aos="fade-up">{{ site.about }}</div><br><br>
          </div>
        </div>
        <div class="about-section__aside col-md-6">
          <div class="about-section__image" data-aos="fade-up">
            <img src="/assets/img/founder/eric.jpg" alt="Team">
          </div>
        </div>
      </div>
    </div>
  </section>
  {% include the-books.html %}
</article>
