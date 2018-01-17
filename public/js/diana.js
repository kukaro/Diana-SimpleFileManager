var file = {
    alpha: {'type': 'folder', 'child': {gamma: {'type': 'folder', 'child': null, 'data': null}}, 'data': null},
    beta: {'type': 'image'}
};
$(document).ready(function () {
    $('.file-manager-header').append(makeDiv());
    for (var item in file) {
        $('.file-manager-header').append(makeDiv(item));
    }
});

function makeDiv(str) {
    if (str == undefined) {
        str = '';
    }
    return '<button type="button" class="btn btn-info btn-outline-primary file-manager-button">' + str + '/</button>';
}