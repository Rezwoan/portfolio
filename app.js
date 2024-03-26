const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')


function PageTransitions() {
    // Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.className = currentBtn.className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }

    allSections.forEach((section) => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                // Remove active from all buttons first
                secBtns.forEach((btn) => btn.classList.remove("active"));
                e.target.classList.add("active");

                // Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });

}

PageTransitions();


// auto-typing
var AutoTyping = (function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
            )
                for (var i in e)
                    r.d(
                        n,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 0))
    );
})([
    function (e, t, r) {
        "use strict";
        r.r(t);
        t.default = class {
            constructor(
                e,
                t,
                {
                    typeSpeed: r = 150,
                    deleteSpeed: n = 150,
                    waitBeforeDelete: i = 1e3,
                    waitBetweenWords: o = 1e3,
                    writeWhole: l = !1,
                } = {}
            ) {
                (this.selector = e),
                    (this.text = t),
                    (this.typeSpeed = r),
                    (this.deleteSpeed = n),
                    (this.waitBeforeDelete = i),
                    (this.waitBetweenWords = o),
                    (this.writeWhole = l),
                    (this.el = document.querySelector(e));
            }
            async start() {
                this.el;
                for (let e = 0; e < this.text.length; e++) {
                    const t = this.text[e];
                    let r = t.split("");
                    this.writeWhole && (r = [t]),
                        await this.writeText(r),
                        e == this.text.length - 1 && (e = -1);
                }
            }
            writeText(e) {
                let t = this;
                return new Promise((r) => {
                    const n = this.el;
                    let i = !1,
                        o = setInterval(() => {
                            let l = e.shift();
                            i && ((i = !1), (l = " " + l)),
                                (i = " " == l),
                                (n.innerText += l),
                                0 == e.length &&
                                (clearInterval(o),
                                    setTimeout(() => {
                                        let e = setInterval(() => {
                                            const i = n.innerText;
                                            t.writeWhole
                                                ? (n.innerText = "")
                                                : (n.innerText = i.substr(0, i.length - 1)),
                                                0 == n.innerText.length &&
                                                (clearInterval(e),
                                                    setTimeout(() => r(), this.waitBetweenWords));
                                        }, this.deleteSpeed);
                                    }, this.waitBeforeDelete));
                        }, this.typeSpeed);
                });
            }
        };
    },
]).default;


const exampleText = ['Web Developer', 'Wev Designer', 'Programmer', 'Engineer'];
const exampleTyping = new AutoTyping('#text', exampleText, {
    typeSpeed: 100,
    deleteSpeed: 100,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});
exampleTyping.start()

