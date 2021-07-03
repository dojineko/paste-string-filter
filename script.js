window.addEventListener('paste', (event) => {
    let clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
    let paste = clipboardData.getData('text');

    const mailRegExp = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/
    paste = paste.replace(mailRegExp, "(replaced)");

    const elem = window.document.activeElement;
    if (!elem || !["TEXTAREA"].includes(elem.nodeName)) return false;

    // $BA*BrHO0O$r(Bpaste$BJ8;zNs$GCV49(B
    orignal = elem.value;
    selectionStart = elem.selectionStart;
    selectionEnd = elem.selectionEnd;
    elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd);

    event.preventDefault();
});
