# phd-proposal-slides

Richard Wen  
rrwen.dev@gmail.com  

* [Slides](https://rrwen.github.io/phd-proposal-slides)
* [PDF](https://github.com/rrwen/phd-proposal-slides/blob/master/slides/wen2018_phd_proposal_slides.pdf)

Research proposal titled "Context-aware Geographic Information Systems for Real-time Security Event Forecasting" to fulfil a requirement for the degree of Doctor of Philosophy in Civil Engineering at Ryerson University in 2018.

[![Build Status](https://travis-ci.org/rrwen/phd-proposal-slides.svg?branch=master)](https://travis-ci.org/rrwen/phd-proposal-slides)
[![GitHub license](https://img.shields.io/github/license/rrwen/phd-proposal-slides.svg)](https://github.com/rrwen/phd-proposal-slides/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/rrwen/phd-proposal-slides.svg?style=social)](https://twitter.com/intent/tweet?text=PhD%20research%20proposal%20titled%20%27Context-aware%20Geographic%20Information%20Systems%20for%20Real-time%20Security%20Event%20Forecasting%27%20by%20%40rrw3n:%20https%3A%2F%2Fgithub.com%2Frrwen%2Fphd-proposal-slides%20%23gis%20%23research)

## Install

1. Install [npm](https://www.npmjs.com/)
2. [Clone](https://git-scm.com/docs/git-clone) this repository
3. Install dependencies with `npm`

```
git clone https://github.com/rrwen/phd-proposal-slides
cd phd-proposal-slides
npm install
```

See [Edits](#edits) and [Implementation](#implementation) for more details.

## Usage

1. Generate `docs/index.html` (see `script.html` in [package.json](https://github.com/rrwen/phd-proposal-slides/blob/master/package.json))
2. Generate `slides/wen2018_phd_proposal_slides.pdf` (see `script.pdf` in [package.json](https://github.com/rrwen/phd-proposal-slides/blob/master/package.json))
3. Open `docs/index.html` in a portable browser (see `script.browser` in [package.json](https://github.com/rrwen/phd-proposal-slides/blob/master/package.json))

```
npm run html
npm run pdf
npm run browser
```

## Developer Notes

### Edits

The following can be edited before generating:

* `slides/wen2018_phd_proposal_slides.md`: [Markdown](https://daringfireball.net/projects/markdown/) file with slide contents
* `slides/template.html`: Custom [reveal-md](https://github.com/webpro/reveal-md) template to generate slides with
* `docs/edit/style.css`: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) file to adjust styling of slides
* `docs/edit/logo.png`: logo image to use

### Implementation


The slides [phd-proposal-slides](https://github.com/rrwen/phd-proposal-slides) uses the following [npm](https://www.npmjs.com/) packages for its implementation:

npm | Purpose
--- | ---
[reveal-md](https://www.npmjs.com/package/reveal-md) | Converting `slides/wen2018_phd_proposal_slides.md` to `docs/index.html`
[decktape](https://www.npmjs.com/package/decktape) | Converting `slides/wen2018_phd_proposal_slides.md` to `slides/wen2018_phd_proposal_slides.pdf`
[windows-build-tools](https://www.npmjs.com/package/windows-build-tools) | Compiling dependencies for decktape on Windows Operating System (OS)

```
       reveal-md            <-- Convert markdown  slides to html

       decktape             <-- Convert markdown slides to pdf
          |
  windows-build-tools       <-- Compile decktape on Windows OS
```
