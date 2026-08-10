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
var o = Object.entries, s = Object.setPrototypeOf, c = Object.isFrozen, l = Object.getPrototypeOf, u = Object.getOwnPropertyDescriptor, d = Object.freeze, f = Object.seal, p = Object.create, m = typeof Reflect < "u" && Reflect, h = m.apply, ee = m.construct;
d ||= function(e) {
	return e;
}, f ||= function(e) {
	return e;
}, h ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, ee ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var g = T(Array.prototype.forEach), te = T(Array.prototype.lastIndexOf), ne = T(Array.prototype.pop), _ = T(Array.prototype.push), re = T(Array.prototype.splice), v = Array.isArray, ie = T(String.prototype.toLowerCase), ae = T(String.prototype.toString), oe = T(String.prototype.match), se = T(String.prototype.replace), ce = T(String.prototype.indexOf), le = T(String.prototype.trim), ue = T(Number.prototype.toString), de = T(Boolean.prototype.toString), y = typeof BigInt > "u" ? null : T(BigInt.prototype.toString), b = typeof Symbol > "u" ? null : T(Symbol.prototype.toString), x = T(Object.prototype.hasOwnProperty), S = T(Object.prototype.toString), C = T(RegExp.prototype.test), w = E(TypeError);
function T(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return h(e, t, n);
	};
}
function E(e) {
	return function() {
		return ee(e, [...arguments]);
	};
}
function D(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ie;
	if (s && s(e, null), !v(t)) return e;
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
function O(e) {
	for (let t = 0; t < e.length; t++) x(e, t) || (e[t] = null);
	return e;
}
function k(e) {
	let t = p(null);
	for (let r of o(e)) {
		var n = i(r, 2);
		let a = n[0], o = n[1];
		x(e, a) && (t[a] = v(o) ? O(o) : o && typeof o == "object" && o.constructor === Object ? k(o) : o);
	}
	return t;
}
function fe(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return ue(e);
		case "boolean": return de(e);
		case "bigint": return y ? y(e) : "0";
		case "symbol": return b ? b(e) : "Symbol()";
		case "undefined": return S(e);
		case "function":
		case "object": {
			if (e === null) return S(e);
			let t = e, n = A(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : S(e);
			}
			return S(e);
		}
		default: return S(e);
	}
}
function A(e, t) {
	for (; e !== null;) {
		let n = u(e, t);
		if (n) {
			if (n.get) return T(n.get);
			if (typeof n.value == "function") return T(n.value);
		}
		e = l(e);
	}
	function n() {
		return null;
	}
	return n;
}
function pe(e) {
	try {
		return C(e, ""), !0;
	} catch {
		return !1;
	}
}
var me = d(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), he = d(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), ge = d([
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
]), _e = d([
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
]), ve = d(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), ye = d([
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
]), be = d(["#text"]), xe = d(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), Se = d(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ce = d(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), we = d([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Te = f(/{{[\w\W]*|^[\w\W]*}}/g), Ee = f(/<%[\w\W]*|^[\w\W]*%>/g), De = f(/\${[\w\W]*/g), Oe = f(/^data-[\-\w.\u00B7-\uFFFF]+$/), ke = f(/^aria-[\-\w]+$/), Ae = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), je = f(/^(?:\w+script|data):/i), Me = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ne = f(/^html$/i), Pe = f(/^[a-z][.\w]*(-[.\w]+)+$/i), Fe = f(/<[/\w!]/g), Ie = f(/<[/\w]/g), Le = f(/<\/no(script|embed|frames)/i), Re = f(/\/>/i), j = {
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
}, ze = function() {
	return typeof window > "u" ? null : window;
}, Be = function(e, t) {
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
}, Ve = function() {
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
}, M = function(e, t, n, r) {
	return x(e, t) && v(e[t]) ? D(r.base ? k(r.base) : {}, e[t], r.transform) : n;
};
function He() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ze(), t = (e) => He(e);
	if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== j.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, s = e.Node, c = e.Element, l = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let u = e.DOMParser, m = e.trustedTypes, h = c.prototype, ee = A(h, "cloneNode"), ue = A(h, "remove"), de = A(h, "nextSibling"), y = A(h, "childNodes"), b = A(h, "parentNode"), S = A(h, "shadowRoot"), T = A(h, "attributes"), E = s && s.prototype ? A(s.prototype, "nodeType") : null, O = s && s.prototype ? A(s.prototype, "nodeName") : null, Ue = s && s.prototype ? A(s.prototype, "ownerDocument") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let N, P = "", We, Ge = !1, F = 0, Ke = function() {
		if (F > 0) throw w("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, I = function(e) {
		Ke(), F++;
		try {
			return N.createHTML(e);
		} finally {
			F--;
		}
	}, qe = function(e) {
		Ke(), F++;
		try {
			return N.createScriptURL(e);
		} finally {
			F--;
		}
	}, Je = function() {
		return Ge ||= (We = Be(m, i), !0), We;
	}, Ye = n, Xe = Ye.implementation, Ze = Ye.createNodeIterator, Qe = Ye.createDocumentFragment, $e = Ye.getElementsByTagName, et = r.importNode, L = Ve();
	t.isSupported = typeof o == "function" && typeof b == "function" && Xe && Xe.createHTMLDocument !== void 0;
	let tt = Te, nt = Ee, rt = De, it = Oe, at = ke, ot = je, st = Me, ct = Pe, lt = Ae, R = null, ut = D({}, [
		...me,
		...he,
		...ge,
		...ve,
		...be
	]), z = null, dt = D({}, [
		...xe,
		...Se,
		...Ce,
		...we
	]), B = Object.seal(p(null, {
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
	})), ft = null, pt = null, V = Object.seal(p(null, {
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
	})), mt = !0, ht = !0, gt = !1, _t = !0, H = !1, U = !0, W = !1, vt = !1, yt = null, bt = null, xt = !1, G = !1, St = !1, Ct = !1, wt = !0, Tt = !1, Et = "user-content-", Dt = !0, Ot = !1, K = {}, q = null, kt = D({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), At = null, jt = D({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Mt = null, Nt = D({}, [
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
	]), Pt = "http://www.w3.org/1998/Math/MathML", Ft = "http://www.w3.org/2000/svg", J = "http://www.w3.org/1999/xhtml", Y = J, It = !1, Lt = null, Rt = D({}, [
		Pt,
		Ft,
		J
	], ae), zt = d([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Bt = D({}, zt), Vt = d(["annotation-xml"]), Ht = D({}, Vt), Ut = D({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Wt = null, Gt = ["application/xhtml+xml", "text/html"], X = null, Kt = null, qt = n.createElement("form"), Jt = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Yt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Kt && Kt === e) return;
		(!e || typeof e != "object") && (e = {}), e = k(e), Wt = Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, X = Wt === "application/xhtml+xml" ? ae : ie, R = M(e, "ALLOWED_TAGS", ut, { transform: X }), z = M(e, "ALLOWED_ATTR", dt, { transform: X }), Lt = M(e, "ALLOWED_NAMESPACES", Rt, { transform: ae }), Mt = M(e, "ADD_URI_SAFE_ATTR", Nt, {
			transform: X,
			base: Nt
		}), At = M(e, "ADD_DATA_URI_TAGS", jt, {
			transform: X,
			base: jt
		}), q = M(e, "FORBID_CONTENTS", kt, { transform: X }), ft = M(e, "FORBID_TAGS", k({}), { transform: X }), pt = M(e, "FORBID_ATTR", k({}), { transform: X }), K = x(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? k(e.USE_PROFILES) : e.USE_PROFILES : !1, mt = e.ALLOW_ARIA_ATTR !== !1, ht = e.ALLOW_DATA_ATTR !== !1, gt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = e.SAFE_FOR_TEMPLATES || !1, U = e.SAFE_FOR_XML !== !1, W = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, St = e.RETURN_DOM_FRAGMENT || !1, Ct = e.RETURN_TRUSTED_TYPE || !1, xt = e.FORCE_BODY || !1, wt = e.SANITIZE_DOM !== !1, Tt = e.SANITIZE_NAMED_PROPS || !1, Dt = e.KEEP_CONTENT !== !1, Ot = e.IN_PLACE || !1, lt = pe(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Ae, Y = typeof e.NAMESPACE == "string" ? e.NAMESPACE : J, Bt = x(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? k(e.MATHML_TEXT_INTEGRATION_POINTS) : D({}, zt), Ht = x(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? k(e.HTML_INTEGRATION_POINTS) : D({}, Vt);
		let t = x(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? k(e.CUSTOM_ELEMENT_HANDLING) : p(null);
		if (B = p(null), x(t, "tagNameCheck") && Jt(t.tagNameCheck) && (B.tagNameCheck = t.tagNameCheck), x(t, "attributeNameCheck") && Jt(t.attributeNameCheck) && (B.attributeNameCheck = t.attributeNameCheck), x(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), f(B), H && (ht = !1), St && (G = !0), K && (R = D({}, be), z = p(null), K.html === !0 && (D(R, me), D(z, xe)), K.svg === !0 && (D(R, he), D(z, Se), D(z, we)), K.svgFilters === !0 && (D(R, ge), D(z, Se), D(z, we)), K.mathMl === !0 && (D(R, ve), D(z, Ce), D(z, we))), V.tagCheck = null, V.attributeCheck = null, x(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? V.tagCheck = e.ADD_TAGS : v(e.ADD_TAGS) && (R === ut && (R = k(R)), D(R, e.ADD_TAGS, X))), x(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? V.attributeCheck = e.ADD_ATTR : v(e.ADD_ATTR) && (z === dt && (z = k(z)), D(z, e.ADD_ATTR, X))), x(e, "ADD_URI_SAFE_ATTR") && v(e.ADD_URI_SAFE_ATTR) && D(Mt, e.ADD_URI_SAFE_ATTR, X), x(e, "FORBID_CONTENTS") && v(e.FORBID_CONTENTS) && (q === kt && (q = k(q)), D(q, e.FORBID_CONTENTS, X)), x(e, "ADD_FORBID_CONTENTS") && v(e.ADD_FORBID_CONTENTS) && (q === kt && (q = k(q)), D(q, e.ADD_FORBID_CONTENTS, X)), Dt && (R["#text"] = !0), W && D(R, [
			"html",
			"head",
			"body"
		]), R.table && (D(R, ["tbody"]), delete ft.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw w("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw w("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = N;
			N = e.TRUSTED_TYPES_POLICY;
			try {
				P = I("");
			} catch (e) {
				throw N = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (N = void 0, P = "") : (N === void 0 && (N = Je()), N && typeof P == "string" && (P = I("")));
		d && d(e), Kt = e;
	}, Xt = D({}, [
		...he,
		...ge,
		..._e
	]), Zt = D({}, [...ve, ...ye]), Qt = function(e, t, n) {
		return t.namespaceURI === J ? e === "svg" : t.namespaceURI === Pt ? e === "svg" && (n === "annotation-xml" || Bt[n]) : !!Xt[e];
	}, $t = function(e, t, n) {
		return t.namespaceURI === J ? e === "math" : t.namespaceURI === Ft ? e === "math" && Ht[n] : !!Zt[e];
	}, en = function(e, t, n) {
		return t.namespaceURI === Ft && !Ht[n] || t.namespaceURI === Pt && !Bt[n] ? !1 : !Zt[e] && (Ut[e] || !Xt[e]);
	}, tn = function(e) {
		let t = b(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Y,
			tagName: "template"
		});
		let n = ie(e.tagName), r = ie(t.tagName);
		return Lt[e.namespaceURI] ? e.namespaceURI === Ft ? Qt(n, t, r) : e.namespaceURI === Pt ? $t(n, t, r) : e.namespaceURI === J ? en(n, t, r) : !!(Wt === "application/xhtml+xml" && Lt[e.namespaceURI]) : !1;
	}, Z = function(e) {
		_(t.removed, { element: e });
		try {
			b(e).removeChild(e);
		} catch {
			if (ue(e), !b(e)) throw w("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, nn = function(e) {
		an(e);
		let t = y(e);
		if (t) {
			let e = [];
			g(t, (t) => {
				_(e, t);
			}), g(e, (e) => {
				try {
					ue(e);
				} catch {}
			});
		}
		let n = T(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, Q = function(e, n) {
		try {
			_(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			_(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (G || St) try {
			Z(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, rn = function(e) {
		let t = T(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || z[X(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, an = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(E ? E(e) : e.nodeType) === j.element && rn(e);
			let n = y(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, on = function(e) {
		if (!U) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = E ? E(e) : e.nodeType;
			if (n === j.processingInstruction || n === j.comment && C(Ie, e.data)) {
				try {
					ue(e);
				} catch {}
				continue;
			}
			if (n === j.element) {
				let t = e, n = X(O ? O(e) : e.nodeName);
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
				} catch {}
			}
			let r = y(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, sn = function(e) {
		let t = null, r = null;
		if (xt) e = "<remove></remove>" + e;
		else {
			let t = oe(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Wt === "application/xhtml+xml" && Y === J && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = N ? I(e) : e;
		if (Y === J) try {
			t = new u().parseFromString(i, Wt);
		} catch {}
		if (!t || !t.documentElement) {
			t = Xe.createDocument(Y, "template", null);
			try {
				t.documentElement.innerHTML = It ? P : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Y === J ? $e.call(t, W ? "html" : "body")[0] : W ? t.documentElement : a;
	}, cn = function(e) {
		let t = Ue ? Ue(e) : e.ownerDocument;
		return Ze.call(t || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, ln = function(e) {
		return e = se(e, tt, " "), e = se(e, nt, " "), e = se(e, rt, " "), e;
	}, un = function(e) {
		e.normalize();
		let t = Ue ? Ue(e) : e.ownerDocument, n = Ze.call(t || e, e, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = ln(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && g(i, (e) => {
			fn(e.content) && un(e.content);
		});
	}, dn = function(e) {
		let t = O ? O(e) : null;
		return typeof t != "string" || X(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== T(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== E(e) || e.childNodes !== y(e);
	}, fn = function(e) {
		if (!E || typeof e != "object" || !e) return !1;
		try {
			return E(e) === j.documentFragment;
		} catch {
			return !1;
		}
	}, pn = function(e) {
		if (!E || typeof e != "object" || !e) return !1;
		try {
			return typeof E(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && g(e, (e) => {
			e.call(t, n, r, Kt);
		});
	}
	let mn = function(e, t) {
		return !!(U && e.hasChildNodes() && !pn(e.firstElementChild) && C(Fe, e.textContent) && C(Fe, e.innerHTML) || U && e.namespaceURI === J && t === "style" && pn(e.firstElementChild) || e.nodeType === j.processingInstruction || U && e.nodeType === j.comment && C(Ie, e.data));
	}, hn = function(e, t, n) {
		if (!ft[t] && bn(t) && (B.tagNameCheck instanceof RegExp && C(B.tagNameCheck, t) || B.tagNameCheck instanceof Function && B.tagNameCheck(t))) return !1;
		if (Dt && !q[t]) {
			let t = b(e), r = y(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? ee(r[a], !0) : r[a];
					t.insertBefore(i, de(e));
				}
			}
		}
		return Z(e), !0;
	}, gn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? k(t) : t;
	}, _n = function(e, n) {
		if ($(L.beforeSanitizeElements, e, null), e !== n && b(e) === null) return Ot && an(e), !0;
		if (dn(e)) return Z(e), !0;
		let r = X(O ? O(e) : e.nodeName);
		if (R = gn(L.uponSanitizeElement, R, ut, yt), $(L.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: R
		}), e !== n && b(e) === null) return Ot && an(e), !0;
		if (mn(e, r)) return Z(e), !0;
		if (ft[r] || !(V.tagCheck instanceof Function && V.tagCheck(r)) && !R[r]) {
			let t = hn(e, r, n);
			return t === !1 && $(L.afterSanitizeElements, e, null), t;
		}
		if ((E ? E(e) : e.nodeType) === j.element && !tn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && C(Le, e.innerHTML)) return Z(e), !0;
		if (H && e.nodeType === j.text) {
			let n = ln(e.textContent);
			e.textContent !== n && (_(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(L.afterSanitizeElements, e, null), !1;
	}, vn = function(e, t, r) {
		if (pt[t] || U && t === "patchsrc" || U && t === "for" && e !== "label" && e !== "output" || wt && (t === "id" || t === "name") && (r in n || r in qt)) return !1;
		let i = z[t] || V.attributeCheck instanceof Function && V.attributeCheck(t, e);
		if (!(ht && C(it, t)) && !(mt && C(at, t))) {
			if (!i) {
				if (!(bn(e) && (B.tagNameCheck instanceof RegExp && C(B.tagNameCheck, e) || B.tagNameCheck instanceof Function && B.tagNameCheck(e)) && (B.attributeNameCheck instanceof RegExp && C(B.attributeNameCheck, t) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(t, e)) || t === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && C(B.tagNameCheck, r) || B.tagNameCheck instanceof Function && B.tagNameCheck(r)))) return !1;
			} else if (!Mt[t] && !C(lt, se(r, st, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && ce(r, "data:") === 0 && At[e]) && !(gt && !C(ot, se(r, st, ""))) && r) return !1;
		}
		return !0;
	}, yn = D({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), bn = function(e) {
		return !yn[ie(e)] && C(ct, e);
	}, xn = function(e, t, n, r) {
		if (N && typeof m == "object" && typeof m.getAttributeType == "function" && !n) switch (m.getAttributeType(e, t)) {
			case "TrustedHTML": return I(r);
			case "TrustedScriptURL": return qe(r);
		}
		return r;
	}, Sn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), dn(e) ? Z(e) : ne(t.removed);
		} catch {
			Q(n, e);
		}
	}, Cn = function(e) {
		$(L.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || dn(e)) return;
		z = gn(L.uponSanitizeAttribute, z, dt, bt);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: z,
			forceKeepAttr: void 0
		}, r = t.length, i = X(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = X(o), u = c, d = o === "value" ? u : le(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, $(L.uponSanitizeAttribute, e, n), d = n.attrValue, Tt && (l === "id" || l === "name") && ce(d, Et) !== 0 && (Q(o, e), d = Et + d), U && C(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Q(o, e);
				continue;
			}
			if (l === "attributename" && oe(d, "href")) {
				Q(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Q(o, e);
					continue;
				}
				if (!_t && C(Re, d)) {
					Q(o, e);
					continue;
				}
				if (H && (d = ln(d)), !vn(i, l, d)) {
					Q(o, e);
					continue;
				}
				d = xn(i, l, s, d), d !== u && Sn(e, o, s, d);
			}
		}
		$(L.afterSanitizeAttributes, e, null);
	}, wn = function(e) {
		let t = null, n = cn(e);
		for ($(L.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(L.uponSanitizeShadowNode, t, null), _n(t, e), Cn(t), fn(t.content) && wn(t.content), (E ? E(t) : t.nodeType) === j.element) {
			let e = S(t);
			fn(e) && (Tn(e), wn(e));
		}
		$(L.afterSanitizeShadowDOM, e, null);
	}, Tn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				wn(e.shadow);
				continue;
			}
			let n = e.node, r = (E ? E(n) : n.nodeType) === j.element, i = y(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = O ? O(n) : null;
				if (typeof e == "string" && X(e) === "template") {
					let e = n.content;
					fn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = S(n);
				fn(e) && t.push({
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
		if (It = !e, It && (e = "<!-->"), typeof e != "string" && !pn(e) && (e = fe(e), typeof e != "string")) throw w("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		vt ? (R = yt, z = bt) : Yt(n), (L.uponSanitizeElement.length > 0 || L.uponSanitizeAttribute.length > 0) && (R = k(R)), L.uponSanitizeAttribute.length > 0 && (z = k(z)), t.removed = [];
		let c = Ot && typeof e != "string" && pn(e);
		if (c) {
			on(e);
			let t = O ? O(e) : e.nodeName;
			if (typeof t == "string") {
				let n = X(t);
				if (!R[n] || ft[n]) throw nn(e), w("root node is forbidden and cannot be sanitized in-place");
			}
			if (dn(e)) throw nn(e), w("root node is clobbered and cannot be sanitized in-place");
			try {
				Tn(e);
			} catch (t) {
				throw nn(e), t;
			}
		} else if (pn(e)) i = sn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === j.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Tn(a);
		else {
			if (!G && !H && !W && e.indexOf("<") === -1) return N && Ct ? I(e) : e;
			if (i = sn(e), !i) return G ? null : Ct ? P : "";
		}
		i && xt && Z(i.firstChild);
		let l = c ? e : i;
		try {
			let e = cn(l);
			for (; o = e.nextNode();) _n(o, l), Cn(o), fn(o.content) && wn(o.content);
		} catch (n) {
			throw c && (nn(e), g(t.removed, (e) => {
				e.element && an(e.element);
			})), n;
		}
		if (c) return g(t.removed, (e) => {
			e.element && an(e.element);
		}), H && un(e), e;
		if (G) {
			if (H && un(i), St) for (s = Qe.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (z.shadowroot || z.shadowrootmode) && (s = et.call(r, s, !0)), s;
		}
		let u = W ? i.outerHTML : i.innerHTML;
		return W && R["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && C(Ne, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), H && (u = ln(u)), N && Ct ? I(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Yt(e), vt = !0, yt = R, bt = z;
	}, t.clearConfig = function() {
		Kt = null, vt = !1, yt = null, bt = null, N = We, P = "";
	}, t.isValidAttribute = function(e, t, n) {
		Kt || Yt({});
		let r = X(e), i = X(t);
		return vn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && x(L, e) && _(L[e], t);
	}, t.removeHook = function(e, t) {
		if (x(L, e)) {
			if (t !== void 0) {
				let n = te(L[e], t);
				return n === -1 ? void 0 : re(L[e], n, 1)[0];
			}
			return ne(L[e]);
		}
	}, t.removeHooks = function(e) {
		x(L, e) && (L[e] = []);
	}, t.removeAllHooks = function() {
		L = Ve();
	}, t;
}
var Ue = He(), N = {
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
	version: "0.1.1063",
	usageId: "unknown"
}, P = {
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
}, We = {
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
function Ge() {
	return { getMeasureValues: F };
}
function F(e) {
	return We.months.map((t) => e.map((e) => Ke(e, t)));
}
function Ke(e, t) {
	switch (e) {
		case "startingHeadcount": return (t.openingHeadcount || 0) + (t.startingHires || 0);
		case "endingHeadcount": return (t.closingHeadcount || 0) + (t.endingTerminations || 0);
		default: return t[e] ?? 0;
	}
}
//#endregion
//#region src/index.ts
var I = class {
	config;
	colorModeId;
	sampleData;
	toolConfigs;
	highchartsTool;
	micromarkTool;
	constructor(e, t) {
		this.config = N, this.toolConfigs = e, this.colorModeId = t, this.sampleData = Ge();
	}
	list() {
		return this.config.presentations;
	}
	async render(e, t, n) {
		let r = e.path, i = e.label;
		e.description;
		let a = P[r].content;
		a = a.replaceAll("{{label}}", () => i), this.micromarkTool = await this.loadMicromarkTool();
		let o = await this.micromarkTool.render(a, {
			directives: !0,
			tables: !0
		});
		t.innerHTML = Ue.sanitize(o), await this.micromarkTool.highlight(t, this.colorModeId), this.highchartsTool = await this.loadHighchartsTool(), this.highchartsTool.setColorMode(this.colorModeId);
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
export { I as default };

//# sourceMappingURL=dpuse-presenter-default.es.js.map