// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.perlin_flow');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('goog.dom');
sketches.perlin_flow.get_css_variable = (function sketches$perlin_flow$get_css_variable(variable_name){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13057_SHARP_){
return parseInt(p1__13057_SHARP_,(16));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),(function (){var G__13059 = getComputedStyle(document.body).getPropertyValue(variable_name);
var fexpr__13058 = ((function (G__13059){
return (function (p1__13056_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__13056_SHARP_,(1));
});})(G__13059))
;
return fexpr__13058(G__13059);
})()))));
});
cljs.core.enable_console_print_BANG_();
[cljs.core.str.cljs$core$IFn$_invoke$arity$1((10))].join('');
sketches.perlin_flow.palettes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cozy,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"cozy",cljs.core.cst$kw$background,sketches.perlin_flow.get_css_variable("--color-background"),cljs.core.cst$kw$colors,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.perlin_flow.get_css_variable,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13060_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2("--canvas-",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13060_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(12))))))], null),cljs.core.cst$kw$purplehaze,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"purple haze",cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(15)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null),cljs.core.cst$kw$lemon_cirtus,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(247),(158),(172)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(226),(213),(116)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(241),(244),(247)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(197),(171)], null)], null)], null),cljs.core.cst$kw$solar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(224),(198)], null),cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71),(91),(98)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(153),(156)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42),(31),(29)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(251),(175),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(223),(74),(51)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(224),(198)], null)], null)], null)], null);
sketches.perlin_flow.palette = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sketches.perlin_flow.palettes,cljs.core.cst$kw$cozy);
sketches.perlin_flow.w = window.innerWidth;
sketches.perlin_flow.h = window.innerHeight;
/**
 * Creates a particle map.
 */
sketches.perlin_flow.particle = (function sketches$perlin_flow$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$vx,(1),cljs.core.cst$kw$vy,(-1),cljs.core.cst$kw$size,(3),cljs.core.cst$kw$direction,(0),cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.w),cljs.core.cst$kw$y,quil.core.random.cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.h),cljs.core.cst$kw$color,cljs.core.rand_nth(cljs.core.cst$kw$colors.cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette))], null);
});
sketches.perlin_flow.sketch_setup = (function sketches$perlin_flow$sketch_setup(){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.background,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.perlin_flow.particle,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(1000)));
});
/**
 * Calculates the next position based on the current, the speed and a max.
 */
sketches.perlin_flow.position = (function sketches$perlin_flow$position(current,delta,max){
return cljs.core.mod((current + delta),max);
});
sketches.perlin_flow.noise_zoom = 5.0E-4;
sketches.perlin_flow.direction = (function sketches$perlin_flow$direction(x,y,z){
return (((2) * Math.PI) * (quil.core.noise.cljs$core$IFn$_invoke$arity$2((x * sketches.perlin_flow.noise_zoom),(- (y * sketches.perlin_flow.noise_zoom))) + (0.2 * quil.core.noise.cljs$core$IFn$_invoke$arity$3((x * sketches.perlin_flow.noise_zoom),(- (y * sketches.perlin_flow.noise_zoom)),(z * sketches.perlin_flow.noise_zoom)))));
});
/**
 * Calculates the next velocity based on the current and a delta. Capped at 2.
 */
sketches.perlin_flow.velocity = (function sketches$perlin_flow$velocity(current,delta){
return ((current + delta) / (2));
});
/**
 * Receives the current state. Returns the next state to render.
 */
sketches.perlin_flow.sketch_update = (function sketches$perlin_flow$sketch_update(particles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,cljs.core.cst$kw$x,sketches.perlin_flow.position(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$vx.cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.w),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,sketches.perlin_flow.position(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$vy.cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.h),cljs.core.cst$kw$direction,sketches.perlin_flow.direction(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$vx,sketches.perlin_flow.velocity(cljs.core.cst$kw$vx.cljs$core$IFn$_invoke$arity$1(p),(function (){var G__13061 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(p);
return Math.cos(G__13061);
})()),cljs.core.cst$kw$vy,sketches.perlin_flow.velocity(cljs.core.cst$kw$vy.cljs$core$IFn$_invoke$arity$1(p),(function (){var G__13062 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(p);
return Math.sin(G__13062);
})())], 0));
}),particles);
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.perlin_flow.sketch_draw = (function sketches$perlin_flow$sketch_draw(particles){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quil.core.frame_count()], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.innerWidth,quil.core.width())){
quil.core.resize_sketch(window.innerWidth,window.innerHeight);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.background,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));
} else {
}

quil.core.no_stroke();

var seq__13063 = cljs.core.seq(particles);
var chunk__13064 = null;
var count__13065 = (0);
var i__13066 = (0);
while(true){
if((i__13066 < count__13065)){
var p = chunk__13064.cljs$core$IIndexed$_nth$arity$2(null,i__13066);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p),(6)));

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p));


var G__13067 = seq__13063;
var G__13068 = chunk__13064;
var G__13069 = count__13065;
var G__13070 = (i__13066 + (1));
seq__13063 = G__13067;
chunk__13064 = G__13068;
count__13065 = G__13069;
i__13066 = G__13070;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13063);
if(temp__5720__auto__){
var seq__13063__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13063__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13063__$1);
var G__13071 = cljs.core.chunk_rest(seq__13063__$1);
var G__13072 = c__4351__auto__;
var G__13073 = cljs.core.count(c__4351__auto__);
var G__13074 = (0);
seq__13063 = G__13071;
chunk__13064 = G__13072;
count__13065 = G__13073;
i__13066 = G__13074;
continue;
} else {
var p = cljs.core.first(seq__13063__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p),(6)));

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(p));


var G__13075 = cljs.core.next(seq__13063__$1);
var G__13076 = null;
var G__13077 = (0);
var G__13078 = (0);
seq__13063 = G__13075;
chunk__13064 = G__13076;
count__13065 = G__13077;
i__13066 = G__13078;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.perlin_flow.create = (function sketches$perlin_flow$create(canvas){
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,canvas,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow.w,sketches.perlin_flow.h], null),cljs.core.cst$kw$draw,new cljs.core.Var(function(){return sketches.perlin_flow.sketch_draw;},cljs.core.cst$sym$sketches$perlin_DASH_flow_SLASH_sketch_DASH_draw,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$perlin_DASH_flow,cljs.core.cst$sym$sketch_DASH_draw,"/Users/Nora/repos/clojure/fga/src/sketches/perlin_flow.cljs",18,1,100,100,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$particles], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.perlin_flow.sketch_draw)?sketches.perlin_flow.sketch_draw.cljs$lang$test:null)])),cljs.core.cst$kw$setup,new cljs.core.Var(function(){return sketches.perlin_flow.sketch_setup;},cljs.core.cst$sym$sketches$perlin_DASH_flow_SLASH_sketch_DASH_setup,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$perlin_DASH_flow,cljs.core.cst$sym$sketch_DASH_setup,"/Users/Nora/repos/clojure/fga/src/sketches/perlin_flow.cljs",19,1,66,66,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sketches.perlin_flow.sketch_setup)?sketches.perlin_flow.sketch_setup.cljs$lang$test:null)])),cljs.core.cst$kw$update,new cljs.core.Var(function(){return sketches.perlin_flow.sketch_update;},cljs.core.cst$sym$sketches$perlin_DASH_flow_SLASH_sketch_DASH_update,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$sketches$perlin_DASH_flow,cljs.core.cst$sym$sketch_DASH_update,"/Users/Nora/repos/clojure/fga/src/sketches/perlin_flow.cljs",20,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$particles], null)),"Receives the current state. Returns the next state to render.",(cljs.core.truth_(sketches.perlin_flow.sketch_update)?sketches.perlin_flow.sketch_update.cljs$lang$test:null)])),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$settings,(function (){
quil.core.random_seed((983));

return quil.core.noise_seed((45454));
})], 0));
});
if((typeof sketches !== 'undefined') && (typeof sketches.perlin_flow !== 'undefined') && (typeof sketches.perlin_flow.sketch !== 'undefined')){
} else {
sketches.perlin_flow.sketch = sketches.perlin_flow.create("sketch");
}
