# Prototype photo slots

The design prototypes under `/prototypes` read portraits from this folder.
Drop the files below (JPEG/PNG/WebP — browsers can't render HEIC, so export
or convert first) and every slot lights up automatically; until then a styled
"AWAITING EVIDENCE" frame renders in each spot.

| File | Photo | Used by |
| --- | --- | --- |
| `booth.jpg` | Green phone booth, night | Fury hero · Herald staff pick 01 · Capsule exhibit B |
| `reach.jpg` | Hand reaching at camera, park stairs | Herald staff pick 02 · Capsule hero (exhibit A) |
| `forest.jpg` | Looking up on a tree-tunnel path | Fury editorial spread · Capsule exhibit C |
| `ferry.jpg` | At the stern of a ferry, Korean flag | Herald photo dispatch |
| `grass.jpg` | Sitting on coastal grass, looking up | Capsule exhibit D |

Recommended: export at ~1600px on the long edge, quality ~80 — keeps the
repo and page weight sane. (`sips -s format jpeg -s formatOptions 80
--resampleWidth 1600 IN.HEIC --out booth.jpg` does this on macOS.)
