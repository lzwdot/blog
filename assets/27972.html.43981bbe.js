import{d as t,o,c as e,e as c,w as p,F as l,a as n,g as s}from"./app.4ca8afde.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},i=n("h1",{id:"canvas-\u56FE\u7247\u538B\u7F29\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#canvas-\u56FE\u7247\u538B\u7F29\u793A\u4F8B","aria-hidden":"true"},"#"),s(" canvas \u56FE\u7247\u538B\u7F29\u793A\u4F8B")],-1),r=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token operator"},"<"),s("input type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"file"'),s(" id"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"upload"'),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"ACCEPT"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'image/jpg'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'image/jpeg'"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"MAXSIZE"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1024"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"MAXSIZE_STR"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'1MB'"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" upload "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// \u56FE\u7247\u8F6Cbase64"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"ImgToBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("file"),n("span",{class:"token punctuation"},","),s(" callback")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" base64Img "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s(`result
            callback `),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("base64Img"),n("span",{class:"token punctuation"},")"),s(`
            reader `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u56FE\u7247\u538B\u7F29"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"compress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("base64Img"),n("span",{class:"token punctuation"},","),s(" callback")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" maxW "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1024"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" maxH "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1024"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" img "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Image"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" ratio "),n("span",{class:"token comment"},"// \u538B\u7F29\u6BD4\u4F8B"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" needCompress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token comment"},"// \u662F\u5426\u9700\u8981\u538B\u7F29"),s(`

            `),n("span",{class:"token comment"},"// \u538B\u7F29\u6BD4\u4F8B"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("maxW "),n("span",{class:"token operator"},"<"),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalWidth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                needCompress `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
                ratio `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalWidth "),n("span",{class:"token operator"},"/"),s(` maxW
                maxH `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalHeight "),n("span",{class:"token operator"},"/"),s(` ratio
            `),n("span",{class:"token punctuation"},"}"),s(`
            
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("maxH "),n("span",{class:"token operator"},"<"),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalHeight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                needCompress `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
                ratio `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalHeight "),n("span",{class:"token operator"},"/"),s(` maxH
                maxW `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalWidth "),n("span",{class:"token operator"},"/"),s(` ratio
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("needCompress"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                maxW `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s(`naturalWidth
                maxH `),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s(`naturalHeight
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token comment"},"//\u6DFB\u52A0 canvas \u5143\u7D20"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" canvas "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},")"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'__compress__'"),n("span",{class:"token punctuation"},")"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(` maxW
            canvas`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(` maxH
            canvas`),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},"."),s("visibility "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'visible'"),s(`
            document`),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("canvas"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token keyword"},"const"),s(" ctx "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"// \u6E05\u7A7A\u4E4B\u524D\u6E32\u67D3\u7684"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" maxW"),n("span",{class:"token punctuation"},","),s(" maxW"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"// \u7ED8\u5236\u56FE\u7247"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" maxW"),n("span",{class:"token punctuation"},","),s(" maxH"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"// \u771F\u6B63\u5B9E\u73B0\u538B\u7F29\u7684\u64CD\u4F5C"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" compressImg "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toDataURL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'image/jpg'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},")"),s(`

            callback `),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("compressImg"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token keyword"},"const"),s(" _img "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Image"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            _img`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(` compressImg
            document`),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("_img"),n("span",{class:"token punctuation"},")"),s(`

            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        img`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(` base64Img
        document`),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u6A21\u62DF\u4E0A\u4F20\u670D\u52A1\u5668"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"uploadToServer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"compressImg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload to server...'"),n("span",{class:"token punctuation"},","),s(" compressImg"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    upload`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("file"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s(`files
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" fileType"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"siz"),n("span",{class:"token operator"},":"),s(" fileSize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` file
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token constant"},"ACCEPT"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("fileType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E0D\u652F\u6301"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("fileType"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u6587\u4EF6\u7C7B\u578B"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
            upload`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fileSize "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token constant"},"MAXSIZE"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u6587\u4EF6\u8D85\u51FA"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"MAXSIZE_STR"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
            upload`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// \u56FE\u7247\u538B\u7F29\u8FD0\u884C"),s(`
        `),n("span",{class:"token function"},"ImgToBase64"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"base64Img"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"compress"),n("span",{class:"token punctuation"},"("),s("base64Img"),n("span",{class:"token punctuation"},","),s(" uploadToServer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`
`)])])],-1);function m(d,g){const a=t("html-demo");return o(),e(l,null,[i,c(a,null,{default:p(()=>[r]),_:1})],64)}var w=u(k,[["render",m]]);export{w as default};
