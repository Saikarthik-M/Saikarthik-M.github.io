var navbar = document.getElementById("navbar");

function getCookie(e) {
    for (var t = e + "=", o = document.cookie.split(";"), n = 0; n < o.length; n++) {
        for (var a = o[n];
            " " == a.charAt(0);) a = a.substring(1);
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
    }
    return ""
}

function emailsender() {
    if ("" == getCookie("mailsent")) {
        var e = document.getElementById("Name"),
            t = document.getElementById("Email"),
            o = document.getElementById("message");
        Email.send({
            Host: "smtp.gmail.com",
            SecureToken: "2c286f16-3f5b-473d-aa11-e2f16e06c7af",
            To: "saiotpmail@gmail.com",
            From: t.value,
            Subject: e.value + " sent you a message from portfolio",
            Body: o.value
        }).then(e => notifier(e)), e.value = "", t.value = "", o.value = ""
    } else alert("Contact after 1 hour")
}

function setCookie(e, t) {
    var o = new Date;
    o.setTime(o.getTime() + 36e5);
    var n = "expires=" + o.toUTCString();
    document.cookie = e + "=" + t + ";" + n + ";path=/"
}

function notifier(e) {
    "OK" == e ? (alert("Message sent"), setCookie("mailsent", "true")) : alert("Something went wrong ! Try later")
}

function navigate(e) {
    document.getElementById(e).scrollIntoView()
}
window.onscroll = function () {
    document.body.scrollTop > 755.2000122070312 || document.documentElement.scrollTop > 755.2000122070312 ? navbar.classList.add("fixed-top") : navbar.classList.remove("fixed-top")
};