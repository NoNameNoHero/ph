(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(t,e,n){"use strict";(function(t){e.a={layout:"koreev",validate:function(t){t.params;return/^\*+$/},asyncData:function(t){var e=t.params;t.id;return{params:e}},components:{},mounted:function(){this.$store.dispatch("toggleFooter",!0),this.$store.dispatch("setTheme",this.photoset.theme);var t=function(){console.log("Фотография успешно загружена."),n,0};window.scrollTo(0,0);var e=document.querySelectorAll("img"),n=100/e.length;e.forEach(function(img){img.onload=t})},computed:{phName:function(){return this.$store.state.photographer[0].Name},phDesc:function(){return this.$store.state.photographer[0].Description},phPhone:function(){return this.$store.state.photographer[0].phone},phAvatar:function(){return this.$store.state.photographer[0].avatar.url},photoset:function(){return this.$store.getters.getPhotoset(0,this.params.photoset)},device:function(){return this.$device.isDesktop?"desktop":"mobile"}}}}).call(this,n(80))},204:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("fda3d212",content,!0,{sourceMap:!1})},217:function(t,e,n){"use strict";var o=n(204);n.n(o).a},218:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"img{max-height:95vh;max-width:100vw}.desktop .main__container{padding:0 3rem}.desktop .main__container .container__head{padding:5rem;display:flex;flex-direction:column}.desktop .main__container .container__head .photoset__title{padding:1rem 0}.desktop .main__container .container__head .photoset__title h1{margin-left:20%;font-size:3rem}.desktop .main__container .container__head .photoset__description span{margin-left:20%;max-width:600px;line-height:1.6rem;display:block;font-size:1rem}.desktop .main__container .container__head .photoset__preview{padding:5rem 0 0;display:block;text-align:center}.desktop .main__container .container__head .photoset__preview img{max-height:80vh;max-width:80vw}.desktop .main__container .container__collection{display:flex;flex-wrap:wrap;justify-content:center}.desktop .main__container .container__collection .photo{max-width:auto;width:auto!important}.desktop .main__container .container__collection img{margin:7rem 3rem}.desktop .main__container .container__collection img:ntd-child(2n){margin-left:5rem!important}.mobile .content{width:100%;overflow:hidden}.mobile .main__container{padding:0 3rem}.mobile .main__container .container__head{padding:5rem;display:flex;flex-direction:column}.mobile .main__container .container__head .photoset__title{padding:1rem 0}.mobile .main__container .container__head .photoset__title h1{margin-left:0;font-size:3rem}.mobile .main__container .container__head .photoset__description span{margin-left:0;max-width:600px;line-height:1.6rem;display:block;font-size:1rem}.mobile .main__container .container__head .photoset__preview{padding:5rem 0 0;display:block;text-align:center}.mobile .main__container .container__head .photoset__preview img{max-height:80vh;max-width:80vw}.mobile .main__container .container__collection{display:flex;flex-wrap:wrap;justify-content:center}.mobile .main__container .container__collection .photo{width:auto!important}.mobile .main__container .container__collection img{min-height:10vh;margin:2rem 1rem}.mobile .main__container .container__collection img:ntd-child(2n){margin-left:10rem!important}",""])},231:function(t,e,n){"use strict";n.r(e);var o=n(203).a,r=(n(217),n(6)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main__container"},[n("div",{staticClass:"container__head"},[n("div",{staticClass:"photoset__title"},[n("h1",[t._v(t._s(t.photoset.Title))])]),n("div",{staticClass:"photoset__description"},[n("span",[t._v(t._s(t.photoset.Description))])])]),n("div",{staticClass:"container__collection"},[t._l(t.photoset.Photos,function(t,e){return[n("img",{staticClass:"photo",attrs:{src:t.url}})]})],2)])])},[],!1,null,null,null);e.default=component.exports}}]);