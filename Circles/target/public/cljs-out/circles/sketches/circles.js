// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.circles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_();
sketches.circles.palettes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$purplehaze,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"purple haze",cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(15)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null),cljs.core.cst$kw$lemon_cirtus,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(247),(158),(172)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(226),(213),(116)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(241),(244),(247)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(197),(171)], null)], null)], null),cljs.core.cst$kw$solar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(224),(198)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71),(91),(98)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(153),(156)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42),(31),(29)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(251),(175),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(223),(74),(51)], null)], null)], null)], null);
sketches.circles.palette = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sketches.circles.palettes,cljs.core.cst$kw$solar);
sketches.circles.w = window.innerWidth;
sketches.circles.h = window.innerHeight;
/**
 * Creates a particle map.
 */
sketches.circles.particle = (function sketches$circles$particle(id){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null),cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null),cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$1(sketches.circles.w),cljs.core.cst$kw$y,quil.core.random.cljs$core$IFn$_invoke$arity$1(sketches.circles.h)], null),cljs.core.cst$kw$size,(30),cljs.core.cst$kw$color,cljs.core.rand_nth(cljs.core.cst$kw$colors.cljs$core$IFn$_invoke$arity$1(sketches.circles.palette))], null);
});
sketches.circles.v2__GT_ = (function sketches$circles$v2__GT_(v2,s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10052){
var vec__10053 = p__10052;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10053,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(s * v)], null);
}),v2));
});
sketches.circles.v2_PLUS_ = (function sketches$circles$v2_PLUS_(v1,v2){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v1,v2], 0));
});
sketches.circles.v2_ = (function sketches$circles$v2_(v1,v2){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v1,v2], 0));
});
sketches.circles.mag = (function sketches$circles$mag(v2){
return quil.core.sqrt((quil.core.sq(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v2)) + quil.core.sq(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v2))));
});
sketches.circles.fuck = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,(function (inputs,state){
var safe_QMARK_ = (function (x){
if((x == null)){
return (0);
} else {
return x;
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$a,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$x],[cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (safe_QMARK_){
return (function (x){
return safe_QMARK_((function (){var G__10056 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ArrowUp,(-50),cljs.core.cst$kw$ArrowDown,(50)], null);
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__10056) : x.call(null,G__10056));
})());
});})(safe_QMARK_))
,cljs.core.cst$kw$keyboard.cljs$core$IFn$_invoke$arity$1(inputs))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (safe_QMARK_){
return (function (x){
return safe_QMARK_((function (){var G__10057 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ArrowLeft,(-50),cljs.core.cst$kw$ArrowRight,(50)], null);
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__10057) : x.call(null,G__10057));
})());
});})(safe_QMARK_))
,cljs.core.cst$kw$keyboard.cljs$core$IFn$_invoke$arity$1(inputs)))]));
})], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mouse,(function (mouse_pos,state){
var dv = sketches.circles.v2_(cljs.core.cst$kw$mouse.cljs$core$IFn$_invoke$arity$1(mouse_pos),cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$a,sketches.circles.v2__GT_(sketches.circles.v2__GT_(sketches.circles.v2__GT_(dv,((1) / sketches.circles.mag(dv))),(9.8 / sketches.circles.mag(dv))),(200)));
})], null));
sketches.circles.key_remover = (function sketches$circles$key_remover(state,event){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$inputs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$keyboard,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keyboard.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event))));
});
sketches.circles.key_updater = (function sketches$circles$key_updater(state,event){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$inputs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$keyboard,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keyboard.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$accelfun,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$space))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keys,cljs.core.cst$kw$accelfun.cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.cst$kw$mouse:cljs.core.cst$kw$keys):cljs.core.cst$kw$accelfun.cljs$core$IFn$_invoke$arity$1(state))], 0));
});
sketches.circles.sketch_setup = (function sketches$circles$sketch_setup(){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.background,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(sketches.circles.palette));

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$accelfun,cljs.core.cst$kw$keys,cljs.core.cst$kw$circles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.circles.particle,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(1))),cljs.core.cst$kw$inputs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$mouse,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y()], null)], null)], null);
});
sketches.circles.out_of_bounds_QMARK_ = (function sketches$circles$out_of_bounds_QMARK_(circ){
var or__3949__auto__ = (((((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(circ) / (2)) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(circ))) >= sketches.circles.w))?cljs.core.cst$kw$x:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(circ) / (2)) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(circ))) >= (0)))?cljs.core.cst$kw$x:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (((((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(circ) / (2)) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(circ))) >= sketches.circles.h))?cljs.core.cst$kw$y:null);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(circ) / (2)) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(circ))) >= (0))){
return cljs.core.cst$kw$y;
} else {
return null;
}
}
}
}
});
sketches.circles.clamp = (function sketches$circles$clamp(x,low,high){
if((x > high)){
return high;
} else {
if((x < low)){
return low;
} else {
return x;

}
}
});
sketches.circles.velocity = (function sketches$circles$velocity(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$v,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10058){
var vec__10059 = p__10058;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sketches.circles.clamp(v,(-2000),(2000))], null);
}),(function (){var nv = sketches.circles.v2_PLUS_(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(state));
var out = sketches.circles.out_of_bounds_QMARK_(state);
if(!((out == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nv,out,((out.cljs$core$IFn$_invoke$arity$1 ? out.cljs$core$IFn$_invoke$arity$1(nv) : out.call(null,nv)) * -0.99));
} else {
return nv;
}
})())));
});
sketches.circles.position = (function sketches$circles$position(dt,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$p,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$x,cljs.core.cst$kw$y],[sketches.circles.clamp(((dt * cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(state))) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(state))),(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state) / (2)),(sketches.circles.w - (cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state) / (2)))),sketches.circles.clamp(((dt * cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(state))) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(state))),(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state) / (2)),(sketches.circles.h - (cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state) / (2))))]));
});
/**
 * Receives the current state. Returns the next state to render.
 */
sketches.circles.sketch_update = (function sketches$circles$sketch_update(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$accelfun.cljs$core$IFn$_invoke$arity$1(state)], 0));

var dt = ((1) / quil.core.current_frame_rate());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$circles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dt){
return (function (c){
return sketches.circles.position(dt,sketches.circles.velocity((function (){var G__10064 = cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state);
var G__10065 = c;
var fexpr__10063 = (function (){var fexpr__10066 = cljs.core.cst$kw$accelfun.cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__10066.cljs$core$IFn$_invoke$arity$1 ? fexpr__10066.cljs$core$IFn$_invoke$arity$1(sketches.circles.fuck) : fexpr__10066.call(null,sketches.circles.fuck));
})();
return (fexpr__10063.cljs$core$IFn$_invoke$arity$2 ? fexpr__10063.cljs$core$IFn$_invoke$arity$2(G__10064,G__10065) : fexpr__10063.call(null,G__10064,G__10065));
})()));
});})(dt))
,cljs.core.cst$kw$circles.cljs$core$IFn$_invoke$arity$1(state)));
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.circles.sketch_draw = (function sketches$circles$sketch_draw(p__10067){
var map__10068 = p__10067;
var map__10068__$1 = ((((!((map__10068 == null)))?(((((map__10068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10068):map__10068);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10068__$1,cljs.core.cst$kw$circles);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.background,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(sketches.circles.palette));

quil.core.no_stroke();

var seq__10070 = cljs.core.seq(particles);
var chunk__10071 = null;
var count__10072 = (0);
var i__10073 = (0);
while(true){
if((i__10073 < count__10072)){
var p = chunk__10071.cljs$core$IIndexed$_nth$arity$2(null,i__10073);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p));


var G__10074 = seq__10070;
var G__10075 = chunk__10071;
var G__10076 = count__10072;
var G__10077 = (i__10073 + (1));
seq__10070 = G__10074;
chunk__10071 = G__10075;
count__10072 = G__10076;
i__10073 = G__10077;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10070);
if(temp__5720__auto__){
var seq__10070__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10070__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10070__$1);
var G__10078 = cljs.core.chunk_rest(seq__10070__$1);
var G__10079 = c__4351__auto__;
var G__10080 = cljs.core.count(c__4351__auto__);
var G__10081 = (0);
seq__10070 = G__10078;
chunk__10071 = G__10079;
count__10072 = G__10080;
i__10073 = G__10081;
continue;
} else {
var p = cljs.core.first(seq__10070__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p));


var G__10082 = cljs.core.next(seq__10070__$1);
var G__10083 = null;
var G__10084 = (0);
var G__10085 = (0);
seq__10070 = G__10082;
chunk__10071 = G__10083;
count__10072 = G__10084;
i__10073 = G__10085;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.circles.mousehandle = (function sketches$circles$mousehandle(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$inputs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$mouse,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y()], null)));
});
sketches.circles.create = (function sketches$circles$create(canvas){
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,canvas,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.circles.w,sketches.circles.h], null),cljs.core.cst$kw$draw,new cljs.core.Var(function(){return sketches.circles.sketch_draw;},cljs.core.cst$sym$sketches$circles_SLASH_sketch_DASH_draw,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$sketch_DASH_draw,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",18,1,124,124,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$particles,cljs.core.cst$kw$circles], null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.circles.sketch_draw)?sketches.circles.sketch_draw.cljs$lang$test:null)])),cljs.core.cst$kw$setup,new cljs.core.Var(function(){return sketches.circles.sketch_setup;},cljs.core.cst$sym$sketches$circles_SLASH_sketch_DASH_setup,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$sketch_DASH_setup,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",19,1,82,82,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sketches.circles.sketch_setup)?sketches.circles.sketch_setup.cljs$lang$test:null)])),cljs.core.cst$kw$update,new cljs.core.Var(function(){return sketches.circles.sketch_update;},cljs.core.cst$sym$sketches$circles_SLASH_sketch_DASH_update,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$sketch_DASH_update,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",20,1,112,112,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state], null)),"Receives the current state. Returns the next state to render.",(cljs.core.truth_(sketches.circles.sketch_update)?sketches.circles.sketch_update.cljs$lang$test:null)])),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,new cljs.core.Var(function(){return sketches.circles.key_updater;},cljs.core.cst$sym$sketches$circles_SLASH_key_DASH_updater,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$key_DASH_updater,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",18,1,76,76,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$event], null)),null,(cljs.core.truth_(sketches.circles.key_updater)?sketches.circles.key_updater.cljs$lang$test:null)])),cljs.core.cst$kw$key_DASH_released,new cljs.core.Var(function(){return sketches.circles.key_remover;},cljs.core.cst$sym$sketches$circles_SLASH_key_DASH_remover,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$key_DASH_remover,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",18,1,71,71,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$event], null)),null,(cljs.core.truth_(sketches.circles.key_remover)?sketches.circles.key_remover.cljs$lang$test:null)])),cljs.core.cst$kw$mouse_DASH_moved,new cljs.core.Var(function(){return sketches.circles.mousehandle;},cljs.core.cst$sym$sketches$circles_SLASH_mousehandle,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$circles,cljs.core.cst$sym$mousehandle,"/Users/Nora/repos/clojure/Circles/src/sketches/circles.cljs",18,1,133,133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state], null)),null,(cljs.core.truth_(sketches.circles.mousehandle)?sketches.circles.mousehandle.cljs$lang$test:null)])),cljs.core.cst$kw$settings,(function (){
quil.core.random_seed((983));

return quil.core.noise_seed((45454));
})], 0));
});
if((typeof sketches !== 'undefined') && (typeof sketches.circles !== 'undefined') && (typeof sketches.circles.sketch !== 'undefined')){
} else {
sketches.circles.sketch = sketches.circles.create("sketch");
}
