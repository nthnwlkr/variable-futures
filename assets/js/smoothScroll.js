$(document).on("click", "a[href^='/#']", function() {
        var e = this
          , t = $("html, body")
          , n = this.href.match(/#([^/#]*)$/)[1];
        if ("" === n)
            return t.animate({
                scrollTop: 0
            }, 650, function() {
                document.location.hash = ""
            }),
            !1;
        var r = $("[id='" + n + "']");
        return r.length ? (t.animate({
            scrollTop: r.offset().top
        }, 650, function() {
            document.location.hash = e.hash,
            /^fn:/.test(n) && r.animateCss("flash")
        }),
        !1) : void 0
    })