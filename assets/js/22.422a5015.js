(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{287:function(s,t,e){},305:function(s,t,e){"use strict";e(287)},319:function(s,t,e){"use strict";e.r(t);e(91);var a={data:()=>({releases:[]}),methods:{getReleases(){fetch("https://api.github.com/repos/shichuyibushishiwu/tuna.revit.release/releases").then(s=>s.json()).then(s=>{for(const t of s){if(null===t.assets)continue;if(0===t.assets.length)continue;const s=t.assets[0];this.releases.push({name:t.name,count:s.download_count,url:s.browser_download_url})}}).catch(s=>{console.log(s)})}},mounted(){this.getReleases()}},n=(e(305),e(10)),i=Object(n.a)(a,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"container"},s._l(s.releases,(function(e){return t("li",[t("div",{staticClass:"item"},[t("p",[s._v(s._s(e.name))]),s._v(" "),t("p",[s._v(s._s(e.count))]),s._v(" "),t("p",[t("a",{attrs:{href:e.url}},[t("svg",{staticClass:"icon",attrs:{t:"1718633517191",viewBox:"0 0 1047 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4416",width:"16",height:"16"}},[t("path",{attrs:{d:"M523.987449 0a42.759353 42.759353 0 0 0-42.759353 42.759353v498.158822L301.663529 361.353608a43.500845 43.500845 0 0 0-60.555153 0 42.759353 42.759353 0 0 0 0 60.431572l227.020033 227.267198a79.092445 79.092445 0 0 0 111.223751 0l227.514362-227.143616a42.635771 42.635771 0 0 0 0-60.555154 42.882935 42.882935 0 0 0-60.555153 0L566.870384 540.918175V42.759353A42.882935 42.882935 0 0 0 523.987449 0z",fill:"#4D4D4D","p-id":"4417"}}),s._v(" "),t("path",{attrs:{d:"M860.871832 120.245233a42.882935 42.882935 0 1 0 0 85.642288 101.584359 101.584359 0 0 1 101.460777 101.584359v529.301473a101.584359 101.584359 0 0 1-101.460777 101.584359H187.226647a101.707941 101.707941 0 0 1-101.584359-101.584359V307.47188a101.707941 101.707941 0 0 1 101.584359-101.584359 42.882935 42.882935 0 0 0 0-85.642288A187.473811 187.473811 0 0 0 0 307.47188v529.301473a187.473811 187.473811 0 0 0 187.226647 187.226647h673.645185A187.350229 187.350229 0 0 0 1047.974897 836.773353V307.47188A187.350229 187.350229 0 0 0 860.871832 120.245233z",fill:"#4D4D4D","p-id":"4418"}})])])])])])})),0)}),[],!1,null,null,null);t.default=i.exports}}]);