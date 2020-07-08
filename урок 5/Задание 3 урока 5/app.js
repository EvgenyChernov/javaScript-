const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('fadeInDownBig');
    modal.classList.add('fadeOutDownBig');
    setTimeout(function () {
        modal.classList.add('hidden');
    },1000);
})

showBtn.addEventListener('click', function () {
    modal.classList.remove('fadeOutDownBig', 'hidden');
    modal.classList.add('animated', 'fadeInDownBig');
})