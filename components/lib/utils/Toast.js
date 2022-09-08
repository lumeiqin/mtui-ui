export function Toast(tips, option) {
    let opt = {
        position: 'center',
        duration: '2000'
    }
    for (let k in option) {
        opt[k] = option[k];
    }
    if (document.getElementsByClassName('mt-toast').length) return;

    let tpl = document.createElement('div');
    tpl.innerHTML = tips;
    tpl.className = 'mt-toast mt-toast-' + opt.position;

    document.body.appendChild(tpl);
    setTimeout(function () {
        document.body.removeChild(tpl);
    }, opt.duration)
}
