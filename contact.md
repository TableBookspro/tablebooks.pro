---
layout: default
title: Contact
sitemap: true
---

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
                    <button class="discuss-project__send btn--theme-black btn" type="submit"
                        data-aos="fade-up">
                        <span class="btn__text">Submit</span>
                        <span class="btn__icon">
                            <svg width="19" height="19"><use xlink:href="#link-arrow"></use></svg>
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
  {% include the-books.html %}
</article>
