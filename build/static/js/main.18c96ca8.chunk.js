(this.webpackJsonptest = this.webpackJsonptest || []).push([[0], { 131: function (e, a, t) { e.exports = t(292) }, 137: function (e, a, t) { }, 139: function (e, a, t) { }, 140: function (e, a, t) { }, 141: function (e, a, t) { }, 146: function (e, a, t) { }, 147: function (e, a, t) { }, 148: function (e, a, t) { }, 149: function (e, a, t) { }, 150: function (e, a, t) { }, 151: function (e, a, t) { }, 152: function (e, a, t) { }, 153: function (e, a, t) { }, 154: function (e, a, t) { }, 155: function (e, a, t) { }, 156: function (e, a, t) { }, 157: function (e, a, t) { }, 287: function (e, a, t) { }, 288: function (e, a, t) { }, 289: function (e, a, t) { }, 290: function (e, a, t) { }, 291: function (e, a, t) { }, 292: function (e, a, t) { "use strict"; t.r(a); var n = t(0), r = t.n(n), o = t(34), s = t.n(o), c = (t(136), t(137), t(6)), l = t.n(c), i = t(18), m = (t(139), t(140), t(23)), u = (t(141), r.a.forwardRef((function (e, a) { return r.a.createElement(r.a.Fragment, null, e.data.map((function (t, n) { return r.a.createElement(m.b, { className: "link_style_1 nav_element", to: "#", activeClassName: t.active, key: n, onClick: function () { return e.scrollTo(a[n]) } }, t.name) }))) }))), p = (t(146), function () { var e = r.a.useState(""), a = Object(i.a)(e, 2), t = a[0], o = a[1]; return Object(n.useEffect)((function () { !function () { var e, a, n, r, s, c; l.a.async((function (i) { for (; ;)switch (i.prev = i.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users/1", i.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")); case 3: return e = i.sent, i.next = 6, l.a.awrap(e.json()); case 6: a = i.sent, n = a.user, r = n.name, s = n.email, c = n.photo, o(t = { name: r, email: s, photo: c }); case 9: case "end": return i.stop() } })) }() }), []), r.a.createElement("div", { className: "account" }, r.a.createElement("div", { className: "account_data_wrap" }, r.a.createElement("p", { className: "account_name" }, t.name), r.a.createElement("p", { className: "account_email" }, t.email)), r.a.createElement("img", { className: "account_avatar", src: t.photo, alt: "avatart", title: "avatar" }), r.a.createElement("img", { className: "account_sign_out", src: "./img/icons/sign-out.svg", alt: "sign out", title: "sign out" })) }), d = (t(147), t(148), r.a.forwardRef((function (e, a) { var t = r.a.useState(""), o = Object(i.a)(t, 2), s = o[0], c = o[1]; return Object(n.useEffect)((function () { !function () { var e, a, t, n, r, o; l.a.async((function (i) { for (; ;)switch (i.prev = i.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users/1", i.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")); case 3: return e = i.sent, i.next = 6, l.a.awrap(e.json()); case 6: a = i.sent, t = a.user, n = t.name, r = t.email, o = t.photo, c(s = { name: n, email: r, photo: o }); case 9: case "end": return i.stop() } })) }() }), []), r.a.createElement("div", { className: "wrap_side_bar wrap_side_bar".concat(e.open ? "_open" : "") }, r.a.createElement("div", { className: "side_bar" }, r.a.createElement("div", { className: "account" }, r.a.createElement("div", { className: "account_data_wrap" }, r.a.createElement("p", { className: "account_name" }, s.name), r.a.createElement("p", { className: "account_email" }, s.email)), r.a.createElement("img", { className: "account_avatar", src: s.photo, alt: "avatart", title: "avatar" })), r.a.createElement("div", { className: "links" }, e.data.map((function (t, n) { return r.a.createElement(m.b, { ref: a, className: "link_style_1 nav_element", to: "#", activeClassName: t.active, key: n, onClick: function () { e.scrollTo(a[n]), e.close() } }, t.name) }))))) }))), f = r.a.forwardRef((function (e, a) { var t = r.a.useState(!1), o = Object(i.a)(t, 2), s = o[0], c = o[1], l = function () { c(!s) }; return r.a.createElement("header", null, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: "row" }, r.a.createElement("div", { className: "col-lg-2 col-md-3 col-sm-6 col-6" }, r.a.createElement("div", { className: "logo" }, r.a.createElement("img", { src: e.data.logo, alt: "abz.agency", title: "abz.agency" }))), function () { var e = r.a.useState([0]), a = Object(i.a)(e, 2), t = a[0], o = a[1]; return Object(n.useLayoutEffect)((function () { function e() { o([window.innerWidth]) } return window.addEventListener("resize", e), e(), function () { return window.removeEventListener("resize", e) } }), []), t }() > 991 ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", { className: "col-lg-7 nav" }, r.a.createElement(u, { data: e.data.links, scrollTo: e.scrollTo, ref: a })), r.a.createElement("div", { className: "col-lg-3" }, r.a.createElement(p, { user: e.data.user }))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", { className: "offset-md-8 col-md-1 offset-sm-3 col-sm-3 col-3 offset-3 button_open" }, r.a.createElement("img", { src: e.data.menu, alt: "menu", title: "open menu", onClick: l })), r.a.createElement(d, { data: e.data.links, open: s, close: l, scrollTo: e.scrollTo, ref: a }))))) })), h = (t(149), r.a.forwardRef((function (e, a) { return r.a.createElement("section", { className: "about_me", ref: a }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: "row" }, r.a.createElement("div", { className: "col-lg-7" }, r.a.createElement("h1", null, e.data.h1), r.a.createElement("p", { className: "par1" }, e.data.p), r.a.createElement("button", { className: "button button_frst", onClick: function () { return e.scroll(e.elemScroll) } }, "Sign Up"))))) }))), g = (t(150), t(151), function (e) { var a = e.data, t = e.scroll, n = e.elemScroll; return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", { className: "text-center" }, a.h2), r.a.createElement("div", { className: "row" }, r.a.createElement("div", { className: "col-lg-4 col-md-4 col-sm-12" }, r.a.createElement("img", { src: a.src, alt: "man-mobile", title: "man with mobile" })), r.a.createElement("div", { className: "col-lg-8 col-md-8 col-sm-12" }, r.a.createElement("div", { className: "relationships_wrap" }, r.a.createElement("h3", null, a.h3), r.a.createElement("p", { className: "par2" }, a.p), r.a.createElement("p", { className: "par2 relationships_par_margin" }, a.p_scnd), r.a.createElement("a", { href: "#", className: "link_style_3", onClick: function (e) { e.preventDefault(), t(n) } }, "Sign Up"))))) }), v = (t(152), t(153), function (e) { var a = e.photo, t = e.header, n = e.description, o = e.className; return r.a.createElement("div", { className: "col-lg-4" }, r.a.createElement("div", { className: "feature " + o }, r.a.createElement("img", { src: a, alt: "web development", title: "web technology" }), r.a.createElement("h3", null, t), r.a.createElement("p", { className: "par2" }, n))) }), E = function (e) { var a = e.data; return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", { className: "otherHeader" }, a.h2[0], " ", r.a.createElement("br", null), " ", a.h2[1]), r.a.createElement("div", { className: "row" }, a.features.map((function (e, a) { return r.a.createElement(v, { photo: e.src, header: e.head, description: e.description, key: a, className: "feature" + a }) })))) }, b = r.a.forwardRef((function (e, a) { return r.a.createElement("section", { className: "relationships", ref: a }, r.a.createElement("div", { className: "container text-left" }, r.a.createElement(g, { data: e.data.lets_get_acquainted, scroll: e.scroll, elemScroll: e.elemScroll }), r.a.createElement(E, { data: e.data.About_my_relationships }))) })), _ = (t(154), r.a.forwardRef((function (e, a) { return r.a.createElement("section", { className: "general_requirements", ref: a }, r.a.createElement("div", { className: "container" }, r.a.createElement("h2", { className: "text-center" }, e.data.h2), r.a.createElement("div", { className: "row flex_order_block" }, r.a.createElement("div", { className: "col-lg-6 col-md-6 general_requirements_text_wrap" }, e.data.p.map((function (e, a) { return r.a.createElement("p", { className: "par2 par2_" + a, key: a }, e) }))), r.a.createElement("div", { className: "col-lg-6 col-md-6" }, r.a.createElement("img", { src: e.data.photo, alt: "man laptop", title: "man laptop" }))))) }))), w = (t(155), t(156), function (e) { var a = e.photo, t = e.name, n = e.description, o = e.email, s = e.number, c = e.className, l = e.int; return r.a.createElement("div", { className: "col-lg-4 col-md-4" }, r.a.createElement("div", { className: "user " + c }, r.a.createElement("img", { src: a, alt: "User", title: "user " + l }), r.a.createElement("div", { className: "user_wrap" }, r.a.createElement("h3", null, t, r.a.createElement("p", { className: "tool_tip par3" }, t)), r.a.createElement("p", { className: "par3" }, n), r.a.createElement("p", { className: "par3" }, o, r.a.createElement("p", { className: "tool_tip par3" }, o)), r.a.createElement("p", { className: "par3" }, s)))) }), N = r.a.forwardRef((function (e, a) { return r.a.createElement("section", { className: "users", ref: a }, r.a.createElement("div", { className: "container" }, r.a.createElement("h2", { className: "text-center" }, e.data.h2), r.a.createElement("p", { className: "par1 text-center" }, e.data.p), r.a.createElement("div", { className: "row" }, e.users.map((function (e, a) { return r.a.createElement(w, { photo: e.photo, name: e.name, description: e.position, email: e.email, number: e.phone, key: a, int: a + 1, className: "user_" + a }) }))), e.vissible && r.a.createElement("button", { className: "button button_scnd", onClick: e.onClick }, "Show more"))) })), y = t(7), x = t(8), k = t(9), S = t(10), C = t(1), O = t(11), j = (t(157), t(129)), z = t(36), T = (t(287), function (e) { var a = e.close, t = e.date, n = e.message; return console.log(t), r.a.createElement("div", { className: "modal" }, r.a.createElement("div", { className: "modal_body" }, r.a.createElement("h4", null, t.h4), r.a.createElement("p", null, t.p, " ", r.a.createElement("br", null), n), r.a.createElement("a", { className: "link_style_3", href: "#", onClick: function (e) { e.preventDefault(), a() } }, "OK"))) }), q = function (e) { var a = e.i, t = e.name, n = e.label, o = e.id, s = e.type, c = e.placeholder, l = e.handleChange, i = e.handleBlur, m = e.values, u = e.errors, p = e.touched; return r.a.createElement("div", { className: "col-lg-4 col-md-4" }, r.a.createElement("span", { className: "label label_" + a, style: u[t] && p[t] && { color: "red" } }, n), r.a.createElement("input", { id: o, type: s, name: t, placeholder: u[t] && p[t] ? "wrong input" : c, className: "input_data input_data_".concat(a, " ").concat(u[t] && p[t] ? "text-input error" : "text-input"), onChange: l, onBlur: i, value: m }), u[t] && p[t] && r.a.createElement("div", { className: "input-feedback" }, u[t])) }, R = t(27), F = t(130), B = t(5), I = function (e) { return B.z.DropdownIndicator && r.a.createElement(B.z.DropdownIndicator, e, r.a.createElement("span", { className: "after" })) }, U = function (e) { function a(e) { var t; return Object(y.a)(this, a), (t = Object(k.a)(this, Object(S.a)(a).call(this, e))).handleInputChange = function (e) { t.props.onChange("position_id", e), console.log(e) }, t.colourStyles = { container: function (e, a) { return { boxShadow: a.isFocused ? "0 8px 8px rgba(0,0,0,.8)" : "none", position: "relative" } }, control: function (e, a) { return { padding: "13px 10px 13px 16px", borderRadius: "3px", marginLeft: "2px", color: "#EF6C00", border: a.isFocused ? null : "1px solid grey", "-webkit-appearance": "none", position: "relative", background: "rgba(0, 0, 0, 0)", outline: "none", display: "flex", width: "100%", cursor: "pointer", borderColor: t.props.className.includes("text-input error") && "red" } }, option: function (e, a) { a.data; var t = a.isFocused, n = a.isSelected; return Object(R.a)({}, e, { padding: "9px 10px 9px 26px", borderRadius: "3px", color: n || t ? "#FC831F" : "black", backgroundColor: n ? "#FBE1CB" : t ? "#FBE1CB" : null }) }, singleValue: function (e) { return { color: "#EF6C00" } }, input: function (e) { return Object(R.a)({}, e) }, placeholder: function (e) { return Object(R.a)({}, e, { color: "#EF6C00" }) }, indicatorSeparator: function (e) { return Object(R.a)({}, e, { display: "none" }) }, menu: function () { return { position: "absolute", width: "100%", heigth: "100%", background: "white", boxShadow: "0 8px 8px rgba(0,0,0,.8)" } } }, t.state = { inputValue: "" }, t } return Object(O.a)(a, e), Object(x.a)(a, [{ key: "render", value: function () { var e = this; return r.a.createElement(F.a, { components: { DropdownIndicator: I }, cacheOptions: !0, id: this.props.id, loadOptions: function (a, t) { setTimeout((function () { t(e.props.option.length > 0 && e.props.option.map((function (e) { return { value: e.id, label: e.name } }))) }), 1e3) }, defaultOptions: !0, onChange: function (a) { return e.handleInputChange(a) }, onBlur: this.props.onBlur, value: this.props.value, styles: this.colourStyles, placeholder: "Select your position", isSearchable: !1, DropdownIndicator: !1 }) } }]), a }(r.a.Component), L = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i, A = /^[\+]{0,1}380([0-9]{9})$/i, D = function (e) { function a(e) { var t; return Object(y.a)(this, a), (t = Object(k.a)(this, Object(S.a)(a).call(this, e))).state = { modal: !1, positions: {}, success: !0, message: "" }, t.modalOpen = t.modalOpen.bind(Object(C.a)(t)), t } return Object(O.a)(a, e), Object(x.a)(a, [{ key: "modalOpen", value: function () { this.setState({ modal: !this.state.modal }) } }, { key: "componentDidMount", value: function () { var e = this; !function () { var a, t; l.a.async((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/positions", n.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")); case 3: return a = n.sent, n.next = 6, l.a.awrap(a.json()); case 6: t = n.sent, e.setState({ positions: t.positions }); case 8: case "end": return n.stop() } })) }() } }, { key: "render", value: function () { var e = this, a = this.props, t = a.forwardRef, n = a.data, o = a.getNewUser; return r.a.createElement("section", { className: "sign_up", ref: t }, r.a.createElement("div", { className: "container" }, r.a.createElement("h2", { className: "text-center" }, n.h2), r.a.createElement("p", { className: "text-center par1" }, n.p), r.a.createElement(j.a, { initialValues: { name: "", email: "", phone: "", position_id: "", photo: "" }, onSubmit: function (a, t) { var n, r, s, c, i, m; return l.a.async((function (u) { for (; ;)switch (u.prev = u.next) { case 0: return n = t.resetForm, (r = new FormData).append("position_id", a.position_id.value), r.append("name", a.name), r.append("email", a.email), r.append("phone", a.phone), r.append("photo", a.photo), "https://frontend-test-assignment-api.abz.agency/api/v1/token", u.next = 10, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")); case 10: return s = u.sent, u.next = 13, l.a.awrap(s.json()); case 13: return c = u.sent, u.next = 16, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", { method: "POST", body: r, headers: { Token: c.token } })); case 16: return i = u.sent, u.next = 19, l.a.awrap(i.json()); case 19: m = u.sent, console.log(m), e.setState({ success: m.success, message: m.message }), o(), n({}), e.modalOpen(); case 25: case "end": return u.stop() } })) }, validationSchema: z.object().shape({ name: z.string().min(2, "Too Short!").max(60, "Too Long!").required("name is required"), email: z.string().min(2, "Too Short!").max(100, "Too Long!").matches(L, "Error").required("email is Required"), phone: z.string().matches(A, "Error").required("phone is required"), position_id: z.string().required("position is required"), photo: z.string().required("photo is required") }) }, (function (a) { var t = a.values, o = a.touched, s = a.errors, c = a.dirty, l = a.isSubmitting, i = a.handleChange, m = a.handleBlur, u = a.handleSubmit, p = a.setFieldValue; return r.a.createElement("form", { onSubmit: u }, r.a.createElement("div", { className: "row" }, n.inputs.map((function (e, a) { return r.a.createElement(q, { key: a, i: a, name: e.name, label: e.label, id: e.id, type: e.type, placeholder: e.placeholder, handleChange: i, handleBlur: m, values: t["$[name]"], errors: s, touched: o }) })), r.a.createElement("div", { className: "col-6 col-md-6 col-sm-12 col-12" }, r.a.createElement(U, { name: "position_id", id: "color", onChange: p, onBlur: m, value: t.position_id, option: e.state.positions, className: "".concat(s.position_id && o.position_id ? "text-input error" : "text-input") }), s.position_id && o.position_id && r.a.createElement("div", { className: "input-feedback" }, s.position_id)), r.a.createElement("div", { className: "col-lg-6 col-md-6 text-right mt" }, r.a.createElement("label", { className: "custom-file-upload button_scnd" }, r.a.createElement("input", { id: "photo", name: "photo", type: "file", onChange: function (e) { t.photo = e.currentTarget.files[0] } }), "Upload", r.a.createElement("span", { className: "img_info " + "".concat(s.photo && o.photo ? "text-input error" : "text-input") }, "Upload your photo"), r.a.createElement("span", { className: "file_info" }, n.photo)), s.photo && o.photo && r.a.createElement("div", { className: "input-feedback input_feedback_photo" }, s.photo)), r.a.createElement("button", { type: "submit", disabled: l, className: "button button_frst".concat(!c || l ? "_disabled" : "") }, "Sign Up"))) }))), this.state.modal && r.a.createElement(T, { date: this.state.success ? n.modal[0] : n.modal[1], message: this.state.message, close: this.modalOpen })) } }]), a }(r.a.Component), H = (t(288), function (e) { var a = e.nav, t = r.a.createRef(); return r.a.createElement("div", { className: "row footer_nav_wrap" }, r.a.createElement("div", { className: "col-lg-2 offset-lg-0 col-md-3 col-sm-6 offset-sm-3 offset-3 col-6" }, r.a.createElement("img", { src: a.logo, alt: "logo", title: "logo" })), r.a.createElement("div", { className: "col-lg-7 offset-lg-3 col-md-8 offset-md-1" }, a.links.map((function (e, a) { return r.a.createElement(m.b, { ref: t, className: "link_style_1 nav_element", to: "#", key: a, onClick: function () { console.log(t.current) } }, e.name) })))) }), J = (t(289), function (e) { var a = e.links; return r.a.createElement("div", { className: "row contacts_wrap" }, r.a.createElement("div", { className: "col-lg-4 col-md-4" }, r.a.createElement("ul", { className: "contacts" }, a[0].map((function (e, a) { return r.a.createElement("li", { key: a, className: "contacts_element_".concat(a + 1) }, r.a.createElement("img", { src: e.src, alt: "contact " + a }), r.a.createElement("p", null, e.li)) })))), r.a.createElement("div", { className: "col-lg-2 col-md-2" }, r.a.createElement("ul", { className: "frst_links_footer" }, a[1].map((function (e, a) { return r.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, r.a.createElement("a", { href: "#" }, e)) })))), r.a.createElement("div", { className: "col-lg-2 col-md-2" }, r.a.createElement("ul", { className: "scnd_links_footer" }, a[2].map((function (e, a) { return r.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, r.a.createElement("a", { href: "#" }, e)) })))), r.a.createElement("div", { className: "col-lg-2 col-md-2" }, r.a.createElement("ul", { className: "thrd_links_footer" }, a[3].map((function (e, a) { return r.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, r.a.createElement("a", { href: "#" }, e)) })))), r.a.createElement("div", { className: "col-lg-2 col-md-2" }, r.a.createElement("ul", { className: "frth_links_footer" }, a[4].map((function (e, a) { return r.a.createElement("li", { key: a, className: "frst_link_footer frst_link_footer" + a }, r.a.createElement("a", { href: "#" }, e)) }))))) }), Y = (t(290), function (e) { var a = e.icons; return r.a.createElement("div", { className: "row icons" }, r.a.createElement("div", { className: "col-lg-3 col-md-4" }, r.a.createElement("p", null, a[6])), r.a.createElement("div", { className: "offset-lg-5 col-lg-4 col-md-4 offset-md-4" }, a[5].map((function (e, a) { return r.a.createElement("div", { className: "icon icon_".concat(1 + a), key: a }, r.a.createElement("img", { src: e, alt: "" })) })))) }), M = (t(291), function (e) { var a = e.data; return r.a.createElement("footer", null, r.a.createElement("div", { className: "container" }, r.a.createElement(H, { nav: a.nav }), r.a.createElement(J, { links: a.footer }), r.a.createElement(Y, { icons: a.footer }))) }); var W = function (e) { var a = e.data, t = r.a.useState([]), o = Object(i.a)(t, 2), s = o[0], c = o[1], m = r.a.useState(12), u = Object(i.a)(m, 2), p = u[0], d = u[1], g = r.a.useState(!0), v = Object(i.a)(g, 2), E = v[0], w = v[1], y = r.a.createRef(), x = r.a.createRef(), k = r.a.createRef(), S = r.a.createRef(), C = r.a.createRef(), O = [y, x, k, S, C], j = function (e) { var a = setInterval((function () { window.pageYOffset <= e.current.offsetTop ? window.scrollBy(0, window.pageYOffset + 100 > e.current.offsetTop ? clearInterval(a) : 100) : window.pageYOffset > e.current.offsetTop ? window.scrollBy(0, -100) : clearInterval(a) }), 20) }, z = function () { var e, a, t, n, r, o, i, m, u, p, d; return l.a.async((function (f) { for (; ;)switch (f.prev = f.next) { case 0: return "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6", f.next = 3, l.a.awrap(fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")); case 3: return e = f.sent, f.next = 6, l.a.awrap(e.json()); case 6: for (a = f.sent, t = [], n = 0; n < a.users.length; n++)r = a.users[n], o = r.photo, i = r.name, m = r.position, u = r.email, p = r.phone, d = { photo: o, name: i, position: m, email: u, phone: p }, t.push(d); c(s = t); case 10: case "end": return f.stop() } })) }; return Object(n.useEffect)((function () { z() }), []), r.a.createElement("div", { className: "main_container" }, r.a.createElement(f, { data: a.nav, scrollTo: j, ref: O }), r.a.createElement(h, { data: a.about_me, ref: y, scroll: j, elemScroll: O[4] }), r.a.createElement(b, { data: a.relationships, ref: x, scroll: j, elemScroll: O[4] }), r.a.createElement(_, { data: a.general_requirements, ref: k }), r.a.createElement(N, { data: a.users, users: s, onClick: function () { !function () { var e, a, t, n, r, o, i, m, u, f, h, g; l.a.async((function (v) { for (; ;)switch (v.prev = v.next) { case 0: return e = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=".concat(p), v.next = 3, l.a.awrap(fetch(e)); case 3: return a = v.sent, v.next = 6, l.a.awrap(a.json()); case 6: for (t = v.sent, n = [], r = 0; r < t.users.length; r++)o = t.users[r], i = o.photo, m = o.name, u = o.position, f = o.email, h = o.phone, g = { photo: i, name: m, position: u, email: f, phone: h }, n.push(g); c(s = n), d(p += 6), t.links.next_url || w(!1); case 12: case "end": return v.stop() } })) }() }, vissible: E, ref: S }), r.a.createElement(D, { data: a.sign_Up, getNewUser: z, forwardRef: C }), r.a.createElement(M, { data: a })) }; Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); s.a.render(r.a.createElement(m.a, null, r.a.createElement(W, { data: { nav: { logo: "./img/logo/logo.svg", menu: "./img/icons/line-menu.svg", links: [{ name: "About me", active: "link_active" }, { name: "Relationships", active: "" }, { name: "Requirements", active: "" }, { name: "Users", active: "" }, { name: "Sign Up", active: "" }] }, about_me: { h1: "Test assignment for Frontend Developer position", p: "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!" }, relationships: { lets_get_acquainted: { src: "./img/imgs/man-mobile.svg", h2: "Let's get acquainted", h3: "I am cool frontend developer", p: "When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.", p_scnd: "Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web." }, About_my_relationships: { h2: ["About my relationships with", "web-development"], features: [{ src: "./img/imgs/html.svg", head: "I'm in love with HTML", description: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications." }, { src: "./img/imgs/css.svg", head: "CSS is my best friend", description: "Cascading Style Sheets (CSS) \nis a style sheet language used for describing the presentation of a document\n written in a markup language like HTML." }, { src: "./img/imgs/javascript.svg", head: "JavaScript is my passion", description: "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm." }] } }, general_requirements: { h2: "General requirements for the test task", p: ["Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.", "If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and \n consider measuring a variety of real-world user-centric performance metrics.", "Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions."], photo: "./img/imgs/man-laptop-v1.svg" }, users: { h2: "Our cheerful users", p: "Attention! Sorting users by registration date" }, sign_Up: { h2: "Register to get a work", p: "Attention! After successful registration and alert, update the list of users in the block from the top", inputs: [{ type: "text", placeholder: "Your name", label: "Name", name: "name" }, { type: "email", placeholder: "Your email", label: "Email", name: "email" }, { type: "tel", placeholder: "+38(___)___ __ __", label: "Phone", name: "phone" }], photo: "File format jpg  up to 5 MB, the minimum size \n of 70x70px", modal: [{ h4: "Congratulations", p: "You have successfully passed the registration" }, { h4: "Sorry", p: "You have some trouble with the registration" }] }, footer: [[{ src: "./img/icons/mail.svg", li: "work.of.future@gmail.com" }, { src: "./img/icons/phone.svg", li: "+38 (050) 789 24 98 " }, { src: "./img/icons/cellphone.svg", li: "+38 (095) 556 08 45" }], ["News", "Blog", "Partners", "Shop"], ["Overview", "Design", "Code", "Collaborate"], ["Tutorials", "Resources", "Guides", "Examples"], ["FAQ", "Terms", "Conditions", "Help"], ["./img/icons/facebook.svg", "./img/icons/linkedin.svg", "./img/icons/instagram.svg", "./img/icons/twitter.svg", "./img/icons/pinterest.svg"], "\xa9 abz.agency specially for the test task"] } })), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister() })) } }, [[131, 1, 2]]]);
//# sourceMappingURL=main.18c96ca8.chunk.js.map