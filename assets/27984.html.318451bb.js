import{i as p,j as f,o as $,c as h,a as c,F as m,p as S,b as v}from"./app.4ca8afde.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const g={setup(){const o=p(null),_=p(null);return f(()=>{function d(l){try{const n=JSON.parse(l);return!!(typeof n=="object"&&n)}catch{return console.error("\u4E0D\u662Fjson\u683C\u5F0F\u7684\u6570\u636E"),!1}}o.value.addEventListener("change",function(){let l=o.value.value;if(!d(l))return;l=JSON.parse(l).data;const n=l.title,e=l.form[0].set;console.log(n,e);let i=`// ${n}
`;i+=`const FORM_KEY = '${e[0].entityName}__' 
`,i+=`const formKyes = {
`;for(let t=0;t<e.length;t++)e[t].alias&&(i+=`   ${e[t].alias}: \`\${FORM_KEY}${e[t].alias}\` , //${e[t].title}
`);i+=`} 
`;let s="";for(let t=0;t<e.length;t++)if(e[t].typeSet.head){let u=e[t].typeSet.head[0].title,a=e[t].typeSet.head[0].set;console.log(u,a),s+=`// ${u} 
`,s+=`const tFORM_KEY_${a[0].alias} = '${a[0].entityName}__' 
`,s+=`const tFormKyes_${a[0].alias} = { 
`;for(let r=0;r<a.length-1;r++)a[r].alias&&(s+=`   ${a[r].alias}: \`\${tFORM_KEY_${a[0].alias}}${a[r].alias}\` , //${a[r].title} 
`);s+=`} 
`}_.value.innerHTML=i+s})}),{textarea:o,preCode:_}}},O=o=>(S("data-v-52dad002"),o=o(),v(),o),x=O(()=>c("blockquote",null,[c("p",null,"\u8BF7\u8F93\u5165\u6307\u5B9AJSON\u683C\u5F0F\u7684\u6570\u636E")],-1)),F={ref:"textarea",cols:"30",rows:"10",placeholder:"JSON \u6570\u636E"},N={ref:"preCode"};function b(o,_,d,l,n,e){return $(),h(m,null,[x,c("div",null,[c("textarea",F,null,512),c("pre",null,[c("code",N,null,512)])])],64)}var M=y(g,[["render",b],["__scopeId","data-v-52dad002"]]);export{M as default};
