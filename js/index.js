const textarea = document.getElementById('comment-box');

// first box
function textBold(e) {
    if (textarea.style.fontWeight == 'bold') {
        textarea.style.fontWeight = 'normal';
        e.classList.remove('active')
    }
    else {
        textarea.style.fontWeight = 'bold';
        e.classList.add('active')
    }
}

function textItalic(e) {
    if (textarea.style.fontStyle == 'italic') {
        textarea.style.fontStyle = 'normal';
        e.classList.remove('active')
    }
    else {
        textarea.style.fontStyle = 'italic';
        e.classList.add('active')
    }
}

function textUnderline(e) {
    if (textarea.style.textDecoration == 'underline') {
        textarea.style.textDecoration = 'none';
        e.classList.remove('active')
    }
    else {
        textarea.style.textDecoration = 'underline';
        e.classList.add('active')
    }
}

// second box
function leftAlign() {
    textarea.style.textAlign = 'left';
}
function centerAlign() {
    textarea.style.textAlign = 'center';
}
function rightAlign() {
    textarea.style.textAlign = 'right';
}
function justifyAlign() {
    textarea.style.textAlign = 'justify';
}

//third box

function fontSize(e) {
    textarea.style.fontSize = e.value + 'px';

}

function textCaseConvert(e) {
    if (textarea.style.textTransform == 'uppercase') {
        textarea.style.textTransform = 'lowercase';
        e.classList.remove('active');
    }
    else {
        textarea.style.textTransform = 'uppercase';
        e.classList.add('active');
    }
}


function textColor(e) {
    textarea.style.color = e.value;
}

function removeTextareaValue() {
    textarea.value = '';
}