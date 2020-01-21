# VISUALIZE SORTING

[![Netlify Status](https://api.netlify.com/api/v1/badges/64d74b6c-5ec1-4112-84ad-c255f342051c/deploy-status)](https://app.netlify.com/sites/visualizesorting/deploys)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/fearless23/Visualize_Sorting_Methods/issues) [![HitCount](http://hits.dwyl.io/fearless23/Visualize_Sorting_Methods.svg)](http://hits.dwyl.io/fearless23/Visualize_Sorting_Methods)

Dependencies

- Bulma [![npm version](https://badge.fury.io/js/bulma.svg)](https://badge.fury.io/js/bulma)

Dev Dependencies
- Parcel Bundler [![npm version](https://badge.fury.io/js/parcel-bundler.svg)](https://badge.fury.io/js/parcel-bundler)
- TypeScript [![npm version](https://badge.fury.io/js/typescript.svg)](https://badge.fury.io/js/typescript)


## Visualize different sorting techniques used in software engineering.

- Choose a `Speed`, `Size`, `Sorting method` and click `RUN`
- After that you have 3 controls viz: `Resume`, `Play`, `Stop`

#### Colors in Canvas (LEGEND)

- `Blue`: Normal
- `Green`: Base Pointer(s)
- `Violet`: Comparing to (can be thought as other pointer)
- `Grey`: Already sorted Elements
- `Orange`: While comparing, some element is found swap worthy. Green Orange are usually swapped.
- `Light Orange`: To show left side of merge sort and quick sort.
- `Dark Orange (Reddish Orange)`: To show right side of merge sort and quick sort.

```js
const colors = {
  pointer: "#0b6623",
  comparing: "#7f00ff",
  normal: "#44a6c6",
  sorted: "#d0d0d0",
  swap: "orange",
  swapLeft: "#FF9F00",
  swapRight: "#FF4F00"
};
```

Developed by: [Jaspreet Singh(@fearless23)](https://github.com/fearless23)

Check [Github Repo](https://github.com/fearless23/Visualize_Sorting_Methods) for code.

Website on [Netlify](https://visualizesorting.netlify.com/)

## Contributing
