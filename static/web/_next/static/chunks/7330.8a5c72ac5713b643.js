(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7330],{92755:function(e,n,o){"use strict";o.r(n),o.d(n,{NameChangeModal:function(){return f}});var a=o(85893),t=o(67294),r=o(4480),l=o(16655),i=o(51095),c=o(47737),s=o(14424),d=o(6737),u=o(14413),h=o(48699),p=o.n(h);let{Option:m}=l.default,g=e=>{let{color:n}=e;return(0,a.jsx)("div",{style:{textAlign:"center",backgroundColor:"var(--theme-color-users-".concat(n,")"),width:"100%",height:"100%"}})},f=e=>{let{closeModal:n}=e,o=(0,r.sJ)(u.db),h=(0,r.sJ)(u.Gt),[f,C]=(0,t.useState)(null==o?void 0:o.displayName);if(!o)return null;let{displayName:y,displayColor:v}=o,w=()=>{let e=void 0!==f?Array.from(f).length:0;return f!==y&&e>0&&e<=30&&(null==h?void 0:h.isConnected())},S=()=>{if(!w())return;let e={type:d.C.NAME_CHANGE,newName:f};h.send(e),n()},b=[...Array(8)].map((e,n)=>n),E=(0,a.jsx)(i.Z,{type:"primary",id:"name-change-submit",onClick:S,disabled:!w(),children:"Change name"});return(0,a.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages.",(0,a.jsx)(c.default,{onSubmitCapture:S,className:p().form,children:(0,a.jsx)(s.default.Search,{enterButton:E,id:"name-change-field",value:f,onChange:e=>C(e.target.value),placeholder:"Your chat display name","aria-label":"Your chat display name",showCount:{formatter:e=>e.count>30?"Over limit":""},defaultValue:y,className:p().inputGroup})}),(0,a.jsx)(c.default.Item,{label:"Your Color",className:p().colorChange,children:(0,a.jsx)(l.default,{style:{width:120},onChange:e=>{let n={type:d.C.COLOR_CHANGE,newColor:Number(e)};h.send(n)},defaultValue:v.toString(),className:p().colorDropdown,children:b.map(e=>(0,a.jsx)(m,{title:e,children:(0,a.jsx)(g,{color:e,"aria-label":e.toString()})},e.toString()))})}),'You can also authenticate an IndieAuth or Fediverse account via the "Authenticate" menu.']})}},88101:function(e,n,o){"use strict";o.d(n,{Z:function(){return i}});var a=o(1413),t=o(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=o(97902),i=t.forwardRef(function(e,n){return t.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))})},40709:function(e,n,o){"use strict";var a=o(67294);n.Z=(0,a.createContext)(void 0)},70132:function(e,n,o){"use strict";o.d(n,{Z:function(){return l}});var a=o(1413),t="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function r(e,n){return 0===e.indexOf(n)}function l(e){var n,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===o?{aria:!0,data:!0,attr:!0}:!0===o?{aria:!0}:(0,a.Z)({},o);var l={};return Object.keys(e).forEach(function(o){(n.aria&&("role"===o||r(o,"aria-"))||n.data&&r(o,"data-")||n.attr&&t.includes(o))&&(l[o]=e[o])}),l}},48699:function(e){e.exports={inputGroup:"NameChangeModal_inputGroup__7489y",colorChange:"NameChangeModal_colorChange__AkRZE",colorDropdown:"NameChangeModal_colorDropdown__tJ7mn","ant-select-customize-input":"NameChangeModal_ant-select-customize-input__aRklC"}}}]);