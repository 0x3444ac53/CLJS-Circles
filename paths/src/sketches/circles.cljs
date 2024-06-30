(ns sketches.circles
  (:require [quil.core :as q]
            [quil.middleware :as middleware]
            [goog.dom :as gdom]))

(enable-console-print!)

(def palettes
  {:purplehaze
   {:name       "purple haze"
    :background [10 10 15]
    :colors     [[132 26 200]
                 [165 32 250]
                 [196 106 251]]}
   :lemon_cirtus
   {:background [247 158 172]
    :colors [[226 213 116]
             [241 244 247]
             [105 197 171]]}
   :solar
   {:background [240 224 198]
    :colors [[71 91 98]
             [122 153 156]
             [42 31 29]
             [251 175 60]
             [223 74 51]]}})

(def palette (get palettes :solar))

(def w (.-innerWidth js/window))
(def h (.-innerHeight js/window))

(defn particle
  "Creates a particle map."
  [id]
  {:id         id
   :v          {:x 0 :y 0}
   :a          {:x 0 :y 0}
   :p          {:x (q/random w) :y (q/random h)}
   :trail      []
   :size       10
   :color      (nth (:colors palette) (mod id (count (:colors palette))))})

(nth [1 2 3 4] 3)

(defn v2-> [v2 s]
  (into {} (map (fn [[k v]] [k (* s v)]) v2)))

(defn v2+ [v1 v2]
  (merge-with + v1 v2))

(defn v2- [v1 v2]
  (merge-with - v1 v2))

(defn mag [v2]
  (q/sqrt (+ (q/sq (:x v2)) (q/sq (:y v2)))))

(def fuck (conj {:keys (fn [inputs state]
                         (let [safe? (fn [x] (if (nil? x) 0 x))]
                           (assoc state
                                  :a (hash-map :y
                                               (apply
                                                + (map (fn [x] (safe? (x {:ArrowUp -50 :ArrowDown 50})))
                                                       (:keyboard inputs)))
                                               :x
                                               (apply
                                                + (map (fn [x] (safe? (x {:ArrowLeft -50 :ArrowRight 50})))
                                                       (:keyboard inputs)))))))}
                {:mouse (fn [mouse-pos state]
                          (let [dv (v2- (:mouse mouse-pos) (:p state))]
                            (assoc state
                                   :a (v2-> (v2-> (v2-> dv (/ 1 (mag dv))) (/ 9.8 (mag dv))) 100))))}))

(defn sketch-setup []
  (apply q/background (:background palette))
  {:accelfun :mouse
   :circles (map particle (range 0 1))
   :inputs {:keyboard #{}
            :mouse {:x (q/mouse-x) :y (q/mouse-y)}}})

(defn out-of-bounds? [circ]
  (or (when (>= (+ (/ (:size circ) 2) (:x (:p circ))) w) :x)
      (when (>= (- (/ (:size circ) 2) (:x (:p circ))) 0) :x)
      (when (>= (+ (/ (:size circ) 2) (:y (:p circ))) h) :y)
      (when (>= (- (/ (:size circ) 2) (:y (:p circ))) 0) :y)))

(defn clamp [x low high]
  (cond (> x high) high (< x low) low :else x))

(defn velocity [state]
  (assoc state :v (into {} (map (fn [[k v]] [k (clamp v -2000 2000)])
                                (let [nv (v2+ (:v state) (:a state)) out (out-of-bounds? state)]
                                  (if (not (nil? out))
                                    (assoc nv out (* (out nv) -0.5))
                                    nv))))))

(subvec [1 2 3 4] 0 3)

(defn position [dt state]
  (assoc state
         :p (hash-map
             :x (clamp (+ (* dt (:x (:v state))) (:x (:p state)))
                       (/ (:size state) 2)
                       (- w (/ (:size state) 2)))
             :y (clamp (+ (* dt (:y (:v state))) (:y (:p state)))
                       (/ (:size state) 2)
                       (- h  (/ (:size state) 2))))
         :trail (subvec (vec (cons (:p state) (:trail state)))
                        0 (min 255 (+ 1 (count (:trail state)))))))

(subvec (vec (cons 2 [])) 0 (min 30 1))

(defn sketch-update
  "Receives the current state. Returns the next state to render."
  [state]
  (let [dt (/ 1 (q/current-frame-rate))]
    (assoc state :circles (map (fn [c]
                                 (->> c
                                      (((:accelfun state) fuck) (:inputs state))
                                      (velocity)
                                      (position dt)))
                               (:circles state)))))

(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after sketch-update."
  [{particles :circles}]
  (apply q/background (:background palette))
  (doseq [p particles]
    (let [i (atom 255)]
      (doseq [[t1 t2] (partition 2 1 (cons (:p p) (:trail p)))]
        (q/stroke (conj (:color p) @i))
        (q/stroke-weight (:size p))
        (q/line (:x t1) (:y t1) (:x t2) (:y t2))
        (reset! i (dec @i))))
    (q/no-stroke)
    (apply q/fill (:color p))
    (q/ellipse (:x (:p p)) (:y (:p p)) (:size p) (:size p))))

(defn mousehandle [state]
  (assoc state
         :inputs (assoc (:inputs state)
                        :mouse {:x (q/mouse-x) :y (q/mouse-y)})))

(defn more-circles [state {key :key}]
  (if (= :space key)
    (assoc state
           :circles (conj (:circles state)
                          (particle (count (:circles state)))))
    state))

(defn create [canvas]
  (q/sketch
   :host canvas
   :size [w h]
   :draw #'sketch-draw
   :setup #'sketch-setup
   :update #'sketch-update
   :middleware [middleware/fun-mode]
   :mouse-moved #'mousehandle
   :key-pressed #'more-circles
   :settings (fn []
               (q/random-seed 983)
               (q/noise-seed 45454))))

(defonce sketch (create "sketch"))
