/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-606e95caa02ea956bd53.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "+5Ji": function (e, t, s) {
      e.exports =
        s.p + "static/dotnet-logo-316fdc3e1dde38abed72a3bb968240b8.png";
    },
    "+HKm": function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solace-amqp10-api",
          componentName: "connectivity-detail-template-v1",
          displayName: "AMQP10 Open Source API",
          protocol: {
            id: "amqp",
            name: "AMQP",
            logo: "./images/amqp.png",
            usesVPN: !1,
          },
          language: { name: "Node.js", logo: "./images/nodejs-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/nodejs-amqp/",
            api:
              "https://github.com/noodlefrenzy/node-amqp10/blob/master/README.md",
            download: [
              {
                name: "GitHub",
                url: "https://github.com/noodlefrenzy/node-amqp10",
              },
            ],
          },
          step1: {
            name: "Node.js API",
            getAPI: [
              { title: "Using NPM", code: ["npm install amqp10 -save"] },
            ],
          },
          step2: {
            introduction: [
              "The amqp10 client uses Promise from the Bluebird library that is a superset of the ES6 Promise specification, but our tutorial examples will follow only the ES6 Promise specification.",
              "In order to send or receive messages, an application that uses the amqp10 client must start a connection to the Solace messaging AMQP service URL. The URL consists of the Solace username, password, and host name with the AMQP service port number in the form amqp://<username>:<password>@<host:port>",
              "Assigning defaultSubjects to false allows the use of a slash-separated hierarchy in the queue name.",
            ],
            code: [
              {
                protocol: "AMQP",
                sample:
                  '                var AMQP = require("amqp10"); <br>               <br>               var amqpClient = new AMQP.Client(AMQP.Policy.merge({ <br>               &nbsp; defaultSubjects : false <br>               })); <br>               <br>               amqpClient.connect("amqp://<span class="value">${username}</span>:<span class="value">${password}</span>@<span class="value">${host}</span>").then(() => { <br>                   &nbsp; console.log("Connected") <br>               }); <br>               ',
              },
              {
                protocol: "Secured AMQP",
                sample:
                  '                var AMQP = require("amqp10"); <br>               <br>               var amqpClient = new AMQP.Client(AMQP.Policy.merge({ <br>               &nbsp; defaultSubjects : false <br>               })); <br>               <br>               amqpClient.connect("amqp://<span class="value">${username}</span>:<span class="value">${password}</span>@<span class="value">${host}</span>").then(() => { <br>                   &nbsp; console.log("Connected") <br>               }); <br>               ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/nodejs-amqp/persistence-with-queues/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url:
                  "https://tutorials.solace.dev/nodejs-amqp/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/nodejs-amqp/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    "+jNR": function (e, t, s) {},
    "148J": function (e, t, s) {
      e.exports =
        s.p + "static/spring-cloud-logo-e48ebd4dcf689497707baacf9128fd3d.png";
    },
    "22kK": function (e, t, s) {
      e.exports =
        s.p + "static/spring-boot-logo-696ec7632ceba0fa955e82648ed0172d.png";
    },
    "2rMq": function (e, t, s) {
      var a;
      !(function () {
        "use strict";
        var n = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          o = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
          };
        void 0 ===
          (a = function () {
            return o;
          }.call(t, s, t, e)) || (e.exports = a);
      })();
    },
    "32DM": function (e, t, s) {
      e.exports = s.p + "static/java-logo-fbe36fdec81f8bdfe525f0f284f75e7c.png";
    },
    "3bGT": function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    "51Ke": function (e, t, s) {
      e.exports =
        s.p +
        "static/messaging-diagram-point-to-point-b43116e4e1bce08f23a50eb8e0760f90.svg";
    },
    "63Ir": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9Ii0xMCAtMjAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwLTItQ29weS0zPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IklfZGV2X1BlcnNpc3RlbnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0yMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTItQ29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4wMDAwMDAsIDIxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLDQ3IEw2MS40MTY5MDMxLDQ3IiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAsMTcgTDU2LjAxOTIyMzcsMTciIGlkPSJMaW5lLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjY0MTQ0MTIzMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUwLjQ1NCwzNC43OCBDNTAuNDU0LDM1LjIxODY2ODkgNTAuNDE2NjY3LDM1LjY0MzMzMTMgNTAuMzQyLDM2LjA1NCBDNTAuMjY3MzMzLDM2LjQ2NDY2ODcgNTAuMTE1NjY3OCwzNi44MzMzMzE3IDQ5Ljg4NywzNy4xNiBDNDkuNjU4MzMyMiwzNy40ODY2NjgzIDQ5LjMyNzAwMjIsMzcuNzQ3OTk5IDQ4Ljg5MywzNy45NDQgQzQ4LjQ1ODk5NzgsMzguMTQwMDAxIDQ3Ljg4MjY3MDMsMzguMjM4IDQ3LjE2NCwzOC4yMzggQzQ2LjYzMTk5NzMsMzguMjM4IDQ2LjE3OTMzNTIsMzguMTU2MzM0MSA0NS44MDYsMzcuOTkzIEM0NS40MzI2NjQ4LDM3LjgyOTY2NTggNDUuMTI0NjY3OSwzNy42MDU2NjgxIDQ0Ljg4MiwzNy4zMjEgQzQ0LjYzOTMzMjEsMzcuMDM2MzMxOSA0NC40NjIwMDA2LDM2LjY5ODAwMiA0NC4zNSwzNi4zMDYgQzQ0LjIzNzk5OTQsMzUuOTEzOTk4IDQ0LjE4MiwzNS40ODkzMzU2IDQ0LjE4MiwzNS4wMzIgTDQ0LjE4MiwzNC41IEw0NS45MzIsMzQuNSBMNDUuOTMyLDM1LjAxOCBDNDUuOTMyLDM1LjU4NzMzNjIgNDYuMDI3NjY1NywzNi4wMjgzMzE4IDQ2LjIxOSwzNi4zNDEgQzQ2LjQxMDMzNDMsMzYuNjUzNjY4MiA0Ni43NzE5OTczLDM2LjgxIDQ3LjMwNCwzNi44MSBDNDcuNTg0MDAxNCwzNi44MSA0Ny44MTQ5OTkxLDM2Ljc2ODAwMDQgNDcuOTk3LDM2LjY4NCBDNDguMTc5MDAwOSwzNi41OTk5OTk2IDQ4LjMyMzY2NjEsMzYuNDc2MzM0MSA0OC40MzEsMzYuMzEzIEM0OC41MzgzMzM5LDM2LjE0OTY2NTggNDguNjEwNjY2NSwzNS45NDY2Njc5IDQ4LjY0OCwzNS43MDQgQzQ4LjY4NTMzMzUsMzUuNDYxMzMyMSA0OC43MDQsMzUuMTg2MDAxNSA0OC43MDQsMzQuODc4IEw0OC43MDQsMjguMDA0IEw1MC40NTQsMjguMDA0IEw1MC40NTQsMzQuNzggWiBNNTIuNTEyLDI4LjAwNCBMNTQuMzYsMjguMDA0IEw1OC45MjQsMzUuMzY4IEw1OC45NTIsMzUuMzY4IEw1OC45NTIsMjguMDA0IEw2MC42MTgsMjguMDA0IEw2MC42MTgsMzggTDU4Ljc3LDM4IEw1NC4yMiwzMC42NSBMNTQuMTc4LDMwLjY1IEw1NC4xNzgsMzggTDUyLjUxMiwzOCBMNTIuNTEyLDI4LjAwNCBaIE02Mi42OSwyOC4wMDQgTDY2LjgzNCwyOC4wMDQgQzY3LjU5OTMzNzIsMjguMDA0IDY4LjI2MTk5NzIsMjguMTM0NjY1NCA2OC44MjIsMjguMzk2IEM2OS4zODIwMDI4LDI4LjY1NzMzNDYgNjkuODM5MzMxNiwyOS4wMTQzMzExIDcwLjE5NCwyOS40NjcgQzcwLjU0ODY2ODQsMjkuOTE5NjY4OSA3MC44MTIzMzI1LDMwLjQ0OTMzMDMgNzAuOTg1LDMxLjA1NiBDNzEuMTU3NjY3NSwzMS42NjI2Njk3IDcxLjI0NCwzMi4zMTEzMjk5IDcxLjI0NCwzMy4wMDIgQzcxLjI0NCwzMy42OTI2NzAxIDcxLjE1NzY2NzUsMzQuMzQxMzMwMyA3MC45ODUsMzQuOTQ4IEM3MC44MTIzMzI1LDM1LjU1NDY2OTcgNzAuNTQ4NjY4NCwzNi4wODQzMzExIDcwLjE5NCwzNi41MzcgQzY5LjgzOTMzMTYsMzYuOTg5NjY4OSA2OS4zODIwMDI4LDM3LjM0NjY2NTQgNjguODIyLDM3LjYwOCBDNjguMjYxOTk3MiwzNy44NjkzMzQ2IDY3LjU5OTMzNzIsMzggNjYuODM0LDM4IEw2Mi42OSwzOCBMNjIuNjksMjguMDA0IFogTTY0LjQ0LDM2LjU3MiBMNjYuMTYyLDM2LjU3MiBDNjYuODQzMzM2NywzNi41NzIgNjcuNDAwOTk3OCwzNi40ODEwMDA5IDY3LjgzNSwzNi4yOTkgQzY4LjI2OTAwMjIsMzYuMTE2OTk5MSA2OC42MDk2NjU0LDM1Ljg2NTAwMTYgNjguODU3LDM1LjU0MyBDNjkuMTA0MzM0NiwzNS4yMjA5OTg0IDY5LjI3MjMzMjksMzQuODQzMDAyMiA2OS4zNjEsMzQuNDA5IEM2OS40NDk2NjcxLDMzLjk3NDk5NzggNjkuNDk0LDMzLjUwNjAwMjUgNjkuNDk0LDMzLjAwMiBDNjkuNDk0LDMyLjQ5Nzk5NzUgNjkuNDQ5NjY3MSwzMi4wMjkwMDIyIDY5LjM2MSwzMS41OTUgQzY5LjI3MjMzMjksMzEuMTYwOTk3OCA2OS4xMDQzMzQ2LDMwLjc4MzAwMTYgNjguODU3LDMwLjQ2MSBDNjguNjA5NjY1NCwzMC4xMzg5OTg0IDY4LjI2OTAwMjIsMjkuODg3MDAwOSA2Ny44MzUsMjkuNzA1IEM2Ny40MDA5OTc4LDI5LjUyMjk5OTEgNjYuODQzMzM2NywyOS40MzIgNjYuMTYyLDI5LjQzMiBMNjQuNDQsMjkuNDMyIEw2NC40NCwzNi41NzIgWiBNNzIuNzk4LDI4LjAwNCBMNzQuNTQ4LDI4LjAwNCBMNzQuNTQ4LDM4IEw3Mi43OTgsMzggTDcyLjc5OCwyOC4wMDQgWiIgaWQ9IkpOREkiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS03IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIgeD0iNjMuNSIgeT0iNDIuNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ny4wMDAwMDAsIDEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMS1saW5rIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjIzIiByeD0iOSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIHN0cm9rZT0iI0RDRTNFRSIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTYiIGhlaWdodD0iMjEiIHJ4PSI2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGF0aC0yLWxpbmsiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41LDAgTDEyLjUsMCBMMTIuNSwwIEMxNS41Mzc1NjYxLDAgMTgsMi40NjI0MzM5IDE4LDUuNSBMMTgsNS41IEwxOCw1LjUgQzE4LDguNTM3NTY2MSAxNS41Mzc1NjYxLDExIDEyLjUsMTEgTDUuNSwxMSBMNS41LDExIEMyLjQ2MjQzMzksMTEgMCw4LjUzNzU2NjEgMCw1LjUgTDAsNS41IEwwLDUuNSBDMCwyLjQ2MjQzMzkgMi40NjI0MzM5LDAgNS41LDAgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41LDEgQzMuMDE0NzE4NiwxIDEsMy4wMTQ3MTg2IDEsNS41IEMxLDcuOTg1MjgxNCAzLjAxNDcxODYsMTAgNS41LDEwIEwxMi41LDEwIEMxNC45ODUyODE0LDEwIDE3LDcuOTg1MjgxNCAxNyw1LjUgQzE3LDMuMDE0NzE4NiAxNC45ODUyODE0LDEgMTIuNSwxIEw1LjUsMSBaIiBpZD0iU2hhcGUiIHN0cm9rZT0iI0RDRTNFRSIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNC1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMjYiIGhlaWdodD0iNDIiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTIiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNCIgeT0iNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjkiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNCIgeT0iMTciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI0IiB5PSIzMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjkiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";
    },
    "6QVW": function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoJavaScriptAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho JavaScript Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: "JavaScript", logo: "./images/javascript.png" },
          links: {
            api: "http://www.eclipse.org/paho/files/jsdoc/index.html",
            download: [
              {
                name: "Eclipse Paho Portal",
                url: "https://www.eclipse.org/paho/clients/js/",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho JavaScript Client",
            getAPI: [
              {
                title: "Download from Eclipse",
                description:
                  'Get Eclipse Paho JavaScript Client from <a href="https://www.eclipse.org/paho/clients/js/" target="_bank">here</a>',
              },
            ],
          },
        });
    },
    "8+s/": function (e, t, s) {
      "use strict";
      function a(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      var n = s("q1tI"),
        o = a(n),
        r = a(s("2rMq")),
        i = a(s("Gytx"));
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      e.exports = function (e, t, s) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== s && "function" != typeof s)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (a) {
          if ("function" != typeof a)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var g = [],
            p = void 0;
          function u() {
            (p = e(
              g.map(function (e) {
                return e.props;
              })
            )),
              M.canUseDOM ? t(p) : s && (p = s(p));
          }
          var M = (function (e) {
            function t() {
              return l(this, t), c(this, e.apply(this, arguments));
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.peek = function () {
                return p;
              }),
              (t.rewind = function () {
                if (t.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = p;
                return (p = void 0), (g = []), e;
              }),
              (t.prototype.shouldComponentUpdate = function (e) {
                return !i(e, this.props);
              }),
              (t.prototype.componentWillMount = function () {
                g.push(this), u();
              }),
              (t.prototype.componentDidUpdate = function () {
                u();
              }),
              (t.prototype.componentWillUnmount = function () {
                var e = g.indexOf(this);
                g.splice(e, 1), u();
              }),
              (t.prototype.render = function () {
                return o.createElement(a, this.props);
              }),
              t
            );
          })(n.Component);
          return (
            (M.displayName =
              "SideEffect(" +
              (function (e) {
                return e.displayName || e.name || "Component";
              })(a) +
              ")"),
            (M.canUseDOM = r.canUseDOM),
            M
          );
        };
      };
    },
    "9xF7": function (e, t, s) {
      e.exports = s.p + "static/qpid-9ff743db13d76ed7afa1e6524eaa844c.png";
    },
    Bhu5: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMTQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSI1NiIgeT0iNjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMyIgcng9IjgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNNjEuNSw2MyBMNjguNSw2MyBMNjguNSw2MyBDNzEuNTM3NTY2MSw2MyA3NCw2NS40NjI0MzM5IDc0LDY4LjUgTDc0LDY4LjUgTDc0LDY4LjUgQzc0LDcxLjUzNzU2NjEgNzEuNTM3NTY2MSw3NCA2OC41LDc0IEw2MS41LDc0IEw2MS41LDc0IEM1OC40NjI0MzM5LDc0IDU2LDcxLjUzNzU2NjEgNTYsNjguNSBMNTYsNjguNSBMNTYsNjguNSBDNTYsNjUuNDYyNDMzOSA1OC40NjI0MzM5LDYzIDYxLjUsNjMgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRldl9Qb3J0YWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC03LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMjIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS4yODY4MjE3LDI5LjY1MTE2MjggTDQ0Ljg0ODUzLDI5LjY1MTE2MjgiIGlkPSJtaWRkbGUtbGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4yNDAzMTAxLDEwLjA2MDIxNTkgTDU3Ljk4NDQ5NjEsMTAuMDYwMjE1OSIgaWQ9InRvcC1saW5lLWVuZCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4yNDAzMTAxLDMwLjE4MDY0NzggTDU3Ljk4NDQ5NjEsMzAuMTgwNjQ3OCIgaWQ9Im1pZGRsZS1saW5lLWVuZCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgIDxyZWN0IGlkPSJ0b3AtY2lyY2xlIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iNDYuMzMzMzMzMyIgeT0iNi44MjQzMzU1NSIgd2lkdGg9IjUuOTA2OTc2NzQiIGhlaWdodD0iNS45NDIyNzU3NSIgcng9IjIuOTUzNDg4MzciPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9Im1pZGRsZS1jaXJjbGUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSI0Ni4zMzMzMzMzIiB5PSIyNi45NDQ3Njc0IiB3aWR0aD0iNS45MDY5NzY3NCIgaGVpZ2h0PSI1Ljk0MjI3NTc1IiByeD0iMi45NTM0ODgzNyI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIyLjIzODM3MikiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHg9IjEiIHk9IjEiIHdpZHRoPSIxMS4xNzgyOTQ2IiBoZWlnaHQ9IjEzLjg4NDU1MTUiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42MzU2NTg5MSwyLjExNzk0MDIgTDkuNTQyNjM1NjYsMi4xMTc5NDAyIEw5LjU0MjYzNTY2LDIuMTE3OTQwMiBDMTAuMDk0OTIwNCwyLjExNzk0MDIgMTAuNTQyNjM1NywyLjU2NTY1NTQ1IDEwLjU0MjYzNTcsMy4xMTc5NDAyIEwxMC41NDI2MzU3LDQuMjk0ODUwNSBMMTAuNTQyNjM1Nyw0LjI5NDg1MDUgQzEwLjU0MjYzNTcsNC44NDcxMzUyNSAxMC4wOTQ5MjA0LDUuMjk0ODUwNSA5LjU0MjYzNTY2LDUuMjk0ODUwNSBMMy42MzU2NTg5MSw1LjI5NDg1MDUgTDMuNjM1NjU4OTEsNS4yOTQ4NTA1IEMzLjA4MzM3NDE2LDUuMjk0ODUwNSAyLjYzNTY1ODkxLDQuODQ3MTM1MjUgMi42MzU2NTg5MSw0LjI5NDg1MDUgTDIuNjM1NjU4OTEsMy4xMTc5NDAyIEwyLjYzNTY1ODkxLDMuMTE3OTQwMiBDMi42MzU2NTg5MSwyLjU2NTY1NTQ1IDMuMDgzMzc0MTYsMi4xMTc5NDAyIDMuNjM1NjU4OTEsMi4xMTc5NDAyIFoiIGlkPSJSZWN0YW5nbGUtMzMiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42MzU2NTg5MSw2LjM1MzgyMDYgTDkuNTQyNjM1NjYsNi4zNTM4MjA2IEw5LjU0MjYzNTY2LDYuMzUzODIwNiBDMTAuMDk0OTIwNCw2LjM1MzgyMDYgMTAuNTQyNjM1Nyw2LjgwMTUzNTg1IDEwLjU0MjYzNTcsNy4zNTM4MjA2IEwxMC41NDI2MzU3LDguNTMwNzMwOSBMMTAuNTQyNjM1Nyw4LjUzMDczMDkgQzEwLjU0MjYzNTcsOS4wODMwMTU2NSAxMC4wOTQ5MjA0LDkuNTMwNzMwOSA5LjU0MjYzNTY2LDkuNTMwNzMwOSBMMy42MzU2NTg5MSw5LjUzMDczMDkgTDMuNjM1NjU4OTEsOS41MzA3MzA5IEMzLjA4MzM3NDE2LDkuNTMwNzMwOSAyLjYzNTY1ODkxLDkuMDgzMDE1NjUgMi42MzU2NTg5MSw4LjUzMDczMDkgTDIuNjM1NjU4OTEsNy4zNTM4MjA2IEwyLjYzNTY1ODkxLDcuMzUzODIwNiBDMi42MzU2NTg5MSw2LjgwMTUzNTg1IDMuMDgzMzc0MTYsNi4zNTM4MjA2IDMuNjM1NjU4OTEsNi4zNTM4MjA2IFoiIGlkPSJSZWN0YW5nbGUtMzMtQ29weS0zIiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuNjM1NjU4OTEsMTAuNTg5NzAxIEw5LjU0MjYzNTY2LDEwLjU4OTcwMSBMOS41NDI2MzU2NiwxMC41ODk3MDEgQzEwLjA5NDkyMDQsMTAuNTg5NzAxIDEwLjU0MjYzNTcsMTEuMDM3NDE2MiAxMC41NDI2MzU3LDExLjU4OTcwMSBMMTAuNTQyNjM1NywxMi43NjY2MTEzIEwxMC41NDI2MzU3LDEyLjc2NjYxMTMgQzEwLjU0MjYzNTcsMTMuMzE4ODk2IDEwLjA5NDkyMDQsMTMuNzY2NjExMyA5LjU0MjYzNTY2LDEzLjc2NjYxMTMgTDMuNjM1NjU4OTEsMTMuNzY2NjExMyBMMy42MzU2NTg5MSwxMy43NjY2MTEzIEMzLjA4MzM3NDE2LDEzLjc2NjYxMTMgMi42MzU2NTg5MSwxMy4zMTg4OTYgMi42MzU2NTg5MSwxMi43NjY2MTEzIEwyLjYzNTY1ODkxLDExLjU4OTcwMSBMMi42MzU2NTg5MSwxMS41ODk3MDEgQzIuNjM1NjU4OTEsMTEuMDM3NDE2MiAzLjA4MzM3NDE2LDEwLjU4OTcwMSAzLjYzNTY1ODkxLDEwLjU4OTcwMSBaIiBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNSIgZmlsbC1vcGFjaXR5PSIwLjQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0ibWlkZGxlLXNlcnZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuOTg0NDk2LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iMSIgeT0iMSIgd2lkdGg9IjExLjE3ODI5NDYiIGhlaWdodD0iMTYuNTMxOTc2NyIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbD0iI0ZGRkZGRiIgeD0iMi42MzU2NTg5MSIgeT0iMi42NDc0MjUyNSIgd2lkdGg9IjcuOTA2OTc2NzQiIGhlaWdodD0iMy43MDYzOTUzNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS00IiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbD0iI0ZGRkZGRiIgeD0iMi42MzU2NTg5MSIgeT0iNy40MTI3OTA3IiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTYiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIxMi4xNzgxNTYxIiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJtaWRkbGUtc2VydmVyLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3Ljk4NDQ5NiwgMjAuNjQ5OTE3KSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTEuMTc4Mjk0NiIgaGVpZ2h0PSIxNi41MzE5NzY3IiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTIiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIyLjY0NzQyNTI1IiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSI3LjQxMjc5MDciIHdpZHRoPSI3LjkwNjk3Njc0IiBoZWlnaHQ9IjMuNzA2Mzk1MzUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNiIgZmlsbC1vcGFjaXR5PSIwLjQiIGZpbGw9IiNGRkZGRkYiIHg9IjIuNjM1NjU4OTEiIHk9IjEyLjE3ODE1NjEiIHdpZHRoPSI3LjkwNjk3Njc0IiBoZWlnaHQ9IjMuNzA2Mzk1MzUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTMiIHN0cm9rZS1vcGFjaXR5PSIwLjY1IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIgcG9pbnRzPSIzMSAyOCAzMSAxMCA0NSAxMCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJxdWV1ZS1saW5lIiBzdHJva2Utb3BhY2l0eT0iMC42NSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIHBvaW50cz0iNDkgMzMgNDkgNTMiPjwvcG9seWxpbmU+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJxdWV1ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDI1KSBzY2FsZSgwLjcpIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiNEQ0UzRUUiIHN0cm9rZS13aWR0aD0iMiIgeD0iNTciIHk9IjY0IiB3aWR0aD0iMTYiIGhlaWdodD0iMjEiIHJ4PSI4Ij48L3JlY3Q+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjRENFM0VFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02MS41LDY0IEM1OS4wMTQ3MTg2LDY0IDU3LDY2LjAxNDcxODYgNTcsNjguNSBDNTcsNzAuOTg1MjgxNCA1OS4wMTQ3MTg2LDczIDYxLjUsNzMgTDY4LjUsNzMgQzcwLjk4NTI4MTQsNzMgNzMsNzAuOTg1MjgxNCA3Myw2OC41IEM3Myw2Ni4wMTQ3MTg2IDcwLjk4NTI4MTQsNjQgNjguNSw2NCBMNjEuNSw2NCBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";
    },
    Bl7J: function (e, t, s) {
      "use strict";
      var a = s("q1tI"),
        n = s.n(a),
        o = s("Wbzz"),
        r = s("5ENs"),
        i = s("k1TG"),
        l = s("8o2o"),
        c = s("TSYQ"),
        g = s.n(c),
        p = s("33Jr"),
        u = function (e) {
          var t = e.className,
            s = e.cssModule,
            a = e.tag,
            o = e.fluid,
            r = Object(l.a)(e, ["className", "cssModule", "tag", "fluid"]),
            c = Object(p.e)(g()(t, "jumbotron", !!o && "jumbotron-fluid"), s);
          return n.a.createElement(a, Object(i.a)({}, r, { className: c }));
        };
      u.defaultProps = { tag: "div" };
      var M = u,
        I = s("1Yj4"),
        A = function (e) {
          return n.a.createElement(
            M,
            { className: "jumbotron-header" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                "h1",
                { className: "display-2" },
                "PubSub+ for Developers"
              ),
              n.a.createElement(
                "p",
                { className: "lead" },
                "Create event-driven apps and microservices on any platform with whatever language, open protocols, and APIs you choose."
              ),
              n.a.createElement(
                "p",
                { className: "ctas" },
                n.a.createElement(
                  "a",
                  {
                    className: "button",
                    href:
                      "https://solace.com/products/event-broker/software/getting-started/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "Get Started with Docker"
                ),
                n.a.createElement(
                  "a",
                  {
                    className: "button",
                    href:
                      "https://console.solace.cloud/login/new-account?product=event-streaming",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "Get Started with Cloud"
                )
              )
            )
          );
        },
        d = function () {
          return n.a.createElement(
            "header",
            null,
            n.a.createElement(r.a, null),
            n.a.createElement(A, null)
          );
        };
      d.defaultProps = { siteTitle: "" };
      var b = d,
        C = s("ok1R"),
        m = s("rhny"),
        N = s("uRdJ"),
        L = s("9Hrx"),
        S = s("9a8N"),
        y = s("F66N"),
        j = s("arvA"),
        T = s("17x9"),
        D = s.n(T),
        E = n.a.createContext({}),
        w = {
          tag: p.h,
          activeTab: D.a.any,
          className: D.a.string,
          cssModule: D.a.object,
        },
        h = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).state = {
                activeTab: s.props.activeTab,
              }),
              s
            );
          }
          return (
            Object(L.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return t.activeTab !== e.activeTab
                ? { activeTab: e.activeTab }
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                s = e.cssModule,
                a = e.tag,
                o = Object(p.f)(this.props, Object.keys(w)),
                r = Object(p.e)(g()("tab-content", t), s);
              return n.a.createElement(
                E.Provider,
                { value: { activeTabId: this.state.activeTab } },
                n.a.createElement(a, Object(i.a)({}, o, { className: r }))
              );
            }),
            t
          );
        })(a.Component),
        v = h;
      h.defaultProps = { tag: "div" };
      function P(e) {
        var t = e.className,
          s = e.cssModule,
          a = e.tabId,
          o = e.tag,
          r = Object(l.a)(e, ["className", "cssModule", "tabId", "tag"]),
          c = function (e) {
            return Object(p.e)(g()("tab-pane", t, { active: a === e }), s);
          };
        return n.a.createElement(E.Consumer, null, function (e) {
          var t = e.activeTabId;
          return n.a.createElement(o, Object(i.a)({}, r, { className: c(t) }));
        });
      }
      P.defaultProps = { tag: "div" };
      var z = [
          {
            name: "REST",
            id: "rest-pub",
            code:
              'curl -X POST http://[HOST]:[PORT]/pub/sub/plus \\<br>    -d "Hello World REST" \\<br>    -H "Content-Type: text/plain" <br>    --user [client-username]:[password]',
          },
          {
            name: "JS",
            id: "js-pub",
            code:
              'var message = solace.SolclientFactory.createMessage();<br>      message.setDestination(solace.SolclientFactory.createTopicDestination("pub/sub/plus"));<br>      message.setBinaryAttachment("Sample Message");<br>      message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);<br>      publisher.session.send(message);',
          },
          {
            name: "Java",
            id: "java-pub",
            code:
              'XMLMessageProducer prod = session.getMessageProducer(new PrintingSessionEventHandler());<br>    TextMessage msg = JCSMPFactory.onlyInstance().createMessage(TextMessage.class);<br>    msg.setText("Hello world!");<br>    Topic topic = JCSMPFactory.onlyInstance().createTopic("pub/sub/plus");<br>    prod.send(msg, topic);',
          },
          {
            name: "Spring",
            id: "scst-pub",
            code:
              '// Publish using Spring Cloud Stream <br>      @Bean <br>      public Supplier<String> helloWorldSend(){ <br>        &nbsp; return () -> { <br>          &nbsp;&nbsp; return "Hello World"; <br>          &nbsp; }; <br>      }',
          },
          {
            name: "Python",
            id: "python-pub",
            code:
              'topic = Topic.of("pub/sub/plus") <br>    messaging_service = MessagingService.builder().from_properties(broker_props).build().connect() <br>    direct_publisher = messaging_service.create_direct_message_publisher_builder().build().start() <br>    outbound_msg = messaging_service.message_builder().build("Hello world!") <br>    direct_publisher.publish(destination=topic, message=outbound_msg)',
          },
          {
            name: "MQTT",
            id: "mqtt-pub",
            code:
              'String content = "Hello world from MQTT!"<br>    MqttMessage message = new MqttMessage(content.getBytes())<br>    message.setQos(0)<br>    String topic = "pub/sub/plus"<br>    mqttClient.publish(topic, message)',
          },
          {
            name: "JMS 2.0",
            id: "jms2.0-pub",
            code:
              'JMSContext context = connectionFactory.createContext();<br>    Topic topic = context.createTopic("pub/sub/plus");<br>    TextMessage message = context.createTextMessage("Hello world!");<br>    JMSProducer producer = context.createProducer().setDeliveryMode(DeliveryMode.NON_PERSISTENT);<br>    producer.send(topic, message);',
          },
          {
            name: "JMS 1.1",
            id: "jms1.1-pub",
            code:
              'Topic topic = session.createTopic("pub/sub/plus");<br>    MessageProducer messageProducer = session.createProducer(topic);<br>    TextMessage message = session.createTextMessage("Hello world!");<br>    messageProducer.send(topic, message, DeliveryMode.NON_PERSISTENT,<br>        Message.DEFAULT_PRIORITY, Message.DEFAULT_TIME_TO_LIVE);',
          },
        ],
        x = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).toggle = s.toggle.bind(
                Object(N.a)(s)
              )),
              (s.state = { activeTab: 0, copied: !1 }),
              s
            );
          }
          Object(L.a)(t, e);
          var s = t.prototype;
          return (
            (s.toggle = function (e) {
              this.state.activeTab !== e && this.setState({ activeTab: e });
            }),
            (s.copyCode = function (e) {
              var t = this,
                s = document.getElementById(e),
                a = document.createElement("textarea");
              document.body.appendChild(a),
                (a.value = s.innerHTML.replace(/<br\s*[/]?>/gi, "\r\n")),
                a.select(),
                document.execCommand("copy", !1),
                this.setState({ copied: !this.state.copied }),
                a.remove(),
                setTimeout(function () {
                  t.setState({ copied: !t.state.copied });
                }, 1e3);
            }),
            (s.createMarkup = function (e) {
              return { __html: e };
            }),
            (s.render = function () {
              var e = this;
              return n.a.createElement(
                "div",
                null,
                n.a.createElement(
                  I.a,
                  { fluid: !0 },
                  n.a.createElement(
                    S.a,
                    { tabs: !0 },
                    z.map(function (t, s) {
                      return n.a.createElement(
                        y.a,
                        { key: t.id },
                        n.a.createElement(
                          j.a,
                          {
                            className: g()({ active: e.state.activeTab === s }),
                            onClick: function () {
                              e.toggle(s);
                            },
                          },
                          t.name
                        )
                      );
                    })
                  )
                ),
                n.a.createElement(
                  v,
                  { activeTab: this.state.activeTab },
                  z.map(function (t, s) {
                    return n.a.createElement(
                      P,
                      { tabId: s, key: t.id },
                      n.a.createElement(
                        I.a,
                        { fluid: !0 },
                        n.a.createElement(
                          C.a,
                          null,
                          n.a.createElement(
                            m.a,
                            { sm: "12" },
                            n.a.createElement(
                              "div",
                              { className: "sample" },
                              n.a.createElement(
                                "button",
                                {
                                  onClick: function () {
                                    return e.copyCode("pub-code-" + t.id);
                                  },
                                  className: "tooltip copy",
                                  "aria-label": "Copy Code",
                                },
                                e.state.copied
                                  ? n.a.createElement(
                                      "span",
                                      { className: "tooltiptext" },
                                      "Copied!"
                                    )
                                  : n.a.createElement(
                                      "span",
                                      { className: "tooltiptext" },
                                      "Copy Code"
                                    ),
                                n.a.createElement("i", {
                                  className: "fa fa-copy",
                                })
                              ),
                              n.a.createElement("div", {
                                className: "code",
                                id: "pub-code-" + t.id,
                                dangerouslySetInnerHTML: e.createMarkup(t.code),
                              })
                            )
                          )
                        )
                      )
                    );
                  })
                )
              );
            }),
            t
          );
        })(n.a.Component),
        f = [
          {
            name: "REST",
            id: "rest-sub",
            code:
              "http.createServer(function (req, res) {<br>    console.log('Received message: ' + req.url);<br>    res.writeHead(200);<br>    res.end();<br>    }).listen([PORT], '[HOST]');<br>    console.log('Server running at http://[HOST]:[PORT]/');",
          },
          {
            name: "JS",
            id: "js-sub",
            code:
              'subscriber.session.connect();<br>      subscriber.session.subscribe(<br>          solace.SolclientFactory.createTopicDestination("pub/sub/plus"),<br>          true, correlationObject, 10000<br>      );',
          },
          {
            name: "Java",
            id: "java-sub",
            code:
              'final Topic topic = JCSMPFactory.onlyInstance().createTopic("pub/sub/plus");<br>    final XMLMessageConsumer cons = session.getMessageConsumer(new MessageDumpListener());<br>    session.addSubscription(topic);<br>    cons.start();',
          },
          {
            name: "Spring",
            id: "scst-sub",
            code:
              '// Consume using Spring Cloud Stream <br>      @Bean <br>      public Consumer<String> helloWorldConsume(){ <br>        &nbsp; return v -> System.out.println("Received: " + v); <br>      }',
          },
          {
            name: "Python",
            id: "python-sub",
            code:
              'topic = Topic.of("pub/sub/plus") <br>    messaging_service = MessagingService.builder().from_properties(broker_props).build().connect() <br>    direct_receiver = messaging_service.create_direct_message_receiver_builder().with_subscriptions(topic).build().start() <br>    direct_receiver.receive_async(MessageHandlerImpl())',
          },
          {
            name: "MQTT",
            id: "mqtt-sub",
            code:
              'mqttClient.connect(connOpts);<br>    mqttClient.setCallback(new PrintingMqttCallback());<br>    String topic = "pub/sub/plus";<br>    int qos = 0;<br>    mqttClient.subscribe(topic, qos);',
          },
          {
            name: "JMS 2.0",
            id: "jms2.0-sub",
            code:
              'JMSContext context = connectionFactory.createContext();<br>    Topic topic = context.createTopic("pub/sub/plus");<br>    JMSConsumer consumer = context.createConsumer(topic);<br>    String message = consumer.receiveBody(String.class);',
          },
          {
            name: "JMS 1.1",
            id: "jms1.1-sub",
            code:
              'Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>    Topic topic = session.createTopic("pub/sub/plus");<br>    MessageConsumer messageConsumer = session.createConsumer(topic);<br>    messageConsumer.setMessageListener( new MessageDumpListener() );<br>    connection.start();',
          },
        ],
        O = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).toggle = s.toggle.bind(
                Object(N.a)(s)
              )),
              (s.state = { activeTab: 0, copied: !1 }),
              s
            );
          }
          Object(L.a)(t, e);
          var s = t.prototype;
          return (
            (s.toggle = function (e) {
              this.state.activeTab !== e && this.setState({ activeTab: e });
            }),
            (s.copyCode = function (e) {
              var t = this,
                s = document.getElementById(e),
                a = document.createElement("textarea");
              document.body.appendChild(a),
                (a.value = s.innerHTML.replace(/<br\s*[/]?>/gi, "\r\n")),
                a.select(),
                document.execCommand("copy", !1),
                this.setState({ copied: !this.state.copied }),
                a.remove(),
                setTimeout(function () {
                  t.setState({ copied: !t.state.copied });
                }, 1e3);
            }),
            (s.createMarkup = function (e) {
              return { __html: e };
            }),
            (s.render = function () {
              var e = this;
              return n.a.createElement(
                "div",
                null,
                n.a.createElement(
                  I.a,
                  { fluid: !0 },
                  n.a.createElement(
                    S.a,
                    { tabs: !0 },
                    f.map(function (t, s) {
                      return n.a.createElement(
                        y.a,
                        { key: t.id },
                        n.a.createElement(
                          j.a,
                          {
                            className: g()({ active: e.state.activeTab === s }),
                            onClick: function () {
                              e.toggle(s);
                            },
                          },
                          t.name
                        )
                      );
                    })
                  )
                ),
                n.a.createElement(
                  v,
                  { activeTab: this.state.activeTab },
                  f.map(function (t, s) {
                    return n.a.createElement(
                      P,
                      { tabId: s, key: t.id },
                      n.a.createElement(
                        I.a,
                        { fluid: !0 },
                        n.a.createElement(
                          C.a,
                          null,
                          n.a.createElement(
                            m.a,
                            { sm: "12" },
                            n.a.createElement(
                              "div",
                              { className: "sample" },
                              n.a.createElement(
                                "button",
                                {
                                  onClick: function () {
                                    return e.copyCode("sub-code-" + t.id);
                                  },
                                  className: "tooltip copy",
                                  "aria-label": "Copy Code",
                                },
                                e.state.copied
                                  ? n.a.createElement(
                                      "span",
                                      { className: "tooltiptext" },
                                      "Copied!"
                                    )
                                  : n.a.createElement(
                                      "span",
                                      { className: "tooltiptext" },
                                      "Copy Code"
                                    ),
                                n.a.createElement("i", {
                                  className: "fa fa-copy",
                                })
                              ),
                              n.a.createElement("div", {
                                className: "code",
                                id: "sub-code-" + t.id,
                                dangerouslySetInnerHTML: e.createMarkup(t.code),
                              })
                            )
                          )
                        )
                      )
                    );
                  })
                )
              );
            }),
            t
          );
        })(n.a.Component),
        k = s("jIXv"),
        Y = s.n(k),
        Q = function (e) {
          return n.a.createElement(
            "section",
            { id: "CodeSamples", className: "code-samples DarkGrey" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { xs: "12", lg: "5" },
                  n.a.createElement(x, null)
                ),
                n.a.createElement(
                  m.a,
                  { xs: "12", lg: "2", className: "align-self-center" },
                  n.a.createElement("img", {
                    className: "mx-auto d-block PubSubAnimationHorizontal",
                    src: Y.a,
                    alt: "PubSub+",
                  })
                ),
                n.a.createElement(
                  m.a,
                  { xs: "12", lg: "5" },
                  n.a.createElement(O, null)
                )
              )
            )
          );
        },
        R = s("tiWs"),
        G = s("a5/R"),
        U = s("nsn4"),
        B = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).toggle = s.toggle.bind(
                Object(N.a)(s)
              )),
              (s.state = { isOpen: !1, setFixed: !1 }),
              (s.navItems = [
                { title: "What is PubSub+?", scrollToId: "WhatIsPubSub" },
                {
                  title: "APIs and Protocols",
                  scrollToId: "apis-and-protocols",
                },
                { title: "Use Cases", scrollToId: "UseCases" },
                { title: "Resources", scrollToId: "Resources" },
              ]),
              s
            );
          }
          Object(L.a)(t, e);
          var s = t.prototype;
          return (
            (s.componentDidMount = function () {
              var e = this;
              window.addEventListener("scroll", function (t) {
                return e.listenToScroll(t);
              });
            }),
            (s.componentDidUpdate = function () {
              var e = document.getElementById("SecondaryNav").offsetTop;
              e > 0 && (this.posOfSecondaryNav = e);
            }),
            (s.componentWillUnmount = function () {
              var e = this;
              window.removeEventListener("scroll", function (t) {
                return e.listenToScroll(t);
              });
            }),
            (s.listenToScroll = function (e) {
              (this.scrollPosition = e.currentTarget.scrollY),
                this.scrollPosition > this.posOfSecondaryNav
                  ? this.setState({ setFixed: !0 })
                  : this.setState({ setFixed: !1 });
            }),
            (s.toggle = function () {
              this.setState({ isOpen: !this.state.isOpen });
            }),
            (s.scrollToSection = function (e) {
              var t = document.getElementById(e);
              t &&
                t.scrollIntoView &&
                t.scrollIntoView({ behavior: "smooth", block: "start" });
            }),
            (s.render = function () {
              var e = this;
              return n.a.createElement(
                "div",
                null,
                n.a.createElement(
                  R.a,
                  {
                    className: "secondary-nav",
                    id: "SecondaryNav",
                    style:
                      this.scrollPosition > this.posOfSecondaryNav
                        ? {
                            top: "0px",
                            position: "fixed",
                            zIndex: "1",
                            width: "100%",
                          }
                        : {},
                    color: "dark",
                    expand: "md",
                  },
                  n.a.createElement(
                    I.a,
                    { fluid: !0 },
                    n.a.createElement(G.a, { onClick: this.toggle }),
                    n.a.createElement(
                      U.a,
                      { isOpen: this.state.isOpen, navbar: !0 },
                      n.a.createElement(
                        S.a,
                        { className: "mr-auto", navbar: !0 },
                        this.navItems.map(function (t) {
                          return n.a.createElement(
                            y.a,
                            { key: t.title },
                            n.a.createElement(
                              j.a,
                              {
                                className: "text-nowrap",
                                style: { color: "#00C895" },
                                onClick: function (s) {
                                  return e.scrollToSection(t.scrollToId);
                                },
                              },
                              t.title
                            )
                          );
                        })
                      ),
                      n.a.createElement(
                        S.a,
                        { className: "ml-auto", navbar: !0 },
                        n.a.createElement(
                          y.a,
                          null,
                          n.a.createElement(
                            "a",
                            {
                              className: "buttonSmall",
                              href: "https://solace.com/try-it-now/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            "Try Now"
                          )
                        )
                      )
                    )
                  )
                ),
                n.a.createElement("div", {
                  style:
                    this.scrollPosition > this.posOfSecondaryNav
                      ? { height: "56px" }
                      : { display: "none" },
                })
              );
            }),
            t
          );
        })(n.a.Component),
        Z =
          (s("TzXr"),
          function (e) {
            return n.a.createElement(
              "section",
              { className: "intro DarkGrey", id: "WhatIsPubSub" },
              n.a.createElement(
                I.a,
                { fluid: !0 },
                n.a.createElement(
                  C.a,
                  null,
                  n.a.createElement(
                    m.a,
                    null,
                    n.a.createElement("h2", null, "What is PubSub+?"),
                    n.a.createElement(
                      "p",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          href: "https://solace.com/products/",
                          ttarget: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "PubSub+"
                      ),
                      " ",
                      "is a platform that enables the design, discovery, streaming and full lifecycle management of events across distributed enterprises. It provides all of the tools necessary to support a modern event-driven architecture. The main components of the platform are PubSub+ Event Brokers, PubSub+ Event Portal and PubSub+ Cloud Console. Most of the content here focuses on PubSub+ Event Brokers.",
                      " "
                    ),
                    n.a.createElement(
                      "p",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Messaging-Basics/Core-Concepts.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Get up to speed on the core concepts here"
                      ),
                      "."
                    )
                  )
                )
              )
            );
          }),
        J = s("YSfM"),
        H = s("zD65"),
        W = s.n(H),
        F = s("vqUz"),
        V = s.n(F),
        X = function (e) {
          return n.a.createElement(
            P,
            { tabId: "1" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "12" },
                  n.a.createElement("h3", null, "Microservices")
                )
              ),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "8" },
                  n.a.createElement(
                    "p",
                    null,
                    "Microservices are a software development technique in which an application is broken down into a set of services that function as a processing pipeline. Decomposing an application into multiple microservices can bring several benefits, including improved development speed, an easier to understand code base, enablement of continuous delivery, improved scalability, and better fault isolation. In many cases, application processing is kicked off by a web request via an API gateway using the request/reply pattern. Once the request is received, the microservices work in concert behind the gateway to process the request."
                  ),
                  n.a.createElement(
                    C.a,
                    null,
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: W.a,
                        alt: "Microservices Diagram: Figure 1 - Orchestration",
                        width: "436px",
                        height: "436px",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    ),
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: V.a,
                        alt: "Microservices Diagram: Figure 2 - Choreography",
                        width: "436px",
                        height: "436px",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    )
                  ),
                  n.a.createElement(
                    "h4",
                    null,
                    "Enable event-driven microservices"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "To provide business value, microservices need to effectively communicate while maintaining their independence and singularity of purpose. Your default may be to use an orchestration layer to decouple your RESTful HTTP services from your microservices, and to synchronize interactions between your microservices (Figure 1). But as your system scales and the need for your microservices to work in parallel increases, so too does your need to take an event-driven approach enabled by asynchronous, publish-subscribe messaging patterns (Figure 2). This is the approach enabled by PubSub+ Event Brokers."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "The brokers sit between your microservices, enabling them to publish events to the broker and subscribe to events published to the broker by other microservices. This approach carries many advantages:"
                  ),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      "It’s easy to add, remove and move services within the system, without disrupting the system."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "It’s simple to scale individual services or groups of services to handle variability in load (rather than having to scale the entire system which is often necessary when microservices are tied together with synchronous communication patterns like request-reply)."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "It’s non-blocking: asynchronous microservice threads don’t get blocked while waiting for a response (as they do with synchronous patterns)."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "It enables resiliency and error-handling: PubSub+ Event Brokers can persist all messages to guaranteed delivery, and can serve as a source of truth in the case of failures, enabling rapid disaster recovery without risk of message loss.",
                      " "
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { sm: "4", className: "sidebar" },
                  n.a.createElement("h4", null, "Learn More"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Use Case:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://solace.com/use-cases/microservices/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "PubSub+ for Event-Driven Microservices"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/blog/experience-awesomeness-event-driven-microservices/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "REST vs. Messaging for Microservices – Which One is Best?"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/blog/messaging-between-microservices/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Communication Between Microservices: Why You Need Messaging"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Video:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://www.youtube.com/watch?v=K_gk0PJYP38",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "A Walk Through The World of Microservices"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/blog/unlock-potential-spring-cloud-stream/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Unlock the Potential of Spring Cloud Stream Apps with an Advanced Event Broker"
                      )
                    )
                  ),
                  n.a.createElement("h4", null, "Get Started"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Doc:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Overviews/Microgateway-Concepts/Microgateways-Overview.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Microgateways and turning your existing RESTful requests/replies into events"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Sample:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://tutorials.solace.dev/spring/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Spring Samples"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://github.com/SolaceProducts/solace-spring-cloud/tree/master/solace-spring-cloud-starters/solace-spring-cloud-stream-starter",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Solace Spring Cloud Stream Binder"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        q = s("mehV"),
        K = s.n(q),
        _ = s("HWzP"),
        $ = s.n(_),
        ee = function (e) {
          return n.a.createElement(
            P,
            { tabId: "3" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "12" },
                  n.a.createElement("h3", null, "Internet of Things")
                )
              ),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "8" },
                  n.a.createElement(
                    "p",
                    null,
                    "IP-addressed applications typically send and receive data to devices through an intermediary node like an IoT gateway, and the default communication pattern is request-reply over REST/HTTP (Figure 1)."
                  ),
                  n.a.createElement(
                    C.a,
                    null,
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: K.a,
                        alt: "IoT Diagram: Figure 1 - Basic IoT Architecture",
                        width: "436px",
                        height: "300x",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    ),
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: $.a,
                        alt: "IoT Diagram: Figure 2 - IoT with Messaging",
                        width: "436px",
                        height: "300x",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    )
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "For simple IoT projects and pilots that tend to be very focused and small scale, this will be the path of least resistance, and it will probably work just fine. But as you move from pilot to production in an enterprise environment, and as your application requirements grow more complex, the benefits of an event-driven approach enabled by event brokers and messaging patterns like publish-subscribe increase."
                  ),
                  n.a.createElement(
                    "h4",
                    null,
                    "Build IoT apps that are flexible and scale"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "PubSub+ Event Brokers can sit between your applications, IoT Gateways, back-end systems and cloud services, enabling a variety of communication patterns between them (publish-subscribe, streaming, queuing and request-reply), and over a variety of open standard protocols and APIs (MQTT, AMQP, JMS, WebSockets, REST/HTTP). This carries a number of advantages:"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "It enables event-driven communication between diverse endpoints and networks (devices, gateways, legacy applications, cloud-based microservices, data lakes, analytics engines) without requiring you to build complex protocol translations into your applications (protocol translation is done by the broker)."
                  ),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      "It makes for a highly scalable system: brokers can be vertically and horizontally scaled to handle exponential increases in load and connection counts."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "It enables efficient command and control of edge devices by back-end applications: (1) every device and application in the system is addressable through PubSub+ topic routing; (2) broker-enabled protocol translation lets back-end apps send commands over JMS while gateways/devices can receive the commands over other protocols (like MQTT, AMQP, REST/HTTP); and (3) messaging capabilities supported by the broker like fan-out and filtering enable back-end systems to send commands to individual, all, or select groups of edge devices."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "It’s fault tolerant: PubSub+ Event Brokers enable multiple qualities of service including guaranteed delivery for IoT scenarios where every message must be delivered—even to disconnected subscribers or those that can’t handle large volumes of data at a time.",
                      " "
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { sm: "4", className: "sidebar" },
                  n.a.createElement("h4", null, "Learn More"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Use Case:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/use-cases/internet-of-things/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "PubSub+ for IoT"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://www.asyncapi.com/blog/an-api-strategist-explores-event-driven-apis/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Designing, Documenting and Testing Event APIs for IoT Platforms"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/blog/demonstrating-iot-sap-teched-barcelona/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "IoT, Rasberry Pi, and Solace"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/company/iot-partner-solutions-program/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Our IoT Partner Solutions Program"
                      )
                    )
                  ),
                  n.a.createElement("h4", null, "Get Started"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Sample:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://tutorials.solace.dev/java-mqtt-paho/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "MQTT Messaging Samples"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        te = s("tazm"),
        se = s.n(te),
        ae = function (e) {
          return n.a.createElement(
            P,
            { tabId: "2" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "12" },
                  n.a.createElement("h3", null, "Event Mesh")
                )
              ),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "8" },
                  n.a.createElement(
                    "p",
                    null,
                    "An",
                    " ",
                    n.a.createElement(
                      "a",
                      {
                        href: "https://solace.com/what-is-an-event-mesh/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "event mesh"
                    ),
                    " ",
                    "is to your event-driven applications",
                    " ",
                    n.a.createElement(
                      "a",
                      {
                        href: "https://solace.com/blog/event-mesh/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "what a service mesh"
                    ),
                    " ",
                    "is to your RESTful applications: an architectural layer that allows events from one application to be dynamically routed and received by other applications, across diverse systems, clouds and protocols. This layer is composed of a network of",
                    " ",
                    n.a.createElement(
                      "a",
                      {
                        href: "https://solace.com/what-is-an-event-broker/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "advanced event brokers"
                    ),
                    ". The capabilities of the brokers that compose the mesh determine the capabilities and quality of the mesh."
                  ),
                  n.a.createElement(
                    C.a,
                    null,
                    n.a.createElement(
                      m.a,
                      { sm: "12" },
                      n.a.createElement("img", {
                        src: se.a,
                        alt: "Event Mesh Diagram",
                        width: "900px",
                        height: "476px",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    )
                  ),
                  n.a.createElement(
                    "h4",
                    null,
                    "Building an event mesh with PubSub+"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "An event mesh built with PubSub+ Event Brokers is:"
                  ),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Dynamic:"),
                      " events and other messages are self-routing, self-learning, self-healing, and built for automated and efficient event streaming between event producing and event consuming apps, wherever they run."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Open:"),
                      " natively supports multiple open standard protocols and APIs, for an open ecosystem."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Simple:"),
                      " the mesh can be created, managed and monitored through a single console."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Everywhere:"),
                      " can be deployed natively on premises, in private clouds and in public clouds (AWS, GCP, Azure), as an appliance, software and as a service."
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { sm: "4", className: "sidebar" },
                  n.a.createElement("h4", null, "Learn More"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://solace.com/blog/event-mesh/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Service Mesh, Meet Event Mesh"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Blog:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://solace.com/blog/advanced-event-broker/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "The Age of the Advanced Event Broker"
                      )
                    )
                  ),
                  n.a.createElement("h4", null, "Get Started"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Demo:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "https://www.youtube.com/watch?v=6LmEF9nAy1A",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Create a global, multi-cloud event mesh"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ne = s("51Ke"),
        oe = s.n(ne),
        re = s("TZvP"),
        ie = s.n(re),
        le = function (e) {
          return n.a.createElement(
            P,
            { tabId: "4" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "12" },
                  n.a.createElement("h3", null, "Messaging")
                )
              ),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "8" },
                  n.a.createElement(
                    "p",
                    null,
                    "Messaging refers to the passing of data between two applications via an intermediary broker (",
                    n.a.createElement(
                      "a",
                      {
                        href: "https://solace.com/messaging-middleware/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "message-oriented middleware"
                    ),
                    "). Messaging communication patterns like publish-subscribe, queuing and streaming can be differentiated from other communications patterns like request-reply over REST/HTTP in that messaging enables the decoupling/loose coupling of applications (Figure 4), and messages are generally sent asynchronously, whereas point-to-point request-reply patterns tend to support synchronous interactions between applications that are tightly coupled (Figure 3)."
                  ),
                  n.a.createElement(
                    C.a,
                    null,
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: oe.a,
                        alt:
                          "Messaging Diagram: Figure 3 - Point-to-Point, Request-Reply",
                        width: "436px",
                        height: "300x",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    ),
                    n.a.createElement(
                      m.a,
                      { sm: "6" },
                      n.a.createElement("img", {
                        className: "dropshadow",
                        src: ie.a,
                        alt: "Messaging Diagram: Figure 4 - Messaging",
                        width: "436px",
                        height: "300x",
                      }),
                      n.a.createElement("br", null),
                      n.a.createElement("br", null)
                    )
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "If you’re experienced with messaging, you may be familiar with open source tools like RabbitMQ, ActiveMQ or Kafka, or a commercial product like IBM MQ, TIBCO EMS (for on-prem deployments), AWS SQS/SNS or Azure Service Bus (cloud-native). Each messaging solution has its pros and cons, but a modern event broker like PubSub+ fits the bill for enterprise use cases that demand high performance and reliability across public clouds, private clouds, and datacenters, the flexibility to deploy anywhere, and the need to leverage a variety of open standard protocols and APIs."
                  ),
                  n.a.createElement("h4", null, "Leverage modern messaging"),
                  n.a.createElement(
                    "p",
                    null,
                    "PubSub+ Event Brokers are uniquely designed to support modern development practices (microservices, reactive, polyglot) and architectures (event-driven, hybrid cloud, multi-cloud), with support for the publish-subscribe messaging pattern (along with the traditional queuing and request/reply patterns), dynamic event streaming, and a host of additional features that ensure enterprise-grade performance and reliability no matter the demands of load and scale."
                  )
                ),
                n.a.createElement(
                  m.a,
                  { sm: "4", className: "sidebar" },
                  n.a.createElement("h4", null, "Get Started"),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Codelabs:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://codelabs.solace.dev/codelabs/exploring-solace-native-apis",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Exploring Solace Native APIs - The Basics"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Codelabs:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://codelabs.solace.dev/codelabs/solace-event-enable-rest/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "How to Event-Enable your REST Architecture with Solace PubSub+"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Doc:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/PubSub-Basics/Core-Concepts-Solace-API-Concepts.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Core Solace API Concepts"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement("strong", null, "Doc:"),
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Solace-PubSub-Messaging-APIs/API-Developer-Guide/Developer-Guide-Home.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Messaging Developer Guide"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ce = s("LTsZ"),
        ge = s.n(ce),
        pe = function (e) {
          return n.a.createElement(
            P,
            { tabId: "5" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "12" },
                  n.a.createElement("h3", null, "Cloud")
                )
              ),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { sm: "8" },
                  n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                      "p",
                      null,
                      "To enable communication among cloud-native applications, microservices and cloud services, your default may be to use the request-reply pattern over REST/HTTP, or to leverage messaging services provided by the public cloud you’re working in – AWS SQS/SNS, Google Cloud Pub/Sub, Azure Service Bus, etc."
                    ),
                    n.a.createElement(
                      "p",
                      null,
                      "If you’re working in a single public cloud and your application has little need to consume data produced elsewhere (on premises, in private clouds, or in other public clouds), one of these approaches may work just fine. But as your application requirements grow to include publishing and subscribing to data streams across multiple public clouds and/or private clouds/datacenters, the benefits of using a cross-cloud and hybrid-cloud message broker increase."
                    )
                  ),
                  n.a.createElement(
                    "h4",
                    null,
                    "Stream data across public clouds, private clouds and hybrid clouds"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "PubSub+ Event Brokers support event-driven applications and architectures across hybrid-cloud, multi-cloud and IoT environments, with support for the publish-subscribe messaging pattern (along with the traditional queuing and request/reply patterns), dynamic event streaming, and a host of additional features that ensure enterprise-grade performance and reliability no matter the demands of load and scale."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement("img", {
                      src: ge.a,
                      alt: "Cloud Diagram",
                      width: "903px",
                      height: "641x",
                    })
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "PubSub+ Event Brokers can be deployed natively in AWS, GCP and Azure, as well as in private clouds/datacenters, and the brokers can be connected to form a dynamic event mesh for event-driven communication across all environments (see",
                    " ",
                    n.a.createElement("strong", null, "Event Mesh"),
                    " use case)."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement(
                      "a",
                      {
                        href: "https://solace.com/cloud/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "PubSub+ Event Broker Cloud"
                    ),
                    " ",
                    "offers enterprise-grade messaging as a service, on-demand in your favorite public and virtual private clouds."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Here are some of the cloud-related capabilities and benefits you can unlock:"
                  ),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      "Stream data from your premises to the cloud: enable secure, reliable, real-time data movement between legacy and cloud applications over WebSocket, AMQP 1.0, JMS or REST/HTTP."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Stream data across private and public clouds; work inside the virtual private clouds (VPCs) offered by public cloud providers to maintain security and control."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Leverage WAN optimization for high throughput and low latency between cloud regions (over long-haul links) with limited bandwidth and/or round-trip times."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Filter data at the edge: only send events and other data to the cloud when you have applications in the cloud that are interested in the data (save $)."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Benefit from built-in fault tolerance and replication, both with fast failover, to ensure data is never interrupted and messages never get lost."
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "“Lift and shift” existing applications directly to the cloud leveraging JMS support."
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { sm: "4", className: "sidebar" },
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://console.solace.cloud/login/new-account?product=event-streaming",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Sign up with PubSub+ Cloud"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Explore the",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstarts-Connectors.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Quick Starts"
                      ),
                      " ",
                      "(",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-AWS.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "AWS"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-GCP.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "GCP"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-Azure.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Azure"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-Spring-Cloud-Connectors.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Spring Cloud"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-SpringBoot-AutoConfiguration-JMS-Api.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Spring Boot"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstart-Kubernetes.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Kubernetes"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      "Review the",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/Integration-Guides/Integration-Guides.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Integration Guides"
                      ),
                      " ",
                      "(",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/Integration-Guides/Aws-Integration.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "AWS"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/Integration-Guides/Kafka-Connect.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Kafka"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/Integration-Guides/Spring-Framework.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Spring"
                      ),
                      ",",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href:
                            "https://docs.solace.com/Developer-Tools/Integration-Guides/MuleSoft.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "MuleSoft"
                      ),
                      ")"
                    )
                  )
                )
              )
            )
          );
        },
        ue = s("yA+S"),
        Me = s.n(ue),
        Ie = s("zmTG"),
        Ae = s.n(Ie),
        de = s("SVCz"),
        be = s.n(de),
        Ce = s("z9n9"),
        me = s.n(Ce),
        Ne = s("GB9M"),
        Le = s.n(Ne),
        Se = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).toggle = s.toggle.bind(
                Object(N.a)(s)
              )),
              (s.state = { activeTab: "1" }),
              s
            );
          }
          Object(L.a)(t, e);
          var s = t.prototype;
          return (
            (s.toggle = function (e) {
              this.state.activeTab !== e && this.setState({ activeTab: e });
            }),
            (s.render = function () {
              var e = this;
              return n.a.createElement(
                "div",
                null,
                n.a.createElement(
                  I.a,
                  { fluid: !0 },
                  n.a.createElement(
                    S.a,
                    { tabs: !0 },
                    n.a.createElement(
                      y.a,
                      null,
                      n.a.createElement(
                        j.a,
                        {
                          className: g()({
                            active: "1" === this.state.activeTab,
                          }),
                          onClick: function () {
                            e.toggle("1");
                          },
                        },
                        n.a.createElement("img", {
                          src: Me.a,
                          className: "UseCaseTabIcon",
                          alt: "Icon - Microservices",
                        }),
                        n.a.createElement(
                          "span",
                          { className: "UseCaseTabText" },
                          "Microservices"
                        )
                      )
                    ),
                    n.a.createElement(
                      y.a,
                      null,
                      n.a.createElement(
                        j.a,
                        {
                          className: g()({
                            active: "2" === this.state.activeTab,
                          }),
                          onClick: function () {
                            e.toggle("2");
                          },
                        },
                        n.a.createElement("img", {
                          src: be.a,
                          className: "UseCaseTabIcon",
                          alt: "Icon - Event Mesh",
                        }),
                        n.a.createElement(
                          "span",
                          { className: "UseCaseTabText" },
                          "Event Mesh"
                        )
                      )
                    ),
                    n.a.createElement(
                      y.a,
                      null,
                      n.a.createElement(
                        j.a,
                        {
                          className: g()({
                            active: "3" === this.state.activeTab,
                          }),
                          onClick: function () {
                            e.toggle("3");
                          },
                        },
                        n.a.createElement("img", {
                          src: Ae.a,
                          className: "UseCaseTabIcon",
                          alt: "Icon - IoT",
                        }),
                        n.a.createElement(
                          "span",
                          { className: "UseCaseTabText" },
                          "IoT"
                        )
                      )
                    ),
                    n.a.createElement(
                      y.a,
                      null,
                      n.a.createElement(
                        j.a,
                        {
                          className: g()({
                            active: "4" === this.state.activeTab,
                          }),
                          onClick: function () {
                            e.toggle("4");
                          },
                        },
                        n.a.createElement("img", {
                          src: me.a,
                          className: "UseCaseTabIcon",
                          alt: "Icon - Messaging",
                        }),
                        n.a.createElement(
                          "span",
                          { className: "UseCaseTabText" },
                          "Messaging"
                        )
                      )
                    ),
                    n.a.createElement(
                      y.a,
                      null,
                      n.a.createElement(
                        j.a,
                        {
                          className: g()({
                            active: "5" === this.state.activeTab,
                          }),
                          onClick: function () {
                            e.toggle("5");
                          },
                        },
                        n.a.createElement("img", {
                          src: Le.a,
                          className: "UseCaseTabIcon",
                          alt: "Icon - Cloud",
                        }),
                        n.a.createElement(
                          "span",
                          { className: "UseCaseTabText" },
                          "Cloud"
                        )
                      )
                    )
                  )
                ),
                n.a.createElement(
                  v,
                  {
                    activeTab: this.state.activeTab,
                    className: "gradientDrkGrey",
                  },
                  n.a.createElement(X, null),
                  n.a.createElement(ae, null),
                  n.a.createElement(ee, null),
                  n.a.createElement(le, null),
                  n.a.createElement(pe, null)
                )
              );
            }),
            t
          );
        })(n.a.Component),
        ye = function (e) {
          return n.a.createElement(
            "section",
            { className: "use-cases gradientLtGrey", id: "UseCases" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  null,
                  n.a.createElement("h2", null, "Use Cases")
                )
              )
            ),
            n.a.createElement(Se, null)
          );
        },
        je = function (e) {
          var t = e.className,
            s = e.cssModule,
            a = e.color,
            o = e.body,
            r = e.inverse,
            c = e.outline,
            u = e.tag,
            M = e.innerRef,
            I = Object(l.a)(e, [
              "className",
              "cssModule",
              "color",
              "body",
              "inverse",
              "outline",
              "tag",
              "innerRef",
            ]),
            A = Object(p.e)(
              g()(
                t,
                "card",
                !!r && "text-white",
                !!o && "card-body",
                !!a && (c ? "border" : "bg") + "-" + a
              ),
              s
            );
          return n.a.createElement(
            u,
            Object(i.a)({}, I, { className: A, ref: M })
          );
        };
      je.defaultProps = { tag: "div" };
      var Te = je,
        De = function (e) {
          var t = e.className,
            s = e.cssModule,
            a = e.tag,
            o = Object(l.a)(e, ["className", "cssModule", "tag"]),
            r = Object(p.e)(g()(t, "card-title"), s);
          return n.a.createElement(a, Object(i.a)({}, o, { className: r }));
        };
      De.defaultProps = { tag: "div" };
      var Ee = De,
        we = function (e) {
          var t = e.className,
            s = e.cssModule,
            a = e.tag,
            o = Object(l.a)(e, ["className", "cssModule", "tag"]),
            r = Object(p.e)(g()(t, "card-text"), s);
          return n.a.createElement(a, Object(i.a)({}, o, { className: r }));
        };
      we.defaultProps = { tag: "p" };
      var he = we,
        ve = function (e) {
          return n.a.createElement(
            "section",
            { className: "resources DarkGreyGradient", id: "Resources" },
            n.a.createElement(
              I.a,
              { fluid: !0 },
              n.a.createElement("h2", null, "Resources"),
              n.a.createElement(
                C.a,
                null,
                n.a.createElement(
                  m.a,
                  { xs: "12", md: "4", lg: "4" },
                  n.a.createElement(
                    "a",
                    {
                      href: "https://tutorials.solace.dev/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Tutorials"),
                      n.a.createElement(
                        he,
                        null,
                        "Get up-to-speed in sending and receiving messages over open APIs and protocols, Solace Messaging APIs, and Pivotal Platform."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://github.com/SolaceSamples",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "GitHub Samples"),
                      n.a.createElement(
                        he,
                        null,
                        "Check out our Solace samples for Spring, JMS, MQTT, AMQP, JavaScript, and more."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href:
                        "https://docs.solace.com/Developer-Tools/QuickStarts-Connectors/Quickstarts-Connectors.htm",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Quick Starts"),
                      n.a.createElement(
                        he,
                        null,
                        "Access Quick Start deployment templates and Connectors available as open source projects on GitHub."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href:
                        "https://docs.solace.com/Developer-Tools/Integration-Guides/Integration-Guides.htm",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Integration Guides"),
                      n.a.createElement(
                        he,
                        null,
                        "Get a jump start plugging PubSub+ into AWS, Kafka, Spark, IBM WebSphere, and much more."
                      )
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { xs: "12", md: "4", lg: "4" },
                  n.a.createElement(
                    "a",
                    {
                      href:
                        "https://docs.solace.com/PubSub-ConceptMaps/Event-Stream-Maps.htm",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Event Stream Concept Maps"),
                      n.a.createElement(
                        he,
                        null,
                        "A high level introduction to how PubSub+ processes events."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href:
                        "https://docs.solace.com/PubSub-ConceptMaps/Component-Maps.htm",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Component Concept Maps"),
                      n.a.createElement(
                        he,
                        null,
                        "A high level introduction on how your app interacts with PubSub+ messaging components whether you're using SMF, JMS, MQTT, or REST."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://solace.com/learn/training/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Training & Certifications"),
                      n.a.createElement(
                        he,
                        null,
                        "Get up to speed on our managed messaging service."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://docs.solace.com/SDKPerf/SDKPerf.htm",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "SDKPerf"),
                      n.a.createElement(
                        he,
                        null,
                        "SDKPerf is a command line tool for validating performance, checking configuration, and exploring features associated with your PubSub+ message broker."
                      )
                    )
                  )
                ),
                n.a.createElement(
                  m.a,
                  { xs: "12", md: "4", lg: "4" },
                  n.a.createElement(
                    "a",
                    {
                      href: "https://solace.community",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Developer Community"),
                      n.a.createElement(
                        he,
                        null,
                        "Technical community for PubSub+."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://codelabs.solace.dev",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Codelabs & Workshops"),
                      n.a.createElement(
                        he,
                        null,
                        "Get guided, hands on coding experience with PubSub+ Codelabs."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://www.udemy.com/user/leah-robert/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Udemy Courses"),
                      n.a.createElement(
                        he,
                        null,
                        "Learn the fundamentals of PubSub+ at your own pace."
                      )
                    )
                  ),
                  n.a.createElement(
                    "a",
                    {
                      href: "https://solace.com/blog/jmstoolbox-and-solace/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    n.a.createElement(
                      Te,
                      {
                        body: !0,
                        inverse: !0,
                        style: { backgroundColor: "#343a40" },
                      },
                      n.a.createElement(Ee, null, "Queue Browser"),
                      n.a.createElement(
                        he,
                        null,
                        "Get all the information you need to use JMS ToolBox with PubSub+"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Pe = s("W/9C");
      s("WF7/"),
        (t.a = function (e) {
          var t = e.children;
          return n.a.createElement(o.StaticQuery, {
            query: "3649515864",
            render: function (e) {
              return n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(b, { siteTitle: e.site.siteMetadata.title }),
                n.a.createElement(
                  "div",
                  null,
                  n.a.createElement("main", null, t)
                ),
                n.a.createElement(Q, null),
                n.a.createElement(B, null),
                n.a.createElement(Z, null),
                n.a.createElement(J.default, null),
                n.a.createElement(ye, null),
                n.a.createElement(ve, null),
                n.a.createElement(Pe.a, null)
              );
            },
          });
        });
    },
    C3it: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceRest",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace REST Messaging API",
          protocol: {
            id: "rest",
            name: "REST",
            logo: "./images/solace-logo.png",
            usesVPN: !1,
          },
          language: { name: "REST", logo: "./images/solace-logo.png" },
          links: {
            tutorial:
              "https://tutorials.solace.dev/rest-messaging/publish-subscribe/",
            api:
              "https://docs.solace.com/Open-APIs-Protocols/REST-get-start.htm",
            download: [],
          },
          step1: {
            name: "Solace REST messaging API",
            getAPI: [
              {
                title: "Using REST",
                description:
                  'There is no API to obtain. The Solace REST messaging API is a wireline RESTful HTTP protocol. It is fully outlined in <a href="https://docs.solace.com/RESTMessagingPrtl/Solace-REST-Overview.htm" target="_blank">REST Messaging Protocol</a>.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to receive REST messages from Solace messaging, you must configure a Guaranteed messaging queue and a REST delivery point. The queue is used to attract messages to the consumer application. The REST delivery point is the Solace message router component that delivers the messages from the queue to the consumer application asynchronously through HTTP POST requests.",
            ],
            code: [
              {
                protocol: "REST",
                sample:
                  'curl -X POST <span class="value">${url}</span>/T/rest/pubsub \\<br>                        -d "Hello World REST" \\<br>                        -H "content-type: text" \\<br>                        -H "Solace-delivery-mode: direct" \\<br>                        --user <span class="value">${username}</span>:<span class="value">${password}</span>',
              },
              {
                protocol: "Secured REST",
                sample:
                  'curl -X POST <span class="value">${url}</span>/T/rest/pubsub \\<br>                        -d "Hello World REST" \\<br>                        -H "content-type: text" \\<br>                        -H "Solace-delivery-mode: direct" \\<br>                        --user <span class="value">${username}</span>:<span class="value">${password}</span>',
              },
            ],
            conclusion: [
              "At this point, the client has sent a message to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://tutorials.solace.dev/rest-messaging/publish-subscribe/",
              },
            ],
          },
        });
    },
    EtvR: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "springBootJmsAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Spring Boot JMS API",
          protocol: {
            id: "jms",
            name: "JMS",
            logo: "./images/spring-boot-logo.png",
            usesVPN: !0,
          },
          language: { name: "Spring", logo: "./images/spring-boot-logo.png" },
          links: {
            tutorial:
              "https://tutorials.solace.dev/spring/spring-boot-autoconfigure",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/jms/index.html",
            download: [
              {
                name: "Solace Starter",
                url:
                  "https://mvnrepository.com/artifact/com.solace.spring.boot/solace-jms-spring-boot-starter",
              },
            ],
          },
          step1: {
            name: "Get the API",
            getAPI: [
              {
                title: "I already have a Maven Spring Boot Project",
                description:
                  "Add the Solace JMS Spring Boot Starter to your POM if using Maven.",
                code: [
                  "&lt;dependency&gt <br/>          &nbsp;&nbsp;&lt;groupId&gtcom.solace.spring.boot&lt;/groupId&gt <br/>          &nbsp;&nbsp;&lt;artifactId&gtsolace-jms-spring-boot-starter&lt;/artifactId&gt <br/>          &nbsp;&nbsp;&lt;version&gt3.0.0&lt;/version&gt <br/>          &lt;/dependency&gt",
                ],
              },
              {
                title: "I already have a Gradle Spring Boot Project",
                description:
                  "Add the Solace JMS Spring Boot Starter to your build.gradle if using Gradle.",
                code: [
                  "compile group: 'com.solace.spring.boot', name: 'solace-jms-spring-boot-starter', version: '3.0.0'",
                ],
              },
              {
                title:
                  "Starting from Scratch - Use Spring Initializr to bootstrap my project!",
                description:
                  'It is recommended to bootstrap your Spring Boot project using <a href="https://start.spring.io/#!dependencies=solace" target="_blank">Spring Initializr</a>.            <br/> Spring Initializr will generate your Spring Boot project skeleton for you based on a few simple choices,           such as your preferred language, <br/> Spring Boot version, and then dependencies you need to build your microservice.<br/><br/>           Make sure to choose the Solace dependency!',
              },
            ],
          },
          step2: {
            introduction: [
              'The Solace JMS Spring Boot Starter that you added to your dependencies in the "Get API" step        enables autoconfiguration of a ConnectionFactory or JndiTemplate.<br/>        This allows developers to use the power of Spring to easily create JMS applications with PubSub+.        More info on how this auto-configuration works can be found <a href="https://solace.com/blog/solace-jms-meet-spring-boot-starters/" target="_blank">here</a>. <br/>        To take advantage of this auto-configuration you just need to set some application properties.        An example below shows how to do so using the <strong>application.properties</strong> file.<br/>        Other external configuration options supported by Spring Boot are available <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html" target="_blank">here</a>.',
            ],
            code: [{ protocol: "JMS", sample: "" }],
            conclusion: [
              "See the “Learn More” tab for more information about the Solace JMS Spring Boot Starter, including sample code.",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "tutorial",
                name: "JMS Tutorial",
                logo: "./images/spring-boot.svg",
                url:
                  "https://tutorials.solace.dev/spring/spring-boot-autoconfigure/ ",
              },
              {
                id: "blog",
                name: "Blog: Solace JMS <br/>Meet Spring Boot <br/>Starters",
                logo: "./images/spring-boot.svg",
                url:
                  "https://solace.com/blog/solace-jms-meet-spring-boot-starters/",
              },
              {
                id: "jndi-tutorial",
                name: "JMS Tutorial <br/>Using JNDI & PCF",
                logo: "./images/github-logo.png",
                url:
                  "https://tutorials.solace.dev/tanzu/spring-cloud-autoconf-jndi/",
              },
            ],
          },
        });
    },
    FD6k: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoPythonAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho Python Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: "Python", logo: "./images/python-logo.png" },
          links: {
            api: "https://www.eclipse.org/paho/clients/python/docs/",
            download: [
              {
                name: "Eclipse Paho Portal",
                url: "https://www.eclipse.org/paho/clients/python/",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho Python Client",
            getAPI: [
              {
                title: "Download from Eclipse",
                description:
                  'Get Eclipse Paho Python Client from <a href="https://www.eclipse.org/paho/clients/python/" target="_bank">here</a>',
              },
            ],
          },
        });
    },
    FJZC: function (e, t, s) {
      e.exports =
        s.p + "static/spring-logo-a9779473c2018ecbbc3eb8ea43d1f4ca.png";
    },
    Fet6: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solace-jms-api",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace JMS API",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/jms/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/jms/index.html",
            download: [
              {
                name: "Maven Repository",
                group: "none",
                url:
                  "https://mvnrepository.com/artifact/com.solacesystems/sol-jms",
              },
            ],
          },
          step1: {
            name: "Java API",
            getAPI: [
              {
                title: "Using Gradle",
                code: ['compile("com.solacesystems:sol-jms:10.2.1")'],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;dependency&gt; <br>                &nbsp&nbsp &lt;groupId&gt;com.solacesystems&lt/groupId&gt <br>                &nbsp&nbsp &lt;artifactId&gt;sol-jms&lt;/artifactId&gt; <br>                &nbsp&nbsp &lt;version&gt;10.2.1&lt;/version&gt; <br>                &lt;/dependency&gt",
                ],
              },
              {
                title: "Using Solace Developer Portal",
                description:
                  'The Java API library can be downloaded <a href="https://solace.com/downloads/?fwp_downloads=solace-apis/" target="_blank">here</a>. The JMS API is distributed as a zip file containing the required jars, API documentation, and examples.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect to Solace messaging. In JMS, a client connects by creating a Connection from the ConnectionFactory. Then a JMS Session is used as a factory for consumers and producers.",
              "The following code shows how to create a connection using a programmatically created ConnectionFactory. You can learn more about other ways to create ConnectionFactories by referring to Solace JMS Documentation - Obtaining Connection Factories.",
            ],
            code: [
              {
                protocol: "SMF",
                sample:
                  'SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(); <br>                       connectionFactory.setHost("<span class="value">${url}</span>"); <br>                       connectionFactory.setUsername("<span class="value">${username}</span>"); <br>                       connectionFactory.setPassword("<span class="value">${password}</span>"); <br>                       connectionFactory.setVPN(<span class="value">${vpn}</span>"); <br>                       <br>                       Connection connection = connectionFactory.createConnection(); <br>                       Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>                       ',
              },
              {
                protocol: "Secured SMF",
                sample:
                  'SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(); <br>                       connectionFactory.setHost("<span class="value">${url}</span>"); <br>                       connectionFactory.setUsername("<span class="value">${username}</span>"); <br>                       connectionFactory.setPassword("<span class="value">${password}</span>"); <br>                       connectionFactory.setVPN(<span class="value">${vpn}</span>"); <br>                       <br>                       Connection connection = connectionFactory.createConnection(); <br>                       Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>                       ',
              },
              {
                protocol: "Compressed SMF",
                sample:
                  'Hashtable&lt;String, Object&gt; env = new Hashtable&lt;String,Object&gt;(); <br>               \t\t   env.put(SupportedProperty.SOLACE_JMS_COMPRESSION_LEVEL, 9); <br>               \t\t   SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(env); <br>                       connectionFactory.setHost("<span class="value">${url}</span>"); <br>                       connectionFactory.setUsername("<span class="value">${username}</span>"); <br>                       connectionFactory.setPassword("<span class="value">${password}</span>"); <br>                       connectionFactory.setVPN(<span class="value">${vpn}</span>"); <br>                       <br>                       Connection connection = connectionFactory.createConnection(); <br>                       Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>                       ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/jms/publish-subscribe/",
              },
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/jms/persistence-with-queues/",
              },
              {
                id: "request-reply",
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url: "https://tutorials.solace.dev/jms/request-reply/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url: "https://tutorials.solace.dev/jms/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url: "https://tutorials.solace.dev/jms/topic-to-queue-mapping/",
              },
              {
                id: "jms-jndi",
                name:
                  "Obtaining JMS<br>                        objects using JNDI",
                logo: "./images/jms-jndi.svg",
                url: "https://tutorials.solace.dev/jms/using-jndi/",
              },
            ],
          },
        });
    },
    GB9M: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAAM1BMVEVMaXEAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJXg/Qg3AAAAEHRSTlMA0OCgYMCAQBDwIDCwkFBwx3YDRQAAAAlwSFlzAAAJOgAACToB8GSSSgAAAUZJREFUWIXtltlyhiAMhdkh4nLe/2k7WNt/CyY6017x3eiwHMiqZjAYDP6OaUsxzmktt08IFj/46ZZCjft+F2l/LjckVgJoye21hCZnLxuUmwGPXdldF5kICM8DxQKzcnP1rvnAvkl8i4TerpeFy28kPg6dCKSRaMG0KS0O7tP4TXWRGbB7JExl/FcIUZTIgu89oLgGnaZjALIgUQB/uiDLGuKSDKTzPJtm4HxFBUCpP79nhhT/rSWO7fmsuiYhhz849BzfysOuokK7rwcsOxOlkDzhAc4nQV+TxhQHYnxv2dEegaub6VqnY3NRkcMvRKb2kqKW/knjUrt1jMYKqPLroHIJUqBoUA88UNlRVcveyfyJrWVro1upkwkBYns52Igvl0OEfMgCS2sR3epsH1QVp00mzAoJJ1osmZLv/ckMBoPBO8aYLyiPFNZMAenpAAAAAElFTkSuQmCC";
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, s, a) {
        var n = s ? s.call(a, e, t) : void 0;
        if (void 0 !== n) return !!n;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          r = Object.keys(t);
        if (o.length !== r.length) return !1;
        for (
          var i = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < o.length;
          l++
        ) {
          var c = o[l];
          if (!i(c)) return !1;
          var g = e[c],
            p = t[c];
          if (
            !1 === (n = s ? s.call(a, g, p, c) : void 0) ||
            (void 0 === n && g !== p)
          )
            return !1;
        }
        return !0;
      };
    },
    Gz8x: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNwcmluIENsb3VkPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS4yMSw0NC4yM2E5MC44Miw5MC44MiwwLDAsMC0zLjkxLTE1LjEsMjEuNjIsMjEuNjIsMCwwLDEtMi41Nyw0LjU3LDI0LjA4LDI0LjA4LDAsMCwwLTM0LjA1LS40OSwyMy42MywyMy42MywwLDAsMC0zLjg5LDQuOTEsMTYsMTYsMCwwLDEsOS44NCw0LjE0LDE2LjYxLDE2LjYxLDAsMCwwLTkuMy0yLjc1LDE3LDE3LDAsMCwwLDAsMzQuMDloMzkuM2ExNSwxNSwwLDAsMCw0LjU4LTI5LjM3Wk0zOC41LDY4LjM0YTIsMiwwLDEsMS0uMjktMi44OSwyLDIsMCwwLDEsLjI5LDIuODlabTMyLjctNy4yMWMtNiw3LjkyLTE4LjY1LDUuMjYtMjYuNzksNS42MywwLDAtMS40NC4wOC0yLjg5LjMyLDAsMCwuNTUtLjIzLDEuMjUtLjQ3LDUuNzEtMiw4LjQyLTIuMzgsMTEuOS00LjE3LDYuNTItMy4zNCwxMy0xMC42MiwxNC4zNC0xOC4xOS0yLjQ5LDcuMjgtMTAsMTMuNTQtMTYuOTIsMTYuMDhhMTE4LjQ0LDExOC40NCwwLDAsMS0xMy4yNCwzLjQ0bC0uMzQtLjE5Yy01LjgtMi44Mi02LTE1LjM2LDQuNTYtMTkuNDEsNC42Mi0xLjc3LDktLjgsMTQtMiw1LjMyLTEuMjYsMTEuNDgtNS4yNiwxNC0xMC40NiwyLjgxLDguMzMsNi4xOCwyMS4zNS4xNCwyOS40MVoiLz48L3N2Zz4=";
    },
    H0CJ: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceJavaRTOAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace JavaRTO",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/javarto/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/jrto/index.html",
            download: [
              {
                name: "Linux 2.6 x86",
                group: "Linux",
                url:
                  "https://products.solace.com/download/JAVA_RTO_API_LINUX32",
              },
              {
                name: "Linux 2.6 x64",
                group: "Linux",
                url:
                  "https://products.solace.com/download/JAVA_RTO_API_LINUX64",
              },
              {
                name: "Windows x86",
                group: "Windows",
                url: "https://products.solace.com/download/JAVA_RTO_API_WIN32",
              },
              {
                name: "Windows x64",
                group: "Windows",
                url: "https://products.solace.com/download/JAVA_RTO_API_WIN64",
              },
              {
                name: "macOS",
                group: "Mac",
                url: "https://products.solace.com/download/JAVA_RTO_API_OSX",
              },
            ],
          },
          step1: {
            name: "JavaRTO API",
            getAPI: [
              {
                title: "Using Gradle",
                code: [
                  'repositories {<br>                    &nbsp; flatDir(dir: "<PATH_TO_EXTRACTED_API>/solclientj/lib", name: "Java RTO API lib directory")<br>                }<br>                <br>                dependencies {<br>                    &nbsp; // Solace Messaging API for JavaRTO Dependencies<br>                    &nbsp; compile("com.solacesystems:solclientj:")<br>                }',
                ],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;repositories&gt; <br>                &nbsp; &lt;repository&gt; <br>                  &nbsp; &nbsp; &lt;id&gt;localrepository&lt;/id&gt; <br>                 &nbsp; &nbsp;  &lt;url&gt;file://<PATH_TO_EXTRACTED_API>/solclientj/lib/&lt;/url&gt; <br>                &nbsp; &lt;/repository&gt; <br>              &lt;/repositories&gt; <br>              <br>              [...]<br>              <br>              &lt;dependency&gt;<br>                &nbsp&nbsp &lt;groupId&gt;com.solacesystems&lt/groupId&gt <br>                &nbsp&nbsp &lt;artifactId&gt;solclientj&lt;/artifactId&gt; <br>                &nbsp&nbsp &lt;version&gt;+&lt;/version&gt;<br>              &lt;/dependency&gt;",
                ],
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session.",
              "The Solace session is the basis for all client communication with Solace messaging.",
            ],
            code: [
              {
                protocol: "SMF",
                sample:
                  '                // Solclient needs to be initialized before any other API calls. <br>                Solclient.init(new String[0]); <br>                 <br>                // Context <br>                final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                Solclient.createContextForHandle(contextHandle, new String[0]);<br>                <br>                // A message callback to receive messages asynchronously<br>                MessageCallback messageCallback = new MessageCallback() {<br>                    &nbsp;  @Override<br>                    &nbsp;  public void onMessage(Handle handle) {<br>                        &nbsp; &nbsp; System.out.println("Received message:");<br>                    &nbsp; }<br>                };<br>                <br>                // A session event callback to events such as connect/disconnect events<br>                SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                    &nbsp; @Override<br>                    &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                        &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                    &nbsp; }<br>                };<br>                <br>                // Configure the Session properties<br>                ArrayList<String> sessionProperties = new ArrayList<String>();<br>                sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                sessionProperties.add("<span class="value">${url}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                sessionProperties.add("<span class="value">${username}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                sessionProperties.add("<span class="value">${password}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                sessionProperties.add("<span class="value">${vpn}</span>");<br>                String[] props = new String[sessionProperties.size()];<br>                <br>                // Instantiate a new SessionHandle instance<br>                final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                <br>                // Create the Session<br>                contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                <br>                // Connect the Session<br>                sessionHandle.connect();<br>                ',
              },
              {
                protocol: "Secured SMF",
                sample:
                  '                // Solclient needs to be initialized before any other API calls. <br>                Solclient.init(new String[0]); <br>                 <br>                // Context <br>                final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                Solclient.createContextForHandle(contextHandle, new String[0]);<br>                <br>                // A message callback to receive messages asynchronously<br>                MessageCallback messageCallback = new MessageCallback() {<br>                    &nbsp;  @Override<br>                    &nbsp;  public void onMessage(Handle handle) {<br>                        &nbsp; &nbsp; System.out.println("Received message:");<br>                    &nbsp; }<br>                };<br>                <br>                // A session event callback to events such as connect/disconnect events<br>                SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                    &nbsp; @Override<br>                    &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                        &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                    &nbsp; }<br>                };<br>                <br>                // Configure the Session properties<br>                ArrayList<String> sessionProperties = new ArrayList<String>();<br>                sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                sessionProperties.add("<span class="value">${url}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                sessionProperties.add("<span class="value">${username}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                sessionProperties.add("<span class="value">${password}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                sessionProperties.add("<span class="value">${vpn}</span>");<br>                String[] props = new String[sessionProperties.size()];<br>                <br>                // Instantiate a new SessionHandle instance<br>                final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                <br>                // Create the Session<br>                contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                <br>                // Connect the Session<br>                sessionHandle.connect();<br>                ',
              },
              {
                protocol: "Compressed SMF",
                name: "Compressed SMF",
                sample:
                  '                // Solclient needs to be initialized before any other API calls. <br>                Solclient.init(new String[0]); <br>                 <br>                // Context <br>                final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                Solclient.createContextForHandle(contextHandle, new String[0]);<br>                <br>                // A message callback to receive messages asynchronously<br>                MessageCallback messageCallback = new MessageCallback() {<br>                    &nbsp;  @Override<br>                    &nbsp;  public void onMessage(Handle handle) {<br>                        &nbsp; &nbsp; System.out.println("Received message:");<br>                    &nbsp; }<br>                };<br>                <br>                // A session event callback to events such as connect/disconnect events<br>                SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                    &nbsp; @Override<br>                    &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                        &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                    &nbsp; }<br>                };<br>                <br>                // Configure the Session properties<br>                ArrayList<String> sessionProperties = new ArrayList<String>();<br>                sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                sessionProperties.add("<span class="value">${url}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                sessionProperties.add("<span class="value">${username}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                sessionProperties.add("<span class="value">${password}</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                sessionProperties.add("<span class="value">${vpn}</span>");<br>                String[] props = new String[sessionProperties.size()];<br>                <br>                // Instantiate a new SessionHandle instance<br>                final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                <br>                // Create the Session<br>                contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                <br>                // Connect the Session<br>                sessionHandle.connect();<br>                ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/javarto/publish-subscribe/",
              },
            ],
          },
        });
    },
    HWzP: function (e, t, s) {
      e.exports =
        s.p +
        "static/iot-diagram-messaging-39c2108732afd317e12250ea44fe8151.svg";
    },
    HnAx: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return g;
        });
      var a = s("uRdJ"),
        n = s("9Hrx"),
        o = s("q1tI"),
        r = s.n(o),
        i = s("Sl7n"),
        l = s("RhB0"),
        c = s("YoGy"),
        g = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).selectView = function (e) {
                var t = {};
                (t.selectValue = e.currentTarget.value),
                  "protocol" === t.selectValue
                    ? (t.data = i.default)
                    : "language" === t.selectValue && (t.data = l.default),
                  s.setState(t);
              }),
              (s.toggleConnectDetailsFn = t.toggleConnectDetailsFn),
              (s.selectView = s.selectView.bind(Object(a.a)(s))),
              (s.state = { selectValue: "language", data: l.default }),
              s
            );
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "h3",
                  { className: "title-bar" },
                  "Connect Using a Supported Client Library"
                ),
                r.a.createElement(
                  "div",
                  {
                    className: "sub-title",
                    style: { display: "flex", justifyContent: "space-between" },
                  },
                  "Select a connection point and supported client library below to start messaging.",
                  r.a.createElement(
                    "div",
                    { className: "filter" },
                    r.a.createElement(
                      "span",
                      { className: "view-by" },
                      "View by:"
                    ),
                    r.a.createElement("img", {
                      className: "caret",
                      src: s("lXxq"),
                      alt: "",
                    }),
                    r.a.createElement(
                      "select",
                      { "aria-label": "Select", onChange: this.selectView },
                      r.a.createElement(
                        "option",
                        { value: "language" },
                        "Language"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "protocol" },
                        "Protocol"
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "ul",
                  null,
                  this.state.data.map(function (t) {
                    return r.a.createElement(
                      "li",
                      { key: t.displayName },
                      r.a.createElement(c.default, {
                        toggleConnectDetailsFn: e.toggleConnectDetailsFn,
                        selection: e.state.selectValue,
                        data: t,
                      })
                    );
                  })
                )
              );
            }),
            t
          );
        })(r.a.Component);
    },
    I5ZI: function (e, t, s) {
      e.exports =
        s.p +
        "static/solace-apis-protocols-support-70f8c54326e8bd16b50ef5adc03518c7.png";
    },
    KS6O: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return T;
        });
      var a = s("Fet6"),
        n = s("VbAj"),
        o = s("k+q9"),
        r = s("uuum"),
        i = s("H0CJ"),
        l = s("tZKj"),
        c = s("hlZ0"),
        g = s("cVV5"),
        p = s("w4SK"),
        u = s("NC2+"),
        M = s("YQce"),
        I = s("+HKm"),
        A = s("C3it"),
        d = s("6QVW"),
        b = s("OnNP"),
        C = s("NqII"),
        m = s("Q2gl"),
        N = s("FD6k"),
        L = s("XESa"),
        S = s("izM5"),
        y = s("EtvR"),
        j = {
          solaceJMSAPI: a.default,
          solaceJavascriptAPI: n.default,
          solaceNodeJSAPI: o.default,
          pahoJavaAPI: r.default,
          solaceJavaRTOAPI: i.default,
          solaceCAPI: l.default,
          solaceDotNetAPI: g.default,
          solacePythonAPI: c.default,
          solaceQpid1API: p.default,
          solaceQpid2API: u.default,
          solaceJavaAPI: M.default,
          solaceAmqp10API: I.default,
          restAPI: A.default,
          pahoJavaScriptAPI: d.default,
          pahoCAPI: b.default,
          pahoCplusplusAPI: C.default,
          pahoDotNetAPI: m.default,
          pahoPythonAPI: N.default,
          springCloudStreamsAPI: L.default,
          springBootJavaAPI: S.default,
          springBootJmsAPI: y.default,
        };
      function T(e) {
        return j[e];
      }
    },
    LOjx: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    LTsZ: function (e, t, s) {
      e.exports =
        s.p +
        "static/cloud-console-diagram-919b723996296f75dfb93764c378a309.svg";
    },
    MSu3: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    N3Qv: function (e, t, s) {},
    "NC2+": function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceQpid2API",
          componentName: "connectivity-detail-template-v1",
          displayName: "QPID JMS 2.0",
          protocol: {
            id: "amqp",
            name: "AMQP",
            logo: "./images/qpid.png",
            usesVPN: !1,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial:
              "https://tutorials.solace.dev/java-amqp-qpid-jms2/publish-subscribe/",
            api:
              "https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html",
            download: [
              {
                name: "Apache QPID JMS 2.0",
                url:
                  "http://www.apache.org/dyn/closer.lua/qpid/jms/0.31.0/apache-qpid-jms-0.31.0-bin.tar.gz",
              },
            ],
          },
          step1: {
            name: "Apache QPID JMS client",
            getAPI: [
              {
                title: "Using Gradle",
                code: [
                  'dependencies { <br>                    &nbsp; compile("org.apache.qpid:qpid-jms-client:0.27.0") <br>                }',
                ],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;dependency&gt; <br>                &nbsp; &lt;groupId&gt;org.apache.qpid&lt;/groupId&gt; <br>                &nbsp; &lt;artifactId&gt;qpid-jms-client&lt;/artifactId&gt; <br>                &nbsp; &lt;version&gt;0.27.0&lt;/version&gt; <br>            &lt;/dependency&gt;",
                ],
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must start a JMS connection",
            ],
            code: [
              {
                protocol: "AMQP",
                sample:
                  '                ConnectionFactory connectionFactory = new JmsConnectionFactory("<span class="value">${username}</span>", "<span class="value">${password}</span>", "<span class="value">${url}</span>"); <br>                JMSContext context = connectionFactory.createContext(); <br>                ',
              },
              {
                protocol: "Secured AMQP",
                sample:
                  '                ConnectionFactory connectionFactory = new JmsConnectionFactory("<span class="value">${username}</span>", "<span class="value">${password}</span>", "<span class="value">${url}</span>"); <br>                JMSContext context = connectionFactory.createContext(); <br>                ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms2/publish-subscribe/",
              },
              {
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms2/persistence-with-queues/",
              },
              {
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms2/request-reply/",
              },
              {
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms2/confirmed-delivery/",
              },
              {
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms2/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    NqII: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoCplusplusAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho C++ Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: "C++", logo: "./images/c-logo.png" },
          links: {
            api: "http://www.eclipse.org/paho/files/cppdoc/index.html",
            download: [
              {
                name: "Eclipse Paho Portal",
                url: "http://build.eclipse.org/technology/paho/C/",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho C++ Client",
            getAPI: [
              {
                title: "Download from Eclipse",
                description:
                  'Get Eclipse Paho C++ Client from <a href="http://build.eclipse.org/technology/paho/C/" target="_bank">here</a>',
              },
            ],
          },
        });
    },
    OCAI: function (e, t, s) {
      var a = {
        "./accordion": "HnAx",
        "./accordion-element": "YoGy",
        "./accordion-element.js": "YoGy",
        "./accordion.js": "HnAx",
        "./apis-protocols": "YSfM",
        "./apis-protocols.js": "YSfM",
        "./client-libraries/pahoCAPI": "OnNP",
        "./client-libraries/pahoCAPI.js": "OnNP",
        "./client-libraries/pahoCplusplusAPI": "NqII",
        "./client-libraries/pahoCplusplusAPI.js": "NqII",
        "./client-libraries/pahoDotNetAPI": "Q2gl",
        "./client-libraries/pahoDotNetAPI.js": "Q2gl",
        "./client-libraries/pahoJavaAPI": "uuum",
        "./client-libraries/pahoJavaAPI.js": "uuum",
        "./client-libraries/pahoJavaScriptAPI": "6QVW",
        "./client-libraries/pahoJavaScriptAPI.js": "6QVW",
        "./client-libraries/pahoPythonAPI": "FD6k",
        "./client-libraries/pahoPythonAPI.js": "FD6k",
        "./client-libraries/restAPI": "C3it",
        "./client-libraries/restAPI.js": "C3it",
        "./client-libraries/solaceAmqp10API": "+HKm",
        "./client-libraries/solaceAmqp10API.js": "+HKm",
        "./client-libraries/solaceCAPI": "tZKj",
        "./client-libraries/solaceCAPI.js": "tZKj",
        "./client-libraries/solaceDotNetAPI": "cVV5",
        "./client-libraries/solaceDotNetAPI.js": "cVV5",
        "./client-libraries/solaceJMSAPI": "Fet6",
        "./client-libraries/solaceJMSAPI.js": "Fet6",
        "./client-libraries/solaceJavaAPI": "YQce",
        "./client-libraries/solaceJavaAPI.js": "YQce",
        "./client-libraries/solaceJavaRTOAPI": "H0CJ",
        "./client-libraries/solaceJavaRTOAPI.js": "H0CJ",
        "./client-libraries/solaceJavascriptAPI": "VbAj",
        "./client-libraries/solaceJavascriptAPI.js": "VbAj",
        "./client-libraries/solaceNodeJSAPI": "k+q9",
        "./client-libraries/solaceNodeJSAPI.js": "k+q9",
        "./client-libraries/solacePythonAPI": "hlZ0",
        "./client-libraries/solacePythonAPI.js": "hlZ0",
        "./client-libraries/solaceQpid1API": "w4SK",
        "./client-libraries/solaceQpid1API.js": "w4SK",
        "./client-libraries/solaceQpid2API": "NC2+",
        "./client-libraries/solaceQpid2API.js": "NC2+",
        "./client-libraries/springBootJavaAPI": "izM5",
        "./client-libraries/springBootJavaAPI.js": "izM5",
        "./client-libraries/springBootJmsAPI": "EtvR",
        "./client-libraries/springBootJmsAPI.js": "EtvR",
        "./client-libraries/springCloudStreamsAPI": "XESa",
        "./client-libraries/springCloudStreamsAPI.js": "XESa",
        "./client-library-manager": "KS6O",
        "./client-library-manager.js": "KS6O",
        "./connectivity-details-v1": "kAML",
        "./connectivity-details-v1.js": "kAML",
        "./description": "bIDh",
        "./description.js": "bIDh",
        "./details-area": "kD0O",
        "./details-area.js": "kD0O",
        "./images/I_security_shield.svg": "uBDg",
        "./images/amqp.png": "h3WE",
        "./images/arrow_down.svg": "lXxq",
        "./images/c-logo.png": "j4xZ",
        "./images/confirmed-delivery.svg": "a8a9",
        "./images/connection_icon.svg": "kzCs",
        "./images/dotnet-logo.png": "+5Ji",
        "./images/github-logo.png": "RM2P",
        "./images/java-logo.png": "32DM",
        "./images/javascript-logo.png": "UEIO",
        "./images/jms-jndi.svg": "63Ir",
        "./images/mqtt.png": "YZfA",
        "./images/nodejs-logo.png": "3bGT",
        "./images/paho.png": "LOjx",
        "./images/persistence-queues.svg": "UybX",
        "./images/popout.svg": "QDEw",
        "./images/publish-subscribe.svg": "fZ1P",
        "./images/python-logo.png": "UNLT",
        "./images/qpid.png": "9xF7",
        "./images/request-reply.svg": "v99S",
        "./images/rest.png": "ekQu",
        "./images/solace-apis-protocols-support.png": "I5ZI",
        "./images/solace-logo.png": "eI01",
        "./images/solace-pubsub-plus-cloud-logo-reversed.png": "MSu3",
        "./images/solace-pubsub-plus-cloud-logo.svg": "gKIA",
        "./images/solace-pubsub-plus-cloud-square.svg": "yi2q",
        "./images/spring-boot-logo.png": "22kK",
        "./images/spring-boot.svg": "VFML",
        "./images/spring-cloud-logo.png": "148J",
        "./images/spring-cloud.svg": "Gz8x",
        "./images/spring-logo.png": "FJZC",
        "./images/topic-mapping.svg": "Bhu5",
        "./language-library": "hlNj",
        "./language-library.js": "hlNj",
        "./languages": "RhB0",
        "./languages.js": "RhB0",
        "./libraries": "nme1",
        "./libraries.js": "nme1",
        "./protocol-library": "xEMu",
        "./protocol-library.js": "xEMu",
        "./protocols": "Sl7n",
        "./protocols.js": "Sl7n",
      };
      function n(e) {
        var t = o(e);
        return s(t);
      }
      function o(e) {
        if (!s.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (n.keys = function () {
        return Object.keys(a);
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = "OCAI");
    },
    OnNP: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoCAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho C Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: "C", logo: "./images/c-logo.png" },
          links: {
            api:
              "http://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/index.html",
            download: [
              {
                name: "Eclipse Paho Portal",
                url:
                  "https://projects.eclipse.org/projects/technology.paho/downloads",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho C Client",
            getAPI: [
              {
                title: "Download from Eclipse",
                description:
                  'Get Eclipse Paho C Client from <a href="https://projects.eclipse.org/projects/technology.paho/downloads" target="_bank">here</a>',
              },
            ],
          },
        });
    },
    Q2gl: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoDotNetAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho .NET Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: ".NET", logo: "./images/dotnet-logo.png" },
          links: {
            api: "https://m2mqtt.wordpress.com/m2mqtt_doc/",
            download: [
              {
                name: "Eclipse Paho Portal",
                url:
                  "https://www.eclipse.org/downloads/download.php?file=/paho/1.2-milestones/m2mqtt/M2Mqtt_4.2.0.0.zip",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho .NET Client",
            getAPI: [
              {
                title: "Download from Eclipse",
                description:
                  'Get Eclipse Paho .NET Client from <a href="https://www.eclipse.org/downloads/download.php?file=/paho/1.2-milestones/m2mqtt/M2Mqtt_4.2.0.0.zip" target="_bank">here</a>',
              },
            ],
          },
        });
    },
    QDEw: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uL25ld193aW5kb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbi9uZXdfd2luZG93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTIuMzg1OTY2NSw0LjAyMzQ3MzkgTDEyLjM4NTk2NjUsMC42ODkxNjQ4MjggTDE2LjYxODg4ODIsNC45MjIwODY1MiBMMTIuMzg1OTY2NSw5LjE3NDQ0NjIgTDEyLjM4NTk2NjUsNi4wMjM0NzM5IEw1LjUxNzUwMDc5LDYuMDIzNDczOSBMNS41MTc1MDA3OSw0LjAyMzQ3MzkgTDEyLjM4NTk2NjUsNC4wMjM0NzM5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0NDQ0NDQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDY4MTk0LCA0LjkzMTgwNikgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTEuMDY4MTk0LCAtNC45MzE4MDYpICI+PC9wYXRoPgogICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTgtQ29weSIgZmlsbD0iI0NDQ0NDQyIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjE0IDE0IDE0IDkgMTUgOSAxNSAxNSAxIDE1IDEgMSA3IDEgNyAyIDIgMiAyIDE0Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg==";
    },
    RM2P: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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";
    },
    RhB0: function (e, t, s) {
      "use strict";
      s.r(t);
      t.default = [
        {
          displayName: "Connect with Java",
          description:
            "Solace Java, Solace JMS over SMF, Paho over MQTT, QPID JMS 1.1 over AMQP, QPID JMS 2.0 over AMQP",
          id: "java",
          libraries: [
            {
              id: "solaceJavaAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace Java API",
            },
            {
              id: "solaceJavaRTOAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace JavaRTO",
            },
            {
              id: "solaceJMSAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace JMS API",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "pahoJavaAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho Java Client",
            },
            {
              id: "solaceQpid1API",
              logo: "./images/qpid.png",
              protocol: "AMQP",
              displayName: "QPID JMS 1.1",
            },
            {
              id: "solaceQpid2API",
              logo: "./images/qpid.png",
              protocol: "AMQP",
              displayName: "QPID JMS 2.0",
            },
          ],
          logo: "./images/java-logo.png",
          logoHeight: "60",
        },
        {
          description: "Solace C API over SMF, Paho over MQTT",
          displayName: "Connect with C and C++",
          id: "c-and-c-plus-plus",
          libraries: [
            {
              id: "solaceCAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace C",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "pahoCAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho C Client",
            },
            {
              id: "pahoCplusplusAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho C++ Client",
            },
          ],
          logo: "./images/c-logo.png",
          logoHeight: "60",
        },
        {
          description: "Solace Python API over SMF, Paho over MQTT",
          displayName: "Connect with Python",
          id: "python",
          libraries: [
            {
              id: "solacePythonAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace Python API",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "pahoPythonAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho Python Client",
            },
          ],
          logo: "./images/python-logo.png",
          logoHeight: "50",
        },
        {
          displayName: "Connect with JavaScript",
          description: "Solace Javascript API over SMF, Paho over MQTT",
          id: "javascript",
          libraries: [
            {
              id: "solaceJavascriptAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace JavaScript API",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "pahoJavaScriptAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho JavaScript Client",
            },
          ],
          logo: "./images/javascript-logo.png",
          logoHeight: "60",
        },
        {
          description:
            "Solace Node.js API over SMF, AMPQP10 Open Source over AMQP",
          displayName: "Connect with Node.js",
          id: "nodejs",
          libraries: [
            {
              id: "solaceNodeJSAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace Node.js API",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "solaceAmqp10API",
              logo: "./images/amqp.png",
              protocol: "AMQP",
              displayName: "AMQP10 Open Source API",
            },
          ],
          logo: "./images/nodejs-logo.png",
          logoHeight: "60",
        },
        {
          description: "Solace .NET API over SMF, Paho over MQTT",
          displayName: "Connect with .NET",
          id: "dotnet",
          libraries: [
            {
              id: "solaceDotNetAPI",
              logo: "./images/solace-logo.png",
              protocol: "SMF",
              displayName: "Solace .NET",
            },
            {
              id: "restAPI",
              logo: "./images/solace-logo.png",
              protocol: "REST",
              displayName: "Solace REST Messaging API",
            },
            {
              id: "pahoDotNetAPI",
              logo: "./images/paho.png",
              protocol: "MQTT",
              displayName: "Eclipse Paho .NET Client",
            },
          ],
          logo: "./images/dotnet-logo.png",
          logoHeight: "60",
        },
        {
          displayName: "Connect with Spring",
          description: "Spring Cloud Stream, Spring Boot",
          id: "spring",
          libraries: [
            {
              id: "springCloudStreamsAPI",
              logo: "./images/spring-cloud-logo.png",
              protocol: "SMF",
              displayName: "Spring Cloud Stream",
            },
            {
              id: "springBootJavaAPI",
              logo: "./images/spring-boot-logo.png",
              protocol: "SMF",
              displayName: "Spring Boot Java API",
            },
            {
              id: "springBootJmsAPI",
              logo: "./images/spring-boot-logo.png",
              protocol: "SMF",
              displayName: "Spring Boot JMS API",
            },
          ],
          logo: "./images/spring-logo.png",
          logoHeight: "40",
        },
      ];
    },
    SVCz: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAMAAAASyFM4AAAAM1BMVEVMaXEAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJXg/Qg3AAAAEHRSTlMA0KCwgBDgwEDwIJBgMHBQtncxwQAAAAlwSFlzAAAJOgAACToB8GSSSgAAA2BJREFUWIXtV9mO4zgM1E1RZ/3/1y5IyYkz3b22F/s0MwUEiWWpRBUPMeYv/mDUej57pf+kBCO/HxquSeJrfo/7u1kkxkZiUOtrqrNFf5TK44PEgau+6uBgYvPH8kREdDywH6UncFQuAOGDpHsAVV56wMoC64bDa6eKOqpdVGrI4GPbM0pl8DQmJwC+Cd9865AgZ4mTxLhmIu0tv6B4wHkgWdg1AdhzCtLSI8FbgBJS/0neyQAPExlOnwktKwa8DnhYY2YC3LdmbCctIzowTWwu4YXkWzETXIzpxx4XLAPJL39QCCG45R7PonS54lAWL6EFsGsvZS3KVKYsv684VLsgPoD4D7wGVeEooyGILJfoYkUjNPWszi5qUYMN8u5LdHyHICHZdEPS8DBZSTya7BDucIiHs6RfkXV5kVQ9TTR5B8wdU5xk05Bfcw0EOY1f1txDZEQzZU1YxuuXQzPlUPoGZH4ES6aSJ3KEEU1CMQP1NolaYWFxghc1/LlOXQEwQfLIgiR1LKw8zXdG3gFB0sZt3xpCNlKD6EaNPPsHtiKcSYKkzs0gWWigmM+WdFORo73tYKPRtQjiQXIc6YGuSqBWfJLQQ5IUKlII8gkhQT4upEckBj/gCYdY4n61pD605H/SpH6SFCWoj0gGuGcE088RK3Eyrte+UDVvfolYqdT3k1hWyY3hy5ukSO7YR7kDXndyQmo5T6v5yM3wAx9rPWE4/lpP5m2SVQmtCKw3IIkWUjPbjYtrQ2vskPnnGis1Wt/cg1Z7reth+TSvaq93wM2KEhl93TJHdGXRqMidVlavdY0ANLM6kh3nK+bkZi3pnipdfZHUD3ZLoNdNQwq7M7g8jEVofHQFOy70Yi+s3dydG92L6UW7xDGPNoIwgt5CWbS1V7KsKQFpRRoTvRpZdkl9Q1csDtxVlmzMrKeejUMWL8l4tP/SO+prcIjx6Kg8pjaPZZcEU8E9aqfzY02YDOsBToe97/g8FPZgKQgBoG+NKatLzqSadnX2qz1bmdeH3f2W5Lj74uvsgCSj3epm0nzSO7ACKKi8LA21jvBe8EZQMVaLaIuZ1X53Zdg6taHWk8SRdp99YNCI+1A7w2ImcfBaTZRA+RDopUa/ziM6V6D7Hd8n/Od/wCc1+i9+Kxhj/gGvejXQmi2o+wAAAABJRU5ErkJggg==";
    },
    Sl7n: function (e, t, s) {
      "use strict";
      s.r(t);
      t.default = [
        {
          name: "SMF",
          id: "smf",
          displayName: "Solace Messaging",
          description:
            "Start messaging with client libraries that use the Solace Message Format (SMF) protocol over TCP.",
          logo: "./images/solace-logo.png",
          showVpn: !0,
          logoHeight: "40",
          libraries: [
            { id: "solaceJavaAPI", logo: "./images/solace-logo.png" },
            { id: "solaceJavaRTOAPI", logo: "./images/solace-logo.png" },
            { id: "solaceJMSAPI", logo: "./images/solace-logo.png" },
            { id: "solaceCAPI", logo: "./images/solace-logo.png" },
            { id: "solacePythonAPI", logo: "./images/solace-logo.png" },
            { id: "solaceDotNetAPI", logo: "./images/solace-logo.png" },
            {
              id: "springBootJavaAPI",
              logo: "./images/spring-boot-logo.png",
              protocol: "SMF",
              displayName: "Spring Boot Java API",
            },
            {
              id: "springBootJmsAPI",
              logo: "./images/spring-boot-logo.png",
              protocol: "SMF",
              displayName: "Spring Boot JMS API",
            },
            {
              id: "springCloudStreamsAPI",
              logo: "./images/spring-cloud-logo.png",
              protocol: "SMF",
              displayName: "Spring Cloud Stream",
            },
          ],
        },
        {
          name: "Web Messaging",
          id: "web-messaging",
          displayName: "Solace Web Messaging",
          description:
            "Start messaging with client libraries that use the Solace Message Format (SMF) protocol over Web Sockets or HTTP.",
          logo: "./images/solace-logo.png",
          showVpn: !0,
          logoHeight: "40",
          libraries: [
            { id: "solaceJavascriptAPI", logo: "./images/solace-logo.png" },
            { id: "solaceNodeJSAPI", logo: "./images/solace-logo.png" },
          ],
        },
        {
          name: "AMQP",
          id: "amqp",
          displayName: "AMQP",
          description: "Start messaging with open APIs that use the AMQP.",
          logo: "./images/amqp.png",
          showVpn: !1,
          logoHeight: "35",
          libraries: [
            { id: "solaceQpid1API", logo: "./images/qpid.png" },
            { id: "solaceQpid2API", logo: "./images/qpid.png" },
            { id: "solaceAmqp10API", logo: "./images/amqp.png" },
          ],
        },
        {
          name: "MQTT",
          id: "mqtt",
          displayName: "MQTT",
          description:
            "Start messaging with open APIs that use the MQTT protocol.",
          logo: "./images/mqtt.png",
          showVpn: !1,
          logoHeight: "33",
          libraries: [
            { id: "pahoJavaAPI", logo: "./images/java-logo.png" },
            { id: "pahoJavaScriptAPI", logo: "./images/javascript-logo.png" },
            { id: "pahoCAPI", logo: "./images/paho.png" },
            { id: "pahoCplusplusAPI", logo: "./images/c-logo.png" },
            { id: "pahoDotNetAPI", logo: "./images/paho.png" },
            { id: "pahoPythonAPI", logo: "./images/paho.png" },
          ],
        },
        {
          name: "REST",
          id: "rest",
          displayName: "REST",
          description: "Start messaging with the Solace Messaging REST API.",
          logo: "./images/rest.png",
          showVpn: !1,
          logoHeight: "35",
          libraries: [{ id: "restAPI", logo: "./images/rest.png" }],
        },
      ];
    },
    TJpk: function (e, t, s) {
      (t.__esModule = !0), (t.Helmet = void 0);
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t];
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var s = 0; s < t.length; s++) {
              var a = t[s];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, s, a) {
            return s && e(t.prototype, s), a && e(t, a), t;
          };
        })(),
        o = p(s("q1tI")),
        r = p(s("17x9")),
        i = p(s("8+s/")),
        l = p(s("bmMU")),
        c = s("v1p5"),
        g = s("hFT/");
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        var s = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a]));
        return s;
      }
      function M(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function I(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var A,
        d,
        b,
        C = (0, i.default)(
          c.reducePropsToState,
          c.handleClientStateChange,
          c.mapStateOnServer
        )(function () {
          return null;
        }),
        m =
          ((A = C),
          (b = d = (function (e) {
            function t() {
              return M(this, t), I(this, e.apply(this, arguments));
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.prototype.shouldComponentUpdate = function (e) {
                return !(0, l.default)(this.props, e);
              }),
              (t.prototype.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                  case g.TAG_NAMES.SCRIPT:
                  case g.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: t };
                  case g.TAG_NAMES.STYLE:
                    return { cssText: t };
                }
                throw new Error(
                  "<" +
                    e.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (t.prototype.flattenArrayTypeChildren = function (e) {
                var t,
                  s = e.child,
                  n = e.arrayTypeChildren,
                  o = e.newChildProps,
                  r = e.nestedChildren;
                return a(
                  {},
                  n,
                  (((t = {})[s.type] = [].concat(n[s.type] || [], [
                    a({}, o, this.mapNestedChildrenToProps(s, r)),
                  ])),
                  t)
                );
              }),
              (t.prototype.mapObjectTypeChildren = function (e) {
                var t,
                  s,
                  n = e.child,
                  o = e.newProps,
                  r = e.newChildProps,
                  i = e.nestedChildren;
                switch (n.type) {
                  case g.TAG_NAMES.TITLE:
                    return a(
                      {},
                      o,
                      (((t = {})[n.type] = i),
                      (t.titleAttributes = a({}, r)),
                      t)
                    );
                  case g.TAG_NAMES.BODY:
                    return a({}, o, { bodyAttributes: a({}, r) });
                  case g.TAG_NAMES.HTML:
                    return a({}, o, { htmlAttributes: a({}, r) });
                }
                return a({}, o, (((s = {})[n.type] = a({}, r)), s));
              }),
              (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                var s = a({}, t);
                return (
                  Object.keys(e).forEach(function (t) {
                    var n;
                    s = a({}, s, (((n = {})[t] = e[t]), n));
                  }),
                  s
                );
              }),
              (t.prototype.warnOnInvalidChildren = function (e, t) {
                return !0;
              }),
              (t.prototype.mapChildrenToProps = function (e, t) {
                var s = this,
                  a = {};
                return (
                  o.default.Children.forEach(e, function (e) {
                    if (e && e.props) {
                      var n = e.props,
                        o = n.children,
                        r = u(n, ["children"]),
                        i = (0, c.convertReactPropstoHtmlAttributes)(r);
                      switch ((s.warnOnInvalidChildren(e, o), e.type)) {
                        case g.TAG_NAMES.LINK:
                        case g.TAG_NAMES.META:
                        case g.TAG_NAMES.NOSCRIPT:
                        case g.TAG_NAMES.SCRIPT:
                        case g.TAG_NAMES.STYLE:
                          a = s.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: a,
                            newChildProps: i,
                            nestedChildren: o,
                          });
                          break;
                        default:
                          t = s.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: i,
                            nestedChildren: o,
                          });
                      }
                    }
                  }),
                  (t = this.mapArrayTypeChildrenToProps(a, t))
                );
              }),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.children,
                  s = u(e, ["children"]),
                  n = a({}, s);
                return (
                  t && (n = this.mapChildrenToProps(t, n)),
                  o.default.createElement(A, n)
                );
              }),
              n(t, null, [
                {
                  key: "canUseDOM",
                  set: function (e) {
                    A.canUseDOM = e;
                  },
                },
              ]),
              t
            );
          })(o.default.Component)),
          (d.propTypes = {
            base: r.default.object,
            bodyAttributes: r.default.object,
            children: r.default.oneOfType([
              r.default.arrayOf(r.default.node),
              r.default.node,
            ]),
            defaultTitle: r.default.string,
            defer: r.default.bool,
            encodeSpecialCharacters: r.default.bool,
            htmlAttributes: r.default.object,
            link: r.default.arrayOf(r.default.object),
            meta: r.default.arrayOf(r.default.object),
            noscript: r.default.arrayOf(r.default.object),
            onChangeClientState: r.default.func,
            script: r.default.arrayOf(r.default.object),
            style: r.default.arrayOf(r.default.object),
            title: r.default.string,
            titleAttributes: r.default.object,
            titleTemplate: r.default.string,
          }),
          (d.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (d.peek = A.peek),
          (d.rewind = function () {
            var e = A.rewind();
            return (
              e ||
                (e = (0, c.mapStateOnServer)({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            );
          }),
          b);
      (m.renderStatic = m.rewind), (t.Helmet = m), (t.default = m);
    },
    TZvP: function (e, t, s) {
      e.exports =
        s.p +
        "static/messaging-diagram-messaging-4d7fc700fd3bfea26ec756d89f8bf633.svg";
    },
    TzXr: function (e, t, s) {},
    UEIO: function (e, t, s) {
      e.exports =
        s.p + "static/javascript-logo-c7d02f93a6bd1f3b3e7e5255ae818f21.png";
    },
    UNLT: function (e, t, s) {
      e.exports =
        s.p + "static/python-logo-3cf229eedc092549277e8859aad2fca5.png";
    },
    UybX: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIyNSIgeT0iMzEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMyIgcng9IjgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNMzAuNSwzMSBMMzcuNSwzMSBMMzcuNSwzMSBDNDAuNTM3NTY2MSwzMSA0MywzMy40NjI0MzM5IDQzLDM2LjUgTDQzLDM2LjUgTDQzLDM2LjUgQzQzLDM5LjUzNzU2NjEgNDAuNTM3NTY2MSw0MiAzNy41LDQyIEwzMC41LDQyIEwzMC41LDQyIEMyNy40NjI0MzM5LDQyIDI1LDM5LjUzNzU2NjEgMjUsMzYuNSBMMjUsMzYuNSBMMjUsMzYuNSBDMjUsMzMuNDYyNDMzOSAyNy40NjI0MzM5LDMxIDMwLjUsMzEgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRldl9Qb3J0YWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUhELUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3MC4wMDAwMDAsIC05OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcwLjAwMDAwMCwgOTkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTItQ29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS43NSwxMi43NSBMMjguNSwxMi43NSIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjY0MTQ0MTIzMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS43NSwxMi43NSBMNDYuNSwxMi43NSIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjUsMTggTDM0LjUsMjcuNjgzNjQzNCIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTciIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIyOS41IiB5PSI3Ljc1IiB3aWR0aD0iOS4yNSIgaGVpZ2h0PSI5LjI1IiByeD0iNC42MjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNTAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTYuNzUiIGhlaWdodD0iMjQuMjUiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIzLjc1IiB5PSIzLjc1IiB3aWR0aD0iMTEuMjUiIGhlaWdodD0iNS4yNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjMuNzUiIHk9IjEwLjUiIHdpZHRoPSIxMS4yNSIgaGVpZ2h0PSI1LjI1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMy43NSIgeT0iMTcuMjUiIHdpZHRoPSIxMS4yNSIgaGVpZ2h0PSI1LjI1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iI0RDRTNFRSIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIyNiIgeT0iMzIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMSIgcng9IjgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNEQ0UzRUUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMwLjUsMzIgQzI4LjAxNDcxODYsMzIgMjYsMzQuMDE0NzE4NiAyNiwzNi41IEMyNiwzOC45ODUyODE0IDI4LjAxNDcxODYsNDEgMzAuNSw0MSBMMzcuNSw0MSBDMzkuOTg1MjgxNCw0MSA0MiwzOC45ODUyODE0IDQyLDM2LjUgQzQyLDM0LjAxNDcxODYgMzkuOTg1MjgxNCwzMiAzNy41LDMyIEwzMC41LDMyIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQtQ29weS0zIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iMSIgeT0iMSIgd2lkdGg9IjE2Ljc1IiBoZWlnaHQ9IjI0LjI1IiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktMiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMy43NSIgeT0iMy43NSIgd2lkdGg9IjExLjI1IiBoZWlnaHQ9IjUuMjUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS00IiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIzLjc1IiB5PSIxMC41IiB3aWR0aD0iMTEuMjUiIGhlaWdodD0iNS4yNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTYiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjMuNzUiIHk9IjE3LjI1IiB3aWR0aD0iMTEuMjUiIGhlaWdodD0iNS4yNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";
    },
    VFML: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNwcmluZyBCb290PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04My43OSw0Ni4yNyw3MC4xMywyMi42MmE4LjI4LDguMjgsMCwwLDAtNi40Ny0zLjc1SDM2LjM0YTguMyw4LjMsMCwwLDAtNi40NywzLjc0TDE2LjIxLDQ2LjI2YTguMjgsOC4yOCwwLDAsMCwwLDcuNDhMMjkuODcsNzcuMzlhOC4yNyw4LjI3LDAsMCwwLDYuNDcsMy43NEg2My42NmE4LjMxLDguMzEsMCwwLDAsNi40Ny0zLjc0TDgzLjc5LDUzLjc0QTguMjYsOC4yNiwwLDAsMCw4My43OSw0Ni4yN1pNNDcuMDUsMzJhMi44MiwyLjgyLDAsMSwxLDUuNjMtLjJ2MTdhMi44MiwyLjgyLDAsMSwxLTUuNjMuMTkuNjEuNjEsMCwwLDEsMC0uMTlabTIuODEsMzUuOTFBMTkuMSwxOS4xLDAsMCwxLDM4LjQ3LDMzLjQ2YTIuNTEsMi41MSwwLDEsMSwzLDQsMTQuMDksMTQuMDksMCwxLDAsMTYuNzcsMCwyLjUxLDIuNTEsMCwwLDEsMy00LjA2aDBBMTkuMSwxOS4xLDAsMCwxLDQ5Ljg2LDY3Ljg3WiIvPjwvc3ZnPg==";
    },
    VbAj: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solace-javascript-api",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace JavaScript API",
          protocol: {
            id: "web-messaging",
            name: "Web Messaging",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: {
            name: "JavaScript",
            logo: "./images/javascript-logo.png",
          },
          links: {
            tutorial: "https://tutorials.solace.dev/javascript/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/js/index.html",
            download: [
              {
                name: "Solace Developer Portal",
                url: "https://products.solace.com/download/JS_API",
              },
            ],
          },
          step1: {
            name: "JavaScript API",
            getAPI: [
              { title: "Using NPM", code: ["npm install solclientjs"] },
              {
                title: "Using the Solace Developer Portal",
                description:
                  'The Solace Web Messaging API for JavaScript can be downloaded <a href="https://solace.com/downloads/?fwp_downloads=solace-apis/" target="_blank">here</a>.',
              },
              {
                title:
                  "Using WebPack and exports-loader, in your webpack.config.js",
                code: [
                  "const path = require('path'); <br>                const solclientjs = path.resolve(__dirname, 'path/to/solclientjs-10.0.0/lib/solclient.js'); <br>                module.exports = { <br>                  &nbsp&nbsp resolve: { <br>                    &nbsp&nbsp&nbsp&nbsp alias: { <br>                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp solclientjs$: solclientjs <br>                    &nbsp&nbsp&nbsp&nbsp } <br>                  &nbsp&nbsp }, <br>                  &nbsp&nbsp module: { <br>                    &nbsp&nbsp&nbsp&nbsp rules: [ <br>                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp { <br>                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp test: require.resolve(solclientjs), <br>                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp use: 'exports-loader?window.solace' <br>                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>                    &nbsp&nbsp&nbsp&nbsp ] <br>                  &nbsp&nbsp } <br>                }",
                ],
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session.",
              "The Solace session is the basis for all client communication with the Solace PubSub+ message broker.",
            ],
            code: [
              {
                protocol: "Web Messaging",
                sample:
                  '                         var session = solace.SolclientFactory.createSession({ <br>                        &nbsp;&nbsp; url: "<span class="value">${url}</span>", <br>                        &nbsp;&nbsp; vpnName: "<span class="value">${vpn}</span>", <br>                        &nbsp;&nbsp; userName: "<span class="value">${username}</span>", <br>                        &nbsp;&nbsp; password: "<span class="value">${password}</span>", <br>                        }); <br>                        try { <br>                            &nbsp;&nbsp; session.connect(); <br>                        } catch (error) { <br>                            &nbsp;&nbsp; console.log(error); <br>                        }',
              },
              {
                protocol: "Secured Web Messaging",
                sample:
                  '                 var session = solace.SolclientFactory.createSession({ <br>                &nbsp;&nbsp; url: "<span class="value">${url}</span>", <br>                &nbsp;&nbsp; vpnName: "<span class="value">${vpn}</span>", <br>                &nbsp;&nbsp; userName: "<span class="value">${username}</span>", <br>                &nbsp;&nbsp; password: "<span class="value">${password}</span>", <br>                }); <br>                try { <br>                    &nbsp;&nbsp; session.connect(); <br>                } catch (error) { <br>                    &nbsp;&nbsp; console.log(error); <br>                }',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://tutorials.solace.dev/javascript/publish-subscribe/",
              },
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/javascript/persistence-with-queues/",
              },
              {
                id: "request-reply",
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url: "https://tutorials.solace.dev/javascript/request-reply/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url:
                  "https://tutorials.solace.dev/javascript/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/javascript/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    "WF7/": function (e, t, s) {},
    XESa: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "springCloudStreams",
          componentName: "connectivity-detail-template-v1",
          displayName: "Spring Cloud Stream",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/spring-cloud-logo.png",
            usesVPN: !0,
          },
          language: { name: "Spring", logo: "./images/spring-cloud-logo.png" },
          links: {
            tutorial:
              "https://tutorials.solace.dev/spring/spring-cloud-stream/",
            api:
              "https://github.com/SolaceProducts/solace-spring-cloud/tree/master/solace-spring-cloud-starters/solace-spring-cloud-stream-starter",
            download: [
              {
                name: "Solace Starter",
                url:
                  "https://mvnrepository.com/artifact/com.solace.spring.cloud/spring-cloud-starter-stream-solace",
              },
            ],
          },
          step1: {
            name: "Generate your project skeleton",
            getAPI: [
              {
                title: "OPTION 1: I already have a Maven Spring Boot Project",
                description: "Add the dependency below to your Maven POM file.",
                code: [
                  "&lt;dependency&gt; <br/>   &nbsp;&nbsp;&lt;groupId&gt;com.solace.spring.cloud&lt;/groupId&gt; <br/>   &nbsp;&nbsp;&lt;artifactId&gt;spring-cloud-starter-stream-solace&lt;/artifactId&gt; <br/>   &nbsp;&nbsp;&lt;version&gt;3.1.0&lt;/version&gt; <br/> &lt;/dependency&gt; ",
                ],
              },
              {
                title: "OPTION 2: I already have a Gradle Spring Boot Project",
                description:
                  "Add the dependency below to your build.gradle file.",
                code: [
                  "compile group: 'com.solace.spring.cloud', name: 'spring-cloud-starter-stream-solace', version: '3.1.0' ",
                ],
              },
              {
                title:
                  "OPTION 3: I'm using the Event Portal - Take advantage of AsyncAPI Code Generation!",
                description:
                  'Export an AsyncAPI document from the Event Portal and use the <a href="https://github.com/asyncapi/java-spring-cloud-stream-template" target="_blank">Spring Cloud Stream Template</a> for the AsyncAPI Generator to generate your Cloud Stream project. <br/><br/>More info in <a href="https://solace.com/blog/asyncapi-codegen-microservices-using-spring-cloud-stream" target="_blank">this blog</a> or <a href="https://www.youtube.com/watch?v=QEDL6AqsaJc" target="_blank">this video</a>.',
              },
              {
                title:
                  "OPTION 4: Starting from Scratch - Use Spring Initializr to bootstrap my project!",
                description:
                  'It is recommended to bootstrap your Spring Boot project using <a href="https://start.spring.io/#!dependencies=solace,cloud-stream" target="_blank">Spring Initializr</a>.            <br/> <br/> Spring Initializr will generate your Spring Boot project skeleton for you based on a few simple choices,           such as your preferred language, <br/> Spring Boot version, and the dependencies you need to build your microservice.           Make sure to choose the "Cloud Stream" dependency! <br/><br/>Once you bootstrap your Spring Cloud Stream project add the Spring Cloud Starter Stream Solace dependency as shown above.',
              },
            ],
          },
          step2: {
            introduction: [
              'Spring Cloud Stream abstracts the event broker configuration from the java classes.         Instead the binders and bindings are configured via external configuration. This is commonly done via an <strong>application.yaml</strong> or <strong>application.properties</strong> file on the classpath.        Below is an example of a configured <strong>application.yaml</strong> file.         Other options are available <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html" target="_blank">here</a>.',
            ],
            code: [{ protocol: "Cloud Stream", sample: "" }],
            conclusion: [""],
          },
          step3: {
            tutorials: [
              {
                id: "tutorial",
                name: "Solace Cloud <br/>Stream Tutorial",
                logo: "./images/spring-cloud.svg",
                url: "https://tutorials.solace.dev/spring/spring-cloud-stream/",
              },
              {
                id: "sample-code-1",
                name: "Source <br/>Example",
                logo: "./images/github-logo.png",
                url:
                  "https://github.com/SolaceSamples/solace-samples-spring/blob/master/cloud-stream-source/src/main/java/com/solace/samples/spring/scs/FahrenheitTempSource.java",
              },
              {
                id: "sample-code-2",
                name: "Sink <br/>Example",
                logo: "./images/github-logo.png",
                url:
                  "https://github.com/SolaceSamples/solace-samples-spring/blob/master/cloud-stream-sink/src/main/java/com/solace/samples/spring/scs/TemperatureSink.java",
              },
              {
                id: "sample-code-3",
                name: "Processor Example",
                logo: "./images/github-logo.png",
                url:
                  "https://github.com/SolaceSamples/solace-samples-spring/blob/master/cloud-stream-processor/src/main/java/com/solace/samples/spring/scs/ConvertFtoCProcessor.java",
              },
              {
                id: "sample-code-4",
                name: "Solace Spring Cloud <br/>Github Repo",
                logo: "./images/github-logo.png",
                url: "https://github.com/SolaceProducts/solace-spring-cloud",
              },
              {
                id: "sample-code-5",
                name: "SCSt Reference <br/>Guide",
                logo: "./images/spring-cloud.svg",
                url:
                  "https://cloud.spring.io/spring-cloud-static/spring-cloud-stream/current/reference/html/spring-cloud-stream.html#spring-cloud-stream-reference",
              },
            ],
          },
        });
    },
    YQce: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solace-java-api",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace Java API",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/jcsmp/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/index.html",
            download: [
              {
                name: "Maven Repository",
                group: "none",
                url:
                  "https://mvnrepository.com/artifact/com.solacesystems/sol-jcsmp",
              },
            ],
          },
          step1: {
            name: "Java API",
            getAPI: [
              {
                title: "Using Gradle",
                code: ['compile("com.solacesystems:sol-jcsmp:10.2.0")'],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;dependency&gt; <br>                &nbsp&nbsp &lt;groupId&gt;com.solacesystems&lt/groupId&gt <br>                &nbsp&nbsp &lt;artifactId&gt;sol-jcsmp&lt;/artifactId&gt; <br>                &nbsp&nbsp &lt;version&gt;[10,)&lt;/version&gt; <br>                &lt;/dependency&gt",
                ],
              },
              {
                title: "Using Solace Developer Portal",
                description:
                  'The Java API library can be downloaded <a href="https://mvnrepository.com/artifact/com.solacesystems/sol-jcsmp" target="_blank">here</a>. The Java API is distributed as a zip file containing the required jars. API documentation, and examples.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session. The Solace session is the basis for all client communication with the Solace messaging router.",
              "In the Solace messaging API for Java(JCSMP), Solace sessions are created from the JCSMP factory using a set of properties.",
            ],
            code: [
              {
                protocol: "SMF",
                sample:
                  'final JCSMPProperties properties = new JCSMPProperties(); <br>                       properties.setProperty(JCSMPProperties.HOST, "<span class="value">${url}</span>"); <br>                       properties.setProperty(JCSMPProperties.USERNAME, "<span class="value">${username}</span>"); <br>                       properties.setProperty(JCSMPProperties.PASSWORD, "<span class="value">${password}</span>"); <br>                       properties.setProperty(JCSMPProperties.VPN_NAME, "<span class="value">${vpn}</span>"); <br>                       final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                       <br>                       session.connect();<br>                       ',
              },
              {
                protocol: "Secured SMF",
                sample:
                  'final JCSMPProperties properties = new JCSMPProperties(); <br>                       properties.setProperty(JCSMPProperties.HOST, "<span class="value">${url}</span>"); <br>                       properties.setProperty(JCSMPProperties.USERNAME, "<span class="value">${username}</span>"); <br>                       properties.setProperty(JCSMPProperties.PASSWORD, "<span class="value">${password}</span>"); <br>                       properties.setProperty(JCSMPProperties.VPN_NAME, "<span class="value">${vpn}</span>"); <br>                       final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                       <br>                       session.connect();<br>                       ',
              },
              {
                protocol: "Compressed SMF",
                sample:
                  'final JCSMPProperties properties = new JCSMPProperties(); <br>                       properties.setProperty(JCSMPProperties.HOST, "<span class="value">${url}</span>"); <br>                       properties.setProperty(JCSMPProperties.USERNAME, "<span class="value">${username}</span>"); <br>                       properties.setProperty(JCSMPProperties.PASSWORD, "<span class="value">${password}</span>"); <br>                       properties.setProperty(JCSMPProperties.VPN_NAME, "<span class="value">${vpn}</span>"); <br>                       JCSMPChannelProperties channelProperties = (JCSMPChannelProperties) properties.getProperty(JCSMPProperties.CLIENT_CHANNEL_PROPERTIES); <br>\t\t\t\t\t   channelProperties.setCompressionLevel(9); <br>                       final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                       <br>                       session.connect();<br>                       ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/jcsmp/publish-subscribe/",
              },
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/jcsmp/persistence-with-queues/",
              },
              {
                id: "request-reply",
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url: "https://tutorials.solace.dev/jcsmp/request-reply/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url: "https://tutorials.solace.dev/jcsmp/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/jcsmp/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    YSfM: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("uRdJ"),
        n = s("9Hrx"),
        o = s("q1tI"),
        r = s.n(o),
        i = s("HnAx"),
        l = (s("N3Qv"), s("kAML")),
        c = s("bIDh"),
        g = s("1Yj4"),
        p = s("ok1R"),
        u = s("rhny"),
        M = (function (e) {
          function t(t) {
            var s;
            return (
              ((s =
                e.call(this, t) ||
                this).toggleConnectDetailsFn = s.toggleConnectDetails.bind(
                Object(a.a)(s)
              )),
              (s.state = { showAccordion: !0, library: "" }),
              s
            );
          }
          Object(n.a)(t, e);
          var s = t.prototype;
          return (
            (s.toggleConnectDetails = function (e) {
              var t = document.getElementById("apis-and-protocols");
              t && t.scrollIntoView({ behavior: "smooth" });
              var s = { showAccordion: !this.state.showAccordion, library: e };
              this.setState(s);
            }),
            (s.pickContent = function () {
              return this.state.showAccordion
                ? r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(c.default, null),
                    r.a.createElement(i.default, {
                      toggleConnectDetailsFn: this.toggleConnectDetailsFn,
                    })
                  )
                : r.a.createElement(
                    "div",
                    { style: { display: "flex", justifyContent: "center" } },
                    r.a.createElement(l.default, {
                      libraryID: this.state.library,
                      toggleConnectDetailsFn: this.toggleConnectDetailsFn,
                    })
                  );
            }),
            (s.render = function () {
              return r.a.createElement("div", null, this.pickContent());
            }),
            t
          );
        })(r.a.Component);
      t.default = function () {
        return r.a.createElement(
          "section",
          { className: "apisAndProtocols", id: "apis-and-protocols" },
          r.a.createElement(
            g.a,
            { fluid: !0 },
            r.a.createElement(
              p.a,
              null,
              r.a.createElement(u.a, null, r.a.createElement(M, null))
            )
          )
        );
      };
    },
    YZfA: function (e, t, s) {
      e.exports = s.p + "static/mqtt-0c8ed91bd982eb7ee10f6544ab2a1661.png";
    },
    YoGy: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return l;
        });
      var a = s("uRdJ"),
        n = s("9Hrx"),
        o = s("q1tI"),
        r = s.n(o),
        i = s("nme1"),
        l = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).expand = function () {
                0 !== s.state.data.libraries.length &&
                  s.setState(function (e) {
                    return { expanded: !e.expanded };
                  });
              }),
              (s.toggleConnectDetailsFn = t.toggleConnectDetailsFn),
              (s.expand = s.expand.bind(Object(a.a)(s))),
              (s.state = { expanded: !1, selected: t.selection, data: t.data }),
              s
            );
          }
          Object(n.a)(t, e);
          var o = t.prototype;
          return (
            (o.accordianContent = function (e, t, a, n) {
              var o,
                l = { transform: "none" },
                c = {};
              return (
                t
                  ? ((l = { transform: "rotate(180deg)" }),
                    (c = { maxHeight: "600px" }))
                  : (c = { maxHeight: "0px" }),
                "protocol" === a
                  ? (o = r.a.createElement(
                      "div",
                      { className: "collapsible-content" },
                      r.a.createElement(
                        "div",
                        { className: "client-libraries" },
                        r.a.createElement(
                          "div",
                          { className: "title" },
                          "Client Libraries"
                        ),
                        r.a.createElement(
                          "div",
                          { className: "information-box" },
                          r.a.createElement(i.default, {
                            toggleConnectDetailsFn: e,
                            type: a,
                            libraries: n.libraries,
                          })
                        )
                      )
                    ))
                  : "language" === a &&
                    (o = r.a.createElement(
                      "div",
                      { className: "collapsible-content" },
                      r.a.createElement(
                        "div",
                        { className: "client-libraries" },
                        "spring" === n.id
                          ? r.a.createElement(
                              "div",
                              { className: "library-title" },
                              "Projects"
                            )
                          : r.a.createElement(
                              "div",
                              { className: "library-title" },
                              "Library"
                            ),
                        r.a.createElement(
                          "div",
                          { className: "protocol-title" },
                          "Protocol"
                        ),
                        r.a.createElement(
                          "div",
                          { className: "information-box" },
                          r.a.createElement(i.default, {
                            toggleConnectDetailsFn: e,
                            type: a,
                            libraries: n.libraries,
                          })
                        )
                      )
                    )),
                r.a.createElement(
                  "div",
                  { className: "collapsible-accordion" },
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement(
                      "li",
                      null,
                      r.a.createElement(
                        "div",
                        {
                          onClick: this.expand,
                          className: "collapsible-header",
                        },
                        r.a.createElement(
                          "div",
                          { className: "logo-box" },
                          r.a.createElement("img", {
                            src: s("OCAI")("" + n.logo),
                            style: { maxHeight: n.logoHeight + "px" },
                            alt: "",
                          })
                        ),
                        this.state.data.libraries.length > 0
                          ? r.a.createElement("img", {
                              src: s("lXxq"),
                              className: "down-arrow",
                              style: l,
                              alt: "",
                            })
                          : "",
                        r.a.createElement(
                          "div",
                          { className: "description" },
                          r.a.createElement(
                            "div",
                            { className: "title" },
                            n.displayName
                          ),
                          n.description
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "collapsible-body", style: c },
                        o
                      )
                    )
                  )
                )
              );
            }),
            (o.render = function () {
              return r.a.createElement(
                "div",
                null,
                this.accordianContent(
                  this.toggleConnectDetailsFn,
                  this.state.expanded,
                  this.state.selected,
                  this.state.data
                )
              );
            }),
            t
          );
        })(r.a.Component);
    },
    a8a9: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSI1NiIgeT0iNjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMyIgcng9IjgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNNjEuNSw2MyBMNjguNSw2MyBMNjguNSw2MyBDNzEuNTM3NTY2MSw2MyA3NCw2NS40NjI0MzM5IDc0LDY4LjUgTDc0LDY4LjUgTDc0LDY4LjUgQzc0LDcxLjUzNzU2NjEgNzEuNTM3NTY2MSw3NCA2OC41LDc0IEw2MS41LDc0IEw2MS41LDc0IEM1OC40NjI0MzM5LDc0IDU2LDcxLjUzNzU2NjEgNTYsNjguNSBMNTYsNjguNSBMNTYsNjguNSBDNTYsNjUuNDYyNDMzOSA1OC40NjI0MzM5LDYzIDYxLjUsNjMgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRldl9Qb3J0YWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUhELUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyOS4wMDAwMDAsIC0xMzIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyOS4wMDAwMDAsIDEzMjMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyLDEyLjUgTDQwLjI1MTcxMjIsMTIuNSIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBvcGFjaXR5PSIwLjY0MTQ0MTIzMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTIiIGZpbGw9IiM5RkIwQkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzLjA3MTA2OCwgMTMuMDcxMDY4KSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMzMuMDcxMDY4LCAtMTMuMDcxMDY4KSAiIHBvaW50cz0iMjguMDcxMDY3OCA4LjA3MTA2NzgxIDI4LjA3MTA2NzggMTAuMDYzMTcxNCAzNi4wNzg5NjQyIDEwLjA2MzE3MTQgMzYuMDc4OTY0MiAxOC4wNzEwNjc4IDM4LjA3MTA2NzggMTguMDcxMDY3OCAzOC4wNzEwNjc4IDguMDcxMDY3ODEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yIiBmaWxsPSIjOUZCMEJGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45MTgyNTMsIDEzLjA3MTA2OCkgcm90YXRlKC0xMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTI4LjkxODI1MywgLTEzLjA3MTA2OCkgIiBwb2ludHM9IjIzLjkxODI1MyA4LjA3MTA2NzgxIDIzLjkxODI1MyAxMC4wNjMxNzE0IDMxLjkyNjE0OTUgMTAuMDYzMTcxNCAzMS45MjYxNDk1IDE4LjA3MTA2NzggMzMuOTE4MjUzIDE4LjA3MTA2NzggMzMuOTE4MjUzIDguMDcxMDY3ODEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDksMjAgTDQ5LDMxIiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNiIgb3BhY2l0eT0iMC42NDE0NDEyMzEiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHg9IjQ0IiB5PSI4IiB3aWR0aD0iOS4yNSIgaGVpZ2h0PSI5LjI1IiByeD0iNC42MjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNC1Db3B5LTMiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTYuNzUiIGhlaWdodD0iMjQuMjUiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIzLjc1IiB5PSIzLjc1IiB3aWR0aD0iMTEuMjUiIGhlaWdodD0iNS4yNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjMuNzUiIHk9IjEwLjUiIHdpZHRoPSIxMS4yNSIgaGVpZ2h0PSI1LjI1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMy43NSIgeT0iMTcuMjUiIHdpZHRoPSIxMS4yNSIgaGVpZ2h0PSI1LjI1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yIiBmaWxsPSIjOUZCMEJGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OC45MTgyNTMsIDExKSByb3RhdGUoMTM1LjAwMDAwMCkiIHBvaW50cz0iMjMuOTE4MjUzIDguMDcxMDY3ODEgMjMuOTE4MjUzIDEwLjA2MzE3MTQgMzEuOTI2MTQ5NSAxMC4wNjMxNzE0IDMxLjkyNjE0OTUgMTguMDcxMDY3OCAzMy45MTgyNTMgMTguMDcxMDY3OCAzMy45MTgyNTMgOC4wNzEwNjc4MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5Ij4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSIjRENFM0VFIiBzdHJva2Utd2lkdGg9IjIiIHg9IjU3IiB5PSI2NCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIxIiByeD0iOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5Ij4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjRENFM0VFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02MS41LDY0IEM1OS4wMTQ3MTg2LDY0IDU3LDY2LjAxNDcxODYgNTcsNjguNSBDNTcsNzAuOTg1MjgxNCA1OS4wMTQ3MTg2LDczIDYxLjUsNzMgTDY4LjUsNzMgQzcwLjk4NTI4MTQsNzMgNzMsNzAuOTg1MjgxNCA3Myw2OC41IEM3Myw2Ni4wMTQ3MTg2IDcwLjk4NTI4MTQsNjQgNjguNSw2NCBMNjEuNSw2NCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";
    },
    bIDh: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return r;
        });
      var a = s("9Hrx"),
        n = s("q1tI"),
        o = s.n(n),
        r = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              return o.a.createElement(
                "div",
                { className: "row section-description" },
                o.a.createElement(
                  "div",
                  { className: "col-lg-5" },
                  o.a.createElement("h2", null, "APIs and Protocols"),
                  o.a.createElement(
                    "div",
                    { className: "text-area" },
                    o.a.createElement(
                      "p",
                      null,
                      "Solace PubSub+ Event Brokers have",
                      " ",
                      o.a.createElement(
                        "a",
                        {
                          href: "https://docs.solace.com/APIs.htm",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "built-in support"
                      ),
                      " ",
                      "for a variety of proprietary and open standard protocols and APIs, so you can create and connect apps with whatever language, open protocols and APIs you choose, without worrying about translation."
                    ),
                    o.a.createElement(
                      "p",
                      null,
                      "Solace messaging APIs offer uniform client access to all Solace PubSub+ capabilities and qualities of service, and are available for C, .NET, iOS, Java, JavaScript, JMS, Python and Node.js. Solace also supports popular open protocols like AMQP, JMS, MQTT, REST and WebSocket, and open APIs such as Paho and Qpid."
                    )
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "col-lg-7", style: { textAlign: "center" } },
                  o.a.createElement("img", {
                    className: "diagram",
                    src: s("I5ZI"),
                    alt: "Diagram: APIs and Protocols",
                    width: "730px",
                    height: "420px",
                  })
                )
              );
            }),
            t
          );
        })(o.a.Component);
    },
    bmMU: function (e, t, s) {
      "use strict";
      var a = Array.isArray,
        n = Object.keys,
        o = Object.prototype.hasOwnProperty,
        r = "undefined" != typeof Element;
      e.exports = function (e, t) {
        try {
          return (function e(t, s) {
            if (t === s) return !0;
            if (t && s && "object" == typeof t && "object" == typeof s) {
              var i,
                l,
                c,
                g = a(t),
                p = a(s);
              if (g && p) {
                if ((l = t.length) != s.length) return !1;
                for (i = l; 0 != i--; ) if (!e(t[i], s[i])) return !1;
                return !0;
              }
              if (g != p) return !1;
              var u = t instanceof Date,
                M = s instanceof Date;
              if (u != M) return !1;
              if (u && M) return t.getTime() == s.getTime();
              var I = t instanceof RegExp,
                A = s instanceof RegExp;
              if (I != A) return !1;
              if (I && A) return t.toString() == s.toString();
              var d = n(t);
              if ((l = d.length) !== n(s).length) return !1;
              for (i = l; 0 != i--; ) if (!o.call(s, d[i])) return !1;
              if (r && t instanceof Element && s instanceof Element)
                return t === s;
              for (i = l; 0 != i--; )
                if (!(("_owner" === (c = d[i]) && t.$$typeof) || e(t[c], s[c])))
                  return !1;
              return !0;
            }
            return t != t && s != s;
          })(e, t);
        } catch (s) {
          if (
            (s.message && s.message.match(/stack|recursion/i)) ||
            -2146828260 === s.number
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                s.name,
                s.message
              ),
              !1
            );
          throw s;
        }
      };
    },
    cVV5: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceDotNetAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace .NET",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: ".NET", logo: "./images/dotnet-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/dotnet/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/net/html/98265723-512a-4f99-96e9-ea0d592bcb99.htm",
            download: [
              {
                name: ".NET",
                url:
                  "https://www.nuget.org/packages/SolaceSystems.Solclient.Messaging/",
              },
            ],
          },
          step1: {
            name: ".NET API",
            getAPI: [
              {
                title: "Using the Solace Developer Portal",
                description:
                  'The .NET API library can be downloaded from the <a href="https://solace.com/downloads/?fwp_downloads=solace-apis/" target="_blank">Solace Developer Portal</a>',
              },
              {
                title: "Using nuget.org",
                description:
                  'Use the NuGet console or the NuGet Visual Studio Extension to download the <a href="http://nuget.org/packages/SolaceSystems.Solclient.Messaging/" target="_blank">SolaceSystems.Solclient.Messaging</a> package for your solution and to install it for your project.                The package contains the required libraries and brief API documentation. It will automatically copy correct libraries from the package to the target directory at build time, but of course if you compile your program from the command line you would need to refer to the API assemblies and libraries locations explicitly.                Notice that in this case both x64 and x86 API assemblies and libraries have the same names.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session.",
              "The Solace session is the basis for all client communication with Solace messaging.",
            ],
            code: [
              {
                protocol: "SMF",
                sample:
                  '                ContextFactoryProperties cfp = new ContextFactoryProperties() <br>                { <br>                SolClientLogLevel = SolLogLevel.Warning <br>                }; <br>                cfp.LogToConsoleError(); <br>                ContextFactory.Instance.Init(cfp); <br>                <br>                SessionProperties sessionProps = new SessionProperties() <br>                { <br>                    &nbsp; Host = "<span class="value">${url}</span>", <br>                    &nbsp; VPNName = "<span class="value">${vpn}</span>", <br>                    &nbsp; UserName = "<span class="value">${username}</span>", <br>                    &nbsp; Password = "<span class="value">${password}</span>", <br>                    &nbsp; ReconnectRetries = DefaultReconnectRetries <br>                }; <br>                <br>                using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>                using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>                { <br>                    &nbsp; ReturnCode returnCode = session.Connect(); <br>                    &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                    &nbsp; { <br>                    &nbsp; &nbsp; // connected to the Solace message router <br>                    &nbsp; } <br>                } <br>                ',
              },
              {
                protocol: "Secured SMF",
                sample:
                  '                ContextFactoryProperties cfp = new ContextFactoryProperties() <br>                { <br>                SolClientLogLevel = SolLogLevel.Warning <br>                }; <br>                cfp.LogToConsoleError(); <br>                ContextFactory.Instance.Init(cfp); <br>                <br>                SessionProperties sessionProps = new SessionProperties() <br>                { <br>                    &nbsp; Host = "<span class="value">${url}</span>", <br>                    &nbsp; VPNName = "<span class="value">${vpn}</span>", <br>                    &nbsp; UserName = "<span class="value">${username}</span>", <br>                    &nbsp; Password = <span class="value">${password}</span>", <br>                    &nbsp; ReconnectRetries = DefaultReconnectRetries <br>                }; <br>                <br>                using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>                using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>                { <br>                    &nbsp; ReturnCode returnCode = session.Connect(); <br>                    &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                    &nbsp; { <br>                    &nbsp; &nbsp; // connected to the Solace message router <br>                    &nbsp; } <br>                } <br>                ',
              },
              {
                protocol: "Compressed SMF",
                name: "Compressed SMF",
                sample:
                  '                ContextFactoryProperties cfp = new ContextFactoryProperties() <br>                { <br>                SolClientLogLevel = SolLogLevel.Warning <br>                }; <br>                cfp.LogToConsoleError(); <br>                ContextFactory.Instance.Init(cfp); <br>                <br>                SessionProperties sessionProps = new SessionProperties() <br>                { <br>                    &nbsp; Host = "<span class="value">${url}</span>", <br>                    &nbsp; VPNName = "<span class="value">${vpn}</span>", <br>                    &nbsp; UserName = "<span class="value">${username}</span>", <br>                    &nbsp; Password = <span class="value">${password}</span>", <br>                    &nbsp; ReconnectRetries = DefaultReconnectRetries, <br>                    &nbsp; // The valid range is 1..9, where 1 is less compression (fastest) <br>                    &nbsp; // and 9 is most compression (slowest) */ <br>                    &nbsp; CompressionLevel = 9 <br>                }; <br>                <br>                using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>                using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>                { <br>                    &nbsp; ReturnCode returnCode = session.Connect(); <br>                    &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                    &nbsp; { <br>                    &nbsp; &nbsp; // connected to the Solace message router <br>                    &nbsp; } <br>                } <br>                ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/dotnet/publish-subscribe/",
              },
              {
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/dotnet/persistence-with-queues/",
              },
              {
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url: "https://tutorials.solace.dev/dotnet/request-reply/",
              },
              {
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url: "https://tutorials.solace.dev/dotnet/confirmed-delivery/",
              },
              {
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/dotnet/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    eI01: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    ekQu: function (e, t, s) {
      e.exports = s.p + "static/rest-954aa42e3e9eee4a910d5a1088199687.png";
    },
    fZ1P: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IkRldl9Qb3J0YWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUhELUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyOS4wMDAwMDAsIC05OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzI5LjAwMDAwMCwgOTkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTctQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5LTQiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMjg2ODIxNywyOS42NTExNjI4IEw0NC44NDg1MywyOS42NTExNjI4IiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4yNDAzMTAxLDEwLjA2MDIxNTkgTDU3Ljk4NDQ5NjEsMTAuMDYwMjE1OSIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4yNDAzMTAxLDMwLjE4MDY0NzggTDU3Ljk4NDQ5NjEsMzAuMTgwNjQ3OCIgaWQ9IkxpbmUtQ29weS0yIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC42NDE0NDEyMzEiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUzLjI0MDMxMDEsNDkuMjQyMTA5NiBMNTcuOTg0NDk2MSw0OS4yNDIxMDk2IiBpZD0iTGluZS1Db3B5LTMiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjY0MTQ0MTIzMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHg9IjQ2LjMzMzMzMzMiIHk9IjYuODI0MzM1NTUiIHdpZHRoPSI1LjkwNjk3Njc0IiBoZWlnaHQ9IjUuOTQyMjc1NzUiIHJ4PSIyLjk1MzQ4ODM3Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS04IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iNDYuMzMzMzMzMyIgeT0iMjYuOTQ0NzY3NCIgd2lkdGg9IjUuOTA2OTc2NzQiIGhlaWdodD0iNS45NDIyNzU3NSIgcng9IjIuOTUzNDg4MzciPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSI0Ni4zMzMzMzMzIiB5PSI0Ni4wMDYyMjkyIiB3aWR0aD0iNS45MDY5NzY3NCIgaGVpZ2h0PSI1Ljk0MjI3NTc1IiByeD0iMi45NTM0ODgzNyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIyLjIzODM3MikiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHg9IjEiIHk9IjEiIHdpZHRoPSIxMS4xNzgyOTQ2IiBoZWlnaHQ9IjEzLjg4NDU1MTUiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42MzU2NTg5MSwyLjExNzk0MDIgTDkuNTQyNjM1NjYsMi4xMTc5NDAyIEw5LjU0MjYzNTY2LDIuMTE3OTQwMiBDMTAuMDk0OTIwNCwyLjExNzk0MDIgMTAuNTQyNjM1NywyLjU2NTY1NTQ1IDEwLjU0MjYzNTcsMy4xMTc5NDAyIEwxMC41NDI2MzU3LDQuMjk0ODUwNSBMMTAuNTQyNjM1Nyw0LjI5NDg1MDUgQzEwLjU0MjYzNTcsNC44NDcxMzUyNSAxMC4wOTQ5MjA0LDUuMjk0ODUwNSA5LjU0MjYzNTY2LDUuMjk0ODUwNSBMMy42MzU2NTg5MSw1LjI5NDg1MDUgTDMuNjM1NjU4OTEsNS4yOTQ4NTA1IEMzLjA4MzM3NDE2LDUuMjk0ODUwNSAyLjYzNTY1ODkxLDQuODQ3MTM1MjUgMi42MzU2NTg5MSw0LjI5NDg1MDUgTDIuNjM1NjU4OTEsMy4xMTc5NDAyIEwyLjYzNTY1ODkxLDMuMTE3OTQwMiBDMi42MzU2NTg5MSwyLjU2NTY1NTQ1IDMuMDgzMzc0MTYsMi4xMTc5NDAyIDMuNjM1NjU4OTEsMi4xMTc5NDAyIFoiIGlkPSJSZWN0YW5nbGUtMzMiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjYzNTY1ODkxLDYuMzUzODIwNiBMOS41NDI2MzU2Niw2LjM1MzgyMDYgTDkuNTQyNjM1NjYsNi4zNTM4MjA2IEMxMC4wOTQ5MjA0LDYuMzUzODIwNiAxMC41NDI2MzU3LDYuODAxNTM1ODUgMTAuNTQyNjM1Nyw3LjM1MzgyMDYgTDEwLjU0MjYzNTcsOC41MzA3MzA5IEwxMC41NDI2MzU3LDguNTMwNzMwOSBDMTAuNTQyNjM1Nyw5LjA4MzAxNTY1IDEwLjA5NDkyMDQsOS41MzA3MzA5IDkuNTQyNjM1NjYsOS41MzA3MzA5IEwzLjYzNTY1ODkxLDkuNTMwNzMwOSBMMy42MzU2NTg5MSw5LjUzMDczMDkgQzMuMDgzMzc0MTYsOS41MzA3MzA5IDIuNjM1NjU4OTEsOS4wODMwMTU2NSAyLjYzNTY1ODkxLDguNTMwNzMwOSBMMi42MzU2NTg5MSw3LjM1MzgyMDYgTDIuNjM1NjU4OTEsNy4zNTM4MjA2IEMyLjYzNTY1ODkxLDYuODAxNTM1ODUgMy4wODMzNzQxNiw2LjM1MzgyMDYgMy42MzU2NTg5MSw2LjM1MzgyMDYgWiIgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTMiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjYzNTY1ODkxLDEwLjU4OTcwMSBMOS41NDI2MzU2NiwxMC41ODk3MDEgTDkuNTQyNjM1NjYsMTAuNTg5NzAxIEMxMC4wOTQ5MjA0LDEwLjU4OTcwMSAxMC41NDI2MzU3LDExLjAzNzQxNjIgMTAuNTQyNjM1NywxMS41ODk3MDEgTDEwLjU0MjYzNTcsMTIuNzY2NjExMyBMMTAuNTQyNjM1NywxMi43NjY2MTEzIEMxMC41NDI2MzU3LDEzLjMxODg5NiAxMC4wOTQ5MjA0LDEzLjc2NjYxMTMgOS41NDI2MzU2NiwxMy43NjY2MTEzIEwzLjYzNTY1ODkxLDEzLjc2NjYxMTMgTDMuNjM1NjU4OTEsMTMuNzY2NjExMyBDMy4wODMzNzQxNiwxMy43NjY2MTEzIDIuNjM1NjU4OTEsMTMuMzE4ODk2IDIuNjM1NjU4OTEsMTIuNzY2NjExMyBMMi42MzU2NTg5MSwxMS41ODk3MDEgTDIuNjM1NjU4OTEsMTEuNTg5NzAxIEMyLjYzNTY1ODkxLDExLjAzNzQxNjIgMy4wODMzNzQxNiwxMC41ODk3MDEgMy42MzU2NTg5MSwxMC41ODk3MDEgWiIgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTUiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuOTg0NDk2LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iMSIgeT0iMSIgd2lkdGg9IjExLjE3ODI5NDYiIGhlaWdodD0iMTYuNTMxOTc2NyIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIyLjY0NzQyNTI1IiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjIuNjM1NjU4OTEiIHk9IjcuNDEyNzkwNyIgd2lkdGg9IjcuOTA2OTc2NzQiIGhlaWdodD0iMy43MDYzOTUzNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS02IiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIxMi4xNzgxNTYxIiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3Ljk4NDQ5NiwgMjAuNjQ5OTE3KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTEuMTc4Mjk0NiIgaGVpZ2h0PSIxNi41MzE5NzY3IiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTIiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjIuNjM1NjU4OTEiIHk9IjIuNjQ3NDI1MjUiIHdpZHRoPSI3LjkwNjk3Njc0IiBoZWlnaHQ9IjMuNzA2Mzk1MzUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNCIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMi42MzU2NTg5MSIgeT0iNy40MTI3OTA3IiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTYiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjIuNjM1NjU4OTEiIHk9IjEyLjE3ODE1NjEiIHdpZHRoPSI3LjkwNjk3Njc0IiBoZWlnaHQ9IjMuNzA2Mzk1MzUiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ny45ODQ0OTYsIDQwLjc3MDM0OSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iMSIgeT0iMSIgd2lkdGg9IjExLjE3ODI5NDYiIGhlaWdodD0iMTYuNTMxOTc2NyIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIyLjY0NzQyNTI1IiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjIuNjM1NjU4OTEiIHk9IjcuNDEyNzkwNyIgd2lkdGg9IjcuOTA2OTc2NzQiIGhlaWdodD0iMy43MDYzOTUzNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS02IiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIyLjYzNTY1ODkxIiB5PSIxMi4xNzgxNTYxIiB3aWR0aD0iNy45MDY5NzY3NCIgaGVpZ2h0PSIzLjcwNjM5NTM1IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0zIiBzdHJva2Utb3BhY2l0eT0iMC42NSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIHBvaW50cz0iMzEuMTAwNzc1MiAyOC41OTIxOTI3IDMxLjEwMDc3NTIgMTAuMDYwMjE1OSA0NS44NjA0NjUxIDEwLjA2MDIxNTkiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0zIiBzdHJva2Utb3BhY2l0eT0iMC42NSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4LjQ4MDYyMCwgMzkuOTc2MTIxKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC0zOC40ODA2MjAsIC0zOS45NzYxMjEpICIgcG9pbnRzPSIzMS4xMDA3NzUyIDQ5LjI0MjEwOTYgMzEuMTAwNzc1MiAzMC43MTAxMzI5IDQ1Ljg2MDQ2NTEgMzAuNzEwMTMyOSI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";
    },
    gKIA: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3NzcuNiAxNTUuMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzc3LjYgMTU1LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0EzQTNBO30KCS5zdDF7ZmlsbDojMDBBRDkzO30KCS5zdDJ7ZmlsbDojNDc0ODQ3O30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjM3LjEsNzQuNmMwLDUuNS0xLjksOS45LTUuNywxM2MtMy44LDMuMS05LDQuNy0xNS41LDQuN2MtNy4xLDAtMTIuNS0xLTE2LjQtMi45di03LjFjMi41LDEuMSw1LjEsMiw4LDIuNgoJCWMyLjksMC42LDUuOCwwLjksOC42LDAuOWM0LjYsMCw4LjEtMC45LDEwLjUtMi44YzIuMy0xLjksMy41LTQuNCwzLjUtNy43YzAtMi4yLTAuNC00LTEuMi01LjRjLTAuOC0xLjQtMi4yLTIuNy00LjItMy45CgkJYy0yLTEuMi00LjktMi41LTguOS00Yy01LjYtMi4xLTkuNS00LjYtMTEuOS03LjVjLTIuNC0yLjktMy42LTYuNi0zLjYtMTEuMmMwLTQuOSwxLjctOC43LDUuMi0xMS42YzMuNS0yLjksOC00LjMsMTMuNy00LjMKCQljNS45LDAsMTEuNCwxLjEsMTYuNCwzLjRsLTIuMiw2LjRjLTQuOS0yLjItOS43LTMuMy0xNC40LTMuM2MtMy43LDAtNi42LDAuOC04LjYsMi41Yy0yLjEsMS43LTMuMSw0LTMuMSw2LjljMCwyLjIsMC40LDQsMS4xLDUuNAoJCWMwLjgsMS40LDIuMSwyLjcsMy45LDMuOGMxLjgsMS4yLDQuNiwyLjQsOC4zLDMuOWM2LjMsMi40LDEwLjYsNC45LDEzLDcuNkMyMzYsNjYuOCwyMzcuMSw3MC4zLDIzNy4xLDc0LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjgyLjksNjcuN2MwLDcuNy0xLjgsMTMuNy01LjUsMThjLTMuNyw0LjMtOC44LDYuNS0xNS4zLDYuNWMtNCwwLTcuNi0xLTEwLjctM3MtNS41LTQuOC03LjItOC41CgkJYy0xLjctMy43LTIuNS04LTIuNS0xM2MwLTcuNywxLjgtMTMuNyw1LjUtMThjMy43LTQuMyw4LjctNi40LDE1LjItNi40YzYuMywwLDExLjMsMi4yLDE1LDYuNkMyODEsNTQuMiwyODIuOSw2MC4yLDI4Mi45LDY3Ljd6CgkJIE0yNDguNyw2Ny43YzAsNiwxLjEsMTAuNiwzLjQsMTMuOGMyLjMsMy4yLDUuNyw0LjcsMTAuMSw0LjdjNC40LDAsNy44LTEuNiwxMC4xLTQuN2MyLjMtMy4xLDMuNS03LjcsMy41LTEzLjgKCQljMC02LTEuMi0xMC42LTMuNS0xMy43Yy0yLjMtMy4xLTUuNy00LjctMTAuMi00LjdjLTQuNCwwLTcuOCwxLjUtMTAuMSw0LjZDMjQ5LjgsNTcsMjQ4LjcsNjEuNiwyNDguNyw2Ny43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5Ny40LDkxLjNoLTYuOHYtNjdoNi44VjkxLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzM1LjIsOTEuM2wtMS40LTYuN2gtMC4zYy0yLjIsMy00LjUsNS02LjcsNmMtMi4yLDEtNSwxLjYtOC4zLDEuNmMtNC40LDAtNy45LTEuMi0xMC41LTMuNgoJCWMtMi41LTIuNC0zLjgtNS44LTMuOC0xMC4zYzAtOS41LDcuMi0xNC41LDIxLjctMTVsNy42LTAuM3YtMi45YzAtMy43LTAuOC02LjQtMi4zLTguMmMtMS41LTEuOC0zLjktMi42LTcuMy0yLjYKCQljLTMuNywwLTgsMS4yLTEyLjcsMy42bC0yLjEtNS41YzIuMi0xLjMsNC42LTIuMyw3LjMtM2MyLjYtMC43LDUuMy0xLjEsNy45LTEuMWM1LjMsMCw5LjMsMS4yLDExLjksMy43YzIuNiwyLjUsMy45LDYuNSwzLjksMTIKCQl2MzIuMkgzMzUuMnogTTMxOS44LDg2LjNjNC4yLDAsNy41LTEuMiwxMC0zLjdjMi40LTIuNCwzLjYtNS45LDMuNi0xMC4zdi00LjNsLTYuOCwwLjNjLTUuNCwwLjItOS4zLDEuMS0xMS43LDIuNgoJCWMtMi40LDEuNi0zLjYsNC0zLjYsNy4zYzAsMi42LDAuNyw0LjYsMi4yLDUuOUMzMTUuMSw4NS42LDMxNy4yLDg2LjMsMzE5LjgsODYuM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNjcuOSw5Mi4yYy02LjUsMC0xMS41LTIuMS0xNS4xLTYuM2MtMy42LTQuMi01LjMtMTAuMi01LjMtMTcuOWMwLTcuOSwxLjgtMTQsNS40LTE4LjNzOC44LTYuNSwxNS40LTYuNQoJCWMyLjIsMCw0LjMsMC4yLDYuNSwwLjdjMi4yLDAuNSwzLjgsMS4xLDUuMSwxLjdsLTIuMSw2LjFjLTEuNS0wLjYtMy4xLTEuMi00LjktMS42Yy0xLjgtMC40LTMuMy0wLjYtNC43LTAuNgoJCWMtOS4xLDAtMTMuNyw2LjEtMTMuNywxOC4zYzAsNS44LDEuMSwxMC4zLDMuMywxMy40YzIuMiwzLjEsNS41LDQuNyw5LjksNC43YzMuNywwLDcuNi0wLjgsMTEuNS0yLjV2Ni4zCgkJQzM3Ni4zLDkxLjQsMzcyLjUsOTIuMiwzNjcuOSw5Mi4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwNC43LDkyLjJjLTYuNiwwLTExLjktMi4xLTE1LjctNi40Yy0zLjgtNC4yLTUuNy0xMC4yLTUuNy0xNy43YzAtNy42LDEuOC0xMy43LDUuMy0xOC4xCgkJYzMuNi00LjUsOC4zLTYuNywxNC4zLTYuN2M1LjYsMCwxMC4xLDEuOSwxMy4zLDUuOGMzLjMsMy45LDQuOSw5LDQuOSwxNS40VjY5aC0zMC45YzAuMSw1LjUsMS41LDkuOCw0LDEyLjYKCQljMi41LDIuOSw2LjEsNC4zLDEwLjcsNC4zYzQuOCwwLDkuNi0xLjEsMTQuMy0zLjJ2Ni40Yy0yLjQsMS4xLTQuNywxLjktNi44LDIuM0M0MTAuMyw5MS45LDQwNy43LDkyLjIsNDA0LjcsOTIuMnogTTQwMi44LDQ5LjIKCQljLTMuNiwwLTYuNSwxLjItOC42LDMuN2MtMi4xLDIuNS0zLjQsNS45LTMuOCwxMC4zaDIzLjRjMC00LjUtMS04LTIuOS0xMC40QzQwOS4xLDUwLjQsNDA2LjQsNDkuMiw0MDIuOCw0OS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4My40LDQ2LjRjMCw2LjEtMiwxMC44LTUuOSwxNGMtMy45LDMuMi05LjUsNC45LTE2LjcsNC45aC05LjJ2MjZoLTQuMnYtNjNINDYyCgkJQzQ3Ni4zLDI4LjQsNDgzLjQsMzQuNCw0ODMuNCw0Ni40eiBNNDUxLjYsNjEuNWg4LjJjNi43LDAsMTEuNi0xLjIsMTQuNi0zLjVjMy0yLjMsNC41LTYuMSw0LjUtMTEuNGMwLTQuOS0xLjQtOC40LTQuMy0xMC44CgkJYy0yLjgtMi4zLTcuMi0zLjUtMTMuMi0zLjVoLTkuOVY2MS41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5NC43LDQ0LjV2MzAuM2MwLDQuNywwLjksOC4xLDIuOCwxMC4zYzEuOSwyLjEsNC44LDMuMiw4LjgsMy4yYzUuMywwLDkuMi0xLjQsMTEuNy00LjIKCQljMi41LTIuOCwzLjctNy40LDMuNy0xMy43VjQ0LjVoNHY0Ni44aC0zLjRsLTAuNy02LjVoLTAuMmMtMi45LDQuOS04LDcuMy0xNS40LDcuM2MtMTAuMSwwLTE1LjItNS43LTE1LjItMTcuMVY0NC41SDQ5NC43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU1NS4yLDQzLjZjNi4yLDAsMTAuOSwyLjEsMTQuMSw2LjJjMy4yLDQuMSw0LjcsMTAuMSw0LjcsMTguMWMwLDcuOC0xLjcsMTMuOC01LDE4Yy0zLjMsNC4yLTgsNi4zLTE0LDYuMwoJCWMtMy4yLDAtNi0wLjctOC42LTIuMXMtNC41LTMuMy02LTUuOWgtMC40bC0xLjEsNy4xaC0yLjV2LTY3aDQuMXYxNi44YzAsMi41LTAuMSw0LjktMC4yLDdsLTAuMSwzLjdoMC4zYzEuNy0yLjgsMy43LTQuOSw2LjEtNi4yCgkJQzU0OSw0NC4zLDU1MS45LDQzLjYsNTU1LjIsNDMuNnogTTU1NS4xLDQ3LjVjLTUuMiwwLTksMS42LTExLjMsNC43Yy0yLjMsMy4yLTMuNCw4LjQtMy40LDE1LjZ2MC43YzAsNy4xLDEuMiwxMi4xLDMuNSwxNS4yCgkJYzIuNCwzLjEsNiw0LjYsMTEsNC42YzQuOSwwLDguNS0xLjgsMTEtNS40czMuNy04LjcsMy43LTE1LjNDNTY5LjcsNTQuMiw1NjQuOSw0Ny41LDU1NS4xLDQ3LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjE2LjIsNzUuMWMwLDUuMy0xLjgsOS40LTUuNSwxMi41Yy0zLjcsMy4xLTguNSw0LjYtMTQuNiw0LjZjLTcuMywwLTEyLjktMC44LTE2LjgtMi41di00LjQKCQljNC4zLDEuOSw5LjgsMi45LDE2LjUsMi45YzQuOSwwLDguOC0xLjIsMTEuNy0zLjZzNC4zLTUuNSw0LjMtOS4zYzAtMi40LTAuNS00LjQtMS40LTUuOWMtMS0xLjYtMi41LTMtNC43LTQuMwoJCWMtMi4yLTEuMy01LjMtMi43LTkuNS00LjJjLTYuMS0yLjItMTAuMy00LjYtMTIuNy03LjJjLTIuMy0yLjYtMy41LTYtMy41LTEwLjNjMC00LjcsMS44LTguNiw1LjMtMTEuNWMzLjUtMyw4LTQuNSwxMy41LTQuNQoJCWM1LjYsMCwxMC45LDEuMSwxNS44LDMuNGwtMS41LDMuOGMtNS0yLjItOS43LTMuMy0xNC4yLTMuM2MtNC40LDAtNy45LDEuMS0xMC42LDMuMmMtMi42LDIuMi0zLjksNS4xLTMuOSw4LjgKCQljMCwyLjMsMC40LDQuMiwxLjIsNS43YzAuOCwxLjUsMi4xLDIuOCwzLjksNGMxLjgsMS4yLDUsMi42LDkuNCw0LjNjNC43LDEuNyw4LjIsMy4zLDEwLjUsNC45YzIuMywxLjYsNC4xLDMuNCw1LjEsNS40CgkJQzYxNS42LDY5LjgsNjE2LjIsNzIuMiw2MTYuMiw3NS4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYyNy4xLDQ0LjV2MzAuM2MwLDQuNywwLjksOC4xLDIuOCwxMC4zYzEuOSwyLjEsNC44LDMuMiw4LjgsMy4yYzUuMywwLDkuMi0xLjQsMTEuNy00LjIKCQljMi41LTIuOCwzLjctNy40LDMuNy0xMy43VjQ0LjVoNHY0Ni44aC0zLjRsLTAuNy02LjVoLTAuMmMtMi45LDQuOS04LDcuMy0xNS40LDcuM2MtMTAuMSwwLTE1LjItNS43LTE1LjItMTcuMVY0NC41SDYyNy4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY4Ny42LDQzLjZjNi4yLDAsMTAuOSwyLjEsMTQuMSw2LjJjMy4yLDQuMSw0LjcsMTAuMSw0LjcsMTguMWMwLDcuOC0xLjcsMTMuOC01LDE4Yy0zLjMsNC4yLTgsNi4zLTE0LDYuMwoJCWMtMy4yLDAtNi0wLjctOC42LTIuMXMtNC41LTMuMy02LTUuOWgtMC40bC0xLjEsNy4xaC0yLjV2LTY3aDQuMXYxNi44YzAsMi41LTAuMSw0LjktMC4yLDdsLTAuMSwzLjdoMC4zYzEuNy0yLjgsMy43LTQuOSw2LjEtNi4yCgkJQzY4MS40LDQ0LjMsNjg0LjMsNDMuNiw2ODcuNiw0My42eiBNNjg3LjYsNDcuNWMtNS4yLDAtOSwxLjYtMTEuMyw0LjdjLTIuMywzLjItMy40LDguNC0zLjQsMTUuNnYwLjdjMCw3LjEsMS4yLDEyLjEsMy41LDE1LjIKCQljMi40LDMuMSw2LDQuNiwxMSw0LjZjNC45LDAsOC41LTEuOCwxMS01LjRzMy43LTguNywzLjctMTUuM0M3MDIuMSw1NC4yLDY5Ny4zLDQ3LjUsNjg3LjYsNDcuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MzIuNyw1OC40aDE3Ljh2My41aC0xNy44djE4LjZoLTMuNFY2MS45aC0xNy43di0zLjVoMTcuN1YzOS43aDMuNFY1OC40eiIvPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NC42LDUzYy0zLjMtMC45LTQuMy0yLjItNC40LTUuNWMtMS4zLTI2LTI1LjctNDQuOC01MS4yLTM5LjljLTEzLjgsMi43LTIzLjYsMTAuNi0zMC42LDIyLjcKCQkJYy0wLjcsMC0wLjgsMC4xLTEsMGMtMTcuOC02LjktMjkuMy0xLjQtMzQuOSwxNi41Yy0wLjQsMS4yLTEuOCwyLjQtMi45LDNDMTUuNiw1Ny4xLDguOSw3MC45LDEyLjIsODUuNwoJCQljMS45LDguNSw2LjksMTUuNSwxMy45LDE5Ljl2LTguMmMtNC4yLTMuOC03LjEtOS4xLTguMS0xNS40Yy0xLjgtMTEuMyw1LjUtMjMuMiwxNi45LTI3LjNjMS4zLTAuNSwyLjUtMC45LDMuOS0xLjQKCQkJYy0wLjQtOC41LDIuNS0xNS4xLDEwLjYtMTguNGM4LjQtMy40LDE0LjksMC40LDIxLDYuN2M5LjEtMjIuMSwyNC4zLTMyLjgsNDguMy0yNi4zYzksMi40LDE1LjYsOC42LDIwLjMsMTYuNQoJCQljNC44LDgsNS40LDE2LjksNC40LDI2LjFjMS42LDAuMSwyLjgsMC4yLDQsMC4zYzEyLjgsMC41LDIyLjUsMTAuNywyMi4zLDIzLjVjLTAuMiwxMi4yLTEwLjEsMjEuOS0yMi44LDIxLjkKCQkJYy0xNC45LDAtMjkuOSwwLTQ0LjgsMHY2LjhjMTUuMSwwLDMwLjItMC4xLDQ1LjQtMC4yYzE0LjgtMC4xLDI2LjgtMTEuMywyOC40LTI1LjVDMTc3LjcsNzAsMTY5LjEsNTYuOSwxNTQuNiw1M3oiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNTUuMSw3MC41IDU1LjEsODUuMiA3OS43LDg1LjIgNzkuNywxMDkuOCA5NC41LDEwOS44IDk0LjUsNzAuNSAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iODQuNyw0MC45IDg0LjcsNTUuNyAxMDkuMyw1NS43IDEwOS4zLDgwLjIgMTI0LjEsODAuMiAxMjQuMSw0MC45IAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI2NC45LDEzMS4zIDMzLjcsMTMxLjMgMzMuNywxMDAgNjQuOSwxMDAgCQkiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NjIsMTExYy0zLjgsMC02LjgsMS4zLTksMy44Yy0yLjIsMi41LTMuMyw2LTMuMywxMC40YzAsNC41LDEuMSw4LDMuMiwxMC41YzIuMSwyLjUsNS4xLDMuNyw5LDMuNwoJCWMyLjQsMCw1LjItMC40LDguMi0xLjN2My41Yy0yLjQsMC45LTUuMywxLjMtOC44LDEuM2MtNS4xLDAtOS0xLjUtMTEuOC00LjZjLTIuOC0zLjEtNC4xLTcuNS00LjEtMTMuMWMwLTMuNiwwLjctNi43LDItOS4zCgkJYzEuMy0yLjcsMy4yLTQuNyw1LjgtNi4yYzIuNS0xLjQsNS41LTIuMiw4LjktMi4yYzMuNiwwLDYuOCwwLjcsOS41LDJsLTEuNywzLjRDNDY3LjIsMTExLjcsNDY0LjYsMTExLDQ2MiwxMTF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDkyLjIsMTQyLjRWMTA4aDR2MzAuOWgxNS4ydjMuNkg0OTIuMnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NjEuNywxMjUuMmMwLDUuNS0xLjQsOS45LTQuMiwxM2MtMi44LDMuMi02LjcsNC43LTExLjYsNC43Yy01LjEsMC05LTEuNi0xMS44LTQuNwoJCWMtMi44LTMuMS00LjEtNy41LTQuMS0xMy4yYzAtNS42LDEuNC0xMCw0LjItMTMuMWMyLjgtMy4xLDYuNy00LjYsMTEuOC00LjZjNSwwLDguOCwxLjYsMTEuNiw0LjcKCQlDNTYwLjMsMTE1LjMsNTYxLjcsMTE5LjYsNTYxLjcsMTI1LjJ6IE01MzQuMiwxMjUuMmMwLDQuNywxLDguMiwzLDEwLjZzNC45LDMuNiw4LjcsMy42YzMuOCwwLDYuNy0xLjIsOC43LTMuNgoJCWMxLjktMi40LDIuOS02LDIuOS0xMC42YzAtNC42LTEtOC4yLTIuOS0xMC42Yy0xLjktMi40LTQuOC0zLjYtOC42LTMuNmMtMy44LDAtNi43LDEuMi04LjcsMy42UzUzNC4yLDEyMC41LDUzNC4yLDEyNS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTYwOS45LDEwOHYyMi4zYzAsMy45LTEuMiw3LTMuNiw5LjNzLTUuNiwzLjQtOS44LDMuNGMtNC4yLDAtNy40LTEuMS05LjYtMy40cy0zLjQtNS40LTMuNC05LjNWMTA4aDR2MjIuNQoJCWMwLDIuOSwwLjgsNS4xLDIuNCw2LjZzMy45LDIuMyw2LjksMi4zYzIuOSwwLDUuMi0wLjgsNi43LTIuM2MxLjYtMS41LDIuNC0zLjgsMi40LTYuN1YxMDhINjA5Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjYxLjEsMTI0LjljMCw1LjctMS41LDEwLTQuNiwxMy4xYy0zLjEsMy03LjUsNC41LTEzLjMsNC41aC05LjZWMTA4aDEwLjZjNS40LDAsOS41LDEuNSwxMi41LDQuNQoJCUM2NTkuNiwxMTUuNCw2NjEuMSwxMTkuNSw2NjEuMSwxMjQuOXogTTY1Ni44LDEyNWMwLTQuNS0xLjEtNy45LTMuNC0xMC4yYy0yLjMtMi4zLTUuNi0zLjQtMTAuMS0zLjRoLTUuOFYxMzloNC45CgkJYzQuOCwwLDguNC0xLjIsMTAuOC0zLjVTNjU2LjgsMTI5LjYsNjU2LjgsMTI1eiIvPgo8L2c+Cjwvc3ZnPgo=";
    },
    h3WE: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    "hFT/": function (e, t, s) {
      s("E9XD"), (t.__esModule = !0);
      t.ATTRIBUTE_NAMES = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes",
      };
      var a = (t.TAG_NAMES = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        }),
        n =
          ((t.VALID_TAG_NAMES = Object.keys(a).map(function (e) {
            return a[e];
          })),
          (t.TAG_PROPERTIES = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src",
          }),
          (t.REACT_TAG_MAP = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          }));
      (t.HELMET_PROPS = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate",
      }),
        (t.HTML_TAG_MAP = Object.keys(n).reduce(function (e, t) {
          return (e[n[t]] = t), e;
        }, {})),
        (t.SELF_CLOSING_TAGS = [a.NOSCRIPT, a.SCRIPT, a.STYLE]),
        (t.HELMET_ATTRIBUTE = "data-react-helmet");
    },
    hlNj: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return r;
        });
      var a = s("9Hrx"),
        n = s("q1tI"),
        o = s.n(n),
        r = (function (e) {
          function t(t) {
            var s;
            return ((s = e.call(this, t) || this).library = t.data), s;
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              return o.a.createElement(
                "div",
                { style: { display: "flex" } },
                o.a.createElement(
                  "div",
                  { className: "description", style: { paddingTop: "15px" } },
                  o.a.createElement(
                    "div",
                    { className: "name" },
                    this.library.displayName
                  )
                ),
                o.a.createElement(
                  "div",
                  {
                    className: "description",
                    style: {
                      position: "absolute",
                      left: "350px",
                      paddingTop: "15px",
                    },
                  },
                  o.a.createElement(
                    "div",
                    { className: "name" },
                    this.library.protocol
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "links" },
                  o.a.createElement(
                    "div",
                    { className: "get-started" },
                    "Get Started"
                  )
                )
              );
            }),
            t
          );
        })(o.a.Component);
    },
    hlZ0: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solacePythonAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace Python",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "Python", logo: "./images/python-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/python",
            api:
              "https://docs.solace.com/Solace-PubSub-Messaging-APIs/Python-API/python-home.htm",
            download: [
              {
                name: "PyPi",
                url: "https://pypi.org/project/solace-pubsubplus/",
              },
            ],
          },
          step1: {
            name: "Python API",
            getAPI: [
              { title: "Using PyPi", code: ["pip install solace-pubsubplus"] },
              {
                title: "Using the Solace Developer Portal",
                description:
                  'The Solace SMF Python API can be downloaded <a href="https://solace.com/downloads/?fwp_downloads=solace-apis" target="_blank">here</a>.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must build a Messaging Service",
              "The Solace Messaging Service is the basis for all client communication with Solace messaging.",
            ],
            code: [
              { protocol: "SMF" },
              { protocol: "Secured SMF" },
              { protocol: "Compressed SMF" },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://github.com/SolaceSamples/solace-samples-python/blob/master/samples/hello_world_pubsub.py",
              },
              {
                id: "guaranteed-publisher",
                name: "Guaranteed <br>                        Publisher",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://github.com/SolaceSamples/solace-samples-python/blob/master/samples/guaranteed_publisher.py",
              },
              {
                id: "guaranteed-subscriber",
                name: "Guaranteed <br>                        Subscriber",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://github.com/SolaceSamples/solace-samples-python/blob/master/samples/guaranteed_subscriber.py",
              },
            ],
          },
        });
    },
    izM5: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "springBootJavaAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Spring Boot Java API",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/spring-boot-logo.png",
            usesVPN: !0,
          },
          language: { name: "Spring", logo: "./images/spring-boot-logo.png" },
          links: {
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/index.html",
            download: [
              {
                name: "Solace Starter",
                url:
                  "https://mvnrepository.com/artifact/com.solace.spring.boot/solace-java-spring-boot-starter",
              },
            ],
          },
          step1: {
            name: "Get the API",
            getAPI: [
              {
                title: "I already have a Maven Spring Boot Project",
                description:
                  "Add the Solace Java Spring Boot Starter to your POM if using Maven.",
                code: [
                  "&lt;dependency&gt; <br/>          &nbsp;&nbsp;&lt;groupId&gt;com.solace.spring.boot&lt;/groupId&gt; <br/>          &nbsp;&nbsp;&lt;artifactId&gt;solace-java-spring-boot-starter&lt;/artifactId&gt; <br/>          &nbsp;&nbsp;&lt;version&gt;3.1.0&lt;/version&gt; <br/>          &lt;/dependency&gt;",
                ],
              },
              {
                title: "I already have a Gradle Spring Boot Project",
                description:
                  "Add the Solace Java Spring Boot Starter to your build.gradle if using Gradle.",
                code: [
                  "compile group: 'com.solace.spring.boot', name: 'solace-java-spring-boot-starter', version: '3.1.0'",
                ],
              },
              {
                title:
                  "Starting from Scratch - Use Spring Initializr to bootstrap my project!",
                description:
                  'It is recommended to bootstrap your Spring Boot project using <a href="https://start.spring.io/" target="_blank">Spring Initializr</a>. Spring Initializr will           generate your Spring Boot project skeleton for you based on a few simple choices, such as your preferred language, Spring Boot version, and then dependencies you need to build your microservice. <br/><br/>           Once you bootstrap your Spring Boot project add the Solace Java Spring Boot Starter as shown in the previous section.',
              },
            ],
          },
          step2: {
            introduction: [
              'The Solace Java Spring Boot Starter that you added to your dependencies in the “Get API”         step auto-configures a SpringJCSMPFactory that you can inject into your own component.         This auto-configuration is enabled by the setting of application properties.         This is commonly done using the <strong>application.properties</strong> file as shown below.         Other external configuration options supported by Spring Boot are available <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html" target="_blank">here</a>.',
            ],
            code: [{ protocol: "Java API", sample: "" }],
            conclusion: [
              "Once you have your SpringJCSMPFactory you can create your JCSMPSession(s) and you’re off to the races!        Learn more about the Solace Java API (JCSMP) here. See the “Learn More” tab for more information about the        Solace JMS Spring Boot Starter, including sample code.",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "demo-app",
                name: "Sample <br/>Application",
                logo: "./images/github-logo.png",
                url:
                  "https://github.com/SolaceProducts/solace-spring-boot/blob/master/solace-spring-boot-samples/solace-java-sample-app/src/main/java/demo/DemoApplication.java",
              },
              {
                id: "tutorial",
                name: "Tutorial using <br/>Spring Boot Java <br/>API with PCF",
                logo: "./images/spring-cloud.svg",
                url:
                  "https://tutorials.solace.dev/tanzu/spring-cloud-autoconf-java/",
              },
              {
                id: "blog",
                name: "Blog: Solace Java <br/>Meet Spring Boot <br/>Starters",
                logo: "./images/spring-boot.svg",
                url:
                  "https://solace.com/blog/solace-java-meet-spring-boot-starters/",
              },
            ],
          },
        });
    },
    j4xZ: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    jIXv: function (e, t, s) {
      e.exports =
        s.p +
        "static/pubsub-animation-dark-horizontal-f3b83f924388cb2d5beb313d3811226c.gif";
    },
    "k+q9": function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solace-node-api",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace Node.js API",
          protocol: {
            id: "web-messaging",
            name: "Web Messaging",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "Node.js", logo: "./images/nodejs-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/nodejs/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/nodejs/index.html",
            download: [
              {
                name: "Solace Developer Portal",
                url: "https://products.solace.com/download/NODE_JS_API",
              },
            ],
          },
          step1: {
            name: "Node.js API",
            getAPI: [
              { title: "Using NPM", code: ["npm install solclientjs"] },
              {
                title: "Using the Solace Developer Portal",
                description:
                  'The Solace Web Messaging API for Node.js can be downloaded <a href="https://solace.com/downloads/?fwp_downloads=solace-apis/" target="_blank">here</a>.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session.",
              "The Solace session is the basis for all client communication with the Solace PubSub+ message broker.",
            ],
            code: [
              {
                protocol: "Web Messaging",
                sample:
                  '                var session = solace.SolclientFactory.createSession({ <br>               &nbsp;&nbsp; url: "<span class="value">${url}</span>", <br>               &nbsp;&nbsp; vpnName: "<span class="value">${vpn}</span>", <br>               &nbsp;&nbsp; userName: "<span class="value">${username}</span>", <br>               &nbsp;&nbsp; password: "<span class="value">${password}</span>", <br>               }); <br>               try { <br>                   &nbsp;&nbsp; session.connect(); <br>               } catch (error) { <br>                   &nbsp;&nbsp; console.log(error); <br>               }',
              },
              {
                protocol: "Secured Web Messaging",
                sample:
                  '                var session = solace.SolclientFactory.createSession({ <br>               &nbsp;&nbsp; url: "<span class="value">${url}</span>", <br>               &nbsp;&nbsp; vpnName: "<span class="value">${vpn}</span>", <br>               &nbsp;&nbsp; userName: "<span class="value">${username}</span>", <br>               &nbsp;&nbsp; password: "<span class="value">${password}</span>", <br>               }); <br>               try { <br>                   &nbsp;&nbsp; session.connect(); <br>               } catch (error) { <br>                   &nbsp;&nbsp; console.log(error); <br>               }',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/nodejs/publish-subscribe/",
              },
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/nodejs/persistence-with-queues/",
              },
              {
                id: "request-reply",
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url: "https://tutorials.solace.dev/nodejs/request-reply/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url: "https://tutorials.solace.dev/nodejs/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/nodejs/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    kAML: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("t8Zj"),
        n = s("uRdJ"),
        o = s("9Hrx"),
        r = s("q1tI"),
        i = s.n(r),
        l = (s("+jNR"), s("KS6O")),
        c = s("kD0O"),
        g = s("Sl7n"),
        p = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).selectedLibrary = Object(
                l.default
              )(t.libraryID)),
              (s.changeData = s.changeData.bind(Object(n.a)(s))),
              (s.toggleConnectDetailsFn = t.toggleConnectDetailsFn),
              (s.selectedLibrary.connectionDetail = g.default.find(function (
                e
              ) {
                return e.id === s.selectedLibrary.protocol.id;
              })),
              s.selectedLibrary.connectionDetail ||
                (s.selectedLibrary.connectionDetail =
                  s.selectedLibrary.protocol.id),
              (s.groupedDownload = []),
              Object(a.a)(
                new Set(
                  s.selectedLibrary.links.download.map(function (e) {
                    return e.group;
                  })
                )
              ).forEach(function (e) {
                var t = {
                  groupName: e,
                  downloads: s.selectedLibrary.links.download.filter(function (
                    t
                  ) {
                    return t.group === e;
                  }),
                };
                s.groupedDownload.push(t);
              }),
              (s.state = {
                step: 1,
                username: "",
                password: "",
                url: "",
                vpn: "",
              }),
              s
            );
          }
          Object(o.a)(t, e);
          var r = t.prototype;
          return (
            (r.renderMultipleDownloadLinks = function (e) {
              var t = this;
              if (e.length > 1)
                return i.a.createElement(
                  "div",
                  { className: "icon" },
                  i.a.createElement("i", {
                    className: "fa fa-download icon-content",
                  }),
                  i.a.createElement(
                    "select",
                    {
                      value: "",
                      onChange: function (e) {
                        return t.navigateToLink(e);
                      },
                    },
                    i.a.createElement("option", {
                      disabled: !0,
                      style: { display: "none" },
                    }),
                    e.map(function (e) {
                      return i.a.createElement(
                        "option",
                        {
                          className: "item",
                          value: e.url,
                          key: e.name,
                          id:
                            "download-" +
                            t.selectedLibrary.id +
                            "-" +
                            t.selectedLibrary.connectionDetail.id +
                            "-" +
                            e.name,
                        },
                        e.name
                      );
                    })
                  )
                );
            }),
            (r.navigateToLink = function (e) {
              window.open(e.currentTarget.value, "_blank").focus();
            }),
            (r.chooseStep = function (e, t) {
              t.preventDefault();
              var s = document.getElementById("apis-and-protocols");
              s && s.scrollIntoView && s.scrollIntoView({ behavior: "smooth" });
              var a = { step: e };
              this.setState(a);
            }),
            (r.changeData = function (e, t) {
              switch (e) {
                case "username":
                  this.setState(function (e) {
                    return { username: t };
                  });
                  break;
                case "password":
                  this.setState(function (e) {
                    return { password: t };
                  });
                  break;
                case "url":
                  this.setState(function (e) {
                    return { url: t };
                  });
                  break;
                case "vpn":
                  this.setState(function (e) {
                    return { vpn: t };
                  });
                  break;
                default:
                  return "Unknown key";
              }
            }),
            (r.render = function () {
              var e = this;
              return i.a.createElement(
                "div",
                { className: "connectivity-detail" },
                i.a.createElement(
                  "button",
                  {
                    className: "exit",
                    onClick: function () {
                      return e.toggleConnectDetailsFn();
                    },
                  },
                  "Select another API"
                ),
                i.a.createElement(
                  "div",
                  { className: "card" },
                  i.a.createElement(
                    "div",
                    { className: "header" },
                    i.a.createElement(
                      "div",
                      { className: "language" },
                      i.a.createElement(
                        "label",
                        null,
                        this.selectedLibrary.language.name
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: "logos" },
                      i.a.createElement("img", {
                        src: s("OCAI")("" + this.selectedLibrary.protocol.logo),
                        alt: "",
                      })
                    ),
                    i.a.createElement(
                      "div",
                      { className: "links" },
                      this.selectedLibrary.links.api
                        ? i.a.createElement(
                            "div",
                            { className: "link" },
                            i.a.createElement("label", null, "API Docs"),
                            i.a.createElement(
                              "a",
                              {
                                className: "icon",
                                href: this.selectedLibrary.links.api,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              i.a.createElement("i", {
                                className: "fa fa-book",
                              })
                            )
                          )
                        : "",
                      this.selectedLibrary.links.tutorial
                        ? i.a.createElement(
                            "div",
                            { className: "link" },
                            i.a.createElement("label", null, "Tutorials"),
                            i.a.createElement(
                              "a",
                              {
                                className: "icon",
                                href: this.selectedLibrary.links.tutorial,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              "<>"
                            )
                          )
                        : "",
                      this.selectedLibrary.links.download.length > 0
                        ? i.a.createElement(
                            "div",
                            { className: "link" },
                            i.a.createElement("label", null, "Download"),
                            1 === this.selectedLibrary.links.download.length
                              ? i.a.createElement(
                                  "a",
                                  {
                                    className: "icon",
                                    href: this.selectedLibrary.links.download[0]
                                      .url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    id:
                                      "download-" +
                                      this.selectedLibrary.id +
                                      "-" +
                                      this.selectedLibrary.connectionDetail.id,
                                  },
                                  i.a.createElement("i", {
                                    className: "fa fa-download",
                                  })
                                )
                              : "",
                            this.renderMultipleDownloadLinks(
                              this.selectedLibrary.links.download
                            )
                          )
                        : ""
                    ),
                    i.a.createElement(
                      "div",
                      { className: "title" },
                      this.selectedLibrary.displayName
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: "content" },
                    i.a.createElement(
                      "div",
                      { className: "details" },
                      i.a.createElement(
                        "div",
                        { className: "tabs" },
                        i.a.createElement(
                          "ul",
                          { style: { overflow: "hidden", display: "flex" } },
                          i.a.createElement(
                            "li",
                            { className: "tab" },
                            i.a.createElement(
                              "button",
                              {
                                id: "get-api",
                                onClick: function (t) {
                                  return e.chooseStep(1, t);
                                },
                              },
                              i.a.createElement(
                                "div",
                                {
                                  className:
                                    1 === this.state.step
                                      ? "active"
                                      : "tab-number",
                                },
                                "1"
                              ),
                              i.a.createElement(
                                "label",
                                {
                                  className:
                                    1 === this.state.step ? "active-label" : "",
                                },
                                "Get API"
                              )
                            )
                          ),
                          i.a.createElement(
                            "li",
                            { className: "tab" },
                            i.a.createElement(
                              "button",
                              {
                                id: "connect-to-service",
                                onClick: function (t) {
                                  return e.chooseStep(2, t);
                                },
                              },
                              i.a.createElement(
                                "div",
                                {
                                  className:
                                    2 === this.state.step
                                      ? "active"
                                      : "tab-number",
                                },
                                "2"
                              ),
                              i.a.createElement(
                                "label",
                                {
                                  className:
                                    2 === this.state.step ? "active-label" : "",
                                },
                                "Connect",
                                i.a.createElement("br", null),
                                "to Service"
                              )
                            )
                          ),
                          i.a.createElement(
                            "li",
                            { className: "tab" },
                            i.a.createElement(
                              "button",
                              {
                                id: "learn-more",
                                onClick: function (t) {
                                  return e.chooseStep(3, t);
                                },
                              },
                              i.a.createElement(
                                "div",
                                {
                                  className:
                                    3 === this.state.step
                                      ? "active"
                                      : "tab-number",
                                },
                                "3"
                              ),
                              i.a.createElement(
                                "label",
                                {
                                  className:
                                    3 === this.state.step ? "active-label" : "",
                                },
                                "Learn More"
                              )
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: "tab-content" },
                        i.a.createElement(c.default, {
                          step: this.state.step,
                          selectedLibrary: this.selectedLibrary,
                          username: this.state.username,
                          password: this.state.password,
                          url: this.state.url,
                          vpn: this.state.vpn,
                        }),
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              marginRight: "auto",
                            },
                          },
                          3 === this.state.step &&
                            this.selectedLibrary.links.api
                            ? i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "div",
                                  { className: "title" },
                                  "API Docs"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "description" },
                                  "springCloudStreams" ===
                                    this.selectedLibrary.id
                                    ? "See Solace Binder Configuration Options "
                                    : "See the API docs ",
                                  i.a.createElement(
                                    "a",
                                    {
                                      href: this.selectedLibrary.links.api,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    "here"
                                  ),
                                  "."
                                )
                              )
                            : "",
                          3 === this.state.step &&
                            this.selectedLibrary.links.download.length > 0
                            ? i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "div",
                                  { className: "title" },
                                  "API Download"
                                ),
                                1 === this.selectedLibrary.links.download.length
                                  ? i.a.createElement(
                                      "div",
                                      { className: "description" },
                                      "springCloudStreams" ===
                                        this.selectedLibrary.id ||
                                        "springBootJavaAPI" ===
                                          this.selectedLibrary.id ||
                                        "springBootJmsAPI" ===
                                          this.selectedLibrary.id
                                        ? "Get the "
                                        : "Download the API from ",
                                      i.a.createElement(
                                        "a",
                                        {
                                          href: this.selectedLibrary.links
                                            .download[0].url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          id:
                                            "download-" +
                                            this.selectedLibrary.id +
                                            "-" +
                                            this.selectedLibrary
                                              .connectionDetail.id,
                                        },
                                        this.selectedLibrary.links.download[0]
                                          .name
                                      ),
                                      "."
                                    )
                                  : i.a.createElement(
                                      "div",
                                      null,
                                      this.groupedDownload.map(function (t) {
                                        return i.a.createElement(
                                          "div",
                                          {
                                            key: t.groupName,
                                            className: "api-download",
                                          },
                                          t.groupName,
                                          i.a.createElement(
                                            "div",
                                            { className: "downloads" },
                                            t.downloads.map(function (t) {
                                              return i.a.createElement(
                                                "div",
                                                {
                                                  key: t.name,
                                                  className: "download",
                                                },
                                                i.a.createElement(
                                                  "a",
                                                  {
                                                    href: t.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    id:
                                                      "download-" +
                                                      e.selectedLibrary.id +
                                                      "-" +
                                                      e.selectedLibrary
                                                        .connectionDetail.id +
                                                      "-" +
                                                      t.name,
                                                  },
                                                  t.name
                                                )
                                              );
                                            })
                                          )
                                        );
                                      })
                                    )
                              )
                            : ""
                        )
                      )
                    ),
                    2 === this.state.step
                      ? i.a.createElement(
                          "div",
                          { className: "credentials" },
                          i.a.createElement(
                            "div",
                            { className: "title" },
                            "Connection Details"
                          ),
                          i.a.createElement(
                            "div",
                            { className: "information-box" },
                            i.a.createElement(
                              "div",
                              { className: "credential" },
                              i.a.createElement("label", null, "Username"),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement("input", {
                                  onChange: function (t) {
                                    e.changeData(
                                      "username",
                                      t.currentTarget.value
                                    );
                                  },
                                })
                              )
                            ),
                            i.a.createElement(
                              "div",
                              { className: "credential" },
                              i.a.createElement("label", null, "Password"),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement("input", {
                                  onChange: function (t) {
                                    e.changeData(
                                      "password",
                                      t.currentTarget.value
                                    );
                                  },
                                })
                              )
                            ),
                            i.a.createElement(
                              "div",
                              { className: "credential" },
                              i.a.createElement("label", null, "Endpoint URI"),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement("input", {
                                  onChange: function (t) {
                                    e.changeData("url", t.currentTarget.value);
                                  },
                                })
                              )
                            ),
                            this.selectedLibrary.protocol.usesVPN
                              ? i.a.createElement(
                                  "div",
                                  { className: "credential" },
                                  i.a.createElement(
                                    "label",
                                    null,
                                    "Message VPN"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      onChange: function (t) {
                                        e.changeData(
                                          "vpn",
                                          t.currentTarget.value
                                        );
                                      },
                                    })
                                  )
                                )
                              : ""
                          )
                        )
                      : ""
                  ),
                  1 === this.state.step
                    ? i.a.createElement(
                        "div",
                        {
                          className: "nav-buttons",
                          style: { justifyContent: "flex-end" },
                        },
                        i.a.createElement(
                          "div",
                          { className: "nav" },
                          i.a.createElement(
                            "button",
                            {
                              onClick: function (t) {
                                return e.chooseStep(2, t);
                              },
                            },
                            "Next"
                          ),
                          i.a.createElement("label", null, "Connect to Service")
                        )
                      )
                    : "",
                  2 === this.state.step
                    ? i.a.createElement(
                        "div",
                        { className: "nav-buttons" },
                        i.a.createElement(
                          "div",
                          { className: "nav" },
                          i.a.createElement(
                            "button",
                            {
                              onClick: function (t) {
                                return e.chooseStep(1, t);
                              },
                            },
                            "Previous"
                          ),
                          i.a.createElement("label", null, "Get API")
                        ),
                        i.a.createElement(
                          "div",
                          { className: "nav next" },
                          i.a.createElement(
                            "button",
                            {
                              onClick: function (t) {
                                return e.chooseStep(3, t);
                              },
                            },
                            "Next"
                          ),
                          i.a.createElement("label", null, "Learn More")
                        )
                      )
                    : "",
                  3 === this.state.step
                    ? i.a.createElement(
                        "div",
                        { className: "nav-buttons" },
                        i.a.createElement(
                          "div",
                          { className: "nav" },
                          i.a.createElement(
                            "button",
                            {
                              onClick: function (t) {
                                return e.chooseStep(2, t);
                              },
                            },
                            "Previous"
                          ),
                          i.a.createElement("label", null, "Connect to Service")
                        )
                      )
                    : ""
                )
              );
            }),
            t
          );
        })(i.a.Component);
      t.default = p;
    },
    kD0O: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return i;
        });
      var a = s("uRdJ"),
        n = s("9Hrx"),
        o = s("q1tI"),
        r = s.n(o),
        i = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).selectedLibrary =
                t.selectedLibrary),
              (s.state = {
                step: t.step,
                protocol: s.selectedLibrary.protocol.name,
                copied: !1,
                username: "default",
                password: "default",
                url: "localhost",
                vpn: "default",
              }),
              (s.selectSampleCode = s.selectSampleCode.bind(Object(a.a)(s))),
              s
            );
          }
          Object(n.a)(t, e);
          var o = t.prototype;
          return (
            (o.componentWillReceiveProps = function (e) {
              e.step &&
                this.setState(function (t) {
                  return { step: e.step };
                }),
                e.username &&
                  this.setState(function (t) {
                    return { username: e.username };
                  }),
                e.password &&
                  this.setState(function (t) {
                    return { password: e.password };
                  }),
                e.url &&
                  this.setState(function (t) {
                    return { url: e.url };
                  }),
                e.vpn &&
                  this.setState(function (t) {
                    return { vpn: e.vpn };
                  });
            }),
            (o.createMarkup = function (e) {
              return { __html: e };
            }),
            (o.createCodeMarkup = function () {
              switch (this.selectedLibrary.id) {
                case "springBootJmsAPI":
                  return this.createMarkup(
                    '\n            solace.jms.host=<span style="color: #00AD93;">' +
                      ("localhost" === this.state.url
                        ? "tcp://" + this.state.url + ":55555"
                        : this.state.url) +
                      '</span> <br>            solace.jms.msg-vpn=<span style="color: #00AD93;">' +
                      this.state.vpn +
                      '</span> <br>            solace.jms.client-username=<span style="color: #00AD93;">' +
                      this.state.username +
                      '</span> <br>            solace.jms.client-password=<span style="color: #00AD93;">' +
                      this.state.password +
                      "</span>\n          "
                  );
                case "springBootJavaAPI":
                  return this.createMarkup(
                    '\n            solace.java.host=<span style="color: #00AD93;">' +
                      ("localhost" === this.state.url
                        ? "tcp://" + this.state.url + ":55555"
                        : this.state.url) +
                      '</span> <br>            <span style="color: #508A4D;">## Optional options below:</span>  <br>            solace.java.msg-vpn=<span style="color: #00AD93;">' +
                      this.state.vpn +
                      '</span> <br>            solace.java.client-username=<span style="color: #00AD93;">' +
                      this.state.username +
                      '</span><br>            solace.java.client-password=<span style="color: #00AD93;">' +
                      this.state.password +
                      '</span><br>            <span style="color: #508A4D;">#solace.java.connect-retries=1 <br>            #solace.java.reconnect-retries=5 <br>            #solace.java.connect-retries-per-host=20  <br>            #solace.java.reconnect-retry-wait-in-millis=3000 <br>            # Optional Solace Java API properties are also available. <br>            # The name of the property can be obtained from: <br>            # https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/constant-values.html </span><br>            solace.java.apiProperties.reapply_subscriptions=true <br>            <span style="color: #508A4D;">#solace.java.apiProperties.ssl_trust_store=/path/to/truststore</span>\n          '
                  );
                case "springCloudStreams":
                  return this.createMarkup(
                    '<pre style="white-space: pre;\n          background-color: inherit !important;\n          color: inherit;\n          border: inherit !important;\n          font-size: inherit;">\nspring:  <br>  cloud: <br>    function: <br>      definition: myFunction\n    stream:  <br>      binders:  <br>      <span style="color: #508A4D;">#This section of the configuration tells the solace binder how to connect to the solace event broker/mesh </span><br>        local-solace:  <br>          type: solace <br>          environment: <br>            solace: <br>              java: <br>                host: <span style="color: #00AD93;">' +
                      ("localhost" === this.state.url
                        ? "tcp://" + this.state.url + ":55555"
                        : this.state.url) +
                      '</span> <br>                msgVpn: <span style="color: #00AD93;">' +
                      this.state.vpn +
                      '</span> <br>                clientUsername: <span style="color: #00AD93;">' +
                      this.state.username +
                      '</span> <br>                clientPassword: <span style="color: #00AD93;">' +
                      this.state.password +
                      '</span> <br>                connectRetries: 3 <br>                connectRetriesPerHost: 0 <br>                reconnectRetries: 3 <br>      bindings:  <br>      <span style="color: #508A4D;">#The bindings section is used to define your input and output channels. </span><br>        myFunction-in-0: <br>          destination: QUEUE.NAME <br>          <span style="color: #508A4D;">#The presence of "group" tells the binder to follow the "consumer group" pattern; if not present the "publish-subscribe" pattern will be used. </span> <br>          group: GROUP <br>        myFunction-out-0: <br>          destination: send/to/topic <br>      solace: <br>      <span style="color: #508A4D;">#The solace bindings section allows for solace specific configurations to be applied to a channel. A common example is adding topic subscriptions to a queue as shown below. </span><br>        bindings: <br>          myFunction-in-0: <br>            consumer: <br>              queueAdditionalSubscriptions: topic/subscriptions,wildcards/*/accepted/></pre>'
                  );
                case "solaceQpid1API":
                  switch (this.state.protocol) {
                    case "AMQP":
                      return this.createMarkup(
                        'ConnectionFactory connectionFactory = new JmsConnectionFactory("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqp://" + this.state.url + ":5672"
                            : this.state.url) +
                          '</span>"); <br>                Connection connection = connectionFactory.createConnection(); <br>                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE); <br>'
                      );
                    case "Secured AMQP":
                      return this.createMarkup(
                        'ConnectionFactory connectionFactory = new JmsConnectionFactory("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqps://" + this.state.url + ":5671"
                            : this.state.url) +
                          '</span>"); <br>                Connection connection = connectionFactory.createConnection(); <br>                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE); <br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "pahoJavaAPI":
                  switch (this.state.protocol) {
                    case "MQTT":
                      return this.createMarkup(
                        'MqttClient mqttClient = new MqttClient("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":1883"
                            : this.state.url) +
                          '</span>", "HelloWorldSub"); <br>                MqttConnectOptions connectionOptions = new MqttConnectOptions(); <br>                connectionOptions.setUsername("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                connectionOptions.setPassword("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>".toCharArray()) <br>                mqttClient.connect(connectionOptions);'
                      );
                    case "Secured MQTT":
                      return this.createMarkup(
                        'MqttClient mqttClient = new MqttClient("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "ssl://" + this.state.url + ":8883"
                            : this.state.url) +
                          '</span>", "HelloWorldSub"); <br>                MqttConnectOptions connectionOptions = new MqttConnectOptions(); <br>                connectionOptions.setUsername("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                connectionOptions.setPassword("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>".toCharArray()) <br>                mqttClient.connect(connectionOptions);'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solaceRest":
                  switch (this.state.protocol) {
                    case "REST":
                      return this.createMarkup(
                        'curl -X POST <span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "http://" + this.state.url + ":9000"
                            : this.state.url) +
                          '</span>/T/rest/pubsub \\<br>                -d "Hello World REST" \\<br>                -H "content-type: text" \\<br>                -H "Solace-delivery-mode: direct" \\<br>                --user <span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>:<span style="color: #00AD93;">' +
                          this.state.password +
                          "</span>"
                      );
                    case "Secured REST":
                      return this.createMarkup(
                        'curl -X POST <span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "https://" + this.state.url + ":9443"
                            : this.state.url) +
                          '</span>/T/rest/pubsub \\<br>                -d "Hello World REST" \\<br>                -H "content-type: text" \\<br>                -H "Solace-delivery-mode: direct" \\<br>                --user <span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>:<span style="color: #00AD93;">' +
                          this.state.password +
                          "</span>"
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solace-amqp10-api":
                  switch (this.state.protocol) {
                    case "AMQP":
                      return this.createMarkup(
                        'var AMQP = require("amqp10"); <br>                <br>                var amqpClient = new AMQP.Client(AMQP.Policy.merge({ <br>                &nbsp; defaultSubjects : false <br>                })); <br>                <br>                amqpClient.connect("amqp://<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>:<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>@<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqp://" + this.state.url + ":5672"
                            : this.state.url) +
                          '</span>").then(() => { <br>                    &nbsp; console.log("Connected") <br>                }); <br>'
                      );
                    case "Secured AMQP":
                      return this.createMarkup(
                        'var AMQP = require("amqp10"); <br>                <br>                var amqpClient = new AMQP.Client(AMQP.Policy.merge({ <br>                &nbsp; defaultSubjects : false <br>                })); <br>                <br>                amqpClient.connect("amqp://<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>:<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>@<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqps://" + this.state.url + ":5671"
                            : this.state.url) +
                          '</span>").then(() => { <br>                    &nbsp; console.log("Connected") <br>                }); <br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solaceCAPI":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">/* solClient needs to be initialized before any other API calls. */</span> <br>                  solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>                      <br>                      <span style="color: #508A4D;">/* Context */</span> <br>                  solClient_opaqueContext_pt context_p; <br>                  solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>                  <br>                  solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) );<br>                      <br>                      <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span><br>                  solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>                  { <br>                      &nbsp; printf ( "Received message:\\n" ); <br>                      &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                      &nbsp; printf ( "\\n" ); <br>                      &nbsp; return SOLCLIENT_CALLBACK_OK; <br>                  } <br>                  <br>                  void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>                  { <br>                      &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>                  } <br>                      <br>                  <span style="color: #508A4D;">// Configure the Session properties <br>                  /* Session */ </span><br>                  solClient_opaqueSession_pt session_p; <br>                  solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>                  <br>                  <span style="color: #508A4D;">/* Session Properties */ </span><br>                  const char     *sessionProps[50]; <br>                  int             propIndex = 0; <br>                  <br>                  <span style="color: #508A4D;">/* Configure the Session function information.</span> */ <br>                  sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>                  sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>                  sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>                  sessionFuncInfo.eventInfo.user_p = NULL; <br>                  <br>                  <span style="color: #508A4D;">/* Configure the Session properties. */</span> <br>                  propIndex = 0; <br>                  <br>                  sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>                  sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55555"
                            : this.state.url) +
                          '</span>"; <br>                  <br>                  sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>                  sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"; <br>                  <br>                  sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>                  sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"; <br>                  <br>                  sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>                  sessionProps[propIndex] = "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"; <br>                  <br>                  <span style="color: #508A4D;">/* Create the Session. */</span> <br>                  solClient_session_create ( ( char ** ) sessionProps, <br>                                          &nbsp; &nbsp; context_p, <br>                                          &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>                  <br>                  <span style="color: #508A4D;">/* Connect the Session. */ </span><br>                  solClient_session_connect ( session_p ); <br>'
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">/* solClient needs to be initialized before any other API calls. */</span> <br>                solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>                    <br>                    <span style="color: #508A4D;">/* Context */</span> <br>                solClient_opaqueContext_pt context_p; <br>                solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>                <br>                solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) );<br>                    <br>                    <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span><br>                solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>                { <br>                    &nbsp; printf ( "Received message:\\n" ); <br>                    &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                    &nbsp; printf ( "\\n" ); <br>                    &nbsp; return SOLCLIENT_CALLBACK_OK; <br>                } <br>                <br>                void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>                { <br>                    &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>                } <br>                    <br>                <span style="color: #508A4D;">// Configure the Session properties <br>                /* Session */ </span><br>                solClient_opaqueSession_pt session_p; <br>                solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>                <br>                <span style="color: #508A4D;">/* Session Properties */ </span><br>                const char     *sessionProps[50]; <br>                int             propIndex = 0; <br>                <br>                <span style="color: #508A4D;">/* Configure the Session function information.</span> */ <br>                sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>                sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>                sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>                sessionFuncInfo.eventInfo.user_p = NULL; <br>                <br>                <span style="color: #508A4D;">/* Configure the Session properties. */</span> <br>                propIndex = 0; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>                sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcps://" + this.state.url + ":55443"
                            : this.state.url) +
                          '</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>                sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>                sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>                sessionProps[propIndex] = "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"; <br>                <br>                <span style="color: #508A4D;">/* Create the Session. */</span> <br>                solClient_session_create ( ( char ** ) sessionProps, <br>                                        &nbsp; &nbsp; context_p, <br>                                        &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>                <br>                <span style="color: #508A4D;">/* Connect the Session. */ </span><br>                solClient_session_connect ( session_p ); <br>'
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">/* solClient needs to be initialized before any other API calls. */ </span><br>              solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>              <br>              <span style="color: #508A4D;">/* Context */</span> <br>              solClient_opaqueContext_pt context_p; <br>              solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>              <br>              solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) ); <br>              <br>              <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span> <br>              solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>              { <br>                  &nbsp; printf ( "Received message:\\n" ); <br>                  &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                  &nbsp; printf ( "\\n" ); <br>                  &nbsp; return SOLCLIENT_CALLBACK_OK; <br>              } <br>              <br>              void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>              { <br>                  &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>              } <br>              <br>              <span style="color: #508A4D;">// Configure the Session properties <br>              /* Session */ </span> <br>              solClient_opaqueSession_pt session_p; <br>              solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>              <br>              <span style="color: #508A4D;">/* Session Properties */ </span><br>              const char     *sessionProps[50]; <br>              int             propIndex = 0; <br>              <br>              <span style="color: #508A4D;">/* Configure the Session function information. */ </span> <br>              sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>              sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>              sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>              sessionFuncInfo.eventInfo.user_p = NULL; <br>              <br>              <span style="color: #508A4D;">/* Configure the Session properties. */ </span> <br>              propIndex = 0; <br>              <br>              sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>              sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55003"
                            : this.state.url) +
                          '</span>"; <br>              <br>              sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>              sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"; <br>              <br>              sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>              sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"; <br>              <br>              sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>              sessionProps[propIndex++] = "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"; <br>              <br>              sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_COMPRESSION_LEVEL; <br>              sessionProps[propIndex++] = "9"; <br>              <br>              <span style="color: #508A4D;">/* Create the Session. */ </span> <br>              solClient_session_create ( ( char ** ) sessionProps, <br>                                      &nbsp; &nbsp; context_p, <br>                                      &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>              <br>              <span style="color: #508A4D;">/* Connect the Session. */ </span> <br>              solClient_session_connect ( session_p ); <br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solaceDotNetAPI":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        'ContextFactoryProperties cfp = new ContextFactoryProperties() <br>                { <br>                SolClientLogLevel = SolLogLevel.Warning <br>                }; <br>                cfp.LogToConsoleError(); <br>                ContextFactory.Instance.Init(cfp); <br>                <br>                SessionProperties sessionProps = new SessionProperties() <br>                { <br>                    &nbsp; Host = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55555"
                            : this.state.url) +
                          '</span>", <br>                    &nbsp; VPNName = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>                    &nbsp; UserName = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>                    &nbsp; Password = "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>                    &nbsp; ReconnectRetries = DefaultReconnectRetries <br>                }; <br>                <br>                using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>                using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>                { <br>                    &nbsp; ReturnCode returnCode = session.Connect(); <br>                    &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                    &nbsp; { <br>                    &nbsp; &nbsp; // connected to the Solace message router <br>                    &nbsp; } <br>                } <br>'
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        'ContextFactoryProperties cfp = new ContextFactoryProperties() <br>                { <br>                SolClientLogLevel = SolLogLevel.Warning <br>                }; <br>                cfp.LogToConsoleError(); <br>                ContextFactory.Instance.Init(cfp); <br>                <br>                SessionProperties sessionProps = new SessionProperties() <br>                { <br>                    &nbsp; Host = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcps://" + this.state.url + ":55443"
                            : this.state.url) +
                          '</span>", <br>                    &nbsp; VPNName = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>                    &nbsp; UserName = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>                    &nbsp; Password = <span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>                    &nbsp; ReconnectRetries = DefaultReconnectRetries <br>                }; <br>                <br>                using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>                using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>                { <br>                    &nbsp; ReturnCode returnCode = session.Connect(); <br>                    &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                    &nbsp; { <br>                    &nbsp; &nbsp; // connected to the Solace message router <br>                    &nbsp; } <br>                } <br>'
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        'ContextFactoryProperties cfp = new ContextFactoryProperties() <br>              { <br>              SolClientLogLevel = SolLogLevel.Warning <br>              }; <br>              cfp.LogToConsoleError(); <br>              ContextFactory.Instance.Init(cfp); <br>              <br>              SessionProperties sessionProps = new SessionProperties() <br>              { <br>                  &nbsp; Host = "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55003"
                            : this.state.url) +
                          '</span>", <br>                  &nbsp; VPNName = "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>                  &nbsp; UserName = "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>                  &nbsp; Password = <span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>                  &nbsp; ReconnectRetries = DefaultReconnectRetries, <br>                  &nbsp; <span style="color: #508A4D;">// The valid range is 1..9, where 1 is less compression (fastest) <br>                  &nbsp; // and 9 is most compression (slowest) </span> <br>                  &nbsp; CompressionLevel = 9 <br>              }; <br>              <br>              using (IContext context = ContextFactory.Instance.CreateContext(new ContextProperties(), null)) <br>              using (ISession session = context.CreateSession(sessionProps, HandleMessage, null)) <br>              { <br>                  &nbsp; ReturnCode returnCode = session.Connect(); <br>                  &nbsp; if (returnCode == ReturnCode.SOLCLIENT_OK) <br>                  &nbsp; { <br>                  &nbsp; &nbsp; <span style="color: #508A4D;">// connected to the Solace message router </span> <br>                  &nbsp; } <br>              } <br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solace-java-api":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        'final JCSMPProperties properties = new JCSMPProperties(); <br>                  properties.setProperty(JCSMPProperties.HOST, "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55555"
                            : this.state.url) +
                          '</span>"); <br>                  properties.setProperty(JCSMPProperties.USERNAME, "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                  properties.setProperty(JCSMPProperties.PASSWORD, "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>                  properties.setProperty(JCSMPProperties.VPN_NAME, "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>                  final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                  <br>                  session.connect();<br>'
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        'final JCSMPProperties properties = new JCSMPProperties(); <br>                properties.setProperty(JCSMPProperties.HOST, "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcps://" + this.state.url + ":55443"
                            : this.state.url) +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.USERNAME, "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.PASSWORD, "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.VPN_NAME, "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>                final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                <br>                session.connect();<br>'
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        'final JCSMPProperties properties = new JCSMPProperties(); <br>                properties.setProperty(JCSMPProperties.HOST, "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55003"
                            : this.state.url) +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.USERNAME, "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.PASSWORD, "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>                properties.setProperty(JCSMPProperties.VPN_NAME, "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>                JCSMPChannelProperties channelProperties = (JCSMPChannelProperties) properties.getProperty(JCSMPProperties.CLIENT_CHANNEL_PROPERTIES); <br>                channelProperties.setCompressionLevel(9); <br>                final JCSMPSession session = JCSMPFactory.onlyInstance().createSession(properties); <br>                <br>                session.connect();<br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solaceJavaRTOAPI":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">// Solclient needs to be initialized before any other API calls. </span><br>                  Solclient.init(new String[0]); <br>                  <br>                  <span style="color: #508A4D;">// Context </span><br>                  final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                  Solclient.createContextForHandle(contextHandle, new String[0]);<br>                  <br>                  <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span><br>                  MessageCallback messageCallback = new MessageCallback() {<br>                      &nbsp;  @Override<br>                      &nbsp;  public void onMessage(Handle handle) {<br>                          &nbsp; &nbsp; System.out.println("Received message:");<br>                      &nbsp; }<br>                  };<br>                  <br>                  <span style="color: #508A4D;">// A session event callback to events such as connect/disconnect events</span><br>                  SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                      &nbsp; @Override<br>                      &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                          &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                      &nbsp; }<br>                  };<br>                  <br>                  <span style="color: #508A4D;">// Configure the session properties </span><br>                  ArrayList<String> sessionProperties = new ArrayList<String>();<br>                  sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                  sessionProperties.add("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55555"
                            : this.state.url) +
                          '</span>");<br>                  sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                  sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>");<br>                  sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                  sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>");<br>                  sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                  sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>");<br>                  String[] props = new String[sessionProperties.size()];<br>                  <br>                  <span style="color: #508A4D;">// Instantiate a new SessionHandle instance </span><br>                  final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                  <br>                  <span style="color: #508A4D;">// Create the Session</span><br>                  contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                  <br>                  <span style="color: #508A4D;">// Connect the Session</span><br>                  sessionHandle.connect();<br>'
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">// Solclient needs to be initialized before any other API calls. </span><br>                Solclient.init(new String[0]); <br>                <br>                <span style="color: #508A4D;">// Context </span><br>                final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                Solclient.createContextForHandle(contextHandle, new String[0]);<br>                <br>                <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span><br>                MessageCallback messageCallback = new MessageCallback() {<br>                    &nbsp;  @Override<br>                    &nbsp;  public void onMessage(Handle handle) {<br>                        &nbsp; &nbsp; System.out.println("Received message:");<br>                    &nbsp; }<br>                };<br>                <br>                <span style="color: #508A4D;">// A session event callback to events such as connect/disconnect events</span><br>                SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                    &nbsp; @Override<br>                    &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                        &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                    &nbsp; }<br>                };<br>                <br>                <span style="color: #508A4D;">// Configure the session properties </span><br>                ArrayList<String> sessionProperties = new ArrayList<String>();<br>                sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcps://" + this.state.url + ":55443"
                            : this.state.url) +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>");<br>                String[] props = new String[sessionProperties.size()];<br>                <br>                <span style="color: #508A4D;">// Instantiate a new SessionHandle instance </span><br>                final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                <br>                <span style="color: #508A4D;">// Create the Session</span><br>                contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                <br>                <span style="color: #508A4D;">// Connect the Session</span><br>                sessionHandle.connect();<br>'
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        '<span style="color: #508A4D;">// Solclient needs to be initialized before any other API calls.</span> <br>                Solclient.init(new String[0]); <br>                <br>                <span style="color: #508A4D;">// Context </span><br>                final ContextHandle contextHandle = Solclient.Allocator.newContextHandle();<br>                Solclient.createContextForHandle(contextHandle, new String[0]);<br>                <br>                <span style="color: #508A4D;">// A message callback to receive messages asynchronously </span><br>                MessageCallback messageCallback = new MessageCallback() {<br>                    &nbsp;  @Override<br>                    &nbsp;  public void onMessage(Handle handle) {<br>                        &nbsp; &nbsp; System.out.println("Received message:");<br>                    &nbsp; }<br>                };<br>                <br>                <span style="color: #508A4D;">// A session event callback to events such as connect/disconnect events </span><br>                SessionEventCallback sessionEventCallback = new SessionEventCallback() {<br>                    &nbsp; @Override<br>                    &nbsp; public void onEvent(SessionHandle sessionHandle) {<br>                        &nbsp; &nbsp; System.out.println("Received SessionEvent:" + sessionHandle.getSessionEvent());<br>                    &nbsp; }<br>                };<br>                <br>                <span style="color: #508A4D;">// Configure the Session properties </span><br>                ArrayList<String> sessionProperties = new ArrayList<String>();<br>                sessionProperties.add(SessionHandle.PROPERTIES.HOST);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55003"
                            : this.state.url) +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.USERNAME);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.PASSWORD);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>");<br>                sessionProperties.add(SessionHandle.PROPERTIES.VPN_NAME);<br>                sessionProperties.add("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>");<br>                String[] props = new String[sessionProperties.size()];<br>                <br>                <span style="color: #508A4D;">// Instantiate a new SessionHandle instance </span><br>                final SessionHandle sessionHandle = Solclient.Allocator.newSessionHandle();<br>                <br>                <span style="color: #508A4D;">// Create the Session </span><br>                contextHandle.createSessionForHandle(sessionHandle, sessionProperties.toArray(props), messageCallback, sessionEventCallback);<br>                <br>                <span style="color: #508A4D;">// Connect the Session </span><br>                sessionHandle.connect();<br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solace-javascript-api":
                  switch (this.state.protocol) {
                    case "Web Messaging":
                      return this.createMarkup(
                        'var session = solace.SolclientFactory.createSession({ <br>              &nbsp;&nbsp; url: "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "ws://" + this.state.url + ":80"
                            : this.state.url) +
                          '</span>", <br>              &nbsp;&nbsp; vpnName: "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>              &nbsp;&nbsp; userName: "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>              &nbsp;&nbsp; password: "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>              }); <br>              try { <br>                  &nbsp;&nbsp; session.connect(); <br>              } catch (error) { <br>                  &nbsp;&nbsp; console.log(error); <br>              }'
                      );
                    case "Secured Web Messaging":
                      return this.createMarkup(
                        'var session = solace.SolclientFactory.createSession({ <br>              &nbsp;&nbsp; url: "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "wss://" + this.state.url + ":443"
                            : this.state.url) +
                          '</span>", <br>              &nbsp;&nbsp; vpnName: "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>              &nbsp;&nbsp; userName: "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>              &nbsp;&nbsp; password: "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>              }); <br>              try { <br>                  &nbsp;&nbsp; session.connect(); <br>              } catch (error) { <br>                  &nbsp;&nbsp; console.log(error); <br>              }'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solace-jms-api":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        'SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(); <br>                connectionFactory.setHost("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55555"
                            : this.state.url) +
                          '</span>"); <br>                connectionFactory.setUsername("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>                connectionFactory.setPassword("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>                connectionFactory.setVPN("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>                <br>                Connection connection = connectionFactory.createConnection(); <br>                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>'
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        'SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(); <br>              connectionFactory.setHost("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcps://" + this.state.url + ":55443"
                            : this.state.url) +
                          '</span>"); <br>              connectionFactory.setUsername("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>              connectionFactory.setPassword("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>              connectionFactory.setVPN("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>              <br>              Connection connection = connectionFactory.createConnection(); <br>              Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>'
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        'Hashtable&lt;String, Object&gt; env = new Hashtable&lt;String,Object&gt;(); <br>              env.put(SupportedProperty.SOLACE_JMS_COMPRESSION_LEVEL, 9); <br>              SolConnectionFactory connectionFactory = SolJmsUtility.createConnectionFactory(env); <br>              connectionFactory.setHost("<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "tcp://" + this.state.url + ":55003"
                            : this.state.url) +
                          '</span>"); <br>              connectionFactory.setUsername("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>"); <br>              connectionFactory.setPassword("<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>"); <br>              connectionFactory.setVPN("<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>"); <br>              <br>              Connection connection = connectionFactory.createConnection(); <br>              Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);<br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solace-node-api":
                  switch (this.state.protocol) {
                    case "Web Messaging":
                      return this.createMarkup(
                        'var session = solace.SolclientFactory.createSession({ <br>              &nbsp;&nbsp; url: "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "ws://" + this.state.url + ":80"
                            : this.state.url) +
                          '</span>", <br>              &nbsp;&nbsp; vpnName: "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>              &nbsp;&nbsp; userName: "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>              &nbsp;&nbsp; password: "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>              }); <br>              try { <br>                  &nbsp;&nbsp; session.connect(); <br>              } catch (error) { <br>                  &nbsp;&nbsp; console.log(error); <br>              }'
                      );
                    case "Secured Web Messaging":
                      return this.createMarkup(
                        'var session = solace.SolclientFactory.createSession({ <br>              &nbsp;&nbsp; url: "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "wss://" + this.state.url + ":443"
                            : this.state.url) +
                          '</span>", <br>              &nbsp;&nbsp; vpnName: "<span style="color: #00AD93;">' +
                          this.state.vpn +
                          '</span>", <br>              &nbsp;&nbsp; userName: "<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", <br>              &nbsp;&nbsp; password: "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", <br>              }); <br>              try { <br>                  &nbsp;&nbsp; session.connect(); <br>              } catch (error) { <br>                  &nbsp;&nbsp; console.log(error); <br>              }'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solaceQpid2API":
                  switch (this.state.protocol) {
                    case "AMQP":
                      return this.createMarkup(
                        'ConnectionFactory connectionFactory = new JmsConnectionFactory("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqp://" + this.state.url + ":5672"
                            : this.state.url) +
                          '</span>"); <br>                JMSContext context = connectionFactory.createContext(); <br>'
                      );
                    case "Secured AMQP":
                      return this.createMarkup(
                        'ConnectionFactory connectionFactory = new JmsConnectionFactory("<span style="color: #00AD93;">' +
                          this.state.username +
                          '</span>", "<span style="color: #00AD93;">' +
                          this.state.password +
                          '</span>", "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "amqps://" + this.state.url + ":5671"
                            : this.state.url) +
                          '</span>"); <br>                JMSContext context = connectionFactory.createContext(); <br>'
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                case "solacePythonAPI":
                  switch (this.state.protocol) {
                    case "SMF":
                      return this.createMarkup(
                        'broker_props = {<br>                &nbsp; "solace.messaging.transport.host": "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "localhost"
                            : this.state.url) +
                          '</span>",<br>                &nbsp; "solace.messaging.service.vpn-name": "<span style="color: #00AD93;">' +
                          ("default" === this.state.vpn
                            ? "default"
                            : this.state.vpn) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.username": "<span style="color: #00AD93;">' +
                          ("default" === this.state.username
                            ? "default"
                            : this.state.username) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.password": "<span style="color: #00AD93;">' +
                          ("default" === this.state.password
                            ? "default"
                            : this.state.password) +
                          '</span>",<br>                &nbsp; }<br>            <br>            messaging_service = MessagingService.builder().from_properties(broker_props)<br>                                &nbsp; .with_reconnection_retry_strategy(RetryStrategy.parametrized_retry(20,3))<br>                                &nbsp; .build()<br>            <br>            messaging_service.connect()<br>            '
                      );
                    case "Secured SMF":
                      return this.createMarkup(
                        'broker_props = {<br>                &nbsp; "solace.messaging.transport.host.secured": "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "localhost"
                            : this.state.url) +
                          '</span>",<br>                &nbsp; "solace.messaging.service.vpn-name": "<span style="color: #00AD93;">' +
                          ("default" === this.state.vpn
                            ? "default"
                            : this.state.vpn) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.username": "<span style="color: #00AD93;">' +
                          ("default" === this.state.username
                            ? "default"
                            : this.state.username) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.password": "<span style="color: #00AD93;">' +
                          ("default" === this.state.password
                            ? "default"
                            : this.state.password) +
                          '</span>",<br>                &nbsp; }<br>            <br>            transport_security = TLS.create() \\ <br>            &nbsp; .with_certificate_validation(True, validate_server_name=False, <br>              &nbsp; &nbsp; &nbsp; &nbsp; trust_store_file_path="<span style="color: #00AD93;">path_to_trusted_stor_dir</span>") <br>            <br>            messaging_service = MessagingService.builder().from_properties(broker_props)\\ <br>                                &nbsp; .with_reconnection_retry_strategy(RetryStrategy.parametrized_retry(20,3))\\ <br>                                &nbsp; .with_transport_security_strategy(transport_security)\\ <br>                                &nbsp; .with_authentication_strategy(ClientCertificateAuthentication.of(certificate_file="<span style="color: #00AD93;">key_store_url</span>",<br>                                  &nbsp; &nbsp; &nbsp; key_file="<span style="color: #00AD93;">key_file</span>",<br>                                  &nbsp; &nbsp; &nbsp; key_password="<span style="color: #00AD93;">key_store_password</span>"))\\ <br>                                &nbsp; .build()<br>            <br>            messaging_service.connect()<br>            '
                      );
                    case "Compressed SMF":
                      return this.createMarkup(
                        'broker_props = {<br>                &nbsp; "solace.messaging.transport.host.compressed": "<span style="color: #00AD93;">' +
                          ("localhost" === this.state.url
                            ? "localhost"
                            : this.state.url) +
                          '</span>",<br>                &nbsp; "solace.messaging.service.vpn-name": "<span style="color: #00AD93;">' +
                          ("default" === this.state.vpn
                            ? "default"
                            : this.state.vpn) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.username": "<span style="color: #00AD93;">' +
                          ("default" === this.state.username
                            ? "default"
                            : this.state.username) +
                          '</span>",<br>                &nbsp; "solace.messaging.authentication.scheme.basic.password": "<span style="color: #00AD93;">' +
                          ("default" === this.state.password
                            ? "default"
                            : this.state.password) +
                          '</span>",<br>                &nbsp; }<br>            <br>            messaging_service = MessagingService.builder().from_properties(broker_props)\\ <br>                                &nbsp; .with_reconnection_retry_strategy(RetryStrategy.parametrized_retry(20,3))\\ <br>                                &nbsp; .with_message_compression(compression_range=1)\\ <br>                                &nbsp; .build()<br>            <br>            messaging_service.connect()<br>            '
                      );
                    default:
                      return this.createMarkup("<span>Coming Soon...</span>");
                  }
                default:
                  return this.createMarkup("<span>Coming Soon...</span>");
              }
            }),
            (o.selectSampleCode = function (e) {
              var t = e.currentTarget.value;
              this.setState(function (e) {
                return { protocol: t };
              });
            }),
            (o.copyCode = function (e) {
              var t = this,
                s = document.getElementById(e).innerText,
                a = document.createElement("textarea");
              document.body.appendChild(a),
                (a.value = s.replace(/<br\s*[/]?>/gi, "\r\n")),
                a.select(),
                document.execCommand("copy", !1),
                this.setState({ copied: !this.state.copied }),
                a.remove(),
                setTimeout(function () {
                  t.setState({ copied: !t.state.copied });
                }, 1e3);
            }),
            (o.render = function () {
              var e = this;
              return 1 === this.state.step
                ? this.selectedLibrary.step1
                  ? r.a.createElement(
                      "div",
                      { className: "w100" },
                      r.a.createElement(
                        "div",
                        null,
                        "Here are a few easy ways to get the",
                        " ",
                        this.selectedLibrary.step1.name,
                        ". If your environment differs then adjust the build instructions appropriately."
                      ),
                      r.a.createElement("br", null),
                      this.selectedLibrary.step1.getAPI.map(function (t, s) {
                        return r.a.createElement(
                          "div",
                          { key: s },
                          r.a.createElement(
                            "div",
                            { className: "title" },
                            "Get the API: ",
                            t.title
                          ),
                          t.description
                            ? r.a.createElement("div", {
                                className: "description",
                                dangerouslySetInnerHTML: e.createMarkup(
                                  t.description
                                ),
                              })
                            : "",
                          t.code
                            ? t.code.map(function (s, a) {
                                return r.a.createElement(
                                  "div",
                                  { className: "sample", key: a },
                                  r.a.createElement(
                                    "button",
                                    {
                                      onClick: function () {
                                        return e.copyCode(
                                          "code-step-1" + t.title + a
                                        );
                                      },
                                      className: "tooltip copy",
                                    },
                                    e.state.copied
                                      ? r.a.createElement(
                                          "span",
                                          { className: "tooltiptext" },
                                          "Copied!"
                                        )
                                      : r.a.createElement(
                                          "span",
                                          { className: "tooltiptext" },
                                          "Copy Code"
                                        ),
                                    r.a.createElement("i", {
                                      className: "fa fa-copy",
                                    })
                                  ),
                                  r.a.createElement("div", {
                                    className: "code",
                                    id: "code-step-1" + t.title + a,
                                    dangerouslySetInnerHTML: e.createMarkup(s),
                                  })
                                );
                              })
                            : "",
                          t.footer
                            ? r.a.createElement("div", {
                                className: "description",
                                dangerouslySetInnerHTML: e.createMarkup(
                                  t.footer
                                ),
                              })
                            : ""
                        );
                      })
                    )
                  : r.a.createElement(
                      "div",
                      { className: "coming-soon" },
                      "Coming soon..."
                    )
                : 2 === this.state.step
                ? this.selectedLibrary.step2
                  ? r.a.createElement(
                      "div",
                      { className: "w100" },
                      r.a.createElement(
                        "div",
                        null,
                        this.selectedLibrary.step2.introduction.map(function (
                          t
                        ) {
                          return r.a.createElement("div", {
                            key: t,
                            className: "description",
                            dangerouslySetInnerHTML: e.createMarkup(t),
                          });
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "sample-toggle" },
                        r.a.createElement(
                          "span",
                          { style: { paddingRight: "10px" } },
                          "Host URI"
                        ),
                        r.a.createElement(
                          "select",
                          { onChange: this.selectSampleCode },
                          this.selectedLibrary.step2.code.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { key: e.protocol, value: e.protocol },
                              e.protocol
                            );
                          })
                        ),
                        r.a.createElement("img", {
                          className: "caret",
                          src: s("lXxq"),
                          alt: "",
                        })
                      ),
                      this.selectedLibrary.step2.code
                        ? r.a.createElement(
                            "div",
                            { className: "sample" },
                            r.a.createElement(
                              "button",
                              {
                                onClick: function () {
                                  return e.copyCode("code-step-2");
                                },
                                className: "tooltip copy",
                              },
                              this.state.copied
                                ? r.a.createElement(
                                    "span",
                                    { className: "tooltiptext" },
                                    "Copied!"
                                  )
                                : r.a.createElement(
                                    "span",
                                    { className: "tooltiptext" },
                                    "Copy Code"
                                  ),
                              r.a.createElement("i", {
                                className: "fa fa-copy",
                              })
                            ),
                            r.a.createElement("div", {
                              className: "code",
                              id: "code-step-2",
                              dangerouslySetInnerHTML: this.createCodeMarkup(),
                            })
                          )
                        : "",
                      r.a.createElement(
                        "div",
                        null,
                        this.selectedLibrary.step2.conclusion.map(function (e) {
                          return r.a.createElement(
                            "div",
                            { key: e, className: "description" },
                            e
                          );
                        })
                      )
                    )
                  : r.a.createElement(
                      "div",
                      { className: "coming-soon" },
                      "Coming soon..."
                    )
                : 3 === this.state.step
                ? this.selectedLibrary.step3
                  ? r.a.createElement(
                      "div",
                      null,
                      this.selectedLibrary.links.tutorial
                        ? r.a.createElement(
                            "div",
                            { className: "title" },
                            "springBootJavaAPI" === this.selectedLibrary.id ||
                              "springBootJmsAPI" === this.selectedLibrary.id
                              ? ""
                              : "Tutorials"
                          )
                        : "",
                      r.a.createElement(
                        "div",
                        { className: "tutorials" },
                        this.selectedLibrary.step3.tutorials.map(function (t) {
                          return r.a.createElement(
                            "a",
                            {
                              key: t.name,
                              href: t.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "tutorial",
                            },
                            r.a.createElement("img", {
                              src: s("OCAI")("" + t.logo),
                              className: "image",
                              alt: "",
                            }),
                            r.a.createElement("label", {
                              dangerouslySetInnerHTML: e.createMarkup(t.name),
                            })
                          );
                        })
                      )
                    )
                  : r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: "coming-soon" },
                        "Coming soon..."
                      )
                    )
                : void 0;
            }),
            t
          );
        })(r.a.Component);
    },
    kzCs: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTUgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjEgKDcyNjMxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5jb25uZWN0aW9ucyBjb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkNyZWF0ZS1TZXJ2aWNlLVY1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9IkNyZWF0ZS1TZXJ2aWNlLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDkuMDAwMDAwLCAtNDc5LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iY29ubmVjdGlvbnMtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ5LjAwMDAwMCwgNDc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuOTc1NDIwNDMsMS4wOTgyODAxOSBDOS40NDA5NjA4NCwtMC4zNjYwOTMzOTYgMTEuODE1NDYzLC0wLjM2NjA5MzM5NiAxMy4yODEwMDM0LDEuMDk4MjgwMTkgQzE0Ljc0NTk2MDQsMi41NjM4MjA2IDE0Ljc0NTk2MDQsNC45MzgzMjI3OCAxMy4yODA0Miw2LjQwMzg2MzIgTDEwLjc2OTM5ODUsOC45MTQ4ODQ2NyBDMTAuNTEzMjc5LDkuMTcxMDA0MTkgMTAuMjI5MTU1NSw5LjM4MjIwMDcgOS45MjY5NDYxOCw5LjU0OTA1NzYxIEM5LjA5ODQ5NTc4LDEwLjAwNTI4ODcgOC4xMzUyNzYzNSwxMC4xMjU0NzI0IDcuMjM1NjQ5MjMsOS45MDkwMjUxNCBDNi41NDEzODQ0Niw5Ljc0MTU4NDgyIDUuOTM4NzE1OTcsOS4zODkyMDE2OSA1LjQ2NDM5ODk1LDguOTE0ODg0NjcgQzUuMjgwNjIyOTksOC43MzExMDg3IDUuMTM3Njg2MTIsOC41NTAyNDk4MSA1LDguMzQxOTcwMzggTDYuMzA5NzY4NCw3LjAzMjIwMTk4IEM2LjQwNDg2NTE3LDcuMjQ4MDY1ODIgNi41NTc3MjAxMSw3LjQ2ODAxMzU2IDYuNzMzOTExNjcsNy42NDQ3ODg1NCBDNy40OTIzNTIxNyw4LjQwMzIyOTA0IDguNzM0NDQ0MzQsOC40MDk2NDY2MSA5LjQ5OTg4NTgzLDcuNjQ0Nzg4NTQgTDEyLjAxMDkwNzMsNS4xMzM3NjcwNyBDMTIuNzczNDMxNyw0LjM3MTI0MjY1IDEyLjc3MzQzMTcsMy4xMzA5MDA3MyAxMi4wMTA5MDczLDIuMzY4Mzc2MzIgQzExLjI0ODM4MjksMS42MDU4NTE5MSAxMC4wMDgwNDEsMS42MDU4NTE5MSA5LjI0NTUxNjU2LDIuMzY4Mzc2MzIgTDguNDcxMzIzODMsMy4xNDI1NjkwNCBDNy43Njc3MjQ0MSwyLjg2MzExMjg5IDcuMDEyMjAwOTksMi43NTE2ODA0OCA2LjI2NzE3OTA1LDIuODA3MTA0OTggTDcuOTc1NDIwNDMsMS4wOTgyODAxOSBaIE0zLjYxMDMyMjY0LDUuMDk4NTA0NDIgQzMuODY2NDQyMTYsNC44NDIzODQ4OSA0LjE1MDU2NTY0LDQuNjMxMTg4MzggNC40NTI3NzUwMSw0LjQ2NDMzMTQ3IEM2LjEzNzA5NjM0LDMuNTM2MTE2OTggOC4yOTc0ODQ5Myw0LjAzMDI3MDE0IDkuMzc5NzIxMTgsNS42NzIwMDIxMiBMOC4wNjkzNjkzNyw2Ljk4MTc3MDUyIEM3LjY5MzY0OTYxLDYuMTI0MTQ5MzQgNi43NjEzNTEyMSw1LjYzNjk5NzE3IDUuODMzMTM2NzIsNS44NDQ2OTMxOSBDNS40ODM2NzA2Nyw1LjkyMjg3MDkgNS4xNTE3MDcxLDYuMDk3MzEyMjEgNC44Nzk4MzUzNSw2LjM2ODYwMDU1IEwyLjM2ODgxMzg4LDguODgwMjA1NDQgQzEuNjA2Mjg5NDcsOS42NDIxNDY0MyAxLjYwNjI4OTQ3LDEwLjg4MzA3MTggMi4zNjg4MTM4OCwxMS42NDUwMTI4IEMzLjEzMTMzODI5LDEyLjQwNzUzNzIgNC4zNzE2ODAyMiwxMi40MDc1MzcyIDUuMTM0MjA0NjMsMTEuNjQ1MDEyOCBMNS45MDc4MTM5NCwxMC44NzA4MiBDNi42MTE5OTY3NywxMS4xNTA4NTk2IDcuMzY3NTIwMTksMTEuMjYyMjkyIDguMTEyNTQyMTMsMTEuMjA2Mjg0MSBMNi40MDM3MTczNCwxMi45MTUxMDg5IEM0LjkzODc2MDM0LDE0LjM4MDA2NTkgMi41NjM2NzQ3NSwxNC4zODAwNjU5IDEuMDk4NzE3NzUsMTIuOTE1MTA4OSBDLTAuMzY2MjM5MjQ5LDExLjQ1MDE1MTkgLTAuMzY2MjM5MjQ5LDkuMDc1MDY2MyAxLjA5ODcxNzc1LDcuNjA5NTI1ODkgTDMuNjEwMzIyNjQsNS4wOTg1MDQ0MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
    },
    lXxq: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uL2Fycm93X2Rvd248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbi9hcnJvd19kb3duIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuMzUiPgogICAgICAgIDxwYXRoIGQ9Ik0xMy4zNTk4MTU2LDQuNzMxNzc4NzIgQzEzLjc4NDA5MjUsNC4zNzgyMTQ2NCAxNC40MTQ2NTcyLDQuNDM1NTM4NyAxNC43NjgyMjEzLDQuODU5ODE1NiBDMTUuMTIxNzg1NCw1LjI4NDA5MjUgMTUuMDY0NDYxMyw1LjkxNDY1NzIgMTQuNjQwMTg0NCw2LjI2ODIyMTI4IEw4LDExLjgwMTcwODMgTDEuMzU5ODE1Niw2LjI2ODIyMTI4IEMwLjkzNTUzODcwMyw1LjkxNDY1NzIgMC44NzgyMTQ2MzksNS4yODQwOTI1IDEuMjMxNzc4NzIsNC44NTk4MTU2IEMxLjU4NTM0MjgsNC40MzU1Mzg3IDIuMjE1OTA3NSw0LjM3ODIxNDY0IDIuNjQwMTg0NCw0LjczMTc3ODcyIEw4LDkuMTk4MjkxNzIgTDEzLjM1OTgxNTYsNC43MzE3Nzg3MiBaIiBpZD0iUGF0aC0yMiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==";
    },
    mehV: function (e, t, s) {
      e.exports =
        s.p +
        "static/iot-diagram-architecture-9368d88c8efc88718f9896a920ec1152.svg";
    },
    nme1: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return g;
        });
      var a = s("uRdJ"),
        n = s("9Hrx"),
        o = s("q1tI"),
        r = s.n(o),
        i = s("xEMu"),
        l = s("hlNj"),
        c = s("KS6O"),
        g = (function (e) {
          function t(t) {
            var s;
            return (
              ((s = e.call(this, t) || this).toggleConnectDetailsFn =
                t.toggleConnectDetailsFn),
              (s.selectLibraryView = s.selectLibraryView.bind(Object(a.a)(s))),
              (s.libraries = t.libraries),
              (s.selection = t.type),
              s
            );
          }
          Object(n.a)(t, e);
          var o = t.prototype;
          return (
            (o.selectLibraryView = function (e, t) {
              return "protocol" === e
                ? (this.populateLibraryData(t),
                  r.a.createElement(
                    "li",
                    { style: { width: "100%" } },
                    r.a.createElement(i.default, { data: t })
                  ))
                : "language" === e
                ? r.a.createElement(
                    "li",
                    { style: { width: "100%" } },
                    r.a.createElement(l.default, { data: t })
                  )
                : void 0;
            }),
            (o.populateLibraryData = function (e) {
              var t = Object(c.default)(e.id);
              t &&
                ((e.logo = t.protocol.logo),
                (e.languages = t.language.name),
                (e.displayName = t.displayName));
            }),
            (o.render = function () {
              var e = this;
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "ul",
                  null,
                  this.libraries.map(function (t) {
                    return r.a.createElement(
                      "div",
                      {
                        className: "library",
                        key: t.id,
                        onClick: function () {
                          return e.toggleConnectDetailsFn(t.id);
                        },
                      },
                      r.a.createElement(
                        "div",
                        { className: "logo-box" },
                        r.a.createElement("img", {
                          className: "logo",
                          src: s("OCAI")("" + t.logo),
                          alt: "",
                        })
                      ),
                      e.selectLibraryView(
                        e.selection,
                        t,
                        e.toggleConnectDetailsFn
                      )
                    );
                  })
                )
              );
            }),
            t
          );
        })(r.a.Component);
    },
    tZKj: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceCAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Solace C",
          protocol: {
            id: "smf",
            name: "SMF",
            logo: "./images/solace-logo.png",
            usesVPN: !0,
          },
          language: { name: "C", logo: "./images/c-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/c/",
            api:
              "https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/index.html",
            download: [
              {
                name: "AIX 6 PowerPC",
                group: "PowerPC",
                url: "https://products.solace.com/download/C_API_AIX6_PPC",
              },
              {
                name: "Linux 2.6 x86",
                group: "Linux",
                url: "https://products.solace.com/download/C_API_LINUX32",
              },
              {
                name: "Linux 2.6 x64",
                group: "Linux",
                url: "https://products.solace.com/download/C_API_LINUX64",
              },
              {
                name: "Windows x86",
                group: "Windows",
                url: "https://products.solace.com/download/C_API_WIN32",
              },
              {
                name: "Windows x64",
                group: "Windows",
                url: "https://products.solace.com/download/C_API_WIN64",
              },
              {
                name: "VS2015",
                group: "Windows",
                url: "https://products.solace.com/download/C_API_VS2015",
              },
              {
                name: "macOS",
                group: "Mac",
                url: "https://products.solace.com/download/C_API_OSX",
              },
              {
                name: "Solaris x86",
                group: "Sun",
                url: "https://products.solace.com/download/C_API_SUNOS32",
              },
              {
                name: "Solaris x64",
                group: "Sun",
                url: "https://products.solace.com/download/C_API_SUNOS64",
              },
              {
                name: "SPARC 32",
                group: "Sun",
                url: "https://products.solace.com/download/C_API_SPARC32",
              },
              {
                name: "SPARC 64",
                group: "Sun",
                url: "https://products.solace.com/download/C_API_SPARC64",
              },
            ],
          },
          step1: {
            name: "C API",
            getAPI: [
              {
                title: "Using the Solace Developer Portal",
                description:
                  'The C API library can be downloaded from the <a href="https://www.solace.com/downloads/" target="_blank">Solace Downloads</a>.',
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must connect a Solace session.",
              "The Solace session is the basis for all client communication with Solace messaging.",
            ],
            code: [
              {
                protocol: "SMF",
                sample:
                  '                /* solClient needs to be initialized before any other API calls. */ <br>                solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>                 <br>                // Context <br>                /* Context */ <br>                solClient_opaqueContext_pt context_p; <br>                solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>                <br>                solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) );<br>                 <br>                // A message callback to receive messages asynchronously <br>                solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>                { <br>                    &nbsp; printf ( "Received message:\\n" ); <br>                    &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                    &nbsp; printf ( "\\n" ); <br>                    &nbsp; return SOLCLIENT_CALLBACK_OK; <br>                } <br>                <br>                void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>                { <br>                    &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>                } <br>                 <br>                // Configure the Session properties <br>                /* Session */ <br>                solClient_opaqueSession_pt session_p; <br>                solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>                <br>                /* Session Properties */ <br>                const char     *sessionProps[50]; <br>                int             propIndex = 0; <br>                <br>                /* Configure the Session function information. */ <br>                sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>                sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>                sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>                sessionFuncInfo.eventInfo.user_p = NULL; <br>                <br>                /* Configure the Session properties. */ <br>                propIndex = 0; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>                sessionProps[propIndex++] = "<span class="value">${url}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>                sessionProps[propIndex++] = "<span class="value">${vpn}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>                sessionProps[propIndex++] = "<span class="value">${username}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>                sessionProps[propIndex] = "<span class="value">${password}</span>"; <br>                <br>                /* Create the Session. */ <br>                solClient_session_create ( ( char ** ) sessionProps, <br>                                        &nbsp; &nbsp; context_p, <br>                                        &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>                <br>                /* Connect the Session. */ <br>                solClient_session_connect ( session_p ); <br>                ',
              },
              {
                protocol: "Secured SMF",
                sample:
                  '                /* solClient needs to be initialized before any other API calls. */ <br>                solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>                 <br>                // Context <br>                /* Context */ <br>                solClient_opaqueContext_pt context_p; <br>                solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>                <br>                solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) ); <br>                 <br>                // A message callback to receive messages asynchronously <br>                solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>                { <br>                    &nbsp; printf ( "Received message:\\n" ); <br>                    &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                    &nbsp; printf ( "\\n" ); <br>                    &nbsp; return SOLCLIENT_CALLBACK_OK; <br>                } <br>                <br>                void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>                { <br>                    &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>                } <br>                 <br>                // Configure the Session properties <br>                /* Session */ <br>                solClient_opaqueSession_pt session_p; <br>                solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>                <br>                /* Session Properties */ <br>                const char     *sessionProps[50]; <br>                int             propIndex = 0; <br>                <br>                /* Configure the Session function information. */ <br>                sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>                sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>                sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>                sessionFuncInfo.eventInfo.user_p = NULL; <br>                <br>                /* Configure the Session properties. */ <br>                propIndex = 0; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>                sessionProps[propIndex++] = "<span class="value">${url}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>                sessionProps[propIndex++] = "<span class="value">${vpn}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>                sessionProps[propIndex++] = "<span class="value">${username}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>                sessionProps[propIndex] = "<span class="value">${password}</span>"; <br>                <br>                /* Create the Session. */ <br>                solClient_session_create ( ( char ** ) sessionProps, <br>                                        &nbsp; &nbsp; context_p, <br>                                        &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>                <br>                /* Connect the Session. */ <br>                solClient_session_connect ( session_p ); <br>                ',
              },
              {
                protocol: "Compressed SMF",
                name: "Compressed SMF",
                sample:
                  '                /* solClient needs to be initialized before any other API calls. */ <br>                solClient_initialize ( SOLCLIENT_LOG_DEFAULT_FILTER, NULL ); <br>                 <br>                // Context <br>                /* Context */ <br>                solClient_opaqueContext_pt context_p; <br>                solClient_context_createFuncInfo_t contextFuncInfo = SOLCLIENT_CONTEXT_CREATEFUNC_INITIALIZER; <br>                <br>                solClient_context_create ( SOLCLIENT_CONTEXT_PROPS_DEFAULT_WITH_CREATE_THREAD, &context_p, &contextFuncInfo, sizeof ( contextFuncInfo ) ); <br>                 <br>                // A message callback to receive messages asynchronously <br>                solClient_rxMsgCallback_returnCode_t messageReceiveCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_opaqueMsg_pt msg_p, void *user_p ) <br>                { <br>                    &nbsp; printf ( "Received message:\\n" ); <br>                    &nbsp; solClient_msg_dump ( msg_p, NULL, 0 ); <br>                    &nbsp; printf ( "\\n" ); <br>                    &nbsp; return SOLCLIENT_CALLBACK_OK; <br>                } <br>                <br>                void eventCallback ( solClient_opaqueSession_pt opaqueSession_p, solClient_session_eventCallbackInfo_pt eventInfo_p, void *user_p ) <br>                { <br>                    &nbsp; printf("Session EventCallback() called:  %s\\n", solClient_session_eventToString ( eventInfo_p->sessionEvent)); <br>                } <br>                 <br>                // Configure the Session properties <br>                /* Session */ <br>                solClient_opaqueSession_pt session_p; <br>                solClient_session_createFuncInfo_t sessionFuncInfo = SOLCLIENT_SESSION_CREATEFUNC_INITIALIZER; <br>                <br>                /* Session Properties */ <br>                const char     *sessionProps[50]; <br>                int             propIndex = 0; <br>                <br>                /* Configure the Session function information. */ <br>                sessionFuncInfo.rxMsgInfo.callback_p = messageReceiveCallback; <br>                sessionFuncInfo.rxMsgInfo.user_p = NULL; <br>                sessionFuncInfo.eventInfo.callback_p = eventCallback; <br>                sessionFuncInfo.eventInfo.user_p = NULL; <br>                <br>                /* Configure the Session properties. */ <br>                propIndex = 0; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_HOST; <br>                sessionProps[propIndex++] = "<span class="value">${url}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_VPN_NAME; <br>                sessionProps[propIndex++] = "<span class="value">${vpn}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_USERNAME; <br>                sessionProps[propIndex++] = "<span class="value">${username}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_PASSWORD; <br>                sessionProps[propIndex++] = "<span class="value">${password}</span>"; <br>                <br>                sessionProps[propIndex++] = SOLCLIENT_SESSION_PROP_COMPRESSION_LEVEL; <br>                sessionProps[propIndex++] = "9"; <br>                <br>                /* Create the Session. */ <br>                solClient_session_create ( ( char ** ) sessionProps, <br>                                        &nbsp; &nbsp; context_p, <br>                                        &nbsp; &nbsp; &session_p, &sessionFuncInfo, sizeof ( sessionFuncInfo ) ); <br>                <br>                /* Connect the Session. */ <br>                solClient_session_connect ( session_p ); <br>                ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url: "https://tutorials.solace.dev/c/publish-subscribe/",
              },
            ],
          },
        });
    },
    tazm: function (e, t, s) {
      e.exports =
        s.p + "static/event-mesh-diagram-d228119e06ed488bd934ce828c9d9dee.png";
    },
    uBDg: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTkgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ1LjIgKDQzNTE0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTE5LDAuMTkxNzc1ODYgQzE5LDIuOTM4MDUwODUgMTguNzkxNzc5OSwxMC42OTMzNDkyIDE4LjM3NTMzOTcsMjMuNDU3NjcwOSBDMTMuNTU0MzIwOCwyMC41NTY3OTE0IDExLjA2MTc1LDE3LjY5OTQzMDUgMTAuODk3NjI3MywxNC44ODU1ODgxIEMxMC43MzM1MDQ2LDEyLjA3MTc0NTggMTAuNTU5NDA4OCw4Ljc3OTM3NjggMTAuMzc1MzM5Nyw1LjAwODQ4MTIxIEMxMi42NjAzNDYsNS42Nzk1OTgxMiAxNS41MzUyMzI4LDQuMDc0MDI5NjcgMTksMC4xOTE3NzU4NiBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOSwxKSBzY2FsZSgtMSwxKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC42Ij4KICAgICAgICA8cGF0aCBkPSJNMTAuMTg2OTkyNSwyMS44NzYwNzAxIEMxMC4yMDUwOTIxLDIyLjQwOTUyNzEgMTAuMjIzNTk5NCwyMi45NTIzMzQ1IDEwLjI0MjUxNDMsMjMuNTA0NDk0MiBMMTEuNjUwODY4OSwyMi41NTc2OTcgQzExLjE0MjEyMTYsMjIuMzI5NzE0OSAxMC42NTQxODY1LDIyLjEwMjQ2MzggMTAuMTg2OTkyNSwyMS44NzYwNzAxIFogTTEuNTc2OTMxNDgsNi4xNTI2MDc4NSBDMS41NTA3Mjg3OSw1Ljc1OTE0Njk1IDEuNTI0MzcxMjYsNS4zNjAxNjU5NyAxLjQ5Nzg1ODkzLDQuOTU1NjY1MjYgTDAuMjA3OTcwOTc2LDUuOTc3NDc3NzIgQzAuNjMyOTQ5NDk2LDYuMTA3MjQwMiAxLjA4ODkxNzc5LDYuMTY1MzY0OSAxLjU3NjkzMTQ4LDYuMTUyNjA3ODUgWiBNOS42MDY5MjE2NSwyLjIxNDU1NzAxIEMxMC4xMjk2NDkzLDEuODExMzMyNjcgMTAuNjY4ODE3MywxLjM3NzY1MDQyIDExLjIyNDc0NDUsMC45MTM3Mzg1MzEgTDkuNTg0MDM5MjEsMC4xNDU5NTE2MjUgQzkuNTg0MDM5MjEsMC42NjEwODYzNjggOS41OTE2NjYwMSwxLjM1MDU2ODI2IDkuNjA2OTIxNjUsMi4yMTQ1NTcwMSBaIE05LjYwNjkyMTY1LDIuMjE0NTU3MDEgQzkuNjY5OTYyMjUsNS43ODQ4MDE5MiA5Ljg2MzI3MTEsMTIuMzM0ODgyOCAxMC4xODY5OTI1LDIxLjg3NjA3MDEgQzQuOTk1NTE0NzcsMTkuMzYwMzc0MiAyLjM2NTA5NjczLDE2Ljk1MDU0ODEgMi4xOTgyNDQxOSwxNC44MjAwOTYzIEMyLjAwMTg1MzU2LDEyLjMxMjQ4ODIgMS43OTQ3NDE5OSw5LjQyMzI2MTIzIDEuNTc2OTMxNDgsNi4xNTI2MDc4NSBDMy42NDg5NjkxNiw2LjA5ODQ0MzIyIDYuMjk4Njk5NTksNC43NjY0NzAzIDkuNjA2OTIxNjUsMi4yMTQ1NTcwMSBaIiBpZD0iUGF0aC0xOCIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42ODc2NzAsIDExLjgyNDcyMykgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTQuNjg3NjcwLCAtMTEuODI0NzIzKSAiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiM5Nzk3OTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNMTguNDg5OTE0NywxLjQ3ODcwNjI1IEMxNS41OTQ4MTM4LDQuNDg2MzA5NzEgMTMuMDc1Mjg4NSw1Ljg5MTAxMjUyIDEwLjkwNjI0Nyw1LjYyNjc2Nzc2IEMxMS4wNzg2MzI4LDkuMTI4NzMwMDcgMTEuMjQyMTQ1OCwxMi4yMDUzMjczIDExLjM5Njc3OSwxNC44NTY0NzQxIEMxMS41NDA4MTE0LDE3LjMyNTg3MzcgMTMuNjkxNDM1NywxOS45MTM4MTQgMTcuOTAzNjYyLDIyLjU3OTI4MDMgQzE4LjI0OTQ4NjEsMTEuOTI2MzYyOCAxOC40NDQ5MzI3LDQuODkwNDQ1NzQgMTguNDg5OTE0NywxLjQ3ODcwNjI1IFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
    },
    uuum: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "pahoJavaAPI",
          componentName: "connectivity-detail-template-v1",
          displayName: "Eclipse Paho Java Client",
          protocol: {
            id: "mqtt",
            name: "MQTT",
            logo: "./images/paho.png",
            usesVPN: !1,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial: "https://tutorials.solace.dev/java-mqtt-paho/",
            api: "http://www.eclipse.org/paho/files/javadoc/index.html",
            download: [
              {
                name: "Eclipse Paho",
                url: "https://www.eclipse.org/paho/clients/java/",
              },
            ],
          },
          step1: {
            name: "Eclipse Paho Java Client",
            getAPI: [
              {
                title: "Using Gradle",
                code: [
                  'compile("org.eclipse.paho:org.eclipse.paho.client.mqttv3:1.1.0")',
                ],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;dependency&gt; <br>                &nbsp&nbsp &lt;groupId&gt;org.eclipse.paho&lt/groupId&gt <br>                &nbsp&nbsp &lt;artifactId&gt;org.eclipse.paho.client.mqttv3&lt;/artifactId&gt; <br>                &nbsp&nbsp &lt;version&gt;1.1.0&lt;/version&gt; <br>                &lt;/dependency&gt",
                ],
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an MQTT client must connect a session.",
              "The MQTT session is the basis for all client communication with Solace messaging.",
            ],
            code: [
              {
                protocol: "MQTT",
                sample:
                  '                MqttClient mqttClient = new MqttClient("<span class="value">${url}</span>", "HelloWorldSub"); <br>                MqttConnectOptions connectionOptions = new MqttConnectOptions(); <br>                connectionOptions.setUsername("<span class="value">${username}</span>"); <br>                connectionOptions.setPassword("<span class="value">${password}</span>".toCharArray()) <br>                mqttClient.connect(connectionOptions);',
              },
              {
                protocol: "Secured MQTT",
                sample:
                  '                 MqttClient mqttClient = new MqttClient("<span class="value">${url}</span>", "HelloWorldSub"); <br>                MqttConnectOptions connectionOptions = new MqttConnectOptions(); <br>                connectionOptions.setUsername("<span class="value">${username}</span>"); <br>                connectionOptions.setPassword("<span class="value">${password}</span>".toCharArray()) <br>                mqttClient.connect(connectionOptions);',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://tutorials.solace.dev/java-mqtt-paho/publish-subscribe/",
              },
              {
                id: "persistence-queues",
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/java-mqtt-paho/persistence-with-queues/",
              },
              {
                id: "request-reply",
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url:
                  "https://tutorials.solace.dev/java-mqtt-paho/request-reply/",
              },
              {
                id: "confirmed-delivery",
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url:
                  "https://tutorials.solace.dev/java-mqtt-paho/confirmed-delivery/",
              },
              {
                id: "topic-mapping",
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/java-mqtt-paho/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    v1p5: function (e, t, s) {
      (function (e) {
        s("E9XD"),
          (t.__esModule = !0),
          (t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0);
        var a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
              }
              return e;
            },
          o = l(s("q1tI")),
          r = l(s("YVoz")),
          i = s("hFT/");
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c,
          g = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          p = function (e) {
            var t = d(e, i.TAG_NAMES.TITLE),
              s = d(e, i.HELMET_PROPS.TITLE_TEMPLATE);
            if (s && t)
              return s.replace(/%s/g, function () {
                return t;
              });
            var a = d(e, i.HELMET_PROPS.DEFAULT_TITLE);
            return t || a || void 0;
          },
          u = function (e) {
            return (
              d(e, i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {}
            );
          },
          M = function (e, t) {
            return t
              .filter(function (t) {
                return void 0 !== t[e];
              })
              .map(function (t) {
                return t[e];
              })
              .reduce(function (e, t) {
                return n({}, e, t);
              }, {});
          },
          I = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[i.TAG_NAMES.BASE];
              })
              .map(function (e) {
                return e[i.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function (t, s) {
                if (!t.length)
                  for (var a = Object.keys(s), n = 0; n < a.length; n++) {
                    var o = a[n].toLowerCase();
                    if (-1 !== e.indexOf(o) && s[o]) return t.concat(s);
                  }
                return t;
              }, []);
          },
          A = function (e, t, s) {
            var n = {};
            return s
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    L(
                      "Helmet: " +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        a(t[e]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function (t) {
                return t[e];
              })
              .reverse()
              .reduce(function (e, s) {
                var a = {};
                s.filter(function (e) {
                  for (
                    var s = void 0, o = Object.keys(e), r = 0;
                    r < o.length;
                    r++
                  ) {
                    var l = o[r],
                      c = l.toLowerCase();
                    -1 === t.indexOf(c) ||
                      (s === i.TAG_PROPERTIES.REL &&
                        "canonical" === e[s].toLowerCase()) ||
                      (c === i.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[c].toLowerCase()) ||
                      (s = c),
                      -1 === t.indexOf(l) ||
                        (l !== i.TAG_PROPERTIES.INNER_HTML &&
                          l !== i.TAG_PROPERTIES.CSS_TEXT &&
                          l !== i.TAG_PROPERTIES.ITEM_PROP) ||
                        (s = l);
                  }
                  if (!s || !e[s]) return !1;
                  var g = e[s].toLowerCase();
                  return (
                    n[s] || (n[s] = {}),
                    a[s] || (a[s] = {}),
                    !n[s][g] && ((a[s][g] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t);
                  });
                for (var o = Object.keys(a), l = 0; l < o.length; l++) {
                  var c = o[l],
                    g = (0, r.default)({}, n[c], a[c]);
                  n[c] = g;
                }
                return e;
              }, [])
              .reverse();
          },
          d = function (e, t) {
            for (var s = e.length - 1; s >= 0; s--) {
              var a = e[s];
              if (a.hasOwnProperty(t)) return a[t];
            }
            return null;
          },
          b =
            ((c = Date.now()),
            function (e) {
              var t = Date.now();
              t - c > 16
                ? ((c = t), e(t))
                : setTimeout(function () {
                    b(e);
                  }, 0);
            }),
          C = function (e) {
            return clearTimeout(e);
          },
          m =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                b
              : e.requestAnimationFrame || b,
          N =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                C
              : e.cancelAnimationFrame || C,
          L = function (e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          S = null,
          y = function (e, t) {
            var s = e.baseTag,
              a = e.bodyAttributes,
              n = e.htmlAttributes,
              o = e.linkTags,
              r = e.metaTags,
              l = e.noscriptTags,
              c = e.onChangeClientState,
              g = e.scriptTags,
              p = e.styleTags,
              u = e.title,
              M = e.titleAttributes;
            D(i.TAG_NAMES.BODY, a), D(i.TAG_NAMES.HTML, n), T(u, M);
            var I = {
                baseTag: E(i.TAG_NAMES.BASE, s),
                linkTags: E(i.TAG_NAMES.LINK, o),
                metaTags: E(i.TAG_NAMES.META, r),
                noscriptTags: E(i.TAG_NAMES.NOSCRIPT, l),
                scriptTags: E(i.TAG_NAMES.SCRIPT, g),
                styleTags: E(i.TAG_NAMES.STYLE, p),
              },
              A = {},
              d = {};
            Object.keys(I).forEach(function (e) {
              var t = I[e],
                s = t.newTags,
                a = t.oldTags;
              s.length && (A[e] = s), a.length && (d[e] = I[e].oldTags);
            }),
              t && t(),
              c(e, A, d);
          },
          j = function (e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          T = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = j(e)),
              D(i.TAG_NAMES.TITLE, t);
          },
          D = function (e, t) {
            var s = document.getElementsByTagName(e)[0];
            if (s) {
              for (
                var a = s.getAttribute(i.HELMET_ATTRIBUTE),
                  n = a ? a.split(",") : [],
                  o = [].concat(n),
                  r = Object.keys(t),
                  l = 0;
                l < r.length;
                l++
              ) {
                var c = r[l],
                  g = t[c] || "";
                s.getAttribute(c) !== g && s.setAttribute(c, g),
                  -1 === n.indexOf(c) && n.push(c);
                var p = o.indexOf(c);
                -1 !== p && o.splice(p, 1);
              }
              for (var u = o.length - 1; u >= 0; u--) s.removeAttribute(o[u]);
              n.length === o.length
                ? s.removeAttribute(i.HELMET_ATTRIBUTE)
                : s.getAttribute(i.HELMET_ATTRIBUTE) !== r.join(",") &&
                  s.setAttribute(i.HELMET_ATTRIBUTE, r.join(","));
            }
          },
          E = function (e, t) {
            var s = document.head || document.querySelector(i.TAG_NAMES.HEAD),
              a = s.querySelectorAll(e + "[" + i.HELMET_ATTRIBUTE + "]"),
              n = Array.prototype.slice.call(a),
              o = [],
              r = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var s = document.createElement(e);
                  for (var a in t)
                    if (t.hasOwnProperty(a))
                      if (a === i.TAG_PROPERTIES.INNER_HTML)
                        s.innerHTML = t.innerHTML;
                      else if (a === i.TAG_PROPERTIES.CSS_TEXT)
                        s.styleSheet
                          ? (s.styleSheet.cssText = t.cssText)
                          : s.appendChild(document.createTextNode(t.cssText));
                      else {
                        var l = void 0 === t[a] ? "" : t[a];
                        s.setAttribute(a, l);
                      }
                  s.setAttribute(i.HELMET_ATTRIBUTE, "true"),
                    n.some(function (e, t) {
                      return (r = t), s.isEqualNode(e);
                    })
                      ? n.splice(r, 1)
                      : o.push(s);
                }),
              n.forEach(function (e) {
                return e.parentNode.removeChild(e);
              }),
              o.forEach(function (e) {
                return s.appendChild(e);
              }),
              { oldTags: n, newTags: o }
            );
          },
          w = function (e) {
            return Object.keys(e).reduce(function (t, s) {
              var a = void 0 !== e[s] ? s + '="' + e[s] + '"' : "" + s;
              return t ? t + " " + a : a;
            }, "");
          },
          h = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function (t, s) {
              return (t[i.REACT_TAG_MAP[s] || s] = e[s]), t;
            }, t);
          },
          v = function (e, t, s) {
            switch (e) {
              case i.TAG_NAMES.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (s = t.titleAttributes),
                      ((a = { key: e })[i.HELMET_ATTRIBUTE] = !0),
                      (n = h(s, a)),
                      [o.default.createElement(i.TAG_NAMES.TITLE, n, e)]
                    );
                    var e, s, a, n;
                  },
                  toString: function () {
                    return (function (e, t, s, a) {
                      var n = w(s),
                        o = j(t);
                      return n
                        ? "<" +
                            e +
                            " " +
                            i.HELMET_ATTRIBUTE +
                            '="true" ' +
                            n +
                            ">" +
                            g(o, a) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            i.HELMET_ATTRIBUTE +
                            '="true">' +
                            g(o, a) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, s);
                  },
                };
              case i.ATTRIBUTE_NAMES.BODY:
              case i.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function () {
                    return h(t);
                  },
                  toString: function () {
                    return w(t);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, s) {
                        var a,
                          n = (((a = { key: s })[i.HELMET_ATTRIBUTE] = !0), a);
                        return (
                          Object.keys(t).forEach(function (e) {
                            var s = i.REACT_TAG_MAP[e] || e;
                            if (
                              s === i.TAG_PROPERTIES.INNER_HTML ||
                              s === i.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var a = t.innerHTML || t.cssText;
                              n.dangerouslySetInnerHTML = { __html: a };
                            } else n[s] = t[e];
                          }),
                          o.default.createElement(e, n)
                        );
                      });
                    })(e, t);
                  },
                  toString: function () {
                    return (function (e, t, s) {
                      return t.reduce(function (t, a) {
                        var n = Object.keys(a)
                            .filter(function (e) {
                              return !(
                                e === i.TAG_PROPERTIES.INNER_HTML ||
                                e === i.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function (e, t) {
                              var n =
                                void 0 === a[t]
                                  ? t
                                  : t + '="' + g(a[t], s) + '"';
                              return e ? e + " " + n : n;
                            }, ""),
                          o = a.innerHTML || a.cssText || "",
                          r = -1 === i.SELF_CLOSING_TAGS.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          " " +
                          i.HELMET_ATTRIBUTE +
                          '="true" ' +
                          n +
                          (r ? "/>" : ">" + o + "</" + e + ">")
                        );
                      }, "");
                    })(e, t, s);
                  },
                };
            }
          };
        (t.convertReactPropstoHtmlAttributes = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, s) {
            return (t[i.HTML_TAG_MAP[s] || s] = e[s]), t;
          }, t);
        }),
          (t.handleClientStateChange = function (e) {
            S && N(S),
              e.defer
                ? (S = m(function () {
                    y(e, function () {
                      S = null;
                    });
                  }))
                : (y(e), (S = null));
          }),
          (t.mapStateOnServer = function (e) {
            var t = e.baseTag,
              s = e.bodyAttributes,
              a = e.encode,
              n = e.htmlAttributes,
              o = e.linkTags,
              r = e.metaTags,
              l = e.noscriptTags,
              c = e.scriptTags,
              g = e.styleTags,
              p = e.title,
              u = void 0 === p ? "" : p,
              M = e.titleAttributes;
            return {
              base: v(i.TAG_NAMES.BASE, t, a),
              bodyAttributes: v(i.ATTRIBUTE_NAMES.BODY, s, a),
              htmlAttributes: v(i.ATTRIBUTE_NAMES.HTML, n, a),
              link: v(i.TAG_NAMES.LINK, o, a),
              meta: v(i.TAG_NAMES.META, r, a),
              noscript: v(i.TAG_NAMES.NOSCRIPT, l, a),
              script: v(i.TAG_NAMES.SCRIPT, c, a),
              style: v(i.TAG_NAMES.STYLE, g, a),
              title: v(i.TAG_NAMES.TITLE, { title: u, titleAttributes: M }, a),
            };
          }),
          (t.reducePropsToState = function (e) {
            return {
              baseTag: I([i.TAG_PROPERTIES.HREF], e),
              bodyAttributes: M(i.ATTRIBUTE_NAMES.BODY, e),
              defer: d(e, i.HELMET_PROPS.DEFER),
              encode: d(e, i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: M(i.ATTRIBUTE_NAMES.HTML, e),
              linkTags: A(
                i.TAG_NAMES.LINK,
                [i.TAG_PROPERTIES.REL, i.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: A(
                i.TAG_NAMES.META,
                [
                  i.TAG_PROPERTIES.NAME,
                  i.TAG_PROPERTIES.CHARSET,
                  i.TAG_PROPERTIES.HTTPEQUIV,
                  i.TAG_PROPERTIES.PROPERTY,
                  i.TAG_PROPERTIES.ITEM_PROP,
                ],
                e
              ),
              noscriptTags: A(
                i.TAG_NAMES.NOSCRIPT,
                [i.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: u(e),
              scriptTags: A(
                i.TAG_NAMES.SCRIPT,
                [i.TAG_PROPERTIES.SRC, i.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: A(i.TAG_NAMES.STYLE, [i.TAG_PROPERTIES.CSS_TEXT], e),
              title: p(e),
              titleAttributes: M(i.ATTRIBUTE_NAMES.TITLE, e),
            };
          }),
          (t.requestAnimationFrame = m),
          (t.warn = L);
      }.call(this, s("yLpj")));
    },
    v99S: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iRGV2X1BvcnRhbCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk3LjAwMDAwMCwgLTk5MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OTcuMDAwMDAwLCA5OTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgMzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LDYuNzUgTDI4Ljc1LDYuNzUiIGlkPSJMaW5lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC42NDE0NDEyMzEiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDEsNi43NSBMNDksNi43NSIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNjQxNDQxMjMxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTciIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIzMCIgeT0iMiIgd2lkdGg9IjkuMjUiIGhlaWdodD0iOS4yNSIgcng9IjQuNjI1Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE5Ljc1IEwyOC43NSwxOS43NSIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjY0MTQ0MTIzMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MSwxOS45MTY2NjY3IEw0OSwxOS45MTY2NjY3IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNSIgb3BhY2l0eT0iMC42NDE0NDEyMzEiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHg9IjMwIiB5PSIxNSIgd2lkdGg9IjkuMjUiIGhlaWdodD0iOS4yNSIgcng9IjQuNjI1Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjUwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeD0iMSIgeT0iMSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjI1IiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktMiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMy44IiB5PSIzLjg1NzE0Mjg2IiB3aWR0aD0iMTEuNCIgaGVpZ2h0PSI1LjQiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS00IiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIzLjgiIHk9IjEwLjgiIHdpZHRoPSIxMS40IiBoZWlnaHQ9IjUuNCIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTYiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjMuOCIgeT0iMTcuNzQyODU3MSIgd2lkdGg9IjExLjQiIGhlaWdodD0iNS40IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNC1Db3B5LTMiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTciIGhlaWdodD0iMjUiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzMtQ29weS0yIiBmaWxsLW9wYWNpdHk9IjAuNDAwMDAwMDA2IiBmaWxsPSIjRkZGRkZGIiB4PSIzLjgiIHk9IjMuODU3MTQyODYiIHdpZHRoPSIxMS40IiBoZWlnaHQ9IjUuNCIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zMy1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC40MDAwMDAwMDYiIGZpbGw9IiNGRkZGRkYiIHg9IjMuOCIgeT0iMTAuOCIgd2lkdGg9IjExLjQiIGhlaWdodD0iNS40IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMzLUNvcHktNiIgZmlsbC1vcGFjaXR5PSIwLjQwMDAwMDAwNiIgZmlsbD0iI0ZGRkZGRiIgeD0iMy44IiB5PSIxNy43NDI4NTcxIiB3aWR0aD0iMTEuNCIgaGVpZ2h0PSI1LjQiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";
    },
    vqUz: function (e, t, s) {
      e.exports =
        s.p +
        "static/microservices-diagram-choreography-4dc1e8ac81d408d12be210283881ebce.svg";
    },
    vrFN: function (e, t, s) {
      "use strict";
      var a = s("q1tI"),
        n = s.n(a),
        o = s("TJpk"),
        r = s.n(o),
        i = s("Wbzz");
      function l(e) {
        var t = e.description,
          s = e.lang,
          a = e.meta,
          o = e.title,
          l = Object(i.useStaticQuery)("63159454").site,
          c = t || l.siteMetadata.description;
        return n.a.createElement(r.a, {
          htmlAttributes: { lang: s },
          title: o,
          titleTemplate: "%s | " + l.siteMetadata.title,
          meta: [
            { name: "description", content: c },
            { property: "og:title", content: o },
            { property: "og:description", content: c },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: l.siteMetadata.author },
            { name: "twitter:title", content: o },
            { name: "twitter:description", content: c },
          ].concat(a),
        });
      }
      (l.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = l);
    },
    w4SK: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          id: "solaceQpid1API",
          componentName: "connectivity-detail-template-v1",
          displayName: "QPID JMS 1.1",
          protocol: {
            id: "amqp",
            name: "AMQP",
            logo: "./images/qpid.png",
            usesVPN: !1,
          },
          language: { name: "Java", logo: "./images/java-logo.png" },
          links: {
            tutorial:
              "https://tutorials.solace.dev/java-amqp-qpid-jms1/publish-subscribe/",
            api:
              "https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html",
            download: [
              {
                name: "Apache QPID JMS 1.1",
                url:
                  "http://www.apache.org/dyn/closer.lua/qpid/jms-amqp-0-x/6.3.0/binaries/apache-qpid-jms-amqp-0-x-6.3.0-bin.tar.gz",
              },
            ],
          },
          step1: {
            name: "Apache QPID JMS client",
            getAPI: [
              {
                title: "Using Gradle",
                code: [
                  'dependencies { <br>                    &nbsp; compile("org.apache.qpid:qpid-jms-client:0.27.0") <br>                }',
                ],
              },
              {
                title: "Using Maven",
                code: [
                  "&lt;dependency&gt; <br>                &nbsp; &lt;groupId&gt;org.apache.qpid&lt;/groupId&gt; <br>                &nbsp; &lt;artifactId&gt;qpid-jms-client&lt;/artifactId&gt; <br>                &nbsp; &lt;version&gt;0.27.0&lt;/version&gt; <br>            &lt;/dependency&gt;",
                ],
              },
            ],
          },
          step2: {
            introduction: [
              "In order to send or receive messages, an application must start a JMS connection",
            ],
            code: [
              {
                protocol: "AMQP",
                sample:
                  '                ConnectionFactory connectionFactory = new JmsConnectionFactory("<span class="value">${username}</span>", "<span class="value">${password}</span>", "<span class="value">${url}</span>"); <br>                Connection connection = connectionFactory.createConnection(); <br>                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE); <br>                ',
              },
              {
                protocol: "Secured AMQP",
                sample:
                  '                ConnectionFactory connectionFactory = new JmsConnectionFactory("<span class="value">${username}</span>", "<span class="value">${password}</span>", "<span class="value">${url}</span>"); <br>                Connection connection = connectionFactory.createConnection(); <br>                Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE); <br>                ',
              },
            ],
            conclusion: [
              "At this point your client is connected to your Solace PubSub+ Event Broker",
            ],
          },
          step3: {
            tutorials: [
              {
                id: "publish-subscribe",
                name: "Publish/ <br>                        Subscribe",
                logo: "./images/publish-subscribe.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms1/publish-subscribe/",
              },
              {
                name: "Persistence <br>                        with Queues",
                logo: "./images/persistence-queues.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms1/persistence-with-queues/",
              },
              {
                name: "Request/ <br>                        Reply",
                logo: "./images/request-reply.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms1/request-reply/",
              },
              {
                name: "Confirmed <br>                        Delivery",
                logo: "./images/confirmed-delivery.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms1/confirmed-delivery/",
              },
              {
                name: "Topic to <br>                        Queue Mapping",
                logo: "./images/topic-mapping.svg",
                url:
                  "https://tutorials.solace.dev/java-amqp-qpid-jms1/topic-to-queue-mapping/",
              },
            ],
          },
        });
    },
    xEMu: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return r;
        });
      var a = s("9Hrx"),
        n = s("q1tI"),
        o = s.n(n),
        r = (function (e) {
          function t(t) {
            var s;
            return ((s = e.call(this, t) || this).library = t.data), s;
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              return o.a.createElement(
                "div",
                { style: { display: "flex" } },
                o.a.createElement(
                  "div",
                  { className: "description" },
                  o.a.createElement(
                    "div",
                    { className: "name" },
                    this.library.displayName
                  ),
                  this.library.languages
                ),
                o.a.createElement(
                  "div",
                  { className: "links" },
                  o.a.createElement(
                    "div",
                    { className: "get-started" },
                    "Get Started"
                  )
                )
              );
            }),
            t
          );
        })(o.a.Component);
    },
    "yA+S": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAAM1BMVEVMaXEAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJXg/Qg3AAAAEHRSTlMAYNAw8BDgQIDAIKCQULBwcYwHoAAAAAlwSFlzAAAJOgAACToB8GSSSgAAAcRJREFUWIXtltuSgyAQRLnfROn//9otGEglUSkwedjdsh9SUfA4MzSD7NatPyZpx6TP01oxKHHOcKMM9Bh+pPb2ZswwxIg9Up/xjbX9qj883NV6/H5GyCvyGcOXUir5AYPX9diuMYKzecQwxmIe1ynOMnIEy6JKBAnwcd4fHFDlKclaVfL1eTPcM1ZA6AgVQ41KwEjea4Z7hoM4eCXvJHPESAfztJljtNmBO1c9xpapOCxQHgzkMbOWQUE+GWQkIFdT5rXw+WehweGaaufJF1pBJc2YFQCn1fKbHGIs2Qy2+JPswbSAomQAdeyRN4aHcMUXilKg+pSSZL/bMQZ5NTzNN20PTDLs03x/kaFrAtfiMH6lB9v9laqrNzHIKEcFJ7fycleq0ke0Ov8GefcYd4KmCmCzLDhFb+eASyfbf+9TXmMX7XDir7kdMYyrMvD5T3OXdqa001BfcL5f0sGpqNqgtI8iul4zjP5VohXzTZ3+cTQ5Hyk2PG7o/F3Z6x97rXnXCcBTOGFRAF/w2D9DaodTcao29WIKwRg3UJHTajqouBogziHyltNl1a21WyHJzpd2l3MtiVe5ctptF0O4detfiDH2A6XVK469rvsTAAAAAElFTkSuQmCC";
    },
    yi2q: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NDcuOCA0NjguNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQ3LjggNDY4Ljc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDBBRDkzO30KCS5zdDF7ZmlsbDojNDc0ODQ3O30KCS5zdDJ7ZmlsbDojM0EzQTNBO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1Mi42LDEyMS41Yy03LjEtMS45LTktNC42LTkuNC0xMS43Yy0yLjgtNTUtNTQuMy05NC45LTEwOC40LTg0LjRjLTI5LjIsNS43LTUwLDIyLjUtNjQuNyw0OAoJCQkJYy0xLjQsMC0xLjcsMC4xLTIsMGMtMzcuNi0xNC42LTYyLTIuOS03My44LDM1Yy0wLjgsMi42LTMuNyw1LTYuMiw2LjRjLTI5LjUsMTUuNC00My44LDQ0LjYtMzYuOCw3NS44CgkJCQljNC4xLDE3LjksMTQuNywzMi44LDI5LjMsNDIuMXYtMTcuNWMtOC45LTguMS0xNS0xOS4zLTE3LjItMzIuNWMtMy44LTIzLjksMTEuNy00OSwzNS44LTU3LjhjMi43LTEsNS40LTIsOC4zLTMKCQkJCWMtMC45LTE4LDUuMy0zMiwyMi40LTM4LjljMTcuOS03LjIsMzEuNSwwLjksNDQuNCwxNC4zYzE5LjItNDYuOSw1MS41LTY5LjQsMTAyLjMtNTUuN2MxOS4xLDUuMiwzMi45LDE4LjEsNDMsMzUKCQkJCWMxMC4xLDE2LjksMTEuNCwzNS43LDkuMiw1NS4zYzMuNSwwLjIsNiwwLjUsOC41LDAuNmMyNy4xLDEsNDcuNywyMi43LDQ3LjMsNDkuOGMtMC40LDI1LjktMjEuNSw0Ni40LTQ4LjIsNDYuNAoJCQkJYy0zMS42LDAuMS02My4yLDAuMS05NC45LDAuMXYxNC41YzMyLTAuMSw2NC0wLjIsOTYtMC40YzMxLjMtMC4yLDU2LjctMjQsNjAuMi01My45QzUwMS42LDE1Ny40LDQ4My40LDEyOS43LDQ1Mi42LDEyMS41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI0Mi4yLDE1OC41IDI0Mi4yLDE4OS44IDI5NC4yLDE4OS44IDI5NC4yLDI0MS44IDMyNS41LDI0MS44IDMyNS41LDE1OC41IAkJCSIvPgoJCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwNC44LDk1LjkgMzA0LjgsMTI3LjIgMzU2LjgsMTI3LjIgMzU2LjgsMTc5LjIgMzg4LjEsMTc5LjIgMzg4LjEsOTUuOSAJCQkiLz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNjIuOSwyODcuMiAxOTYuOCwyODcuMiAxOTYuOCwyMjEuMSAyNjIuOSwyMjEuMSAJCQkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE2LjksNDA2LjZjLTQuMSwwLTcuNCwxLjQtOS43LDQuMXMtMy42LDYuNS0zLjYsMTEuM2MwLDQuOSwxLjEsOC43LDMuNCwxMS40czUuNiw0LDkuOCw0CgkJYzIuNiwwLDUuNi0wLjUsOC45LTEuNHYzLjhjLTIuNiwxLTUuOCwxLjUtOS42LDEuNWMtNS41LDAtOS44LTEuNy0xMi44LTVzLTQuNS04LjEtNC41LTE0LjNjMC0zLjksMC43LTcuMiwyLjItMTAuMQoJCWMxLjQtMi45LDMuNS01LjEsNi4zLTYuN2MyLjctMS42LDUuOS0yLjQsOS42LTIuNGMzLjksMCw3LjQsMC43LDEwLjMsMi4ybC0xLjgsMy43QzIyMi42LDQwNy4yLDIxOS43LDQwNi42LDIxNi45LDQwNi42eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0OS43LDQ0MC43di0zNy41aDQuNHYzMy41aDE2LjV2My45SDI0OS43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyNS4yLDQyMS45YzAsNi0xLjUsMTAuNy00LjUsMTQuMXMtNy4yLDUuMS0xMi42LDUuMWMtNS41LDAtOS44LTEuNy0xMi44LTUuMXMtNC41LTguMS00LjUtMTQuMwoJCWMwLTYuMSwxLjUtMTAuOCw0LjUtMTQuMmMzLTMuNCw3LjMtNSwxMi44LTVjNS40LDAsOS42LDEuNywxMi42LDUuMUMzMjMuNyw0MTEuMiwzMjUuMiw0MTUuOSwzMjUuMiw0MjEuOXogTTI5NS4zLDQyMS45CgkJYzAsNS4xLDEuMSw4LjksMy4yLDExLjVjMi4yLDIuNiw1LjMsMy45LDkuNCwzLjljNC4yLDAsNy4zLTEuMyw5LjQtMy45YzIuMS0yLjYsMy4yLTYuNSwzLjItMTEuNmMwLTUtMS4xLTguOS0zLjItMTEuNQoJCWMtMi4xLTIuNi01LjItMy45LTkuNC0zLjljLTQuMiwwLTcuMywxLjMtOS41LDMuOUMyOTYuNCw0MTMuMSwyOTUuMyw0MTYuOSwyOTUuMyw0MjEuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzcuNiw0MDMuMnYyNC4yYzAsNC4zLTEuMyw3LjYtMy45LDEwLjFjLTIuNiwyLjQtNi4xLDMuNy0xMC42LDMuN3MtOC0xLjItMTAuNS0zLjdzLTMuNy01LjgtMy43LTEwLjF2LTI0LjEKCQloNC40djI0LjRjMCwzLjEsMC45LDUuNSwyLjYsNy4yczQuMiwyLjUsNy41LDIuNWMzLjIsMCw1LjYtMC44LDcuMy0yLjVjMS43LTEuNywyLjYtNC4xLDIuNi03LjJ2LTI0LjRIMzc3LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMzLjEsNDIxLjZjMCw2LjItMS43LDEwLjktNSwxNC4yYy0zLjQsMy4zLTguMiw0LjktMTQuNSw0LjloLTEwLjR2LTM3LjVoMTEuNWM1LjgsMCwxMC4zLDEuNiwxMy42LDQuOAoJCUM0MzEuNSw0MTEuMyw0MzMuMSw0MTUuOCw0MzMuMSw0MjEuNnogTTQyOC41LDQyMS43YzAtNC45LTEuMi04LjYtMy43LTExYy0yLjUtMi41LTYuMS0zLjctMTAuOS0zLjdoLTYuM3YyOS45aDUuMwoJCWM1LjIsMCw5LjEtMS4zLDExLjctMy44QzQyNy4yLDQzMC41LDQyOC41LDQyNi43LDQyOC41LDQyMS43eiIvPgo8L2c+CjxnPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc2LjgsMzY4LjVjMCw1LjUtMiw5LjgtNiwxMi45Yy00LDMuMS05LjQsNC42LTE2LjMsNC42Yy03LjQsMC0xMy4yLTEtMTcuMi0yLjl2LTdjMi42LDEuMSw1LjQsMS45LDguNCwyLjYKCQljMywwLjYsNiwwLjksOSwwLjljNC45LDAsOC41LTAuOSwxMS0yLjhjMi41LTEuOCwzLjctNC40LDMuNy03LjdjMC0yLjItMC40LTQtMS4zLTUuM2MtMC45LTEuNC0yLjMtMi43LTQuNC0zLjgKCQljLTItMS4yLTUuMi0yLjUtOS4zLTRjLTUuOC0yLjEtMTAtNC42LTEyLjUtNy40Yy0yLjUtMi45LTMuOC02LjYtMy44LTExLjJjMC00LjgsMS44LTguNyw1LjQtMTEuNWMzLjYtMi45LDguNC00LjMsMTQuNC00LjMKCQljNi4yLDAsMTIsMS4xLDE3LjIsMy40bC0yLjMsNi4zYy01LjItMi4yLTEwLjItMy4zLTE1LjEtMy4zYy0zLjksMC02LjksMC44LTksMi41Yy0yLjIsMS43LTMuMyw0LTMuMyw2LjljMCwyLjIsMC40LDQsMS4yLDUuMwoJCWMwLjgsMS40LDIuMiwyLjcsNC4xLDMuOGMxLjksMS4yLDQuOCwyLjQsOC43LDMuOGM2LjYsMi4zLDExLjEsNC45LDEzLjYsNy41Qzc1LjUsMzYwLjcsNzYuOCwzNjQuMiw3Ni44LDM2OC41eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyNC43LDM2MS42YzAsNy43LTEuOSwxMy42LTUuOCwxNy45Yy0zLjksNC4zLTkuMiw2LjUtMTYsNi41Yy00LjIsMC03LjktMS0xMS4yLTNjLTMuMy0yLTUuOC00LjgtNy41LTguNQoJCWMtMS44LTMuNy0yLjctOC0yLjctMTNjMC03LjcsMS45LTEzLjYsNS43LTE3LjljMy44LTQuMyw5LjEtNi40LDE2LTYuNGM2LjYsMCwxMS44LDIuMiwxNS43LDYuNgoJCUMxMjIuOCwzNDguMiwxMjQuNywzNTQuMiwxMjQuNywzNjEuNnogTTg4LjksMzYxLjZjMCw2LDEuMiwxMC42LDMuNiwxMy43YzIuNCwzLjEsNS45LDQuNywxMC42LDQuN3M4LjItMS42LDEwLjYtNC43CgkJYzIuNC0zLjEsMy42LTcuNywzLjYtMTMuN2MwLTYtMS4yLTEwLjUtMy42LTEzLjZjLTIuNC0zLjEtNi00LjctMTAuNy00LjdjLTQuNywwLTguMiwxLjUtMTAuNSw0LjZDOTAuMSwzNTEsODguOSwzNTUuNiw4OC45LDM2MS42CgkJeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEzOS45LDM4NS4yaC03LjF2LTY2LjdoNy4xVjM4NS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3OS41LDM4NS4ybC0xLjQtNi43aC0wLjNjLTIuMywyLjktNC43LDQuOS03LDZjLTIuMywxLTUuMiwxLjYtOC43LDEuNmMtNC43LDAtOC4zLTEuMi0xMS0zLjYKCQljLTIuNi0yLjQtNC01LjgtNC0xMC4yYzAtOS41LDcuNi0xNC41LDIyLjgtMTQuOWw4LTAuM3YtMi45YzAtMy43LTAuOC02LjQtMi40LTguMmMtMS42LTEuOC00LjEtMi42LTcuNi0yLjYKCQljLTMuOSwwLTguMywxLjItMTMuMywzLjZsLTIuMi01LjRjMi4zLTEuMyw0LjktMi4yLDcuNi0zYzIuOC0wLjcsNS41LTEuMSw4LjMtMS4xYzUuNiwwLDkuOCwxLjIsMTIuNSwzLjdzNC4xLDYuNSw0LjEsMTJ2MzIuMQoJCUgxNzkuNXogTTE2My40LDM4MC4xYzQuNCwwLDcuOS0xLjIsMTAuNC0zLjZjMi41LTIuNCwzLjgtNS44LDMuOC0xMC4yVjM2MmwtNy4xLDAuM2MtNS43LDAuMi05LjcsMS4xLTEyLjIsMi42CgkJYy0yLjUsMS42LTMuOCw0LTMuOCw3LjNjMCwyLjYsMC44LDQuNSwyLjMsNS45QzE1OC40LDM3OS41LDE2MC42LDM4MC4xLDE2My40LDM4MC4xeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIxMy44LDM4NmMtNi44LDAtMTIuMS0yLjEtMTUuOC02LjNjLTMuNy00LjItNS42LTEwLjEtNS42LTE3LjhjMC03LjksMS45LTEzLjksNS43LTE4LjIKCQljMy44LTQuMyw5LjItNi40LDE2LjItNi40YzIuMywwLDQuNSwwLjIsNi44LDAuN2MyLjMsMC41LDQsMS4xLDUuMywxLjdsLTIuMiw2Yy0xLjYtMC42LTMuMy0xLjItNS4xLTEuNmMtMS45LTAuNC0zLjUtMC42LTQuOS0wLjYKCQljLTkuNSwwLTE0LjMsNi4xLTE0LjMsMTguM2MwLDUuOCwxLjIsMTAuMiwzLjUsMTMuM2MyLjMsMy4xLDUuOCw0LjYsMTAuNCw0LjZjMy45LDAsNy45LTAuOCwxMi0yLjV2Ni4zCgkJQzIyMi42LDM4NS4yLDIxOC42LDM4NiwyMTMuOCwzODZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjUyLjMsMzg2Yy02LjksMC0xMi40LTIuMS0xNi40LTYuM2MtNC00LjItNi0xMC4xLTYtMTcuNmMwLTcuNiwxLjktMTMuNiw1LjYtMTguMWMzLjctNC41LDguNy02LjcsMTUtNi43CgkJYzUuOSwwLDEwLjUsMS45LDE0LDUuOGMzLjQsMy45LDUuMSw5LDUuMSwxNS4zdjQuNWgtMzIuNGMwLjEsNS41LDEuNSw5LjcsNC4yLDEyLjZjMi42LDIuOSw2LjQsNC4zLDExLjIsNC4zCgkJYzUuMSwwLDEwLjEtMS4xLDE1LTMuMnY2LjNjLTIuNSwxLjEtNC45LDEuOS03LjEsMi4zQzI1OC4yLDM4NS44LDI1NS41LDM4NiwyNTIuMywzODZ6IE0yNTAuNCwzNDMuM2MtMy44LDAtNi44LDEuMi05LDMuNwoJCWMtMi4yLDIuNS0zLjYsNS45LTQsMTAuMkgyNjJjMC00LjUtMS03LjktMy0xMC4zQzI1NywzNDQuNSwyNTQuMSwzNDMuMywyNTAuNCwzNDMuM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMzQuOCwzNDAuNWMwLDYuMS0yLjEsMTAuNy02LjIsMTMuOWMtNC4xLDMuMi05LjksNC44LTE3LjUsNC44aC05Ljd2MjUuOWgtNC40di02Mi43aDE1LjQKCQlDMzI3LjQsMzIyLjUsMzM0LjgsMzI4LjUsMzM0LjgsMzQwLjV6IE0zMDEuNSwzNTUuNWg4LjZjNy4xLDAsMTIuMi0xLjIsMTUuMy0zLjVjMy4xLTIuMyw0LjctNi4xLDQuNy0xMS4zYzAtNC44LTEuNS04LjQtNC41LTEwLjcKCQljLTMtMi4zLTcuNi0zLjUtMTMuOC0zLjVoLTEwLjRWMzU1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzQ2LjcsMzM4LjV2MzAuMmMwLDQuNywxLDguMSwzLDEwLjJjMiwyLjEsNSwzLjIsOS4yLDMuMmM1LjUsMCw5LjYtMS40LDEyLjItNC4yYzIuNi0yLjgsMy45LTcuNCwzLjktMTMuNwoJCXYtMjUuN2g0LjJ2NDYuNmgtMy42bC0wLjgtNi40aC0wLjNjLTMsNC45LTguNCw3LjMtMTYuMiw3LjNjLTEwLjYsMC0xNS45LTUuNy0xNS45LTE3di0zMC40SDM0Ni43eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQxMC4xLDMzNy42YzYuNSwwLDExLjQsMi4xLDE0LjcsNi4yYzMuMyw0LjEsNSwxMC4xLDUsMThjMCw3LjctMS43LDEzLjctNS4yLDE3LjljLTMuNSw0LjItOC40LDYuMy0xNC42LDYuMwoJCWMtMy4zLDAtNi4zLTAuNy05LTIuMWMtMi43LTEuNC00LjgtMy4zLTYuMy01LjhoLTAuNGwtMS4yLDdoLTIuN3YtNjYuN2g0LjJ2MTYuOGMwLDIuNS0wLjEsNC44LTAuMiw2LjlsLTAuMSwzLjZoMC4zCgkJYzEuOC0yLjgsMy45LTQuOSw2LjQtNi4yQzQwMy42LDMzOC4zLDQwNi42LDMzNy42LDQxMC4xLDMzNy42eiBNNDEwLDM0MS41Yy01LjUsMC05LjQsMS42LTExLjgsNC43Yy0yLjQsMy4xLTMuNiw4LjMtMy42LDE1LjZ2MC43CgkJYzAsNywxLjIsMTIuMSwzLjcsMTUuMWMyLjUsMy4xLDYuMyw0LjYsMTEuNiw0LjZjNS4xLDAsOC45LTEuOCwxMS41LTUuM3MzLjktOC42LDMuOS0xNS4yQzQyNS4zLDM0OC4yLDQyMC4yLDM0MS41LDQxMCwzNDEuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00NzQsMzY5YzAsNS4yLTEuOSw5LjQtNS44LDEyLjRjLTMuOCwzLjEtOSw0LjYtMTUuMyw0LjZjLTcuNywwLTEzLjUtMC44LTE3LjYtMi41di00LjQKCQljNC41LDEuOSwxMC4zLDIuOSwxNy4zLDIuOWM1LjEsMCw5LjItMS4yLDEyLjItMy41YzMtMi40LDQuNS01LjUsNC41LTkuM2MwLTIuNC0wLjUtNC4zLTEuNS01LjljLTEtMS42LTIuNi0zLTQuOS00LjMKCQljLTIuMy0xLjMtNS42LTIuNy05LjktNC4yYy02LjQtMi4yLTEwLjgtNC42LTEzLjMtNy4xYy0yLjQtMi42LTMuNy02LTMuNy0xMC4yYzAtNC43LDEuOC04LjUsNS41LTExLjVjMy43LTMsOC40LTQuNCwxNC4yLTQuNAoJCWM1LjksMCwxMS40LDEuMSwxNi42LDMuM2wtMS42LDMuOGMtNS4yLTIuMi0xMC4yLTMuMy0xNC45LTMuM2MtNC42LDAtOC4zLDEuMS0xMS4xLDMuMmMtMi43LDIuMS00LjEsNS4xLTQuMSw4LjcKCQljMCwyLjMsMC40LDQuMiwxLjMsNS43YzAuOCwxLjUsMi4yLDIuOCw0LjEsNGMxLjksMS4yLDUuMiwyLjYsOS45LDQuM2M0LjksMS43LDguNiwzLjMsMTEsNC45YzIuNSwxLjYsNC4zLDMuNCw1LjQsNS40CgkJQzQ3My40LDM2My43LDQ3NCwzNjYuMSw0NzQsMzY5eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQ4NS41LDMzOC41djMwLjJjMCw0LjcsMSw4LjEsMywxMC4yYzIsMi4xLDUsMy4yLDkuMiwzLjJjNS41LDAsOS42LTEuNCwxMi4yLTQuMmMyLjYtMi44LDMuOS03LjQsMy45LTEzLjcKCQl2LTI1LjdoNC4ydjQ2LjZoLTMuNmwtMC44LTYuNGgtMC4zYy0zLDQuOS04LjQsNy4zLTE2LjIsNy4zYy0xMC42LDAtMTUuOS01LjctMTUuOS0xN3YtMzAuNEg0ODUuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01NDguOSwzMzcuNmM2LjUsMCwxMS40LDIuMSwxNC43LDYuMmMzLjMsNC4xLDUsMTAuMSw1LDE4YzAsNy43LTEuNywxMy43LTUuMiwxNy45Yy0zLjUsNC4yLTguNCw2LjMtMTQuNiw2LjMKCQljLTMuMywwLTYuMy0wLjctOS0yLjFjLTIuNy0xLjQtNC44LTMuMy02LjMtNS44SDUzM2wtMS4yLDdoLTIuN3YtNjYuN2g0LjJ2MTYuOGMwLDIuNS0wLjEsNC44LTAuMiw2LjlsLTAuMSwzLjZoMC4zCgkJYzEuOC0yLjgsMy45LTQuOSw2LjQtNi4yQzU0Mi4zLDMzOC4zLDU0NS4zLDMzNy42LDU0OC45LDMzNy42eiBNNTQ4LjgsMzQxLjVjLTUuNSwwLTkuNCwxLjYtMTEuOCw0LjdjLTIuNCwzLjEtMy42LDguMy0zLjYsMTUuNgoJCXYwLjdjMCw3LDEuMiwxMi4xLDMuNywxNS4xYzIuNSwzLjEsNi4zLDQuNiwxMS42LDQuNmM1LjEsMCw4LjktMS44LDExLjUtNS4zYzIuNi0zLjYsMy45LTguNiwzLjktMTUuMgoJCUM1NjQsMzQ4LjIsNTU5LDM0MS41LDU0OC44LDM0MS41eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTU5Ni4xLDM1Mi40aDE4LjZ2My41aC0xOC42djE4LjVoLTMuNXYtMTguNUg1NzR2LTMuNWgxOC41di0xOC42aDMuNVYzNTIuNHoiLz4KPC9nPgo8L3N2Zz4K";
    },
    z9n9: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAAM1BMVEVMaXEAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJXg/Qg3AAAAEHRSTlMAMGCgwNDwgEAQ4JCwcCBQWsjykQAAAAlwSFlzAAAJOgAACToB8GSSSgAAAdlJREFUWIXtVdmSrSAMDMi+aP//104R8IyIzsW5NW/2iyWVdPaEXrx48eJvITZrrXXrr424xaAhLOJXDAodlHvK4BPrJ7s5t9lKF/0jCqFLAPKj5HMAoJ+QiJII2ztmfyRxB7CQN4ARbD5pQCd2yJl7kuWYORZS9evj59lYX71L1xzyyLEQUa5ecEDQSmn+tpftJvo+Fl8li4LJ7PtqW3AZCFMJtYAiWovj33VRgPEcpZzhCIBg6eX4mvjfAXrU8GUgdhS7gsUGYR+AlQ2Mw6O7qtSMZjZ76m3JjsSrYLrKyuq0ILrwOZR8unPvXUIBHNAgugCeVk74FIe7aATL4T3iGEb9nkOc67JzDKm75zDnuqgW9nKWTC1R48jIc10imwswJ0HPJuRUXSQQmSkPoWQuzsROXHmuVsB0DSl4YMo8/ptinyvbL5wyxZlfhzzReWIE0QYEz0NgPj0i6/opblyG0t0AU7UjkS+TpGRZPVm3DZfuOkyoA0plXK2Q70YptgU3e/JsK/P3mUqitUGeUK9Y9tOwypKkjZMbcZPQH0j64+j0Q4pqFGo/dF5yVBMd2mELdYJUjPU4IDw+2uRtONYlTO3zC19i27Y6Pvfh6I77L/UXL168GEBEX/BmIoLia2OVAAAAAElFTkSuQmCC";
    },
    zD65: function (e, t, s) {
      e.exports =
        s.p +
        "static/microservices-diagram-orchestration-d31ab4edd317a2964c0e49e0640634e2.svg";
    },
    zmTG: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAAM1BMVEVMaXEAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJUAyJXg/Qg3AAAAEHRSTlMAQKAwwCBggBDw4HBQ0LCQWSuamgAAAAlwSFlzAAAJOgAACToB8GSSSgAAAc1JREFUWIXtVkcSgzAMtFyQG0b/f21GFiGEMiNzZk8hxsuqy7x48cIYBwURC7iHvnDo6QdfwjDDNNMR8zTGkOV+8hYRm0/ymPUsTjS06Sc/TK3/55WemboCPNofkNUknRR+dYkXB9Eyu9VwWMrw/e0qImL9aoKsJfnaHJb8DU1ehCZyvPXZEpf/2K7mWaIrOy8RRINnWyTZsnzfqSkM7vMh9oRJVX1bUCmV/XMhIhzkMOGg2aVxDkasaL232GMdQe+JDdB+UbGgvPSH4P9j2x4Uf5LcKgBoe5yHw9ILz28GQBc12EBO361pkMRx2+r2RwAQR3BXSQONlV/nQIYemSwxDYnIqynYEtj8upkAI9bM0iSqVJ3f0tPqhbA3gjGRVdR9bgY50ACJ2mrRQXojKjqO9U08t70i7Ap48Wi0p2+C2iF02+4cUVZz3JzE+6MD8m3r1tviiW5KtKo5FqLl+sSqe2q99Vy6VXgEJ+hlXUxESUfRJeeL6DK3urVzlV9M5rZ2BB14yJ3cypuDslo6/GlH6MuHsljWG7xOzbuZ0jePeWxIdRKaS09YV/qTH55zuM6mtDbER9M2tP2Ys+NjTliKbKbpyZb84sWLM4wxH+z6HFhWoQ+SAAAAAElFTkSuQmCC";
    },
  },
]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-606e95caa02ea956bd53.js.map