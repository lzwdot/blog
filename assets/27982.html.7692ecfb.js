import{d as t,o,c as e,e as c,w as p,F as l,a as n,g as s}from"./app.4ca8afde.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},i=n("h1",{id:"web-components-\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web-components-\u793A\u4F8B","aria-hidden":"true"},"#"),s(" Web Components \u793A\u4F8B")],-1),r=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528 image,name,email \u7C7B\u4F3C vue \u7684\u503C\u7ED1\u5B9A -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("user-card")]),s(` 
`),n("span",{class:"token attr-name"},"image"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//semantic-ui.com/./images/avatar2/large/kristy.png"),n("span",{class:"token punctuation"},'"')]),s(` 
`),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("User Name"),n("span",{class:"token punctuation"},'"')]),s(`
`),n("span",{class:"token attr-name"},"email"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("yourmail@some-email.com"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("user-card")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token comment"},"<!-- \u7C7B\u4F3C vue template\u6A21\u677F -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("userCardTemplate"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("image"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("email"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Follow John"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- \u6837\u5F0F\u5199\u5728\u8FD9\u91CC\u9762\u53EF\u4EE5\u4FDD\u6301\u79C1\u6709 \u7C7B\u4F3C vue \u4E2D\u7684 scope -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
        `),n("span",{class:"token selector"},":host"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 450px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 180px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #d4d4d4"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #d5d5d5"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 1px 1px 5px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 3px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" hidden"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" border-box"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'Poppins'"),n("span",{class:"token punctuation"},","),s(" sans-serif"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token selector"},".image"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),s(" 0 0 auto"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 160px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 160px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" middle"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" border-box"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 160px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token selector"},".container>.name"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 600"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token selector"},".container>.email"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0.75"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 15px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token selector"},".container>.button"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px 25px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token property"},"text-transform"),n("span",{class:"token punctuation"},":"),s(" uppercase"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"UserCard"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"HTMLElement"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"// js \u4F20\u7EDF\u5199\u6CD5    "),s(`
            `),n("span",{class:"token comment"},"// var image = document.createElement('img');"),s(`
            `),n("span",{class:"token comment"},"// image.src = 'https://semantic-ui.com/./images/avatar2/large/kristy.png';"),s(`
            `),n("span",{class:"token comment"},"// image.classList.add('image');"),s(`

            `),n("span",{class:"token comment"},"// var container = document.createElement('div');"),s(`
            `),n("span",{class:"token comment"},"// container.classList.add('container');"),s(`

            `),n("span",{class:"token comment"},"// var name = document.createElement('p');"),s(`
            `),n("span",{class:"token comment"},"// name.classList.add('name');"),s(`
            `),n("span",{class:"token comment"},"// name.innerText = 'User Name';"),s(`

            `),n("span",{class:"token comment"},"// var email = document.createElement('p');"),s(`
            `),n("span",{class:"token comment"},"// email.classList.add('email');"),s(`
            `),n("span",{class:"token comment"},"// email.innerText = 'yourmail@some-email.com';"),s(`

            `),n("span",{class:"token comment"},"// var button = document.createElement('button');"),s(`
            `),n("span",{class:"token comment"},"// button.classList.add('button');"),s(`
            `),n("span",{class:"token comment"},"// button.innerText = 'Follow';"),s(`

            `),n("span",{class:"token comment"},"// container.append(name, email, button);"),s(`
            `),n("span",{class:"token comment"},"// this.append(image, container);"),s(`

            `),n("span",{class:"token comment"},"// shadow \u4E3B\u8981\u4FDD\u8BC1\u529F\u80FD\u6216\u8005\u6837\u5F0F\u7684\u79C1\u6709\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u6C61\u67D3\u5176\u4ED6\u529F\u80FD\u6216\u8005\u6837\u5F0F\u3002"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" shadow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"attachShadow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'closed'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u4F7F\u7528 closed \u65E0\u6CD5\u901A\u8FC7this.shadowRoot\u83B7\u53D6"),s(`

            `),n("span",{class:"token comment"},"// \u83B7\u53D6 template"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" userCardTemplate "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'userCardTemplate'"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"// clone template \u5185\u5BB9 \u8FD9\u4E2A\u6A21\u677F\u53EF\u80FD\u8FD8\u8981\u7559\u7ED9\u5176\u4ED6\u5B9E\u4F8B\u4F7F\u7528"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" content "),n("span",{class:"token operator"},"="),s(" userCardTemplate"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cloneNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"// \u7C7B\u4F3C vue prop \u63A5\u6536\u503C\uFF0C\u5E76\u8D4B\u503C"),s(`
            content`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'image'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            content`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.container>.name'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            content`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.container>.email'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'email'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// \u5185\u5BB9\u6DFB\u52A0\u5230 shadow dom \u4E2D"),s(`
            shadow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("content"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),s(`
    window`),n("span",{class:"token punctuation"},"."),s("customElements"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'user-card'"),n("span",{class:"token punctuation"},","),s(" UserCard"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function m(d,g){const a=t("html-demo");return o(),e(l,null,[i,c(a,null,{default:p(()=>[r]),_:1})],64)}var x=u(k,[["render",m]]);export{x as default};
