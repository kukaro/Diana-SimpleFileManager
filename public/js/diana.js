var file = {
    type: 'folder', child:
        {
            alpha: {type: 'folder', child: {gamma: {type: 'folder', child: null, data: null}}, data: null},
            beta: {type: 'image'}
        },
    data: null
};
var currentPathToList = ['/'];
var fileIndex = 1;
var currentFile = file;

$(document).ready(function () {
    $('.file-manager-header').append(makeHeaderDiv());
});

function makeHeaderDiv(str) {
    if (str == undefined) {
        str = '/';
    }
    return '<button type="button" class="btn btn-info btn-outline-primary file-manager-button" onclick="fileManagerNavUpdateToHeader(\'' + str + '\',' + (fileIndex++) + ')">' + str + '</button>';
}

function makeNavDiv(str) {
    if (str == undefined) {
        str = '';
    }
    return '<button type="button" class="btn btn-info btn-outline-primary file-manager-nav-button" onmouseup = "fileManagerRightClick()" onclick="fileManagerNavUpdateToNav(\'' + str + '\')">' + str + '</button>';
}

function fileManagerNavUpdateToHeader(str, num) {
    if (str == '' || undefined || str == '/') {
        str = '/';
        var count = currentPathToList.length;
        for (var i = num + 1; i <= count; i++) {
            currentPathToList.pop();
        }
        console.log(currentPathToList);
        currentFile = file;
        $('.file-manager-header').html('');
        fileIndex = 1;
        for (var i = 0; i < currentPathToList.length; i++) {
            if (currentPathToList[i] == '/') {
                $('.file-manager-header').append(makeHeaderDiv());
            }
            else {
                $('.file-manager-header').append(makeHeaderDiv(currentPathToList[i]));
            }
            if (currentPathToList.length - 1 != i) {
                currentFile = currentFile['child'][currentPathToList[i + 1]];
            }
        }
    }
    else {
        for (var i = num + 1; i <= currentPathToList.length; i++) {
            currentPathToList.pop();
        }
        currentFile = file;
        $('.file-manager-header').html('');
        fileIndex = 1;
        for (var i = 0; i < currentPathToList.length; i++) {
            if (currentPathToList[i] == '/') {
                $('.file-manager-header').append(makeHeaderDiv());
            }
            else {
                $('.file-manager-header').append(makeHeaderDiv(currentPathToList[i]));
            }
            if (currentPathToList.length - 1 != i) {
                currentFile = currentFile['child'][currentPathToList[i + 1]];
            }
        }
    }
    $('.file-manager-nav-title-value').html(str);
    $('.file-manager-nav-body').html('');
    for (var item in currentFile['child']) {
        $('.file-manager-nav-body').append(makeNavDiv(item));
    }
}

function fileManagerNavUpdateToNav(str) {
    if (str == '' || undefined || str == '/') {
        str = '/';
    }
    else {
        currentPathToList.push(str);
        $('.file-manager-header').append(makeHeaderDiv(str));
        currentFile = currentFile['child'][str];
    }
    $('.file-manager-nav-title-value').html(str);
    $('.file-manager-nav-body').html('');
    for (var item in currentFile['child']) {
        $('.file-manager-nav-body').append(makeNavDiv(item));
    }
}

function fileManagerRightClick() {
    if (event.button == 2) {
        console.log('right');
    }
}