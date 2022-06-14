function init() {
    $.post(
        "php/core.php",
        {
            "action": "loadGoods"
        },
        team1

    );
}
function init2() {
    $.post(
        "php/core.php",
        {
            "action": "loadplayers"
        },
        register

    );
}
function init1() {
    $.post(
        "php/core.php",
        {
            "action": "loadGoods"
        },
        team2

    );
}
function register(data){
        data=JSON.parse(data);
        var out='';
        out +=`<select style="font-size: 0.8em">`;
        for (var key in data) {
            //out +='<div class="nick">';
    
            //out +=`<p class="">${data[key].login}</p>`;
            //out +=`<img src="image/${data[key].password}" alt="">`;
            out +=`<option team2-id="${key}">${data[key].nick}</option>`;
    
            //out +=`<button class="add-cart" data-id="${key}">Купить</button>`;
            //out +='</div>';
        }
        out +=`</select>`;
        $('.zayavka2').html(out);
        $('.zayavka3').html(out);
        $('.zayavka4').html(out);
        $('.zayavka5').html(out);
        $('.zayavka6').html(out);
}
function newteam(){
    var user1=$('.zayavka2 option:selected').text();
    var user2=$('.zayavka3 option:selected').text();
    var user3=$('.zayavka4 option:selected').text();
    var user4=$('.zayavka5 option:selected').text();
    var user5=$('.zayavka6 option:selected').text();
    var team=$('#zayavka1').val();
    $.post(
        "php/core.php",
        {
            "action":"upzayvki1",
            "name":team,
            "user1":user1,
            "user2":user2,
            "user3":user3,
            "user4":user4,
            "user5":user5



        },
        function(data){
            if(data==1){
                alert('Команда добавлена');
                window.location.reload();      
            }
            else{
                alert("Произошла ошибка, попробуйте ещё раз!");
                window.location.reload();

            }
        }
    );
}

function team1(data) {
    data=JSON.parse(data);
    var out='';
    out +=`<select style="font-size: 0.8em">`;
    for (var key in data) {
        //out +='<div class="nick">';

        //out +=`<p class="">${data[key].login}</p>`;
        //out +=`<img src="image/${data[key].password}" alt="">`;
        out +=`<option team1-id="${key}">${data[key].name}</option>`;

        //out +=`<button class="add-cart" data-id="${key}">Купить</button>`;
        //out +='</div>';
    }
    out +=`</select>`;
    $('.team1').html(out);
    $('.team1 select').on('change',selectGoods);
}
function team2(data) {
    data=JSON.parse(data);
    var out='';
    out +=`<select style="font-size: 0.8em">`;
    for (var key in data) {
        //out +='<div class="nick">';

        //out +=`<p class="">${data[key].login}</p>`;
        //out +=`<img src="image/${data[key].password}" alt="">`;
        out +=`<option team2-id="${key}">${data[key].name}</option>`;

        //out +=`<button class="add-cart" data-id="${key}">Купить</button>`;
        //out +='</div>';
    }
    out +=`</select>`;
    $('.team2').html(out);
    $('.team2 select').on('change',selectGoods);
}

function profil(){
    if(document.cookie ==""){
        $('.footer').html("Пусто");
        //document.getElementById("swap").innerHTML="Авторизуйтесь";
    }
    else{
        var out="";
        var results = document.cookie.match(/username=(.+?)(;|$)/);
        out=(results[1]); // user
        $('#nick').html(out);
    }
}
$(function(){
    $("#swap").click(function() {
        //действия
        var cookies = document.cookie.split(";");
	    for (var i = 0; i < cookies.length; i++) {
		    var cookie = cookies[i];
		    var eqPos = cookie.indexOf("=");
		    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	    }
        localStorage.clear();
    });
});


function selectGoods(){
    var id=$('.team1 select option:selected').attr('team1-id');
    var id1=$('.team2 select option:selected').attr('team2-id');
    console.log(id,id1);
}

function saveToDb(){
    //отправка счёта на сервер
    var id3=$('.team1 select option:selected').attr('team1-id');
    var id4=$('.team2 select option:selected').attr('team2-id');
    var id=$('.team1 select option:selected').text();
    var id1=$('.team2 select option:selected').text();
    //var elem = document.getElementById('showmatch1');
    var id_game="";
    id_game+=id3+id4;
   // elem.textContent=id_game;
        $.post(
        "php/core.php",
        {
            "action" : "NewGoods",
            "nid":id_game,
            "nteam1" : id,
            "nteam2" : id1,
            "nscrore_team1" : $('#score1').val(),
            "nscrore_team2" : $('#score2').val(),
        },
        function(data){
            if(data==1){
                alert('Запись добавлена')
            }
            else{
                console.log(data);
            }
        }
        );
}
function savefamelyusername(){
    //отправка счёта на сервер
    var username=$('#username-profil').val();
    var famely=$('#famely-profil').val();
    var user=$('#name').html();
        $.post(
        "php/core.php",
        {
            "action" : "savefamelyusername",
            "nid":user,
            "user" : username,
            "famely" : famely
        },
        function(data){
            if(data==1){
                alert('Запись сохранена')
            }
            else{
                console.log(data);
            }
        }
        );
}
function addGoods(){
    //отправка статистика игроков за матч

    var player1=$("#id1").html();
    var player2=$("#id2").html();
    var player3=$("#id3").html();
    var player4=$("#id4").html();
    var player5=$("#id5").html();
    var id_game=$('.showmatch select option:selected').attr('team1-id');
    console.log( player1, player2, player3, player4, player5);
        $.post(
        "php/core.php",
        {
            "action" : "addGoods",
            "nid": id_game,
            "nplayer1" : player1,
            "nplayer2" : player2,
            "nplayer3" : player3,
            "nplayer4" : player4,
            "nplayer5" : player5,
            "nk1" : $('#statk1').val(),
            "nd1" : $('#statd1').val(),
            "nadr1" : $('#statadr1').val(),
            "nrating1" : $('#statrating1').val(),
            "nk2" : $('#statk2').val(),
            "nd2" : $('#statd2').val(),
            "nadr2" : $('#statadr2').val(),
            "nrating2" : $('#statrating2').val(),
            "nk3" : $('#statk3').val(),
            "nd3" : $('#statd3').val(),
            "nadr3" : $('#statadr3').val(),
            "nrating3" : $('#statrating3').val(),
            "nk4" : $('#statk4').val(),
            "nd4" : $('#statd4').val(),
            "nadr4" : $('#statadr4').val(),
            "nrating4" : $('#statrating4').val(),
            "nk5" : $('#statk5').val(),
            "nd5" : $('#statd5').val(),
            "nadr5" : $('#statadr5').val(),
            "nrating5" : $('#statrating5').val(),

        },
        function(data){
            if(data==1){
                alert('Запись добавлена')
            }
            else{
                console.log(data);
            }
        }
        );

}
function selekGoods(){
    var id_match=$('#showmatch1').html();
    console.log(id_match);
    var id=$('.team1 select option:selected').attr('team1-id');
    console.log(id);
    
    $.post(
        "php/core.php",
        {
            "action":"selectOneGoods",
            "gidteam1":id1,
            "gidteam2":id2

        },
        function(data){
            data=JSON.parse(data);
            var out="";
            var b=0;
            for (var key in data) {
                var out="";
                var s='';
                b+=1;
                out+=`${data[key].name} <br>`;
                s='name'+b;

                $('#'+s).html(out)
                $('#id'+b).html(key)
                console.log(key);
            }
            
            //$('#name').html(out);
            //for (var key in data) {
                //out +='<div class="nick">';
        
                //out +=`<p class="">${data[key].login}</p>`;
                //out +=`<img src="image/${data[key].password}" alt="">`;
                //out +=`${data[key].name}`;
        
                //out +=`<button class="add-cart" data-id="${key}">Купить</button>`;
                //out +='</div>';
            //}
            //$('#gcost').val(data.cost);
            //$('#gname').val(data.name);
            //`${data.name}`
            //$('#name').html(out);
        }
    );
}

function showmatch() {    
    $.post(
        "php/core.php",
        {
            "action":"showmatch",
        },
        function(data){
            data=JSON.parse(data);
            var out='';
            var out1='';
            out +=`<select style="font-size: 0.8em">`;
            out +=`<option data-id="0"></option>`
            for (var key in data) {
                out +=`<option team1-id="${key}">${data[key].id}</option>`
                $('.showmatch').html(out)
                console.log(data);
            }
            
            
            $('.showmatch select').on('change',test);
            function test(){
                var id=$('.showmatch select option:selected').attr('team1-id');
                var team1=data[id].team1;
                var score1=data[id].scrore_team1;
                var team2=data[id].team2;
                var score2=data[id].scrore_team2;
                console.log(team1,score1,team2,score2);
                console.log("Команда"+`${data[id].team1}`,"Команда"+`${data[id].team2}`);
                $.post(
                    "php/core.php",
                    {
                        "action":"showmatchfull",
                        "gid1":team1,
                        "gid2":team2,
                    },
                    function(data){
                        data=JSON.parse(data);
                        console.log(data);
                        var out1='';
                        var out2='';
                        var out3='';
                        out3 +=`<select style="font-size: 0.8em">`;
                        out3 +=`<option data-id="0"></option>`
                        for (var key in data) {
                            out3 +=`<option team1-id="${key}">${data[key].name}</option>`
                            $('.tem').html(out3)
                        }
                        out1+=team1+" "+score1+" ";
                        out2+=" -"+score2+" "+team2
                        $('.t1').html(out1);
                        $('.t2').html(out2);
                        $('.tem select').on('change',showplayers);
                    }
    
                );  
            }
        }
    );
}
function showplayers(){
    var id_team=$('.tem select option:selected').attr('team1-id');
    console.log(id_team);
    $.post(
        "php/core.php",
        {
            "action":"showplayers",
            "gid1":id_team,
        },
        function(data){
            data=JSON.parse(data);
            console.log(data);
            var b=0;
            for(key in data){
                var out1='';
                var out2='';
                out1 +=`${data[key].Nick}`;
                out2 +=`${data[key].id}`;
                b+=1;
                console.log(out1);
                $('#name'+b).html(out1);
                $('#id'+b).html(out2);
            }
            
            }
    );



}

function showmap() {    
    $.post(
        "php/core.php",
        {
            "action":"showmap",
        },
        function(data){
            data=JSON.parse(data);
            console.log(data);
            var out='';
            out +=`<select style="font-size: 0.8em">`;
            out +=`<option data-id="0">Выберите карту</option>`
            for (var key in data) {
                
                out +=`<option data-id="${key}">${data[key].id}-${data[key].name} </option>`
                $('#map').html(out)
                $('#map2').html(out)
                $('#map1').html(out)
                $('#map3').html(out)
                $('#map4').html(out)

            }
        }
    );
}
$("#1").change(function(){
    if($(this).val() == 0){ 
        $('.hidden').css('visibility','hidden');
        $('.maps').css('height','180px');

    }
    else{
        $('.hidden').css('visibility','visible');
        $('.content').css('height','420px');
    }
    
});
function savestatmaps(){
    var idgame=$('.showmatch select option:selected').attr('team1-id');
    var idmap1=$('#map select option:selected').attr('data-id');
    var idmap2=$('#map1 select option:selected').attr('data-id');
    var idmap3=$('#map2 select option:selected').attr('data-id');
    var scoremap1= $("#scoremap1").val();
    var scoremap12= $("#scoremap11").val();
    var scoremap21= $("#scoremap21").val();
    var scoremap22= $("#scoremap22").val();
    var scoremap31= $("#scoremap31").val();
    var scoremap32= $("#scoremap32").val();
    console.log(scoremap1);
    $.post(
        "php/core.php",
        {
            "action":"savestatmaps",
            "gidgame":idgame,
            "idmap1":idmap1,
            "idmap2":idmap2,
            "idmap3":idmap3,
            "scoremap1":scoremap1,
            "scoremap12":scoremap12,
            "scoremap21":scoremap21,
            "scoremap22":scoremap22,
            "scoremap31":scoremap31,
            "scoremap32":scoremap32,
        },
        function(data){
            if(data==1){
                alert('Запись добавлена');
                //window.location.reload();
            }
            else{
                alert("Произошла ошибка, попробуйте ещё раз!");
                //window.location.reload();
                console.log(data);
            }
        }
    );
}
function showzayvki() {    
    $.post(
        "php/core.php",
        {
            "action":"showzayvki",
        },
        function(data){
            data=JSON.parse(data);
            var out='';
            var out1='';
            var b;
            console.log(data);
            for (var key in data) {
                b=0;
                out1 +=`<div class="vyvod">`
                out1 +=`<div id="zayvki">`
                out='';
                b+=1;
                out +=`<span id="${key+b}">${data[key].user1}</span>`+" "
                b+=1;
                out +=`<span id="${key+b}">${data[key].user2}</span>`+" "
                b+=1;
                out +=`<span id="${key+b}">${data[key].user3}</span>`+" "
                b+=1;
                out +=`<span id="${key+b}">${data[key].user4}</span>`+" "
                b+=1;
                out +=`<span id="${key+b}">${data[key].user5}</span>`
                out1 +=`<div class="block1"><span id="${key}">${data[key].team_name}</span></div> `
                out1 +=`<div class="block2"><span id="allnewplayer">`+out+`</span></div>`
                out1+=`<button class="button" id="${key}">Удалить</button>`
                out1+=`<button class="button" id="${key}">Добавить</button>`
                out1 +=`</div></div>`
                $('.all').html(out1)

            }
            $('.button').on('click', function() {
                // действия, которые будут выполнены при наступлении события...
                var id = $(this).attr("id");
                var text=$(this).text();
                var test=$('#'+id).html();
                console.log(test);
                var user1=$('#'+id+"1").html();
                var user2=$('#'+id+"2").html();
                var user3=$('#'+id+"3").html();
                var user4=$('#'+id+"4").html();
                var user5=$('#'+id+"5").html();
                console.log(user1);
                console.log(user1);
                console.log(user2);

                if(text=="Удалить"){
                    $.post(
                        "php/core.php",
                        {
                            "action":"deletezayvki",
                            "gid":id
    
                        },
                        function(data){
                            if(data==1){
                                alert('Запись удалена');
                                window.location.reload();
                               
                                
                           
                            }
                            else{
                                alert("Произошла ошибка, попробуйте ещё раз!");
                                window.location.reload();
    
                            }
                        }
                    );

                }
                else{
                    $.post(
                        "php/core.php",
                        {
                            "action":"upzayvki",
                            "gid":id,
                            "name":test,
                            "user1":user1,
                            "user2":user2,
                            "user3":user3,
                            "user4":user4,
                            "user5":user5


    
                        },
                        function(data){
                            if(data==1){
                                alert('Команда добавлена');
                                window.location.reload();      
                            }
                            else{
                                alert("Произошла ошибка, попробуйте ещё раз!");
                                window.location.reload();
    
                            }
                        }
                    );
                    
                }
                
            });
                
        }
    );
}




$(document).ready(function () {
    init();
    init1();
    init2();
    showmatch();
    showzayvki();
    showmap();
    $('#sozdanie').on('click',newteam);  
    $('.opr').on('click',addGoods);
    $('.chek').on('click',selekGoods);
    $('.add').on('click',saveToDb);
    $('.add1').on('click',savestatmaps);
    profil();
});
