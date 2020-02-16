function manipulateDOM() {
    const $body = document.body;
    const $div = document.createElement("div");
    $div.innerHTML = 'Hello from JS!';
    $body.appendChild($div);
}

if (document.readyState === "complete" || document.readyState === "loaded") {
    manipulateDOM();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        manipulateDOM();
    })
}
