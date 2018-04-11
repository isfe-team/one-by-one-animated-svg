# @isfe/one-by-one-animated-svg

A simple one-by-one animation for svg.

## Author

[@bqliu](https://github.com/bq-hentai) [@zwwang](https://github.com/ranran0507) [@isfe](https://github.com/fe-sm)

## Purpose

Just for fun and let us see fancy CSS and svg.

## Usage

First define a `@keyframes`, assume its name is `anime`. And the core style is like below:

```css
@keyframes anime {
  100% {
    stroke-dashoffset: 0;
  }
}
```

Then call it with a svg dom and some configurations.

```javascript
$$animatedSvg(document.querySelector('#Layer_1'), {
  mode: 'linear', // types of `linear` or `static`
  time: 0.05, // means `speed` or `duration`
  animationName: 'anime'
})
```

### Install

Wait until us to publish it.

## Note

Now, only `path` is selected to run animation. Later we'll try to apply to other elms.

This is very funny and you can use it to create your dynamic signs or sign it & erase it after u have animate all. Of course, you can apply two animations on a path. But the animation delay is harder to calculate.
