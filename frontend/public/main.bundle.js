(() => {
  "use strict";
  var e,
    n,
    r,
    t = {
      2802: (e, n, r) => {
        var t = r(7294),
          a = r(745),
          l = r(9655),
          o = r(9250),
          i = r(8671),
          s = r(870);
        const c = (0, t.createContext)(),
          m = ({ children: e }) => {
            const [n, r] = (0, t.useReducer)(d, { user: null });
            return (
              console.log("Authcontext state: ", n),
              (0, t.useEffect)(() => {
                const e = JSON.parse(localStorage.getItem("user"));
                e && r({ type: "LOGIN", payload: e });
              }, []),
              t.createElement(c.Provider, { value: { ...n, dispatch: r } }, e)
            );
          },
          d = (e, n) => {
            switch (n.type) {
              case "LOGIN":
                return { user: n.payload };
              case "LOGOUT":
                return { user: null };
              default:
                return e;
            }
          },
          p = () => {
            const e = (0, t.useContext)(c);
            if (!e) throw Error("use inside AuthContext");
            return e;
          },
          u = () => {
            const { dispatch: e } = p();
            return {
              logout: () => {
                localStorage.removeItem("user"), e({ type: "LOGOUT" });
              },
            };
          };
        var g = r(1871),
          b = r(7905),
          f = r(5696),
          h = r(8375),
          v = r(5005);
        function E(e) {
          const [n, r] = (0, t.useState)(!1);
          return t.createElement(
            "div",
            { class: "input-group" },
            t.createElement("input", {
              style: { marginRight: "0px" },
              type: n ? "text" : "password",
              className: e.className,
              name: e.name,
              id: e.id,
              value: e.value,
              onChange: e.onChange,
              required: e.required,
            }),
            t.createElement(
              "span",
              {
                className: "input-group-text show-button",
                onClick: () => {
                  r(!n);
                },
              },
              n ? t.createElement(g.tgn, null) : t.createElement(g.dSq, null)
            )
          );
        }
        function x(e) {
          const [n, r] = (0, t.useState)("skarmakar7302@conestogac.on.ca"),
            [a, l] = (0, t.useState)("testab101"),
            [o, i] = (0, t.useState)("danger"),
            [s, c] = (0, t.useState)(!1),
            {
              login: m,
              error: d,
              isLoading: u,
            } = (() => {
              const [e, n] = (0, t.useState)(""),
                [r, a] = (0, t.useState)(!1),
                { dispatch: l } = p();
              return {
                login: async (e, r) => {
                  try {
                    a(!0), n(null);
                    const t = { email: e, password: r };
                    let o = await fetch("/auth/login", {
                      method: "post",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(t),
                    });
                    const i = await o.json();
                    return (
                      console.log(i.error),
                      i.status
                        ? (localStorage.setItem("user", JSON.stringify(i.data)),
                          l({ type: "LOGIN", payload: i.data }),
                          a(!1))
                        : (a(!1), n(i.error)),
                      i
                    );
                  } catch (e) {
                    a(!1), console.log(e), n(e);
                  }
                },
                isLoading: r,
                error: e,
              };
            })(),
            g = (e) => {
              "login-email" === e.target.name
                ? r(e.target.value)
                : "login-password" === e.target.name && l(e.target.value);
            };
          return t.createElement(
            "div",
            { className: "formg" },
            t.createElement(
              "div",
              { className: "row" },
              t.createElement(
                h.Z,
                { variant: o, show: s, dismissible: !0 },
                t.createElement("p", null, d)
              )
            ),
            t.createElement(
              "div",
              { class: "row form-group d-flex justify-content-center mb-3" },
              t.createElement(
                "div",
                { className: "col-lg-8 col-md-11 col-sm-11" },
                t.createElement(
                  "label",
                  { htmlFor: "email", className: "form-label" },
                  "Email"
                ),
                t.createElement("input", {
                  type: "email",
                  className: "form-control",
                  name: "login-email",
                  id: "login-email",
                  value: n,
                  onChange: g,
                  required: !0,
                })
              )
            ),
            t.createElement(
              "div",
              { class: "row form-group d-flex justify-content-center mb-3" },
              t.createElement(
                "div",
                { className: "col-lg-8 col-md-11 col-sm-11" },
                t.createElement(
                  "label",
                  { htmlFor: "password", className: "form-label" },
                  "Password"
                ),
                t.createElement(
                  "div",
                  { class: "input-group mb-3" },
                  t.createElement(E, {
                    className: "form-control",
                    name: "login-password",
                    id: "login-password",
                    value: a,
                    onChange: g,
                  })
                )
              )
            ),
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center mb-3" },
              t.createElement(
                "div",
                { className: "col-md-4 text-center" },
                t.createElement(
                  v.Z,
                  {
                    variant: "dark",
                    type: "submit",
                    onClick: async (e) => {
                      if ((e.preventDefault(), "" === n))
                        return setError("Email is required"), void c(!0);
                      if ("" === a)
                        return setError("Password is required"), void c(!0);
                      c(!1);
                      let r = await m(n, a);
                      console.log("Login response" + r),
                        r.status
                          ? (window.location.href = "/home")
                          : (c(!0), i("danger"));
                    },
                    disabled: u,
                  },
                  "Sign In",
                  " ",
                  u
                    ? t.createElement("i", {
                        className: "fas fa-spinner fa-spin",
                      })
                    : ""
                )
              )
            ),
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center" },
              t.createElement(
                "div",
                { className: "col-md-6 text-center" },
                t.createElement(
                  "a",
                  { href: "/forget", className: "link-dark" },
                  "Forgot your password ?"
                )
              )
            ),
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center" },
              t.createElement(
                "div",
                { className: "col-md-6 text-center" },
                t.createElement(
                  "a",
                  { href: "/resend", className: "link-dark" },
                  "Didn't receive verification email ?"
                )
              )
            ),
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center mb-3" },
              t.createElement(
                "div",
                { className: "col-md-6 text-center" },
                t.createElement(
                  "a",
                  {
                    href: "#",
                    className: "link-dark",
                    onClick: (n) => {
                      n.preventDefault(), e.openFunction();
                    },
                  },
                  "Don't have an account? Sign Up!"
                )
              )
            )
          );
        }
        function w(e) {
          const [n, r] = (0, t.useState)(""),
            [a, l] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(""),
            [s, c] = (0, t.useState)(""),
            [m, d] = (0, t.useState)("danger"),
            [u, g] = (0, t.useState)(!1),
            { signup: b, isLoading: f } = (() => {
              const [e, n] = (0, t.useState)(""),
                [r, a] = (0, t.useState)(null),
                { dispatch: l } = p();
              return {
                signup: async (e, r) => {
                  a(!0), n(null);
                  const t = { email: e, password: r };
                  let l = await fetch("/auth/signup", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(t),
                  });
                  const o = await l.json();
                  return o.status ? a(!1) : (a(!1), n(o.error)), o;
                },
                isLoading: r,
                error: e,
              };
            })(),
            x = (e) => {
              switch (e.target.id) {
                case "register-email":
                  r(e.target.value);
                  break;
                case "register-password":
                  l(e.target.value);
                  break;
                case "register-re-password":
                  i(e.target.value);
              }
            };
          return t.createElement(
            "div",
            { className: "form" },
            t.createElement(
              "div",
              { className: "formg" },
              t.createElement(
                "div",
                { className: "row" },
                t.createElement(
                  h.Z,
                  { variant: m, show: u, dismissible: !0 },
                  t.createElement("p", null, s)
                )
              ),
              t.createElement(
                "div",
                { class: "row form-group d-flex justify-content-center mb-3" },
                t.createElement(
                  "div",
                  { className: "col-lg-8 col-md-11 col-md-11" },
                  t.createElement(
                    "label",
                    { htmlFor: "email", className: "form-label" },
                    "Email"
                  ),
                  t.createElement("input", {
                    type: "email",
                    className: "form-control",
                    name: "register-email",
                    id: "register-email",
                    value: n,
                    onChange: x,
                    required: !0,
                  })
                )
              ),
              t.createElement(
                "div",
                { class: "row form-group d-flex justify-content-center mb-3" },
                t.createElement(
                  "div",
                  { className: "col-lg-8 col-md-11 col-md-11" },
                  t.createElement(
                    "label",
                    { htmlFor: "password", className: "form-label" },
                    "Password"
                  ),
                  t.createElement(E, {
                    className: "form-control",
                    name: "register-password",
                    id: "register-password",
                    value: a,
                    onChange: x,
                  })
                )
              ),
              t.createElement(
                "div",
                { class: "row form-group d-flex justify-content-center mb-3" },
                t.createElement(
                  "div",
                  { className: "col-lg-8 col-md-11 col-md-11" },
                  t.createElement(
                    "label",
                    { htmlFor: "password", className: "form-label" },
                    "Re-enter Password"
                  ),
                  t.createElement(E, {
                    className: "form-control",
                    name: "register-re-password",
                    id: "register-re-password",
                    value: o,
                    onChange: x,
                  })
                )
              ),
              t.createElement(
                "div",
                {
                  className:
                    "row form-group d-flex justify-content-center mb-3",
                },
                t.createElement(
                  "div",
                  { className: "col-md-4 text-center" },
                  t.createElement(
                    v.Z,
                    {
                      variant: "btn btn-dark",
                      type: "submit",
                      onClick: async (e) => {
                        if ((e.preventDefault(), "" === n))
                          return c("Email is required"), void g(!0);
                        if ("" === a)
                          return c("Password is required"), void g(!0);
                        if ("" === o)
                          return c("Verify Password is required"), void g(!0);
                        if (o !== a)
                          return (
                            c("Password and verify password do not match"),
                            void g(!0)
                          );
                        c(""), g(!1);
                        let r = await b(n, a);
                        console.log(r),
                          r.status &&
                            (d("success"),
                            g(!0),
                            c(
                              "Registration is successful, please verify your email address before signing up."
                            ));
                      },
                      disabled: f,
                    },
                    "Sign Up ",
                    f
                      ? t.createElement("i", {
                          className: "fas fa-spinner fa-spin",
                        })
                      : ""
                  )
                )
              ),
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center mb-3" },
                t.createElement(
                  "div",
                  { className: "col-md-6 text-center" },
                  t.createElement(
                    "a",
                    {
                      href: "#",
                      className: "link-dark",
                      onClick: (n) => {
                        n.preventDefault(), e.openFunction();
                      },
                    },
                    "Already have an account? Sign In!"
                  )
                )
              )
            )
          );
        }
        r(4039);
        var y = r(3379),
          N = r.n(y),
          k = r(7795),
          S = r.n(k),
          C = r(569),
          Z = r.n(C),
          P = r(3565),
          A = r.n(P),
          T = r(9216),
          j = r.n(T),
          z = r(4589),
          F = r.n(z),
          O = r(8756),
          _ = {};
        (_.styleTagTransform = F()),
          (_.setAttributes = A()),
          (_.insert = Z().bind(null, "head")),
          (_.domAPI = S()),
          (_.insertStyleElement = j()),
          N()(O.Z, _),
          O.Z && O.Z.locals && O.Z.locals;
        const I = r(5007).ZP.create();
        var L = r(5954),
          D = {};
        (D.styleTagTransform = F()),
          (D.setAttributes = A()),
          (D.insert = Z().bind(null, "head")),
          (D.domAPI = S()),
          (D.insertStyleElement = j()),
          N()(L.Z, D),
          L.Z && L.Z.locals && L.Z.locals;
        const M = function () {
            const [e, n] = (0, t.useState)("");
            (0, t.useEffect)(() => {
              (async () => {
                const e = await I.get("/admin/users-list");
                console.log(">>>>>>>>>>>>>>>>"), n(e);
              })();
            }, []);
            const r = async (e, r, t) => {
              e.preventDefault();
              const a = { id: r, status: t };
              if ((console.log(a), a)) {
                const e = await I.get(
                  `/admin/update-user-status?id=${r}&status=${t}`
                );
                e
                  ? (alert("User details updated"), n(e))
                  : alert("Not updated");
              } else alert("no data");
            };
            return t.createElement(
              "div",
              { className: "register-user-list" },
              t.createElement("h1", null, "Registered Users"),
              t.createElement(
                "table",
                { className: "table table-striped" },
                t.createElement(
                  "thead",
                  null,
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("th", { scope: "col" }, "ID"),
                    t.createElement("th", { scope: "col" }, "Email"),
                    t.createElement("th", { scope: "col" }, "Role"),
                    t.createElement("th", { scope: "col" }, "Status")
                  )
                ),
                t.createElement(
                  "tbody",
                  null,
                  e &&
                    e?.data.map((e) =>
                      t.createElement(
                        "tr",
                        null,
                        t.createElement("td", null, e._id),
                        t.createElement("td", null, e.email),
                        t.createElement("td", null, e.role),
                        t.createElement("td", null, e.status),
                        t.createElement(
                          "td",
                          null,
                          1 === e.status
                            ? t.createElement(
                                "button",
                                { onClick: (n) => r(n, e._id, e.status) },
                                "DeActivate"
                              )
                            : t.createElement(
                                "button",
                                {
                                  className: "activate",
                                  onClick: (n) => r(n, e._id, e.status),
                                },
                                "Activate"
                              )
                        )
                      )
                    )
                )
              )
            );
          },
          q = function (e) {
            const [n, r] = (0, t.useState)(!1),
              [a, l] = (0, t.useState)("login"),
              o = (0, t.useRef)(),
              { user: c } = p(),
              { totalUniqueItems: m } = (0, s.jD)(),
              d = () => {
                o.current.classList.toggle("responsive_nav");
              };
            function h() {
              r(!1);
            }
            const { logout: v } = u();
            return (
              console.log(m),
              t.createElement(
                "header",
                null,
                t.createElement(
                  "div",
                  { className: "container topbar" },
                  t.createElement(
                    "a",
                    { href: "/" },
                    t.createElement("img", {
                      width: 170,
                      src: "/images/foodlabLogonew.png",
                      alt: "Food Lab Logo",
                    })
                  ),
                  t.createElement("h3", null),
                  t.createElement(
                    "nav",
                    { ref: o },
                    c
                      ? t.createElement(t.Fragment, null)
                      : t.createElement("a", { href: "/" }, "Home"),
                    c && "" === c.firstname
                      ? t.createElement("a", { href: "/home" }, "Home")
                      : t.createElement(t.Fragment, null),
                    c && c.firstname
                      ? t.createElement(
                          "a",
                          { href: "/home" },
                          c.firstname,
                          "'s Home"
                        )
                      : t.createElement(t.Fragment, null),
                    c && "admin" === c.role
                      ? t.createElement(
                          "a",
                          { href: "/admin-home" },
                          "Admin Panel"
                        )
                      : t.createElement(t.Fragment, null),
                    c && "admin" === c.role
                      ? t.createElement(
                          "a",
                          { href: "/admin-home/listofusers" },
                          " Users"
                        )
                      : t.createElement(t.Fragment, null),
                    c && "admin" === c.role
                      ? t.createElement(
                          "a",
                          { href: "/admin-home/subscribers" },
                          "Subscribers"
                        )
                      : t.createElement(t.Fragment, null),
                    t.createElement("a", { href: "/mealplan" }, "Meal Plans"),
                    c && "admin" === c.role
                      ? t.createElement(t.Fragment, null)
                      : t.createElement(
                          "a",
                          { href: "/contact-us" },
                          "Contact Us"
                        ),
                    c && "admin" === c.role
                      ? t.createElement(t.Fragment, null)
                      : t.createElement("a", { href: "/aboutus" }, "About Us"),
                    t.createElement(
                      "a",
                      { href: "/cart" },
                      t.createElement("img", {
                        width: 16,
                        src: "/images/cart-icon.png",
                        alt: "Food Lab Logo",
                      }),
                      c ? " (" + m + ")" : t.createElement(t.Fragment, null)
                    ),
                    c
                      ? t.createElement(
                          "span",
                          null,
                          t.createElement(
                            "a",
                            { href: "user-profile" },
                            "Profile"
                          ),
                          t.createElement(
                            "a",
                            {
                              href: "#",
                              onClick: () => {
                                (window.location.href = "/"), v();
                              },
                            },
                            "Logout"
                          )
                        )
                      : t.createElement(
                          "a",
                          {
                            href: "#",
                            onClick: function () {
                              console.log("hi"), r(!0);
                            },
                          },
                          "Login / Register"
                        ),
                    t.createElement(
                      "button",
                      {
                        className: "nav-btn nav-close-btn",
                        style: { "background-color": "#fff !important" },
                        onClick: d,
                      },
                      t.createElement(g.aHS, null)
                    )
                  ),
                  t.createElement(
                    "button",
                    { className: "nav-btn", onClick: d },
                    t.createElement(g.Fm7, { style: { color: "#28a745" } })
                  )
                ),
                t.createElement(
                  i.Z,
                  { show: n, onHide: h },
                  t.createElement(
                    i.Z.Body,
                    { className: "p-0" },
                    t.createElement(
                      f.Z,
                      {
                        activeKey: a,
                        id: "uncontrolled-tab-example",
                        className: "mb-3",
                        fill: !0,
                        onSelect: (e) => l(e),
                      },
                      t.createElement(
                        b.Z,
                        { eventKey: "login", title: "Login" },
                        t.createElement(x, {
                          handleClose: h,
                          openFunction: () => {
                            console.log("open register"), l("register");
                          },
                        })
                      ),
                      t.createElement(
                        b.Z,
                        { eventKey: "register", title: "Register" },
                        t.createElement(w, {
                          handleClose: h,
                          openFunction: () => {
                            console.log("open login"), l("login");
                          },
                        })
                      )
                    )
                  )
                )
              )
            );
          },
          R = function () {
            return t.createElement(
              "section",
              { className: "hero" },
              t.createElement(
                "div",
                { className: "container" },
                t.createElement(
                  "div",
                  { className: "text-block" },
                  t.createElement("p", null, "For Active People"),
                  t.createElement(
                    "h1",
                    null,
                    "Healthy Food ",
                    t.createElement("br", null),
                    "For Better Life"
                  ),
                  t.createElement("h2", null, "Join Our Nutrition Programs"),
                  t.createElement(
                    "button",
                    { type: "button" },
                    "Choose Your Plan"
                  )
                )
              )
            );
          };
        var U = r(1392),
          W = {};
        (W.styleTagTransform = F()),
          (W.setAttributes = A()),
          (W.insert = Z().bind(null, "head")),
          (W.domAPI = S()),
          (W.insertStyleElement = j()),
          N()(U.Z, W),
          U.Z && U.Z.locals && U.Z.locals;
        const B = function () {
            const [e, n] = (0, t.useState)(""),
              [r, a] = (0, t.useState)(""),
              l = (e) => {
                switch (e.target.id) {
                  case "name":
                    a(e.target.value);
                    break;
                  case "email":
                    n(e.target.value);
                }
              };
            return t.createElement(
              "div",
              { className: "wrapper" },
              t.createElement(
                "form",
                { action: "#", className: "card-content" },
                t.createElement(
                  "div",
                  { className: "container" },
                  t.createElement(
                    "div",
                    { className: "image" },
                    t.createElement("i", { className: "fas fa-envelope" })
                  ),
                  t.createElement(
                    "h1",
                    { className: "newsletter-h1" },
                    "Join Our Club"
                  )
                ),
                t.createElement(
                  "div",
                  { className: "form-input" },
                  t.createElement("input", {
                    className: "name",
                    name: "name",
                    id: "name",
                    type: "text",
                    placeholder: "Enter your name",
                    onChange: l,
                  }),
                  t.createElement("input", {
                    className: "email",
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Your Email",
                    onChange: l,
                  }),
                  t.createElement(
                    "button",
                    {
                      className: "subscribe-btn",
                      type: "button",
                      onClick: async () => {
                        if ("" === r) return void alert("Name is required");
                        if ("" === e) return void alert("Email is required");
                        const n = { name: r, email: e };
                        console.log(n);
                        const t = await fetch("/other/newsletter", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(n),
                        });
                        (await t.json()).status
                          ? alert("Subscribed successfully")
                          : alert("Error");
                      },
                    },
                    "Subscribe"
                  )
                )
              )
            );
          },
          Y = function () {
            return t.createElement(
              "footer",
              null,
              t.createElement(
                "div",
                { className: "footer-wrapper" },
                t.createElement(
                  "div",
                  { className: "footer container" },
                  t.createElement(
                    "div",
                    { className: "footer-info" },
                    t.createElement(
                      "a",
                      { href: "/#" },
                      t.createElement("img", {
                        width: 170,
                        src: "/images/foodlabLogonew.png",
                        alt: "Food Lab Logo",
                      })
                    ),
                    t.createElement("h1", null),
                    t.createElement(
                      "p",
                      null,
                      "We simplify the meal planning process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience."
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "footer-info" },
                    t.createElement("h4", null, "Contact Info"),
                    t.createElement(
                      "div",
                      { className: "contact-info" },
                      t.createElement("h5", null, "Our Location"),
                      t.createElement(
                        "span",
                        null,
                        "14-10 Mill Creek Road, Cambridge"
                      )
                    ),
                    t.createElement(
                      "div",
                      { className: "contact-info" },
                      t.createElement("h5", null, "Phone"),
                      t.createElement(
                        "a",
                        { href: "tel:519-771-1379" },
                        "519-771-1379"
                      )
                    ),
                    t.createElement(
                      "div",
                      { className: "contact-info" },
                      t.createElement("h5", null, "Email"),
                      t.createElement(
                        "a",
                        { href: "mailto:mshaikh@conestogac.on.ca" },
                        "info@info.com"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "footer-info" },
                    t.createElement("h4", null, "Quick Links"),
                    t.createElement(
                      "div",
                      { className: "quick-links contact-info" },
                      t.createElement(
                        "h5",
                        null,
                        t.createElement("a", { href: "#" }, "Home")
                      ),
                      t.createElement(
                        "h5",
                        null,
                        t.createElement("a", { href: "#" }, "Meal Plans")
                      ),
                      t.createElement(
                        "h5",
                        null,
                        t.createElement("a", { href: "#" }, "Registration")
                      ),
                      t.createElement(
                        "h5",
                        null,
                        t.createElement("a", { href: "#" }, "Contact Us")
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "footer-info footer-info-media" },
                    t.createElement("h4", null, "Social Media Links"),
                    t.createElement(
                      "ul",
                      null,
                      t.createElement(
                        "li",
                        null,
                        t.createElement(
                          "a",
                          {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          t.createElement("span", {
                            className: "fa fa-youtube",
                          })
                        )
                      ),
                      t.createElement(
                        "li",
                        null,
                        t.createElement(
                          "a",
                          {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          t.createElement("span", {
                            className: "fa fa-instagram",
                          })
                        )
                      ),
                      t.createElement(
                        "li",
                        null,
                        t.createElement(
                          "a",
                          {
                            href: "https://www.facebook.com/profile.php?id=100086862995354",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          t.createElement("span", {
                            className: "fa fa-facebook-f",
                          })
                        )
                      ),
                      t.createElement(
                        "li",
                        null,
                        t.createElement(
                          "a",
                          {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          t.createElement("span", {
                            className: "fa fa-twitter",
                          })
                        )
                      )
                    )
                  )
                ),
                t.createElement(
                  "div",
                  { className: "copyright" },
                  t.createElement(
                    "div",
                    { className: "container" },
                    t.createElement(
                      "span",
                      null,
                      "© Capstone Project Group 2 - 2022"
                    )
                  )
                )
              )
            );
          };
        function H(e) {
          const { addItem: n } = (0, s.jD)(),
            [r, a] = (0, t.useState)(e.mode ? e.mode : "create"),
            [l, o] = (0, t.useState)(e.startDate ? e.startDate : ""),
            [c, m] = (0, t.useState)(e.duration ? e.duration : ""),
            [d, u] = (0, t.useState)(""),
            { user: g } = p();
          console.log(e.mealPlan);
          const b = (n) => {
            switch (n.target.id) {
              case "start_date":
                o(n.target.value);
                break;
              case "duration":
                switch ((m(n.target.value), n.target.value)) {
                  case "1m":
                    u(e.mealPlan.price);
                    break;
                  case "3m":
                    u((3 * parseFloat(e.mealPlan.price)).toFixed(2));
                    break;
                  case "6m":
                    u((6 * parseFloat(e.mealPlan.price)).toFixed(2));
                }
            }
          };
          return t.createElement(
            i.Z,
            { show: e.show, onHide: e.handleClose, onShow: e.handleOpen },
            t.createElement(i.Z.Header, null, "Subscription"),
            t.createElement(
              i.Z.Body,
              null,
              t.createElement("label", { htmlFor: "start_date" }, "Start Date"),
              t.createElement("input", {
                className: "form-control",
                id: "start_date",
                type: "date",
                value: l,
                onChange: b,
              }),
              t.createElement("label", { htmlFor: "duration" }, "Duration"),
              t.createElement(
                "select",
                {
                  className: "form-control",
                  id: "duration",
                  onChange: b,
                  value: c,
                },
                t.createElement("option", null, "Select Duration"),
                t.createElement("option", { value: "1m" }, "1 month"),
                t.createElement("option", { value: "3m" }, "3 months"),
                t.createElement("option", { value: "6m" }, "6 months")
              ),
              t.createElement("label", { htmlFor: "price" }, "Price"),
              t.createElement("input", {
                className: "form-control",
                id: "price",
                value: d,
                disabled: !0,
              })
            ),
            t.createElement(
              i.Z.Footer,
              null,
              "create" === r
                ? t.createElement(
                    "button",
                    {
                      className: "btn btn-outline-success",
                      onClick: async () => {
                        "" === l
                          ? alert("Start Date Cannot be Empty")
                          : "" === c
                          ? (alert("Duration cannot be empty"), m("1m"))
                          : (((e) => {
                              let r = {
                                id: e._id,
                                title: e.title,
                                description: e.description,
                                short_description: e.short_description,
                                price: d,
                                mealplanImage: e.mealplanImage,
                                duration: c,
                                startDate: l,
                                user: g,
                              };
                              n(r);
                            })(e.mealPlan),
                            e.handleClose());
                      },
                    },
                    "Subscribe"
                  )
                : t.createElement(
                    "button",
                    { className: "btn btn-outline-info" },
                    "Start"
                  ),
              t.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-outline-secondary",
                  onClick: e.handleClose,
                },
                "Cancel"
              )
            )
          );
        }
        var G = r(6340),
          J = {};
        (J.styleTagTransform = F()),
          (J.setAttributes = A()),
          (J.insert = Z().bind(null, "head")),
          (J.domAPI = S()),
          (J.insertStyleElement = j()),
          N()(G.Z, J),
          G.Z && G.Z.locals && G.Z.locals;
        const $ = (e) => {
          const { user: n } = p(),
            [r, a] = (0, t.useState)(!1);
          return (
            console.log(e),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(H, {
                show: r,
                handleClose: () => {
                  a(!1);
                },
                mealPlan: e.plan,
              }),
              t.createElement(
                "div",
                {
                  className: "card meal-plan-card p-2",
                  style: { width: "370px" },
                },
                t.createElement(
                  "div",
                  { className: "card-img-top meal-plan-image " },
                  t.createElement("img", {
                    src: `/uploads/${e.plan.mealplanImage}`,
                    alt: "Meal Plan",
                  })
                ),
                t.createElement(
                  "div",
                  { className: "meal-plan-detail" },
                  t.createElement(
                    "h4",
                    { className: "meal-plan-title" },
                    e.plan.title
                  ),
                  t.createElement("p", null, e.plan.short_description),
                  t.createElement(
                    "a",
                    {
                      className: "btn btn-outline-dark me-3",
                      href: "/mealdetail",
                    },
                    "Learn More"
                  ),
                  n
                    ? e.plan.isSubscribed
                      ? t.createElement(t.Fragment, null)
                      : t.createElement(
                          "a",
                          {
                            className: "btn btn-outline-dark me-2",
                            onClick: () => {
                              a(!0);
                            },
                          },
                          "Subscribe",
                          " "
                        )
                    : t.createElement(t.Fragment, null)
                )
              )
            )
          );
        };
        function X(e) {
          let n = `spinner-grow text-${e.variant ? e.variant : "dark"}`;
          return t.createElement(
            "div",
            {
              className: "row d-flex justify-content-center align-items-center",
              style: { minHeight: "80vh" },
            },
            t.createElement(
              "div",
              {
                className: n,
                role: "status",
                style: { height: "5rem", width: "5rem" },
              },
              t.createElement("span", { className: "sr-only" }, "Loading...")
            )
          );
        }
        var V = r(4246),
          K = {};
        (K.styleTagTransform = F()),
          (K.setAttributes = A()),
          (K.insert = Z().bind(null, "head")),
          (K.domAPI = S()),
          (K.insertStyleElement = j()),
          N()(V.Z, K),
          V.Z && V.Z.locals && V.Z.locals;
        const Q = ({ handleAddToCart: e }) => {
          const [n, r] = (0, t.useState)([]),
            [a, l] = (0, t.useState)([]);
          return (
            (0, t.useEffect)(() => {
              !(async function () {
                l(!0);
                const e = await fetch("/other/plans", { method: "GET" }),
                  n = await e.json();
                r(n.data),
                  setTimeout(() => {
                    l(!1);
                  }, 1e3);
              })();
            }, []),
            t.createElement(
              "div",
              { className: "meal-plan-section" },
              t.createElement(
                "div",
                { className: "container-fluid" },
                a
                  ? t.createElement(X, { variant: "success" })
                  : t.createElement(
                      t.Fragment,
                      null,
                      t.createElement(
                        "div",
                        { className: "row text-center" },
                        t.createElement(
                          "h1",
                          { className: "bold mt-4" },
                          "Our Meal Plans"
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "row d-flex" },
                        t.createElement(
                          "div",
                          { className: "meal-plan-list" },
                          n.map((n) =>
                            t.createElement($, {
                              plan: n,
                              key: n._id,
                              handleAddToCart: e,
                            })
                          )
                        )
                      )
                    )
              )
            )
          );
        };
        var ee = r(5692),
          ne = {};
        (ne.styleTagTransform = F()),
          (ne.setAttributes = A()),
          (ne.insert = Z().bind(null, "head")),
          (ne.domAPI = S()),
          (ne.insertStyleElement = j()),
          N()(ee.Z, ne),
          ee.Z && ee.Z.locals && ee.Z.locals;
        const re = function () {
          return t.createElement(
            "section",
            { className: "home-trial" },
            t.createElement(
              "div",
              { className: "container" },
              t.createElement(
                "div",
                { className: "contents" },
                t.createElement(
                  "h1",
                  null,
                  "Try Trial Day ",
                  t.createElement("br", null),
                  " For Only 5 Dollars"
                ),
                t.createElement(
                  "button",
                  { type: "button", class: "btn btn-danger" },
                  "Order Now"
                )
              )
            )
          );
        };
        var te = r(4466),
          ae = {};
        (ae.styleTagTransform = F()),
          (ae.setAttributes = A()),
          (ae.insert = Z().bind(null, "head")),
          (ae.domAPI = S()),
          (ae.insertStyleElement = j()),
          N()(te.Z, ae),
          te.Z && te.Z.locals && te.Z.locals;
        const le = function () {
          return t.createElement(
            "section",
            { className: "home-dish-promotion" },
            t.createElement(
              "div",
              { className: "container" },
              t.createElement(
                "div",
                { class: "row" },
                t.createElement(
                  "div",
                  { class: "col-12 col-md-6" },
                  t.createElement("h1", null, "Eggs With Bacon"),
                  t.createElement(
                    "p",
                    null,
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Energy: ",
                    t.createElement("span", { class: "red" }, "498 kkal")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Protein: ",
                    t.createElement("span", { class: "green" }, "26 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Fat: ",
                    t.createElement("span", { class: "green" }, "8 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Carbohydrates: ",
                    t.createElement("span", { class: "green" }, "49 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold red price" },
                    "$7.99"
                  ),
                  t.createElement(
                    "button",
                    { type: "button", class: "btn btn-danger" },
                    "Add to cart"
                  ),
                  t.createElement(
                    "button",
                    { type: "button", class: "btn btn-primary" },
                    "More info"
                  )
                ),
                t.createElement(
                  "div",
                  { class: "col-12 col-md-6" },
                  t.createElement("img", {
                    className: "egg-image-tag",
                    src: "./images/natural-.png",
                  }),
                  t.createElement("img", {
                    className: "product-image",
                    src: "./images/eggs-with-bacon.jpg",
                    alt: "Eggs with bacon",
                  })
                )
              ),
              t.createElement(
                "div",
                { class: "row" },
                t.createElement(
                  "div",
                  { class: "col-12 col-md-6" },
                  t.createElement("img", {
                    className: "salmon-image-tag",
                    src: "./images/natural-100-percent.png",
                    alt: "slamon-image",
                  }),
                  t.createElement("img", {
                    className: "product-image",
                    src: "./images/salmon-with-vegetables.jpg",
                    alt: "Eggs with bacon",
                  })
                ),
                t.createElement(
                  "div",
                  { class: "col-12 col-md-6" },
                  t.createElement("h1", null, "Salmon With Vegetables"),
                  t.createElement(
                    "p",
                    null,
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Energy: ",
                    t.createElement("span", { class: "red" }, "498 kkal")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Protein: ",
                    t.createElement("span", { class: "green" }, "26 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Fat: ",
                    t.createElement("span", { class: "green" }, "8 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold" },
                    "Carbohydrates: ",
                    t.createElement("span", { class: "green" }, "49 g")
                  ),
                  t.createElement(
                    "p",
                    { className: "bold red price" },
                    "$17.99"
                  ),
                  t.createElement(
                    "button",
                    { type: "button", class: "btn btn-danger" },
                    "Add to cart"
                  ),
                  t.createElement(
                    "button",
                    { type: "button", class: "btn btn-primary" },
                    "More info"
                  )
                )
              )
            )
          );
        };
        var oe = r(7069),
          ie = r(4955),
          se = {};
        (se.styleTagTransform = F()),
          (se.setAttributes = A()),
          (se.insert = Z().bind(null, "head")),
          (se.domAPI = S()),
          (se.insertStyleElement = j()),
          N()(ie.Z, se),
          ie.Z && ie.Z.locals && ie.Z.locals;
        const ce = function () {
          const [e, n] = (0, t.useState)(0);
          return t.createElement(
            "section",
            { className: "slider" },
            t.createElement(
              oe.Z,
              {
                activeIndex: e,
                onSelect: (e, r) => {
                  n(e);
                },
              },
              t.createElement(
                oe.Z.Item,
                null,
                t.createElement("img", {
                  className: "d-block w-100",
                  src: "images/slider-image-03.jpg",
                  alt: "First slide",
                }),
                t.createElement(oe.Z.Caption, null)
              ),
              t.createElement(
                oe.Z.Item,
                null,
                t.createElement("img", {
                  className: "d-block w-100",
                  src: "/images/slider-image-02.jpg",
                  alt: "Second slide",
                }),
                t.createElement(oe.Z.Caption, null)
              ),
              t.createElement(
                oe.Z.Item,
                null,
                t.createElement("img", {
                  className: "d-block w-100",
                  src: "images/slider-image-01.jpg",
                  alt: "Third slide",
                }),
                t.createElement(oe.Z.Caption, null)
              )
            )
          );
        };
        function me(e) {
          const n =
              "" === window.location.search
                ? ""
                : window.location.search.replace("?", "").split("=")[1],
            [r, a] = (0, t.useState)(!1);
          return (
            (0, t.useEffect)(() => {
              console.log(n),
                "verified" === n &&
                  (console.log("works"),
                  alert(
                    "Your email was verified successfully. Please login to continue"
                  ));
            }, []),
            t.createElement(
              "div",
              null,
              t.createElement(R, null),
              t.createElement(Q, { handleAddToCart: e.handleAddToCart }),
              t.createElement(le, null),
              t.createElement(re, null),
              t.createElement(ce, null),
              t.createElement(B, null)
            )
          );
        }
        const de = () => {
          const [e, n] = (0, t.useState)([]),
            [r, a] = (0, t.useState)(!1);
          return (
            (0, t.useEffect)(() => {
              !(async function () {
                a(!0);
                const e = await fetch("/api/get/plans", { method: "GET" }),
                  r = await e.json();
                r.status
                  ? (console.log(r.data), n(r.data))
                  : console.log(r.error),
                  a(!1);
              })();
            }, []),
            t.createElement(
              "div",
              { style: { width: "90%" } },
              t.createElement(
                "div",
                { className: "row text-center mb-3" },
                t.createElement("h3", null, "Subscribed Meal Plans")
              ),
              r
                ? t.createElement(X, { variant: "success" })
                : t.createElement(
                    "div",
                    {
                      className:
                        "row d-flex justify-content-start meal-plan-list px-3",
                    },
                    e.map(
                      (e) => (
                        (e.meal_plan.isSubscribed = !0),
                        t.createElement($, { plan: e.meal_plan })
                      )
                    )
                  )
            )
          );
        };
        function pe(e) {
          const { token: n, email: r } = (0, o.UO)();
          return t.createElement("div", null, n, r);
        }
        var ue = r(6115),
          ge = {};
        (ge.styleTagTransform = F()),
          (ge.setAttributes = A()),
          (ge.insert = Z().bind(null, "head")),
          (ge.domAPI = S()),
          (ge.insertStyleElement = j()),
          N()(ue.Z, ge),
          ue.Z && ue.Z.locals && ue.Z.locals;
        const be = () =>
          t.createElement(
            "div",
            null,
            t.createElement(
              "div",
              null,
              t.createElement(
                "section",
                { id: "about" },
                t.createElement(
                  "div",
                  { class: "container" },
                  t.createElement(
                    "header",
                    { class: "section-header aos-init" },
                    t.createElement("h3", null, "About Us"),
                    t.createElement(
                      "p",
                      null,
                      'At FoodLab, we understand that "healthy" actually means something different to everyone. So we\'ve worked tirelessly to ensure that this site offers options no matter what your taste, cooking experience, or dietary preferences are.'
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "row about-cols" },
                    t.createElement(
                      "div",
                      { class: "col-md-4" },
                      t.createElement(
                        "div",
                        { class: "about-col" },
                        t.createElement(
                          "h2",
                          { class: "title" },
                          t.createElement("a", { href: "#" }, "Our Mission")
                        ),
                        t.createElement(
                          "p",
                          null,
                          "We simplify the meal planning process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience. We simplify the meal planning process. Our tools equip households to eat better food"
                        ),
                        t.createElement(
                          "div",
                          { class: "d-flex justify-content-center" },
                          t.createElement(
                            "a",
                            { href: "#", class: "btn-sm-default-web" },
                            "Read more"
                          )
                        )
                      )
                    ),
                    t.createElement(
                      "div",
                      { class: "col-md-4" },
                      t.createElement(
                        "div",
                        { class: "about-col" },
                        t.createElement(
                          "h2",
                          { class: "title" },
                          t.createElement("a", { href: "#" }, "Our Plan")
                        ),
                        t.createElement(
                          "p",
                          null,
                          "Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber, go vegan and more. Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber and more."
                        ),
                        t.createElement(
                          "div",
                          { class: "d-flex justify-content-center" },
                          t.createElement(
                            "a",
                            { href: "#", class: "btn-sm-default-web" },
                            "Read more"
                          )
                        )
                      )
                    ),
                    t.createElement(
                      "div",
                      { class: "col-md-4" },
                      t.createElement(
                        "div",
                        { class: "about-col" },
                        t.createElement(
                          "h2",
                          { class: "title" },
                          t.createElement("a", { href: "#" }, "Our Vision")
                        ),
                        t.createElement(
                          "p",
                          null,
                          "FoodLab will be the first food management system that combines dining out, eating store-bought food, and cooking at home to help you find and organize the restaurants, products, and recipes that fit your diet and can help you reach your nutrition goals and keep you healthy."
                        ),
                        t.createElement(
                          "div",
                          { class: "d-flex justify-content-center" },
                          t.createElement(
                            "a",
                            { href: "#", class: "btn-sm-default-web" },
                            "Read more"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        var fe = r(8428),
          he = {};
        (he.styleTagTransform = F()),
          (he.setAttributes = A()),
          (he.insert = Z().bind(null, "head")),
          (he.domAPI = S()),
          (he.insertStyleElement = j()),
          N()(fe.Z, he),
          fe.Z && fe.Z.locals && fe.Z.locals;
        const ve = (e) => {
          const {
            isEmpty: n,
            totalUniqueItems: r,
            items: a,
            totalItems: o,
            cartTotal: i,
            updateItemQuantity: c,
            removeItem: m,
            emptyCart: d,
          } = (0, s.jD)();
          return n
            ? t.createElement(
                "h1",
                { className: "text-center" },
                "Your cart is empty"
              )
            : t.createElement(
                "div",
                { className: "cart cart-page" },
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    "div",
                    { className: "col-md-8 cart" },
                    t.createElement(
                      "div",
                      { className: "title" },
                      t.createElement(
                        "div",
                        { className: "row" },
                        t.createElement(
                          "div",
                          { className: "col" },
                          t.createElement(
                            "h4",
                            null,
                            t.createElement("b", null, "Shopping Cart")
                          )
                        ),
                        t.createElement(
                          "div",
                          {
                            className:
                              "col align-self-center text-right text-muted",
                          },
                          "Total Unique Items: ",
                          r,
                          " "
                        )
                      )
                    ),
                    a.map((e, n) =>
                      t.createElement(
                        "div",
                        { className: "row border-bottom", key: n },
                        t.createElement(
                          "div",
                          { className: "row main align-items-center" },
                          t.createElement(
                            "div",
                            { className: "col-2" },
                            t.createElement("img", {
                              className: "img-fluid",
                              src: "/uploads/" + e.mealplanImage,
                              alt: "Regular meal plan",
                            })
                          ),
                          t.createElement(
                            "div",
                            { className: "col" },
                            t.createElement(
                              "div",
                              { className: "row text-muted" },
                              e.title,
                              " - ",
                              e.duration
                            )
                          ),
                          t.createElement(
                            "div",
                            { className: "col" },
                            t.createElement(
                              "button",
                              {
                                className: "quantity",
                                onClick: () => c(e.id, e.quantity - 1),
                              },
                              "-"
                            ),
                            t.createElement(
                              "span",
                              { className: "border" },
                              e.quantity
                            ),
                            t.createElement(
                              "button",
                              {
                                className: "quantity",
                                onClick: () => c(e.id, e.quantity + 1),
                              },
                              "+"
                            )
                          ),
                          t.createElement(
                            "div",
                            { className: "col" },
                            "$ ",
                            e.price,
                            " "
                          ),
                          t.createElement(
                            "div",
                            { className: "col" },
                            t.createElement(
                              "button",
                              { className: "quantity", onClick: () => m(e.id) },
                              "X"
                            )
                          )
                        )
                      )
                    ),
                    t.createElement(
                      "div",
                      { className: "back-to-shop" },
                      t.createElement(
                        "span",
                        { className: "text-muted" },
                        "Back to shop | "
                      ),
                      t.createElement(
                        "button",
                        { className: "quantity", onClick: () => d() },
                        "Clear Cart"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "col-md-4 summary" },
                    t.createElement(
                      "div",
                      null,
                      t.createElement(
                        "h5",
                        null,
                        t.createElement("b", null, "Summary")
                      )
                    ),
                    t.createElement("hr", null),
                    t.createElement(
                      "div",
                      { className: "row" },
                      t.createElement(
                        "div",
                        { className: "col" },
                        "Total Items ",
                        o
                      ),
                      t.createElement(
                        "div",
                        { className: "col text-right" },
                        "$ ",
                        Number(i).toFixed(2)
                      )
                    ),
                    t.createElement(
                      "form",
                      null,
                      t.createElement("p", null, "COUPON CODE"),
                      t.createElement("input", {
                        id: "code",
                        placeholder: "Enter your code",
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "row" },
                      t.createElement(
                        "div",
                        { className: "col" },
                        "TOTAL PRICE"
                      ),
                      t.createElement(
                        "div",
                        { className: "col text-right" },
                        "$ ",
                        Number(i).toFixed(2)
                      )
                    ),
                    t.createElement(
                      l.rU,
                      { to: "/checkout" },
                      t.createElement(
                        "button",
                        { className: "btn" },
                        "CHECKOUT"
                      )
                    )
                  )
                )
              );
        };
        var Ee = r(2531),
          xe = {};
        (xe.styleTagTransform = F()),
          (xe.setAttributes = A()),
          (xe.insert = Z().bind(null, "head")),
          (xe.domAPI = S()),
          (xe.insertStyleElement = j()),
          N()(Ee.Z, xe),
          Ee.Z && Ee.Z.locals && Ee.Z.locals;
        const we = () => {
            const [e, n] = (0, t.useState)({}),
              [r, a] = (0, t.useState)(""),
              [l, o] = (0, t.useState)(""),
              [i, s] = (0, t.useState)(""),
              [c, m] = (0, t.useState)(!0),
              [d, p] = (0, t.useState)(""),
              [u, g] = (0, t.useState)(""),
              [b, f] = (0, t.useState)(!1),
              v = (e) => {
                const n = e.target.value;
                switch (e.target.name) {
                  case "name":
                    o(n);
                    break;
                  case "email":
                    a(n);
                    break;
                  case "message":
                    s(n);
                    break;
                  case "newsletter":
                    m(e.target.checked);
                  default:
                    console.log("error");
                }
              },
              E = async (e) => {
                if ((console.log(e), "" === l))
                  return void x(
                    "warning",
                    "Please enter your name to continue"
                  );
                if ("" === r)
                  return void x(
                    "warning",
                    "Please enter your email to continue"
                  );
                if ("" === i)
                  return void x(
                    "warning",
                    "Please enter your message to continue"
                  );
                let n = {};
                e.coords &&
                  (n = {
                    name: l,
                    email: r,
                    message: i,
                    position: {
                      lat: e.coords.latitude,
                      long: e.coords.longitude,
                    },
                  }),
                  void 0 === e.coords &&
                    (n = { name: l, email: r, message: i }),
                  console.log(n);
                const t = await fetch("/other/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(n),
                });
                (await t.json()).status
                  ? x(
                      "success",
                      "Your message has been received. Thanks for contacting us."
                    )
                  : x(
                      "danger",
                      "Something is wrong on our end, we will get back to you soon."
                    );
              },
              x = (e, n) => {
                g(e), p(n), f(!0);
              };
            return t.createElement(
              "div",
              { className: "wrapper-contact" },
              t.createElement(
                "div",
                { className: "contact-form" },
                t.createElement("h4", null, "GET IN TOUCH"),
                t.createElement(
                  "h2",
                  { className: "form-headline" },
                  "Send us a message"
                ),
                t.createElement(
                  h.Z,
                  {
                    show: b,
                    variant: u,
                    onClose: () => {
                      g(""), f(!1), p("");
                    },
                    dismissible: !0,
                  },
                  d
                ),
                t.createElement(
                  "form",
                  { id: "submit-form", action: "" },
                  t.createElement(
                    "p",
                    null,
                    t.createElement("input", {
                      name: "name",
                      id: "name",
                      className: "form-input",
                      type: "text",
                      placeholder: "Your Name*",
                      style: { width: "100%" },
                      value: l,
                      onChange: v,
                    })
                  ),
                  t.createElement(
                    "p",
                    null,
                    t.createElement("input", {
                      name: "email",
                      id: "email",
                      className: "form-input",
                      type: "email",
                      placeholder: "Your Email*",
                      style: { width: "100%" },
                      value: r,
                      onChange: v,
                    })
                  ),
                  t.createElement(
                    "p",
                    { className: "full-width" },
                    t.createElement("textarea", {
                      minLength: "20",
                      name: "message",
                      id: "message",
                      cols: "30",
                      rows: "7",
                      placeholder: "Your Message*",
                      required: !0,
                      value: i,
                      onChange: v,
                    })
                  ),
                  t.createElement(
                    "p",
                    { className: "full-width" },
                    t.createElement("input", {
                      type: "checkbox",
                      id: "newsletter",
                      name: "newsletter",
                      checked: c,
                      onChange: v,
                    }),
                    " Yes, I would like to receive communications by call / email about Company's services."
                  ),
                  t.createElement(
                    "p",
                    { className: "full-width" },
                    t.createElement("input", {
                      type: "submit",
                      className: "btn btn-outline-danger",
                      value: "Submit",
                      onClick: () => {
                        navigator.geolocation
                          ? navigator.geolocation.getCurrentPosition(E, E)
                          : (x(
                              "warning",
                              "Geolocation is not supported by this browser. But still you can contact us."
                            ),
                            E(null));
                      },
                    }),
                    t.createElement(
                      "button",
                      {
                        className: "btn btn-outline-danger",
                        onClick: () => {
                          o(""), a(""), s(""), m(!0), n(null);
                        },
                      },
                      "Reset"
                    )
                  )
                )
              ),
              t.createElement(
                "div",
                { className: "contacts contact-wrapper text-center" },
                t.createElement(
                  "ul",
                  null,
                  t.createElement(
                    "li",
                    null,
                    "We've helped ",
                    t.createElement(
                      "span",
                      { className: "highlight-text-grey " },
                      "3000"
                    ),
                    " people maintain a healthy diet. Ready to know how ?"
                  ),
                  t.createElement(
                    "span",
                    { className: "hightlight-contact-info text-center" },
                    t.createElement(
                      "li",
                      { className: "email-info mb-3" },
                      t.createElement("i", {
                        className: "fa fa-envelope",
                        "aria-hidden": "true",
                      }),
                      " info@demo.com"
                    ),
                    t.createElement(
                      "li",
                      { className: "mb-3" },
                      t.createElement("i", {
                        className: "fa fa-phone",
                        "aria-hidden": "true",
                      }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "highlight-text" },
                        "+1 111 111 2900"
                      )
                    )
                  ),
                  t.createElement("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195551.47782872536!2d-105.5515105671875!3d40.01979699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2e179131%3A0xbd5654e9f8c405cd!2sFood%20Lab!5e0!3m2!1sen!2sca!4v1666908911565!5m2!1sen!2sca",
                    allowFullScreen: "",
                    height: 350,
                    width: 750,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                  })
                )
              )
            );
          },
          ye = async (e, n) => {
            try {
              const r = await fetch(e, n);
              401 === r.status && (localStorage.clear(), (location.href = "/"));
              return await r.json();
            } catch (e) {
              console.log(e);
            }
          };
        var Ne = r(7648),
          ke = r(9980),
          Se = {};
        (Se.styleTagTransform = F()),
          (Se.setAttributes = A()),
          (Se.insert = Z().bind(null, "head")),
          (Se.domAPI = S()),
          (Se.insertStyleElement = j()),
          N()(ke.Z, Se),
          ke.Z && ke.Z.locals && ke.Z.locals;
        const Ce = function (e) {
            const { user: n } = p(),
              [r, a] = (0, t.useState)(""),
              [l, o] = (0, t.useState)(""),
              [i, s] = (0, t.useState)(""),
              [c, m] = (0, t.useState)(""),
              [d, u] = (0, t.useState)(!1),
              { dispatch: g } = p(),
              [b, f] = (0, t.useState)([]);
            (0, t.useEffect)(() => {
              console.log(n),
                n &&
                  (async (e) => {
                    const n = await ye("/api/profile-data");
                    a(n.data.firstname),
                      o(n.data.lastname),
                      s(n.data.contactno);
                  })(n._id);
            }, n);
            const E = (e) => {
              "firstName" === e.target.name
                ? a(e.target.value)
                : "lastName" === e.target.name
                ? o(e.target.value)
                : "contactNo" === e.target.name && s(e.target.value);
            };
            return t.createElement(
              "div",
              { className: "user-profile" },
              t.createElement(
                "div",
                {
                  className:
                    "header pb-8 pt-5 pt-lg-8 d-flex align-items-center",
                },
                t.createElement("span", {
                  className: "mask bg-gradient-default opacity-8",
                }),
                t.createElement(
                  "div",
                  { className: "container-fluid d-flex align-items-center" },
                  t.createElement(
                    "div",
                    { className: "row name-container" },
                    t.createElement(
                      "div",
                      { className: "col-lg-7 col-md-10" },
                      t.createElement(
                        "h1",
                        { className: "display-2 text-white" },
                        "Hello ",
                        n && n.firstname,
                        ", "
                      ),
                      t.createElement(
                        "p",
                        { className: "text-white mt-0 mb-5" },
                        "This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"
                      )
                    )
                  )
                )
              ),
              t.createElement(
                "div",
                { className: "details-container" },
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement("p", null, "Hello, ", n && n.firstname)
                ),
                t.createElement(
                  Ne.Z,
                  { className: "p-1" },
                  t.createElement(
                    h.Z,
                    { variant: "danger", show: d },
                    t.createElement("p", null, c)
                  ),
                  t.createElement(
                    Ne.Z.Group,
                    { className: "mb-3", controlId: "formLoginEmail" },
                    t.createElement(Ne.Z.Label, null, "First Name"),
                    t.createElement(Ne.Z.Control, {
                      type: "text",
                      placeholder: "Enter firstname",
                      value: r,
                      onChange: E,
                      name: "firstName",
                      required: !0,
                    })
                  ),
                  t.createElement(
                    Ne.Z.Group,
                    { className: "mb-3", controlId: "formLoginEmail" },
                    t.createElement(Ne.Z.Label, null, "Last Name"),
                    t.createElement(Ne.Z.Control, {
                      type: "text",
                      placeholder: "Enter lastname",
                      value: l,
                      onChange: E,
                      name: "lastName",
                      required: !0,
                    })
                  ),
                  t.createElement(
                    Ne.Z.Group,
                    { className: "mb-3", controlId: "formLoginEmail" },
                    t.createElement(Ne.Z.Label, null, "Contact No"),
                    t.createElement(Ne.Z.Control, {
                      type: "text",
                      placeholder: "Enter contactno",
                      value: i,
                      onChange: E,
                      name: "contactNo",
                      required: !0,
                    })
                  ),
                  t.createElement(
                    v.Z,
                    {
                      className: "edit-profile-btn",
                      variant: "primary",
                      type: "submit",
                      onClick: async (e) => {
                        if ((e.preventDefault(), "" === r))
                          return m("Firstname is required"), void u(!0);
                        if ("" === l)
                          return m("Lastname is required"), void u(!0);
                        if ("" === i)
                          return m("Contactno is required"), void u(!0);
                        m(""), u(!1);
                        const n = { firstname: r, lastname: l, contactno: i };
                        if ((console.log(n), n)) {
                          const e = await ye("/api/profile", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(n),
                          });
                          e.status
                            ? (alert("Updated successfully"),
                              console.log(e.data),
                              localStorage.setItem(
                                "user",
                                JSON.stringify(e.data)
                              ),
                              g({ type: "LOGIN", payload: e.data }))
                            : alert("Error");
                        }
                      },
                    },
                    "Edit Profile"
                  )
                )
              )
            );
          },
          Ze = () =>
            t.createElement(t.Fragment, null, t.createElement(Ce, null));
        var Pe = r(6379),
          Ae = {};
        (Ae.styleTagTransform = F()),
          (Ae.setAttributes = A()),
          (Ae.insert = Z().bind(null, "head")),
          (Ae.domAPI = S()),
          (Ae.insertStyleElement = j()),
          N()(Pe.Z, Ae),
          Pe.Z && Pe.Z.locals && Pe.Z.locals;
        var Te = r(3756),
          je = {};
        (je.styleTagTransform = F()),
          (je.setAttributes = A()),
          (je.insert = Z().bind(null, "head")),
          (je.domAPI = S()),
          (je.insertStyleElement = j()),
          N()(Te.Z, je),
          Te.Z && Te.Z.locals && Te.Z.locals;
        const ze = () =>
          t.createElement(
            "div",
            { className: "dashboard" },
            t.createElement(
              "div",
              { className: "col-lg-4 first-top" },
              t.createElement(
                "div",
                { className: "dashboard-top" },
                t.createElement("i", { class: "fa fa-utensils" }),
                t.createElement("h3", null, "Meal Plans")
              ),
              t.createElement("h1", null, "6")
            ),
            t.createElement(
              "div",
              { className: "col-lg-4 second-top" },
              t.createElement(
                "div",
                { className: "dashboard-top" },
                t.createElement("i", { class: "fa fa-users" }),
                t.createElement("h3", null, "Users")
              ),
              t.createElement("h1", null, "10")
            ),
            t.createElement(
              "div",
              { className: "col-lg-4 third-top" },
              t.createElement(
                "div",
                { className: "dashboard-top" },
                t.createElement("i", { class: "fa fa-message" }),
                t.createElement("h3", null, "Messages")
              ),
              t.createElement("h1", null, "102")
            ),
            t.createElement(
              "div",
              { className: "col-lg-4 fourth-top" },
              t.createElement(
                "div",
                { className: "dashboard-top" },
                t.createElement("i", { class: "fa fa-user" }),
                t.createElement("h3", null, "Subscribers")
              ),
              t.createElement("h1", null, "8")
            )
          );
        var Fe = r(9905),
          Oe = {};
        (Oe.styleTagTransform = F()),
          (Oe.setAttributes = A()),
          (Oe.insert = Z().bind(null, "head")),
          (Oe.domAPI = S()),
          (Oe.insertStyleElement = j()),
          N()(Fe.Z, Oe),
          Fe.Z && Fe.Z.locals && Fe.Z.locals;
        const _e = () => {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)(""),
            [l, i] = (0, t.useState)(""),
            [s, c] = (0, t.useState)(""),
            [m, d] = (0, t.useState)(""),
            [p, u] = (0, t.useState)(""),
            g = (0, o.s0)();
          return t.createElement(
            "div",
            {
              className: "container-fluid",
              style: {
                border: "1px solid black",
                padding: "2em",
                margin: "1em",
              },
            },
            t.createElement(
              "h2",
              { className: "add-mealplan-heading" },
              "Add Meal Plan"
            ),
            t.createElement(
              "div",
              { className: "mealplan-form" },
              t.createElement(
                "form",
                {
                  onSubmit: (n) => {
                    n.preventDefault();
                    const t = new FormData();
                    t.append("title", e),
                      t.append("price", s),
                      t.append("short_description", r),
                      t.append("description", l),
                      t.append("mealplanImage", p),
                      I.post("/admin/add/mealplan", t)
                        .then((e) => {
                          alert("Meal Plan added successfully"),
                            g("/admin-home/mealplan");
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                  },
                  encType: "multipart/form-data",
                },
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "label",
                    { htmlFor: "title", className: "title" },
                    "Title:"
                  ),
                  t.createElement("input", {
                    type: "text",
                    name: "title",
                    className: "title_input",
                    onChange: (e) => n(e.target.value),
                    required: !0,
                  })
                ),
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "label",
                    { htmlFor: "price", className: "price" },
                    "Price:"
                  ),
                  t.createElement("input", {
                    type: "text",
                    name: "price",
                    className: "price_input",
                    onChange: (e) => c(e.target.value),
                    required: !0,
                  })
                ),
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "label",
                    {
                      htmlFor: "short_description",
                      className: "short_description",
                    },
                    "Short Description:"
                  ),
                  t.createElement("textarea", {
                    className: "short_description_input",
                    name: "short_description",
                    onChange: (e) => a(e.target.value),
                    required: !0,
                  })
                ),
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "label",
                    { htmlFor: "description", className: "description" },
                    "Description:"
                  ),
                  t.createElement("textarea", {
                    className: "description_input",
                    name: "description",
                    onChange: (e) => i(e.target.value),
                    required: !0,
                  })
                ),
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "label",
                    { htmlFor: "file" },
                    " Choose Mealplan Image"
                  ),
                  t.createElement("input", {
                    type: "file",
                    fileName: "mealplanImage",
                    className: "form-control-file",
                    onChange: (e) => {
                      u(e.target.files[0]);
                    },
                  })
                ),
                t.createElement(
                  "div",
                  { className: "form-item" },
                  t.createElement(
                    "button",
                    { type: "submit", className: "btn btn-success" },
                    " ",
                    "Add Meal Plan"
                  )
                )
              )
            )
          );
        };
        var Ie = r(3067),
          Le = {};
        (Le.styleTagTransform = F()),
          (Le.setAttributes = A()),
          (Le.insert = Z().bind(null, "head")),
          (Le.domAPI = S()),
          (Le.insertStyleElement = j()),
          N()(Ie.Z, Le),
          Ie.Z && Ie.Z.locals && Ie.Z.locals;
        const De = () => {
            const [e, n] = (0, t.useState)("");
            (0, t.useEffect)(() => {
              r();
            }, []);
            const r = async () => {
              const e = await I.get("/admin/mealplans");
              console.log("mealplans >>>>>", e), n(e);
            };
            return t.createElement(
              "div",
              { className: "subscriber-list" },
              t.createElement("h1", null, "List of MealPlans"),
              t.createElement(
                l.rU,
                {
                  to: "/admin-home/add/mealplan",
                  className: "btn btn-success",
                },
                "Add New Meal"
              ),
              t.createElement(
                "table",
                { className: "table table-striped" },
                t.createElement(
                  "thead",
                  null,
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("th", { scope: "col" }, "Title"),
                    t.createElement(
                      "th",
                      { scope: "col" },
                      "short_description"
                    ),
                    t.createElement("th", { scope: "col" }, "price"),
                    t.createElement("th", { scope: "col" }, "Image"),
                    t.createElement("th", null, "Action")
                  )
                ),
                t.createElement(
                  "tbody",
                  null,
                  e &&
                    e?.data.map((e) =>
                      t.createElement(
                        "tr",
                        null,
                        t.createElement("td", null, e.title),
                        t.createElement("td", null, e.short_description),
                        t.createElement("td", null, e.price),
                        t.createElement(
                          "td",
                          { className: "mealplan-img" },
                          t.createElement("img", {
                            src: `/uploads/${e.mealplanImage}`,
                            alt: "Meal Plan Image",
                          })
                        ),
                        t.createElement(
                          "td",
                          { style: { display: "flex" } },
                          t.createElement(
                            l.rU,
                            {
                              to: `/admin-home/update/mealplan/${e._id}`,
                              className: "btn btn-success",
                              style: { "margin-right": ".5em" },
                            },
                            "Edit"
                          ),
                          t.createElement(
                            l.rU,
                            {
                              className: "btn btn-danger",
                              to: "",
                              onClick: () =>
                                (async (e) => {
                                  await I.delete("/admin/mealplan/delete/" + e)
                                    .then((e) => {
                                      r();
                                    })
                                    .catch(() => {
                                      alert("Could not delete this meal plan");
                                    });
                                })(e._id),
                            },
                            "Delete"
                          )
                        )
                      )
                    )
                )
              )
            );
          },
          Me = () => {
            const { id: e } = (0, o.UO)(),
              [n, r] = (0, t.useState)(""),
              [a, l] = (0, t.useState)(""),
              [i, s] = (0, t.useState)(""),
              [c, m] = (0, t.useState)(""),
              [d, p] = (0, t.useState)(""),
              [u, g] = (0, t.useState)(""),
              b = (0, o.s0)();
            return (
              (0, t.useEffect)(() => {
                I.get(`/admin/mealplan/${e}`)
                  .then((n) => {
                    console.log("This is get data", n.data),
                      r(n.data.mealplan.title),
                      l(n.data.mealplan.short_description),
                      s(n.data.mealplan.description),
                      m(n.data.mealplan.price),
                      g(e);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }, []),
              t.createElement(
                "div",
                {
                  className: "container-fluid",
                  style: {
                    border: "1px solid black",
                    padding: "2em",
                    margin: "1em",
                  },
                },
                t.createElement(
                  "h2",
                  { className: "add-mealplan-heading" },
                  " Update ",
                  n
                ),
                t.createElement(
                  "div",
                  { className: "mealplan-form" },
                  t.createElement(
                    "form",
                    {
                      onSubmit: (r) => {
                        r.preventDefault();
                        const t = new FormData();
                        t.append("title", n),
                          t.append("price", c),
                          t.append("short_description", a),
                          t.append("description", i),
                          t.append("mealplanImage", d),
                          I.put(`/admin/update/mealplan/${e}`, t)
                            .then((e) => {
                              alert("Meal Plan Updated successfully"),
                                b("/admin-home/mealplan");
                            })
                            .catch((e) => {
                              console.log(e);
                            });
                      },
                      encType: "multipart/form-data",
                    },
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "label",
                        { htmlFor: "title", className: "title" },
                        "Title:"
                      ),
                      t.createElement("input", {
                        type: "text",
                        name: "title",
                        className: "title_input",
                        value: n,
                        onChange: (e) => r(e.target.value),
                        required: !0,
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "label",
                        { htmlFor: "price", className: "price" },
                        "Price:"
                      ),
                      t.createElement("input", {
                        type: "text",
                        name: "price",
                        className: "price_input",
                        value: c,
                        onChange: (e) => m(e.target.value),
                        required: !0,
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "label",
                        {
                          htmlFor: "short_description",
                          className: "short_description",
                        },
                        "Short Description:"
                      ),
                      t.createElement("textarea", {
                        className: "short_description_input",
                        name: "short_description",
                        value: a,
                        onChange: (e) => l(e.target.value),
                        required: !0,
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "label",
                        { htmlFor: "description", className: "description" },
                        "Description:"
                      ),
                      t.createElement("textarea", {
                        className: "description_input",
                        name: "description",
                        value: i,
                        onChange: (e) => s(e.target.value),
                        required: !0,
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "label",
                        { htmlFor: "file" },
                        " Choose Mealplan Image"
                      ),
                      t.createElement("input", {
                        type: "file",
                        fileName: "mealplanImage",
                        className: "form-control-file",
                        onChange: (e) => {
                          p(e.target.files[0]);
                        },
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "form-item" },
                      t.createElement(
                        "button",
                        { type: "submit", className: "btn btn-success" },
                        " ",
                        "Update Meal Plan"
                      )
                    )
                  )
                )
              )
            );
          };
        var qe = r(9331),
          Re = {};
        (Re.styleTagTransform = F()),
          (Re.setAttributes = A()),
          (Re.insert = Z().bind(null, "head")),
          (Re.domAPI = S()),
          (Re.insertStyleElement = j()),
          N()(qe.Z, Re),
          qe.Z && qe.Z.locals && qe.Z.locals;
        const Ue = () =>
            t.createElement(
              "div",
              { className: "subscriber-list" },
              t.createElement("h1", null, "Customer's Orders"),
              t.createElement(
                "table",
                { className: "table table-striped" },
                t.createElement(
                  "thead",
                  null,
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("th", null, "ORDER ID"),
                    t.createElement("th", { scope: "col" }, "DATE"),
                    t.createElement("th", { scope: "col" }, "TOTAL"),
                    t.createElement("th", { scope: "col" }, "PAID"),
                    t.createElement("th", null, "Action")
                  )
                ),
                t.createElement(
                  "tbody",
                  null,
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("td", null, "3678726386854"),
                    t.createElement("td", null, "2022/12/11"),
                    t.createElement("td", null, "3455"),
                    t.createElement("td", null, "True"),
                    t.createElement(
                      "td",
                      null,
                      t.createElement(
                        "a",
                        { className: "btn btn-primary", href: "#" },
                        "Detail"
                      )
                    )
                  ),
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("td", null, "47097490fj34ur89"),
                    t.createElement("td", null, "2022/11/11"),
                    t.createElement("td", null, "3434"),
                    t.createElement("td", null, "False"),
                    t.createElement(
                      "td",
                      null,
                      t.createElement(
                        "a",
                        { className: "btn btn-primary", href: "#" },
                        "Detail"
                      )
                    )
                  ),
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("td", null, "jksdhf82yy4382hiir2"),
                    t.createElement("td", null, "2022/11/01"),
                    t.createElement("td", null, "600"),
                    t.createElement("td", null, "True"),
                    t.createElement(
                      "td",
                      null,
                      t.createElement(
                        "a",
                        { className: "btn btn-primary", href: "#" },
                        "Detail"
                      )
                    )
                  )
                )
              )
            ),
          We = () => {
            const [e, n] = (0, t.useState)("");
            (0, t.useEffect)(() => {
              r();
            }, []);
            const r = async () => {
              const e = await I.get("/admin/messages");
              console.log("messages >>>>>", e), n(e);
            };
            return t.createElement(
              "div",
              { className: "subscriber-list" },
              t.createElement("h1", null, "Customer Messages"),
              t.createElement(
                "table",
                { className: "table table-striped" },
                t.createElement(
                  "thead",
                  null,
                  t.createElement(
                    "tr",
                    null,
                    t.createElement("th", null, "ID"),
                    t.createElement("th", { scope: "col" }, "Email"),
                    t.createElement("th", { scope: "col" }, "Name"),
                    t.createElement("th", { scope: "col" }, "Messages"),
                    t.createElement("th", { scope: "col" }, "CreatedAt"),
                    t.createElement("th", { scope: "col" }, "Updated At"),
                    t.createElement("th", null, "Action")
                  )
                ),
                t.createElement(
                  "tbody",
                  null,
                  e &&
                    e?.data.map((e) =>
                      t.createElement(
                        "tr",
                        null,
                        t.createElement("td", null, e._id),
                        t.createElement("td", null, e.email),
                        t.createElement("td", null, e.name),
                        t.createElement("td", null, e.message),
                        t.createElement("td", null, e.createdAt),
                        t.createElement("td", null, e.updatedAt),
                        t.createElement(
                          "td",
                          null,
                          t.createElement(
                            l.rU,
                            {
                              className: "btn btn-danger",
                              to: "",
                              onClick: () =>
                                (async (e) => {
                                  await I.delete("/admin/message/delete/" + e)
                                    .then((e) => {
                                      r();
                                    })
                                    .catch(() => {
                                      alert("Could not delete this message");
                                    });
                                })(e._id),
                            },
                            "Delete"
                          )
                        )
                      )
                    )
                )
              )
            );
          },
          Be = () => {
            const [e, n] = (0, t.useState)("");
            return (
              (0, t.useEffect)(() => {
                (async () => {
                  const e = await I.get("/admin/users-list");
                  console.log("list of Users >>>>>", e), n(e);
                })();
              }, []),
              t.createElement(
                "div",
                { className: "subscriber-list" },
                t.createElement("h1", null, "List of Registered Users"),
                t.createElement(
                  "table",
                  { className: "table table-striped" },
                  t.createElement(
                    "thead",
                    null,
                    t.createElement(
                      "tr",
                      null,
                      t.createElement("th", null, "ID"),
                      t.createElement("th", { scope: "col" }, "Email"),
                      t.createElement("th", { scope: "col" }, "Role"),
                      t.createElement("th", null, "Action")
                    )
                  ),
                  t.createElement(
                    "tbody",
                    null,
                    e &&
                      e?.data.map((e) =>
                        t.createElement(
                          "tr",
                          null,
                          t.createElement("td", null, e._id),
                          t.createElement("td", null, e.email),
                          t.createElement("td", null, e.role),
                          t.createElement(
                            "td",
                            null,
                            t.createElement(
                              "a",
                              { className: "btn btn-danger mx-2", href: "#" },
                              "Delete"
                            ),
                            t.createElement(
                              "a",
                              { className: "btn btn-primary mx-2", href: "#" },
                              "Edit User"
                            )
                          )
                        )
                      )
                  )
                )
              )
            );
          },
          Ye = () => {
            const { logout: e } = u();
            return t.createElement(
              "nav",
              {
                className: "navbar-default navbar-static-side",
                role: "navigation",
              },
              t.createElement(
                "div",
                { className: "sidebar-collapse" },
                t.createElement(
                  "ul",
                  { className: "nav metismenu", id: "side-menu" },
                  t.createElement(
                    "li",
                    { className: "nav-header" },
                    t.createElement(
                      "a",
                      {
                        className: "nav-link pr-0 text-white",
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                      t.createElement(
                        "span",
                        { className: "block m-t-xs font-bold" },
                        "Admin"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    null,
                    t.createElement(
                      l.rU,
                      { to: "/admin-home/dashboard" },
                      t.createElement("i", { className: "fa fa-home" }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "nav-label" },
                        "Dashboard"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    null,
                    t.createElement(
                      l.rU,
                      { to: "/admin-home/orders" },
                      t.createElement("i", { className: "fa fa-cog " }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "nav-label" },
                        "Orders"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    null,
                    t.createElement(
                      l.rU,
                      { to: "/admin-home/mealplan" },
                      t.createElement("i", { className: "fa fa-cog " }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "nav-label" },
                        "Our Meal Plan"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    null,
                    t.createElement(
                      l.rU,
                      { to: "/admin-home/listofusers" },
                      t.createElement("i", { class: "fa fa-blog " }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "nav-label" },
                        "Users"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    null,
                    t.createElement(
                      l.rU,
                      { to: "/admin-home/contactmessages" },
                      t.createElement("i", { class: "fa fa-blog " }),
                      " ",
                      t.createElement(
                        "span",
                        { className: "nav-label" },
                        "Contact Messages"
                      )
                    )
                  ),
                  t.createElement(
                    "li",
                    { className: "/nav-item" },
                    t.createElement(
                      "a",
                      {
                        href: "#",
                        className: "nav-label d-flex align-items-center",
                        onClick: () => {
                          (window.location.href = "/"), e();
                        },
                      },
                      t.createElement("i", {
                        className: "fas fa-sign-out-alt",
                      }),
                      t.createElement("span", null, "Log Out")
                    )
                  )
                )
              )
            );
          },
          He = () =>
            t.createElement(
              "div",
              { id: "wrapper" },
              t.createElement(Ye, null),
              t.createElement(
                "div",
                { id: "page-wrapper", className: "gray-bg dashboard-1" },
                t.createElement(
                  "div",
                  { className: "container-fluid" },
                  t.createElement(
                    o.Z5,
                    null,
                    t.createElement(o.AW, {
                      path: "/dashboard",
                      element: t.createElement(ze, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/orders",
                      element: t.createElement(Ue, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/mealplan",
                      element: t.createElement(De, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/listofusers",
                      element: t.createElement(Be, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/contactmessages",
                      element: t.createElement(We, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/add/mealplan",
                      element: t.createElement(_e, null),
                    }),
                    t.createElement(o.AW, {
                      path: "/update/mealplan/:id",
                      element: t.createElement(Me, null),
                    })
                  )
                )
              )
            );
        var Ge = r(4539),
          Je = {};
        function $e(e) {
          const [n, r] = (0, t.useState)(0),
            [a, l] = (0, t.useState)(0),
            [o, i] = (0, t.useState)(""),
            [s, c] = (0, t.useState)(""),
            [m, d] = (0, t.useState)(null),
            [p, u] = (0, t.useState)("success"),
            g = (e) => {
              switch (e.target.id) {
                case "height":
                  r(e.target.value);
                  break;
                case "weight":
                  l(e.target.value);
              }
            };
          return t.createElement(
            "div",
            null,
            t.createElement(
              "div",
              null,
              "Height in CM(s)",
              t.createElement("input", {
                type: "text",
                id: "height",
                value: n,
                onChange: g,
                className: "form-control",
              }),
              t.createElement("br", null),
              "" !== o
                ? t.createElement(
                    "span",
                    { id: "height_error", className: "span text-danger" },
                    o
                  )
                : t.createElement(t.Fragment, null)
            ),
            t.createElement(
              "div",
              null,
              "Weight in KG(s)",
              t.createElement("input", {
                type: "text",
                id: "weight",
                value: a,
                onChange: g,
                className: "form-control",
              }),
              t.createElement("br", null),
              "" !== s
                ? t.createElement(
                    "span",
                    { id: "weight_error", className: "span text-danger" },
                    s,
                    " "
                  )
                : t.createElement(t.Fragment, null)
            ),
            t.createElement(
              "button",
              {
                id: "btn",
                onClick: () => {
                  if (
                    ("" === n || isNaN(n) || n <= 0
                      ? i("Please provide a valid height")
                      : i(""),
                    "" === a || isNaN(a) || a <= 0
                      ? c("Please provide a valid weight")
                      : c(""),
                    "" === o && "" === s)
                  ) {
                    const e = (a / ((n * n) / 1e4)).toFixed(2);
                    e < 18.6
                      ? (u("warning"), d("Under weight : " + e))
                      : e >= 18.6 && e < 24.9
                      ? (u("success"), d("Normal : " + e))
                      : (u("danger"), d("Over weight : " + e));
                  }
                },
                className: "btn btn-outline-success",
              },
              "Calculate"
            ),
            t.createElement(
              "button",
              {
                id: "btn",
                onClick: () => {
                  r(""), l(""), d("");
                },
                className: "btn btn-outline-dark ms-3",
              },
              "Clear"
            ),
            m
              ? t.createElement(
                  h.Z,
                  { id: "output", variant: p, className: "my-2" },
                  m
                )
              : ""
          );
        }
        function Xe() {
          return t.createElement(
            "div",
            {
              class: "row d-flex text-center align-items-center",
              style: { minHeight: "68.5vh", width: "95%" },
            },
            t.createElement(
              "h1",
              null,
              "You can't access this part of the website"
            )
          );
        }
        function Ve(e) {
          const [n, r] = (0, t.useState)(e.busyFlag);
          return (
            (0, t.useEffect)(() => {
              r(e.busyFlag);
            }, [e.busyFlag]),
            t.createElement(
              "button",
              {
                className: e.className,
                name: e.name ? e.name : "busy-button",
                id: e.id ? e.id : "busy-button",
                disabled: n,
                onClick: e.onClick,
              },
              e.text,
              " ",
              n
                ? t.createElement("i", { className: "fas fa-spinner fa-spin" })
                : ""
            )
          );
        }
        function Ke() {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)("warning"),
            [l, o] = (0, t.useState)(""),
            [i, s] = (0, t.useState)(!1),
            [c, m] = (0, t.useState)(!1),
            d = (e, n) => {
              a(n), o(e), s(!0);
            };
          return t.createElement(
            "div",
            { className: "container-fluid" },
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center p-0" },
              t.createElement(
                "div",
                { className: "col-lg-4 col-md-6 col-sm-12 p-0" },
                t.createElement(
                  "div",
                  { className: "row p-0" },
                  t.createElement("h3", null, "Resend Verification Email")
                ),
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    h.Z,
                    {
                      variant: r,
                      show: i,
                      onClose: () => {
                        s(!1);
                      },
                      dismissible: !0,
                    },
                    l
                  )
                ),
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    "label",
                    { htmlFor: "email", className: "p-0" },
                    "Enter Your Email"
                  ),
                  t.createElement("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    className: "form-control mb-3",
                    value: e,
                    onChange: (e) => n(e.target.value),
                  })
                ),
                t.createElement(
                  "div",
                  { className: "row mb-3" },
                  t.createElement(
                    "div",
                    { className: "col-md-12 p-0 text-center" },
                    t.createElement(Ve, {
                      className: "btn btn-outline-success",
                      id: "submit-resend",
                      type: "button",
                      onClick: async () => {
                        try {
                          if ((m(!0), "" === e))
                            return void d(
                              "Email field cannot be empty",
                              "warning"
                            );
                          const n = await fetch("/auth/resend", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ email: e }),
                            }),
                            r = await n.json();
                          r.status
                            ? d(r.message, "success")
                            : (console.log(r.error), d(r.error, "danger"));
                        } catch (e) {
                          d(e, "danger");
                        } finally {
                          m(!1);
                        }
                      },
                      text: "Resend Verification Email",
                      busyFlag: c,
                    })
                  )
                )
              )
            )
          );
        }
        function Qe() {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)(""),
            [l, o] = (0, t.useState)(""),
            [i, s] = (0, t.useState)(""),
            [c, m] = (0, t.useState)("warning"),
            [d, p] = (0, t.useState)(""),
            [u, g] = (0, t.useState)(!1),
            [b, f] = (0, t.useState)(!1);
          console.log(e, r);
          const v = (e) => {
              switch (e.target.id) {
                case "password":
                  o(e.target.value);
                  break;
                case "verify-password":
                  s(e.target.value);
              }
            },
            x = (e, n) => {
              m(n), console.log(e), p(e), g(!0);
            };
          return (
            (0, t.useEffect)(() => {
              const t = ((e) => {
                let n = {};
                const r = location.search.replace("?", "").split("&");
                for (let e of r) {
                  let r = e.split("=");
                  n[r[0]] = r[1];
                }
                return n;
              })();
              n(t.token), a(t.email), console.log(e, r);
            }, [location.search]),
            t.createElement(
              "div",
              { className: "container-fluid" },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center" },
                t.createElement(
                  "div",
                  { className: "col-lg-4 col-md-6 col-sm-12 p-0" },
                  t.createElement(
                    "div",
                    { className: "row p-0" },
                    t.createElement("h3", null, "Reset Password")
                  ),
                  t.createElement(
                    "div",
                    { className: "row" },
                    t.createElement(
                      h.Z,
                      {
                        variant: c,
                        show: u,
                        onClose: () => {
                          g(!1);
                        },
                        dismissible: !0,
                      },
                      d
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "row mb-3" },
                    t.createElement(
                      "label",
                      { htmlFor: "newpass" },
                      "Enter New Password"
                    ),
                    t.createElement(E, {
                      className: "form-control",
                      name: "password",
                      id: "password",
                      value: l,
                      onChange: v,
                    })
                  ),
                  t.createElement(
                    "div",
                    { className: "row mb-3" },
                    t.createElement(
                      "label",
                      { htmlFor: "newpass" },
                      "Re-enter New Password"
                    ),
                    t.createElement(E, {
                      className: "form-control",
                      name: "verify-password",
                      id: "verify-password",
                      value: i,
                      onChange: v,
                    })
                  ),
                  t.createElement(
                    "div",
                    { className: "row mb-3 d-flex justify-content-center" },
                    t.createElement(
                      "div",
                      { className: "col-md-4" },
                      t.createElement(Ve, {
                        className: "btn btn-outline-success",
                        id: "submit-reset-password",
                        type: "button",
                        onClick: async () => {
                          try {
                            if ((f(!0), "" === l))
                              return void x(
                                "Password field cannot be empty",
                                "warning"
                              );
                            if ("" === i)
                              return void x(
                                "Verify Password field cannot be empty",
                                "warning"
                              );
                            if (l !== i)
                              return void x(
                                "Password and Verify Password field should match",
                                "warning"
                              );
                            {
                              console.log({ token: e, email: r, password: l });
                              const n = await fetch("/auth/reset", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    token: e,
                                    email: r,
                                    password: l,
                                  }),
                                }),
                                t = await n.json();
                              t.status
                                ? x(t.message, "success")
                                : (console.log(t.error), x(t.error, "danger"));
                            }
                          } catch (e) {
                            console.log(e), x(e, "danger");
                          } finally {
                            f(!1);
                          }
                        },
                        text: "Reset Password",
                        busyFlag: b,
                      })
                    )
                  )
                )
              )
            )
          );
        }
        function en() {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)("warning"),
            [l, o] = (0, t.useState)(""),
            [i, s] = (0, t.useState)(!1),
            [c, m] = (0, t.useState)(!1),
            d = (e, n) => {
              a(n), o(e), s(!0);
            };
          return t.createElement(
            "div",
            { className: "container-fluid" },
            t.createElement(
              "div",
              { className: "row d-flex justify-content-center" },
              t.createElement(
                "div",
                { className: "col-lg-4 col-md-6 col-sm-12 p-0" },
                t.createElement(
                  "div",
                  { className: "row p-0" },
                  t.createElement("h3", null, "Forgot Password")
                ),
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    h.Z,
                    {
                      variant: r,
                      show: i,
                      onClose: () => {
                        s(!1);
                      },
                      dismissible: !0,
                    },
                    l
                  )
                ),
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    "label",
                    { htmlFor: "email", className: "p-0" },
                    "Enter Your Email"
                  ),
                  t.createElement("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    className: "form-control mb-3",
                    value: e,
                    onChange: (e) => n(e.target.value),
                  })
                ),
                t.createElement(
                  "div",
                  { className: "row mb-3" },
                  t.createElement(
                    "div",
                    { className: "col-md-6 p-0" },
                    t.createElement(Ve, {
                      className: "btn btn-outline-success",
                      id: "submit-forget-password",
                      type: "button",
                      onClick: async () => {
                        try {
                          if ((m(!0), "" === e))
                            return void d(
                              "Email field cannot be empty",
                              "warning"
                            );
                          const n = await fetch("/auth/forget", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ email: e }),
                            }),
                            r = await n.json();
                          r.status
                            ? d(r.message, "success")
                            : (console.log(r.error), d(r.error, "danger"));
                        } catch (e) {
                          d(e, "danger");
                        } finally {
                          m(!1);
                        }
                      },
                      text: "Get Reset Password Link",
                      busyFlag: c,
                    })
                  )
                )
              )
            )
          );
        }
        (Je.styleTagTransform = F()),
          (Je.setAttributes = A()),
          (Je.insert = Z().bind(null, "head")),
          (Je.domAPI = S()),
          (Je.insertStyleElement = j()),
          N()(Ge.Z, Je),
          Ge.Z && Ge.Z.locals && Ge.Z.locals;
        var nn = r(9468),
          rn = {};
        (rn.styleTagTransform = F()),
          (rn.setAttributes = A()),
          (rn.insert = Z().bind(null, "head")),
          (rn.domAPI = S()),
          (rn.insertStyleElement = j()),
          N()(nn.Z, rn),
          nn.Z && nn.Z.locals && nn.Z.locals;
        const tn = function () {
          return t.createElement(
            "div",
            { className: "subscriber-list" },
            t.createElement("h1", null, "List of Subscribers"),
            t.createElement(
              "table",
              { className: "table table-striped" },
              t.createElement(
                "thead",
                null,
                t.createElement(
                  "tr",
                  null,
                  t.createElement("th", { scope: "col" }, "#"),
                  t.createElement("th", { scope: "col" }, "Firstname"),
                  t.createElement("th", { scope: "col" }, "Lastname"),
                  t.createElement("th", { scope: "col" }, "Email"),
                  t.createElement("th", null)
                )
              ),
              t.createElement(
                "tbody",
                null,
                t.createElement(
                  "tr",
                  null,
                  t.createElement("th", { scope: "row" }, "1"),
                  t.createElement("td", null, "Mark"),
                  t.createElement("td", null, "Otto"),
                  t.createElement("td", null, "mark@mdo.com"),
                  t.createElement(
                    "td",
                    null,
                    t.createElement(
                      "a",
                      { className: "btn btn-primary" },
                      "Send Newsletter"
                    )
                  )
                ),
                t.createElement(
                  "tr",
                  null,
                  t.createElement("th", { scope: "row" }, "2"),
                  t.createElement("td", null, "Jacob"),
                  t.createElement("td", null, "Thornton"),
                  t.createElement("td", null, "jacob@fat.com"),
                  t.createElement(
                    "td",
                    null,
                    t.createElement(
                      "a",
                      { className: "btn btn-primary" },
                      "Send Newsletter"
                    )
                  )
                ),
                t.createElement(
                  "tr",
                  null,
                  t.createElement("th", { scope: "row" }, "3"),
                  t.createElement("td", null, "Larry"),
                  t.createElement("td", null, "the Bird"),
                  t.createElement("td", null, "larry@twitter.com"),
                  t.createElement(
                    "td",
                    null,
                    t.createElement(
                      "a",
                      { className: "btn btn-primary" },
                      "Send Newsletter"
                    )
                  )
                )
              )
            )
          );
        };
        var an = r(3241),
          ln = {};
        (ln.styleTagTransform = F()),
          (ln.setAttributes = A()),
          (ln.insert = Z().bind(null, "head")),
          (ln.domAPI = S()),
          (ln.insertStyleElement = j()),
          N()(an.Z, ln),
          an.Z && an.Z.locals && an.Z.locals;
        const on = () => {
          const { id: e } = (0, o.UO)();
          return (
            console.log(e),
            t.createElement(
              "section",
              { className: "mealplan-detail" },
              t.createElement(
                "div",
                { className: "container" },
                t.createElement(
                  "div",
                  { class: "row" },
                  t.createElement(
                    "div",
                    { class: "col-12 col-md-6" },
                    t.createElement("img", {
                      className: "salmon-image-tag",
                      src: "./images/natural-100-percent.png",
                    }),
                    t.createElement("img", {
                      className: "product-image",
                      src: "./images/salmon-with-vegetables.jpg",
                      alt: "Eggs with bacon",
                    })
                  ),
                  t.createElement(
                    "div",
                    { class: "col-12 col-md-6" },
                    t.createElement("h1", null, "Regular Meal Plan"),
                    t.createElement(
                      "p",
                      null,
                      "Regular Meal Plan contains regular food that we consume in our daily life. However, every ingredient is inspected by the nutritionist and the meal plan is approved by the WHO."
                    ),
                    t.createElement(
                      "p",
                      { className: "bold" },
                      "Energy: ",
                      t.createElement("span", { class: "red" }, "498 kcal")
                    ),
                    t.createElement(
                      "p",
                      { className: "bold" },
                      "Protein: ",
                      t.createElement("span", { class: "green" }, "26 g")
                    ),
                    t.createElement(
                      "p",
                      { className: "bold" },
                      "Fat: ",
                      t.createElement("span", { class: "green" }, "8 g")
                    ),
                    t.createElement(
                      "p",
                      { className: "bold" },
                      "Carbohydrates: ",
                      t.createElement("span", { class: "green" }, "49 g")
                    ),
                    t.createElement(
                      "p",
                      { className: "bold red price" },
                      "$17.99"
                    ),
                    t.createElement(
                      "button",
                      { type: "button", class: "btn btn-danger" },
                      "Add to cart"
                    ),
                    t.createElement(
                      "button",
                      { type: "button", class: "btn btn-primary" },
                      "Subscribe"
                    )
                  )
                ),
                t.createElement(
                  "h2",
                  { className: "bold mb-4" },
                  "Meal Plan Description"
                ),
                t.createElement(
                  "div",
                  { className: "mealplan_card" },
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular1.png",
                      alt: "Card image cap",
                      width: 200,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title bold" },
                        "Wheat Pancake/Finger salad/Fish"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day1"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular2.jpg",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Egg/Corn Salad/ Grilled Tomato"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 2"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular3.jpg",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Chicken/Beans Salad"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 3"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/day1.jpg",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Rice/Fish/Stick salad"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 4"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular4.png",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Brown Rice with fish"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 5"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular5.jpeg",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Brown Rice/Fish"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 6"
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { class: "card mb-4" },
                    t.createElement("img", {
                      class: "card-img-top",
                      src: "./images/Regular6.jpeg",
                      alt: "Card image cap",
                      width: 300,
                    }),
                    t.createElement(
                      "div",
                      { class: "card-body" },
                      t.createElement(
                        "h5",
                        { class: "card-title" },
                        " Pasta with egg/ Fruits"
                      ),
                      t.createElement(
                        "button",
                        { class: "btn btn-danger" },
                        "Day 7"
                      )
                    )
                  )
                )
              )
            )
          );
        };
        var sn = r(5021),
          cn = r(476),
          mn = {};
        (mn.styleTagTransform = F()),
          (mn.setAttributes = A()),
          (mn.insert = Z().bind(null, "head")),
          (mn.domAPI = S()),
          (mn.insertStyleElement = j()),
          N()(cn.Z, mn),
          cn.Z && cn.Z.locals && cn.Z.locals;
        const dn = () => {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(""),
            [c, m] = (0, t.useState)(""),
            [d, p] = (0, t.useState)(""),
            { items: u, cartTotal: g } = (0, s.jD)();
          return (
            console.log(u),
            t.createElement(
              "div",
              { className: "row" },
              t.createElement(
                "div",
                { className: "checkout_heading" },
                t.createElement(
                  "h2",
                  { className: "checkout_head" },
                  "CheckOut Page"
                )
              ),
              t.createElement(
                "div",
                { className: "container row d-flex justify-content-center" },
                t.createElement(
                  "div",
                  { class: "col-md-6 text-center mb-5" },
                  t.createElement(
                    sn.Vv,
                    { options: { "client-id": "test", currency: "CAD" } },
                    t.createElement(sn.ch, {
                      createOrder: (e, n) =>
                        n.order.create({
                          purchase_units: [
                            { amount: { currency_code: "CAD", value: g } },
                          ],
                        }),
                      onApprove: (e, n) =>
                        n.order.capture().then(async (e) => {
                          const n =
                              e.payer.name.given_name +
                              " " +
                              e.payer.name.surname,
                            r = JSON.stringify({
                              fullName: n,
                              shippingAddress: Object.values(
                                e.payer.address
                              ).join(" , "),
                              zipCode: e.payer.address.postal_code,
                              email: e.payer.email_address,
                              phoneNum:
                                e.payer.phone.phone_number.national_number,
                              cartTotal: g,
                            });
                          console.log(r);
                          let t = await fetch("/api/createorder", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: r,
                            }),
                            a = await t.json();
                          if (a.status) {
                            let e = a.id,
                              n = u.map((n) => ({
                                meal_plan_id: n.id,
                                user_id: n.user.user_id,
                                startDate: n.startDate,
                                duration: n.duration,
                                order_id: e,
                              }));
                            console.log(n);
                            let r = await fetch("/api/subscribe", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(n),
                              }),
                              t = await r.json();
                            console.log(t),
                              t.status &&
                                alert(
                                  "Your transaction was successfully completed"
                                );
                          }
                        }),
                    })
                  ),
                  t.createElement(
                    l.rU,
                    { to: "/cart" },
                    t.createElement("input", {
                      className: "btn btn-danger float-right",
                      value: "Cancel",
                    })
                  )
                )
              )
            )
          );
        };
        function pn() {
          const [e, n] = (0, t.useState)(!1),
            { user: r } = p(),
            [a, c] = (0, t.useState)([]),
            m = [],
            [d, u] = (0, t.useState)(!1);
          console.log(r);
          const b = (e) => {
            console.log(e);
            let n = !1;
            if (
              (a.forEach((r) => {
                e._id === r._id && (n = !0);
              }),
              n)
            )
              return (
                u(!0),
                void setTimeout(() => {
                  u(!1);
                }, 2e3)
              );
            c([...a, e]),
              m.push(e),
              console.log("carts" + m),
              localStorage.setItem("cart", JSON.stringify(m));
          };
          return t.createElement(
            "div",
            null,
            t.createElement(
              s.Zl,
              null,
              t.createElement(q, { cartItems: a.length, cart: a }),
              t.createElement(
                l.VK,
                null,
                t.createElement(
                  o.Z5,
                  null,
                  t.createElement(o.AW, {
                    path: "/admin-home/*",
                    element:
                      r && "admin" === r.role
                        ? t.createElement(He, null)
                        : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/admin-mealplan",
                    element:
                      r && "admin" === r.role
                        ? t.createElement(De, null)
                        : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/registered-users",
                    element:
                      r && "admin" === r.role
                        ? t.createElement(M, null)
                        : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/subscribers",
                    element:
                      r && "admin" === r.role
                        ? t.createElement(tn, null)
                        : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/resend",
                    element: t.createElement(Ke, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/forget",
                    element: t.createElement(en, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/reset",
                    element: t.createElement(Qe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/",
                    element: r
                      ? t.createElement(de, null)
                      : t.createElement(me, { handleAddToCart: b }),
                  }),
                  t.createElement(o.AW, {
                    path: "/home",
                    element: r
                      ? t.createElement(de, null)
                      : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/verify",
                    exact: !0,
                    element: t.createElement(pe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/mealplan",
                    element: t.createElement(Q, { handleAddToCart: b }),
                  }),
                  t.createElement(o.AW, {
                    path: "/aboutus",
                    element: t.createElement(be, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/mealdetail",
                    element: t.createElement(on, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/cart",
                    element: t.createElement(ve, {
                      cart: a,
                      demo: "demo",
                      setCart: c,
                    }),
                  }),
                  t.createElement(o.AW, {
                    path: "/contact-us",
                    element: t.createElement(we, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/checkout",
                    element: r
                      ? t.createElement(dn, null)
                      : t.createElement(Xe, null),
                  }),
                  t.createElement(o.AW, {
                    path: "/user-profile",
                    element: r
                      ? t.createElement(Ze, null)
                      : t.createElement(Xe, null),
                  })
                )
              ),
              t.createElement(
                "button",
                {
                  className: "btn btn-success floating-button",
                  title: "Calculate BMI",
                  type: "button",
                  onClick: () => {
                    n(!0);
                  },
                },
                t.createElement(g.T_s, null)
              ),
              t.createElement(
                i.Z,
                {
                  show: e,
                  onHide: () => {
                    n(!1);
                  },
                },
                t.createElement(
                  i.Z.Header,
                  { closeButton: !0 },
                  t.createElement(i.Z.Title, null, "BMI Calculator")
                ),
                t.createElement(i.Z.Body, null, t.createElement($e, null))
              ),
              r && "admin" === r.role
                ? t.createElement(t.Fragment, null)
                : t.createElement(Y, null),
              d &&
                t.createElement(
                  "div",
                  { className: "warning" },
                  "Already in cart"
                )
            )
          );
        }
        const un = document.getElementById("app");
        (0, a.s)(un).render(
          t.createElement(m, null, t.createElement(pn, null))
        );
      },
      4466: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".home-dish-promotion{\r\n    padding: 40px 0;\r\n}\r\n.home-dish-promotion .row{\r\n    margin-bottom: 30px;\r\n}\r\n.home-dish-promotion .product-image{\r\n    max-width: 100%;\r\n    transition: all .3s ease-in-out;\r\n}\r\n.home-dish-promotion .product-image:hover{\r\n    transform: scale(1.1);\r\n} \r\n.home-dish-promotion .egg-image-tag{\r\n    position: absolute;\r\n    right: 10%;\r\n    max-width: 100%;\r\n    z-index: 1;\r\n}\r\n.home-dish-promotion .salmon-image-tag{\r\n    position: absolute;\r\n    max-width: 100%;\r\n    z-index: 1;\r\n}\r\n.home-dish-promotion h1{\r\n    font-family: 'Montserrat', sans-serif !important;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n}\r\n.home-dish-promotion .bold{\r\n    font-weight: bold;\r\n}\r\n.home-dish-promotion .green{\r\n    color: var(--secondaryColor);\r\n}\r\n.home-dish-promotion .red{\r\n    color: #da2424;\r\n}\r\n.home-dish-promotion .price{\r\n    font-size: 1.5rem;\r\n}\r\n.home-dish-promotion .btn{\r\n    margin-right: 10px;\r\n    padding: 15px 30px;\r\n    border-radius: 20px;\r\n    border: none;\r\n}\r\n.home-dish-promotion .btn-primary{\r\n    background-color: var(--secondaryColor);\r\n}\r\n.home-dish-promotion .btn-primary:hover{\r\n    background-color: #da2424;\r\n    color: #fff;\r\n}\r\n.home-dish-promotion .btn-danger:hover{\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}",
          "",
        ]);
        const i = o;
      },
      5692: (e, n, r) => {
        r.d(n, { Z: () => p });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l),
          i = r(1667),
          s = r.n(i),
          c = new URL(r(8862), r.b),
          m = o()(a()),
          d = s()(c);
        m.push([
          e.id,
          ".home-trial{\r\n    position: relative;\r\n    min-height: 500px;\r\n    background-image: url(" +
            d +
            ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: #fff;\r\n}\r\n.home-trial .contents{\r\n    margin: 0;\r\n    width: 70%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n.home-trial h1{\r\n    font-family: 'Montserrat', sans-serif !important;\r\n    font-size: 3.8rem;\r\n    line-height: 5.8rem;\r\n    font-weight: bold;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 20px;\r\n    text-shadow: 5px 2px 2px #444;\r\n}\r\n.home-trial .extra-style{\r\n    font-style: italic;\r\n}\r\n.home-trial .btn{\r\n    padding: 20px 30px;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-color: #d6111e;\r\n    border: none;\r\n}\r\n.home-trial .btn:hover{\r\n    background-color: #fff;\r\n    color: var(--secondaryColor);\r\n}\r\n",
          "",
        ]);
        const p = m;
      },
      6340: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".meal-plan-list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.meal-plan-card {\r\n    margin: 1em;\r\n    border-radius: 10px;\r\n    padding: 1em;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.meal-plan-image {\r\n    width: 350px;\r\n    height: 250px;\r\n}\r\n\r\n.meal-plan-image img {\r\n    width: 350px;\r\n    height: 250px;\r\n    object-fit: cover;\r\n}\r\n\r\n.meal-plan-title {\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .meal-plan-image {\r\n        width: 100%;\r\n    }\r\n    \r\n    .meal-plan-image img {\r\n        width: 100%;\r\n}\r\n}",
          "",
        ]);
        const i = o;
      },
      9468: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".subscriber-list{\r\n    padding: 20px;\r\n    margin: 20px;\r\n    border: 1px solid #eee;\r\n    border-radius: 5px;\r\n}\r\n\r\n.subscriber-list h1{\r\n    padding: 50px;\r\n    text-align: center;\r\n    background: #ececec;\r\n    border-radius: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n.subscriber-list .btn-primary{\r\n    background-color: #04994a;\r\n    border: none;\r\n}\r\n.subscriber-list .btn-primary:hover{\r\n    background-color: #025428;\r\n}",
          "",
        ]);
        const i = o;
      },
      5954: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".register-user-list{\r\n    padding: 20px;\r\n    margin: 20px;\r\n    border: 1px solid #eee;\r\n    border-radius: 5px;\r\n}\r\n\r\n.register-user-list h1{\r\n    padding: 50px;\r\n    text-align: center;\r\n    background: #ececec;\r\n    border-radius: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n.register-user-list .btn{\r\n    min-width: 110px;\r\n}\r\n\r\n.register-user-list .btn-primary{\r\n    background-color: #04994a;\r\n    border: none;\r\n}\r\n.register-user-list .btn-primary:hover{\r\n    background-color: #025428;\r\n}\r\n.register-user-list .activate{\r\n    border: 1px solid #025428;\r\n    color: #025428\r\n}\r\n.register-user-list .activate:hover{\r\n    background-color: #025428;\r\n    color: #fff;\r\n}",
          "",
        ]);
        const i = o;
      },
      4955: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([e.id, "", ""]);
        const i = o;
      },
      9980: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".user-profile .header{\r\n    position: relative;\r\n    min-height: 450px; \r\n    background-image: url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg); \r\n    background-size: cover; \r\n    background-position: center top;\r\n}\r\n.user-profile .mask{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: all .15s ease;\r\n}\r\n.user-profile .opacity-8 {\r\n    opacity: .9 !important;\r\n}\r\n.user-profile .bg-gradient-default {\r\n    background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;\r\n}\r\n.user-profile .name-container{\r\n    z-index: 1;\r\n}\r\n.user-profile .details-container{\r\n    position:relative;\r\n    min-height: 400px;\r\n    margin:-50px 20px 20px 20px;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%) !important;\r\n}\r\n.user-profile h1{\r\n    text-align: left !important;\r\n}\r\n.edit-profile-btn{\r\n    background-color: #04994a;\r\n    border: none;\r\n}\r\n.edit-profile-btn:hover{\r\n    background-color: #7ae8ad;\r\n    color:#444;\r\n    border: none;\r\n}\r\n",
          "",
        ]);
        const i = o;
      },
      4539: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".span {}\r\n\r\n.wrapper-bmi {\r\n    padding-left: 520px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-shadow: rgb(171, 255, 180) 0px 20px 30px -10px;\r\n}\r\n\r\n.card {\r\n    width: 50%;\r\n}\r\n\r\n.input {\r\n    outline: none;\r\n    padding: 10px;\r\n    color: #00400f;\r\n}\r\n\r\n.button {\r\n    color: white;\r\n    padding: 10px;\r\n    border: 2px solid white;\r\n    background: #28a745;\r\n    display: block;\r\n    margin-top: 10%;\r\n    cursor: pointer;\r\n}",
          "",
        ]);
        const i = o;
      },
      2531: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          'div .wrapper-contact {\r\n  font-family: "Titillium Web", sans-serif !important;\r\n  background-color: rgba(96, 168, 69, 0.2);\r\n}\r\n\r\n.wrapper-contact input {\r\n  width: auto;\r\n}\r\n\r\ndiv .contact-form {\r\n  background-color: rgba(96, 168, 69, 0.1);\r\n}\r\n\r\n.contact-wrapper {\r\n  margin: auto 0;\r\n}\r\n\r\n.form-headline:after {\r\n  content: "";\r\n  display: block;\r\n  width: 10%;\r\n  padding-top: 10px;\r\n  border-bottom: 3px solid #ec1c24;\r\n}\r\n\r\n.highlight-text {\r\n  color: #ec1c24;\r\n}\r\n\r\n.hightlight-contact-info {\r\n  font-weight: 700;\r\n  font-size: 22px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.highlight-text-grey {\r\n  font-weight: 500;\r\n}\r\n\r\n.email-info {\r\n  margin-top: 20px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  /* Chrome */\r\n  font-family: \'Roboto\', sans-serif;\r\n}\r\n\r\n.required-input {\r\n  color: black;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .contain {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\nh3,\r\nul {\r\n  margin: 0;\r\n}\r\n\r\nh3 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-input:focus,\r\ntextarea:focus {\r\n  outline: 1.5px solid #ec1c24;\r\n}\r\n\r\n.form-input,\r\ntextarea {\r\n  width: 100%;\r\n  border: 1px solid #bdbdbd;\r\n  border-radius: 5px;\r\n}\r\n\r\n.wrapper-contact>* {\r\n  padding: 1em;\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .wrapper-contact {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n\r\n  .wrapper-contact>* {\r\n    padding: 2em 2em;\r\n  }\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.contacts {\r\n  color: #212d31;\r\n}\r\n\r\n.form {\r\n  background: #fff;\r\n}\r\n\r\n#submit-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 20px;\r\n}\r\n\r\n#submit-form label {\r\n  display: block;\r\n}\r\n\r\n#submit-form p {\r\n  margin: 0;\r\n}\r\n\r\n.full-width {\r\n  grid-column: 1 / 3;\r\n}\r\n\r\nbutton,\r\n.submit-btn,\r\n.form-input,\r\ntextarea {\r\n  padding: 1em;\r\n}\r\n\r\nbutton,\r\n.submit-btn {\r\n  background: transparent;\r\n  border: 1px solid #ec1c24;\r\n  /* color: #ec1c24; */\r\n  border-radius: 15px;\r\n  padding: 5px 20px;\r\n  text-transform: uppercase;\r\n}\r\n\r\nbutton:hover,\r\n.submit-btn:hover,\r\nbutton:focus,\r\n.submit-btn:focus {\r\n  /* background: #ec1c24; */\r\n  outline: 0;\r\n  color: #eee;\r\n}\r\n\r\n.error {\r\n  color: #ec1c24;\r\n}',
          "",
        ]);
        const i = o;
      },
      3241: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".mealplan-detail {\r\n    padding: 40px 0;\r\n}\r\n\r\n.mealplan-detail .row {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.mealplan-detail .product-image {\r\n    max-width: 100%;\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.mealplan-detail .product-image:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.mealplan-detail .egg-image-tag {\r\n    position: absolute;\r\n    right: 10%;\r\n    max-width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.mealplan-detail .salmon-image-tag {\r\n    position: absolute;\r\n    max-width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.mealplan-detail h1 {\r\n    font-family: 'Montserrat', sans-serif !important;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.mealplan-detail .bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.mealplan-detail .green {\r\n    color: var(--secondaryColor);\r\n}\r\n\r\n.mealplan-detail .red {\r\n    color: #da2424;\r\n}\r\n\r\n.mealplan-detail .price {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.mealplan-detail .btn {\r\n    margin-right: 10px;\r\n    padding: 15px 30px;\r\n    border-radius: 20px;\r\n    border: none;\r\n}\r\n\r\n.mealplan-detail .btn-primary {\r\n    background-color: var(--secondaryColor);\r\n}\r\n\r\n.mealplan-detail .btn-primary:hover {\r\n    background-color: #da2424;\r\n    color: #fff;\r\n}\r\n\r\n.mealplan-detail .btn-danger:hover {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mealplan_card {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card {\r\n    width: 400px;\r\n    height: 400px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n        .card{\r\n            height: auto;\r\n        }\r\n}",
          "",
        ]);
        const i = o;
      },
      4246: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".meal-plan-section {\r\n    background-color: #f4f4f7;\r\n}\r\n\r\n.meal-plan-heading {\r\n    text-align: center;\r\n    color: black;\r\n    line-height: 1em;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin-top: 1em !important;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n",
          "",
        ]);
        const i = o;
      },
      6115: (e, n, r) => {
        r.d(n, { Z: () => p });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l),
          i = r(1667),
          s = r.n(i),
          c = new URL(r(6946), r.b),
          m = o()(a()),
          d = s()(c);
        m.push([
          e.id,
          "a:hover{\r\n    text-decoration: none;\r\n}\r\n#about {\r\n   background: url(" +
            d +
            ") center top no-repeat fixed;\r\n   background-size: cover;\r\n   padding: 29px 0 40px 0;\r\n   position: relative;\r\n}\r\n\r\n.section-header h3 {\r\n   font-size: 32px;\r\n   color: #111;\r\n   text-transform: uppercase;\r\n   text-align: center;\r\n   font-weight: 700;\r\n   position: relative;\r\n   padding-bottom: 15px;\r\n}\r\n\r\n.section-header h3::before {\r\n   content: '';\r\n   position: absolute;\r\n   display: block;\r\n   width: 120px;\r\n   height: 1px;\r\n   background: #ddd;\r\n   bottom: 1px;\r\n   left: calc(50% - 60px);\r\n}\r\n\r\n.section-header h3::after {\r\n   content: '';\r\n   position: absolute;\r\n   display: block;\r\n   width: 40px;\r\n   height: 3px;\r\n   background: #18d26e;\r\n   bottom: 0;\r\n   left: calc(50% - 20px);\r\n}\r\n\r\n.section-header p {\r\n   text-align: center;\r\n   padding-bottom: 30px;\r\n   color: #333;\r\n}\r\n\r\n#about::before {\r\n   content: '';\r\n   position: absolute;\r\n   left: 0;\r\n   right: 0;\r\n   top: 0;\r\n   bottom: 0;\r\n   background: rgb(255 255 255 / 48%);\r\n   \r\n}\r\n\r\n#about .container {\r\n   position: relative;\r\n   \r\n   background: #fff;\r\n   padding: 30px;\r\n   border-radius: 10px;\r\n}\r\n\r\n#about .about-col {\r\n   background: #fff;\r\n   border-radius: 0 0 4px 4px;\r\n   box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);\r\n   margin-bottom: 20px;\r\n   padding:20px;\r\n}\r\n\r\n#about .about-col .img {\r\n   position: relative;\r\n}\r\n\r\n#about .about-col .img img {\r\n   border-radius: 4px 4px 0 0;\r\n}\r\n\r\n#about .about-col .icon {\r\n   width: 64px;\r\n   height: 64px;\r\n   padding-top: 8px;\r\n   text-align: center;\r\n   position: absolute;\r\n   background-color: #18d26e;\r\n   border-radius: 50%;\r\n   text-align: center;\r\n   border: 4px solid #fff;\r\n   left: calc( 50% - 32px);\r\n   bottom: -30px;\r\n   transition: 0.3s;\r\n}\r\n\r\n#about .about-col i {\r\n   font-size: 24px;\r\n   line-height: 1.5;\r\n   color: #fff;\r\n   transition: 0.3s;\r\n}\r\n\r\n#about .about-col:hover .icon {\r\n   background-color: #fff;\r\n}\r\n\r\n#about .about-col:hover i {\r\n   color: #18d26e;\r\n}\r\n\r\n#about .about-col h2 {\r\n   color: #000;\r\n   text-align: center;\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   padding: 0;\r\n   /*margin: 40px 0 12px 0;*/\r\n}\r\n\r\n#about .about-col h2 a {\r\n   color: #000;\r\n}\r\n\r\n#about .about-col h2 a:hover { \r\n   color: #18d26e;\r\n}\r\n\r\n#about .about-col p {\r\n   font-size: 14px;\r\n   line-height: 24px;\r\n   color: #333;\r\n   margin-bottom: 0;\r\n   padding: 0 20px 20px 20px;\r\n   text-align: justify;\r\n}\r\n.btn-sm-default-web {\r\n   background: #0c2b4b;\r\n   display: inline-block;\r\n   text-transform: uppercase;\r\n   padding: 5px 30px;\r\n   color: #ffffff;\r\n   letter-spacing: 1px;\r\n}\r\n#about .about-col h2 a{\r\n   text-decoration: none;\r\n}\r\n#about .btn-sm-default-web{\r\n   background-color: #04994a;\r\n   color: #fff;\r\n   text-decoration: none;\r\n   padding:10px 30px;\r\n   border-radius: 5px;\r\n}",
          "",
        ]);
        const p = m;
      },
      6379: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          '.row>* {\r\n    /* width: auto !important; */\r\n}\r\n\r\n.nav {\r\n    display: block !important;\r\n}\r\n\r\n.nav>li>a {\r\n    color: #a7b1c2;\r\n    font-weight: 600;\r\n    padding: 14px 20px 14px 25px;\r\n    display: block;\r\n}\r\n\r\n.nav.metismenu>li {\r\n    display: block;\r\n    /* width: 100%; */\r\n    position: relative;\r\n}\r\n\r\n\r\n.nav>li.active>a {\r\n    color: #ffffff;\r\n}\r\n\r\n.navbar-default .nav>li>a:hover,\r\n.navbar-default .nav>li>a:focus {\r\n    background-color: #293846;\r\n    color: white;\r\n}\r\n\r\n.nav .open>a,\r\n.nav .open>a:hover,\r\n.nav .open>a:focus {\r\n    background: #fff;\r\n}\r\n\r\n.nav>li>a i {\r\n    margin-right: 6px;\r\n}\r\n\r\n.navbar {\r\n    border: 0;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: #2b322c;\r\n    color: white;\r\n    border-color: #2f4050;\r\n}\r\n\r\n.navbar-top-links li {\r\n    display: inline-block;\r\n    align-self: center;\r\n}\r\n\r\n.body-small .navbar-top-links li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.navbar-top-links li a {\r\n    padding: 20px 10px;\r\n    min-height: 50px;\r\n}\r\n\r\n.dropdown-menu {\r\n    border: medium none;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 3px rgba(86, 96, 117, 0.7);\r\n    display: none;\r\n    float: left;\r\n    font-size: 12px;\r\n    left: 0;\r\n    list-style: none outside none;\r\n    padding: 0;\r\n    position: absolute;\r\n    text-shadow: none;\r\n    top: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    border-radius: 3px;\r\n    color: inherit;\r\n    line-height: 25px;\r\n    margin: 4px;\r\n    text-align: left;\r\n    font-weight: normal;\r\n    display: block;\r\n    padding: 3px 20px;\r\n}\r\n\r\n.dropdown-menu>li>a:focus,\r\n.dropdown-menu>li>a:hover {\r\n    color: #262626;\r\n    text-decoration: none;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.dropdown-menu>.active>a,\r\n.dropdown-menu>.active>a:focus,\r\n.dropdown-menu>.active>a:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #1ab394;\r\n    outline: 0;\r\n}\r\n\r\n.dropdown-menu>li>a.font-bold {\r\n    font-weight: 600;\r\n}\r\n\r\n.navbar-top-links .dropdown-menu li {\r\n    display: block;\r\n}\r\n\r\n.navbar-top-links .dropdown-menu li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.navbar-top-links .dropdown-menu li a {\r\n    padding: 3px 20px;\r\n    min-height: 0;\r\n}\r\n\r\n.navbar-top-links .dropdown-menu li a div {\r\n    white-space: normal;\r\n}\r\n\r\n.navbar-top-links .dropdown-messages,\r\n.navbar-top-links .dropdown-tasks,\r\n.navbar-top-links .dropdown-alerts {\r\n    width: 310px;\r\n    min-width: 0;\r\n}\r\n\r\n.navbar-top-links .dropdown-messages {\r\n    margin-left: 5px;\r\n}\r\n\r\n.navbar-top-links .dropdown-tasks {\r\n    margin-left: -59px;\r\n}\r\n\r\n.navbar-top-links .dropdown-alerts {\r\n    margin-left: -123px;\r\n}\r\n\r\n.navbar-top-links .dropdown-user {\r\n    right: 0;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-messages,\r\n.dropdown-alerts {\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n\r\n.dropdown-messages li a,\r\n.dropdown-alerts li a {\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown-messages li em,\r\n.dropdown-alerts li em {\r\n    font-size: 10px;\r\n}\r\n\r\n.nav.navbar-top-links .dropdown-alerts a {\r\n    font-size: 12px;\r\n}\r\n\r\n.nav-header {\r\n    padding: 33px 25px;\r\n    background-color: #2f4050;\r\n    /* background-image: url("patterns/header-profile.png"); */\r\n}\r\n\r\n.caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: 2px;\r\n    vertical-align: middle;\r\n    border-top: 4px dashed;\r\n    border-right: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n}\r\n\r\n.profile-element .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n.pace-done .nav-header {\r\n    transition: all 0.4s;\r\n}\r\n\r\nul.nav-second-level {\r\n    background: #293846;\r\n}\r\n\r\n.nav>li.active {\r\n    border-left: 4px solid #19aa8d;\r\n    background: #293846;\r\n}\r\n\r\n.nav.nav-second-level>li.active {\r\n    border: none;\r\n}\r\n\r\n.nav.nav-second-level.collapse[style] {\r\n    height: auto !important;\r\n}\r\n\r\n.nav-header a {\r\n    color: #DFE4ED;\r\n}\r\n\r\n.nav-header .text-muted {\r\n    color: #8095a8 !important;\r\n}\r\n\r\n.minimalize-styl-2 {\r\n    padding: 4px 12px;\r\n    margin: 14px 5px 5px 20px;\r\n    font-size: 14px;\r\n    float: left;\r\n}\r\n\r\n.navbar-form-custom {\r\n    float: left;\r\n    height: 50px;\r\n    padding: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n\r\n.navbar-form-custom .form-group {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.nav.navbar-top-links a {\r\n    font-size: 14px;\r\n}\r\n\r\n.navbar-form-custom .form-control {\r\n    background: none repeat scroll 0 0 rgba(0, 0, 0, 0);\r\n    border: medium none;\r\n    font-size: 14px;\r\n    height: 60px;\r\n    margin: 0;\r\n    z-index: 2000;\r\n}\r\n\r\n.nav.navbar-top-links .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n.navbar.navbar-static-top {\r\n    padding: 0;\r\n    width: 100%;\r\n    align-items: inherit;\r\n}\r\n\r\n.navbar-static-top .dropdown-menu {\r\n    right: 0;\r\n    left: auto;\r\n}\r\n\r\n.count-info .label {\r\n    line-height: 12px;\r\n    padding: 2px 5px;\r\n    position: absolute;\r\n    right: 6px;\r\n    top: 12px;\r\n}\r\n\r\n.arrow {\r\n    float: right;\r\n}\r\n\r\n.fa.arrow:before {\r\n    content: "\\f104";\r\n}\r\n\r\n.active>a>.fa.arrow:before {\r\n    content: "\\f107";\r\n}\r\n\r\n.nav-second-level li,\r\n.nav-third-level li {\r\n    border-bottom: none !important;\r\n}\r\n\r\n.nav.nav-third-level>li.active {\r\n    border: none;\r\n}\r\n\r\n.nav-second-level li a {\r\n    padding: 7px 10px 7px 10px;\r\n    padding-left: 52px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar .nav-second-level.collapsing li a,\r\n.nav-second-level.collapsing li a {\r\n    min-width: 220px;\r\n}\r\n\r\n.body-small .nav-second-level.collapsing li a,\r\n.mini-navbar .nav-second-level.collapsing li a {\r\n    min-width: 140px;\r\n}\r\n\r\n.nav-third-level li a,\r\n.fixed-sidebar.mini-navbar .nav-second-level li .nav-third-level li a {\r\n    padding-left: 62px;\r\n}\r\n\r\n.nav-second-level li:last-child {\r\n    padding-bottom: 10px;\r\n}\r\n\r\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav li:hover>.nav-second-level,\r\n.mini-navbar .nav li:focus>.nav-second-level {\r\n    display: block;\r\n    border-radius: 0 2px 2px 0;\r\n    min-width: 160px;\r\n    height: auto;\r\n}\r\n\r\nbody.mini-navbar .navbar-default .nav>li>.nav-second-level li a {\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.fixed-nav .slimScrollDiv #side-menu {\r\n    padding-bottom: 60px;\r\n}\r\n\r\n.mini-navbar .nav-second-level li a {\r\n    padding: 10px 10px 10px 15px;\r\n}\r\n\r\n.mini-navbar .nav .nav-second-level {\r\n    position: absolute;\r\n    left: 70px;\r\n    top: 0;\r\n    background-color: #2f4050;\r\n    padding: 10px 10px 10px 10px;\r\n    font-size: 12px;\r\n}\r\n\r\n.canvas-menu.mini-navbar .nav-second-level {\r\n    background: #293846;\r\n}\r\n\r\n.mini-navbar li.active .nav-second-level {\r\n    left: 65px;\r\n}\r\n\r\n.navbar-default .special_link a {\r\n    background: #1ab394;\r\n    color: white;\r\n}\r\n\r\n.navbar-default .special_link a:hover {\r\n    background: #17987e !important;\r\n    color: white;\r\n}\r\n\r\n.navbar-default .special_link a span.label {\r\n    background: #fff;\r\n    color: #1ab394;\r\n}\r\n\r\n.navbar-default .landing_link a {\r\n    background: #1cc09f;\r\n    color: white;\r\n}\r\n\r\n.navbar-default .landing_link a:hover {\r\n    background: #1ab394 !important;\r\n    color: white;\r\n}\r\n\r\n.navbar-default .landing_link a span.label {\r\n    background: #fff;\r\n    color: #1cc09f;\r\n}\r\n\r\n.logo-element {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: white;\r\n    display: none;\r\n    padding: 18px 0;\r\n}\r\n\r\n.navbar-static-side {\r\n    transition: width 0s;\r\n}\r\n\r\n.footer {\r\n    transition: margin 0s;\r\n}\r\n\r\n.pace-done .navbar-static-side,\r\n.pace-done .nav-header,\r\n.pace-done li.active,\r\n.pace-done #page-wrapper,\r\n.pace-done .footer {\r\n    -webkit-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n}\r\n\r\n.navbar-fixed-top {\r\n    background: #fff;\r\n    transition-duration: 0.4s;\r\n    border-bottom: 1px solid #e7eaec !important;\r\n    z-index: 2030;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    padding: 0;\r\n    top: 0;\r\n}\r\n\r\n.navbar-fixed-top .navbar-form-custom .form-control {\r\n    height: 50px;\r\n}\r\n\r\n.navbar-fixed-top,\r\n.navbar-static-top {\r\n    background: #f3f3f4;\r\n}\r\n\r\n.fixed-nav #wrapper {\r\n    margin-top: 0;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:hover,\r\n.nav-tabs>li.active>a:focus {\r\n    -moz-border-bottom-colors: none;\r\n    -moz-border-left-colors: none;\r\n    -moz-border-right-colors: none;\r\n    -moz-border-top-colors: none;\r\n    background: none;\r\n    border-color: #dddddd #dddddd rgba(0, 0, 0, 0);\r\n    border-bottom: #f3f3f4;\r\n    border-image: none;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: #555555;\r\n    cursor: default;\r\n}\r\n\r\n.nav.nav-tabs li {\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\nbody.fixed-nav #wrapper .navbar-static-side,\r\nbody.fixed-nav #wrapper #page-wrapper {\r\n    margin-top: 60px;\r\n}\r\n\r\nbody.top-navigation.fixed-nav #wrapper #page-wrapper {\r\n    margin-top: 0;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic .navbar-fixed-top {\r\n    left: 220px;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic.mini-navbar .navbar-fixed-top {\r\n    left: 70px;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic.fixed-sidebar.mini-navbar .navbar-fixed-top {\r\n    left: 0;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic #wrapper .navbar-static-side {\r\n    margin-top: 0;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic.body-small .navbar-fixed-top {\r\n    left: 0;\r\n}\r\n\r\nbody.fixed-nav.fixed-nav-basic.fixed-sidebar.mini-navbar.body-small .navbar-fixed-top {\r\n    left: 220px;\r\n}\r\n\r\n.fixed-nav .minimalize-styl-2 {\r\n    margin: 10px 5px 5px 15px;\r\n}\r\n\r\n.body-small .navbar-fixed-top {\r\n    margin-left: 0;\r\n}\r\n\r\nbody.mini-navbar .navbar-static-side {\r\n    width: 70px;\r\n}\r\n\r\nbody.mini-navbar .profile-element,\r\nbody.mini-navbar .nav-label,\r\nbody.mini-navbar .navbar-default .nav li a span {\r\n    display: none;\r\n}\r\n\r\nbody.canvas-menu .profile-element {\r\n    display: block;\r\n}\r\n\r\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav-second-level {\r\n    display: none;\r\n}\r\n\r\nbody.mini-navbar .navbar-default .nav>li>a {\r\n    font-size: 16px;\r\n}\r\n\r\nbody.mini-navbar .logo-element {\r\n    display: block;\r\n}\r\n\r\nbody.canvas-menu .logo-element {\r\n    display: none;\r\n}\r\n\r\nbody.mini-navbar .nav-header {\r\n    padding: 0;\r\n    background-color: #1ab394;\r\n}\r\n\r\nbody.canvas-menu .nav-header {\r\n    padding: 33px 25px;\r\n}\r\n\r\nbody.canvas-menu .sidebar-collapse li {\r\n    width: 100%;\r\n}\r\n\r\nbody.mini-navbar #page-wrapper {\r\n    width: calc(100% - 70px);\r\n}\r\n\r\nbody.canvas-menu.mini-navbar #page-wrapper,\r\nbody.canvas-menu.mini-navbar .footer {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\nbody.fixed-sidebar .navbar-static-side,\r\nbody.canvas-menu .navbar-static-side {\r\n    width: 220px;\r\n    z-index: 2001;\r\n    height: 100vh;\r\n    position: fixed;\r\n}\r\n\r\nbody.fixed-sidebar.mini-navbar .navbar-static-side {\r\n    width: 0;\r\n}\r\n\r\nbody.fixed-sidebar #page-wrapper {\r\n    margin: 0 0 0 220px;\r\n}\r\n\r\nbody.fixed-sidebar.body-small #page-wrapper {\r\n    margin: 0;\r\n}\r\n\r\nbody.fixed-sidebar.mini-navbar #page-wrapper {\r\n    margin: 0 0 0 0;\r\n    width: 100%;\r\n}\r\n\r\nbody.body-small.fixed-sidebar.mini-navbar #page-wrapper {\r\n    margin: 0 0 0 220px;\r\n}\r\n\r\nbody.body-small.fixed-sidebar.mini-navbar .navbar-static-side {\r\n    width: 220px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar .nav li:focus>.nav-second-level,\r\n.canvas-menu.mini-navbar .nav li:focus>.nav-second-level {\r\n    display: block;\r\n    height: auto;\r\n}\r\n\r\nbody.fixed-sidebar.mini-navbar .navbar-default .nav>li>.nav-second-level li a {\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n}\r\n\r\nbody.canvas-menu.mini-navbar .navbar-default .nav>li>.nav-second-level li a {\r\n    font-size: 13px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar .nav-second-level li a,\r\n.canvas-menu.mini-navbar .nav-second-level li a {\r\n    padding: 10px 10px 10px 15px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar .nav-second-level,\r\n.canvas-menu.mini-navbar .nav-second-level {\r\n    position: relative;\r\n    padding: 0;\r\n    font-size: 13px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar li.active .nav-second-level,\r\n.canvas-menu.mini-navbar li.active .nav-second-level {\r\n    left: 0;\r\n}\r\n\r\nbody.fixed-sidebar.mini-navbar .navbar-default .nav>li>a,\r\nbody.canvas-menu.mini-navbar .navbar-default .nav>li>a {\r\n    font-size: 13px;\r\n}\r\n\r\nbody.fixed-sidebar.mini-navbar .nav-label,\r\nbody.fixed-sidebar.mini-navbar .navbar-default .nav li a span,\r\nbody.canvas-menu.mini-navbar .nav-label,\r\nbody.canvas-menu.mini-navbar .navbar-default .nav li a span {\r\n    display: inline;\r\n}\r\n\r\nbody.canvas-menu.mini-navbar .navbar-default .nav li .profile-element a span {\r\n    display: block;\r\n}\r\n\r\n.canvas-menu.mini-navbar .nav-second-level li a,\r\n.fixed-sidebar.mini-navbar .nav-second-level li a {\r\n    padding: 7px 10px 7px 52px;\r\n}\r\n\r\n.fixed-sidebar.mini-navbar .nav-second-level,\r\n.canvas-menu.mini-navbar .nav-second-level {\r\n    left: 0;\r\n}\r\n\r\nbody.canvas-menu nav.navbar-static-side {\r\n    z-index: 2001;\r\n    background: #2f4050;\r\n    height: 100%;\r\n    position: fixed;\r\n    display: none;\r\n}\r\n\r\nbody.canvas-menu.mini-navbar nav.navbar-static-side {\r\n    display: block;\r\n    width: 220px;\r\n}\r\n\r\n.top-navigation #page-wrapper {\r\n    width: 100%;\r\n}\r\n\r\n.top-navigation .navbar-nav .dropdown-menu>.active>a {\r\n    background: white;\r\n    color: #1ab394;\r\n    font-weight: bold;\r\n}\r\n\r\n.white-bg .navbar-fixed-top,\r\n.white-bg .navbar-static-top {\r\n    background: #fff;\r\n}\r\n\r\n.top-navigation .navbar {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.top-navigation .nav>li>a {\r\n    padding: 15px 20px;\r\n    color: #676a6c;\r\n}\r\n\r\n.top-navigation .nav>li a:hover,\r\n.top-navigation .nav>li a:focus {\r\n    background: #fff;\r\n    color: #1ab394;\r\n}\r\n\r\n.top-navigation .navbar .nav>li.active {\r\n    background: #fff;\r\n    border: none;\r\n}\r\n\r\n.top-navigation .nav>li.active>a {\r\n    color: #1ab394;\r\n}\r\n\r\n.top-navigation .navbar-right {\r\n    margin-right: 10px;\r\n}\r\n\r\n.top-navigation .navbar-nav .dropdown-menu {\r\n    box-shadow: none;\r\n    border: 1px solid #e7eaec;\r\n}\r\n\r\n.top-navigation .dropdown-menu>li>a {\r\n    margin: 0;\r\n    padding: 7px 20px;\r\n}\r\n\r\n.navbar .dropdown-menu {\r\n    margin-top: 0;\r\n}\r\n\r\n.top-navigation .navbar-brand {\r\n    background: #1ab394;\r\n    color: #fff;\r\n    padding: 15px 25px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n}\r\n\r\n.top-navigation .navbar-top-links li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.top-navigation.mini-navbar #page-wrapper,\r\n.top-navigation.body-small.fixed-sidebar.mini-navbar #page-wrapper,\r\n.mini-navbar .top-navigation #page-wrapper,\r\n.body-small.fixed-sidebar.mini-navbar .top-navigation #page-wrapper,\r\n.canvas-menu #page-wrapper {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n.top-navigation.fixed-nav #wrapper,\r\n.fixed-nav #wrapper.top-navigation {\r\n    margin-top: 50px;\r\n}\r\n\r\n.top-navigation .footer.fixed {\r\n    margin-left: 0 !important;\r\n}\r\n\r\n.top-navigation .wrapper.wrapper-content {\r\n    padding: 40px;\r\n}\r\n\r\n.top-navigation.body-small .wrapper.wrapper-content,\r\n.body-small .top-navigation .wrapper.wrapper-content {\r\n    padding: 40px 0 40px 0;\r\n}\r\n\r\n.navbar-toggler {\r\n    background-color: #1ab394;\r\n    color: #fff;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    margin: 8px;\r\n}\r\n\r\n.top-navigation .navbar-nav .open .dropdown-menu>li>a,\r\n.top-navigation .navbar-nav .open .dropdown-menu .dropdown-header {\r\n    padding: 10px 15px 10px 20px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .top-navigation .navbar-header {\r\n        display: block;\r\n        float: none;\r\n    }\r\n}\r\n\r\n.menu-visible-lg,\r\n.menu-visible-md {\r\n    display: none !important;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .menu-visible-lg {\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .menu-visible-md {\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .menu-visible-md {\r\n        display: block !important;\r\n    }\r\n\r\n    .menu-visible-lg {\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n\r\n\r\n.sidebar-panel {\r\n    width: 220px;\r\n    background: #28af45;\r\n    padding: 10px 20px;\r\n    position: absolute;\r\n    right: 0;\r\n    height: calc(100% - 62px);\r\n}\r\n\r\n.sidebar-panel .feed-element img.rounded-circle {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.sidebar-panel .feed-element,\r\n.media-body,\r\n.sidebar-panel p {\r\n    font-size: 12px;\r\n}\r\n\r\n.sidebar-panel .feed-element {\r\n    margin-top: 20px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.sidebar-panel .list-group {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sidebar-panel .list-group .list-group-item {\r\n    padding: 5px 0;\r\n    font-size: 12px;\r\n    border: 0;\r\n}\r\n\r\n.sidebar-content .wrapper,\r\n.wrapper.sidebar-content {\r\n    padding-right: 230px !important;\r\n}\r\n\r\n.body-small .sidebar-content .wrapper,\r\n.body-small .wrapper.sidebar-content {\r\n    padding-right: 20px !important;\r\n}\r\n\r\n#right-sidebar {\r\n    background-color: #fff;\r\n    border-left: 1px solid #e7eaec;\r\n    border-top: 1px solid #e7eaec;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 60px;\r\n    width: 260px !important;\r\n    z-index: 1009;\r\n    bottom: 0;\r\n    right: -260px;\r\n}\r\n\r\n#right-sidebar.sidebar-open {\r\n    right: 0;\r\n}\r\n\r\n#right-sidebar.sidebar-open.sidebar-top {\r\n    top: 0;\r\n    border-top: none;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs {\r\n    border: none;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs.navs-4 li {\r\n    width: 25%;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs.navs-3 li {\r\n    width: 33.3333%;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs.navs-2 li {\r\n    width: 50%;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs li {\r\n    border: none;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs li a {\r\n    border: none;\r\n    padding: 12px 10px;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    background: #2f4050;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-right: 1px solid #334556;\r\n}\r\n\r\n.sidebar-container ul.nav-tabs li.active a {\r\n    border: none;\r\n    background: #f9f9f9;\r\n    color: #676a6c;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-container .nav-tabs>li.active>a:hover,\r\n.sidebar-container .nav-tabs>li.active>a:focus {\r\n    border: none;\r\n}\r\n\r\n.sidebar-container ul.sidebar-list {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-container ul.sidebar-list li {\r\n    border-bottom: 1px solid #e7eaec;\r\n    padding: 15px 20px;\r\n    list-style: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.sidebar-container .sidebar-message:nth-child(2n+2) {\r\n    background: #f9f9f9;\r\n}\r\n\r\n.sidebar-container ul.sidebar-list li a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.sidebar-container .sidebar-content {\r\n    padding: 15px 20px;\r\n    font-size: 12px;\r\n}\r\n\r\n.sidebar-container .sidebar-title {\r\n    background: #f9f9f9;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #e7eaec;\r\n}\r\n\r\n.sidebar-container .sidebar-title h3 {\r\n    margin-bottom: 3px;\r\n    padding-left: 2px;\r\n}\r\n\r\n.sidebar-container .tab-content h4 {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.sidebar-container .sidebar-message>a>.float-left {\r\n    margin-right: 10px;\r\n}\r\n\r\n.sidebar-container .sidebar-message>a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.sidebar-container .sidebar-message {\r\n    padding: 15px 20px;\r\n}\r\n\r\n.sidebar-container .sidebar-message .media-body {\r\n    display: block;\r\n    width: auto;\r\n}\r\n\r\n.sidebar-container .sidebar-message .message-avatar {\r\n    height: 38px;\r\n    width: 38px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.sidebar-container .setings-item {\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid #e7eaec;\r\n}\r\n\r\n\r\n/* WRAPPERS */\r\n#wrapper {\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    display: -ms-flex;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    height: 700px;\r\n}\r\n\r\n.wrapper {\r\n    padding: 0 20px;\r\n}\r\n\r\n.wrapper-content {\r\n    padding: 20px 10px 40px;\r\n}\r\n\r\n#page-wrapper {\r\n    padding: 0 15px;\r\n    position: relative !important;\r\n    flex-shrink: 1;\r\n    width: calc(100% - 220px);\r\n    background-color: #f4f4f7;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #page-wrapper {\r\n        position: inherit;\r\n    }\r\n}\r\n\r\n.title-action {\r\n    text-align: right;\r\n    padding-top: 30px;\r\n}\r\n\r\n.ibox-content h1,\r\n.ibox-content h2,\r\n.ibox-content h3,\r\n.ibox-content h4,\r\n.ibox-content h5,\r\n.ibox-title h1,\r\n.ibox-title h2,\r\n.ibox-title h3,\r\n.ibox-title h4,\r\n.ibox-title h5 {\r\n    margin-top: 5px;\r\n}\r\n\r\nul.unstyled,\r\nol.unstyled {\r\n    list-style: none outside none;\r\n    margin-left: 0;\r\n}\r\n\r\n.big-icon {\r\n    font-size: 160px !important;\r\n    color: #e5e6e7;\r\n}\r\n\r\n.metismenu .plus-minus,\r\n.metismenu .plus-times {\r\n    float: right;\r\n}\r\n\r\n.metismenu .arrow {\r\n    float: right;\r\n    line-height: 1.42857;\r\n}\r\n\r\n.metismenu .glyphicon.arrow:before {\r\n    content: "\\e079";\r\n}\r\n\r\n.metismenu .active>a>.glyphicon.arrow:before {\r\n    content: "\\e114";\r\n}\r\n\r\n.metismenu .fa.arrow:before {\r\n    content: "\\f104";\r\n}\r\n\r\n.metismenu .active>a>.fa.arrow:before {\r\n    content: "\\f107";\r\n}\r\n\r\n.metismenu .ion.arrow:before {\r\n    content: "\\f3d2";\r\n}\r\n\r\n.metismenu .active>a>.ion.arrow:before {\r\n    content: "\\f3d0";\r\n}\r\n\r\n.metismenu .fa.plus-minus:before,\r\n.metismenu .fa.plus-times:before {\r\n    content: "\\f067";\r\n}\r\n\r\n.metismenu .active>a>.fa.plus-times {\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.metismenu .active>a>.fa.plus-minus:before {\r\n    content: "\\f068";\r\n}\r\n\r\n.metismenu .collapse {\r\n    display: none;\r\n}\r\n\r\n.metismenu .collapse.in {\r\n    display: block;\r\n}\r\n\r\n.metismenu .collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    -webkit-transition-timing-function: ease;\r\n    transition-timing-function: ease;\r\n    -webkit-transition-duration: .35s;\r\n    transition-duration: .35s;\r\n    -webkit-transition-property: height, visibility;\r\n    transition-property: height, visibility;\r\n}\r\n\r\n.mini-navbar .metismenu .collapse {\r\n    opacity: 0;\r\n}\r\n\r\n.mini-navbar .metismenu .collapse.in {\r\n    opacity: 1;\r\n}\r\n\r\n.mini-navbar .metismenu .collapse a {\r\n    display: none;\r\n}\r\n\r\n.mini-navbar .metismenu .collapse.in a {\r\n    display: block;\r\n}\r\n\r\n/*\r\n *  Usage:\r\n *\r\n *    <div class="sk-spinner sk-spinner-rotating-plane"></div>\r\n *\r\n */\r\n.sk-spinner-rotating-plane.sk-spinner {\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #1ab394;\r\n    margin: 0 auto;\r\n    -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\r\n    animation: sk-rotatePlane 1.2s infinite ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes sk-rotatePlane {\r\n    0% {\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\r\n\r\n@keyframes sk-rotatePlane {\r\n    0% {\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}',
          "",
        ]);
        const i = o;
      },
      3756: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".dashboard {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    /* margin-right: 1em; */\r\n}\r\n\r\n.first-top {\r\n    background-color: #321fdc;\r\n    display: block;\r\n    color: #fff;\r\n    padding: .2em;\r\n    width: 270px;\r\n    margin-top: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.second-top {\r\n    background-color: #3199ff;\r\n    display: block;\r\n    color: #fff;\r\n    padding: .2em;\r\n    width: 270px;\r\n    margin-top: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.third-top {\r\n    background-color: #f9b113;\r\n    display: block;\r\n    color: #fff;\r\n    padding: .2em;\r\n    width: 270px;\r\n    margin-top: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.fourth-top {\r\n    background-color: #e55251;\r\n    display: block;\r\n    color: #fff;\r\n    padding: .2em;\r\n    width: 270px;\r\n    margin-top: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.dashboard-top {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.dashboard-top i {\r\n    color: #fff;\r\n    font-size: 40px;\r\n}\r\n\r\n.dashboard-top h3 {\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n\r\n.first-top h1 {\r\n    font-weight: bold;\r\n    padding-left: 1em;\r\n}\r\n\r\n.second-top h1 {\r\n    font-weight: bold;\r\n    padding-left: 1em;\r\n}\r\n\r\n.third-top h1 {\r\n    font-weight: bold;\r\n    padding-left: 1em;\r\n}\r\n\r\n.fourth-top h1 {\r\n    font-weight: bold;\r\n    padding-left: 1em;\r\n}",
          "",
        ]);
        const i = o;
      },
      9905: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".form-item {\r\n    margin-top: .5em;\r\n    margin-bottom: .5em;\r\n}\r\n\r\n.add-mealplan-heading {\r\n    font-weight: bold;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.add-mealplan-button {\r\n    margin-top: 1em;\r\n}\r\n\r\n.form-item label {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.title_input {\r\n    margin-left: 10em;\r\n}\r\n\r\n.short_description_input {\r\n    margin-left: 2.5em;\r\n}\r\n\r\n.description_input {\r\n    margin-left: 6em;\r\n}\r\n\r\n.price_input {\r\n    margin-left: 9.5em;\r\n}",
          "",
        ]);
        const i = o;
      },
      3067: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".mealplan-img img {\r\n    width: 150px;\r\n    height: 110px;\r\n}",
          "",
        ]);
        const i = o;
      },
      9331: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".admin-order h1 {\r\n    text-align: center;\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}",
          "",
        ]);
        const i = o;
      },
      8428: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          '\r\n.title{\r\n    margin-bottom: 5vh;\r\n}\r\n.cart{\r\n    margin: auto;\r\n    max-width: 950px;\r\n    /* width: 90%; */\r\n    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 1rem;\r\n    border: transparent;\r\n}\r\n.cart-page{\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n.cart .cart{\r\n    background-color: #fff;\r\n    padding: 4vh 5vh;\r\n    border-bottom-left-radius: 1rem;\r\n    border-top-left-radius: 1rem;\r\n}\r\n.cart .summary{\r\n    background-color:#28a745;\r\n    border-top-right-radius: 1rem;\r\n    border-bottom-right-radius: 1rem;\r\n    padding: 4vh;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n.cart .summary .col-2{\r\n    padding: 0;\r\n}\r\n.cart .summary .col-10\r\n{\r\n    padding: 0;\r\n}\r\n.cart .row{\r\n    margin: 0;\r\n}\r\n.cart .title b{\r\n    font-size: 1.5rem;\r\n}\r\n.cart .main{\r\n    margin: 0;\r\n    padding: 2vh 0;\r\n    width: 100%;\r\n}\r\n.cart .col-2, .cart .col{\r\n    padding: 0 1vh;\r\n}\r\n.cart a{\r\n    padding: 0 1vh;\r\n}\r\n.cart .close{\r\n    margin-left: auto;\r\n    font-size: 0.7rem;\r\n}\r\n.cart img{\r\n    width: 3.5rem;\r\n}\r\n.cart .back-to-shop{\r\n    margin-top: 4.5rem;\r\n}\r\n.cart h5{\r\n    margin-top: 4vh;\r\n}\r\n.cart hr{\r\n    margin-top: 1.25rem;\r\n}\r\n.cart form{\r\n    padding: 2vh 0;\r\n}\r\n.cart select{\r\n    border: 1px solid rgba(0, 0, 0, 0.137);\r\n    padding: 1.5vh 1vh;\r\n    margin-bottom: 4vh;\r\n    outline: none;\r\n    width: 100%;\r\n    background-color: rgb(247, 247, 247);\r\n}\r\n.cart input{\r\n    border: 1px solid rgba(0, 0, 0, 0.137);\r\n    padding: 1vh;\r\n    margin-bottom: 4vh;\r\n    outline: none;\r\n    width: 100%;\r\n    background-color: rgb(247, 247, 247);\r\n}\r\n.cart input:focus::-webkit-input-placeholder\r\n{\r\n      color:transparent;\r\n}\r\n.cart .btn{\r\n    background-color: #000;\r\n    border-color: #000;\r\n    color: white;\r\n    width: 100%;\r\n    font-size: 0.7rem;\r\n    margin-top: 4vh;\r\n    padding: 1vh;\r\n    border-radius: 0;\r\n}\r\n.cart .btn:focus{\r\n    box-shadow: none;\r\n    outline: none;\r\n    box-shadow: none;\r\n    color: white;\r\n    -webkit-box-shadow: none;\r\n    -webkit-user-select: none;\r\n    transition: none; \r\n}\r\n.cart .btn:hover{\r\n    color: white;\r\n}\r\n.cart a{\r\n    color: black; \r\n}\r\n.cart a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n.cart #code{\r\n    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");\r\n    background-repeat: no-repeat;\r\n    background-position-x: 95%;\r\n    background-position-y: center;\r\n}\r\n.cart .quantity{\r\n    border: none;\r\n    padding: 5px;\r\n    background:none;\r\n    color: red;\r\n    text-transform: none;\r\n}\r\n.cart .quantity:hover{\r\n    color:#000;\r\n}\r\n.cart .border{\r\n    padding: 5px 10px;\r\n}\r\n',
          "",
        ]);
        const i = o;
      },
      476: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          ".checkout_head {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.checkout_form {\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    padding: 2em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.form-group {\r\n    margin: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.float-right {\r\n    color: black;\r\n}\r\n\r\n.control-label {\r\n    font-weight: bold;\r\n}",
          "",
        ]);
        const i = o;
      },
      8756: (e, n, r) => {
        r.d(n, { Z: () => g });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l),
          i = r(1667),
          s = r.n(i),
          c = new URL(r(6946), r.b),
          m = new URL(r(1825), r.b),
          d = o()(a());
        d.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&family=Montserrat:ital,wght@1,700&family=Poppins:wght@300&display=swap);",
        ]);
        var p = s()(c),
          u = s()(m);
        d.push([
          e.id,
          '* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: "Titillium Web", sans-serif;\r\n}\r\n.nav-link {\r\n\twidth:100px !important;\r\n\tmargin:0px;\r\n}\r\n:root {\r\n\t/* --mainColor: #29335c; */\r\n\t--mainColor: #ffffff;\r\n\t/* --mainColor: #28a745; */\r\n\t/* --mainColor: #218f3a; */\r\n\t--mainColorLight: #5767aa;\r\n\t--secondaryColor: #28a745;\r\n\t/* --textColor: #eee; */\r\n\t--textColor: black;\r\n\t/* another color : #9f2929; */\r\n\t--footerBackground: #28a745;\r\n}\r\n\r\n.container {\r\n\twidth: 85%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\nheader {\r\n\tbackground-color: var(--mainColor);\r\n}\r\n\r\n.topbar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\theight: 80px;\r\n\tpadding: 0 2rem;\r\n\tcolor: var(--textColor);\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\nnav a {\r\n\tmargin: 0 .7rem;\r\n\tcolor: var(--textColor);\r\n\ttext-decoration: none;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\nnav a:hover {\r\n\tcolor: var(--secondaryColor);\r\n}\r\n\r\nheader .nav-btn {\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcolor: var(--textColor);\r\n\t/*visibility: hidden;*/\r\n\tdisplay: none;\r\n\topacity: 0;\r\n\tfont-size: 1.8rem;\r\n\ttext-align: right;\r\n}\r\n\r\nheader div,\r\nnav {\r\n\t/* display: flex; */\r\n\talign-items: center;\r\n}\r\n\r\n.hero {\r\n\tmin-height: 500px;\r\n\tbackground-image: url(' +
            p +
            ");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: cover;\r\n\tfont-family: 'Montserrat', sans-serif !important;\r\n\t/*font-family: 'Poppins', sans-serif;*/\r\n\tcolor: #fff;\r\n}\r\n.show-button:hover{\r\n\tcursor: pointer;\r\n}\r\n.hero .text-block {\r\n\tpadding: 80px 0;\r\n}\r\n\r\n.newsletter-h1 {\r\n\tpadding: 0px;\r\n}\r\n\r\n.hero p {\r\n\ttext-transform: uppercase;\r\n\tcolor: #fff;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tletter-spacing: 2px;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.hero h1 {\r\n\tfont-family: 'Montserrat', sans-serif !important;\r\n\tpadding: 0px !important;\r\n\tfont-size: 4.5rem;\r\n\tcolor: #fff;\r\n\ttext-shadow: 2px 2px 5px #444;\r\n}\r\n\r\n.hero h2 {\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: 1.2rem;\r\n\tletter-spacing: 2px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.hero button {\r\n\tpadding: 15px 20px;\r\n\tbackground: var(--mainColor);\r\n\tcolor: var(--textColor);\r\n\tcursor: pointer;\r\n\tmargin-top: 30px;\r\n\tborder-radius: 5px;\r\n\tborder: none;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.hero button:hover {\r\n\tbackground: var(--textColor);\r\n\tcolor: var(--mainColor);\r\n}\r\n\r\nfooter {\r\n\t/* background-color: rgba(178, 34, 34, 0.6); */\r\n\t/* background: var(--mainColor); */\r\n\t/*background-color: #28a745;*/\r\n\tbackground-image: url(" +
            u +
            ");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tfont-size: .80em;\r\n\t/*padding-top: 10px;*/\r\n\tcolor: #ffffff;\r\n}\r\n.footer-wrapper{\r\n\tbackground: rgba(0, 0, 0, 0.8);\r\n}\r\nfooter .container {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.footer {\r\n\t\r\n\tdisplay: flex;\r\n\t/* NEW, Spec - Opera 12.1, Firefox 20+ */\r\n\tdisplay: -webkit-box;\r\n\t/* OLD - iOS 6-, Safari 3.1-6 */\r\n\tdisplay: -moz-box;\r\n\t/* OLD - Firefox 19- (buggy but mostly works) */\r\n\tdisplay: -ms-flexbox;\r\n\t/* TWEENER - IE 10 */\r\n\tdisplay: -webkit-flex;\r\n\t/* NEW - Chrome */\r\n\tflex-wrap: nowrap;\r\n\tflex-direction: row;\r\n\t/* justify-content: space-between; */\r\n\tpadding: 30px 0;\r\n}\r\n\r\nfooter h4 {\r\n\tpadding-bottom: 10px;\r\n\tcolor: var(--footerBackground);\r\n\tfont-weight: bold;\r\n\r\n}\r\n\r\nfooter a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.footer-info {\r\n\tpadding: 10px;\r\n\twidth: 24%;\r\n\t/* border: 1px solid #eee; */\r\n}\r\n\r\nfooter .contact-info{\r\n\tpadding:10px 0;\r\n}\r\n\r\nfooter .contact-info h5{\r\n\tfont-size: 1rem;\r\n\tfont-weight: bold;\r\n}\r\nfooter .quick-links a{\r\n\tletter-spacing: 2px;\r\n}\r\nfooter .quick-links a:hover{\r\n\tcolor: var(--secondaryColor);\r\n}\r\nfooter .footer-info-media li{\r\n\tdisplay: inline-block;\r\n\tmargin: 0 15px 0 0;\r\n}\r\n\r\nfooter .footer-info-media li a{\r\n\tposition: relative;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tline-height: 20px;\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n\tbackground-color: var(--secondaryColor);\r\n\tborder-radius: 50%;\r\n\tdisplay: block;\r\n}\r\nfooter .footer-info-media li a:hover{\r\n\tbackground-color: #fff;\r\n\tcolor: var(--secondaryColor);\r\n}\r\n\r\n\r\n.copyright {\r\n\tbackground: rgba(0,0,0,0.5);\r\n\ttext-align: center;\r\n\tfont-style: italic;\r\n\tpadding: 20px 0;\r\n\tcolor: var(--mainColor);\r\n}\r\n\r\n.copyright .container {\r\n\tmargin: 0 auto;\r\n}\r\n.warning{\r\n\tposition: fixed;\r\n    top: 20%;\r\n    right: 10%;\r\n    z-index: 1;\r\n    background: red;\r\n    padding: 20px;\r\n    color: #fff;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.container {\r\n\t\twidth: 95%;\r\n\t}\r\n\r\n\theader .nav-btn {\r\n\t\t/*visibility: visible;*/\r\n\t\tdisplay: block;\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\theader nav {\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tgap: 1.5rem;\r\n\t\tbackground-color: var(--mainColor);\r\n\t\ttransition: 1s;\r\n\t\ttransform: translateY(-100vh);\r\n\t\tz-index:1;\r\n\t}\r\n\r\n\theader .responsive_nav {\r\n\t\ttransform: none;\r\n\t}\r\n\r\n\tnav .nav-close-btn {\r\n\t\tposition: absolute;\r\n\t\ttop: 2rem;\r\n\t\tright: 2rem;\r\n\t}\r\n\r\n\tnav a {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\r\n\t.footer {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.footer-info {\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 5px;\r\n\t}\r\n}\r\n\r\n.floating-button {\r\n\tposition: fixed;\r\n\tbottom: 2%;\r\n\tright: 1%;\r\n\tz-index: 99999;\r\n\tfont-size: 2rem !important;\r\n\tborder-radius: 50% !important;\r\n\twidth: 65px;\r\n}\r\n\r\nlabel{\r\n    font-family: 'Fira Sans', sans-serif;\r\n}\r\n\r\n@media only screen and (min-width: 800px) {}",
          "",
        ]);
        const g = d;
      },
      1392: (e, n, r) => {
        r.d(n, { Z: () => i });
        var t = r(8081),
          a = r.n(t),
          l = r(3645),
          o = r.n(l)()(a());
        o.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);",
        ]),
          o.push([
            e.id,
            "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 17px;\r\n    font-family: 'Roboto';\r\n}\r\n\r\nbody {\r\n    background: linear-gradient(90deg, #29335c);\r\n}\r\n\r\n.wrapper {\r\n    height: 65vh;\r\n    position: realtive;\r\n}\r\n\r\n\r\n\r\n.fas.fa-envelope {\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    background: #28a745;\r\n    padding: 1rem;\r\n    border-radius: 100%;\r\n    margin: 0 0 1rem 0;\r\n}\r\n\r\n.card-content {\r\n    background-color: #ffffff;\r\n    height: 47vh;\r\n    max-width: 61rem;\r\n    background-color: #fff;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 1rem;\r\n    padding: 4rem .5rem;\r\n    box-shadow: 1px 1px 2rem rgba(0, 0, 0, .3);\r\n    text-align: center;\r\n}\r\n\r\n.card-content h1 {\r\n    text-transform: uppercase;\r\n    margin: 0 0 1rem 0;\r\n}\r\n\r\n.card-content p {\r\n    font-size: .8rem;\r\n    margin: 0 0 2rem 0;\r\n}\r\n\r\ninput {\r\n    padding: .6rem .8rem;\r\n    width: 35%;\r\n    border-radius: 5rem;\r\n    outline: none;\r\n    border: .1rem solid #d1d1d1;\r\n    font-size: .9rem;\r\n    color: black;\r\n}\r\n\r\ninput:first-child {\r\n    margin-right: 1em;\r\n}\r\n\r\n::placeholder {\r\n    color: #d1d1d1;\r\n}\r\n\r\n.subscribe-btn {\r\n    padding: .8rem 2rem;\r\n    border-radius: 5rem;\r\n    background: #28a745;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    margin-top: 1em;\r\n    /* display: block; */\r\n    /* margin-left: 18em; */\r\n    margin-left: 2em;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .card-content {\r\n        height: 65vh;\r\n        max-width: 40rem;\r\n        padding: 4rem .5rem;\r\n    }\r\n\r\n    .wrapper {\r\n        height: 85vh;\r\n    }\r\n\r\n    input {\r\n        width: 100%;\r\n    }\r\n\r\n    button {\r\n        width: 100%;\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    .name {\r\n        display: block;\r\n    }\r\n\r\n    .email {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* .form-input {\r\n    justify-content: space-between;\r\n} */\r\n\r\n/* .newletter {\r\n    background-color: #f3f3f3;\r\n    color: black;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 44px;\r\n}\r\n\r\n.newsletter-card {\r\n    text-align: center;\r\n    border: 2px solid black;\r\n    justify-content: center;\r\n    margin-left: 15em;\r\n    margin-right: 15em;\r\n    margin-top: 3em;\r\n    padding: 2em;\r\n    background-color: white;\r\n}\r\n\r\n.newsletter-detail {\r\n    display: flex;\r\n    text-align: center;\r\n\r\n} */",
            "",
          ]);
        const i = o;
      },
      2204: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      9609: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";
      },
      2469: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      7486: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";
      },
      4144: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";
      },
      6254: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";
      },
      2740: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      3460: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      5647: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";
      },
      1692: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      6770: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";
      },
      8931: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";
      },
      6199: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";
      },
      1217: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      2956: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      5122: (e) => {
        e.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";
      },
      8862: (e, n, r) => {
        e.exports = r.p + "237a94cfb203822857de.jpg";
      },
      6946: (e, n, r) => {
        e.exports = r.p + "b273a6285b8301469cdd.webp";
      },
      1825: (e, n, r) => {
        e.exports = r.p + "ce54254945acf6ab7daf.png";
      },
    },
    a = {};
  function l(e) {
    var n = a[e];
    if (void 0 !== n) return n.exports;
    var r = (a[e] = { id: e, exports: {} });
    return t[e](r, r.exports, l), r.exports;
  }
  (l.m = t),
    (e = []),
    (l.O = (n, r, t, a) => {
      if (!r) {
        var o = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, t, a] = e[m], i = !0, s = 0; s < r.length; s++)
            (!1 & a || o >= a) && Object.keys(l.O).every((e) => l.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((i = !1), a < o && (o = a));
          if (i) {
            e.splice(m--, 1);
            var c = t();
            void 0 !== c && (n = c);
          }
        }
        return n;
      }
      a = a || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
      e[m] = [r, t, a];
    }),
    (l.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return l.d(n, { a: n }), n;
    }),
    (r = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (l.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e;
      if ("object" == typeof e && e) {
        if (4 & t && e.__esModule) return e;
        if (16 & t && "function" == typeof e.then) return e;
      }
      var a = Object.create(null);
      l.r(a);
      var o = {};
      n = n || [null, r({}), r([]), r(r)];
      for (var i = 2 & t && e; "object" == typeof i && !~n.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach((n) => (o[n] = () => e[n]));
      return (o.default = () => e), l.d(a, o), a;
    }),
    (l.d = (e, n) => {
      for (var r in n)
        l.o(n, r) &&
          !l.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (l.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      l.g.importScripts && (e = l.g.location + "");
      var n = l.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (l.p = e);
    })(),
    (() => {
      l.b = document.baseURI || self.location.href;
      var e = { 179: 0 };
      l.O.j = (n) => 0 === e[n];
      var n = (n, r) => {
          var t,
            a,
            [o, i, s] = r,
            c = 0;
          if (o.some((n) => 0 !== e[n])) {
            for (t in i) l.o(i, t) && (l.m[t] = i[t]);
            if (s) var m = s(l);
          }
          for (n && n(r); c < o.length; c++)
            (a = o[c]), l.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return l.O(m);
        },
        r = (self.webpackChunkfrontend = self.webpackChunkfrontend || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })(),
    (l.nc = void 0);
  var o = l.O(void 0, [736], () => l(2802));
  o = l.O(o);
})();
