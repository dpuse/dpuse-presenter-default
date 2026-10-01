# Data Positioning Default Presenter

Consider ApexCharts and eCharts tools.

[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-presenter-default)](https://www.npmjs.com/package/@dpuse/dpuse-presenter-default)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse_dpuse-presenter-default&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_dpuse-presenter-default)

A library that implements the default presenter in accordance with the Data Positioning presenter interface.

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-presenter-default?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-presenter-default/releases/latest)
[![CI](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/ci.yml)

[DPUse](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-presenter-default/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-presenter-default/issues)

A library that implements the default presenter in accordance with the Data Positioning presenter interface.

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

...

Consider ApexCharts and eCharts tools.

<!-- OPENING_END -->

<!-- USAGE_START -->

## Usage

This presenter is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar presenter, though there is currently no process to accept third-party presenters into DPUse at this stage.

```bash
git clone https://github.com/dpuse/dpuse-presenter-default.git
cd dpuse-presenter-default
npm install
```

_Requires [Node.js](https://nodejs.org/) 24 or later, [npm](https://www.npmjs.com/) 12 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

This repository is managed using the common set of actions provided by [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development). See the `scripts` block in [package.json](https://github.com/dpuse/dpuse-presenter-default/blob/main/package.json) for details.

<!-- USAGE_END -->

## OLD Installation

There's no need to install this presenter manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use https://www.highcharts.com/license, BSD-3-Clause, CC0-1.0, MIT, or (MPL-2.0 OR Apache-2.0) — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

| Dependency                                                                                                   | Version  | License(s)                                 | Document                                                                                          |
| :----------------------------------------------------------------------------------------------------------- | :------: | :----------------------------------------- | :------------------------------------------------------------------------------------------------ |
| [@borewit/text-codec](https://github.com/Borewit/text-codec)                                                 |  0.2.2   | MIT                                        | [LICENSE](licenses/downloads/@borewit/text-codec@0.2.2-LICENSE.txt)                               |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)                                                 | 0.3.865  | MIT                                        | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.865-LICENSE.txt)                             |
| [@dpuse/dpuse-tool-highcharts-visualiser](https://github.com/dpuse/dpuse-tool-highcharts-visualiser)         |  0.0.91  | MIT                                        | [LICENSE](licenses/downloads/@dpuse/dpuse-tool-highcharts-visualiser@0.0.91-LICENSE.txt)          |
| [@dpuse/dpuse-tool-micromark-markdown-parser](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser) | 0.1.1051 | MIT                                        | [LICENSE](licenses/downloads/@dpuse/dpuse-tool-micromark-markdown-parser@0.1.1051-LICENSE.txt)    |
| [@speed-highlight/core](https://github.com/speed-highlight/core)                                             |  2.1.0   | CC0-1.0                                    | [LICENSE](licenses/downloads/@speed-highlight/core@2.1.0-LICENSE.txt)                             |
| [@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)                                           |  0.4.1   | MIT                                        | [LICENSE](licenses/downloads/@tokenizer/inflate@0.4.1-LICENSE.txt)                                |
| [@tokenizer/token](https://github.com/Borewit/tokenizer-token)                                               |  0.3.0   | MIT                                        | [LICENSE](licenses/downloads/@tokenizer/token@0.3.0-LICENSE.txt)                                  |
| [@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  4.1.13  | MIT                                        | [LICENSE](licenses/downloads/@types/debug@4.1.13-LICENSE.txt)                                     |
| [@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)                                              |  2.1.0   | MIT                                        | [LICENSE](licenses/downloads/@types/ms@2.1.0-LICENSE.txt)                                         |
| [@types/trusted-types](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   |  2.0.7   | MIT                                        | [LICENSE](licenses/downloads/@types/trusted-types@2.0.7-LICENSE.txt)                              |
| [@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  2.0.11  | MIT                                        | [LICENSE](licenses/downloads/@types/unist@2.0.11-LICENSE.txt)                                     |
| [character-entities-legacy](https://github.com/wooorm/character-entities-legacy)                             |  3.0.0   | MIT                                        | [LICENSE](licenses/downloads/character-entities-legacy@3.0.0-LICENSE.txt)                         |
| [character-entities](https://github.com/wooorm/character-entities)                                           |  2.0.2   | MIT                                        | [LICENSE](licenses/downloads/character-entities@2.0.2-LICENSE.txt)                                |
| [character-reference-invalid](https://github.com/wooorm/character-reference-invalid)                         |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/character-reference-invalid@2.0.1-LICENSE.txt)                       |
| [debug](https://github.com/debug-js/debug)                                                                   |  4.4.3   | MIT                                        | [LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)                                             |
| [decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)               |  1.3.0   | MIT                                        | [LICENSE](licenses/downloads/decode-named-character-reference@1.3.0-LICENSE.txt)                  |
| [dequal](https://github.com/lukeed/dequal)                                                                   |  2.0.3   | MIT                                        | [LICENSE](licenses/downloads/dequal@2.0.3-LICENSE.txt)                                            |
| [devlop](https://github.com/wooorm/devlop)                                                                   |  1.1.0   | MIT                                        | [LICENSE](licenses/downloads/devlop@1.1.0-LICENSE.txt)                                            |
| [dompurify](https://github.com/cure53/DOMPurify)                                                             |  3.4.16  | (MPL-2.0 OR Apache-2.0)                    | [LICENSE](licenses/downloads/dompurify@3.4.16-LICENSE.txt)                                        |
| [file-type](https://github.com/sindresorhus/file-type)                                                       |  22.1.1  | MIT                                        | [LICENSE](licenses/downloads/file-type@22.1.1-LICENSE.txt)                                        |
| [highcharts](https://github.com/highcharts/highcharts-dist)                                                  |  13.1.1  | Custom: https://www.highcharts.com/license | [LICENSE](licenses/downloads/highcharts@13.1.1-LICENSE.txt)                                       |
| [ieee754](https://github.com/feross/ieee754)                                                                 |  1.2.1   | BSD-3-Clause                               | [LICENSE](licenses/downloads/ieee754@1.2.1-LICENSE.txt)                                           |
| [is-alphabetical](https://github.com/wooorm/is-alphabetical)                                                 |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/is-alphabetical@2.0.1-LICENSE.txt)                                   |
| [is-alphanumerical](https://github.com/wooorm/is-alphanumerical)                                             |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/is-alphanumerical@2.0.1-LICENSE.txt)                                 |
| [is-decimal](https://github.com/wooorm/is-decimal)                                                           |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/is-decimal@2.0.1-LICENSE.txt)                                        |
| [is-hexadecimal](https://github.com/wooorm/is-hexadecimal)                                                   |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/is-hexadecimal@2.0.1-LICENSE.txt)                                    |
| [micromark-core-commonmark](https://github.com/micromark/micromark.git#main)                                 |  2.0.4   | MIT                                        | [LICENSE](licenses/downloads/micromark-core-commonmark@2.0.4-LICENSE.txt)                         |
| [micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)                  |  4.0.0   | MIT                                        | [LICENSE](licenses/downloads/micromark-extension-directive@4.0.0-LICENSE.txt)                     |
| [micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)                  |  2.1.2   | MIT                                        | [LICENSE](licenses/downloads/micromark-extension-gfm-table@2.1.2-LICENSE.txt)                     |
| [micromark-factory-destination](https://github.com/micromark/micromark.git#main)                             |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-factory-destination@2.0.1-LICENSE.txt)                     |
| [micromark-factory-label](https://github.com/micromark/micromark.git#main)                                   |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-factory-label@2.0.1-LICENSE.txt)                           |
| [micromark-factory-space](https://github.com/micromark/micromark.git#main)                                   |  2.1.0   | MIT                                        | [LICENSE](licenses/downloads/micromark-factory-space@2.1.0-LICENSE.txt)                           |
| [micromark-factory-title](https://github.com/micromark/micromark.git#main)                                   |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-factory-title@2.0.1-LICENSE.txt)                           |
| [micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)                              |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-factory-whitespace@2.0.1-LICENSE.txt)                      |
| [micromark-util-character](https://github.com/micromark/micromark.git#main)                                  |  2.1.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-character@2.1.1-LICENSE.txt)                          |
| [micromark-util-chunked](https://github.com/micromark/micromark.git#main)                                    |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-chunked@2.0.1-LICENSE.txt)                            |
| [micromark-util-classify-character](https://github.com/micromark/micromark.git#main)                         |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-classify-character@2.0.1-LICENSE.txt)                 |
| [micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)                         |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-combine-extensions@2.0.1-LICENSE.txt)                 |
| [micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)         |  2.0.2   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-decode-numeric-character-reference@2.0.2-LICENSE.txt) |
| [micromark-util-edit-map](https://github.com/micromark/micromark.git#main)                                   |  1.0.0   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-edit-map@1.0.0-LICENSE.txt)                           |
| [micromark-util-encode](https://github.com/micromark/micromark.git#main)                                     |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-encode@2.0.1-LICENSE.txt)                             |
| [micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)                              |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-html-tag-name@2.0.1-LICENSE.txt)                      |
| [micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)                       |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-normalize-identifier@2.0.1-LICENSE.txt)               |
| [micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)                                |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-resolve-all@2.0.1-LICENSE.txt)                        |
| [micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)                               |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-sanitize-uri@2.0.1-LICENSE.txt)                       |
| [micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)                                |  2.1.0   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-subtokenize@2.1.0-LICENSE.txt)                        |
| [micromark-util-symbol](https://github.com/micromark/micromark.git#main)                                     |  2.0.1   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-symbol@2.0.1-LICENSE.txt)                             |
| [micromark-util-types](https://github.com/micromark/micromark.git#main)                                      |  2.0.3   | MIT                                        | [LICENSE](licenses/downloads/micromark-util-types@2.0.3-LICENSE.txt)                              |
| [micromark](https://github.com/micromark/micromark.git#main)                                                 |  4.0.3   | MIT                                        | [LICENSE](licenses/downloads/micromark@4.0.3-LICENSE.txt)                                         |
| [ms](https://github.com/vercel/ms)                                                                           |  2.1.3   | MIT                                        | [LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)                                                |
| [parse-entities](https://github.com/wooorm/parse-entities)                                                   |  4.0.2   | MIT                                        | [LICENSE](licenses/downloads/parse-entities@4.0.2-LICENSE.txt)                                    |
| [strtok3](https://github.com/Borewit/strtok3)                                                                |  10.3.5  | MIT                                        | [LICENSE](licenses/downloads/strtok3@10.3.5-LICENSE.txt)                                          |
| [token-types](https://github.com/Borewit/token-types)                                                        |  6.1.2   | MIT                                        | [LICENSE](licenses/downloads/token-types@6.1.2-LICENSE.txt)                                       |
| [uint8array-extras](https://github.com/sindresorhus/uint8array-extras)                                       |  1.6.0   | MIT                                        | [LICENSE](licenses/downloads/uint8array-extras@1.6.0-LICENSE.txt)                                 |
| [valibot](https://github.com/open-circle/valibot)                                                            |  1.5.0   | MIT                                        | [LICENSE](licenses/downloads/valibot@1.5.0-LICENSE.txt)                                           |

### Dependency Tree

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.865 — this month: 2026-09-29
    - **[file-type](https://github.com/sindresorhus/file-type)** 22.1.1 — this month: 2026-09-17
        - **[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)** 0.4.1 — **10 months** ago: 2025-11-18 ⚠️
            - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
            - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — **9 months** ago: 2026-01-01 ⚠️
        - **[strtok3](https://github.com/Borewit/strtok3)** 10.3.5 — **6 months** ago: 2026-03-21
            - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — **62 months** ago: 2021-07-12 ⚠️
        - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — **9 months** ago: 2026-01-01 ⚠️
            - **[@borewit/text-codec](https://github.com/Borewit/text-codec)** 0.2.2 — **6 months** ago: 2026-03-11
            - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — **62 months** ago: 2021-07-12 ⚠️
            - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — **71 months** ago: 2020-10-27 ⚠️
        - **[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)** 1.6.0 — this month: 2026-09-26
    - **[valibot](https://github.com/open-circle/valibot)** 1.5.0 — this month: 2026-09-09
- **[@dpuse/dpuse-tool-highcharts-visualiser](https://github.com/dpuse/dpuse-tool-highcharts-visualiser)** 0.0.91 — this month: 2026-10-01
    - **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.865 — this month: 2026-09-29
    - **[highcharts](https://github.com/highcharts/highcharts-dist)** 13.1.1 — this month: 2026-09-20
        - **jspdf**
        - **svg2pdf.js**
- **[@dpuse/dpuse-tool-micromark-markdown-parser](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser)** 0.1.1051 — this month: 2026-10-01
    - **[@speed-highlight/core](https://github.com/speed-highlight/core)** 2.1.0 — **1 month** ago: 2026-08-25
    - **[micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)** 4.0.0 — **19 months** ago: 2025-02-27 ⚠️
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[dequal](https://github.com/lukeed/dequal)** 2.0.3 — **50 months** ago: 2022-07-11 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[parse-entities](https://github.com/wooorm/parse-entities)** 4.0.2 — **21 months** ago: 2024-12-13 ⚠️
            - **[@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.0.11 — **25 months** ago: 2024-08-15 ⚠️ → **latest**: 3.0.3 — **25 months** ago: 2024-08-15 ⚠️ ❗
            - **[character-entities-legacy](https://github.com/wooorm/character-entities-legacy)** 3.0.0 — **59 months** ago: 2021-10-29 ⚠️
            - **[character-reference-invalid](https://github.com/wooorm/character-reference-invalid)** 2.0.1 — **59 months** ago: 2021-10-27 ⚠️
            - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[is-alphanumerical](https://github.com/wooorm/is-alphanumerical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
                - **[is-alphabetical](https://github.com/wooorm/is-alphabetical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
                - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-hexadecimal](https://github.com/wooorm/is-hexadecimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
    - **[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)** 2.1.2 — this month: 2026-09-11
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
    - **[micromark](https://github.com/micromark/micromark.git#main)** 4.0.3 — this month: 2026-09-26
        - **[@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.1.13 — **6 months** ago: 2026-03-19
            - **[@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.1.0 — **20 months** ago: 2025-01-16 ⚠️
        - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
            - **[ms](https://github.com/vercel/ms)** 2.1.3 — **69 months** ago: 2020-12-08 ⚠️
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[character-entities](https://github.com/wooorm/character-entities)** 2.0.2 — **51 months** ago: 2022-06-22 ⚠️
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)** 2.0.4 — this month: 2026-09-26
            - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[micromark-factory-destination](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
            - **[micromark-factory-label](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
            - **[micromark-factory-title](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
            - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
            - **[micromark-util-edit-map](https://github.com/micromark/micromark.git#main)** 1.0.0 — this month: 2026-09-26
            - **[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.1.0 — this month: 2026-09-26
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)** 2.0.2 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-edit-map](https://github.com/micromark/micromark.git#main)** 1.0.0 — this month: 2026-09-26
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
            - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.3 — this month: 2026-09-26
- **[dompurify](https://github.com/cure53/DOMPurify)** 3.4.16 — this month: 2026-09-23
    - **[@types/trusted-types](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.0.7 — **34 months** ago: 2023-11-21 ⚠️

<!-- DEPENDENCY_LICENSES_END -->

 <!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                     | Composition                  |
| :-------------------------------------------------------------------- | :--------------------------- |
| dist/dpuse-presenter-default.es.js                                    | 74.5 kB · gzip 21.3 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;dompurify → dist/purify.es.mjs                | `█████████░░░░░░░░░░░` 43.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)           | `████████░░░░░░░░░░░░` 40.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;@dpuse/dpuse-shared → dist/dpuse-shared.es.js | `██░░░░░░░░░░░░░░░░░░` 11.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                           | `█░░░░░░░░░░░░░░░░░░░` 4.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts              | `█░░░░░░░░░░░░░░░░░░░` 4.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useSampleData.ts      | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                     |
| :------------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                              |

### Code Quality

| Check         | Status | What it does                                                                                                                                                                                                               |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code analysis | ❌ Off | [SonarCloud](https://sonarcloud.io) checks every push for bugs, code smells and vulnerabilities.                                                                                                                           |
| Linting       | ✅ On  | [ESLint](https://eslint.org) checks the code for errors and style problems. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/ci.yml) on every push and pull request to `main`. |

### Security Analysis

| Check           | Status | What it does                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push protection | ✅ On  | [GitHub push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations) blocks pushes that contain credentials.                                                                                                                                                                                                            |
| Static analysis | ✅ On  | [![CodeQL](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-presenter-default/security/code-scanning) [CodeQL](https://codeql.github.com) scans GitHub Actions and JavaScript/TypeScript for security vulnerabilities, using the extended security queries, on every push and pull request to `main` and weekly. |
| Secret scanning | ✅ On  | [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) detects credentials, such as API keys and tokens, committed to the repository.                                                                                                                                                                                                                        |

### Dependencies

| Check               | Status | What it does                                                                                                                                                                                                                                                                                                                   |
| :------------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vulnerability audit | ✅ On  | [npm audit](https://docs.npmjs.com/cli/commands/npm-audit) fails when a shipped dependency has any known vulnerability, or a development dependency has a high or critical one. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-default/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Supply chain risk   | ✅ On  | [Socket](https://socket.dev) flags malicious packages, typosquatting and suspicious behaviour that may not yet have a CVE.                                                                                                                                                                                                     |
| Security alerts     | ✅ On  | [Dependabot](https://docs.github.com/en/code-security/dependabot) alerts when a dependency has a known vulnerability, using the GitHub Advisory Database.                                                                                                                                                                      |
| Security updates    | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests that update vulnerable dependencies. These are handled manually.                                                                                                                                                                         |
| Version updates     | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests for new dependency versions. These are handled manually.                                                                                                                                                                                 |

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-presenter-default/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-presenter-default)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-presenter-default/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

<!-- QUALITY_SECURITY_END -->

<!-- CONTRIBUTING_LICENSE_START -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-presenter-default/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Jonathan Terrell

<!-- CONTRIBUTING_LICENSE_END -->
