# LiveScaler

LiveScaler allows to change in live the scale of all the MIDI tracks of a session at the same time. 

LiveScaler works within Ableton Live. It is composed of two Max For Live devices : 
* **LiveScaler-Conductor** : receives MIDI from a controller to generate scale transformations that are sent to all the LiveScaler-Instrument
* **LiveScaler-Instrument** : applies the scale transformations received from LiveScaler-Conductor to the MIDI it receives

## Quick set-up

To set up a LiveScaler session in Ableton Live : 

* Create a MIDI track dedicated to a unique instance of LiveScaler-Conductor. This is the track you need to send MIDI to in order to control LiveScaler with a controler.
* For each MIDI track you wish to apply the scale transformation, add a LiveScaler-Instrument instance. It will automatically receive transformation from the Conductor.

To check if it works properly, send a transformation from the Conductor (e.g. by playing with the **Transp** parameter), the Instrument instance should flash to show they received it and should apply the MIDI transform at the same time (e.g. transpose all the tracks with a LiveScaler-Instrument instance on it).

## Learn about LiveScaler

* [Video tutorials](https://www.youtube.com/playlist?list=PLeC9--5OZZeCat9jd31Gyd3DyAMXrDh6K) 
* [Video demo](https://www.youtube.com/watch?v=Cn0HBgWS5Pw&list=PLeC9--5OZZeCat9jd31Gyd3DyAMXrDh6K&index=2)
* [Operator's Manual](https://github.com/autonym8/LiveScaler/wiki/Home) (hosted LiveScaler's wiki on Github). 
* [Research article](https://hal.science/hal-04386347/document) To cite this work, please use the following
  * Rixte, Alice. "LiveScaler: Contrôler en live l'harmonie d'un morceau de musique électronique." Journées d'Informatique Musicale (JIM). 2023.

## Architecture of LiveScaler

* LiveScaler-Conductor has an unique instance on a separate MIDI track.
* There's a LiveScaler-Instrument for each MIDI track which must be impacted by LiveScaler's transformations. 

![Architecture of LiveScaler](./doc/images/architecture-LS-en.svg)
