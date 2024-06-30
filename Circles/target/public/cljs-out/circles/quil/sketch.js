// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5720__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var inner_canvas = el.querySelector("canvas");
inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__12090 = arguments.length;
switch (G__12090) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__12092 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__12093 = null;
var count__12094 = (0);
var i__12095 = (0);
while(true){
if((i__12095 < count__12094)){
var vec__12096 = chunk__12093.cljs$core$IIndexed$_nth$arity$2(null,i__12095);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12096,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12096,(1),null);
var temp__5720__auto___12104 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___12104)){
var handler_12105 = temp__5720__auto___12104;
(prc[cljs.core.name(processing_name)] = ((function (seq__12092,chunk__12093,count__12094,i__12095,handler_12105,temp__5720__auto___12104,vec__12096,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_12099 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_12105.cljs$core$IFn$_invoke$arity$0 ? handler_12105.cljs$core$IFn$_invoke$arity$0() : handler_12105.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_12099;
}});})(seq__12092,chunk__12093,count__12094,i__12095,handler_12105,temp__5720__auto___12104,vec__12096,processing_name,quil_name))
);
} else {
}


var G__12106 = seq__12092;
var G__12107 = chunk__12093;
var G__12108 = count__12094;
var G__12109 = (i__12095 + (1));
seq__12092 = G__12106;
chunk__12093 = G__12107;
count__12094 = G__12108;
i__12095 = G__12109;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12092);
if(temp__5720__auto__){
var seq__12092__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12092__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12092__$1);
var G__12110 = cljs.core.chunk_rest(seq__12092__$1);
var G__12111 = c__4351__auto__;
var G__12112 = cljs.core.count(c__4351__auto__);
var G__12113 = (0);
seq__12092 = G__12110;
chunk__12093 = G__12111;
count__12094 = G__12112;
i__12095 = G__12113;
continue;
} else {
var vec__12100 = cljs.core.first(seq__12092__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12100,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12100,(1),null);
var temp__5720__auto___12114__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___12114__$1)){
var handler_12115 = temp__5720__auto___12114__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__12092,chunk__12093,count__12094,i__12095,handler_12115,temp__5720__auto___12114__$1,vec__12100,processing_name,quil_name,seq__12092__$1,temp__5720__auto__){
return (function (){
var _STAR_applet_STAR_12103 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_12115.cljs$core$IFn$_invoke$arity$0 ? handler_12115.cljs$core$IFn$_invoke$arity$0() : handler_12115.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_12103;
}});})(seq__12092,chunk__12093,count__12094,i__12095,handler_12115,temp__5720__auto___12114__$1,vec__12100,processing_name,quil_name,seq__12092__$1,temp__5720__auto__))
);
} else {
}


var G__12116 = cljs.core.next(seq__12092__$1);
var G__12117 = null;
var G__12118 = (0);
var G__12119 = (0);
seq__12092 = G__12116;
chunk__12093 = G__12117;
count__12094 = G__12118;
i__12095 = G__12119;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__3949__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__12121_12127 = window;
var G__12122_12128 = goog.events.EventType.KEYDOWN;
var G__12123_12129 = ((function (G__12121_12127,G__12122_12128,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__12121_12127,G__12122_12128,old_size,adjust_canvas_size))
;
goog.events.listen(G__12121_12127,G__12122_12128,G__12123_12129);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__12124 = document;
var G__12125 = "fullscreenerror";
var G__12126 = ((function (G__12124,G__12125,old_size,adjust_canvas_size){
return (function (p1__12120_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__12120_SHARP_);
});})(G__12124,G__12125,old_size,adjust_canvas_size))
;
return goog.events.listen(G__12124,G__12125,G__12126);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__12132 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__12131 = ((function (G__12132){
return (function (p1__12130_SHARP_){
return (p1__12130_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12130_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__12130_SHARP_.call(null,options));
});})(G__12132))
;
return fexpr__12131(G__12132);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__12133_12137 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__12133_12137.cljs$core$IFn$_invoke$arity$0 ? fexpr__12133_12137.cljs$core$IFn$_invoke$arity$0() : fexpr__12133_12137.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__12134 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__12134.cljs$core$IFn$_invoke$arity$0 ? fexpr__12134.cljs$core$IFn$_invoke$arity$0() : fexpr__12134.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__12136 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__12135 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__12135.cljs$core$IFn$_invoke$arity$1 ? fexpr__12135.cljs$core$IFn$_invoke$arity$1(G__12136) : fexpr__12135.call(null,G__12136));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5720__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5720__auto__)){
var proc_obj = temp__5720__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12139 = arguments.length;
var i__4532__auto___12140 = (0);
while(true){
if((i__4532__auto___12140 < len__4531__auto___12139)){
args__4534__auto__.push((arguments[i__4532__auto___12140]));

var G__12141 = (i__4532__auto___12140 + (1));
i__4532__auto___12140 = G__12141;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__3949__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq12138){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12138));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__12148 = quil.sketch.empty_body_QMARK_();
var seq__12142_12149 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__12143_12150 = null;
var count__12144_12151 = (0);
var i__12145_12152 = (0);
while(true){
if((i__12145_12152 < count__12144_12151)){
var sk_12153 = chunk__12143_12150.cljs$core$IIndexed$_nth$arity$2(null,i__12145_12152);
if(cljs.core.truth_(add_elem_QMARK__12148)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_12153));
} else {
}

var fexpr__12146_12154 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_12153);
(fexpr__12146_12154.cljs$core$IFn$_invoke$arity$0 ? fexpr__12146_12154.cljs$core$IFn$_invoke$arity$0() : fexpr__12146_12154.call(null));


var G__12155 = seq__12142_12149;
var G__12156 = chunk__12143_12150;
var G__12157 = count__12144_12151;
var G__12158 = (i__12145_12152 + (1));
seq__12142_12149 = G__12155;
chunk__12143_12150 = G__12156;
count__12144_12151 = G__12157;
i__12145_12152 = G__12158;
continue;
} else {
var temp__5720__auto___12159 = cljs.core.seq(seq__12142_12149);
if(temp__5720__auto___12159){
var seq__12142_12160__$1 = temp__5720__auto___12159;
if(cljs.core.chunked_seq_QMARK_(seq__12142_12160__$1)){
var c__4351__auto___12161 = cljs.core.chunk_first(seq__12142_12160__$1);
var G__12162 = cljs.core.chunk_rest(seq__12142_12160__$1);
var G__12163 = c__4351__auto___12161;
var G__12164 = cljs.core.count(c__4351__auto___12161);
var G__12165 = (0);
seq__12142_12149 = G__12162;
chunk__12143_12150 = G__12163;
count__12144_12151 = G__12164;
i__12145_12152 = G__12165;
continue;
} else {
var sk_12166 = cljs.core.first(seq__12142_12160__$1);
if(cljs.core.truth_(add_elem_QMARK__12148)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_12166));
} else {
}

var fexpr__12147_12167 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_12166);
(fexpr__12147_12167.cljs$core$IFn$_invoke$arity$0 ? fexpr__12147_12167.cljs$core$IFn$_invoke$arity$0() : fexpr__12147_12167.call(null));


var G__12168 = cljs.core.next(seq__12142_12160__$1);
var G__12169 = null;
var G__12170 = (0);
var G__12171 = (0);
seq__12142_12149 = G__12168;
chunk__12143_12150 = G__12169;
count__12144_12151 = G__12170;
i__12145_12152 = G__12171;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
