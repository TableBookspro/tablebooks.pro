---
layout: default
title: Contact
sitemap: true
---

<main>
    <article class="contact">
        <section class="contact-section">
            <div class="contact-section__container container container--size-large">
                <div class="row">
                    <div class="contact-section__main col-12 col-md">
                        <h2 class="contact-section__title" data-aos="fade-up">CONTACT</h2>
                        <div class="footer__title" style="padding-left: 60px;">Follow</div>
                        <ul class="footer__menu-list" style="padding-left: 60px;">
                            {% for social in site.data.social.items %}
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="{{ social.url }}">{{ social.name }}</a>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                    <div class="col-12 col-md">
                        <div class="discuss-project discuss-project--no-padding contact-section__aside">
                            <div class="discuss-project__wrapper" data-aos="fade-up">
                                <form action="#" method="post">
                                    <div class="row justify-content-between gx-0">
                                        <div class="discuss-project__field-wrapper col-12 col-md-6" data-aos="fade-up">
                                            <label class="discuss-project__field field">
                                                <input type="text" name="name">
                                                <span class="field__hint">Name</span>
                                            </label>
                                        </div>
                                        <div class="discuss-project__field-wrapper col-12 col-md-6" data-aos="fade-up">
                                            <label class="discuss-project__field field">
                                                <input type="email" name="email">
                                                <span class="field__hint">Email</span>
                                            </label>
                                        </div>
                                        <div class="col-12" data-aos="fade-up">
                                            <label
                                                class="discuss-project__field discuss-project__field--textarea field">
                                                <textarea name="message" required></textarea>
                                                <span class="field__hint">Message</span>
                                            </label>
                                        </div>
                                        <div class="discuss-project__bottom col-12">
                                            <div class="discuss-project__file file-upload" data-aos="fade-up">
                                                <label class="file-upload__label">
                                                    <input class="visually-hidden" type="file">
                                                    <span class="file-upload__icon">
                                                        <svg width="16" height="16">
                                                            <use xlink:href="#paper-clip"></use>
                                                        </svg>
                                                    </span>
                                                    <span class="file-upload__text">Attach a file</span>
                                                </label>
                                            </div>
                                            <button class="discuss-project__send btn--theme-black btn" type="submit"
                                                data-aos="fade-up">
                                                <span class="btn__text">Submit</span>
                                                <span class="btn__icon">
                                                    <svg width="19" height="19">
                                                        <use xlink:href="#link-arrow"></use>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                            <img src="{{ '/assets/img/american/american-coffee-table-book-1.png' | relative_url }}"
                                width="531" height="417" alt="American Coffee Table Book">
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
                            <img src="{{ '/assets/img/bitcoin/bitcoin-coffee-table-book-1.png' | relative_url }}"
                                width="531" height="417" alt="Bitcoin Coffee Table Book">
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
                            <img src="{{ '/assets/img/american/american-coffee-table-book-2.jpg' | relative_url }}"
                                width="531" height="417" alt="SUN by D.H. Lawrence">
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