(this.webpackJsonptest = this.webpackJsonptest || []).push([[0], { 116: function (e, a, t) { e.exports = t(277) }, 122: function (e, a, t) { }, 124: function (e, a, t) { }, 125: function (e, a, t) { }, 126: function (e, a, t) { }, 131: function (e, a, t) { }, 132: function (e, a, t) { }, 133: function (e, a, t) { }, 134: function (e, a, t) { }, 135: function (e, a, t) { }, 136: function (e, a, t) { }, 137: function (e, a, t) { }, 138: function (e, a, t) { }, 139: function (e, a, t) { }, 140: function (e, a, t) { }, 141: function (e, a, t) { }, 142: function (e, a, t) { }, 272: function (e, a, t) { }, 273: function (e, a, t) { }, 274: function (e, a, t) { }, 275: function (e, a, t) { }, 276: function (e, a, t) { }, 277: function (e, a, t) { "use strict"; t.r(a); var n = t(0), s = t.n(n), o = t(106), r = t.n(o), c = (t(121), t(122), t(1)), l = t.n(c), i = t(5), m = (t(124), t(125), t(8)), u = (t(126), s.a.forwardRef((function (e, a) { return s.a.createElement(s.a.Fragment, null, e.data.map((function (t, n) { return s.a.createElement(m.b, { className: "link_style_1 nav_element", to: "#", activeClassName: t.active, key: n, onClick: function () { return e.scrollTo(a[n]) } }, t.name) }))) }))), p = (t(131), function () { var e = s.a.useState(""), a = Object(i.a)(e, 2), t = a[0], o = a[1]; return Object(n.useEffect)((function () { !function () { var e, a, n, s, r, c; l.a.async((function (i) { for (; ;)switch (i.prev = i.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users/1", i.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")); case 3: return e = i.sent, i.next = 6, l.a.awrap(e.json()); case 6: a = i.sent, n = a.user, s = n.name, r = n.email, c = n.photo, o(t = { name: s, email: r, photo: c }); case 9: case "end": return i.stop() } })) }() }), []), s.a.createElement("div", { className: "account" }, s.a.createElement("div", { className: "account_data_wrap" }, s.a.createElement("p", { className: "account_name" }, t.name), s.a.createElement("p", { className: "account_email" }, t.email)), s.a.createElement("img", { className: "account_avatar", src: t.photo, alt: "avatart", title: "avatar" }), s.a.createElement("img", { className: "account_sign_out", src: "./img/icons/sign-out.svg", alt: "sign out", title: "sign out" })) }), d = (t(132), t(133), s.a.forwardRef((function (e, a) { var t = s.a.useState(""), o = Object(i.a)(t, 2), r = o[0], c = o[1]; return Object(n.useEffect)((function () { !function () { var e, a, t, n, s, o; l.a.async((function (i) { for (; ;)switch (i.prev = i.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users/1", i.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")); case 3: return e = i.sent, i.next = 6, l.a.awrap(e.json()); case 6: a = i.sent, t = a.user, n = t.name, s = t.email, o = t.photo, c(r = { name: n, email: s, photo: o }); case 9: case "end": return i.stop() } })) }() }), []), s.a.createElement("div", { className: "wrap_side_bar wrap_side_bar".concat(e.open ? "_open" : "") }, s.a.createElement("div", { className: "side_bar" }, s.a.createElement("div", { className: "account" }, s.a.createElement("div", { className: "account_data_wrap" }, s.a.createElement("p", { className: "account_name" }, r.name), s.a.createElement("p", { className: "account_email" }, r.email)), s.a.createElement("img", { className: "account_avatar", src: r.photo, alt: "avatart", title: "avatar" })), s.a.createElement("div", { className: "links" }, e.data.map((function (t, n) { return s.a.createElement(m.b, { ref: a, className: "link_style_1 nav_element", to: "#", activeClassName: t.active, key: n, onClick: function () { e.scrollTo(a[n]), e.close() } }, t.name) }))))) }))), f = s.a.forwardRef((function (e, a) { var t = s.a.useState(!1), o = Object(i.a)(t, 2), r = o[0], c = o[1], l = function () { c(!r) }; return s.a.createElement("header", null, s.a.createElement("div", { className: "container" }, s.a.createElement("div", { className: "row" }, s.a.createElement("div", { className: "col-lg-2 col-md-3 col-sm-6 col-6" }, s.a.createElement("div", { className: "logo" }, s.a.createElement("img", { src: e.data.logo, alt: "abz.agency", title: "abz.agency" }))), function () { var e = s.a.useState([0]), a = Object(i.a)(e, 2), t = a[0], o = a[1]; return Object(n.useLayoutEffect)((function () { function e() { o([window.innerWidth]) } return window.addEventListener("resize", e), e(), function () { return window.removeEventListener("resize", e) } }), []), t }() > 991 ? s.a.createElement(s.a.Fragment, null, s.a.createElement("div", { className: "col-lg-7 nav" }, s.a.createElement(u, { data: e.data.links, scrollTo: e.scrollTo, ref: a })), s.a.createElement("div", { className: "col-lg-3" }, s.a.createElement(p, { user: e.data.user }))) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", { className: "offset-md-8 col-md-1 offset-sm-3 col-sm-3 col-3 offset-3 button_open" }, s.a.createElement("img", { src: e.data.menu, alt: "menu", title: "open menu", onClick: l })), s.a.createElement(d, { data: e.data.links, open: r, close: l, scrollTo: e.scrollTo, ref: a }))))) })), h = (t(134), s.a.forwardRef((function (e, a) { return s.a.createElement("section", { className: "about_me", ref: a }, s.a.createElement("div", { className: "container" }, s.a.createElement("div", { className: "row" }, s.a.createElement("div", { className: "col-lg-7" }, s.a.createElement("h1", null, e.data.h1), s.a.createElement("p", { className: "par1" }, e.data.p), s.a.createElement("button", { className: "button button_frst", onClick: function () { return e.scroll(e.elemScroll) } }, "Sign Up"))))) }))), g = (t(135), t(136), function (e) { var a = e.data, t = e.scroll, n = e.elemScroll; return s.a.createElement(s.a.Fragment, null, s.a.createElement("h2", { className: "text-center" }, a.h2), s.a.createElement("div", { className: "row" }, s.a.createElement("div", { className: "col-lg-4 col-md-4 col-sm-12" }, s.a.createElement("img", { src: a.src, alt: "man-mobile", title: "man with mobile" })), s.a.createElement("div", { className: "col-lg-8 col-md-8 col-sm-12" }, s.a.createElement("div", { className: "relationships_wrap" }, s.a.createElement("h3", null, a.h3), s.a.createElement("p", { className: "par2" }, a.p), s.a.createElement("p", { className: "par2 relationships_par_margin" }, a.p_scnd), s.a.createElement("a", { href: "#", className: "link_style_3", onClick: function (e) { e.preventDefault(), t(n) } }, "Sign Up"))))) }), v = (t(137), t(138), function (e) { var a = e.photo, t = e.header, n = e.description, o = e.className; return s.a.createElement("div", { className: "col-lg-4" }, s.a.createElement("div", { className: "feature " + o }, s.a.createElement("img", { src: a, alt: "web development", title: "web technology" }), s.a.createElement("h3", null, t), s.a.createElement("p", { className: "par2" }, n))) }), E = function (e) { var a = e.data; return s.a.createElement(s.a.Fragment, null, s.a.createElement("h2", { className: "otherHeader" }, a.h2[0], " ", s.a.createElement("br", null), " ", a.h2[1]), s.a.createElement("div", { className: "row" }, a.features.map((function (e, a) { return s.a.createElement(v, { photo: e.src, header: e.head, description: e.description, key: a, className: "feature" + a }) })))) }, _ = s.a.forwardRef((function (e, a) { return s.a.createElement("section", { className: "relationships", ref: a }, s.a.createElement("div", { className: "container text-left" }, s.a.createElement(g, { data: e.data.lets_get_acquainted, scroll: e.scroll, elemScroll: e.elemScroll }), s.a.createElement(E, { data: e.data.About_my_relationships }))) })), N = (t(139), s.a.forwardRef((function (e, a) { return s.a.createElement("section", { className: "general_requirements", ref: a }, s.a.createElement("div", { className: "container" }, s.a.createElement("h2", { className: "text-center" }, e.data.h2), s.a.createElement("div", { className: "row flex_order_block" }, s.a.createElement("div", { className: "col-lg-6 col-md-6 general_requirements_text_wrap" }, e.data.p.map((function (e, a) { return s.a.createElement("p", { className: "par2 par2_" + a, key: a }, e) }))), s.a.createElement("div", { className: "col-lg-6 col-md-6" }, s.a.createElement("img", { src: e.data.photo, alt: "man laptop", title: "man laptop" }))))) }))), b = (t(140), t(141), function (e) { var a = e.photo, t = e.name, n = e.description, o = e.email, r = e.number, c = e.className, l = e.int; return s.a.createElement("div", { className: "col-lg-4 col-md-4" }, s.a.createElement("div", { className: "user " + c }, s.a.createElement("img", { src: a, alt: "User", title: "user " + l }), s.a.createElement("div", { className: "user_wrap" }, s.a.createElement("h3", null, t, s.a.createElement("p", { className: "tool_tip par3" }, t)), s.a.createElement("p", { className: "par3" }, n), s.a.createElement("p", { className: "par3" }, o, s.a.createElement("p", { className: "tool_tip par3" }, o)), s.a.createElement("p", { className: "par3" }, r)))) }), w = s.a.forwardRef((function (e, a) { return s.a.createElement("section", { className: "users", ref: a }, s.a.createElement("div", { className: "container" }, s.a.createElement("h2", { className: "text-center" }, e.data.h2), s.a.createElement("p", { className: "par1 text-center" }, e.data.p), s.a.createElement("div", { className: "row" }, e.users.map((function (e, a) { return s.a.createElement(b, { photo: e.photo, name: e.name, description: e.position, email: e.email, number: e.phone, key: a, int: a + 1, className: "user_" + a }) }))), e.vissible && s.a.createElement("button", { className: "button button_scnd", onClick: e.onClick }, "Show more"))) })), y = t(108), k = t(109), x = t(115), S = t(110), j = t(39), O = t(114), C = (t(142), t(113)), q = t(16), T = (t(272), function (e) { var a = e.close, t = e.date; return console.log(t), s.a.createElement("div", { className: "modal" }, s.a.createElement("div", { className: "modal_body" }, s.a.createElement("h4", null, t.h4), s.a.createElement("p", null, t.p), s.a.createElement("a", { className: "link_style_3", href: "#", onClick: function (e) { e.preventDefault(), a() } }, "OK"))) }), R = /^[\+]{0,1}380([0-9]{9})$/i, z = function (e) { function a(e) { var t; return Object(y.a)(this, a), (t = Object(x.a)(this, Object(S.a)(a).call(this, e))).state = { modal: !1, positions: {} }, t.modalOpen = t.modalOpen.bind(Object(j.a)(t)), t } return Object(O.a)(a, e), Object(k.a)(a, [{ key: "modalOpen", value: function () { this.setState({ modal: !this.state.modal }) } }, { key: "componentDidMount", value: function () { var e = this; !function () { var a, t; l.a.async((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/positions", n.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")); case 3: return a = n.sent, n.next = 6, l.a.awrap(a.json()); case 6: t = n.sent, e.setState({ positions: t.positions }); case 8: case "end": return n.stop() } })) }() } }, { key: "render", value: function () { var e = this, a = this.props, t = a.forwardRef, n = a.data, o = a.getNewUser; return console.log(this.state.positions), s.a.createElement("section", { className: "sign_up", ref: t }, s.a.createElement("div", { className: "container" }, s.a.createElement("h2", { className: "text-center" }, n.h2), s.a.createElement("p", { className: "text-center par1" }, n.p), s.a.createElement(C.a, { initialValues: { name: "", email: "", phone: "", position_id: "0", photo: "" }, onSubmit: function (a, t) { var n, s, r, c, i, m; return l.a.async((function (u) { for (; ;)switch (u.prev = u.next) { case 0: return n = t.resetForm, (s = new FormData).append("position_id", a.position_id), s.append("name", a.name), s.append("email", a.email), s.append("phone", a.phone), s.append("photo", a.photo), console.log(s.get("name")), console.log(s.get("email")), console.log(s.get("phone")), console.log(s.get("position_id")), console.log(s.get("photo")), "https://frontend-test-assignment-api.abz.agency/api/v1/token", u.next = 15, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")); case 15: return r = u.sent, u.next = 18, l.a.awrap(r.json()); case 18: return c = u.sent, u.next = 21, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", { method: "POST", body: s, headers: { Token: c.token } })); case 21: return i = u.sent, u.next = 24, l.a.awrap(i.json()); case 24: m = u.sent, console.log(m), o(), n({ values: { name: " \u043a\u0430\u043a\u0430", email: "\u043a\u0430\u043a\u0430\u043a ", phone: " \u043a\u0430\u043a\u043a\u0430", position_id: "0", photo: " " } }), e.modalOpen(), console.log(a.position_id), console.log(a.name), console.log(a.email), console.log(a.phone), console.log(a.photo); case 34: case "end": return u.stop() } })) }, validationSchema: q.object().shape({ name: q.string().required("name is required"), email: q.string().email().required("email is Required"), phone: q.string().matches(R, "Error").required("phone is required"), position_id: q.string().required("position_id is required"), photo: q.string().required("photo is required") }) }, (function (a) { var t = a.values, o = a.touched, r = a.errors, c = a.dirty, l = a.isSubmitting, i = a.handleChange, m = a.handleBlur, u = a.handleSubmit; return s.a.createElement("form", { onSubmit: u }, s.a.createElement("div", { className: "row" }, n.inputs.map((function (e, a) { return s.a.createElement("div", { key: a, className: "col-lg-4 col-md-4" }, s.a.createElement("span", { className: "label label_" + a, style: r[e.name] && o[e.name] && { color: "red" } }, e.label), s.a.createElement("input", { id: e.id, type: e.type, name: e.name, placeholder: r[e.name] && o[e.name] ? "wrong input" : e.placeholder, className: "input_data input_data_".concat(a, " ").concat(r[e.name] && o[e.name] ? "text-input error" : "text-input"), onChange: i, onBlur: m, value: t["$[inner.name]"] }), r[e.name] && o[e.name] && s.a.createElement("div", { className: "input-feedback" }, r[e.name])) })), s.a.createElement("div", { className: "col-6 col-md-6 col-sm-12 col-12" }, s.a.createElement("span", { className: "after" }), s.a.createElement("select", { name: "position_id", value: t.position_id, onChange: i, onBlur: m, className: "".concat(r.position_id && o.position_id ? "text-input error" : "text-input") }, s.a.createElement("option", { value: "0", hidden: !0, disabled: !0, selected: !0 }, "Select your position"), e.state.positions.length > 0 && e.state.positions.map((function (e, a) { return s.a.createElement("option", { value: e.id, key: a }, e.name) }))), r.position_id && o.position_id && s.a.createElement("div", { className: "input-feedback" }, r.position_id)), s.a.createElement("div", { className: "col-lg-6 col-md-6 text-right" }, s.a.createElement("label", { className: "custom-file-upload button_scnd" }, s.a.createElement("input", { id: "photo", name: "photo", type: "file", onChange: function (e) { t.photo = e.currentTarget.files[0] }, className: "".concat(r.photo && o.photo ? "text-input error" : "text-input") }), "Upload", s.a.createElement("span", { className: "img_info" }, "Upload your photo"), s.a.createElement("span", { className: "file_info" }, n.photo)), r.photo && o.photo && s.a.createElement("div", { className: "input-feedback" }, r.photo)), s.a.createElement("button", { type: "submit", disabled: l, className: "button button_frst".concat(!c || l ? "_disabled" : "") }, "Sign Up"))) }))), this.state.modal && s.a.createElement(T, { date: n.modal, close: this.modalOpen })) } }]), a }(s.a.Component), U = (t(273), function (e) { var a = e.nav, t = s.a.createRef(); return s.a.createElement("div", { className: "row footer_nav_wrap" }, s.a.createElement("div", { className: "col-lg-2 offset-lg-0 col-md-3 col-sm-6 offset-sm-3 offset-3 col-6" }, s.a.createElement("img", { src: a.logo, alt: "logo", title: "logo" })), s.a.createElement("div", { className: "col-lg-7 offset-lg-3 col-md-8 offset-md-1" }, a.links.map((function (e, a) { return s.a.createElement(m.b, { ref: t, className: "link_style_1 nav_element", to: "#", key: a, onClick: function () { console.log(t.current) } }, e.name) })))) }), A = (t(274), function (e) { var a = e.links; return s.a.createElement("div", { className: "row contacts_wrap" }, s.a.createElement("div", { className: "col-lg-4 col-md-4" }, s.a.createElement("ul", { className: "contacts" }, a[0].map((function (e, a) { return s.a.createElement("li", { key: a, className: "contacts_element_".concat(a + 1) }, s.a.createElement("img", { src: e.src, alt: "contact " + a }), s.a.createElement("p", null, e.li)) })))), s.a.createElement("div", { className: "col-lg-2 col-md-2" }, s.a.createElement("ul", { className: "frst_links_footer" }, a[1].map((function (e, a) { return s.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, s.a.createElement("a", { href: "#" }, e)) })))), s.a.createElement("div", { className: "col-lg-2 col-md-2" }, s.a.createElement("ul", { className: "scnd_links_footer" }, a[2].map((function (e, a) { return s.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, s.a.createElement("a", { href: "#" }, e)) })))), s.a.createElement("div", { className: "col-lg-2 col-md-2" }, s.a.createElement("ul", { className: "thrd_links_footer" }, a[3].map((function (e, a) { return s.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, s.a.createElement("a", { href: "#" }, e)) })))), s.a.createElement("div", { className: "col-lg-2 col-md-2" }, s.a.createElement("ul", { className: "frth_links_footer" }, a[4].map((function (e, a) { return s.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, s.a.createElement("a", { href: "#" }, e)) }))))) }), F = (t(275), function (e) { var a = e.icons; return s.a.createElement("div", { className: "row icons" }, s.a.createElement("div", { className: "col-lg-3 col-md-4" }, s.a.createElement("p", null, a[6])), s.a.createElement("div", { className: "offset-lg-5 col-lg-4 col-md-4 offset-md-4" }, a[5].map((function (e, a) { return s.a.createElement("div", { className: "icon icon_".concat(1 + a) }, s.a.createElement("img", { src: e, alt: "" })) })))) }), L = (t(276), function (e) { var a = e.data; return s.a.createElement("footer", null, s.a.createElement("div", { className: "container" }, s.a.createElement(U, { nav: a.nav }), s.a.createElement(A, { links: a.footer }), s.a.createElement(F, { icons: a.footer }))) }); var B = function (e) { var a = e.data, t = s.a.useState([]), o = Object(i.a)(t, 2), r = o[0], c = o[1], m = s.a.useState(12), u = Object(i.a)(m, 2), p = u[0], d = u[1], g = s.a.useState(!0), v = Object(i.a)(g, 2), E = v[0], b = v[1], y = s.a.createRef(), k = s.a.createRef(), x = s.a.createRef(), S = s.a.createRef(), j = s.a.createRef(), O = [y, k, x, S, j], C = function (e) { var a = setInterval((function () { window.pageYOffset < e.current.offsetTop ? window.scrollBy(0, 100) : clearInterval(a) }), 20) }, q = function () { var e, a, t, n, s, o, i, m, u, p, d; return l.a.async((function (f) { for (; ;)switch (f.prev = f.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6", f.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")); case 3: return e = f.sent, f.next = 6, l.a.awrap(e.json()); case 6: for (a = f.sent, t = [], n = 0; n < a.users.length; n++)s = a.users[n], o = s.photo, i = s.name, m = s.position, u = s.email, p = s.phone, d = { photo: o, name: i, position: m, email: u, phone: p }, t.push(d); c(r = t); case 10: case "end": return f.stop() } })) }; return Object(n.useEffect)((function () { q() }), []), s.a.createElement("div", { className: "main_container" }, s.a.createElement(f, { data: a.nav, scrollTo: C, ref: O }), s.a.createElement(h, { data: a.about_me, ref: y, scroll: C, elemScroll: O[4] }), s.a.createElement(_, { data: a.relationships, ref: k, scroll: C, elemScroll: O[4] }), s.a.createElement(N, { data: a.general_requirements, ref: x }), s.a.createElement(w, { data: a.users, users: r, onClick: function () { !function () { var e, a, t, n, s, o, i, m, u, f, h, g; l.a.async((function (v) { for (; ;)switch (v.prev = v.next) { case 0: return e = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=".concat(p), v.next = 3, l.a.awrap(fetch(e)); case 3: return a = v.sent, v.next = 6, l.a.awrap(a.json()); case 6: for (t = v.sent, n = [], s = 0; s < t.users.length; s++)o = t.users[s], i = o.photo, m = o.name, u = o.position, f = o.email, h = o.phone, g = { photo: i, name: m, position: u, email: f, phone: h }, n.push(g); c(r = n), d(p += 6), t.links.next_url || b(!1); case 12: case "end": return v.stop() } })) }() }, vissible: E, ref: S }), s.a.createElement(z, { data: a.sign_Up, getNewUser: q, forwardRef: j }), s.a.createElement(L, { data: a })) }; Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); r.a.render(s.a.createElement(m.a, null, s.a.createElement(B, { data: { nav: { logo: "./img/logo/logo.svg", menu: "./img/icons/line-menu.svg", links: [{ name: "About me", active: "link_active" }, { name: "Relationships", active: "" }, { name: "Requirements", active: "" }, { name: "Users", active: "" }, { name: "Sign Up", active: "" }] }, about_me: { h1: "Test assignment for Frontend Developer position", p: "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!" }, relationships: { lets_get_acquainted: { src: "./img/imgs/man-mobile.svg", h2: "Let's get acquainted", h3: "I am cool frontend developer", p: "When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.", p_scnd: "Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web." }, About_my_relationships: { h2: ["About my relationships with", "web-development"], features: [{ src: "./img/imgs/html.svg", head: "I'm in love with HTML", description: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications." }, { src: "./img/imgs/css.svg", head: "CSS is my best friend", description: "Cascading Style Sheets (CSS) \nis a style sheet language used for describing the presentation of a document\n written in a markup language like HTML." }, { src: "./img/imgs/javascript.svg", head: "JavaScript is my passion", description: "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm." }] } }, general_requirements: { h2: "General requirements for the test task", p: ["Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.", "If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and \n consider measuring a variety of real-world user-centric performance metrics.", "Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions."], photo: "./img/imgs/man-laptop-v1.svg" }, users: { h2: "Our cheerful users", p: "Attention! Sorting users by registration date" }, sign_Up: { h2: "Register to get a work", p: "Attention! After successful registration and alert, update the list of users in the block from the top", inputs: [{ type: "text", placeholder: "Your name", label: "Name", name: "name" }, { type: "email", placeholder: "Your email", label: "Email", name: "email" }, { type: "tel", placeholder: "+38(___)___ __ __", label: "Phone", name: "phone" }], photo: "File format jpg  up to 5 MB, the minimum size \n of 70x70px", modal: { h4: "Congratulations", p: "You have successfully passed the registration" } }, footer: [[{ src: "./img/icons/mail.svg", li: "work.of.future@gmail.com" }, { src: "./img/icons/phone.svg", li: "+38 (050) 789 24 98 " }, { src: "./img/icons/cellphone.svg", li: "+38 (095) 556 08 45" }], ["News", "Blog", "Partners", "Shop"], ["Overview", "Design", "Code", "Collaborate"], ["Tutorials", "Resources", "Guides", "Examples"], ["FAQ", "Terms", "Conditions", "Help"], ["./img/icons/facebook.svg", "./img/icons/linkedin.svg", "./img/icons/instagram.svg", "./img/icons/twitter.svg", "./img/icons/pinterest.svg"], "\xa9 abz.agency specially for the test task"] } })), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister() })) } }, [[116, 1, 2]]]);
//# sourceMappingURL=main.396eddcb.chunk.js.map