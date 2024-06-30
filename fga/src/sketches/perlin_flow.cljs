(ns sketches.perlin-flow
  (:require [quil.core :as q]
            [quil.middleware :as middleware]
            [goog.dom :as gdom]))

(defn get-css-variable [variable-name]
  (vec (->>
        (.getPropertyValue (js/getComputedStyle (.-body js/document)) variable-name)
        (#(subs % 1))
        (partition 2)
        (map (partial apply str))
        (map #(js/parseInt % 16)))))

(enable-console-print!)

(str 10)

(def palettes
  {:cozy
   {:name "cozy"
    :background (get-css-variable "--color-background")
    :colors (vec (map get-css-variable
                      (map (partial apply str)
                           (map #(concat "--canvas-" (str %)) (range 1 12)))))}
   :purplehaze
   {:name       "purple haze"
    :background [10 10 15]
    :colors     [[32 0 40]
                 [82 15 125]
                 [99 53 126]
                 [102 10 150]
                 [132 26 200]
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
             [223 74 51]
             [240 224 198]]}})

(def palette (get palettes :cozy))

(def w (.-innerWidth js/window))
(def h (.-innerHeight js/window))

(defn particle
  "Creates a particle map."
  [id]
  {:id         id
   :vx         1
   :vy         -1
   :size       3
   :direction  0
   :x          (q/random w)
   :y          (q/random h)
   :color      (rand-nth (:colors palette))})

(defn sketch-setup []
  (apply q/background (:background palette))
  (map particle (range 0 1000)))

(defn position
  "Calculates the next position based on the current, the speed and a max."
  [current delta max]
  (mod (+ current delta) max))

(def noise-zoom 0.0005)

(defn direction [x y z]
  (* 2
     Math/PI
     (+ (q/noise (* x noise-zoom) (- (* y noise-zoom)))
        (* 0.2 (q/noise (* x noise-zoom) (- (* y noise-zoom)) (* z noise-zoom))))))

(defn velocity
  "Calculates the next velocity based on the current and a delta. Capped at 2."
  [current delta]
  (/ (+ current delta) 2))

(defn sketch-update
  "Receives the current state. Returns the next state to render."
  [particles]
  (map (fn [p]
         (assoc p
                :x (position (:x p) (:vx p) w)
                :y (position (:y p) (:vy p) h)
                :direction (direction (:x p) (:y p) (:id p))
                :vx (velocity (:vx p) (Math/cos (:direction p)))
                :vy (velocity (:vy p) (Math/sin (:direction p)))))
       particles))

(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after sketch-update."
  [particles]
  (println (q/frame-count))
  (when (not= (.-innerWidth js/window) (q/width))
    (q/resize-sketch (.-innerWidth js/window) (.-innerHeight js/window))
    (apply q/background (:background palette)))
  (q/no-stroke)
  (doseq [p particles]
    (apply q/fill (conj (:color p) 6))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))

(defn create [canvas]
  (q/sketch
   :host canvas
   :size [w h]
   :draw #'sketch-draw
   :setup #'sketch-setup
   :update #'sketch-update
   :middleware [middleware/fun-mode]
   :settings (fn []
               (q/random-seed 983)
               (q/noise-seed 45454))))

(defonce sketch (create "sketch"))
