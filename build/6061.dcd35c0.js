"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6061],{16061:(e,a,t)=>{t.r(a),t.d(a,{VEGA_MIME_TYPE:()=>s,VEGALITE3_MIME_TYPE:()=>n,VEGALITE4_MIME_TYPE:()=>o,RenderedVega:()=>r,rendererFactory:()=>l,default:()=>d});var i=t(28877);const s="application/vnd.vega.v5+json",n="application/vnd.vegalite.v3+json",o="application/vnd.vegalite.v4+json";class r extends i.Widget{constructor(e){super(),this._mimeType=e.mimeType,this._resolver=e.resolver,this.addClass("jp-RenderedVegaCommon5"),this.addClass(this._mimeType===s?"jp-RenderedVega5":"jp-RenderedVegaLite")}async renderModel(e){const a=e.data[this._mimeType];if(void 0===a)return;const t=e.metadata[this._mimeType],i=t&&t.embed_options?t.embed_options:{},n=this._mimeType===s?"vega":"vega-lite",o=null!=g.vega?g.vega:await g.ensureVega(),r=document.createElement("div");this.node.textContent="",this.node.appendChild(r),this._result&&this._result.finalize();const l=o.vega.loader({http:{credentials:"same-origin"}});if(this._result=await o.default(r,a,Object.assign(Object.assign({actions:!0,defaultStyle:!0},i),{mode:n,loader:Object.assign(Object.assign({},l),{sanitize:async(e,a)=>{const t=this._resolver;if((null==t?void 0:t.isLocal)&&t.isLocal(e)){const a=await t.resolveUrl(e);e=await t.getDownloadUrl(a)}return l.sanitize(e,a)}})})),e.data["image/png"])return;const d=await this._result.view.toImageURL("png");e.setData({data:Object.assign(Object.assign({},e.data),{"image/png":d.split(",")[1]})})}dispose(){this._result&&this._result.finalize(),super.dispose()}}const l={safe:!0,mimeTypes:[s,n,o],createRenderer:e=>new r(e)},d={id:"@jupyterlab/vega5-extension:factory",rendererFactory:l,rank:57,dataType:"json",documentWidgetFactoryOptions:[{name:"Vega5",primaryFileType:"vega5",fileTypes:["vega5","json"],defaultFor:["vega5"]},{name:"Vega-Lite4",primaryFileType:"vega-lite4",fileTypes:["vega-lite3","vega-lite4","json"],defaultFor:["vega-lite3","vega-lite4"]}],fileTypes:[{mimeTypes:[s],name:"vega5",extensions:[".vg",".vg.json",".vega"],icon:"ui-components:vega"},{mimeTypes:[o],name:"vega-lite4",extensions:[".vl",".vl.json",".vegalite"],icon:"ui-components:vega"},{mimeTypes:[n],name:"vega-lite3",extensions:[],icon:"ui-components:vega"}]};var g;!function(e){e.ensureVega=function(){return e.vegaReady||(e.vegaReady=t.e(9957).then(t.t.bind(t,59957,23))),e.vegaReady}}(g||(g={}))}}]);
//# sourceMappingURL=6061.dcd35c0.js.map