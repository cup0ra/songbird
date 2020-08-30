export default function clickEffect(e){
    var targetEl = e.target;
    var inkEl = targetEl.querySelector('.ink');

    if (inkEl) {
    inkEl.classList.remove('animate');
    }
    else {
    inkEl = document.createElement('span');
    inkEl.classList.add('ink');
    inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
    targetEl.appendChild(inkEl);
    }

    inkEl.style.left = (e.nativeEvent.offsetX - inkEl.offsetWidth / 2) + 'px';
    inkEl.style.top = (e.nativeEvent.offsetY - inkEl.offsetHeight / 2) + 'px';
    inkEl.classList.add('animate');
}