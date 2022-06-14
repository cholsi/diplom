function init() {
    $.post(
        "../admin/php/core.php",
        {
            "action": "loadplayers"
        },
        team2

    );
}
function load(){
    var out="";
    var results = document.cookie.match(/username=(.+?)(;|$)/);
    out=(results[1]); // user
    $('#name').html(out);
    var user=$('#name').html();
    $.post(
        "../admin/php/core.php",
        {
            "action" : "profilplayer",
            "name":user

        },
        function(data){
            data=JSON.parse(data);
            console.log(data);
            for(key in data){
                var grad=`${data[key].Гражданство}`
                $('#ochestvo').val(`${data[key].Отчество}`);
                $('#data').val(`${data[key].Дата_рождения}`);
                $('#nomer').val(`${data[key].Номер_телефона}`);
                $('#soc').val(`${data[key].соц_сети}`);
                $('#steam').val(`${data[key].ссылка_steam}`);
                }
            }
    );

}
function team2(data) {
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
function savefamelyusername(){
    //отправка счёта на сервер
    var username=$('#username-profil').val();
    var famely=$('#family-profil').val();
    var user=$('#name').html();
        $.post(
        "../admin/php/core.php",
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
function loadfamelyusername(){
    var user=$('#name').html();
    $.post(
        "../admin/php/core.php",
        {
            "action" : "loadfamelyusername",
            "name":user

        },
        function(data){
            data=JSON.parse(data);
            console.log(data);
            for(key in data){
                var out="";
                var out1="";
                out+=`${data[key].Имя}`;
                out1+=`${data[key].Фамилия}`;
                if(out!="null" && out1!="null"){
                    $('#username-profil').val(out);
                    $('#family-profil').val(out1);
                }
            }
        }

    );

}
function saveprofilplayer(){
    var user=$('#name').html();
    var grazhdan=$('.pos3 option:selected').text();
    $.post(
        "../admin/php/core.php",
        {
            "action" : "checkplayer",
            "name":user,
        },
        function(data){
            console.log(data);
            if(data==1){
                $.post(
                    "../admin/php/core.php",
                    {
                        "action" : "updateprofilplayer",
                        "name":user,
                        "famaly":$('#family-profil').val(),
                        "username":$('#username-profil').val(),
                        "ochestvo":$('#ochestvo').val(),
                        "data":$('#data').val(),
                        "grazhdan":grazhdan,
                        "nomer":$('#nomer').val(),
                        "soc":$('#soc').val(),
                        "steam":$('#steam').val()
                },
                function(data){
                    if(data==1){
                        alert('Запись изменена')
                    }
                    else{
                        console.log(data);
                    }
                }
              )
            }
            else{
                $.post(
                    "../admin/php/core.php",
                    {
                        "action" : "saveprofilplayer",
                        "name":user,
                        "famaly":$('#family-profil').val(),
                        "username":$('#username-profil').val(),
                        "ochestvo":$('#ochestvo').val(),
                        "data":$('#data').val(),
                        "grazhdan":grazhdan,
                        "nomer":$('#nomer').val(),
                        "soc":$('#soc').val(),
                        "steam":$('#steam').val()
                },
                function(data){
                    if(data==1){
                        alert('Запись сохранена')
                    }
                    else{
                        console.log(data);
                    }
                }
              )
            }
        },
        
    );

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
function profil(){
    if(document.cookie ==""){;
        document.getElementById("swap").innerHTML="Войти";
    }
    else{

            document.getElementById("swap").innerHTML="Выйти";
    }
}
function newteam(){
    var user1=$('.zayavka2 option:selected').text();
    var user2=$('.zayavka3 option:selected').text();
    var user3=$('.zayavka4 option:selected').text();
    var user4=$('.zayavka5 option:selected').text();
    var user5=$('.zayavka6 option:selected').text();
    var team=$('#zayavka1').val();
    $.post(
        "../admin/php/core.php",
        {
            "action" : "newteam",
            "name":team,
            "user1":user1,
            "user2":user2,
            "user3":user3,
            "user4":user4,
            "user5":user5,
    },
    function(data){
        if(data==1){
            alert('Ваша заявка отправлена ')
        }
        else{
            console.log(data);
        }
    }
  );
}




$(document).ready(function () {
    $('#sub1').on('click',saveprofilplayer);
    $('#saveuser').on('click',savefamelyusername);
    $('#sozdanie').on('click',newteam);
    profil();
    load();
    init();
    loadfamelyusername();
});