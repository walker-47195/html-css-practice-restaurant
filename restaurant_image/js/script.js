// ローディング画面
const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('loaded');
});
// ************メインエリア***************

// h1ローディングアニメーション
// 試作1 キャッチコピーアニメーションに流用
const heading = document.querySelector('#sub');

const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
};
const options = {
    duration: 2000,
    delay: 5000,
    easing: 'ease',
    fill: 'forwards',
};
heading.animate(keyframes, options);

// 試作２
// const text = document.querySelector('h1');
// const textContent = text.textContent;
// const splitted = textContent.split('');
// console.log(splitted);


// text.textContent = '';
// for (let i = 0; i < splitted.length; i++) {
//     text.innerHTML += `<span>${splitted[i]}</span>`;
// }

// let char = 0;
// let timer = setInterval(() => {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     // console.log(span);
//     char++;

//     if (char === splitted.length) {
//         clearInterval(timer);
//         timer = null;
//         return;

//     }
// }, 50);

// 試作3
// for (let i = 0; i < items.length; i++) {
//     const keyframes = {
//         opacity: [0, 1]
//     };
//     const options = {
//         duration: 600,
//         delay: i * 300,
//         fill: 'forwards',
//     };
//     items[i].animate(keyframes, options);
// }

// 試作4
const title = document.getElementById("yago");
const text = title.textContent;

title.textContent = "";

setTimeout(() => {
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        title.appendChild(span);

        setTimeout(() => {
            span.style.opacity = "1";
        }, index * 700);
    });
}, 500);

//kodawariSectionのアニメーション
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //   console.log(entry.target); 
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.kodawari');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

//画像変更アニメーション
// const scene = document.querySelector('#kenkou');

// const lists = ['image5.jpg', 'drink2.jpg'];

// for (let i = 0; i < 2; i++) {
//     const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
//     scene.insertAdjacentHTML('afterbegin', content);
//     const options = {
//         duration: 8000,
//         direction: 'alternate',
//     };
//     scene.animate(keyframes, options);
// }


// 画像ギャラリー
const mainImage = document.querySelector('#gallery img');
const thumbImages = document.querySelectorAll('.itiran img');
// console.log(thumbImages);

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0.7, 1] }, 500);
    });
});
