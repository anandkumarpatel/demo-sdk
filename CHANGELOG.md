# Changelog

## 0.2.0 (2025-10-09)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/anandkumarpatel/demo-sdk/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([31bfab1](https://github.com/anandkumarpatel/demo-sdk/commit/31bfab1767c1286d8c34289c97a43a5e502e28c6))
* **mcp:** add code execution tool ([5cac594](https://github.com/anandkumarpatel/demo-sdk/commit/5cac5941692b2fb47aa0f4139ea268b0c108405b))
* **mcp:** add logging when environment variable is set ([c0259e3](https://github.com/anandkumarpatel/demo-sdk/commit/c0259e3a048b78ba498a0d1ed159a36fc66b2b9e))
* **mcp:** add option to infer mcp client ([bbeaa8f](https://github.com/anandkumarpatel/demo-sdk/commit/bbeaa8ff5116d5c1671a5c4d504293f1748c73d1))
* **mcp:** add unix socket option for remote MCP ([fcf26c5](https://github.com/anandkumarpatel/demo-sdk/commit/fcf26c5b0ccb26fc91c9173b8ca8c23f5ad05426))
* **mcp:** parse query string as mcp client options in mcp server ([c141b7b](https://github.com/anandkumarpatel/demo-sdk/commit/c141b7bb3383db3f07051bfdfd099908b4f55f90))
* **mcp:** remote server with passthru auth ([215cb96](https://github.com/anandkumarpatel/demo-sdk/commit/215cb96dcee9dfff79660993ff84aafce36b24dd))
* **mcp:** support filtering tool results by a jq expression ([01a1503](https://github.com/anandkumarpatel/demo-sdk/commit/01a15031811e1a7f50590b4988e76584ee0c465b))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([d5237d1](https://github.com/anandkumarpatel/demo-sdk/commit/d5237d17f4fbd2c1f183f05df4998c8d6d7136a1))
* **mcp:** fix bug in header handling ([99dbed7](https://github.com/anandkumarpatel/demo-sdk/commit/99dbed7d82883212717bea599e903907500c457b))
* **mcp:** fix tool description of jq_filter ([1056949](https://github.com/anandkumarpatel/demo-sdk/commit/10569499a9facbb0fe69ec252463c4b976bf0d43))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([c8bbec5](https://github.com/anandkumarpatel/demo-sdk/commit/c8bbec5aa80006a5acd4ce755118c4f38f20a65c))
* **mcp:** include required section for top-level properties and support naming transformations ([2759276](https://github.com/anandkumarpatel/demo-sdk/commit/27592760f61d6eeaab09152c2b66c5bdeb529e49))
* **mcp:** relax input type for asTextContextResult ([056c8c0](https://github.com/anandkumarpatel/demo-sdk/commit/056c8c0adba362ed9fd482556d38a10cf834d9d0))
* **mcp:** reverse validJson capability option and limit scope ([9c7fcfb](https://github.com/anandkumarpatel/demo-sdk/commit/9c7fcfb08b168314b963c36e0afefcc09463b430))
* **mcp:** support jq filtering on cloudflare workers ([00453d9](https://github.com/anandkumarpatel/demo-sdk/commit/00453d9f49ad07192f98535299830af769fa7c12))


### Performance Improvements

* faster formatting ([7926ddd](https://github.com/anandkumarpatel/demo-sdk/commit/7926ddd90be49188d5e20e5f5cf114a33a329843))


### Chores

* add docs to RequestOptions type ([f18bc0a](https://github.com/anandkumarpatel/demo-sdk/commit/f18bc0ac90ab49046a3745fdba30d7e00d49a55b))
* add package to package.json ([4766443](https://github.com/anandkumarpatel/demo-sdk/commit/47664430d5e4982ae0bd59057fbdc4b306efa176))
* **client:** qualify global Blob ([3819157](https://github.com/anandkumarpatel/demo-sdk/commit/3819157cd8e6c7296812e0bf90414c611b9e25f9))
* **deps:** update dependency @types/node to v20.17.58 ([0e57eb6](https://github.com/anandkumarpatel/demo-sdk/commit/0e57eb6ce5032f8afbf89423f0996d33c4c21a98))
* **internal:** codegen related update ([41f7118](https://github.com/anandkumarpatel/demo-sdk/commit/41f7118f23ab4aca85d1c005d3ad17de99024a63))
* **internal:** codegen related update ([60a97b0](https://github.com/anandkumarpatel/demo-sdk/commit/60a97b0e774a36ac2e4c651298ac91042481ec33))
* **internal:** codegen related update ([74ab6c2](https://github.com/anandkumarpatel/demo-sdk/commit/74ab6c2316d35555e6bb9b8385877b235f6a4ef2))
* **internal:** codegen related update ([a67fb56](https://github.com/anandkumarpatel/demo-sdk/commit/a67fb56a52884a8bf4073c66196277a041aef51c))
* **internal:** codegen related update ([d41b283](https://github.com/anandkumarpatel/demo-sdk/commit/d41b2832f779b2ddbaf7d9d552a8f7c7cc73b94b))
* **internal:** codegen related update ([fab7de4](https://github.com/anandkumarpatel/demo-sdk/commit/fab7de4f186c205c912f74fc9177fec0a288ec02))
* **internal:** codegen related update ([c3d37c5](https://github.com/anandkumarpatel/demo-sdk/commit/c3d37c554e696876b68c0789d4287458a58dbaf3))
* **internal:** formatting change ([5879adc](https://github.com/anandkumarpatel/demo-sdk/commit/5879adcb8b55cc1fe31cf4ebdc32cd66e4076ad6))
* **internal:** make mcp-server publishing public by defaut ([e040a9f](https://github.com/anandkumarpatel/demo-sdk/commit/e040a9f98eeb098b49571db09febe5fe715c717d))
* **internal:** move publish config ([a9a89bd](https://github.com/anandkumarpatel/demo-sdk/commit/a9a89bd6d221ce79879a8e4a02013d7c152f6f4d))
* **internal:** refactor array check ([412db63](https://github.com/anandkumarpatel/demo-sdk/commit/412db630cb3377a65f9350c52ea5469c36daff73))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([751671c](https://github.com/anandkumarpatel/demo-sdk/commit/751671c7ee4bfeeebb5733ccca2aa2d14a57c615))
* **internal:** remove redundant imports config ([397f442](https://github.com/anandkumarpatel/demo-sdk/commit/397f442b8718ba8422b16d7ba7a546f9a241558c))
* **internal:** update comment in script ([c054572](https://github.com/anandkumarpatel/demo-sdk/commit/c054572c32a5ff6bb4782d8efcb220a95a6095ce))
* **internal:** update global Error reference ([0f6acfe](https://github.com/anandkumarpatel/demo-sdk/commit/0f6acfe2fa8d824643efe4bb4da298feb949fa30))
* make some internal functions async ([3d15c5e](https://github.com/anandkumarpatel/demo-sdk/commit/3d15c5ef2e10ff817b16b5cc982e3525e4fd441f))
* **mcp:** add cors to oauth metadata route ([c827e9a](https://github.com/anandkumarpatel/demo-sdk/commit/c827e9abab91179bd9f717e1535fa7609bd2b03b))
* **mcp:** document remote server in README.md ([517a88b](https://github.com/anandkumarpatel/demo-sdk/commit/517a88b57a7cb9c68738401506cd523910d931df))
* **mcp:** formatting ([f122505](https://github.com/anandkumarpatel/demo-sdk/commit/f1225052c830c97ff211c7c4eee7a341252306b7))
* **mcp:** minor cleanup of types and package.json ([312e21c](https://github.com/anandkumarpatel/demo-sdk/commit/312e21c5a0cf40cddbcd7034e20b994e53f7e8df))
* **mcp:** refactor streamable http transport ([42ddd66](https://github.com/anandkumarpatel/demo-sdk/commit/42ddd6636b177120fa644bf084190bf9f521110d))
* **mcp:** rework imports in tools ([6cf5004](https://github.com/anandkumarpatel/demo-sdk/commit/6cf500453844386d5b83e102972956c9710fc83c))
* **mcp:** update package.json ([3267d9b](https://github.com/anandkumarpatel/demo-sdk/commit/3267d9b4c59b26e5827deb3e8ffd0022b6c0abe3))
* **mcp:** update README ([e80a7fa](https://github.com/anandkumarpatel/demo-sdk/commit/e80a7fab72959ac9405b3f66ebf8a91baae408e1))
* **mcp:** update types ([ca3595a](https://github.com/anandkumarpatel/demo-sdk/commit/ca3595a7c21b81899131552b277671b84bd2015d))
* **ts:** reorder package.json imports ([070fc58](https://github.com/anandkumarpatel/demo-sdk/commit/070fc58f426b0b2d0f0944ed191ca7ef650775a0))
* update @stainless-api/prism-cli to v5.15.0 ([54251b6](https://github.com/anandkumarpatel/demo-sdk/commit/54251b6a239e4fdc7375d75de7d19eb14833ba6e))
* update CI script ([36119fd](https://github.com/anandkumarpatel/demo-sdk/commit/36119fdcca4271406430f1ca08cf6f6483c4cfd0))

## 0.1.0 (2025-07-01)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/anandkumarpatel/demo-sdk/compare/v0.0.2...v0.1.0)

### Features

* **client:** add support for endpoint-specific base URLs ([a0980e3](https://github.com/anandkumarpatel/demo-sdk/commit/a0980e3d61ce85338cdb711661fdd005a291db71))
* **mcp:** fallback for void-typed methods ([a4cade5](https://github.com/anandkumarpatel/demo-sdk/commit/a4cade53014b9e0f67be6faf912696e65625604e))
* **mcp:** implement support for binary responses ([9db6ac3](https://github.com/anandkumarpatel/demo-sdk/commit/9db6ac38c94432036e9aeed15e299313c09447ab))
* **mcp:** set X-Stainless-MCP header ([d8b4342](https://github.com/anandkumarpatel/demo-sdk/commit/d8b434271e7b312f3cd34e23073df67192faa10e))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([304d3e4](https://github.com/anandkumarpatel/demo-sdk/commit/304d3e4b3cc134c4e339f13b2e4f34e5cb353428))
* **client:** explicitly copy fetch in withOptions ([fc51127](https://github.com/anandkumarpatel/demo-sdk/commit/fc511273c49befef68cd27682fd8d358985bf511))
* **client:** get fetchOptions type more reliably ([7e660cc](https://github.com/anandkumarpatel/demo-sdk/commit/7e660cc82352dccb2379766848565935ab7e0fe8))
* publish script — handle NPM errors correctly ([561e015](https://github.com/anandkumarpatel/demo-sdk/commit/561e0157e1394d351de3df77bc598f8769e41c6e))


### Chores

* adjust eslint.config.mjs ignore pattern ([34fccdc](https://github.com/anandkumarpatel/demo-sdk/commit/34fccdc2e3da5e51d45fa898aacb0e9802036148))
* avoid type error in certain environments ([18ea8f2](https://github.com/anandkumarpatel/demo-sdk/commit/18ea8f2210ffb971e7d9b02a48a0308b76399fa4))
* **ci:** enable for pull requests ([15398ab](https://github.com/anandkumarpatel/demo-sdk/commit/15398abbc4e255a362e2b26435e5028f445476e0))
* **ci:** only run for pushes and fork pull requests ([05576c8](https://github.com/anandkumarpatel/demo-sdk/commit/05576c8dcb5291ca2b0c6b8f38be76ebd16b7e0e))
* **client:** improve path param validation ([d99dbd2](https://github.com/anandkumarpatel/demo-sdk/commit/d99dbd2afc373dd21ae7273cdab3a170253202c8))
* **client:** refactor imports ([0f83371](https://github.com/anandkumarpatel/demo-sdk/commit/0f83371a291595514daac300a275aeee783e5edc))
* **docs:** use top-level-await in example snippets ([b667307](https://github.com/anandkumarpatel/demo-sdk/commit/b667307d0c7d5b196105164ec3d9fb0a148ad558))
* **internal:** add pure annotations, make base APIResource abstract ([c9b250d](https://github.com/anandkumarpatel/demo-sdk/commit/c9b250d030f1cd908035f3d96138e8b442873e5e))
* **internal:** fix readablestream types in node 20 ([c064eeb](https://github.com/anandkumarpatel/demo-sdk/commit/c064eebf032dd93535277a0eeba99284b6ca371b))
* **mcp:** provides high-level initMcpServer function and exports known clients ([2a14d94](https://github.com/anandkumarpatel/demo-sdk/commit/2a14d944a2b070fec0256074e90912c3c7e175c5))
* **readme:** update badges ([2b25ba8](https://github.com/anandkumarpatel/demo-sdk/commit/2b25ba836fe5e7dece8889b64348d1c36250b0b5))
* **readme:** use better example snippet for undocumented params ([3a1d78f](https://github.com/anandkumarpatel/demo-sdk/commit/3a1d78fecd049690e991ab13146d04ac979d2f0a))
* sync repo ([9b571a4](https://github.com/anandkumarpatel/demo-sdk/commit/9b571a4fd0c1591e91bb03d48a5f3b265c1f4a81))
* update SDK settings ([0b83c21](https://github.com/anandkumarpatel/demo-sdk/commit/0b83c2129d3d7ede009e53396555f87ca6d67796))
* update SDK settings ([df06467](https://github.com/anandkumarpatel/demo-sdk/commit/df064672eb491ad7b5a5bf8484db0884e86dbf0f))


### Refactors

* **types:** replace Record with mapped types ([08bf797](https://github.com/anandkumarpatel/demo-sdk/commit/08bf7977a89589e95a75be41ac31013139ba2ccd))
