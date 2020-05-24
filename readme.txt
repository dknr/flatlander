FLATLANDER

entity-component-system demo in JavaScript

you play as a black cube, followed by your trusty dog (a brown cube)
the player's input is handled by the `input` system, which sets an intent on the player entity

the dog follows the player with the `follow-player` strategy
this strategy is applied with the `wander` system
similar to the `input` system, the `wander` system applies an intent to entities

the `physics` system applies entities' intents (if valid) and modifies the material component
finally, the `graphics` system draws all entities with a material component

the sparks are spawned by the `spawner` system, and culled by the `reaper` system
the `ticker` system updates the frame counter and fps shown below the canvas
