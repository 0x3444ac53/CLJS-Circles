// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.circles');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
sketches.circles.palettes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"purplehaze","purplehaze",-1356834990),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"purple haze",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(15)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null),new cljs.core.Keyword(null,"lemon_cirtus","lemon_cirtus",231293407),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(247),(158),(172)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(226),(213),(116)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(241),(244),(247)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(197),(171)], null)], null)], null),new cljs.core.Keyword(null,"solar","solar",749371651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(224),(198)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71),(91),(98)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(153),(156)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42),(31),(29)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(251),(175),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(223),(74),(51)], null)], null)], null)], null);
sketches.circles.palette = cljs.core.get.call(null,sketches.circles.palettes,new cljs.core.Keyword(null,"solar","solar",749371651));
sketches.circles.w = window.innerWidth;
sketches.circles.h = window.innerHeight;
/**
 * Creates a particle map.
 */
sketches.circles.particle = (function sketches$circles$particle(id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.circles.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.circles.h)], null),new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.circles.palette),cljs.core.mod.call(null,id,cljs.core.count.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.circles.palette))))], null);
});
cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),(3));
sketches.circles.v2__GT_ = (function sketches$circles$v2__GT_(v2,s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10961){
var vec__10962 = p__10961;
var k = cljs.core.nth.call(null,vec__10962,(0),null);
var v = cljs.core.nth.call(null,vec__10962,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(s * v)], null);
}),v2));
});
sketches.circles.v2_PLUS_ = (function sketches$circles$v2_PLUS_(v1,v2){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,v1,v2);
});
sketches.circles.v2_ = (function sketches$circles$v2_(v1,v2){
return cljs.core.merge_with.call(null,cljs.core._,v1,v2);
});
sketches.circles.mag = (function sketches$circles$mag(v2){
return quil.core.sqrt.call(null,(quil.core.sq.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)) + quil.core.sq.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2))));
});
sketches.circles.fuck = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),(function (inputs,state){
var safe_QMARK_ = (function (x){
if((x == null)){
return (0);
} else {
return x;
}
});
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x","x",2099068185)],[cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (safe_QMARK_){
return (function (x){
return safe_QMARK_.call(null,x.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ArrowUp","ArrowUp",-538953684),(-50),new cljs.core.Keyword(null,"ArrowDown","ArrowDown",-251004205),(50)], null)));
});})(safe_QMARK_))
,new cljs.core.Keyword(null,"keyboard","keyboard",-617357087).cljs$core$IFn$_invoke$arity$1(inputs))),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (safe_QMARK_){
return (function (x){
return safe_QMARK_.call(null,x.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ArrowLeft","ArrowLeft",-974160950),(-50),new cljs.core.Keyword(null,"ArrowRight","ArrowRight",1621754469),(50)], null)));
});})(safe_QMARK_))
,new cljs.core.Keyword(null,"keyboard","keyboard",-617357087).cljs$core$IFn$_invoke$arity$1(inputs)))]));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (mouse_pos,state){
var dv = sketches.circles.v2_.call(null,new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(mouse_pos),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"a","a",-2123407586),sketches.circles.v2__GT_.call(null,sketches.circles.v2__GT_.call(null,sketches.circles.v2__GT_.call(null,dv,((1) / sketches.circles.mag.call(null,dv))),(9.8 / sketches.circles.mag.call(null,dv))),(100)));
})], null));
sketches.circles.sketch_setup = (function sketches$circles$sketch_setup(){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.circles.palette));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accelfun","accelfun",1170825700),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.map.call(null,sketches.circles.particle,cljs.core.range.call(null,(0),(1))),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null)], null)], null)], null);
});
sketches.circles.out_of_bounds_QMARK_ = (function sketches$circles$out_of_bounds_QMARK_(circ){
var or__3949__auto__ = (((((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(circ) / (2)) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(circ))) >= sketches.circles.w))?new cljs.core.Keyword(null,"x","x",2099068185):null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(circ) / (2)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(circ))) >= (0)))?new cljs.core.Keyword(null,"x","x",2099068185):null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (((((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(circ) / (2)) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(circ))) >= sketches.circles.h))?new cljs.core.Keyword(null,"y","y",-1757859776):null);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(circ) / (2)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(circ))) >= (0))){
return new cljs.core.Keyword(null,"y","y",-1757859776);
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
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10965){
var vec__10966 = p__10965;
var k = cljs.core.nth.call(null,vec__10966,(0),null);
var v = cljs.core.nth.call(null,vec__10966,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sketches.circles.clamp.call(null,v,(-2000),(2000))], null);
}),(function (){var nv = sketches.circles.v2_PLUS_.call(null,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(state));
var out = sketches.circles.out_of_bounds_QMARK_.call(null,state);
if(!((out == null))){
return cljs.core.assoc.call(null,nv,out,(out.call(null,nv) * -0.5));
} else {
return nv;
}
})())));
});
cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),(0),(3));
sketches.circles.position = (function sketches$circles$position(dt,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[sketches.circles.clamp.call(null,((dt * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(state))) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(state))),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) / (2)),(sketches.circles.w - (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) / (2)))),sketches.circles.clamp.call(null,((dt * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(state))) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(state))),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) / (2)),(sketches.circles.h - (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) / (2))))]),new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(state))),(0),(function (){var x__4040__auto__ = (255);
var y__4041__auto__ = ((1) + cljs.core.count.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(state)));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})()));
});
cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,(2),cljs.core.PersistentVector.EMPTY)),(0),(function (){var x__4040__auto__ = (30);
var y__4041__auto__ = (1);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
/**
 * Receives the current state. Returns the next state to render.
 */
sketches.circles.sketch_update = (function sketches$circles$sketch_update(state){
var dt = ((1) / quil.core.current_frame_rate.call(null));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.map.call(null,((function (dt){
return (function (c){
return sketches.circles.position.call(null,dt,sketches.circles.velocity.call(null,new cljs.core.Keyword(null,"accelfun","accelfun",1170825700).cljs$core$IFn$_invoke$arity$1(state).call(null,sketches.circles.fuck).call(null,new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(state),c)));
});})(dt))
,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state)));
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.circles.sketch_draw = (function sketches$circles$sketch_draw(p__10969){
var map__10970 = p__10969;
var map__10970__$1 = ((((!((map__10970 == null)))?(((((map__10970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10970):map__10970);
var particles = cljs.core.get.call(null,map__10970__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.circles.palette));

var seq__10972 = cljs.core.seq.call(null,particles);
var chunk__10973 = null;
var count__10974 = (0);
var i__10975 = (0);
while(true){
if((i__10975 < count__10974)){
var p = cljs.core._nth.call(null,chunk__10973,i__10975);
var i_10996 = cljs.core.atom.call(null,(255));
var seq__10976_10997 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(p))));
var chunk__10977_10998 = null;
var count__10978_10999 = (0);
var i__10979_11000 = (0);
while(true){
if((i__10979_11000 < count__10978_10999)){
var vec__10980_11001 = cljs.core._nth.call(null,chunk__10977_10998,i__10979_11000);
var t1_11002 = cljs.core.nth.call(null,vec__10980_11001,(0),null);
var t2_11003 = cljs.core.nth.call(null,vec__10980_11001,(1),null);
quil.core.stroke.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),cljs.core.deref.call(null,i_10996)));

quil.core.stroke_weight.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t1_11002),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t1_11002),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t2_11003),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t2_11003));

cljs.core.reset_BANG_.call(null,i_10996,(cljs.core.deref.call(null,i_10996) - (1)));


var G__11004 = seq__10976_10997;
var G__11005 = chunk__10977_10998;
var G__11006 = count__10978_10999;
var G__11007 = (i__10979_11000 + (1));
seq__10976_10997 = G__11004;
chunk__10977_10998 = G__11005;
count__10978_10999 = G__11006;
i__10979_11000 = G__11007;
continue;
} else {
var temp__5720__auto___11008 = cljs.core.seq.call(null,seq__10976_10997);
if(temp__5720__auto___11008){
var seq__10976_11009__$1 = temp__5720__auto___11008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10976_11009__$1)){
var c__4351__auto___11010 = cljs.core.chunk_first.call(null,seq__10976_11009__$1);
var G__11011 = cljs.core.chunk_rest.call(null,seq__10976_11009__$1);
var G__11012 = c__4351__auto___11010;
var G__11013 = cljs.core.count.call(null,c__4351__auto___11010);
var G__11014 = (0);
seq__10976_10997 = G__11011;
chunk__10977_10998 = G__11012;
count__10978_10999 = G__11013;
i__10979_11000 = G__11014;
continue;
} else {
var vec__10983_11015 = cljs.core.first.call(null,seq__10976_11009__$1);
var t1_11016 = cljs.core.nth.call(null,vec__10983_11015,(0),null);
var t2_11017 = cljs.core.nth.call(null,vec__10983_11015,(1),null);
quil.core.stroke.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),cljs.core.deref.call(null,i_10996)));

quil.core.stroke_weight.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t1_11016),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t1_11016),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t2_11017),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t2_11017));

cljs.core.reset_BANG_.call(null,i_10996,(cljs.core.deref.call(null,i_10996) - (1)));


var G__11018 = cljs.core.next.call(null,seq__10976_11009__$1);
var G__11019 = null;
var G__11020 = (0);
var G__11021 = (0);
seq__10976_10997 = G__11018;
chunk__10977_10998 = G__11019;
count__10978_10999 = G__11020;
i__10979_11000 = G__11021;
continue;
}
} else {
}
}
break;
}

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__11022 = seq__10972;
var G__11023 = chunk__10973;
var G__11024 = count__10974;
var G__11025 = (i__10975 + (1));
seq__10972 = G__11022;
chunk__10973 = G__11023;
count__10974 = G__11024;
i__10975 = G__11025;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10972);
if(temp__5720__auto__){
var seq__10972__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10972__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10972__$1);
var G__11026 = cljs.core.chunk_rest.call(null,seq__10972__$1);
var G__11027 = c__4351__auto__;
var G__11028 = cljs.core.count.call(null,c__4351__auto__);
var G__11029 = (0);
seq__10972 = G__11026;
chunk__10973 = G__11027;
count__10974 = G__11028;
i__10975 = G__11029;
continue;
} else {
var p = cljs.core.first.call(null,seq__10972__$1);
var i_11030 = cljs.core.atom.call(null,(255));
var seq__10986_11031 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(p))));
var chunk__10987_11032 = null;
var count__10988_11033 = (0);
var i__10989_11034 = (0);
while(true){
if((i__10989_11034 < count__10988_11033)){
var vec__10990_11035 = cljs.core._nth.call(null,chunk__10987_11032,i__10989_11034);
var t1_11036 = cljs.core.nth.call(null,vec__10990_11035,(0),null);
var t2_11037 = cljs.core.nth.call(null,vec__10990_11035,(1),null);
quil.core.stroke.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),cljs.core.deref.call(null,i_11030)));

quil.core.stroke_weight.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t1_11036),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t1_11036),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t2_11037),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t2_11037));

cljs.core.reset_BANG_.call(null,i_11030,(cljs.core.deref.call(null,i_11030) - (1)));


var G__11038 = seq__10986_11031;
var G__11039 = chunk__10987_11032;
var G__11040 = count__10988_11033;
var G__11041 = (i__10989_11034 + (1));
seq__10986_11031 = G__11038;
chunk__10987_11032 = G__11039;
count__10988_11033 = G__11040;
i__10989_11034 = G__11041;
continue;
} else {
var temp__5720__auto___11042__$1 = cljs.core.seq.call(null,seq__10986_11031);
if(temp__5720__auto___11042__$1){
var seq__10986_11043__$1 = temp__5720__auto___11042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10986_11043__$1)){
var c__4351__auto___11044 = cljs.core.chunk_first.call(null,seq__10986_11043__$1);
var G__11045 = cljs.core.chunk_rest.call(null,seq__10986_11043__$1);
var G__11046 = c__4351__auto___11044;
var G__11047 = cljs.core.count.call(null,c__4351__auto___11044);
var G__11048 = (0);
seq__10986_11031 = G__11045;
chunk__10987_11032 = G__11046;
count__10988_11033 = G__11047;
i__10989_11034 = G__11048;
continue;
} else {
var vec__10993_11049 = cljs.core.first.call(null,seq__10986_11043__$1);
var t1_11050 = cljs.core.nth.call(null,vec__10993_11049,(0),null);
var t2_11051 = cljs.core.nth.call(null,vec__10993_11049,(1),null);
quil.core.stroke.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),cljs.core.deref.call(null,i_11030)));

quil.core.stroke_weight.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t1_11050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t1_11050),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t2_11051),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t2_11051));

cljs.core.reset_BANG_.call(null,i_11030,(cljs.core.deref.call(null,i_11030) - (1)));


var G__11052 = cljs.core.next.call(null,seq__10986_11043__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__10986_11031 = G__11052;
chunk__10987_11032 = G__11053;
count__10988_11033 = G__11054;
i__10989_11034 = G__11055;
continue;
}
} else {
}
}
break;
}

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__11056 = cljs.core.next.call(null,seq__10972__$1);
var G__11057 = null;
var G__11058 = (0);
var G__11059 = (0);
seq__10972 = G__11056;
chunk__10973 = G__11057;
count__10974 = G__11058;
i__10975 = G__11059;
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
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null)], null)));
});
sketches.circles.more_circles = (function sketches$circles$more_circles(state,p__11060){
var map__11061 = p__11060;
var map__11061__$1 = ((((!((map__11061 == null)))?(((((map__11061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11061):map__11061);
var key = cljs.core.get.call(null,map__11061__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"space","space",348133475),key)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.conj.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state),sketches.circles.particle.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state)))));
} else {
return state;
}
});
sketches.circles.create = (function sketches$circles$create(canvas){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.circles.w,sketches.circles.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.circles.sketch_draw;},new cljs.core.Symbol("sketches.circles","sketch-draw","sketches.circles/sketch-draw",-1609104776,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.circles","sketches.circles",-1602443961,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src/sketches/circles.cljs",18,1,124,124,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null),new cljs.core.Keyword(null,"circles","circles",-1947060917)], null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.circles.sketch_draw)?sketches.circles.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.circles.sketch_setup;},new cljs.core.Symbol("sketches.circles","sketch-setup","sketches.circles/sketch-setup",30226006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.circles","sketches.circles",-1602443961,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src/sketches/circles.cljs",19,1,74,74,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sketches.circles.sketch_setup)?sketches.circles.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.circles.sketch_update;},new cljs.core.Symbol("sketches.circles","sketch-update","sketches.circles/sketch-update",-1747118900,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.circles","sketches.circles",-1602443961,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src/sketches/circles.cljs",20,1,113,113,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Receives the current state. Returns the next state to render.",(cljs.core.truth_(sketches.circles.sketch_update)?sketches.circles.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Var(function(){return sketches.circles.mousehandle;},new cljs.core.Symbol("sketches.circles","mousehandle","sketches.circles/mousehandle",-1615173862,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.circles","sketches.circles",-1602443961,null),new cljs.core.Symbol(null,"mousehandle","mousehandle",1093392395,null),"src/sketches/circles.cljs",18,1,139,139,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(sketches.circles.mousehandle)?sketches.circles.mousehandle.cljs$lang$test:null)])),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Var(function(){return sketches.circles.more_circles;},new cljs.core.Symbol("sketches.circles","more-circles","sketches.circles/more-circles",1594346312,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.circles","sketches.circles",-1602443961,null),new cljs.core.Symbol(null,"more-circles","more-circles",947348601,null),"src/sketches/circles.cljs",19,1,144,144,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null)),null,(cljs.core.truth_(sketches.circles.more_circles)?sketches.circles.more_circles.cljs$lang$test:null)])),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(983));

return quil.core.noise_seed.call(null,(45454));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.circles !== 'undefined') && (typeof sketches.circles.sketch !== 'undefined')){
} else {
sketches.circles.sketch = sketches.circles.create.call(null,"sketch");
}

//# sourceMappingURL=circles.js.map
