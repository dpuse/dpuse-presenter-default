//#region node_modules/dompurify/dist/purify.es.mjs
function e(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function t(e) {
	if (Array.isArray(e)) return e;
}
function n(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function r() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function i(e, i) {
	return t(e) || n(e, i) || a(e, i) || r();
}
function a(t, n) {
	if (t) {
		if (typeof t == "string") return e(t, n);
		var r = {}.toString.call(t).slice(8, -1);
		return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, n) : void 0;
	}
}
var o = Object.entries, s = Object.setPrototypeOf, c = Object.isFrozen, l = Object.getPrototypeOf, u = Object.getOwnPropertyDescriptor, d = Object.freeze, f = Object.seal, ee = Object.create, p = typeof Reflect < "u" && Reflect, m = p.apply, te = p.construct;
d ||= function(e) {
	return e;
}, f ||= function(e) {
	return e;
}, m ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, te ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var h = C(Array.prototype.forEach), ne = C(Array.prototype.lastIndexOf), re = C(Array.prototype.pop), ie = C(Array.prototype.push), ae = C(Array.prototype.splice), g = Array.isArray, oe = C(String.prototype.toLowerCase), se = C(String.prototype.toString), ce = C(String.prototype.match), le = C(String.prototype.replace), ue = C(String.prototype.indexOf), de = C(String.prototype.trim), fe = C(Number.prototype.toString), pe = C(Boolean.prototype.toString), _ = typeof BigInt > "u" ? null : C(BigInt.prototype.toString), v = typeof Symbol > "u" ? null : C(Symbol.prototype.toString), y = C(Object.prototype.hasOwnProperty), b = C(Object.prototype.toString), x = C(RegExp.prototype.test), S = w(TypeError);
function C(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return m(e, t, n);
	};
}
function w(e) {
	return function() {
		return te(e, [...arguments]);
	};
}
function T(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oe;
	if (s && s(e, null), !g(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (c(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function E(e) {
	for (let t = 0; t < e.length; t++) y(e, t) || (e[t] = null);
	return e;
}
function D(e) {
	let t = ee(null);
	for (let r of o(e)) {
		var n = i(r, 2);
		let a = n[0], o = n[1];
		y(e, a) && (t[a] = g(o) ? E(o) : o && typeof o == "object" && o.constructor === Object ? D(o) : o);
	}
	return t;
}
function me(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return fe(e);
		case "boolean": return pe(e);
		case "bigint": return _ ? _(e) : "0";
		case "symbol": return v ? v(e) : "Symbol()";
		case "undefined": return b(e);
		case "function":
		case "object": {
			if (e === null) return b(e);
			let t = e, n = O(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : b(e);
			}
			return b(e);
		}
		default: return b(e);
	}
}
function O(e, t) {
	for (; e !== null;) {
		let n = u(e, t);
		if (n) {
			if (n.get) return C(n.get);
			if (typeof n.value == "function") return C(n.value);
		}
		e = l(e);
	}
	function n() {
		return null;
	}
	return n;
}
function he(e) {
	try {
		return x(e, ""), !0;
	} catch {
		return !1;
	}
}
var ge = d(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), _e = d(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), ve = d([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), ye = d([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), be = d(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), xe = d([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Se = d(["#text"]), Ce = d(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), we = d(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Te = d(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ee = d([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), De = f(/{{[\w\W]*|^[\w\W]*}}/g), Oe = f(/<%[\w\W]*|^[\w\W]*%>/g), ke = f(/\${[\w\W]*/g), Ae = f(/^data-[\-\w.\u00B7-\uFFFF]+$/), je = f(/^aria-[\-\w]+$/), Me = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ne = f(/^(?:\w+script|data):/i), Pe = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Fe = f(/^html$/i), Ie = f(/^[a-z][.\w]*(-[.\w]+)+$/i), Le = f(/<[/\w!]/g), Re = f(/<[/\w]/g), ze = f(/<\/no(script|embed|frames)/i), Be = f(/\/>/i), k = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, Ve = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], He = d(T({}, Ve)), Ue = function() {
	let e = {};
	return h(Ve, (t) => {
		e[t] = f(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), d(e);
}(), We = function() {
	return typeof window > "u" ? null : window;
}, Ge = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, Ke = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, A = function(e, t, n, r) {
	return y(e, t) && g(e[t]) ? T(r.base ? D(r.base) : {}, e[t], r.transform) : n;
}, qe = function(e, t, n) {
	let r = y(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? D(r) : n();
};
function Je() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : We(), t = (e) => Je(e);
	if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== k.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, s = e.Node, c = e.Element, l = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let u = e.DOMParser, p = e.trustedTypes, m = c.prototype, te = O(m, "cloneNode"), fe = O(m, "remove"), pe = O(m, "nextSibling"), _ = O(m, "childNodes"), v = O(m, "parentNode"), b = O(m, "shadowRoot"), C = O(m, "attributes"), w = s && s.prototype ? O(s.prototype, "nodeType") : null, E = s && s.prototype ? O(s.prototype, "nodeName") : null, Ve = s && s.prototype ? O(s.prototype, "ownerDocument") : null, j = function(e) {
		return w ? w(e) : e.nodeType;
	}, Ye = function(e) {
		return E ? E(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let M, N = "", Xe, Ze = !1, P = 0, Qe = function() {
		if (P > 0) throw S("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, F = function(e) {
		Qe(), P++;
		try {
			return M.createHTML(e);
		} finally {
			P--;
		}
	}, $e = function(e) {
		Qe(), P++;
		try {
			return M.createScriptURL(e);
		} finally {
			P--;
		}
	}, et = function() {
		return Ze ||= (Xe = Ge(p, i), !0), Xe;
	}, tt = n, nt = tt.implementation, rt = tt.createNodeIterator, it = tt.createDocumentFragment, at = tt.getElementsByTagName, ot = r.importNode, I = Ke();
	t.isSupported = typeof o == "function" && typeof v == "function" && nt && nt.createHTMLDocument !== void 0;
	let st = De, ct = Oe, lt = ke, ut = Ae, dt = je, ft = Ne, pt = Pe, mt = Ie, ht = Me, L = null, gt = T({}, [
		...ge,
		..._e,
		...ve,
		...be,
		...Se
	]), R = null, _t = T({}, [
		...Ce,
		...we,
		...Te,
		...Ee
	]), z = Object.seal(ee(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), vt = null, yt = null, B = Object.seal(ee(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), bt = !0, xt = !0, St = !1, Ct = !0, V = !1, H = !0, U = !1, wt = !1, Tt = null, Et = null, Dt = !1, W = !1, Ot = !1, kt = !1, At = !0, jt = !1, Mt = "user-content-", Nt = !0, Pt = !1, G = {}, K = null, Ft = T({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), It = null, Lt = T({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Rt = null, zt = T({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Bt = "http://www.w3.org/1998/Math/MathML", Vt = "http://www.w3.org/2000/svg", q = "http://www.w3.org/1999/xhtml", J = q, Ht = !1, Ut = null, Wt = T({}, [
		Bt,
		Vt,
		q
	], se), Gt = d([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Kt = T({}, Gt), qt = d(["annotation-xml"]), Jt = T({}, qt), Yt = T({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Xt = null, Zt = ["application/xhtml+xml", "text/html"], Y = null, X = null, Qt = n.createElement("form"), $t = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, en = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (X && X === e) return;
		(!e || typeof e != "object") && (e = {}), e = D(e), Xt = Zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, Y = Xt === "application/xhtml+xml" ? se : oe, L = A(e, "ALLOWED_TAGS", gt, { transform: Y }), R = A(e, "ALLOWED_ATTR", _t, { transform: Y }), Ut = A(e, "ALLOWED_NAMESPACES", Wt, { transform: se }), Rt = A(e, "ADD_URI_SAFE_ATTR", zt, {
			transform: Y,
			base: zt
		}), It = A(e, "ADD_DATA_URI_TAGS", Lt, {
			transform: Y,
			base: Lt
		}), K = A(e, "FORBID_CONTENTS", Ft, { transform: Y }), vt = A(e, "FORBID_TAGS", D({}), { transform: Y }), yt = A(e, "FORBID_ATTR", D({}), { transform: Y }), G = y(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? D(e.USE_PROFILES) : e.USE_PROFILES : !1, bt = e.ALLOW_ARIA_ATTR !== !1, xt = e.ALLOW_DATA_ATTR !== !1, St = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ct = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, V = e.SAFE_FOR_TEMPLATES || !1, H = e.SAFE_FOR_XML !== !1, U = e.WHOLE_DOCUMENT || !1, W = e.RETURN_DOM || !1, Ot = e.RETURN_DOM_FRAGMENT || !1, kt = e.RETURN_TRUSTED_TYPE || !1, Dt = e.FORCE_BODY || !1, At = e.SANITIZE_DOM !== !1, jt = e.SANITIZE_NAMED_PROPS || !1, Nt = e.KEEP_CONTENT !== !1, Pt = e.IN_PLACE || !1, ht = he(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Me, J = typeof e.NAMESPACE == "string" ? e.NAMESPACE : q, Kt = qe(e, "MATHML_TEXT_INTEGRATION_POINTS", () => T({}, Gt)), Jt = qe(e, "HTML_INTEGRATION_POINTS", () => T({}, qt));
		let t = qe(e, "CUSTOM_ELEMENT_HANDLING", () => ee(null));
		if (z = ee(null), y(t, "tagNameCheck") && $t(t.tagNameCheck) && (z.tagNameCheck = t.tagNameCheck), y(t, "attributeNameCheck") && $t(t.attributeNameCheck) && (z.attributeNameCheck = t.attributeNameCheck), y(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (z.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), f(z), V && (xt = !1), Ot && (W = !0), G && (L = T({}, Se), R = ee(null), G.html === !0 && (T(L, ge), T(R, Ce)), G.svg === !0 && (T(L, _e), T(R, we), T(R, Ee)), G.svgFilters === !0 && (T(L, ve), T(R, we), T(R, Ee)), G.mathMl === !0 && (T(L, be), T(R, Te), T(R, Ee))), B.tagCheck = null, B.attributeCheck = null, y(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? B.tagCheck = e.ADD_TAGS : g(e.ADD_TAGS) && (L === gt && (L = D(L)), T(L, e.ADD_TAGS, Y))), y(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? B.attributeCheck = e.ADD_ATTR : g(e.ADD_ATTR) && (R === _t && (R = D(R)), T(R, e.ADD_ATTR, Y))), y(e, "ADD_FORBID_CONTENTS") && g(e.ADD_FORBID_CONTENTS) && (K === Ft && (K = D(K)), T(K, e.ADD_FORBID_CONTENTS, Y)), Nt && (L["#text"] = !0), U && T(L, [
			"html",
			"head",
			"body"
		]), L.table && (T(L, ["tbody"]), delete vt.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw S("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw S("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = M;
			M = e.TRUSTED_TYPES_POLICY;
			try {
				N = F("");
			} catch (e) {
				throw M = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (M = void 0, N = "") : (M === void 0 && (M = et()), M && typeof N == "string" && (N = F("")));
		d && d(e), X = e;
	}, tn = T({}, [
		..._e,
		...ve,
		...ye
	]), nn = T({}, [...be, ...xe]), rn = function(e, t, n) {
		return t.namespaceURI === q ? e === "svg" : t.namespaceURI === Bt ? e === "svg" && (n === "annotation-xml" || Kt[n]) : !!tn[e];
	}, an = function(e, t, n) {
		return t.namespaceURI === q ? e === "math" : t.namespaceURI === Vt ? e === "math" && Jt[n] : !!nn[e];
	}, on = function(e, t, n) {
		return t.namespaceURI === Vt && !Jt[n] || t.namespaceURI === Bt && !Kt[n] ? !1 : !nn[e] && (Yt[e] || !tn[e]);
	}, sn = function(e) {
		let t = v(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: J,
			tagName: "template"
		});
		let n = oe(e.tagName), r = oe(t.tagName);
		return Ut[e.namespaceURI] ? e.namespaceURI === Vt ? rn(n, t, r) : e.namespaceURI === Bt ? an(n, t, r) : e.namespaceURI === q ? on(n, t, r) : !!(Xt === "application/xhtml+xml" && Ut[e.namespaceURI]) : !1;
	}, Z = function(e) {
		ie(t.removed, { element: e });
		try {
			v(e).removeChild(e);
		} catch {
			if (fe(e), !v(e)) throw S("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, cn = function(e, t, n) {
		try {
			e.removeAttributeNode(t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, ln = function(e) {
		dn(e);
		let t = _(e);
		if (t) {
			let e = [];
			h(t, (t) => {
				ie(e, t);
			}), h(e, (e) => {
				try {
					fe(e);
				} catch {}
			});
		}
		let n = C(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && cn(e, r, i);
		}
	}, Q = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		ie(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? n.removeAttributeNode(r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") {
			if (W || Ot) try {
				Z(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, un = function(e) {
		let t = C(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || R[Y(i)] || cn(e, r, i);
		}
	}, dn = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			j(e) === k.element && un(e);
			let n = _(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, fn = function(e, t) {
		return H ? e === "patchsrc" || e === "for" && t !== "label" && t !== "output" : !1;
	}, pn = function(e) {
		if (!H) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = j(e);
			if (n === k.processingInstruction || n === k.comment && x(Re, e.data)) {
				try {
					fe(e);
				} catch {}
				continue;
			}
			if (n === k.element) {
				let t = e, n = Y(Ye(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && fn("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = _(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, mn = function(e) {
		let t = null, r = null;
		if (Dt) e = "<remove></remove>" + e;
		else {
			let t = ce(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Xt === "application/xhtml+xml" && J === q && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = M ? F(e) : e;
		if (J === q) try {
			t = new u().parseFromString(i, Xt);
		} catch {}
		if (!t || !t.documentElement) {
			t = nt.createDocument(J, "template", null);
			try {
				t.documentElement.innerHTML = Ht ? N : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), J === q ? at.call(t, U ? "html" : "body")[0] : U ? t.documentElement : a;
	}, hn = function(e) {
		let t = Ve ? Ve(e) : e.ownerDocument;
		return rt.call(t || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, gn = function(e) {
		return e = le(e, st, " "), e = le(e, ct, " "), e = le(e, lt, " "), e;
	}, _n = function(e) {
		e.normalize();
		let t = Ve ? Ve(e) : e.ownerDocument, n = rt.call(t || e, e, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = gn(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && h(i, (e) => {
			yn(e.content) && _n(e.content);
		});
	}, vn = function(e) {
		let t = E ? E(e) : null;
		return typeof t != "string" || Y(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== C(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== w(e) || e.childNodes !== _(e);
	}, yn = function(e) {
		if (!w || typeof e != "object" || !e) return !1;
		try {
			return w(e) === k.documentFragment;
		} catch {
			return !1;
		}
	}, bn = function(e) {
		if (!w || typeof e != "object" || !e) return !1;
		try {
			return typeof w(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && h(e, (e) => {
			e.call(t, n, r, X);
		});
	}
	let xn = function(e, t) {
		return !!(H && e.hasChildNodes() && !bn(e.firstElementChild) && x(Le, e.textContent) && x(Le, e.innerHTML) || H && e.namespaceURI === q && He[t] && (bn(e.firstElementChild) || typeof e.textContent == "string" && x(Ue[t], e.textContent)) || e.nodeType === k.processingInstruction || H && e.nodeType === k.comment && x(Re, e.data));
	}, Sn = function(e, t) {
		return e instanceof RegExp ? x(e, t) : e instanceof Function && !!e(t, ...[...arguments].slice(2));
	}, Cn = function(e, t, n) {
		if (!vt[t] && kn(t) && Sn(z.tagNameCheck, t)) return !1;
		if (Nt && !K[t]) {
			let t = v(e), r = _(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? te(r[a], !0) : r[a];
					t.insertBefore(i, pe(e));
				}
			}
		}
		return Z(e), !0;
	}, wn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? D(t) : t;
	}, Tn = function(e, t) {
		return e === t || v(e) !== null ? !1 : (Pt && dn(e), !0);
	}, En = function(e, n) {
		if ($(I.beforeSanitizeElements, e, null), Tn(e, n)) return !0;
		if (vn(e)) return Z(e), !0;
		let r = Y(Ye(e));
		if (L = wn(I.uponSanitizeElement, L, gt, Tt), $(I.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: L
		}), Tn(e, n)) return !0;
		if (xn(e, r)) return Z(e), !0;
		if (vt[r] || !(B.tagCheck instanceof Function && B.tagCheck(r)) && !L[r]) {
			let t = Cn(e, r, n);
			return t === !1 && $(I.afterSanitizeElements, e, null), t;
		}
		if (j(e) === k.element && !sn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && x(ze, e.innerHTML)) return Z(e), !0;
		if (V && e.nodeType === k.text) {
			let n = gn(e.textContent);
			e.textContent !== n && (ie(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(I.afterSanitizeElements, e, null), !1;
	}, Dn = function(e, t, r) {
		if (yt[t] || fn(t, e) || At && (t === "id" || t === "name") && (r in n || r in Qt)) return !1;
		let i = R[t] || B.attributeCheck instanceof Function && B.attributeCheck(t, e);
		return xt && x(ut, t) || bt && x(dt, t) ? !0 : i ? Rt[t] || x(ht, le(r, pt, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && ue(r, "data:") === 0 && It[e] || St && !x(ft, le(r, pt, "")) ? !0 : !r : kn(e) && Sn(z.tagNameCheck, e) && Sn(z.attributeNameCheck, t, e) || t === "is" && z.allowCustomizedBuiltInElements && Sn(z.tagNameCheck, r);
	}, On = T({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), kn = function(e) {
		return !On[oe(e)] && x(mt, e);
	}, An = function(e, t, n, r) {
		if (M && typeof p == "object" && typeof p.getAttributeType == "function" && !n) switch (p.getAttributeType(e, t)) {
			case "TrustedHTML": return F(r);
			case "TrustedScriptURL": return $e(r);
		}
		return r;
	}, jn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), vn(e) ? Z(e) : re(t.removed);
		} catch {
			Q(n, e);
		}
	}, Mn = function(e) {
		$(I.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || vn(e)) return;
		R = wn(I.uponSanitizeAttribute, R, _t, Et);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: R,
			forceKeepAttr: void 0
		}, r = t.length, i = Y(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = Y(o), u = c, d = o === "value" ? u : de(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, $(I.uponSanitizeAttribute, e, n), d = n.attrValue, jt && (l === "id" || l === "name") && ue(d, Mt) !== 0 && (Q(o, e, a), d = Mt + d), H && x(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Q(o, e, a);
				continue;
			}
			if (l === "attributename" && ce(d, "href")) {
				Q(o, e, a);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Q(o, e, a);
					continue;
				}
				if (!Ct && x(Be, d)) {
					Q(o, e, a);
					continue;
				}
				if (V && (d = gn(d)), !Dn(i, l, d)) {
					Q(o, e, a);
					continue;
				}
				d = An(i, l, s, d), d !== u && jn(e, o, s, d);
			}
		}
		$(I.afterSanitizeAttributes, e, null);
	}, Nn = function(e) {
		let t = null, n = hn(e);
		for ($(I.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(I.uponSanitizeShadowNode, t, null), En(t, e), Mn(t), yn(t.content) && Nn(t.content), j(t) === k.element) {
			let e = b(t);
			yn(e) && (Pn(e), Nn(e));
		}
		$(I.afterSanitizeShadowDOM, e, null);
	}, Pn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Nn(e.shadow);
				continue;
			}
			let n = e.node, r = j(n) === k.element, i = _(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = E ? E(n) : null;
				if (typeof e == "string" && Y(e) === "template") {
					let e = n.content;
					yn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = b(n);
				yn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Ht = !e, Ht && (e = "<!-->"), typeof e != "string" && !bn(e) && (e = me(e), typeof e != "string")) throw S("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		wt ? (L = Tt, R = Et) : en(n), (I.uponSanitizeElement.length > 0 || I.uponSanitizeAttribute.length > 0) && (L = D(L)), I.uponSanitizeAttribute.length > 0 && (R = D(R)), t.removed = [];
		let c = Pt && typeof e != "string" && bn(e);
		if (c) {
			pn(e);
			let t = Ye(e);
			if (typeof t == "string") {
				let n = Y(t);
				if (!L[n] || vt[n]) throw ln(e), S("root node is forbidden and cannot be sanitized in-place");
			}
			if (vn(e)) throw ln(e), S("root node is clobbered and cannot be sanitized in-place");
			try {
				Pn(e);
			} catch (t) {
				throw ln(e), t;
			}
		} else if (bn(e)) i = mn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === k.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Pn(a);
		else {
			if (!W && !V && !U && e.indexOf("<") === -1) return M && kt ? F(e) : e;
			if (i = mn(e), !i) return W ? null : kt ? N : "";
		}
		i && Dt && Z(i.firstChild);
		let l = c ? e : i;
		try {
			let e = hn(l);
			for (; o = e.nextNode();) En(o, l), Mn(o), yn(o.content) && Nn(o.content);
		} catch (n) {
			throw c && (ln(e), h(t.removed, (e) => {
				e.element && dn(e.element);
			})), n;
		}
		if (c) return h(t.removed, (e) => {
			e.element && dn(e.element);
		}), V && _n(e), e;
		if (W) {
			if (V && _n(i), Ot) for (s = it.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (R.shadowroot || R.shadowrootmode) && (s = ot.call(r, s, !0)), s;
		}
		let u = U ? i.outerHTML : i.innerHTML;
		return U && L["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && x(Fe, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), V && (u = gn(u)), M && kt ? F(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		en(e), wt = !0, Tt = L, Et = R;
	}, t.clearConfig = function() {
		X = null, wt = !1, Tt = null, Et = null, M = Xe, N = "";
	}, t.isValidAttribute = function(e, t, n) {
		X || en({});
		let r = Y(e), i = Y(t);
		return Dn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && y(I, e) && ie(I[e], t);
	}, t.removeHook = function(e, t) {
		if (y(I, e)) {
			if (t !== void 0) {
				let n = ne(I[e], t);
				return n === -1 ? void 0 : ae(I[e], n, 1)[0];
			}
			return re(I[e]);
		}
	}, t.removeHooks = function(e) {
		y(I, e) && (I[e] = []);
	}, t.removeAllHooks = function() {
		I = Ke();
	}, t;
}
var j = Je(), Ye = {
	id: "dpuse-presenter-default",
	label: { en: "Default Presenter" },
	description: { en: "..." },
	firstCreatedAt: null,
	icon: "<svg viewBox=\"0 0 333 263\"><path fill=\"#3b82f6\" d=\"M128.947 122.88c6.104 0 11.053 4.949 11.053 11.053v117.894c0 6.105-4.949 11.053-11.053 11.053H70c-38.66 0-70-31.339-70-70 0-38.659 31.34-70 70-70z\" transform-origin=\"70px 192.88px\"/><rect width=\"39.121\" height=\"145.706\" x=\"100.844\" fill=\"#3b82f6\" paint-order=\"fill\" rx=\"7.057\" ry=\"7.057\"/><path fill=\"#ca8a04\" d=\"M171.053 140.001c-6.104 0-11.053-4.949-11.053-11.053V11.054C160 4.949 164.949.001 171.053.001H230c38.66 0 70 31.34 70 70s-31.34 70-70 70z\" transform-origin=\"230px 70.001px\"/><rect width=\"39.121\" height=\"145.706\" x=\"-199.16\" y=\"-262.88\" fill=\"#ca8a04\" paint-order=\"fill\" rx=\"7.057\" ry=\"7.057\" transform=\"scale(-1)\"/><path fill=\"#0d9488\" d=\"M276 263c-31.481 0-57-25.52-57-57v-49.046a7.953 7.953 0 0 1 7.952-7.954h98.095a7.954 7.954 0 0 1 7.953 7.954V206c0 31.48-25.521 57-57 57\" transform-origin=\"276px 206px\"/></svg>",
	iconDark: null,
	lastUpdatedAt: null,
	actionNames: [
		"list",
		"render",
		"setColorMode"
	],
	presentations: [
		{
			id: "hrWrkForceAverageHeadcount",
			label: { en: "Average Headcount" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 2,
			path: "hr/wrkForce/averageHeadcount",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForceFtes",
			label: { en: "Full-Time Equivalents" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 4,
			path: "hr/wrkForce/ftes",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForceHeadcountSummary",
			label: { en: "Headcount Summary" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 7,
			path: "hr/wrkForce/headcountSummary",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForceHiresTerminations",
			label: { en: "Hires & Terminations" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 3,
			path: "hr/wrkForce/hiresTerminations",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForceMovementFlows",
			label: { en: "Movement Flows" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 6,
			path: "hr/wrkForce/movementFlows",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForceMovements",
			label: { en: "Movements (Entry, Internal & Exit)" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 5,
			path: "hr/wrkForce/movements",
			typeId: "presenterPresentation"
		},
		{
			id: "hrWrkForcePhysicalHeadcount",
			label: { en: "Physical Headcount" },
			description: { en: "This is a description..." },
			icon: null,
			iconDark: null,
			order: 1,
			path: "hr/wrkForce/physicalHeadcount",
			typeId: "presenterPresentation"
		}
	],
	status: null,
	statusId: "alpha",
	typeId: "presenter",
	version: "0.1.1065",
	usageId: "unknown",
	vendorAccountURL: null,
	vendorDocumentationURL: null,
	vendorHomeURL: null
}, M = {
	"hr/wrkForce/averageHeadcount": {
		id: "hrWrkForceAverageHeadcount",
		label: { en: "Average Headcount" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 2,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: "Human Resources - Workforce\n\n...\n"
	},
	"hr/wrkForce/ftes": {
		id: "hrWrkForceFtes",
		label: { en: "Full-Time Equivalents" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 4,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: "Human Resources - Workforce\n\n...\n"
	},
	"hr/wrkForce/headcountSummary": {
		id: "hrWrkForceHeadcountSummary",
		label: { en: "Headcount Summary" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 7,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: ""
	},
	"hr/wrkForce/hiresTerminations": {
		id: "hrWrkForceHiresTerminations",
		label: { en: "Hires & Terminations" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 3,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: "Human Resources - Workforce\n\nPeople joining and leaving the workforce...\n\n## Hires\n\nNew Hires & Rehires vs External & Internal Hires...\n\n## Hire Rate\n\n...\n\n## Terminations\n\n...\n\n## Termination Rate\n\n...\n\n## Headcount Progression\n\n...\n\n## Net Growth Ratio\n\n...\n\n## Retention Rate\n\n...\n"
	},
	"hr/wrkForce/movementFlows": {
		id: "hrWrkForceMovementFlows",
		label: { en: "Movement Flows" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 6,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: "Human Resources - Workforce\n\n...\n\n## Single Step Summary Flow (Chord Diagram)\n\n...\n\n## Multi Step Summary Flow (Sankey Diagram)\n\n...\n\n## Detailed Flow (Markov Diagram)\n"
	},
	"hr/wrkForce/movements": {
		id: "hrWrkForceMovements",
		label: { en: "Movements (Entry, Internal & Exit)" },
		description: { en: "This is a description..." },
		firstCreatedAt: null,
		icon: null,
		iconDark: null,
		lastUpdatedAt: null,
		order: 5,
		status: null,
		statusId: "alpha",
		typeId: "presenterPresentation",
		content: "Human Resources - Workforce\n\n## Movements - Table (Values & Sparklines)\n\n...\n\n## Movements - Bar Chart\n\n...\n\n## Movements - Stream Chart\n\n...\n\n## Internal Movements\n\n...\n\n## Movements - Waterfall Chart\n\n...\n\n## Net Movements\n\n...\n\n## Other\n\n...\n\n![](./movementDiagram.png)\n\n[PeopleFluent](https://www.peoplefluent.com/blog/insights/8-data-visualizations-with-peoplefluent-performance-compensation-succession/)\n"
	},
	"hr/wrkForce/physicalHeadcount": /*#__PURE__*/ JSON.parse("{\"id\":\"hrWrkForcePhysicalHeadcount\",\"label\":{\"en\":\"Physical Headcount\"},\"description\":{\"en\":\"This is a description...\"},\"firstCreatedAt\":null,\"icon\":null,\"iconDark\":null,\"lastUpdatedAt\":null,\"order\":1,\"status\":null,\"statusId\":\"alpha\",\"typeId\":\"presenterPresentation\",\"content\":\"# {{label}}\\n\\n::note[Remember to save your work before switching views.]\\n\\nMeasures the number of people employed by one or more organizations at specific points in time. These points in time are defined in terms of reporting periods, such as weeks, months, quarters, or years. The most frequently used points are period opening, starting, ending, and closing.\\n\\nPhysical headcount measures the actual number of people being counted at a fixed point in time. Please see ... and ... for measures that report headcount capacity across time. There are two versions ... opening / closing and starting / ending ...\\n\\n## Opening/Closing Headcount\\n\\nQuantifies the variation in physical headcount between the opening and closing of specific reporting periods.\\n\\n```visual\\n{\\\"content\\\":{\\\"title\\\":{\\\"text\\\":\\\"Opening/Closing Headcount\\\"},\\\"data\\\":{\\\"label\\\":{\\\"text\\\":\\\"Headcount\\\"},\\\"dimension\\\":{\\\"label\\\":{\\\"text\\\":\\\"Months\\\"},\\\"values\\\":[{\\\"label\\\":{\\\"text\\\":\\\"Jan\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Feb\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Mar\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Apr\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"May\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jun\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jul\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Aug\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Sep\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Oct\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Nov\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Dec\\\"}}]},\\\"measures\\\":[{\\\"id\\\":\\\"openingHeadcount\\\",\\\"name\\\":\\\"Opening\\\"},{\\\"id\\\":\\\"closingHeadcount\\\",\\\"name\\\":\\\"Closing\\\"}]}},\\\"views\\\":[{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"areaLine\\\"},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"areaSpline\\\"},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"bar\\\"},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"line\\\",\\\"default\\\":true},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"spline\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"areaLine\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"areaRange\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"areaSpline\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"columnRange\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"line\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"spline\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"areaLine\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"areaSpline\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"bar\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"valueTable\\\"}]}\\n```\\n\\nDescribe opening/closing headcounts...\\n\\n## Starting/Ending Headcount\\n\\nQuantifies the variation in physical headcount between the starting and ending of specific reporting periods.\\n\\n```visual\\n{\\\"content\\\":{\\\"title\\\":{\\\"text\\\":\\\"Starting/Ending Headcount\\\"},\\\"data\\\":{\\\"label\\\":{\\\"text\\\":\\\"Headcount\\\"},\\\"dimension\\\":{\\\"label\\\":{\\\"text\\\":\\\"Months\\\"},\\\"values\\\":[{\\\"label\\\":{\\\"text\\\":\\\"Jan\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Feb\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Mar\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Apr\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"May\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jun\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jul\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Aug\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Sep\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Oct\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Nov\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Dec\\\"}}]},\\\"measures\\\":[{\\\"id\\\":\\\"startingHeadcount\\\",\\\"name\\\":\\\"Starting\\\"},{\\\"id\\\":\\\"endingHeadcount\\\",\\\"name\\\":\\\"Ending\\\"}]}},\\\"views\\\":[{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"cartesianChart\\\",\\\"typeId\\\":\\\"line\\\",\\\"default\\\":true},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"polarChart\\\",\\\"typeId\\\":\\\"line\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"areaLine\\\"},{\\\"categoryId\\\":\\\"rangeChart\\\",\\\"typeId\\\":\\\"column\\\"},{\\\"categoryId\\\":\\\"valueTable\\\"}]}\\n```\\n\\nDescribe starting ending headcounts...\\n\\n## Headcount Range Comparisons\\n\\n...\\n\\n```visual\\n{\\\"content\\\":{\\\"title\\\":{\\\"text\\\":\\\"Monthly Headcount Flow & Boundaries\\\"},\\\"data\\\":{\\\"label\\\":{\\\"text\\\":\\\"Headcount\\\"},\\\"dimension\\\":{\\\"label\\\":{\\\"text\\\":\\\"Months\\\"},\\\"values\\\":[{\\\"label\\\":{\\\"text\\\":\\\"Jan\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Feb\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Mar\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Apr\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"May\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jun\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Jul\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Aug\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Sep\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Oct\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Nov\\\"}},{\\\"label\\\":{\\\"text\\\":\\\"Dec\\\"}}]},\\\"measures\\\":[{\\\"id\\\":\\\"openingHeadcount\\\",\\\"name\\\":\\\"Opening\\\"},{\\\"id\\\":\\\"closingHeadcount\\\",\\\"name\\\":\\\"Closing\\\"},{\\\"id\\\":\\\"startingHeadcount\\\",\\\"name\\\":\\\"Starting\\\"},{\\\"id\\\":\\\"endingHeadcount\\\",\\\"name\\\":\\\"Ending\\\"}]}},\\\"views\\\":[{\\\"categoryId\\\":\\\"periodFlowBoundariesChart\\\"}]}\\n```\\n\\nDescribe opening/closing starting/ending comparison...\\n\\n```highcharts\\n{\\\"chart\\\":{\\\"type\\\":\\\"waterfall\\\"},\\\"title\\\":{\\\"text\\\":\\\"Period Flow & Boundary Chart\\\"},\\\"tooltip\\\":{\\\"shared\\\":true},\\\"xAxis\\\":{\\\"categories\\\":[\\\"B/F\\\",\\\"Jan\\\",\\\"Feb\\\",\\\"Mar\\\",\\\"Apr\\\",\\\"May\\\",\\\"Jun\\\",\\\"Jul\\\",\\\"Aug\\\",\\\"Sep\\\",\\\"Oct\\\",\\\"Nov\\\",\\\"Dec\\\",\\\"C/F\\\"]},\\\"yAxis\\\":{},\\\"plotOptions\\\":{\\\"columnrange\\\":{\\\"grouping\\\":false},\\\"series\\\":{\\\"enableMouseTracking\\\":false},\\\"waterfall\\\":{\\\"borderRadius\\\":0}},\\\"series\\\":[{\\\"name\\\":\\\"Boundary\\\",\\\"zIndex\\\":1,\\\"borderColor\\\":\\\"#a1a1aa\\\",\\\"type\\\":\\\"columnrange\\\",\\\"color\\\":\\\"#dcfce7\\\",\\\"data\\\":[null,[16,44],[36,64],null,{\\\"low\\\":56,\\\"high\\\":84,\\\"color\\\":\\\"#ffedd5\\\"},{\\\"low\\\":36,\\\"high\\\":64,\\\"color\\\":\\\"#ffedd5\\\"}],\\\"showInLegend\\\":false},{\\\"name\\\":\\\"Increasing\\\",\\\"type\\\":\\\"columnrange\\\",\\\"color\\\":\\\"#86efac\\\",\\\"showInLegend\\\":true,\\\"data\\\":[],\\\"enableMouseTracking\\\":false},{\\\"name\\\":\\\"Decreasing\\\",\\\"zIndex\\\":2,\\\"borderColor\\\":\\\"#d4d4d8\\\",\\\"upColor\\\":\\\"#86efac\\\",\\\"color\\\":\\\"#fed7aa\\\",\\\"showInLegend\\\":false,\\\"data\\\":[{\\\"y\\\":20,\\\"color\\\":\\\"#e4e4e7\\\"},20,20,{\\\"y\\\":20},-20,-20,0,0,0,0,0,0,0,{\\\"isSum\\\":true,\\\"color\\\":\\\"#e4e4e7\\\"}]},{\\\"name\\\":\\\"Border\\\",\\\"zIndex\\\":2,\\\"borderColor\\\":\\\"#d4d4d8\\\",\\\"type\\\":\\\"columnrange\\\",\\\"color\\\":\\\"transparent\\\",\\\"data\\\":[[0,20],[16,44],[36,64],[60,80],[56,84],[36,64],null,null,null,null,null,null,null,[0,40]],\\\"showInLegend\\\":false}]}\\n```\\n\\n```highcharts\\n{\\\"chart\\\":{\\\"type\\\":\\\"column\\\"},\\\"title\\\":{\\\"text\\\":\\\"Efficiency Optimization by Branch\\\"},\\\"xAxis\\\":{\\\"categories\\\":[\\\"Seattle HQ\\\",\\\"San Francisco\\\",\\\"Tokyo\\\"]},\\\"yAxis\\\":[{\\\"min\\\":0,\\\"title\\\":{\\\"text\\\":\\\"Employees\\\"}},{\\\"title\\\":{\\\"text\\\":\\\"Profit (millions)\\\"},\\\"opposite\\\":true}],\\\"legend\\\":{\\\"shadow\\\":false},\\\"tooltip\\\":{\\\"shared\\\":true},\\\"plotOptions\\\":{\\\"column\\\":{\\\"grouping\\\":false,\\\"shadow\\\":false,\\\"borderWidth\\\":0}},\\\"series\\\":[{\\\"name\\\":\\\"Employees Optimized\\\",\\\"color\\\":\\\"rgba(126,86,134,1)\\\",\\\"data\\\":[140,90,40],\\\"pointPadding\\\":0.3,\\\"pointPlacement\\\":-0.2},{\\\"name\\\":\\\"Profit Optimized\\\",\\\"color\\\":\\\"rgba(186,60,61,.9)\\\",\\\"data\\\":[203.6,198.8,208.5],\\\"tooltip\\\":{\\\"valuePrefix\\\":\\\"$\\\",\\\"valueSuffix\\\":\\\" M\\\"},\\\"pointPadding\\\":0.3,\\\"pointPlacement\\\":0.2,\\\"yAxis\\\":1},{\\\"name\\\":\\\"Employees\\\",\\\"color\\\":\\\"rgba(165,170,217,1)\\\",\\\"data\\\":[150,73,20],\\\"pointPadding\\\":0.4,\\\"pointPlacement\\\":-0.2},{\\\"name\\\":\\\"Profit\\\",\\\"color\\\":\\\"rgba(248,161,63,.9)\\\",\\\"data\\\":[183.6,178.8,198.5],\\\"tooltip\\\":{\\\"valuePrefix\\\":\\\"$\\\",\\\"valueSuffix\\\":\\\" M\\\"},\\\"pointPadding\\\":0.4,\\\"pointPlacement\\\":0.2,\\\"yAxis\\\":1}]}\\n```\\n\\n```highcharts\\n{\\\"colors\\\":[\\\"rgba(124, 181, 236, 0.3)\\\",\\\"rgba(144, 237, 125, 0.3)\\\"],\\\"chart\\\":{\\\"type\\\":\\\"waterfall\\\"},\\\"title\\\":{\\\"text\\\":\\\"Highcharts stacked waterfall (overlap)\\\"},\\\"tooltip\\\":{\\\"shared\\\":true},\\\"xAxis\\\":{\\\"categories\\\":[\\\"0\\\",\\\"1\\\",\\\"2\\\",\\\"1. Intermediate Sum\\\",\\\"4\\\",\\\"2. Intermediate Sum\\\",\\\"6\\\",\\\"Sum\\\"]},\\\"yAxis\\\":{\\\"tickInterval\\\":10},\\\"plotOptions\\\":{\\\"series\\\":{\\\"stacking\\\":\\\"overlap\\\",\\\"lineWidth\\\":1}},\\\"series\\\":[{\\\"zIndex\\\":1,\\\"upColor\\\":{\\\"pattern\\\":{\\\"color\\\":\\\"#15af15\\\",\\\"width\\\":20,\\\"height\\\":20,\\\"opacity\\\":0.6,\\\"path\\\":{\\\"d\\\":\\\"M 0 20 L 20 0 M -2 2 L 2 -2 M 18 22 L 22 18\\\",\\\"strokeWidth\\\":4}}},\\\"color\\\":{\\\"pattern\\\":{\\\"color\\\":\\\"#0088ff\\\",\\\"width\\\":20,\\\"height\\\":20,\\\"opacity\\\":0.6,\\\"path\\\":{\\\"d\\\":\\\"M 0 20 L 20 0 M -2 2 L 2 -2 M 18 22 L 22 18\\\",\\\"strokeWidth\\\":4}}},\\\"data\\\":[20,-10,40,{\\\"isIntermediateSum\\\":true,\\\"color\\\":{\\\"pattern\\\":{\\\"color\\\":\\\"#0A500A\\\",\\\"width\\\":20,\\\"height\\\":20,\\\"opacity\\\":0.6,\\\"path\\\":{\\\"d\\\":\\\"M 0 20 L 20 0 M -2 2 L 2 -2 M 18 22 L 22 18\\\",\\\"strokeWidth\\\":4}}}},-10,{\\\"isIntermediateSum\\\":true,\\\"color\\\":{\\\"pattern\\\":{\\\"color\\\":\\\"#003E74\\\",\\\"width\\\":20,\\\"height\\\":20,\\\"opacity\\\":0.6,\\\"path\\\":{\\\"d\\\":\\\"M 0 20 L 20 0 M -2 2 L 2 -2 M 18 22 L 22 18\\\",\\\"strokeWidth\\\":4}}}},-20,{\\\"isSum\\\":true,\\\"color\\\":{\\\"pattern\\\":{\\\"color\\\":\\\"#0A500A\\\",\\\"width\\\":20,\\\"height\\\":20,\\\"opacity\\\":0.6,\\\"path\\\":{\\\"d\\\":\\\"M 0 20 L 20 0 M -2 2 L 2 -2 M 18 22 L 22 18\\\",\\\"strokeWidth\\\":4}}}}],\\\"showInLegend\\\":false},{\\\"zIndex\\\":0,\\\"upColor\\\":\\\"rgba(21, 175, 21, 0.3)\\\",\\\"color\\\":\\\"rgba(0, 136, 255, 0.3)\\\",\\\"showInLegend\\\":false,\\\"data\\\":[20,40,-10,{\\\"isIntermediateSum\\\":true,\\\"color\\\":\\\"rgba(10, 80, 10, 0.3)\\\"},30,{\\\"isIntermediateSum\\\":true,\\\"color\\\":\\\"rgba(10, 80, 10, 0.3)\\\"},-20,{\\\"isSum\\\":true,\\\"color\\\":\\\"rgba(10, 80, 10, 0.3)\\\"}]}]}\\n```\\n\\n## Explanatory Notes\\n\\n! [](./hc.svg)\\n\\nChanges in headcount during a period obviously imply that people are joining and leaving the workforce.\\n\\nWe can visualise the headcount ranges for each period, and the progression from one period to the next, using a floating column chart.\\n\\nGreen columns represent a net increase in headcount for a period. Orange columns represent a net decrease in headcount. The wider light green/orange columns show opening/closing ranges while the narrower dark green/orange columns show starting/ending ranges.\\n\\nThe bottom of each green column represents the opening or starting headcount for a period of increase. The top the ending or closing headcount. The top of each orange column represents the opening or starting headcount for a period of decline. The bottom the ending or closing headcount.\\n\\nThe problem with this charts is that to provides no understanding of the volume of hires and terminations within each period.\\n\\nThese measures quantify the number of people (physical/actual) available for work at a specific point in time. A good example is Ending Headcount – the number of people employed/contracted at the end of a given period.\\n\\nWhereas it is possible to calculate headcount for any period, practical options include hours, days, months, quarters and years.\\n\\nExperience shows that we use two sets of point in time headcount measures:\\n\\nOpen/Closing headcounts and,\\nStarting/Ending headcounts.\\nOpening Headcount quantifies the number of people brought forward from the previous period. Closing Headcount quantifies the number of people carried forward into the next period.\\n\\nStarting Headcount quantifies the number of people available for work from the start of a period. This measure includes people who were available for work from the beginning of a period but were not brought forward from the previous period (i.e. joined the workforce in the respective period). Ending Headcount represents the number of people available for work until the end of a period. This measure includes people who worked until the end of the period but were not carried forward into the next period (i.e. left the workforce in the respective period).\\n\\nAn accountant may think in terms of brought/carry forward counts (i.e. reconciling headcounts from one period to the next). A manager may think in terms of start/end counts (i.e. the number of people available for work).\\n\\nThe following simple line chart presents the monthly point in time headcounts for a given year. It is useful for displaying one maybe two measures but becomes confusing if we show more. You can click on the legend items to show/hide individual measures.\\n\\nThe challenge with this chart is that whereas we can quickly determine the change in individual measures across time, it is difficult to understand the relationships between them.\\n\\n---\\n\\nThis chart displays 'point in time' headcounts by month for a given calendar year using a line chart from the Chart.js library.\\n\\nIt includes all four 'point in time' measures (Opening Headcount, Starting Headcount, Ending Headcount and Closing Headcount). Initially, only Ending Headcount is visible. You can click the legend items to toggle the visibility of individual measures.\\n\\nIt excels at visualising a single headcount measure over time. It can also be used to compare multiple headcounts but quickly becomes confusing if three or more are visible at once.\\n\\nA non-zero baseline is preferred in this case to emphasise the change in headcount values over time.\\n\\nArea, bar and radar versions are also possible.\\n\\n---\\n\\nThe actual (physical) number of people in the workforce at a specific point in time. Values are calculated in terms of reporting periods (days, shifts, rotations, pay periods, weeks, fortnights, 4 week durations, months, quarters, years...). Opening/closing values represent the headcount as a period opens (bring forward) and closes (carry forward). Starting/ending values represent the headcount at the point the period starts and ends.\\n\\n```javascript\\nconst items = [];\\nlet count = 0;\\nfor (const item of items) {\\n    count++;\\n}\\nconsole.log('A very long line of text that will test how the code block wraps on narrow screens, hope this works.');\\nconsole.log(count);\\n```\\n\\n```formula\\n{\\\"expression\\\":\\\"Termination Rate=Average Headcount/Terminations*100'\\\"}\\n```\\n\\n> A blockquote...\\n\\n- Unordered list 1\\n- Unordered list 2\\n- Unordered list 3\\n- Unordered list 4\\n- Unordered list 5\\n\\n1. Ordered list 1\\n1. Unordered list 2\\n1. Unordered list 3\\n1. Unordered list 4\\n1. Unordered list 5\\n\\n| Col 1       | Col 2       |\\n| ----------- | ----------- |\\n| Row 1 Val 1 | Row 1 Val 2 |\\n| Row 2 Val 1 | Row 2 Val 2 |\\n| Row 3 Val 1 | Row 3 Val 2 |\\n| Row 4 Val 1 | Row 4 Val 2 |\\n| Row 5 Val 1 | Row 5 Val 2 |\\n\"}")
}, N = {
	year: 2023,
	months: [
		{
			month: 1,
			openingHeadcount: 1105,
			openingFTE: 0,
			startingHires: 0,
			startingFTE: 0,
			hires: 23,
			newHires: 22,
			rehires: 1,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 18,
			averageHeadcount: 1108.1935483870966,
			fte: 1090.2701774193545,
			endingFTE: 0,
			endingTerminations: 2,
			closingFTE: 0,
			closingHeadcount: 1110
		},
		{
			month: 2,
			openingHeadcount: 1110,
			openingFTE: 0,
			startingHires: 1,
			startingFTE: 0,
			hires: 18,
			newHires: 14,
			rehires: 4,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 19,
			averageHeadcount: 1113.4482758620695,
			fte: 1095.128286206897,
			endingFTE: 0,
			endingTerminations: 1,
			closingFTE: 0,
			closingHeadcount: 1109
		},
		{
			month: 3,
			openingHeadcount: 1109,
			openingFTE: 0,
			startingHires: 0,
			startingFTE: 0,
			hires: 38,
			newHires: 34,
			rehires: 4,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 18,
			averageHeadcount: 1121.967741935484,
			fte: 1103.577693548387,
			endingFTE: 0,
			endingTerminations: 5,
			closingFTE: 0,
			closingHeadcount: 1129
		},
		{
			month: 4,
			openingHeadcount: 1129,
			openingFTE: 0,
			startingHires: 3,
			startingFTE: 0,
			hires: 22,
			newHires: 22,
			rehires: 0,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 22,
			averageHeadcount: 1132.3999999999996,
			fte: 1114.0404999999998,
			endingFTE: 0,
			endingTerminations: 5,
			closingFTE: 0,
			closingHeadcount: 1129
		},
		{
			month: 5,
			openingHeadcount: 1129,
			openingFTE: 0,
			startingHires: 1,
			startingFTE: 0,
			hires: 26,
			newHires: 24,
			rehires: 2,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 21,
			averageHeadcount: 1134.7419354838717,
			fte: 1114.941145161291,
			endingFTE: 0,
			endingTerminations: 2,
			closingFTE: 0,
			closingHeadcount: 1134
		},
		{
			month: 6,
			openingHeadcount: 1134,
			openingFTE: 0,
			startingHires: 17,
			startingFTE: 0,
			hires: 63,
			newHires: 58,
			rehires: 5,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 25,
			averageHeadcount: 1160.333333333332,
			fte: 1139.8760233333317,
			endingFTE: 0,
			endingTerminations: 4,
			closingFTE: 0,
			closingHeadcount: 1172
		},
		{
			month: 7,
			openingHeadcount: 1172,
			openingFTE: 0,
			startingHires: 2,
			startingFTE: 0,
			hires: 42,
			newHires: 38,
			rehires: 4,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 41,
			averageHeadcount: 1175.5483870967737,
			fte: 1155.5572387096768,
			endingFTE: 0,
			endingTerminations: 4,
			closingFTE: 0,
			closingHeadcount: 1173
		},
		{
			month: 8,
			openingHeadcount: 1173,
			openingFTE: 0,
			startingHires: 1,
			startingFTE: 0,
			hires: 37,
			newHires: 32,
			rehires: 5,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 34,
			averageHeadcount: 1180.0967741935488,
			fte: 1160.2840935483875,
			endingFTE: 0,
			endingTerminations: 0,
			closingFTE: 0,
			closingHeadcount: 1176
		},
		{
			month: 9,
			openingHeadcount: 1176,
			openingFTE: 0,
			startingHires: 16,
			startingFTE: 0,
			hires: 41,
			newHires: 38,
			rehires: 3,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 31,
			averageHeadcount: 1189.5999999999995,
			fte: 1170.280466666666,
			endingFTE: 0,
			endingTerminations: 6,
			closingFTE: 0,
			closingHeadcount: 1186
		},
		{
			month: 10,
			openingHeadcount: 1186,
			openingFTE: 0,
			startingHires: 4,
			startingFTE: 0,
			hires: 23,
			newHires: 21,
			rehires: 2,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 20,
			averageHeadcount: 1190.0000000000002,
			fte: 1170.4818612903225,
			endingFTE: 0,
			endingTerminations: 0,
			closingFTE: 0,
			closingHeadcount: 1189
		},
		{
			month: 11,
			openingHeadcount: 1189,
			openingFTE: 0,
			startingHires: 0,
			startingFTE: 0,
			hires: 45,
			newHires: 44,
			rehires: 1,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 21,
			averageHeadcount: 1199.866666666667,
			fte: 1180.5033666666668,
			endingFTE: 0,
			endingTerminations: 4,
			closingFTE: 0,
			closingHeadcount: 1213
		},
		{
			month: 12,
			openingHeadcount: 1213,
			openingFTE: 0,
			startingHires: 1,
			startingFTE: 0,
			hires: 13,
			newHires: 13,
			rehires: 0,
			inPeriodHeadcount: 0,
			distinctPeriodHeadcount: 0,
			terminations: 15,
			averageHeadcount: 1216.0645161290317,
			fte: 1196.9270225806447,
			endingFTE: 0,
			endingTerminations: 6,
			closingFTE: 0,
			closingHeadcount: 1211
		}
	]
};
//#endregion
//#region src/composers/useSampleData.ts
function Xe() {
	return { getMeasureValues: Ze };
}
function Ze(e) {
	return N.months.map((t) => e.map((e) => P(e, t)));
}
function P(e, t) {
	switch (e) {
		case "startingHeadcount": return (t.openingHeadcount || 0) + (t.startingHires || 0);
		case "endingHeadcount": return (t.closingHeadcount || 0) + (t.endingTerminations || 0);
		default: return t[e] ?? 0;
	}
}
//#endregion
//#region src/index.ts
var Qe = class {
	config;
	colorModeId;
	sampleData;
	toolConfigs;
	highchartsTool;
	micromarkTool;
	constructor(e, t) {
		this.config = Ye, this.toolConfigs = e, this.colorModeId = t, this.sampleData = Xe();
	}
	list() {
		return this.config.presentations;
	}
	async render(e, t, n) {
		let r = e.path, i = e.label;
		e.description;
		let a = M[r].content;
		a = a.replaceAll("{{label}}", () => i), this.micromarkTool = await this.loadMicromarkTool();
		let o = await this.micromarkTool.render(a, {
			directives: !0,
			tables: !0
		});
		t.innerHTML = j.sanitize(o), await this.micromarkTool.highlight(t, this.colorModeId), this.highchartsTool = await this.loadHighchartsTool(), this.highchartsTool.setColorMode(this.colorModeId);
		for (let e of t.querySelectorAll(".dpuse-highcharts")) try {
			let t = decodeURIComponent(e.dataset.options ?? ""), n = JSON.parse(t), r = document.createElement("div");
			e.append(r), await this.highchartsTool.render(n, r);
		} catch (e) {
			console.log(999, e);
		}
		for (let e of t.querySelectorAll(".dpuse-visual")) {
			let t = decodeURIComponent(e.dataset.options ?? "");
			try {
				let r = JSON.parse(t);
				if (!n) for (let e of r.content.data.measures) e.values = this.sampleData.getMeasureValues([e.id]);
				let i = document.createElement("div");
				i.className = "dp-tab-bar";
				let a = document.createElement("div"), o, s;
				for (let e of r.views) {
					let t = this.createVisualViewTab(e, r, a);
					t && ((!s || t.isDefault) && (o = t.categoryId, s = t.typeId), i.append(t.element));
				}
				e.append(i), e.append(a), await this.renderDefaultVisualView(o, s, r, a);
			} catch (t) {
				console.error(t), e.textContent = "Invalid options.";
			}
		}
	}
	setColorMode(e) {
		this.colorModeId = e, this.micromarkTool && this.micromarkTool.setColorMode(this.colorModeId), this.highchartsTool && this.highchartsTool.setColorMode(this.colorModeId);
	}
	createVisualViewTab(e, t, n) {
		let r = e.categoryId, i = document.createElement("div");
		switch (r) {
			case "cartesianChart": {
				let a = e;
				return i.textContent = a.typeId, i.addEventListener("click", () => this.highchartsTool?.renderCartesianChart(a.typeId, t.content, n)), {
					element: i,
					categoryId: r,
					typeId: a.typeId,
					isDefault: a.default
				};
			}
			case "periodFlowBoundariesChart": {
				let a = e;
				return i.textContent = r, i.addEventListener("click", () => {
					this.highchartsTool?.renderPeriodFlowBoundaries(t.content, n);
				}), {
					element: i,
					categoryId: r,
					isDefault: a.default
				};
			}
			case "polarChart": {
				let a = e;
				return i.textContent = a.typeId, i.addEventListener("click", () => {
					this.highchartsTool?.renderPolarChart(a.typeId, t.content, n);
				}), {
					element: i,
					categoryId: r,
					typeId: a.typeId,
					isDefault: a.default
				};
			}
			case "rangeChart": {
				let a = e;
				return i.textContent = a.typeId, i.addEventListener("click", () => {
					this.highchartsTool?.renderRangeChart(a.typeId, t.content, n);
				}), {
					element: i,
					categoryId: r,
					typeId: a.typeId,
					isDefault: a.default
				};
			}
			default: return;
		}
	}
	async renderDefaultVisualView(e, t, n, r) {
		if (this.highchartsTool) switch (e) {
			case "cartesianChart":
				this.highchartsTool.renderCartesianChart(t, n.content, r);
				break;
			case "periodFlowBoundariesChart":
				await this.highchartsTool.renderPeriodFlowBoundaries(n.content, r);
				break;
			case "polarChart":
				await this.highchartsTool.renderPolarChart(t, n.content, r);
				break;
			case "rangeChart": await this.highchartsTool.renderRangeChart(t, n.content, r);
		}
	}
	async loadHighchartsTool() {
		if (this.highchartsTool) return this.highchartsTool;
		let e = this.toolConfigs.find((e) => e.id === "dpuse-tool-highcharts-visualiser");
		if (!e) throw Error("No Highcharts tool module configuration.");
		let t = (await import(
			/* @vite-ignore */
			`https://engine-eu.dpuse.app/tools/highcharts-visualiser_v${e.version}/dpuse-tool-highcharts-visualiser.es.js`
)).HighchartsTool;
		return new t();
	}
	async loadMicromarkTool() {
		if (this.micromarkTool) return this.micromarkTool;
		let e = this.toolConfigs.find((e) => e.id === "dpuse-tool-micromark-markdown-parser");
		if (!e) throw Error("No Micromark tool module configuration.");
		let t = (await import(
			/* @vite-ignore */
			`https://engine-eu.dpuse.app/tools/micromark-markdown-parser_v${e.version}/dpuse-tool-micromark-markdown-parser.es.js`
)).MicromarkTool;
		return new t();
	}
};
//#endregion
export { Qe as default };
