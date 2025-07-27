---
layout: default
title: Homepage
---

<style>
    @media (min-width: 767.98px) {
      .desktop-padding {
        padding-top: 100px !important;
      }
    }
  </style>

<article class="desktop-padding">
  <section class="creative-hero__container container container--size-large">
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
  </section>
  {% include the-books.html %}
</article>