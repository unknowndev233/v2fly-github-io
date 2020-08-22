(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{403:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transport"}},[t._v("#")]),t._v(" Transport")]),t._v(" "),a("p",[t._v("底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式。底层传输方式提供了稳定的数据传输通道。通常来说，一个网络连接的两端需要有对称的传输方式。比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。")]),t._v(" "),a("p",[t._v("底层传输（transport）配置分为两部分，一是全局设置（"),a("a",{attrs:{href:"#transportobject"}},[t._v("TransportObject")]),t._v("），二是分协议配置（"),a("a",{attrs:{href:"#streamsettingsobject"}},[t._v("StreamSettingsObject")]),t._v("）。分协议配置可以指定每个单独的入站出站协议用怎样的方式传输。通常来说客户端和服务器对应的出站入站协议需要使用同样的传输方式。当分协议传输配置指定了一种传输方式，但没有填写其设置时，此传输方式会使用全局配置中的设置。")]),t._v(" "),a("h2",{attrs:{id:"transportobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transportobject"}},[t._v("#")]),t._v(" TransportObject")]),t._v(" "),a("p",[a("code",[t._v("TransportObject")]),t._v(" 对应配置文件的 "),a("code",[t._v("transport")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kcpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quicSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("tcpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/tcp.html"}},[t._v("TcpObject")])],1)]),t._v(" "),a("p",[t._v("针对 TCP 连接的配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("kcpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/mkcp.html"}},[t._v("KcpObject")])],1)]),t._v(" "),a("p",[t._v("针对 mKCP 连接的配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("wsSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/websocket.html"}},[t._v("WebSocketObject")])],1)]),t._v(" "),a("p",[t._v("针对 WebSocket 连接的配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("httpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/h2.html"}},[t._v("HttpObject")])],1)]),t._v(" "),a("p",[t._v("针对 HTTP/2 连接的配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("dsSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/domainsocket.html"}},[t._v("DomainSocketObject")])],1)]),t._v(" "),a("p",[t._v("针对 Domain Socket 连接的配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("quicSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/quic.html"}},[t._v("QuicObject")])],1)]),t._v(" "),a("p",[t._v("针对 QUIC 连接的配置。")]),t._v(" "),a("h2",{attrs:{id:"streamsettingsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streamsettingsobject"}},[t._v("#")]),t._v(" StreamSettingsObject")]),t._v(" "),a("p",[a("code",[t._v("StreamSettingsObject")]),t._v(" 对应出站入站协议中的 "),a("code",[t._v("streamSettings")]),t._v(" 项。每一个入站、出站连接都可以分别配置不同的传输配置，都可以设置 "),a("code",[t._v("streamSettings")]),t._v(" 来进行一些传输的配置。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kcpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quicSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sockopt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpFastOpen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("network")]),t._v(': "tcp" | "kcp" | "ws" | "http" | "domainsocket" | "quic"')])]),t._v(" "),a("p",[t._v("数据流所使用的网络类型，默认值为 "),a("code",[t._v('"tcp"')])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("security")]),t._v(': "none" | "tls"')])]),t._v(" "),a("p",[t._v("是否启用传输层加密，支持的选项有 "),a("code",[t._v('"none"')]),t._v(" 表示不加密（默认值），"),a("code",[t._v('"tls"')]),t._v(" 表示使用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLS"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tlsSettings")]),t._v(": "),a("a",{attrs:{href:"#tlsobject"}},[t._v("TLSObject")])])]),t._v(" "),a("p",[t._v("TLS 配置。TLS 由 Golang 提供，支持 TLS 1.3，不支持 DTLS。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tcpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/tcp.html"}},[t._v("TcpObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 TCP 配置，仅当此连接使用 TCP 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("kcpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/mkcp.html"}},[t._v("KcpObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("wsSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/websocket.html"}},[t._v("WebSocketObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("httpSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/h2.html"}},[t._v("HttpObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 HTTP/2 配置，仅当此连接使用 HTTP/2 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("dsSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/domainsocket.html"}},[t._v("DomainSocketObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 Domain socket 配置，仅当此连接使用 Domain socket 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("quicSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport/quic.html"}},[t._v("QUICObject")])],1)]),t._v(" "),a("p",[t._v("当前连接的 QUIC 配置，仅当此连接使用 QUIC 时有效。配置内容与上面的全局配置相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("sockopt")]),t._v(": "),a("a",{attrs:{href:"#sockoptobject"}},[t._v("SockoptObject")])])]),t._v(" "),a("p",[t._v("用作透明代理的配置。")]),t._v(" "),a("h2",{attrs:{id:"tlsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlsobject"}},[t._v("#")]),t._v(" TLSObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ray.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowInsecure"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http/1.1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificates"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableSystemRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("serverName")]),t._v(": string")])]),t._v(" "),a("p",[t._v("指定服务器端证书的域名，在连接由 IP 建立时有用。当目标连接由域名指定时，比如在 Socks 入站时接收到了域名，或者由 Sniffing 功能探测出了域名，这个域名会自动用于 "),a("code",[t._v("serverName")]),t._v("，无须手动配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("alpn")]),t._v(": [ string ]")])]),t._v(" "),a("p",[t._v("一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值。默认值为 "),a("code",[t._v('["h2", "http/1.1"]')]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("allowInsecure")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否允许不安全连接（仅用于客户端）。默认值为 "),a("code",[t._v("false")]),t._v("。当值为 "),a("code",[t._v("true")]),t._v(" 时，V2Ray 不会检查远端主机所提供的 TLS 证书的有效性。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("allowInsecureCiphers")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否允许不安全的加密方式（该参数已无效）。默认值为 "),a("code",[t._v("false")]),t._v("，该情况下，TLS 只使用 TLS 1.3 推荐的加密算法套件。当值为 "),a("code",[t._v("true")]),t._v(" 时，开启这一选项会增加一些与 TLS 1.2 兼容的加密套件。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("disableSystemRoot")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("（V2Ray 4.18+）是否禁用操作系统自带的 CA 证书。默认值为 "),a("code",[t._v("false")]),t._v("。当值为 "),a("code",[t._v("true")]),t._v(" 时，V2Ray 只会使用 "),a("code",[t._v("certificates")]),t._v(" 中指定的证书进行 TLS 握手。当值为 "),a("code",[t._v("false")]),t._v(" 时，V2Ray 只会使用操作系统自带的 CA 证书进行 TLS 握手。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("certificates")]),t._v(": [ "),a("a",{attrs:{href:"#certificateobject"}},[t._v("CertificateObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("证书列表，其中每一项表示一个证书（建议 fullchain）。")]),t._v(" "),a("h3",{attrs:{id:"certificateobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certificateobject"}},[t._v("#")]),t._v(" CertificateObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"encipherment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/certificate.crt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/key.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN CERTIFICATE-----"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIICwDCCAaigAwIBAgIRAO16JMdESAuHidFYJAR/7kAwDQYJKoZIhvcNAQELBQAw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADAeFw0xODA0MTAxMzU1MTdaFw0xODA0MTAxNTU1MTdaMAAwggEiMA0GCSqGSIb3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DQEBAQUAA4IBDwAwggEKAoIBAQCs2PX0fFSCjOemmdm9UbOvcLctF94Ox4BpSfJ+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3lJHwZbvnOFuo56WhQJWrclKoImp/c9veL1J4Bbtam3sW3APkZVEK9UxRQ57HQuw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OzhV0FD20/0YELou85TwnkTw5l9GVCXT02NG+pGlYsFrxesUHpojdl8tIcn113M5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pypgDPVmPeeORRf7nseMC6GhvXYM4txJPyenohwegl8DZ6OE5FkSVR5wFQtAhbON"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OAkIVVmw002K2J6pitPuJGOka9PxcCVWhko/W+JCGapcC7O74palwBUuXE1iH+Jp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noPjGp4qE2ognW3WH/sgQ+rvo20eXb9Um1steaYY8xlxgBsXAgMBAAGjNTAzMA4G"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1UdDwEB/wQEAwIFoDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA0GCSqGSIb3DQEBCwUAA4IBAQBUd9sGKYemzwPnxtw/vzkV8Q32NILEMlPVqeJU"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7UxVgIODBV6A1b3tOUoktuhmgSSaQxjhYbFAVTD+LUglMUCxNbj56luBRlLLQWo+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9BUhC/ow393tLmqKcB59qNcwbZER6XT5POYwcaKM75QVqhCJVHJNb1zSEE7Co7iO"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6wIan3lFyjBfYlBEz5vyRWQNIwKfdh5cK1yAu13xGENwmtlSTHiwbjBLXfk+0A/8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r/2s+sCYUkGZHhj8xY7bJ1zg0FRalP5LrqY+r6BckT1QPDIQKYy615j1LpOtwZe/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d4q7MD/dkzRDsch7t2cIjM/PYeMuzh87admSyL6hdtK0Nm/Q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----END CERTIFICATE-----"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN RSA PRIVATE KEY-----"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIIEowIBAAKCAQEArNj19HxUgoznppnZvVGzr3C3LRfeDseAaUnyft5SR8GW75zh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bqOeloUCVq3JSqCJqf3Pb3i9SeAW7Wpt7FtwD5GVRCvVMUUOex0LsDs4VdBQ9tP9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBC6LvOU8J5E8OZfRlQl09NjRvqRpWLBa8XrFB6aI3ZfLSHJ9ddzOacqYAz1Zj3n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jkUX+57HjAuhob12DOLcST8np6IcHoJfA2ejhORZElUecBULQIWzjTgJCFVZsNNN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itieqYrT7iRjpGvT8XAlVoZKP1viQhmqXAuzu+KWpcAVLlxNYh/iaZ6D4xqeKhNq"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IJ1t1h/7IEPq76NtHl2/VJtbLXmmGPMZcYAbFwIDAQABAoIBAFCgG4phfGIxK9Uw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qrp+o9xQLYGhQnmOYb27OpwnRCYojSlT+mvLcqwvevnHsr9WxyA+PkZ3AYS2PLue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C4xW0pzQgdn8wENtPOX8lHkuBocw1rNsCwDwvIguIuliSjI8o3CAy+xVDFgNhWap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/CMzfQYziB7GlnrM6hH838iiy0dlv4I/HKk+3/YlSYQEvnFokTf7HxbDDmznkJTM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aPKZ5qbnV+4AcQfcLYJ8QE0ViJ8dVZ7RLwIf7+SG0b0bqloti4+oQXqGtiESUwEW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Wzi7oyCbFJoPsFWp1P5+wD7jAGpAd9lPIwPahdr1wl6VwIx9W0XYjoZn71AEaw4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bK4xUXECgYEA3g2o9WqyrhYSax3pGEdvV2qN0VQhw7Xe+jyy98CELOO2DNbB9QNJ"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8cSSU/PjkxQlgbOJc8DEprdMldN5xI/srlsbQWCj72wXxXnVnh991bI2clwt7oYi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pcGZwzCrJyFL+QaZmYzLxkxYl1tCiiuqLm+EkjxCWKTX/kKEFb6rtnMCgYEAx0WR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L8Uue3lXxhXRdBS5QRTBNklkSxtU+2yyXRpvFa7Qam+GghJs5RKfJ9lTvjfM/PxG"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3vhuBliWQOKQbm1ZGLbgGBM505EOP7DikUmH/kzKxIeRo4l64mioKdDwK/4CZtS7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"az0Lq3eS6bq11qL4mEdE6Gn/Y+sqB83GHZYju80CgYABFm4KbbBcW+1RKv9WSBtK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gVIagV/89moWLa/uuLmtApyEqZSfn5mAHqdc0+f8c2/Pl9KHh50u99zfKv8AsHfH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TtjuVAvZg10GcZdTQ/I41ruficYL0gpfZ3haVWWxNl+J47di4iapXPxeGWtVA+u8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eH1cvgDRMFWCgE7nUFzE8wKBgGndUomfZtdgGrp4ouLZk6W4ogD2MpsYNSixkXyW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"64cIbV7uSvZVVZbJMtaXxb6bpIKOgBQ6xTEH5SMpenPAEgJoPVts816rhHdfwK5Q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8zetklegckYAZtFbqmM0xjOI6bu5rqwFLWr1xo33jF0wDYPQ8RHMJkruB1FIB8V2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GxvNAoGBAM4g2z8NTPMqX+8IBGkGgqmcYuRQxd3cs7LOSEjF9hPy1it2ZFe/yUKq"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ePa2E8osffK5LBkFzhyQb0WrGC9ijM9E6rv10gyuNjlwXdFJcdqVamxwPUBtxRJR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cYTY2HRkJXDdtT0Bkc3josE6UUDvwMpO0CfAETQPto1tjNEDhQhT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----END RSA PRIVATE KEY-----"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("usage")]),t._v(': "encipherment" | "verify" | "issue"')])]),t._v(" "),a("p",[t._v("证书用途，默认值为 "),a("code",[t._v('"encipherment"')]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"encipherment"')]),t._v("：证书用于 TLS 认证和加密。")]),t._v(" "),a("li",[a("code",[t._v('"verify"')]),t._v("：证书用于验证远端 TLS 的证书。当使用此项时，当前证书必须为 CA 证书。")]),t._v(" "),a("li",[a("code",[t._v('"issue"')]),t._v("：证书用于签发其它证书。当使用此项时，当前证书必须为 CA 证书。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 Windows 平台上可以将自签名的 CA 证书安装到系统中，即可验证远端 TLS 的证书。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当有新的客户端请求时，假设所指定的 "),a("code",[t._v("serverName")]),t._v(" 为 "),a("code",[t._v('"v2ray.com"')]),t._v("，V2Ray 会先从证书列表中寻找可用于 "),a("code",[t._v('"v2ray.com"')]),t._v(" 的证书，如果没有找到，则使用任一 "),a("code",[t._v("usage")]),t._v(" 为 "),a("code",[t._v('"issue"')]),t._v(" 的证书签发一个适用于 "),a("code",[t._v('"v2ray.com"')]),t._v(" 的证书，有效期为一小时。并将新的证书加入证书列表，以供后续使用。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("certificateFile")]),t._v(": string")])]),t._v(" "),a("p",[t._v("证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("v2ctl cert -ca")]),t._v(" 可以生成自签名的 CA 证书。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("certificate")]),t._v(": [ string ]")])]),t._v(" "),a("p",[t._v("一个字符串数组，表示证书内容，格式如样例所示。"),a("code",[t._v("certificate")]),t._v(" 和 "),a("code",[t._v("certificateFile")]),t._v(" 二者选一。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("keyFile")]),t._v(": string")])]),t._v(" "),a("p",[t._v("密钥文件路径，如使用 OpenSSL 生成，后缀名为 .key。目前暂不支持需要密码的 key 文件。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("key")]),t._v(": [ string ]")])]),t._v(" "),a("p",[t._v("一个字符串数组，表示密钥内容，格式如样例如示。"),a("code",[t._v("key")]),t._v(" 和 "),a("code",[t._v("keyFile")]),t._v(" 二者选一。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("certificateFile")]),t._v(" 和 "),a("code",[t._v("certificate")]),t._v(" 同时指定时，V2Ray 优先使用 "),a("code",[t._v("certificateFile")]),t._v("。"),a("code",[t._v("keyFile")]),t._v(" 和 "),a("code",[t._v("key")]),t._v(" 也一样。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("usage")]),t._v(" 为 "),a("code",[t._v('"verify"')]),t._v(" 时，"),a("code",[t._v("keyFile")]),t._v(" 和 "),a("code",[t._v("key")]),t._v(" 可均为空。")])]),t._v(" "),a("h2",{attrs:{id:"sockoptobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sockoptobject"}},[t._v("#")]),t._v(" SockoptObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpFastOpen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("mark")]),t._v(": number")])]),t._v(" "),a("p",[t._v("一个整数。当其值非零时，在出站连接上标记 SO_MARK。")]),t._v(" "),a("ul",[a("li",[t._v("仅适用于 Linux 系统。")]),t._v(" "),a("li",[t._v("需要 CAP_NET_ADMIN 权限。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tcpFastOpen")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否启用 "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP Fast Open"),a("OutboundLink")],1),t._v("。当其值为 "),a("code",[t._v("true")]),t._v(" 时，强制开启 TFO；当其值为 "),a("code",[t._v("false")]),t._v(" 时，强制关闭 TFO；当此项不存在时，使用系统默认设置。可用于入站出站连接。")]),t._v(" "),a("ul",[a("li",[t._v("仅在以下版本（或更新版本）的操作系统中可用:\n"),a("ul",[a("li",[t._v("Windows 10 (1604)")]),t._v(" "),a("li",[t._v("Mac OS 10.11 / iOS 9")]),t._v(" "),a("li",[t._v("Linux 3.16：系统已默认开启，无需配置。")])])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tproxy")]),t._v(': "redirect" | "tproxy" | "off"')])]),t._v(" "),a("p",[t._v("是否开启透明代理（仅适用于 Linux）。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"redirect"')]),t._v("：使用 Redirect 模式的透明代理。仅支持 TCP/IPv4 和 UDP 连接。")]),t._v(" "),a("li",[a("code",[t._v('"tproxy"')]),t._v("：使用 TProxy 模式的透明代理。支持 TCP 和 UDP 连接。")]),t._v(" "),a("li",[a("code",[t._v('"off"')]),t._v("：关闭透明代理。")])]),t._v(" "),a("p",[t._v("透明代理需要 Root 或 CAP_NET_ADMIN 权限。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当 "),a("RouterLink",{attrs:{to:"/config/protocols/dokodemo.html"}},[t._v("Dokodemo-door")]),t._v(" 中指定了 "),a("code",[t._v("followRedirect")]),t._v("，且 "),a("code",[t._v("sockopt.tproxy")]),t._v(" 为空时，"),a("code",[t._v("sockopt.tproxy")]),t._v(" 的值会被设为 "),a("code",[t._v('"redirect"')]),t._v("。")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);