import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Main,
      name: "main",
      meta: {
        title: 'RCAR 2021 - Conference on Real-time Computing and Robotics - IEEE Robotics and Automation Society',
        // Description: 'The 2020 IEEE International Conference on Real-time Computing and Robotics (IEEE RCAR 2020) will take place from August 2 to 6, 2020 in Asahikawa, Japan. The objective of this conference is to provide a forum for researchers in robotics and real-time computing to share the latest results and to explore the opportunity of research collaboration. With wide applications of robots in industry and services sectors, real-time computing plays one of the major roles in various topics in robotics including real-time control, human-robot interactions, sensor perception and fusion, robot intelligence, etc. The scope of IEEE RCAR 2020 covers research, development and applications in the dynamic and exciting areas of real-time computing and robotics.',
        // Keywords: 'IEEE, RCAR, Robot, robotic, conference, automation, society, www.ieee-rcar.org, ieee-rcar',
      },

      children: [
        {
          path: "/",
          name: "home",
          component: () => import(/* */ "./views/Home.vue")
        },
        {
          path: "/history",
          name: "history",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/History.vue")
        },
        {
          path: "/Committee", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Committee.vue"), props: true
        },
        {
          path: "/program", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Program.vue"), props: true
        },
        {
          path: "/FinalSubmission", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/FinalSubmission.vue"), props: true
        },
        {
          path: "/InitialSubmission", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/InitialSubmission.vue"), props: true
        },
        {
          path: "/CallForPapers", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/CallForPapers.vue"), props: true
        },
        {
          path: "/Registration", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Registration.vue"), props: true
          },
        {
          path: "/Plenary", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Plenary.vue"), props: true
        },
        {
          path: "/Keynote", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Keynote.vue"), props: true
        },
        {
          path: "/Technical", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Technical.vue"), props: true
        },
        {
          path: "/tutorials", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Tutorial.vue"), props: true
        },
        {
          path: "/:title", name: "articles", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Article.vue"), props: true
        },
        {
          path: "/:title", name: "articles", // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Article.vue"), props: true
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  var result = window.location.toString();
  if (result.indexOf("?onpc") == -1) {
    var browser = {
      versions: (function () {
        var u = navigator.userAgent;
        return {
          //?????????????????????????????????
          trident: u.indexOf("Trident") > -1, //IE??????
          presto: u.indexOf("Presto") > -1, //opera??????
          webKit: u.indexOf("AppleWebKit") > -1, //?????????????????????
          gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //????????????
          mobile:
            !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //?????????????????????
          ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios??????
          android: u.indexOf("Android") > -1, //android????????????uc?????????
          // android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android????????????uc?????????
          linux: u.indexOf("Linux") > -1,
          iPhone:
            u.indexOf("iPhone") > -1 ||
            (u.indexOf("Mac") > -1 && u.indexOf("Macintosh") < 0), //?????????iPhone??????QQHD?????????
          iPad: u.indexOf("iPad") > -1, //??????iPad
          webApp: u.indexOf("Safari") == -1 //??????web????????????????????????????????????
        };
      })(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (!browser.versions.iPad) {
      if (browser.versions.android || browser.versions.iPhone) {
        self.location = "/mobile"; //??????????????????????????????
      }
    }
  }
  next();
});

export default router;
