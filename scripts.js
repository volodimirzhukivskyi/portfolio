window.addEventListener('load', function() {
    // Simulating a delay for demonstration purposes
    setTimeout(function() {
        document.getElementById('loader-wrapper').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('loader-wrapper').style.display = 'none';
            // document.getElementById('content').style.display = 'block';
        }, 1000); // Adjust timing according to your needs
    }, 2000); // Adjust timing according to your needs
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav_link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Iterate over each section to find which one is in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // If the section is in the viewport, add 'active' class to the corresponding nav link
                const targetId = '#' + section.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === targetId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href attribute value
            const targetSection = document.querySelector(targetId); // Find the target section
            const scrollOptions = {
                behavior: 'smooth' // Smooth scrolling behavior
            };

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop+10, // Scroll to the top position of the target section
                    ...scrollOptions
                });
            }
        });
    });
});





window.onload = function() {
    let video = document.getElementById('responsive-video');
    let placeholder = document.getElementById('video-placeholder');

    function checkWidth() {
        if (window.innerWidth < 700) {
            placeholder.src = '400_browser.jpg';
            video.getElementsByTagName('source')[0].src = '400px_browser.mp4';
        } else {
            placeholder.src = '768_browser.jpg';
            video.getElementsByTagName('source')[0].src = '768px_browser.mp4';
        }
        video.load(); // Reload the video with new source
    }

    checkWidth(); // Check width initially

    window.onresize = function() {
        checkWidth(); // Check width when window is resized
    };

    // Autoplay workaround for mobile devices
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        video.removeAttribute('autoplay');
    }
};

const homeSection = document.querySelector(".home-section");



gsap.registerPlugin(ScrollTrigger);


/* MENU SCROLL */

/* MENU SCROLL END */

// Создаем ScrollTrigger для .home-section
// Check if the window width is greater than 1200 pixels
if (window.innerWidth > 1200) {
    // Define the initial animations
    const container = document.querySelector(".scroll-container");
    const sections = gsap.utils.toArray(".scroll-container section");
    const texts = gsap.utils.toArray(".anim");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            pin: true,
            scrub: 1,
            end: "+=3000",
            markers: true,
            onUpdate: function(scroll) {
                // Check if the scroll animation has reached its end
                if (scroll.progress === 1) {
                    // Animate the .photo element when scroll animation ends
                    gsap.to('.photo', { right: '-20%', duration: 1 });
                }
            }
        }
    });

    sections.forEach((section) => {
        // grab the scoped text
        let text = section.querySelectorAll(".anim");

        // bump out if there's no items to animate
        if(text.length === 0)  return

        // do a little stagger
        gsap.from(text, {
            y: -130,
            opacity: 0,
            duration: 2,
            ease: "elastic",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
                markers: true
            }
        });

        const contactButton = section.querySelector(".button");
        if (contactButton) {
            gsap.from(contactButton, {
                x: 200,
                opacity: 0,
                duration: 2,
                ease: "elastic",
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: "left center",
                    markers: true
                }
            });
        }
    });
}

/* SOCIAL ICONS FADE IN */
let footer = document.querySelector("footer");

window.addEventListener('scroll', function() {
    let documentHeight = document.documentElement.scrollHeight;

    let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (scrollTop + windowHeight >= documentHeight) {
        footer.style.transform = 'translateY(0)';
        footer.style.opacity = '1';
    } else {
        footer.style.transform = 'translateY(200%)';
        footer.style.opacity = '0';
    }
});
/* SOCIAL ICONS FADE IN END*/





const mailWrap = document.querySelector('.contact__mail-wrap');

mailWrap.addEventListener('mousemove', (event) => {
    // Получаем положение курсора мыши относительно .contact__mail-wrap
    const rect = mailWrap.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const leftBound = 0;
    const topBound = 0;
    const rightBound = mailWrap.offsetWidth;
    const bottomBound = mailWrap.offsetHeight;

    const centerX = (leftBound + rightBound) / 2;
    const centerY = (topBound + bottomBound) / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const maxDelta = 10;
    const limitedDeltaX = Math.min(Math.max(deltaX, -maxDelta), maxDelta);
    const limitedDeltaY = Math.min(Math.max(deltaY, -maxDelta), maxDelta);

    mailWrap.style.transition = 'transform 0.2s ease';
    mailWrap.style.transform = `translate3d(${limitedDeltaX}px, ${limitedDeltaY}px, 0px)`;
});

mailWrap.addEventListener('mouseleave', () => {
    mailWrap.style.transition = 'transform 0.2s ease';
    mailWrap.style.transform = 'translate3d(0, 0, 0)';
});




document.addEventListener("DOMContentLoaded", function() {
    const textWrap = document.querySelector('.contact__bg-text-wrap');

    textWrap.innerHTML += textWrap.innerHTML;

    let scrollPosition = 0;
    function scrollText() {
        scrollPosition += 1;
        textWrap.style.transform = `translateX(${-scrollPosition}px)`;
        if (scrollPosition >= textWrap.scrollWidth / 2) {
            scrollPosition = 0;
        }
    }

    setInterval(scrollText, 10);
});



document.addEventListener('DOMContentLoaded', function() {
    function toggleActiveClass() {
        var element = document.querySelector('.letter-jump');
        element.classList.add('active');

        element.addEventListener('animationend', function() {
            element.classList.remove('active');
        });
    }

    toggleActiveClass();

    setInterval(toggleActiveClass, 5000);
});


/* PROJECTs DATA */
let projects = [
    {
        id: 1,
        imagePath: "storyfilm_full.jpg",
        projectLink: "https://storyfilm.pl/",
        projectName: "Storyfilm"
    },
    {
        id: 2,
        imagePath: "nowyhoryzont_full.jpg",
        projectLink: "https://nowyhoryzont.info.pl/",
        projectName: "Nowy Horyzont"
    },
    {
        id: 3,
        imagePath: "pwtrener_full.jpg",
        projectLink: "https://www.pwtrener.pl/",
        projectName: "PW trener"
    },
    {
        id: 4,
        imagePath: "badstudio_full.jpg",
        projectLink: "http://bad-studio.pl/",
        projectName: "BAD studio"
    },
    {
        id: 5,
        imagePath: "corpores_full.jpg",
        projectLink: "https://corpores.com.pl/",
        projectName: "Corpores"
    },
    {
        id: 6,
        imagePath: "larix_full.jpg",
        projectLink: "https://larix.corpores.com.pl/",
        projectName: "Larix"
    },
    {
        id: 7,
        imagePath: "aroniowa_full.jpg",
        projectLink: "https://aroniowa.corpores.com.pl/",
        projectName: "Aroniowa"
    },
    {
        id: 8,
        imagePath: "waclawowka_full.jpg",
        projectLink: "http://waclawowka.pl/",
        projectName: "Wacławówka"
    },
    {
        id: 9,
        imagePath: "sprowadzonezniemiec_full.jpg",
        projectLink: "https://sprowadzonezniemiec.pl/",
        projectName: "Sprowadzone z Niemiec"
    },
    {
        id: 10,
        imagePath: "qchnia_full.jpg",
        projectLink: "https://www.qchnia-project.pl/",
        projectName: "Qchnie Project"
    },
    {
        id: 11,
        imagePath: "glowup_full.jpg",
        projectLink: "https://www.glowupstudio.pl/",
        projectName: "Glow Up!"
    },
    {
        id: 12,
        imagePath: "jedlina_full.jpg",
        projectLink: "https://apartamentyjedlina.pl/",
        projectName: "Jedlina"
    },
    {
        id: 13,
        imagePath: "nowyhoryzont_full.jpg",
        projectLink: "https://nowyhoryzont.info.pl/",
        projectName: "Nowy Horyzont"
    },
    {
        id: 14,
        imagePath: "salubris_full.jpg",
        projectLink: "https://salubris.rzeszow.pl/",
        projectName: "Salubris"
    },
    {
        id: 15,
        imagePath: "rehamedicare_full.jpg",
        projectLink: "https://rehabilitacjadladzieci-krakow.pl/",
        projectName: "RehaMedicare"
    },
    {
        id: 16,
        imagePath: "cptuning_full.jpg",
        projectLink: "https://cp-tuning.pl/index.html",
        projectName: "CP-tuning"
    },
    {
        id: 17,
        imagePath: "snug_full.jpg",
        projectLink: "https://snugconcept.pl/index.html",
        projectName: "SNUG concept"
    },
    {
        id: 18,
        imagePath: "zyciezdrowe_full.jpg",
        projectLink: "https://zyciezdrowe.pl/",
        projectName: "Życie zdrowe"
    },
    {
        id: 19,
        imagePath: "itexplorers_full.jpg",
        projectLink: "https://itexplorers.com/",
        projectName: "IT explorers"
    },
    {
        id: 20,
        imagePath: "darkwood_full.jpg",
        projectLink: "https://darkwood.com.pl/",
        projectName: "DARKWOOD"
    },
    {
        id: 21,
        imagePath: "studioad_full.jpg",
        projectLink: "https://studioad.pl/",
        projectName: "AD studio"
    },
    {
        id: 22,
        imagePath: "mieta_full.jpg",
        projectLink: "https://mieta.pub/",
        projectName: "Mięta pub"
    },
    {
        id: 23,
        imagePath: "bowindow_full.jpg",
        projectLink: "https://bowindow.fr/",
        projectName: "BOWINDOW"
    },
    {
        id: 24,
        imagePath: "lidertrans_full.jpg",
        projectLink: "https://lidertrans.net.pl/",
        projectName: "LIDERTRANS"
    },
];
let projectContainer = document.querySelector('.portfolio_section-wrap');
let itemsPerLoad = 6;
let loadedItems = 0;


function loadItemsWithFadeIn() {
    let remainingItems = projects.length - loadedItems;
    let itemsToLoad = Math.min(remainingItems, itemsPerLoad);

    for (let i = 0; i < itemsToLoad; i++) {
        let project = projects[loadedItems + i];
        let portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio_section-itm');
        let portfolioItm = `
            <div class="portfolio_section-top-wrap">
              <div class="portfolio__slide-browser">
                <div class="portfolio__slide-browser-half">
                  <div class="browser__circle"></div>
                  <div class="browser__circle"></div>
                  <div class="browser__circle"></div>
                  <div class="browser__tab-wrap">
                    <div class="browser__tab">
                      <div class="browser__tab-close-wrap">
                        <div class="browser__close-line"></div>
                        <div class="browser__close-line second"></div>
                      </div>
                    </div>
                  </div>
                  <div class="browser__plus-wrap">
                    <div class="browser__plus">
                      <div class="browser__plus-line"></div>
                      <div class="browser__plus-line second"></div>
                    </div>
                  </div>
                </div>
                <div class="portfolio__slide-browser-half">
                  <div class="browser__arrow-wrap">
                    <div class="browser__arrow-line"></div>
                    <div class="browser__arrow-line arrow"></div>
                  </div>
                  <div class="browser__arrow-wrap right">
                    <div class="browser__arrow-line"></div>
                    <div class="browser__arrow-line arrow"></div>
                  </div>
                  <div class="browser__reload-wrap">
                    <div class="browser__reload"></div>
                    <div class="browser__reload-rectangle"></div>
                  </div>
                  <div class="browser__adress-bar">
                    <div class="browser__bookmark-wrap"><img alt="" loading="lazy"
                                                             src="https://assets.website-files.com/620b9905625d854121b66d1e/6269196086bed2a61e762908_Star%201.svg"
                                                             class="browser__star"></div>
                  </div>
                  <div class="browser__settings-wrap">
                    <div class="browser__settings-dot"></div>
                    <div class="browser__settings-dot"></div>
                    <div class="browser__settings-dot"></div>
                  </div>
                </div>
              </div>
              <div class="portfolio__slide-img-wrap">
                <img alt="" loading="lazy" src="${project.imagePath}" class="slide-img">
                <div class="slide__img-placeholder">
                <img alt="" loading="lazy"
                 src="https://assets.website-files.com/620b9905625d854121b66d1e/62694c8e500de0f1dfb2ef7a_portfolio__img-placeholder.svg"
                 class="slide__img-placeholder-img"></div>
              </div>
              <div class="portfolio__slide-overflow">
                <div class="portfolio__slide-overflow-content">
                  <div class="portfolio__slide-overflow-btn-wrapper">
                    <a href="${project.projectLink}" target="_blank"
                       class="portfolio__slide-overflow-btn is--second w-inline-block"
                       tabindex="-1">
                        <img src="owb.svg" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio_section-btm-wrap">
              <div class="portfolio__slide-h4-wrap">
                <h4 class="h4 portfolio">${project.projectName}</h4>
              </div>
            </div>
    `;

        portfolioItem.innerHTML = portfolioItm;
        fadeIn(portfolioItem);
        projectContainer.appendChild(portfolioItem);
    }

    loadedItems += itemsToLoad;

    if (remainingItems <= itemsPerLoad) {
        for (let i = loadedItems; i < projects.length; i++) {
            let project = projects[i];
            let portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio_section-itm');

            let portfolioItm = `
            <div class="portfolio_section-top-wrap">
              <div class="portfolio__slide-browser">
                <div class="portfolio__slide-browser-half">
                  <div class="browser__circle"></div>
                  <div class="browser__circle"></div>
                  <div class="browser__circle"></div>
                  <div class="browser__tab-wrap">
                    <div class="browser__tab">
                      <div class="browser__tab-close-wrap">
                        <div class="browser__close-line"></div>
                        <div class="browser__close-line second"></div>
                      </div>
                    </div>
                  </div>
                  <div class="browser__plus-wrap">
                    <div class="browser__plus">
                      <div class="browser__plus-line"></div>
                      <div class="browser__plus-line second"></div>
                    </div>
                  </div>
                </div>
                <div class="portfolio__slide-browser-half">
                  <div class="browser__arrow-wrap">
                    <div class="browser__arrow-line"></div>
                    <div class="browser__arrow-line arrow"></div>
                  </div>
                  <div class="browser__arrow-wrap right">
                    <div class="browser__arrow-line"></div>
                    <div class="browser__arrow-line arrow"></div>
                  </div>
                  <div class="browser__reload-wrap">
                    <div class="browser__reload"></div>
                    <div class="browser__reload-rectangle"></div>
                  </div>
                  <div class="browser__adress-bar">
                    <div class="browser__bookmark-wrap"><img alt="" loading="lazy"
                                                             src="https://assets.website-files.com/620b9905625d854121b66d1e/6269196086bed2a61e762908_Star%201.svg"
                                                             class="browser__star"></div>
                  </div>
                  <div class="browser__settings-wrap">
                    <div class="browser__settings-dot"></div>
                    <div class="browser__settings-dot"></div>
                    <div class="browser__settings-dot"></div>
                  </div>
                </div>
              </div>
              <div class="portfolio__slide-img-wrap">
                <img alt="" loading="lazy" src="${project.imagePath}" class="slide-img">
                <div class="slide__img-placeholder">
                <img alt="" loading="lazy"
                 src="https://assets.website-files.com/620b9905625d854121b66d1e/62694c8e500de0f1dfb2ef7a_portfolio__img-placeholder.svg"
                 class="slide__img-placeholder-img"></div>
              </div>
              <div class="portfolio__slide-overflow">
                <div class="portfolio__slide-overflow-content">
                  <div class="portfolio__slide-overflow-btn-wrapper">
                    <a href="${project.projectLink}" target="_blank"
                       class="portfolio__slide-overflow-btn is--second w-inline-block"
                       tabindex="-1">
                      <img
                          src="open-web.svg"
                          loading="lazy" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio_section-btm-wrap">
              <div class="portfolio__slide-h4-wrap">
                <h4 class="h4 portfolio">${project.projectName}</h4>
              </div>
            </div>
    `;

            portfolioItem.innerHTML = portfolioItm;
            projectContainer.appendChild(portfolioItem);
        }
    }
}

loadItemsWithFadeIn();

window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    let portfolioWrap = document.querySelector('.portfolio_section-wrap');
    let portfolioWrapHeight = portfolioWrap.clientHeight;
    let portfolioWrapOffsetTop = portfolioWrap.offsetTop;

    if (scrollTop + windowHeight >= portfolioWrapHeight + portfolioWrapOffsetTop - 100) {
        loadItemsWithFadeIn();
    }
});

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px)';
    let opacity = 0;
    let translateY = 50;
    let timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.transform = `translateY(0)`;
        opacity += 0.1;
        translateY -= 5;
    }, 50);
}
/* PROJECTs DATA END */