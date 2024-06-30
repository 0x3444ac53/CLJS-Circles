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
var G__9401 = arguments.length;
switch (G__9401) {
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
var seq__9403 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__9404 = null;
var count__9405 = (0);
var i__9406 = (0);
while(true){
if((i__9406 < count__9405)){
var vec__9407 = chunk__9404.cljs$core$IIndexed$_nth$arity$2(null,i__9406);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9407,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9407,(1),null);
var temp__5720__auto___9415 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___9415)){
var handler_9416 = temp__5720__auto___9415;
(prc[cljs.core.name(processing_name)] = ((function (seq__9403,chunk__9404,count__9405,i__9406,handler_9416,temp__5720__auto___9415,vec__9407,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_9410 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9416.cljs$core$IFn$_invoke$arity$0 ? handler_9416.cljs$core$IFn$_invoke$arity$0() : handler_9416.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9410;
}});})(seq__9403,chunk__9404,count__9405,i__9406,handler_9416,temp__5720__auto___9415,vec__9407,processing_name,quil_name))
);
} else {
}


var G__9417 = seq__9403;
var G__9418 = chunk__9404;
var G__9419 = count__9405;
var G__9420 = (i__9406 + (1));
seq__9403 = G__9417;
chunk__9404 = G__9418;
count__9405 = G__9419;
i__9406 = G__9420;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__9403);
if(temp__5720__auto__){
var seq__9403__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9403__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__9403__$1);
var G__9421 = cljs.core.chunk_rest(seq__9403__$1);
var G__9422 = c__4351__auto__;
var G__9423 = cljs.core.count(c__4351__auto__);
var G__9424 = (0);
seq__9403 = G__9421;
chunk__9404 = G__9422;
count__9405 = G__9423;
i__9406 = G__9424;
continue;
} else {
var vec__9411 = cljs.core.first(seq__9403__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9411,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9411,(1),null);
var temp__5720__auto___9425__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___9425__$1)){
var handler_9426 = temp__5720__auto___9425__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__9403,chunk__9404,count__9405,i__9406,handler_9426,temp__5720__auto___9425__$1,vec__9411,processing_name,quil_name,seq__9403__$1,temp__5720__auto__){
return (function (){
var _STAR_applet_STAR_9414 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9426.cljs$core$IFn$_invoke$arity$0 ? handler_9426.cljs$core$IFn$_invoke$arity$0() : handler_9426.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9414;
}});})(seq__9403,chunk__9404,count__9405,i__9406,handler_9426,temp__5720__auto___9425__$1,vec__9411,processing_name,quil_name,seq__9403__$1,temp__5720__auto__))
);
} else {
}


var G__9427 = cljs.core.next(seq__9403__$1);
var G__9428 = null;
var G__9429 = (0);
var G__9430 = (0);
seq__9403 = G__9427;
chunk__9404 = G__9428;
count__9405 = G__9429;
i__9406 = G__9430;
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
var G__9432_9438 = window;
var G__9433_9439 = goog.events.EventType.KEYDOWN;
var G__9434_9440 = ((function (G__9432_9438,G__9433_9439,old_size,adjust_canvas_size){
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
});})(G__9432_9438,G__9433_9439,old_size,adjust_canvas_size))
;
goog.events.listen(G__9432_9438,G__9433_9439,G__9434_9440);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__9435 = document;
var G__9436 = "fullscreenerror";
var G__9437 = ((function (G__9435,G__9436,old_size,adjust_canvas_size){
return (function (p1__9431_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__9431_SHARP_);
});})(G__9435,G__9436,old_size,adjust_canvas_size))
;
return goog.events.listen(G__9435,G__9436,G__9437);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__9443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__9442 = ((function (G__9443){
return (function (p1__9441_SHARP_){
return (p1__9441_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9441_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__9441_SHARP_.call(null,options));
});})(G__9443))
;
return fexpr__9442(G__9443);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9444_9448 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__9444_9448.cljs$core$IFn$_invoke$arity$0 ? fexpr__9444_9448.cljs$core$IFn$_invoke$arity$0() : fexpr__9444_9448.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9445 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9445.cljs$core$IFn$_invoke$arity$0 ? fexpr__9445.cljs$core$IFn$_invoke$arity$0() : fexpr__9445.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__9447 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__9446 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9446.cljs$core$IFn$_invoke$arity$1 ? fexpr__9446.cljs$core$IFn$_invoke$arity$1(G__9447) : fexpr__9446.call(null,G__9447));
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
var len__4531__auto___9450 = arguments.length;
var i__4532__auto___9451 = (0);
while(true){
if((i__4532__auto___9451 < len__4531__auto___9450)){
args__4534__auto__.push((arguments[i__4532__auto___9451]));

var G__9452 = (i__4532__auto___9451 + (1));
i__4532__auto___9451 = G__9452;
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
quil.sketch.sketch.cljs$lang$applyTo = (function (seq9449){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9449));
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
var add_elem_QMARK__9459 = quil.sketch.empty_body_QMARK_();
var seq__9453_9460 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__9454_9461 = null;
var count__9455_9462 = (0);
var i__9456_9463 = (0);
while(true){
if((i__9456_9463 < count__9455_9462)){
var sk_9464 = chunk__9454_9461.cljs$core$IIndexed$_nth$arity$2(null,i__9456_9463);
if(cljs.core.truth_(add_elem_QMARK__9459)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9464));
} else {
}

var fexpr__9457_9465 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9464);
(fexpr__9457_9465.cljs$core$IFn$_invoke$arity$0 ? fexpr__9457_9465.cljs$core$IFn$_invoke$arity$0() : fexpr__9457_9465.call(null));


var G__9466 = seq__9453_9460;
var G__9467 = chunk__9454_9461;
var G__9468 = count__9455_9462;
var G__9469 = (i__9456_9463 + (1));
seq__9453_9460 = G__9466;
chunk__9454_9461 = G__9467;
count__9455_9462 = G__9468;
i__9456_9463 = G__9469;
continue;
} else {
var temp__5720__auto___9470 = cljs.core.seq(seq__9453_9460);
if(temp__5720__auto___9470){
var seq__9453_9471__$1 = temp__5720__auto___9470;
if(cljs.core.chunked_seq_QMARK_(seq__9453_9471__$1)){
var c__4351__auto___9472 = cljs.core.chunk_first(seq__9453_9471__$1);
var G__9473 = cljs.core.chunk_rest(seq__9453_9471__$1);
var G__9474 = c__4351__auto___9472;
var G__9475 = cljs.core.count(c__4351__auto___9472);
var G__9476 = (0);
seq__9453_9460 = G__9473;
chunk__9454_9461 = G__9474;
count__9455_9462 = G__9475;
i__9456_9463 = G__9476;
continue;
} else {
var sk_9477 = cljs.core.first(seq__9453_9471__$1);
if(cljs.core.truth_(add_elem_QMARK__9459)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9477));
} else {
}

var fexpr__9458_9478 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9477);
(fexpr__9458_9478.cljs$core$IFn$_invoke$arity$0 ? fexpr__9458_9478.cljs$core$IFn$_invoke$arity$0() : fexpr__9458_9478.call(null));


var G__9479 = cljs.core.next(seq__9453_9471__$1);
var G__9480 = null;
var G__9481 = (0);
var G__9482 = (0);
seq__9453_9460 = G__9479;
chunk__9454_9461 = G__9480;
count__9455_9462 = G__9481;
i__9456_9463 = G__9482;
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
