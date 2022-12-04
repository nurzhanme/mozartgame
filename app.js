<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; color: #000000; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">/* SHOW MENU */</span></p>
<p class="p1"><span class="s1">const navMenu = document.getElementById("nav-menu"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>navToggle = document.getElementById("nav-toggle"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>navClose = document.getElementById("nav-close");</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* MENU SHOW */</span></p>
<p class="p1"><span class="s1">/* Validate if constant exists */</span></p>
<p class="p1"><span class="s1">if (navToggle) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>navToggle.addEventListener("click", () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>navMenu.classList.add("show-menu");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* MENU HIDDEN */</span></p>
<p class="p1"><span class="s1">/* Validate if constant exists */</span></p>
<p class="p1"><span class="s1">if (navClose) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>navClose.addEventListener("click", () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>navMenu.classList.remove("show-menu");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* REMOVE MENU MOBILE */</span></p>
<p class="p1"><span class="s1">const navLink = document.querySelectorAll(".nav__link");</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">function linkAction() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const navMenu = document.getElementById("nav-menu");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// When we click on each nav__link, we remove the show-menu class</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>navMenu.classList.remove("show-menu");</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">navLink.forEach((n) =&gt; n.addEventListener("click", linkAction));</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* HOME SWIPER */</span></p>
<p class="p1"><span class="s1">let homeSwiper = new Swiper(".home-swiper", {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>spaceBetween: 30,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>loop: "true",</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>pagination: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>el: ".swiper-pagination",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>clickable: true</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* change body's background color */</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">let root = document.documentElement;</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">homeSwiper.on("transitionEnd", function (e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (this.activeIndex == 1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--body-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(to right, #2E0916, #200A2B)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--sub", "#ff5b79");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--title-color", "#ffffff");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--container-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(136deg, #2E0916, #200A2B)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (this.activeIndex == 2) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--body-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(to right, #E8CAFB, #6A4FB6)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--sub", "#303056");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--title-color", "#303056");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--container-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(136deg, #E8CAFB, #6A4FB6)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (this.activeIndex == 3) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--body-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(to right, #5B874B, #0C3720)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--sub", "#ffffff");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty("--title-color", "#ffffff");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>root.style.setProperty(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"--container-color",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"linear-gradient(136deg, #5B874B, #0C3720)"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">/* CHANGE BACKGROUND HEADER */</span></p>
<p class="p1"><span class="s1">function scrollHeader() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const header = document.getElementById("header");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (this.scrollY &gt;= 50) header.classList.add("scroll-header");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>else header.classList.remove("scroll-header");</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">window.addEventListener("scroll", scrollHeader);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* NEW SWIPER */</span></p>
<p class="p1"><span class="s1">let newSwiper = new Swiper(".new-swiper", {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>centeredSlides: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>slidesPerView: "auto",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>loop: "true",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>spaceBetween: 16</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* SCROLL SECTIONS ACTIVE LINK */</span></p>
<p class="p1"><span class="s1">const sections = document.querySelectorAll("section[id]");</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">function scrollActive() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const scrollY = window.pageYOffset;</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>sections.forEach((current) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const sectionHeight = current.offsetHeight,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>sectionTop = current.offsetTop - 58,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>sectionId = current.getAttribute("id");</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (scrollY &gt; sectionTop &amp;&amp; scrollY &lt;= sectionTop + sectionHeight) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>document</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>.querySelector(".nav__menu a[href*=" + sectionId + "]")</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>.classList.add("active-link");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>document</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>.querySelector(".nav__menu a[href*=" + sectionId + "]")</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>.classList.remove("active-link");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">window.addEventListener("scroll", scrollActive);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* SHOW SCROLL UP */</span></p>
<p class="p1"><span class="s1">function scrollUp() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const scrollUp = document.getElementById("scroll-up");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (this.scrollY &gt;= 460) scrollUp.classList.add("show-scroll");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>else scrollUp.classList.remove("show-scroll");</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">window.addEventListener("scroll", scrollUp);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">/* SCROLL REVEAL ANIMATION */</span></p>
<p class="p1"><span class="s1">const sr = ScrollReveal({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>origin: "top",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>distance: "60px",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>duration: 2500,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>delay: 400</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// reset: true</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);</span></p>
<p class="p1"><span class="s1">sr.reveal(`.category__data, .trick__content, .footer__content`, {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>interval: 100</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">sr.reveal(`.about__data, .discount__img`, { origin: "left" });</span></p>
<p class="p1"><span class="s1">sr.reveal(`.about__img, .discount__data`, { origin: "right" });</span></p>
</body>
</html>
