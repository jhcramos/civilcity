# CivilCity favicon

The favicon uses only the architectural emblem from the horizontal logo supplied by the owner: four buildings and three stacked platforms, without lettering or a background badge. The horizontal website logo is unchanged.

The built-in image generation tool isolated and cleaned up the supplied reference. Prompt: preserve the four building silhouettes, slanted tops, relative heights and three platform layers; remove all lettering and rules; center the emblem on a transparent square; strengthen the pale outlines in deep charcoal for favicon legibility; add no elements, shadows or gradients. This is a raster adaptation, not an original vector master.

- `public/brand/civilcity-emblem-master.png`: generated transparent master.
- `public/cc-favicon.png`: 512px favicon at the stable URL declared in page metadata.
- `public/icon.png`: matching compatibility asset.
- `public/favicon.ico`: PNG-compressed 16, 32, 48, 64, 128 and 256px frames.

PNG resizing and ICO packaging use Sharp without changing the generated artwork. The former `/favicon.ico` redirect was removed so that the URL serves a real ICO file. Clients retaining the prior permanent redirect still reach the updated brand PNG.
