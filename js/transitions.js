document.querySelectorAll('a').forEach(link => {

    if (link.hostname === window.location.hostname) {

        link.addEventListener('click', e => {

            e.preventDefault();

            document.body.classList.add('page-out');

            setTimeout(() => {
                window.location = link.href;
            }, 400);

        });

    }

});