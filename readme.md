 1. clone
 2. `node index.js`
 
```
➜  __time-require-babel-5 git:(master) ✗ node index.js 


Start time: (2015-11-15 23:39:44 UTC) [treshold=1%]
 #  module                                                                                                     time  %
 1  ../object/keys (node_modules/babel-core/node_modules/lodash/object/keys.js)                                16ms  ▇▇ 2%
 2  ../internal/assignWith (node_modules/babel-core/node_modules/lodash/internal/assignWith.js)                17ms  ▇▇▇ 2%
 3  lodash/object/assign (node_modules/babel-core/node_modules/lodash/object/assign.js)                        28ms  ▇▇▇▇ 3%
 4  ./forEach (node_modules/babel-core/node_modules/lodash/collection/forEach.js)                              12ms  ▇▇ 1%
 5  lodash/collection/each (node_modules/babel-core/node_modules/lodash/collection/each.js)                    13ms  ▇▇ 2%
 6  ./baseMatches (node_modules/babel-core/node_modules/lodash/internal/baseMatches.js)                        13ms  ▇▇ 2%
 7  ../internal/baseCallback (node_modules/babel-core/node_modules/lodash/internal/baseCallback.js)            23ms  ▇▇▇ 3%
 8  lodash/array/uniq (node_modules/babel-core/node_modules/lodash/array/uniq.js)                              33ms  ▇▇▇▇▇ 4%
 9  ./definitions/init (node_modules/babel-core/lib/types/definitions/init.js)                                 15ms  ▇▇ 2%
10  ../../types (node_modules/babel-core/lib/types/index.js)                                                  115ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 14%
11  ../../../transformation/helpers/react (node_modules/babel-core/lib/transformation/helpers/react.js)       116ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 14%
12  ./lib/virtual-types (node_modules/babel-core/lib/traversal/path/lib/virtual-types.js)                     118ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 14%
13  ../scope (node_modules/babel-core/lib/traversal/scope/index.js)                                            26ms  ▇▇▇▇ 3%
14  chalk (node_modules/babel-core/node_modules/chalk/index.js)                                                14ms  ▇▇ 2%
15  ../../helpers/code-frame (node_modules/babel-core/lib/helpers/code-frame.js)                               21ms  ▇▇▇ 3%
16  ../tokenizer (node_modules/babel-core/node_modules/babylon/lib/tokenizer/index.js)                         12ms  ▇▇ 1%
17  ./parser (node_modules/babel-core/node_modules/babylon/lib/parser/index.js)                                15ms  ▇▇ 2%
18  babylon (node_modules/babel-core/node_modules/babylon/lib/index.js)                                        38ms  ▇▇▇▇▇ 5%
19  ../../helpers/parse (node_modules/babel-core/lib/helpers/parse.js)                                         39ms  ▇▇▇▇▇ 5%
20  ./replacement (node_modules/babel-core/lib/traversal/path/replacement.js)                                  62ms  ▇▇▇▇▇▇▇▇ 7%
21  ./path (node_modules/babel-core/lib/traversal/path/index.js)                                              233ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 28%
22  ./context (node_modules/babel-core/lib/traversal/context.js)                                              234ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 28%
23  lodash/lang/clone (node_modules/babel-core/node_modules/lodash/lang/clone.js)                               9ms  ▇▇ 1%
24  ./visitors (node_modules/babel-core/lib/traversal/visitors.js)                                             11ms  ▇▇ 1%
25  ../traversal (node_modules/babel-core/lib/traversal/index.js)                                             247ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%
26  ./plugin-pass (node_modules/babel-core/lib/transformation/plugin-pass.js)                                 247ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%
27  ../../util (node_modules/babel-core/lib/util.js)                                                           26ms  ▇▇▇▇ 3%
28  ./_default (node_modules/babel-core/lib/transformation/modules/_default.js)                                33ms  ▇▇▇▇▇ 4%
29  ./common (node_modules/babel-core/lib/transformation/modules/common.js)                                    35ms  ▇▇▇▇▇ 4%
30  ./common-strict (node_modules/babel-core/lib/transformation/modules/common-strict.js)                      37ms  ▇▇▇▇▇ 4%
31  ../modules (node_modules/babel-core/lib/transformation/modules/index.js)                                   55ms  ▇▇▇▇▇▇▇ 7%
32  ./options/option-manager (node_modules/babel-core/lib/transformation/file/options/option-manager.js)       18ms  ▇▇▇ 2%
33  ./lib/source-map-generator (node_modules/babel-core...de_modules/source-map/lib/source-map-generator.js)   10ms  ▇▇ 1%
34  source-map (node_modules/babel-core/node_modules/source-map/source-map.js)                                 19ms  ▇▇▇ 2%
35  ./node (node_modules/babel-core/lib/generation/node/index.js)                                              10ms  ▇▇ 1%
36  ../../generation (node_modules/babel-core/lib/generation/index.js)                                         51ms  ▇▇▇▇▇▇▇ 6%
37  ./logger (node_modules/babel-core/lib/transformation/file/logger.js)                                        9ms  ▇▇ 1%
38  ./file (node_modules/babel-core/lib/transformation/file/index.js)                                         163ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 20%
39  ./plugin (node_modules/babel-core/lib/transformation/plugin.js)                                           412ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 49%
40  ../transformer (node_modules/babel-core/lib/transformation/transformer.js)                                413ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 50%
41  ./file/plugin-manager (node_modules/babel-core/lib/transformation/file/plugin-manager.js)                 415ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 50%
42  ./pipeline (node_modules/babel-core/lib/transformation/pipeline.js)                                       418ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 50%
43  ./loose (node_modules/babel-core/lib/transformation/transformers/es6/classes/loose.js)                      9ms  ▇▇ 1%
44  ./es6/classes (node_modules/babel-core/lib/transformation/transformers/es6/classes/index.js)               10ms  ▇▇ 1%
45  regexpu/rewrite-pattern (node_modules/babel-core/node_modules/regexpu/rewrite-pattern.js)                  19ms  ▇▇▇ 2%
46  ./es6/regex.unicode (node_modules/babel-core/lib/transformation/transformers/es6/regex.unicode.js)         19ms  ▇▇▇ 2%
47  ./def/core (node_modules/babel-core/node_modules/re...modules/recast/node_modules/ast-types/def/core.js)   12ms  ▇▇ 1%
48  ast-types (node_modules/babel-core/node_modules/reg...ode_modules/recast/node_modules/ast-types/main.js)   69ms  ▇▇▇▇▇▇▇▇▇ 8%
49  ./lib/types (node_modules/babel-core/node_modules/regenerator/node_modules/recast/lib/types.js)            70ms  ▇▇▇▇▇▇▇▇▇ 8%
50  esprima-fb (node_modules/babel-core/node_modules/regenerator/node_modules/esprima-fb/esprima.js)           20ms  ▇▇▇ 2%
51  ./options (node_modules/babel-core/node_modules/regenerator/node_modules/recast/lib/options.js)            22ms  ▇▇▇ 3%
52  ./lines (node_modules/babel-core/node_modules/regenerator/node_modules/recast/lib/lines.js)                32ms  ▇▇▇▇ 4%
53  ./patcher (node_modules/babel-core/node_modules/regenerator/node_modules/recast/lib/patcher.js)            36ms  ▇▇▇▇▇ 4%
54  ./lib/parser (node_modules/babel-core/node_modules/regenerator/node_modules/recast/lib/parser.js)          41ms  ▇▇▇▇▇▇ 5%
55  recast (node_modules/babel-core/node_modules/regenerator/node_modules/recast/main.js)                     116ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 14%
56  ./lib/visit (node_modules/babel-core/node_modules/regenerator/lib/visit.js)                               129ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 15%
57  regenerator (node_modules/babel-core/node_modules/regenerator/main.js)                                    132ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 16%
58  ./other/regenerator (node_modules/babel-core/lib/transformation/transformers/other/regenerator.js)        133ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 16%
59  lodash/collection/reduceRight (node_modules/babel-core/node_modules/lodash/collection/reduceRight.js)       9ms  ▇▇ 1%
60  ./es6/tail-call (node_modules/babel-core/lib/transformation/transformers/es6/tail-call.js)                 10ms  ▇▇ 1%
61  ./transformers (node_modules/babel-core/lib/transformation/transformers/index.js)                         296ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 35%
62  ../transformation (node_modules/babel-core/lib/transformation/index.js)                                   727ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 87%
63  ./lib/api/node.js (node_modules/babel-core/lib/api/node.js)                                               734ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 88%
64  babel-core (node_modules/babel-core/index.js)                                                             737ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 88%
Total require(): 976
Total time: 834ms
```