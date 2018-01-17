var file = {alpha: {'type':'folder','child':{gamma:{'type':'folder','child':null,'data':null}},'data':null}, beta: {'type':'image'}};
$(document).ready(function () {
    $('.file-manager-nav').append(makeDiv('/'));
    for(var item in file){
        $('.file-manager-nav').append(makeDiv(item));
    }
});

function makeDiv(str){
    return '<button type="button" class="btn btn-info btn-outline-primary file-manager-button">'+str+'</button>';
}