
function profil(){
    if(document.cookie ==""){;
        document.getElementById("swap").innerHTML="Войти";
        document.getElementById("vxod").innerHTML="";
    }
    else{
        var out="";
        var results = document.cookie.match(/username=(.+?)(;|$)/);
        out=(results[1]); // user
        if(out=="admin"){
            document.getElementById("vxod").innerHTML="Админ";
            $("#vxod").attr("href", "/admin/stats.html")
            document.getElementById("swap").innerHTML="Выйти";
        }
        else{
            document.getElementById("swap").innerHTML="Выйти";
            document.getElementById("vxod").innerHTML="Профиль";
        }
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
    var id=$('.nick select option:selected').attr('data-id');
    console.log(id);
}



$(document).ready(function () {
    profil();
});
