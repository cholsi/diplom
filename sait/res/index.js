function init() {
    $.post(
        "php/core.php",
        {
            "action": "loadallgame"
        },
        showmatch

    );
}
function showmatch(data) {
    data=JSON.parse(data);
    var out='';
    console.log(data);
    for (var key in data) {
        out+=`<div class="match">`;
        out+=`<h1>${data[key].id}</h1>`;    
        out+=`<hr>`;

        out+=`<div class="str1">`
        out+=`<div class="ch"><a>${data[key].team1}</a></div>`;
        out+=`<div class="ch1"><a>${data[key].scrore_team1}</a></div></div>`;

        out+=`<div class="str2">`;
        out+=`<div class="ch"><a>${data[key].team2}</a></div>`;
        out+=`<div class="ch1"><a>${data[key].scrore_team2}</a></div>`;
        out+=`</div></div>`;
    }
    var team1=data[52].team1;
    var score1=data[52].scrore_team1;
    var score2=data[52].scrore_team2;
    var team2=data[52].team2;
    $('.mid2-1-team1-name').html(team1);
    $('.map-text-1-right #team2name').html(team2);
    $('.map-text-1 #team1name').html(team1);
    $('.mid2-1-team1-score').html(score1);
    $('.mid2-1-team2-name').html(team2);
    $('.mid2-1-team2-score').html(score2);
    $('.lenta').html(out);   
}
function showallgame() {
    $.post(
        "../res/php/core.php",
        {
            "action" : "showallgame",
            "gid":52
    },
    function(data){
        data=JSON.parse(data);
        console.log(data)
        var score_map2_1=data[8].score_map2_1;
        var score_map2_2=data[8].score_map2_2;
        var score_map1_2=data[8].score_map1_2;
        var score_map1=data[8].score_map_1;
        $('#score1').html(score_map1);

        $('#score1_2').html(score_map1_2);
        $('#score2_1').html(score_map2_1);
        $('#score2_2').html(score_map2_2);
        console.log(score_map1,score_map1_2)
    }
  );
}


$(document).ready(function () {
    showallgame();
    init();

});