function getCommentBox() {
    const commentElement = document.getElementById('comment-box');
    return commentElement
}

document.getElementById('bold-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();

    if (commentElement.style.fontWeight == 'bold') {
        commentElement.style.fontWeight = 'normal';
    }
    else {
        commentElement.style.fontWeight = 'bold';
    }

})
document.getElementById('italic-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    if (commentElement.style.fontStyle == 'italic') {
        commentElement.style.fontStyle = 'normal';
    }
    else {
        commentElement.style.fontStyle = 'italic';
    }

})
document.getElementById('underline-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    if (commentElement.style.textDecoration == 'underline') {
        commentElement.style.textDecoration = 'none';
    }
    else {
        commentElement.style.textDecoration = 'underline';
    }

})


document.getElementById('left-align-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    commentElement.style.textAlign = 'left';
})

document.getElementById('center-align-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    commentElement.style.textAlign = 'center';
})

document.getElementById('right-align-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    commentElement.style.textAlign = 'right';
})

document.getElementById('justify-align-btn').addEventListener('click', function () {
    const commentElement = getCommentBox();
    commentElement.style.textAlign = 'justify';
});


//change the color for comment box
document.getElementById('changetext').addEventListener('change', function () {
    document.getElementById('comment-box').style.color = this.value;
})

document.getElementById('number-filed').addEventListener('change', function () {
    document.getElementById('comment-box').style.fontSize = this.value + 'px';
})


function textCase() {
    const commentElement = getCommentBox();
    if (commentElement.style.textTransform === 'uppercase') {
        commentElement.style.textTransform = 'none';
    }
    else {
        commentElement.style.textTransform = 'uppercase';
    }
}


