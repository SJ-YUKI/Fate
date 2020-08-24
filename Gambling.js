function inp1() {
    document.getElementById("inp1").value = "";
    document.getElementById("inp1").style.color = "#495e79";
}

debugger;

$(document).ready(function () {
    $("#sta").hide();
});

$(document).ready(function () {
    $("#tru").click(function () {
        $("#sta").show();
    });
});

function check() {
    var m = document.getElementById("inp1").value;
    var b = /^\d+$/.test(m);
    if (b == true) {
        var a = Math.random();
        if (a > 0.5) {
            document.getElementById("alr").innerHTML = "+" + m;
            document.getElementById("alr").style.color = "#58cd18";
        }
        else {
            document.getElementById("alr").innerHTML = "-" + m;
            document.getElementById("alr").style.color = "#db2424";
        }
    }
    if (b != true) {
        alert("您必须输入数字！");
    }
}

$(document).ready(function () {
    $("#tru").click(function () {
        $("#sta").fadeOut(3000);
    });
});
