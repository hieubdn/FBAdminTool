const _0x16c676 = _0x4b0a;
(function (_0x589214, _0x248e52) {
  const _0x254815 = _0x4b0a,
    _0x15f887 = _0x589214();
  while (!![]) {
    try {
      const _0x11530a =
        (parseInt(_0x254815(0x1b5)) / 0x1) *
          (parseInt(_0x254815(0x141)) / 0x2) +
        parseInt(_0x254815(0x135)) / 0x3 +
        parseInt(_0x254815(0xa5)) / 0x4 +
        parseInt(_0x254815(0x1ae)) / 0x5 +
        (-parseInt(_0x254815(0x1d8)) / 0x6) *
          (-parseInt(_0x254815(0xb1)) / 0x7) +
        (-parseInt(_0x254815(0x19f)) / 0x8) *
          (-parseInt(_0x254815(0xbe)) / 0x9) +
        -parseInt(_0x254815(0x144)) / 0xa;
      if (_0x11530a === _0x248e52) break;
      else _0x15f887["push"](_0x15f887["shift"]());
    } catch (_0xd74fa4) {
      _0x15f887["push"](_0x15f887["shift"]());
    }
  }
})(_0x1141, 0xc8301);
var bandodeptrai = _0x16c676(0x15b);
function simpleBMAdminTool() {
  const _0x29ab13 = _0x16c676,
    _0x259192 = _0x29ab13(0x18c),
    _0xa8afe4 = 0x1e * 0x3c * 0x3e8,
    _0xee3679 = [],
    _0x35f86f =
      typeof AbortSignal !== "undefined" &&
      typeof AbortSignal[_0x29ab13(0xa8)] === _0x29ab13(0x16b),
    _0x5263ea = (_0x9567c8) => {
      const _0x50db76 = _0x29ab13;
      if (_0x35f86f) return AbortSignal[_0x50db76(0xa8)](_0x9567c8);
      else {
        const _0x29971a = new AbortController();
        return (
          setTimeout(() => _0x29971a[_0x50db76(0x192)](), _0x9567c8),
          _0x29971a["signal"]
        );
      }
    };
  try {
    const _0xd26bb8 = require(_0x29ab13(0xf0))?.[_0x29ab13(0xab)],
      _0x56732e = require("WebApiApplication")?.[_0x29ab13(0x14d)]();
    if (!_0xd26bb8 || !_0x56732e) {
      console[_0x29ab13(0x17e)](_0x29ab13(0xef)),
        _0xc9a9ed({ error: _0x29ab13(0xda), details: _0x29ab13(0x1e0) }),
        (window[_0x29ab13(0xc4)][_0x29ab13(0x1af)] = _0x29ab13(0x140));
      return;
    }
    console["log"]("Found\x20BM\x20ID:", _0xd26bb8);
    const _0x342fda = _0x560635(_0xd26bb8);
    if (_0x342fda) {
      console[_0x29ab13(0xa2)](_0x29ab13(0x11a)),
        _0x46ec43(_0x342fda, _0xd26bb8, _0x56732e);
      return;
    }
    const _0x3e014d = document[_0x29ab13(0x16d)](_0x29ab13(0x179));
    (_0x3e014d[_0x29ab13(0xbc)] = _0x29ab13(0x199)),
      (_0x3e014d[_0x29ab13(0x1b2)]["padding"] = _0x29ab13(0x113)),
      (_0x3e014d[_0x29ab13(0x1b2)]["backgroundColor"] = _0x29ab13(0x115)),
      (_0x3e014d[_0x29ab13(0x1b2)][_0x29ab13(0x1c8)] = _0x29ab13(0x132)),
      (_0x3e014d[_0x29ab13(0x1b2)][_0x29ab13(0xbd)] = "50%"),
      (_0x3e014d[_0x29ab13(0x1b2)][_0x29ab13(0x97)] = _0x29ab13(0x12e)),
      (_0x3e014d["style"][_0x29ab13(0x10a)] = _0x29ab13(0x198)),
      (_0x3e014d[_0x29ab13(0x1b2)][_0x29ab13(0xf4)] = _0x29ab13(0x1ac)),
      (_0x3e014d[_0x29ab13(0x1b2)][_0x29ab13(0x11e)] = _0x29ab13(0x177)),
      (_0x3e014d["style"][_0x29ab13(0x1b4)] =
        "0\x202px\x2010px\x20rgba(0,0,0,0.2)");
    const _0x24df19 = document[_0x29ab13(0x16d)](_0x29ab13(0x1b2));
    (_0x24df19[_0x29ab13(0x1c2)] = _0x29ab13(0xb0)),
      document[_0x29ab13(0x18d)]["appendChild"](_0x24df19),
      document["body"][_0x29ab13(0x19d)](_0x3e014d);
    const _0x445eb9 = 0x19;
    _0x30daac(_0xd26bb8, _0x56732e, _0x445eb9)
      [_0x29ab13(0x103)]((_0x461b58) => {
        const _0x50f6e3 = _0x29ab13;
        document["body"]["removeChild"](_0x3e014d);
        if (!_0x461b58 || _0x461b58[_0x50f6e3(0x121)] === 0x0) {
          alert(_0x50f6e3(0xd8));
          return;
        }
        _0x150613(_0xd26bb8, _0x461b58),
          _0x46ec43(_0x461b58, _0xd26bb8, _0x56732e);
      })
      [_0x29ab13(0x11b)]((_0x2589a5) => {
        const _0x51b2e1 = _0x29ab13;
        document[_0x51b2e1(0xe4)][_0x51b2e1(0x122)](_0x3e014d),
          console[_0x51b2e1(0x17e)](_0x51b2e1(0x1c0), _0x2589a5),
          alert(_0x51b2e1(0xd3));
      });
  } catch (_0x44bff5) {
    console[_0x29ab13(0x17e)](_0x29ab13(0x1c0), _0x44bff5),
      alert(_0x29ab13(0x1cc));
  }
  function _0xc9a9ed(_0x4732f1) {
    const _0x32b02c = _0x29ab13,
      _0x1d8dc3 = document["createElement"](_0x32b02c(0x179));
    (_0x1d8dc3["id"] = "fb-tool-error-container"),
      (_0x1d8dc3[_0x32b02c(0x1b2)][_0x32b02c(0xe9)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2020px\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x27Segoe\x20UI\x27,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20"),
      (_0x1d8dc3[_0x32b02c(0xbc)] =
        _0x32b02c(0x9b) +
        _0x4732f1[_0x32b02c(0x17e)] +
        _0x32b02c(0xd2) +
        _0x4732f1[_0x32b02c(0x154)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22fb-tool-error-close\x22\x20style=\x22background:\x20#ddd;\x20border:\x20none;\x20padding:\x208px\x2015px;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22fb-tool-error-retry\x22\x20style=\x22background:\x20#3498db;\x20color:\x20white;\x20border:\x20none;\x20padding:\x208px\x2015px;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x22>Retry</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      document[_0x32b02c(0xe4)]["appendChild"](_0x1d8dc3),
      document["getElementById"](_0x32b02c(0x1a3))[_0x32b02c(0xb5)](
        _0x32b02c(0xc0),
        () => {
          const _0x4289aa = _0x32b02c;
          _0x1d8dc3[_0x4289aa(0x14f)]();
        }
      ),
      document[_0x32b02c(0xdd)]("fb-tool-error-retry")[_0x32b02c(0xb5)](
        "click",
        () => {
          const _0x51874c = _0x32b02c;
          _0x1d8dc3[_0x51874c(0x14f)](), initializeAndStartTool();
        }
      );
  }
  function _0x560635(_0x22da41) {
    const _0x514681 = _0x29ab13;
    try {
      const _0x2081bd = localStorage[_0x514681(0xe5)](
        _0x259192 + "_" + _0x22da41
      );
      if (!_0x2081bd) return null;
      const { timestamp: _0x38681a, data: _0x33fc3f } =
          JSON[_0x514681(0x150)](_0x2081bd),
        _0x390332 = new Date()[_0x514681(0x1d6)]();
      if (_0x390332 - _0x38681a < _0xa8afe4) return _0x33fc3f;
      return localStorage[_0x514681(0x1ab)](_0x259192 + "_" + _0x22da41), null;
    } catch (_0x1660ec) {
      return (
        console[_0x514681(0x17e)]("Error\x20reading\x20cache:", _0x1660ec), null
      );
    }
  }
  function _0x150613(_0x41469d, _0x3aad34) {
    const _0x376355 = _0x29ab13;
    try {
      const _0x390397 = {
        timestamp: new Date()[_0x376355(0x1d6)](),
        data: _0x3aad34,
      };
      localStorage[_0x376355(0xd1)](
        _0x259192 + "_" + _0x41469d,
        JSON["stringify"](_0x390397)
      );
    } catch (_0x402e0a) {
      console["error"](_0x376355(0x1c9), _0x402e0a);
    }
  }
  function _0x46b053(_0x2d612b) {
    const _0x18bab8 = _0x29ab13;
    try {
      localStorage[_0x18bab8(0x1ab)](_0x259192 + "_" + _0x2d612b);
    } catch (_0x45039e) {
      console[_0x18bab8(0x17e)]("Error\x20clearing\x20cache:", _0x45039e);
    }
  }
  async function _0x30daac(
    _0x302b7f,
    _0xefda6,
    _0x14bc35 = 0x19,
    _0x570024 = 0x4
  ) {
    const _0x110f2 = _0x29ab13;
    let _0x3132d5 = [],
      _0x3f22eb = null,
      _0x5c8b3b = 0x0;
    while (_0x5c8b3b < _0x570024) {
      try {
        const _0x244d19 = _0x3f22eb
            ? "%2C%22cursor%22%3A%22" +
              encodeURIComponent(_0x3f22eb) +
              _0x110f2(0x142)
            : "%2C%22cursor%22%3Anull",
          _0x568df1 =
            "https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsPeopleTableListPaginationQuery&variables=%7B%22asset_types%22%3Anull%2C%22businessAccessType%22%3A%5B%5D%2C%22businessAccountTypes%22%3A%5B%5D" +
            _0x244d19 +
            _0x110f2(0x1ed) +
            _0x14bc35 +
            _0x110f2(0xe0) +
            _0x302b7f +
            "%22%7D&server_timestamps=true&doc_id=9371006629693295&access_token=" +
            _0xefda6,
          _0x3a1a29 = await fetch(_0x568df1, {
            method: "GET",
            credentials: _0x110f2(0xbf),
            signal: _0x5263ea(0x2710),
          }),
          _0x2e4df9 = await _0x3a1a29[_0x110f2(0x14b)]();
        if (_0x2e4df9["error"]) {
          console[_0x110f2(0x17e)](_0x110f2(0x10f), _0x2e4df9[_0x110f2(0x17e)]);
          break;
        }
        const _0x476f49 =
          _0x2e4df9?.[_0x110f2(0x156)]?.["node"]?.[_0x110f2(0x174)]?.[
            _0x110f2(0x16a)
          ];
        if (!_0x476f49 || _0x476f49[_0x110f2(0x121)] === 0x0) break;
        const _0x33b05a =
            _0x2e4df9?.["data"]?.[_0x110f2(0x157)]?.[_0x110f2(0x1c7)]?.["id"],
          _0x3efd1a = _0x476f49[_0x110f2(0x1df)]((_0xdcb4a) => {
            const _0x3ecefe = _0x110f2,
              _0x2df6cf = _0xdcb4a?.["node"]?.[_0x3ecefe(0x15c)],
              _0x5674f3 = _0xdcb4a?.[_0x3ecefe(0xf3)],
              _0x8a6911 = _0xdcb4a?.[_0x3ecefe(0x1b0)]?.[_0x3ecefe(0xea)],
              _0x12c301 =
                _0xdcb4a?.[_0x3ecefe(0x13c)]?.[_0x3ecefe(0x1ba)]?.[
                  "standalone"
                ]?.[_0x3ecefe(0x95)],
              _0x1418d1 = _0x5674f3?.["id"];
            return {
              id: _0x5674f3?.["id"],
              name: _0x5674f3?.[_0x3ecefe(0x12c)],
              email:
                _0x5674f3?.[_0x3ecefe(0xfe)] ||
                _0xdcb4a?.[_0x3ecefe(0xe3)]?.[_0x3ecefe(0x17b)],
              status:
                _0x2df6cf === _0x3ecefe(0x139) ? _0x3ecefe(0x1a7) : "CONFIRMED",
              lastActive: _0x8a6911
                ? _0xfb6517(_0x8a6911 * 0x3e8)
                : _0x3ecefe(0x1dd),
              role:
                _0x12c301 === _0x3ecefe(0x17c)
                  ? "Full\x20control"
                  : "Partial\x20access",
              UserType: _0xdcb4a?.[_0x3ecefe(0xe3)]?.[_0x3ecefe(0x129)],
              isYou: _0x1418d1 === _0x33b05a,
            };
          });
        _0x3132d5 = [..._0x3132d5, ..._0x3efd1a];
        const _0xf74d93 =
          _0x2e4df9?.[_0x110f2(0x156)]?.["node"]?.[_0x110f2(0x174)]?.[
            _0x110f2(0x1ec)
          ];
        if (!_0xf74d93?.[_0x110f2(0x193)]) break;
        (_0x3f22eb = _0xf74d93[_0x110f2(0x169)]), _0x5c8b3b++;
      } catch (_0x417956) {
        console[_0x110f2(0x17e)](_0x110f2(0x15f) + _0x5c8b3b + ":", _0x417956),
          await new Promise((_0x239a26) => setTimeout(_0x239a26, 0x3e8));
      }
    }
    return (
      console[_0x110f2(0xa2)](_0x110f2(0x131) + _0x3132d5[_0x110f2(0x121)]),
      _0x3132d5
    );
  }
  async function _0x38feef(_0x27bbc8, _0x2628f5, _0x37e08a) {
    const _0x3fc995 = _0x29ab13,
      _0x35a846 =
        _0x3fc995(0xcd) +
        _0x27bbc8 +
        _0x3fc995(0x170) +
        _0x37e08a +
        _0x3fc995(0x166) +
        _0x2628f5;
    try {
      const _0x3ec8d2 = await fetch(_0x35a846, {
          method: _0x3fc995(0x99),
          credentials: _0x3fc995(0xbf),
        }),
        _0x4b2f8d = await _0x3ec8d2[_0x3fc995(0x14b)](),
        _0x2c06bf =
          _0x4b2f8d?.[_0x3fc995(0x156)]?.[_0x3fc995(0xc9)]?.[_0x3fc995(0x110)];
      return _0x2c06bf === _0x37e08a;
    } catch (_0x183565) {
      return console[_0x3fc995(0x17e)](_0x3fc995(0xad), _0x183565), ![];
    }
  }
  async function _0x48fcea(_0x1b1bff, _0x443007, _0xf032c0) {
    const _0x393511 = _0x29ab13,
      _0xbdf30 =
        _0x393511(0xcd) +
        _0x1b1bff +
        _0x393511(0x170) +
        _0xf032c0 +
        _0x393511(0x101) +
        _0x443007;
    try {
      const _0x22bf5e = await fetch(_0xbdf30, {
          method: _0x393511(0x99),
          credentials: _0x393511(0xbf),
        }),
        _0x44cd50 = await _0x22bf5e[_0x393511(0x14b)](),
        _0x10315a =
          _0x44cd50?.[_0x393511(0x156)]?.[_0x393511(0xc9)]?.[_0x393511(0x110)];
      return _0x10315a === _0xf032c0;
    } catch (_0x500028) {
      return console[_0x393511(0x17e)](_0x393511(0xad), _0x500028), ![];
    }
  }
  async function _0xdbb1b6(_0x3fb9ff, _0x4d77d8, _0x3b2596) {
    const _0x392dd7 = _0x29ab13,
      _0x457c2a =
        _0x392dd7(0xa7) +
        _0x3b2596 +
        _0x392dd7(0x13e) +
        _0x4d77d8 +
        _0x392dd7(0x185);
    try {
      const _0x1b3df1 = await fetch(_0x457c2a, {
          method: "GET",
          credentials: "include",
        }),
        _0x35dd12 = await _0x1b3df1[_0x392dd7(0x14b)]();
      return _0x35dd12?.[_0x392dd7(0x1a8)] === !![];
    } catch (_0x214c9d) {
      return console[_0x392dd7(0x17e)](_0x392dd7(0xad), _0x214c9d), ![];
    }
  }
  async function _0x4d3b1e(_0x1f6cef, _0x339a0e, _0x1f11cb) {
    const _0x34e99c = _0x29ab13;
    try {
      const _0x8c8fdb =
          _0x34e99c(0x1b3) + _0x1f11cb + _0x34e99c(0x196) + _0x339a0e,
        _0x566d72 = await fetch(_0x8c8fdb, {
          method: _0x34e99c(0x99),
          credentials: _0x34e99c(0xbf),
        }),
        _0x399f7b = await _0x566d72[_0x34e99c(0x14b)](),
        _0x4453ce =
          _0x399f7b?.["data"]?.[_0x34e99c(0x149)]?.[
            "removed_business_role_request_id"
          ];
      if (_0x4453ce === _0x1f11cb) return !![];
    } catch (_0x1e377f) {
      console[_0x34e99c(0x17e)](_0x34e99c(0x146), _0x1e377f);
    }
    return ![];
  }
  function _0xfb6517(_0x3f7663) {
    const _0x3f589c = _0x29ab13,
      _0x54c679 = Date[_0x3f589c(0x16c)](),
      _0x1e32c0 = Math[_0x3f589c(0x1b1)]((_0x54c679 - _0x3f7663) / 0x3e8);
    if (_0x1e32c0 < 0x3c) return _0x1e32c0 + _0x3f589c(0x107);
    if (_0x1e32c0 < 0xe10)
      return Math[_0x3f589c(0x1b1)](_0x1e32c0 / 0x3c) + _0x3f589c(0xdb);
    if (_0x1e32c0 < 0x15180)
      return Math["floor"](_0x1e32c0 / 0xe10) + _0x3f589c(0x17f);
    if (_0x1e32c0 < 0x278d00)
      return Math[_0x3f589c(0x1b1)](_0x1e32c0 / 0x15180) + "\x20days\x20ago";
    if (_0x1e32c0 < 0x1e13380)
      return Math["floor"](_0x1e32c0 / 0x278d00) + "\x20months\x20ago";
    return Math[_0x3f589c(0x1b1)](_0x1e32c0 / 0x1e13380) + _0x3f589c(0x18f);
  }
  function _0x46ec43(_0x51fb0d, _0x2102e0, _0x2db1cc) {
    const _0x410ddf = _0x29ab13,
      _0xa159d3 = document[_0x410ddf(0x16d)](_0x410ddf(0x179));
    (_0xa159d3["id"] = "bm-admin-tool-container"),
      (_0xa159d3[_0x410ddf(0x1b2)]["position"] = _0x410ddf(0x132)),
      (_0xa159d3["style"]["top"] = _0x410ddf(0x113)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x97)] = _0x410ddf(0x113)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0xf4)] = _0x410ddf(0x1ac)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x195)] = _0x410ddf(0x115)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = "15px"),
      (_0xa159d3["style"]["boxShadow"] = "0\x205px\x2020px\x20rgba(0,0,0,0.3)"),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x11e)] = _0x410ddf(0x177)),
      (_0xa159d3["style"]["width"] = _0x410ddf(0xaa)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x1cf)] = _0x410ddf(0x1d2)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x178)] = _0x410ddf(0x164)),
      (_0xa159d3[_0x410ddf(0x1b2)][_0x410ddf(0x19a)] = "Arial,\x20sans-serif"),
      _0x62e687(_0xa159d3);
    const _0x106069 = { column: null, ascending: !![] },
      _0x10f312 = document[_0x410ddf(0x16d)]("div");
    (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = _0x410ddf(0xc5)),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0xaf)] = _0x410ddf(0xfa)),
      (_0x10f312["style"][_0x410ddf(0x1e1)] = "center"),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0x168)] = _0x410ddf(0x1b9)),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0x9d)] = "white"),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = "8px\x2012px"),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0x11e)] = _0x410ddf(0x162)),
      (_0x10f312[_0x410ddf(0x1b2)][_0x410ddf(0xc8)] = _0x410ddf(0x130));
    const _0x24e376 = document[_0x410ddf(0x16d)](_0x410ddf(0x179));
    (_0x24e376[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = _0x410ddf(0xc5)),
      (_0x24e376[_0x410ddf(0x1b2)][_0x410ddf(0xde)] = _0x410ddf(0x100));
    const _0x23c715 = document[_0x410ddf(0x16d)]("h3");
    (_0x23c715[_0x410ddf(0x1c2)] =
      _0x410ddf(0xf1) + _0x51fb0d[_0x410ddf(0x121)] + ")"),
      (_0x23c715["style"][_0x410ddf(0x13a)] = "0"),
      (_0x23c715[_0x410ddf(0x1b2)][_0x410ddf(0xed)] = _0x410ddf(0x98));
    const _0x25ffa2 = document[_0x410ddf(0x16d)](_0x410ddf(0x179));
    (_0x25ffa2[_0x410ddf(0x1c2)] = _0x410ddf(0x1cd) + _0x2102e0),
      (_0x25ffa2[_0x410ddf(0x1b2)][_0x410ddf(0xed)] = _0x410ddf(0x1c4)),
      (_0x25ffa2[_0x410ddf(0x1b2)][_0x410ddf(0x9d)] = _0x410ddf(0x1d4)),
      (_0x25ffa2["style"][_0x410ddf(0xf6)] = _0x410ddf(0x15d)),
      (_0x25ffa2[_0x410ddf(0x1b2)]["fontFamily"] = _0x410ddf(0x155)),
      _0x24e376[_0x410ddf(0x19d)](_0x23c715),
      _0x24e376[_0x410ddf(0x19d)](_0x25ffa2);
    const _0x2770a9 = document["createElement"]("div");
    (_0x2770a9[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = "flex"),
      (_0x2770a9[_0x410ddf(0x1b2)][_0x410ddf(0xe8)] = "5px");
    const _0xdb1c3 = document[_0x410ddf(0x16d)](_0x410ddf(0x13f));
    (_0xdb1c3[_0x410ddf(0xbc)] = "🔍"),
      (_0xdb1c3[_0x410ddf(0x138)] = _0x410ddf(0x1e3)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0x168)] = _0x410ddf(0x1b6)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0xca)] = "none"),
      (_0xdb1c3[_0x410ddf(0x1b2)]["borderRadius"] = _0x410ddf(0x1d1)),
      (_0xdb1c3["style"][_0x410ddf(0x9d)] = _0x410ddf(0x115)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0x105)] = _0x410ddf(0x1d5)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0x12a)] = _0x410ddf(0x1d5)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0xed)] = "14px"),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = _0x410ddf(0xc5)),
      (_0xdb1c3[_0x410ddf(0x1b2)][_0x410ddf(0x1e1)] = _0x410ddf(0xae)),
      (_0xdb1c3[_0x410ddf(0x1b2)]["justifyContent"] = _0x410ddf(0xae)),
      (_0xdb1c3[_0x410ddf(0x123)] = () => {
        const _0x11c0a0 = _0x410ddf,
          _0x112569 = prompt(_0x11c0a0(0x17a), _0x2102e0);
        _0x112569 &&
          _0x112569[_0x11c0a0(0x1cb)]() &&
          _0x112569[_0x11c0a0(0x1cb)]() !== _0x2102e0 &&
          _0x515149(_0x112569[_0x11c0a0(0x1cb)](), _0x2db1cc, _0xa159d3);
      });
    const _0x439944 = document[_0x410ddf(0x16d)](_0x410ddf(0x13f));
    (_0x439944[_0x410ddf(0xbc)] = _0x410ddf(0x1e7)),
      (_0x439944[_0x410ddf(0x138)] = _0x410ddf(0x106)),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0x168)] = _0x410ddf(0x1b6)),
      (_0x439944["style"]["border"] = "none"),
      (_0x439944[_0x410ddf(0x1b2)]["borderRadius"] = _0x410ddf(0x1d1)),
      (_0x439944["style"]["color"] = _0x410ddf(0x115)),
      (_0x439944["style"][_0x410ddf(0x105)] = "28px"),
      (_0x439944["style"]["height"] = _0x410ddf(0x1d5)),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0xed)] = _0x410ddf(0x98)),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = _0x410ddf(0xc5)),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0x1e1)] = "center"),
      (_0x439944[_0x410ddf(0x1b2)][_0x410ddf(0xaf)] = _0x410ddf(0xae)),
      (_0x439944[_0x410ddf(0x123)] = async () => {
        const _0x24ab36 = _0x410ddf;
        _0xa159d3[_0x24ab36(0x1b2)][_0x24ab36(0xfd)] = _0x24ab36(0x163);
        const _0x547b54 = document[_0x24ab36(0x16d)]("div");
        (_0x547b54["innerHTML"] = _0x24ab36(0xdc)),
          (_0x547b54[_0x24ab36(0x1b2)]["position"] = _0x24ab36(0x186)),
          (_0x547b54[_0x24ab36(0x1b2)]["top"] = _0x24ab36(0x12e)),
          (_0x547b54[_0x24ab36(0x1b2)][_0x24ab36(0x97)] = _0x24ab36(0x12e)),
          (_0x547b54[_0x24ab36(0x1b2)]["transform"] =
            "translate(-50%,\x20-50%)"),
          (_0x547b54[_0x24ab36(0x1b2)]["backgroundColor"] = "white"),
          (_0x547b54[_0x24ab36(0x1b2)][_0x24ab36(0x1e6)] = _0x24ab36(0x130)),
          (_0x547b54[_0x24ab36(0x1b2)]["borderRadius"] = _0x24ab36(0x162)),
          (_0x547b54["style"][_0x24ab36(0x1b4)] = _0x24ab36(0x171)),
          _0xa159d3[_0x24ab36(0x19d)](_0x547b54),
          _0x46b053(_0x2102e0);
        try {
          const _0x28e3cc = await _0x30daac(_0x2102e0, _0x2db1cc, 0x19);
          _0x150613(_0x2102e0, _0x28e3cc),
            document[_0x24ab36(0xe4)]["removeChild"](_0xa159d3),
            _0x809e22(),
            _0x46ec43(_0x28e3cc, _0x2102e0, _0x2db1cc);
        } catch (_0xa43fa6) {
          console[_0x24ab36(0x17e)](_0x24ab36(0x13d), _0xa43fa6),
            _0xa159d3[_0x24ab36(0x122)](_0x547b54),
            (_0xa159d3[_0x24ab36(0x1b2)]["opacity"] = "1");
          const _0x4b12eb = document[_0x24ab36(0x16d)](_0x24ab36(0x179));
          (_0x4b12eb[_0x24ab36(0x1c2)] = "Failed\x20to\x20refresh\x20data"),
            (_0x4b12eb[_0x24ab36(0x1b2)][_0x24ab36(0x9d)] = _0x24ab36(0x147)),
            (_0x4b12eb[_0x24ab36(0x1b2)][_0x24ab36(0x1e6)] = _0x24ab36(0x162)),
            (_0x4b12eb[_0x24ab36(0x1b2)][_0x24ab36(0x10d)] = _0x24ab36(0xae)),
            _0xa159d3["insertBefore"](_0x4b12eb, _0xa159d3["firstChild"]),
            setTimeout(() => {
              const _0x127478 = _0x24ab36;
              try {
                _0xa159d3[_0x127478(0x122)](_0x4b12eb);
              } catch (_0x33e876) {}
            }, 0xbb8);
        }
      }),
      _0x2770a9["appendChild"](_0xdb1c3),
      _0x2770a9[_0x410ddf(0x19d)](_0x439944),
      _0x10f312[_0x410ddf(0x19d)](_0x24e376),
      _0x10f312[_0x410ddf(0x19d)](_0x2770a9),
      _0xa159d3[_0x410ddf(0x19d)](_0x10f312);
    const _0x449eaf = document["createElement"]("div");
    (_0x449eaf[_0x410ddf(0x1b2)][_0x410ddf(0xc8)] = _0x410ddf(0x130)),
      (_0x449eaf[_0x410ddf(0x1b2)][_0x410ddf(0x134)] = _0x410ddf(0xc5)),
      (_0x449eaf[_0x410ddf(0x1b2)][_0x410ddf(0xe8)] = _0x410ddf(0xe2));
    const _0x2ae2e2 = document["createElement"](_0x410ddf(0x94));
    (_0x2ae2e2[_0x410ddf(0xf9)] = _0x410ddf(0xd6)),
      (_0x2ae2e2[_0x410ddf(0x11c)] = _0x410ddf(0x191)),
      (_0x2ae2e2[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = "6px\x2010px"),
      (_0x2ae2e2[_0x410ddf(0x1b2)]["borderRadius"] = _0x410ddf(0x14c)),
      (_0x2ae2e2[_0x410ddf(0x1b2)][_0x410ddf(0xca)] = _0x410ddf(0xff)),
      (_0x2ae2e2["style"]["flexGrow"] = "1");
    const _0x22e7da = document[_0x410ddf(0x16d)](_0x410ddf(0x1da));
    (_0x22e7da[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = _0x410ddf(0x187)),
      (_0x22e7da[_0x410ddf(0x1b2)][_0x410ddf(0x11e)] = "4px"),
      (_0x22e7da["style"][_0x410ddf(0xca)] = _0x410ddf(0xff));
    const _0x100307 = [
      { value: "", label: _0x410ddf(0x120) },
      { value: _0x410ddf(0x19c), label: _0x410ddf(0xd9) },
      { value: _0x410ddf(0x1a7), label: _0x410ddf(0x172) },
    ];
    _0x100307[_0x410ddf(0xd5)]((_0x5e5081) => {
      const _0x4087d0 = _0x410ddf,
        _0x142774 = document[_0x4087d0(0x16d)](_0x4087d0(0x1ea));
      (_0x142774["value"] = _0x5e5081[_0x4087d0(0x119)]),
        (_0x142774[_0x4087d0(0x1c2)] = _0x5e5081[_0x4087d0(0xc1)]),
        _0x22e7da[_0x4087d0(0x19d)](_0x142774);
    }),
      _0x449eaf[_0x410ddf(0x19d)](_0x2ae2e2),
      _0x449eaf[_0x410ddf(0x19d)](_0x22e7da);
    const _0x2cae4b = () => {
      const _0x44b38f = _0x410ddf,
        _0x5792e2 = _0x2ae2e2[_0x44b38f(0x119)][_0x44b38f(0x1a1)](),
        _0xc70e6f = _0x22e7da[_0x44b38f(0x119)],
        _0x5521e1 = _0x127f15["querySelectorAll"]("tr");
      _0x5521e1[_0x44b38f(0xd5)]((_0x17071c) => {
        const _0x3d86b9 = _0x44b38f,
          _0x9fc76e =
            _0x17071c["cells"][0x1][_0x3d86b9(0x1c2)][_0x3d86b9(0x1a1)](),
          _0x38dca5 =
            _0x17071c[_0x3d86b9(0x1e4)][0x2]["textContent"][_0x3d86b9(0x1a1)](),
          _0x56878a = _0x17071c[_0x3d86b9(0x1e4)][0x6]["textContent"],
          _0x16be70 =
            _0x9fc76e["includes"](_0x5792e2) ||
            _0x38dca5["includes"](_0x5792e2),
          _0x197ff3 = !_0xc70e6f || _0x56878a === _0xc70e6f;
        _0x17071c[_0x3d86b9(0x1b2)][_0x3d86b9(0x134)] =
          _0x16be70 && _0x197ff3 ? "" : _0x3d86b9(0xd7);
      });
    };
    _0x2ae2e2[_0x410ddf(0xb5)](_0x410ddf(0x94), _0x2cae4b),
      _0x22e7da["addEventListener"]("change", _0x2cae4b),
      _0xa159d3[_0x410ddf(0x127)](_0x449eaf, _0xa159d3[_0x410ddf(0x190)][0x1]);
    const _0x4104cb = document["createElement"](_0x410ddf(0xb3));
    (_0x4104cb[_0x410ddf(0x1b2)][_0x410ddf(0x105)] = _0x410ddf(0x1b8)),
      (_0x4104cb[_0x410ddf(0x1b2)][_0x410ddf(0x93)] = "collapse"),
      (_0x4104cb[_0x410ddf(0x1b2)][_0x410ddf(0xed)] = _0x410ddf(0x160)),
      (_0x4104cb[_0x410ddf(0x1b2)][_0x410ddf(0x1b4)] = _0x410ddf(0xeb));
    const _0x55c7bb = document[_0x410ddf(0x16d)]("tr");
    [
      { id: "", label: "" },
      { id: "name", label: "Name" },
      { id: _0x410ddf(0xfe), label: _0x410ddf(0x182) },
      { id: "lastActive", label: "Last\x20Active" },
      { id: _0x410ddf(0x118), label: _0x410ddf(0xf7) },
      { id: _0x410ddf(0x1c1), label: _0x410ddf(0xd0) },
      { id: "status", label: _0x410ddf(0x14a) },
      { id: _0x410ddf(0x104), label: _0x410ddf(0x1bf) },
    ][_0x410ddf(0xd5)]((_0x552438) => {
      const _0x5d65f7 = _0x410ddf,
        _0x50e9ac = document["createElement"]("th");
      if (_0x552438["id"] && _0x552438["id"] !== _0x5d65f7(0x104)) {
        const _0x51094f = document[_0x5d65f7(0x16d)](_0x5d65f7(0x179));
        (_0x51094f[_0x5d65f7(0x1b2)]["display"] = _0x5d65f7(0xc5)),
          (_0x51094f[_0x5d65f7(0x1b2)][_0x5d65f7(0x1e1)] = _0x5d65f7(0xae)),
          (_0x51094f[_0x5d65f7(0x1b2)][_0x5d65f7(0xb4)] = _0x5d65f7(0x180));
        const _0x5b1d17 = document["createElement"](_0x5d65f7(0x161));
        _0x5b1d17[_0x5d65f7(0x1c2)] = _0x552438["label"];
        const _0x4486a6 = document[_0x5d65f7(0x16d)](_0x5d65f7(0x161));
        (_0x4486a6[_0x5d65f7(0x1b2)]["marginLeft"] = _0x5d65f7(0x162)),
          (_0x4486a6["style"][_0x5d65f7(0xed)] = _0x5d65f7(0xe2)),
          (_0x4486a6[_0x5d65f7(0x1b2)]["opacity"] = _0x5d65f7(0x1eb)),
          (_0x4486a6[_0x5d65f7(0xbc)] = "&#x25B2;&#x25BC;"),
          _0x51094f[_0x5d65f7(0x19d)](_0x5b1d17),
          _0x51094f["appendChild"](_0x4486a6),
          (_0x51094f[_0x5d65f7(0x123)] = () => {
            const _0xad907f = _0x5d65f7;
            _0x106069[_0xad907f(0x100)] === _0x552438["id"]
              ? (_0x106069["ascending"] = !_0x106069[_0xad907f(0xb8)])
              : ((_0x106069[_0xad907f(0x100)] = _0x552438["id"]),
                (_0x106069[_0xad907f(0xb8)] = !![])),
              _0x38f5eb(_0x4104cb, _0x552438["id"], _0x106069["ascending"]),
              document[_0xad907f(0x17d)](_0xad907f(0x1bc))[_0xad907f(0xd5)](
                (_0x2bbd48) => {
                  const _0x3e297b = _0xad907f;
                  (_0x2bbd48[_0x3e297b(0xbc)] = _0x3e297b(0xb2)),
                    (_0x2bbd48[_0x3e297b(0x1b2)]["opacity"] = _0x3e297b(0x1eb));
                }
              ),
              (_0x4486a6[_0xad907f(0xbc)] = _0x106069["ascending"]
                ? "&#x25B2;"
                : _0xad907f(0xe7)),
              (_0x4486a6["style"][_0xad907f(0xfd)] = "1");
          }),
          _0x50e9ac[_0x5d65f7(0x19d)](_0x51094f);
      } else _0x50e9ac[_0x5d65f7(0x1c2)] = _0x552438[_0x5d65f7(0xc1)];
      (_0x50e9ac["style"][_0x5d65f7(0x1e6)] = _0x5d65f7(0x177)),
        (_0x50e9ac[_0x5d65f7(0x1b2)][_0x5d65f7(0x168)] = _0x5d65f7(0x11d)),
        (_0x50e9ac[_0x5d65f7(0x1b2)][_0x5d65f7(0x9d)] = _0x5d65f7(0x115)),
        (_0x50e9ac[_0x5d65f7(0x1b2)][_0x5d65f7(0x10d)] = "left"),
        (_0x50e9ac[_0x5d65f7(0x1b2)][_0x5d65f7(0x1c3)] = _0x5d65f7(0x1a6)),
        _0x55c7bb[_0x5d65f7(0x19d)](_0x50e9ac);
    }),
      _0x4104cb[_0x410ddf(0x19d)](_0x55c7bb);
    const _0x127f15 = document[_0x410ddf(0x16d)](_0x410ddf(0xa1));
    _0x4104cb[_0x410ddf(0x19d)](_0x127f15);
    const _0x5a25ac = document["createDocumentFragment"]();
    _0x51fb0d["forEach"]((_0x11b595, _0x5c2666) => {
      const _0x341a2d = _0x410ddf,
        _0xb3e675 = document["createElement"]("tr");
      (_0xb3e675[_0x341a2d(0x1b2)][_0x341a2d(0xa0)] = _0x341a2d(0x114)),
        (_0xb3e675[_0x341a2d(0x1b2)][_0x341a2d(0x195)] =
          _0x5c2666 % 0x2 === 0x0 ? _0x341a2d(0x1c6) : "white"),
        (_0xb3e675[_0x341a2d(0x10b)] = function () {
          const _0x258134 = _0x341a2d;
          this["style"][_0x258134(0x195)] = "#e9ebee";
        }),
        (_0xb3e675["onmouseout"] = function () {
          const _0x571d10 = _0x341a2d;
          this[_0x571d10(0x1b2)][_0x571d10(0x195)] =
            _0x5c2666 % 0x2 === 0x0 ? _0x571d10(0x1c6) : "white";
        });
      const _0x449df2 = document[_0x341a2d(0x16d)]("td");
      _0x449df2[_0x341a2d(0x1b2)]["textAlign"] = _0x341a2d(0xae);
      const _0x7dd5a1 = document[_0x341a2d(0x16d)]("input");
      (_0x7dd5a1[_0x341a2d(0xf9)] = _0x341a2d(0x1e9)),
        (_0x7dd5a1[_0x341a2d(0xe6)]["userId"] = _0x11b595["id"]),
        (_0x7dd5a1[_0x341a2d(0x1ce)] = _0x11b595[_0x341a2d(0x9e)]),
        (_0x7dd5a1["style"][_0x341a2d(0xb4)] = _0x11b595[_0x341a2d(0x9e)]
          ? _0x341a2d(0x1c5)
          : _0x341a2d(0x180)),
        _0x449df2["appendChild"](_0x7dd5a1),
        _0xb3e675[_0x341a2d(0x19d)](_0x449df2),
        [
          _0x11b595[_0x341a2d(0x12c)] +
            (_0x11b595[_0x341a2d(0x9e)] ? _0x341a2d(0xcb) : ""),
          _0x11b595[_0x341a2d(0xfe)],
          _0x11b595[_0x341a2d(0x1d0)],
          _0x11b595["role"],
          _0x11b595[_0x341a2d(0x197)] || "N/A",
          _0x11b595["status"],
        ][_0x341a2d(0xd5)]((_0x2c7667, _0x9f88e1) => {
          const _0xca5780 = _0x341a2d,
            _0x447337 = document["createElement"]("td");
          (_0x447337["textContent"] = _0x2c7667),
            (_0x447337["style"][_0xca5780(0x1e6)] = _0xca5780(0x177));
          _0x9f88e1 === 0x0 &&
            _0x11b595[_0xca5780(0x9e)] &&
            ((_0x447337["style"][_0xca5780(0x1c3)] = "bold"),
            (_0x447337[_0xca5780(0x1b2)][_0xca5780(0x9d)] = _0xca5780(0xc7)));
          _0x9f88e1 === 0x3 &&
            _0x2c7667 === _0xca5780(0x102) &&
            ((_0x447337["style"][_0xca5780(0x9d)] = "#4267B2"),
            (_0x447337[_0xca5780(0x1b2)][_0xca5780(0x1c3)] = _0xca5780(0x181)));
          if (_0x9f88e1 === 0x5) {
            if (_0x2c7667 === _0xca5780(0x19c))
              _0x447337[_0xca5780(0x1b2)][_0xca5780(0x9d)] = _0xca5780(0x96);
            else
              _0x2c7667 === "PENDING" &&
                (_0x447337[_0xca5780(0x1b2)][_0xca5780(0x9d)] =
                  _0xca5780(0x1b7));
          }
          _0xb3e675[_0xca5780(0x19d)](_0x447337);
        });
      const _0x2b5994 = document[_0x341a2d(0x16d)]("td");
      (_0x2b5994["style"]["padding"] = _0x341a2d(0x177)),
        _0x2b5994["classList"][_0x341a2d(0x125)](_0x341a2d(0x12b)),
        (_0x2b5994[_0x341a2d(0x1b2)][_0x341a2d(0x1c3)] = _0x341a2d(0x181)),
        _0xb3e675[_0x341a2d(0x19d)](_0x2b5994),
        _0x5a25ac[_0x341a2d(0x19d)](_0xb3e675);
    }),
      _0x127f15[_0x410ddf(0x19d)](_0x5a25ac),
      _0xa159d3[_0x410ddf(0x19d)](_0x4104cb);
    const _0x3a5354 = document[_0x410ddf(0x16d)]("div");
    (_0x3a5354[_0x410ddf(0x1b2)][_0x410ddf(0xf6)] = _0x410ddf(0x130)),
      (_0x3a5354["style"]["display"] = _0x410ddf(0xc5)),
      (_0x3a5354[_0x410ddf(0x1b2)][_0x410ddf(0xaf)] = _0x410ddf(0xfa)),
      (_0x3a5354[_0x410ddf(0x1b2)][_0x410ddf(0x1e1)] = _0x410ddf(0xae)),
      (_0x3a5354[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = _0x410ddf(0xfc)),
      (_0x3a5354[_0x410ddf(0x1b2)][_0x410ddf(0xfb)] = _0x410ddf(0x114));
    const _0x46fc0f = document[_0x410ddf(0x16d)](_0x410ddf(0x179)),
      _0x57cdab = document[_0x410ddf(0x16d)](_0x410ddf(0x94));
    (_0x57cdab[_0x410ddf(0xf9)] = "checkbox"),
      (_0x57cdab["id"] = _0x410ddf(0xb6)),
      (_0x57cdab["style"][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      (_0x57cdab["onchange"] = () => {
        const _0xe3363f = _0x410ddf,
          _0x14b1c9 = _0x4104cb[_0xe3363f(0x17d)](_0xe3363f(0xc6));
        _0x14b1c9[_0xe3363f(0xd5)](
          (_0x1e26b1) => (_0x1e26b1["checked"] = _0x57cdab[_0xe3363f(0x117)])
        );
      });
    const _0x526d9b = document[_0x410ddf(0x16d)](_0x410ddf(0xc1));
    (_0x526d9b[_0x410ddf(0x194)] = _0x410ddf(0xb6)),
      (_0x526d9b[_0x410ddf(0x1c2)] = "\x20Select\x20All"),
      (_0x526d9b[_0x410ddf(0x1b2)][_0x410ddf(0x13b)] = _0x410ddf(0x162)),
      (_0x526d9b[_0x410ddf(0x1b2)][_0x410ddf(0x9d)] = "#4267B2"),
      (_0x526d9b["style"][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      _0x46fc0f[_0x410ddf(0x19d)](_0x57cdab),
      _0x46fc0f[_0x410ddf(0x19d)](_0x526d9b),
      _0x3a5354[_0x410ddf(0x19d)](_0x46fc0f);
    const _0x1cfdee = document[_0x410ddf(0x16d)](_0x410ddf(0x13f));
    (_0x1cfdee[_0x410ddf(0x1c2)] = _0x410ddf(0xcf)),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0x1e6)] = _0x410ddf(0xf5)),
      (_0x1cfdee["style"][_0x410ddf(0x168)] = _0x410ddf(0x1e8)),
      (_0x1cfdee["style"][_0x410ddf(0x9d)] = "white"),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0xca)] = _0x410ddf(0xd7)),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0x11e)] = "4px"),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0x1c3)] = "bold"),
      (_0x1cfdee[_0x410ddf(0x1b2)][_0x410ddf(0x10e)] = _0x410ddf(0x148)),
      (_0x1cfdee[_0x410ddf(0x10b)] = function () {
        const _0x374a56 = _0x410ddf;
        (this[_0x374a56(0x1b2)][_0x374a56(0x168)] =
          "linear-gradient(to\x20bottom,\x20#c82333,\x20#bd2130)"),
          (this["style"][_0x374a56(0x1b4)] = _0x374a56(0x1e2));
      }),
      (_0x1cfdee[_0x410ddf(0x153)] = function () {
        const _0x405681 = _0x410ddf;
        (this[_0x405681(0x1b2)]["background"] = _0x405681(0x1e8)),
          (this[_0x405681(0x1b2)][_0x405681(0x1b4)] = _0x405681(0xd7));
      }),
      (_0x1cfdee[_0x410ddf(0x123)] = async () => {
        const _0x46fbcc = _0x410ddf,
          _0x38bbf1 = _0x4104cb[_0x46fbcc(0x17d)](_0x46fbcc(0x18e));
        if (_0x38bbf1[_0x46fbcc(0x121)] === 0x0) {
          alert("Please\x20select\x20at\x20least\x20one\x20admin");
          return;
        }
        if (
          !confirm(
            _0x46fbcc(0x9a) + _0x38bbf1[_0x46fbcc(0x121)] + _0x46fbcc(0xa9)
          )
        )
          return;
        for (const _0x58ab0e of _0x38bbf1) {
          const _0x182cda = _0x58ab0e[_0x46fbcc(0xe6)][_0x46fbcc(0xe1)],
            _0x5c7811 = _0x58ab0e[_0x46fbcc(0xac)]("tr"),
            _0x140c16 = _0x5c7811[_0x46fbcc(0xba)](".status-cell");
          _0x140c16["textContent"] = "Deleting...";
          try {
            let _0x5c3666;
            _0x5c7811["cells"][0x6][_0x46fbcc(0x1c2)] === "PENDING"
              ? (_0x5c3666 = await _0x4d3b1e(_0x2102e0, _0x2db1cc, _0x182cda))
              : (_0x5c3666 = await _0xdbb1b6(_0x2102e0, _0x2db1cc, _0x182cda)),
              (_0x140c16[_0x46fbcc(0x1c2)] = _0x5c3666
                ? _0x46fbcc(0x14e)
                : "×\x20Failed"),
              (_0x140c16["style"]["color"] = _0x5c3666
                ? _0x46fbcc(0x96)
                : _0x46fbcc(0x147)),
              _0x5c3666 &&
                ((_0x58ab0e["disabled"] = !![]),
                (_0x5c7811[_0x46fbcc(0x1b2)][_0x46fbcc(0xfd)] = "0.5"));
          } catch (_0xbca1b9) {
            (_0x140c16["textContent"] = "×\x20Error"),
              (_0x140c16[_0x46fbcc(0x1b2)][_0x46fbcc(0x9d)] = "red");
          }
        }
      }),
      _0x3a5354[_0x410ddf(0x19d)](_0x1cfdee);
    const _0x4f5da4 = document["createElement"]("button");
    (_0x4f5da4[_0x410ddf(0x1c2)] = _0x410ddf(0xce)),
      (_0x4f5da4["style"][_0x410ddf(0x1e6)] = "8px\x2016px"),
      (_0x4f5da4[_0x410ddf(0x1b2)][_0x410ddf(0x168)] =
        "linear-gradient(to\x20bottom,\x20#f0ad4e,\x20#ec971f)"),
      (_0x4f5da4["style"][_0x410ddf(0x9d)] = "white"),
      (_0x4f5da4[_0x410ddf(0x1b2)][_0x410ddf(0xca)] = _0x410ddf(0xd7)),
      (_0x4f5da4[_0x410ddf(0x1b2)][_0x410ddf(0x11e)] = _0x410ddf(0x14c)),
      (_0x4f5da4[_0x410ddf(0x1b2)]["cursor"] = "pointer"),
      (_0x4f5da4["style"][_0x410ddf(0x1c3)] = _0x410ddf(0x181)),
      (_0x4f5da4[_0x410ddf(0x1b2)][_0x410ddf(0x10e)] = _0x410ddf(0x148)),
      (_0x4f5da4[_0x410ddf(0x1b2)][_0x410ddf(0x13b)] = _0x410ddf(0xe2)),
      (_0x4f5da4["onmouseover"] = function () {
        const _0xef8c97 = _0x410ddf;
        (this[_0xef8c97(0x1b2)][_0xef8c97(0x168)] = _0xef8c97(0x159)),
          (this[_0xef8c97(0x1b2)][_0xef8c97(0x1b4)] = _0xef8c97(0x1e2));
      }),
      (_0x4f5da4[_0x410ddf(0x153)] = function () {
        const _0x1f08d5 = _0x410ddf;
        (this[_0x1f08d5(0x1b2)]["background"] = _0x1f08d5(0x11f)),
          (this["style"]["boxShadow"] = "none");
      });
    const _0x83d8e6 = _0x51fb0d["find"]((_0x1ffa81) => _0x1ffa81["isYou"]);
    !_0x83d8e6
      ? ((_0x4f5da4[_0x410ddf(0x1ce)] = !![]),
        (_0x4f5da4[_0x410ddf(0x1b2)]["opacity"] = "0.5"),
        (_0x4f5da4[_0x410ddf(0x138)] = _0x410ddf(0x10c)))
      : (_0x4f5da4["onclick"] = async () => {
          const _0x3c819f = _0x410ddf,
            _0x4aa0ff =
              _0x3c819f(0x1ad) +
              _0x83d8e6[_0x3c819f(0x12c)] +
              "\x20(" +
              (_0x83d8e6[_0x3c819f(0xfe)] || _0x3c819f(0xc2)) +
              ")";
          if (!confirm(_0x4aa0ff)) return;
          if (!confirm(_0x3c819f(0xcc))) return;
          const _0x486358 = document[_0x3c819f(0x16d)](_0x3c819f(0x179));
          (_0x486358[_0x3c819f(0x1b2)][_0x3c819f(0x1e6)] = _0x3c819f(0xe2)),
            (_0x486358[_0x3c819f(0x1b2)]["marginTop"] = _0x3c819f(0xe2)),
            (_0x486358["style"][_0x3c819f(0x10d)] = _0x3c819f(0xae)),
            (_0x486358[_0x3c819f(0x1b2)][_0x3c819f(0x1c3)] = _0x3c819f(0x181)),
            (_0x486358[_0x3c819f(0x1b2)][_0x3c819f(0x11e)] = _0x3c819f(0x14c)),
            (_0x486358[_0x3c819f(0x1c2)] = _0x3c819f(0xc3)),
            (_0x486358[_0x3c819f(0x1b2)]["backgroundColor"] = _0x3c819f(0x1db)),
            _0xa159d3[_0x3c819f(0x19d)](_0x486358);
          try {
            _0x4f5da4[_0x3c819f(0x1ce)] = !![];
            const _0x3eb6ab = await _0x48fcea(
              _0x2102e0,
              _0x2db1cc,
              _0x83d8e6["id"]
            );
            _0x3eb6ab
              ? ((_0x486358[_0x3c819f(0x1c2)] = _0x3c819f(0xb9)),
                (_0x486358["style"][_0x3c819f(0x195)] = _0x3c819f(0x9c)),
                (_0x486358[_0x3c819f(0x1b2)][_0x3c819f(0x9d)] =
                  _0x3c819f(0x19b)),
                setTimeout(() => {
                  const _0x26793d = _0x3c819f;
                  _0x809e22(),
                    document[_0x26793d(0xe4)][_0x26793d(0x122)](_0xa159d3),
                    window[_0x26793d(0xc4)][_0x26793d(0xbb)]();
                }, 0x1388))
              : ((_0x486358[_0x3c819f(0x1c2)] = _0x3c819f(0x1a2)),
                (_0x486358[_0x3c819f(0x1b2)]["backgroundColor"] =
                  _0x3c819f(0x9f)),
                (_0x486358[_0x3c819f(0x1b2)]["color"] = _0x3c819f(0x15e)),
                (_0x4f5da4[_0x3c819f(0x1ce)] = ![]));
          } catch (_0x454045) {
            (_0x486358[_0x3c819f(0x1c2)] =
              "Error\x20occurred:\x20" +
              (_0x454045[_0x3c819f(0x143)] || _0x3c819f(0x116))),
              (_0x486358["style"]["backgroundColor"] = _0x3c819f(0x9f)),
              (_0x486358["style"][_0x3c819f(0x9d)] = _0x3c819f(0x15e)),
              (_0x4f5da4[_0x3c819f(0x1ce)] = ![]);
          }
        });
    _0x3a5354["appendChild"](_0x4f5da4), _0xa159d3[_0x410ddf(0x19d)](_0x3a5354);
    const _0x1c8f58 = document[_0x410ddf(0x16d)]("div");
    (_0x1c8f58[_0x410ddf(0x1b2)][_0x410ddf(0xe9)] = _0x410ddf(0x1dc)),
      (_0x1c8f58[_0x410ddf(0xbc)] =
        _0x410ddf(0x1a0) +
        bandodeptrai +
        "\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x20noreferrer\x22\x20style=\x22color:\x20#0d5ed4;\x20text-decoration:\x20none;\x22>Ban\x20Do</a></strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22opacity:\x200.8;\x22>\x20|\x20Distribution\x20by:\x20<a\x20href=\x22https://" +
        bandodeptrai +
        _0x410ddf(0x165) +
        bandodeptrai +
        ".com\x20&\x20Accwoow.com</a></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20");
    const _0x57854c = _0x1c8f58[_0x410ddf(0x17d)]("a");
    _0x57854c[_0x410ddf(0xd5)]((_0x239b6f) => {
      const _0x45e126 = _0x410ddf;
      _0x239b6f[_0x45e126(0xb5)](_0x45e126(0x124), function () {
        const _0x414d8a = _0x45e126;
        (this[_0x414d8a(0x1b2)][_0x414d8a(0x1de)] = "underline"),
          (this[_0x414d8a(0x1b2)]["color"] = _0x414d8a(0x188));
      }),
        _0x239b6f["addEventListener"](_0x45e126(0xa6), function () {
          const _0x8c6e5f = _0x45e126;
          (this[_0x8c6e5f(0x1b2)]["textDecoration"] = _0x8c6e5f(0xd7)),
            (this["style"][_0x8c6e5f(0x9d)] = _0x8c6e5f(0x173));
        });
    }),
      _0xa159d3[_0x410ddf(0x19d)](_0x1c8f58);
    const _0x3871b1 = document[_0x410ddf(0x16d)]("button");
    (_0x3871b1[_0x410ddf(0x1c2)] = "×"),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x1c8)] = "absolute"),
      (_0x3871b1[_0x410ddf(0x1b2)]["top"] = _0x410ddf(0x177)),
      (_0x3871b1["style"][_0x410ddf(0x18a)] = _0x410ddf(0x177)),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x195)] = _0x410ddf(0x1be)),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0xca)] = _0x410ddf(0xd7)),
      (_0x3871b1["style"][_0x410ddf(0xed)] = "28px"),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x105)] = _0x410ddf(0xa3)),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x12a)] = _0x410ddf(0xa3)),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x1c3)] = _0x410ddf(0x181)),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0x9d)] = "#4267B2"),
      (_0x3871b1[_0x410ddf(0x1b2)][_0x410ddf(0xb4)] = _0x410ddf(0x180)),
      (_0x3871b1[_0x410ddf(0x1b2)]["transition"] = _0x410ddf(0x1d7)),
      (_0x3871b1[_0x410ddf(0x10b)] = function () {
        const _0x184861 = _0x410ddf;
        this["style"]["color"] = _0x184861(0x175);
      }),
      (_0x3871b1[_0x410ddf(0x153)] = function () {
        const _0x1e8e49 = _0x410ddf;
        this[_0x1e8e49(0x1b2)][_0x1e8e49(0x9d)] = _0x1e8e49(0xc7);
      }),
      (_0x3871b1[_0x410ddf(0x123)] = () => {
        const _0x4dacfa = _0x410ddf;
        _0x809e22(), document["body"][_0x4dacfa(0x122)](_0xa159d3);
      }),
      _0xa159d3[_0x410ddf(0x19d)](_0x3871b1),
      _0x40bd49(_0xa159d3, {
        searchInput: _0x2ae2e2,
        searchFn: _0xdb1c3[_0x410ddf(0x123)],
        refreshFn: _0x439944["onclick"],
        selectAllCheckbox: _0x57cdab,
        deleteBtn: _0x1cfdee,
        closeBtn: _0x3871b1,
      }),
      document[_0x410ddf(0xe4)]["appendChild"](_0xa159d3);
  }
  function _0x62e687(_0xd46731) {
    const _0x4b3071 = _0x29ab13;
    let _0x20e739 = 0x0,
      _0x1b2416 = 0x0,
      _0x1725e1 = 0x0,
      _0x1bb8ae = 0x0;
    const _0x5566be = document["createElement"](_0x4b3071(0x179));
    (_0x5566be[_0x4b3071(0x1b2)][_0x4b3071(0x1c8)] = _0x4b3071(0x186)),
      (_0x5566be[_0x4b3071(0x1b2)][_0x4b3071(0xbd)] = "0"),
      (_0x5566be[_0x4b3071(0x1b2)]["left"] = "0"),
      (_0x5566be[_0x4b3071(0x1b2)]["right"] = "0"),
      (_0x5566be[_0x4b3071(0x1b2)]["height"] = _0x4b3071(0x113)),
      (_0x5566be[_0x4b3071(0x1b2)][_0x4b3071(0xb4)] = _0x4b3071(0x12f)),
      (_0x5566be["style"][_0x4b3071(0xf4)] = "1"),
      (_0x5566be["title"] = "Drag\x20to\x20move"),
      _0xd46731[_0x4b3071(0x19d)](_0x5566be),
      (_0xd46731["style"][_0x4b3071(0x1c8)] = _0x4b3071(0x132)),
      (_0x5566be[_0x4b3071(0x15a)] = _0x30cf4d);
    function _0x30cf4d(_0x3d8995) {
      const _0x59ce0c = _0x4b3071;
      (_0x3d8995 = _0x3d8995 || window[_0x59ce0c(0x19e)]),
        _0x3d8995[_0x59ce0c(0x16f)](),
        (_0x1725e1 = _0x3d8995[_0x59ce0c(0x1bd)]),
        (_0x1bb8ae = _0x3d8995[_0x59ce0c(0x1a5)]),
        (document[_0x59ce0c(0xf8)] = _0xf0d2a),
        (document[_0x59ce0c(0x136)] = _0x548a6e);
    }
    function _0x548a6e(_0x5b12ed) {
      const _0x2e779d = _0x4b3071;
      (_0x5b12ed = _0x5b12ed || window["event"]),
        _0x5b12ed[_0x2e779d(0x16f)](),
        (_0x20e739 = _0x1725e1 - _0x5b12ed[_0x2e779d(0x1bd)]),
        (_0x1b2416 = _0x1bb8ae - _0x5b12ed[_0x2e779d(0x1a5)]),
        (_0x1725e1 = _0x5b12ed[_0x2e779d(0x1bd)]),
        (_0x1bb8ae = _0x5b12ed[_0x2e779d(0x1a5)]),
        (_0xd46731["style"]["top"] =
          _0xd46731[_0x2e779d(0x16e)] - _0x1b2416 + "px"),
        (_0xd46731["style"][_0x2e779d(0x97)] =
          _0xd46731[_0x2e779d(0xb7)] - _0x20e739 + "px");
    }
    function _0xf0d2a() {
      const _0x4a0f31 = _0x4b3071;
      (document[_0x4a0f31(0xf8)] = null), (document[_0x4a0f31(0x136)] = null);
    }
  }
  function _0x38f5eb(_0x5b27b9, _0x50f25b, _0x44cdd9) {
    const _0x1fc1f8 = _0x29ab13,
      _0x126cef = Array[_0x1fc1f8(0x145)](
        _0x5b27b9["querySelector"](_0x1fc1f8(0xa1))[_0x1fc1f8(0x17d)]("tr")
      ),
      _0x9bda30 = _0x5b27b9[_0x1fc1f8(0xba)](_0x1fc1f8(0xa1)),
      _0x31119b = Array["from"](_0x5b27b9["querySelectorAll"]("th")),
      _0x10871b = {
        name: 0x1,
        email: 0x2,
        lastActive: 0x3,
        role: 0x4,
        userType: 0x5,
        status: 0x6,
      },
      _0x4ce727 = _0x10871b[_0x50f25b];
    if (!_0x4ce727) return;
    _0x126cef["sort"]((_0x38ba4c, _0x108c63) => {
      const _0x6a953b = _0x1fc1f8,
        _0x2d15aa =
          _0x38ba4c["cells"][_0x4ce727]["textContent"][_0x6a953b(0x1cb)](),
        _0x27d2c1 =
          _0x108c63[_0x6a953b(0x1e4)][_0x4ce727][_0x6a953b(0x1c2)][
            _0x6a953b(0x1cb)
          ]();
      if (_0x50f25b === _0x6a953b(0x1d0)) {
        if (_0x2d15aa === _0x6a953b(0x1dd) && _0x27d2c1 !== _0x6a953b(0x1dd))
          return _0x44cdd9 ? 0x1 : -0x1;
        if (_0x27d2c1 === "N/A" && _0x2d15aa !== _0x6a953b(0x1dd))
          return _0x44cdd9 ? -0x1 : 0x1;
        if (_0x2d15aa === "N/A" && _0x27d2c1 === _0x6a953b(0x1dd)) return 0x0;
        const _0x5b7665 = (_0x4ce9c1) => {
            const _0x285849 = _0x6a953b,
              _0x288b31 = _0x4ce9c1[_0x285849(0x167)](
                /(\d+)\s+(second|minute|hour|day|month|year)s?\s+ago/
              );
            if (!_0x288b31) return Infinity;
            const _0x3aa643 = parseInt(_0x288b31[0x1]),
              _0x2f68ff = _0x288b31[0x2];
            switch (_0x2f68ff) {
              case _0x285849(0x1ca):
                return _0x3aa643;
              case "minute":
                return _0x3aa643 * 0x3c;
              case _0x285849(0x18b):
                return _0x3aa643 * 0xe10;
              case _0x285849(0x1d3):
                return _0x3aa643 * 0x15180;
              case _0x285849(0x176):
                return _0x3aa643 * 0x278d00;
              case _0x285849(0xee):
                return _0x3aa643 * 0x1e13380;
              default:
                return Infinity;
            }
          },
          _0x77e7a5 = _0x5b7665(_0x2d15aa),
          _0x4bee6c = _0x5b7665(_0x27d2c1);
        return _0x44cdd9 ? _0x77e7a5 - _0x4bee6c : _0x4bee6c - _0x77e7a5;
      }
      return _0x44cdd9
        ? _0x2d15aa[_0x6a953b(0xdf)](_0x27d2c1)
        : _0x27d2c1[_0x6a953b(0xdf)](_0x2d15aa);
    }),
      _0x126cef[_0x1fc1f8(0xd5)]((_0x215732) =>
        _0x215732[_0x1fc1f8(0x137)][_0x1fc1f8(0x122)](_0x215732)
      ),
      _0x126cef[_0x1fc1f8(0xd5)]((_0x1d5261) =>
        _0x9bda30["appendChild"](_0x1d5261)
      );
  }
  async function _0x515149(_0x9377a4, _0x2fe57, _0x452f72) {
    const _0x3708ef = _0x29ab13,
      _0x1d16a2 = document[_0x3708ef(0x16d)](_0x3708ef(0x179));
    (_0x1d16a2["style"]["cssText"] =
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20"),
      (_0x1d16a2[_0x3708ef(0xbc)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x20flex-direction:\x20column;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner\x22\x20style=\x22border:\x203px\x20solid\x20#f3f3f3;\x20border-top:\x203px\x20solid\x20#4267B2;\x20border-radius:\x2050%;\x20width:\x2030px;\x20height:\x2030px;\x20animation:\x20spin\x201s\x20linear\x20infinite;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#4267B2;\x20font-weight:\x20bold;\x22>Loading\x20BM:\x20" +
        _0x9377a4 +
        _0x3708ef(0x128)),
      _0x452f72[_0x3708ef(0x19d)](_0x1d16a2);
    try {
      _0x46b053(_0x9377a4);
      const _0x1c9a35 = await _0x30daac(_0x9377a4, _0x2fe57, 0x1, 0x1);
      if (!_0x1c9a35 || _0x1c9a35[_0x3708ef(0x121)] === 0x0)
        throw new Error(_0x3708ef(0x12d));
      const _0x395715 = await _0x30daac(_0x9377a4, _0x2fe57, 0x19);
      if (!_0x395715 || _0x395715[_0x3708ef(0x121)] === 0x0)
        throw new Error("No\x20admin\x20data\x20found\x20for\x20this\x20BM");
      _0x150613(_0x9377a4, _0x395715),
        document["body"][_0x3708ef(0x122)](_0x452f72),
        _0x809e22(),
        _0x46ec43(_0x395715, _0x9377a4, _0x2fe57);
    } catch (_0x227ed8) {
      console[_0x3708ef(0x17e)](_0x3708ef(0x152), _0x227ed8),
        _0x452f72[_0x3708ef(0x122)](_0x1d16a2);
      const _0x135673 = document[_0x3708ef(0x16d)](_0x3708ef(0x179));
      (_0x135673["style"][_0x3708ef(0xe9)] = _0x3708ef(0x1bb)),
        (_0x135673[_0x3708ef(0xbc)] =
          _0x3708ef(0x133) + _0x227ed8[_0x3708ef(0x143)] + _0x3708ef(0x109)),
        _0x452f72[_0x3708ef(0x19d)](_0x135673),
        setTimeout(() => {
          const _0x103b8d = _0x3708ef;
          try {
            _0x135673[_0x103b8d(0x111)] &&
              _0x452f72[_0x103b8d(0x122)](_0x135673);
          } catch (_0x1d11e9) {}
        }, 0x1388);
    }
  }
  function _0x40bd49(_0x83a3fe, _0x3b2c5a) {
    const _0x497ad0 = _0x29ab13,
      {
        searchInput: _0x223642,
        searchFn: _0x4da414,
        refreshFn: _0x29198f,
        selectAllCheckbox: _0x3b5946,
        deleteBtn: _0xe0aaff,
        closeBtn: _0x39738f,
      } = _0x3b2c5a,
      _0x281616 = function (_0x2a9db1) {
        const _0x27fb18 = _0x4b0a;
        if (!_0x83a3fe[_0x27fb18(0x1a4)]) return;
        _0x2a9db1[_0x27fb18(0x1d9)] === _0x27fb18(0x126) &&
          (_0x39738f[_0x27fb18(0xc0)](), _0x2a9db1[_0x27fb18(0x16f)]()),
          ((_0x2a9db1[_0x27fb18(0x1e5)] &&
            _0x2a9db1[_0x27fb18(0x1d9)] === "f") ||
            _0x2a9db1[_0x27fb18(0x1d9)] === "/") &&
            (_0x223642[_0x27fb18(0x158)](), _0x2a9db1[_0x27fb18(0x16f)]()),
          _0x2a9db1[_0x27fb18(0x1e5)] &&
            _0x2a9db1["key"] === "b" &&
            _0x4da414 &&
            (_0x4da414(), _0x2a9db1[_0x27fb18(0x16f)]()),
          _0x2a9db1[_0x27fb18(0x1e5)] &&
            _0x2a9db1[_0x27fb18(0x1d9)] === "r" &&
            _0x29198f &&
            (_0x29198f(), _0x2a9db1["preventDefault"]()),
          _0x2a9db1["ctrlKey"] &&
            _0x2a9db1[_0x27fb18(0x1d9)] === "a" &&
            _0x3b5946 &&
            ((_0x3b5946["checked"] = !_0x3b5946[_0x27fb18(0x117)]),
            _0x3b5946["dispatchEvent"](new Event(_0x27fb18(0x184))),
            _0x2a9db1[_0x27fb18(0x16f)]());
      };
    document["addEventListener"](_0x497ad0(0xd4), _0x281616),
      _0xee3679[_0x497ad0(0x108)]({
        element: document,
        type: "keydown",
        handler: _0x281616,
      }),
      (_0x223642["title"] = _0x497ad0(0x189));
    if (_0x3b5946) _0x3b5946[_0x497ad0(0x138)] = _0x497ad0(0x112);
    if (_0x39738f) _0x39738f["title"] = _0x497ad0(0x151);
  }
  function _0x809e22() {
    const _0x3dd252 = _0x29ab13;
    _0xee3679[_0x3dd252(0xd5)](
      ({ element: _0x272e60, type: _0x568996, handler: _0x81dfb5 }) => {
        _0x272e60["removeEventListener"](_0x568996, _0x81dfb5);
      }
    ),
      (_0xee3679["length"] = 0x0);
  }
}
const existingTool = document[_0x16c676(0xdd)](_0x16c676(0x1aa));
existingTool &&
  (console[_0x16c676(0xa2)](
    "Removing\x20existing\x20BM\x20Admin\x20Tool\x20instance"
  ),
  document[_0x16c676(0xe4)]["removeChild"](existingTool),
  window["_bmAdminToolEventListeners"] &&
    (window[_0x16c676(0xf2)]["forEach"](
      ({ element: _0x5705bb, type: _0x184677, handler: _0x2fd80a }) => {
        const _0x340422 = _0x16c676;
        _0x5705bb[_0x340422(0xec)](_0x184677, _0x2fd80a);
      }
    ),
    (window[_0x16c676(0xf2)] = [])));
function _0x4b0a(_0x1071d7, _0xcf6268) {
  const _0x11419a = _0x1141();
  return (
    (_0x4b0a = function (_0x4b0a6b, _0x4c06ff) {
      _0x4b0a6b = _0x4b0a6b - 0x93;
      let _0x5e7716 = _0x11419a[_0x4b0a6b];
      return _0x5e7716;
    }),
    _0x4b0a(_0x1071d7, _0xcf6268)
  );
}
atob(_0x16c676(0x183)) === bandodeptrai && simpleBMAdminTool();
function _0x1141() {
  const _0x179b0c = [
    "0\x202px\x205px\x20rgba(0,0,0,0.1)",
    "removeEventListener",
    "fontSize",
    "year",
    "Could\x20not\x20get\x20BM\x20ID\x20or\x20token.\x20Are\x20you\x20on\x20a\x20Facebook\x20Business\x20Manager\x20page?",
    "BusinessUnifiedNavigationContext",
    "Business\x20Manager\x20Admins\x20(",
    "_bmAdminToolEventListeners",
    "userInfoForSelection",
    "zIndex",
    "8px\x2016px",
    "marginTop",
    "Role",
    "onmouseup",
    "type",
    "space-between",
    "borderTop",
    "10px\x200",
    "opacity",
    "email",
    "1px\x20solid\x20#ddd",
    "column",
    "%22%2C%22surfaceParams%22%3Anull%7D&server_timestamps=true&doc_id=23932916982960697&access_token=",
    "Full",
    "then",
    "action",
    "width",
    "Refresh\x20current\x20BM\x20data\x20(Ctrl+R)",
    "\x20seconds\x20ago",
    "push",
    "</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22this.parentElement.remove()\x22\x20style=\x22margin-top:\x2010px;\x20background:\x20#dc3545;\x20color:\x20white;\x20border:\x20none;\x20padding:\x205px\x2010px;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "transform",
    "onmouseover",
    "Cannot\x20identify\x20your\x20user\x20account",
    "textAlign",
    "transition",
    "API\x20Error:",
    "removed_business_user_id",
    "parentElement",
    "Select\x20all\x20admins\x20(Ctrl+A)",
    "20px",
    "1px\x20solid\x20#e9ebee",
    "white",
    "Unknown\x20error",
    "checked",
    "role",
    "value",
    "Using\x20cached\x20data",
    "catch",
    "placeholder",
    "linear-gradient(to\x20bottom,\x20#4267B2,\x20#365899)",
    "borderRadius",
    "linear-gradient(to\x20bottom,\x20#f0ad4e,\x20#ec971f)",
    "All\x20Statuses",
    "length",
    "removeChild",
    "onclick",
    "mouseover",
    "add",
    "Escape",
    "insertBefore",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "backed_user_type",
    "height",
    "status-cell",
    "name",
    "No\x20access\x20to\x20this\x20BM\x20or\x20BM\x20does\x20not\x20exist",
    "50%",
    "move",
    "15px",
    "Total\x20admins\x20loaded:\x20",
    "fixed",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20loading\x20BM</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>",
    "display",
    "1160403BpbEBH",
    "onmousemove",
    "parentNode",
    "title",
    "BusinessRoleRequest",
    "margin",
    "marginLeft",
    "roleColumn",
    "Error\x20refreshing:",
    "/?method=POST&access_token=",
    "button",
    "https://business.facebook.com/select",
    "540612RfizWw",
    "%22",
    "message",
    "26796360qpPjHo",
    "from",
    "Error\x20canceling\x20invite:",
    "red",
    "all\x200.2s\x20ease",
    "business_settings_remove_pending_user",
    "Status",
    "json",
    "4px",
    "getAccessToken",
    "✓\x20Deleted",
    "remove",
    "parse",
    "Close\x20panel\x20(Esc)",
    "Error\x20loading\x20BM:",
    "onmouseout",
    "details",
    "monospace",
    "data",
    "node",
    "focus",
    "linear-gradient(to\x20bottom,\x20#ec971f,\x20#d58512)",
    "onmousedown",
    "hiubdn",
    "__typename",
    "2px",
    "#721c24",
    "Error\x20fetching\x20admins\x20on\x20page\x20",
    "13px",
    "span",
    "5px",
    "0.9",
    "auto",
    ".com\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x20noreferrer\x22\x20style=\x22color:\x20#0d5ed4;\x20text-decoration:\x20none;\x22>",
    "%22%7D&server_timestamps=true&doc_id=24401670346098526&access_token=",
    "match",
    "background",
    "end_cursor",
    "edges",
    "function",
    "now",
    "createElement",
    "offsetTop",
    "preventDefault",
    "%22%2C%22businessUserID%22%3A%22",
    "0\x200\x2010px\x20rgba(0,0,0,0.2)",
    "Pending",
    "#0d5ed4",
    "business_users_and_invitations",
    "#dc3545",
    "month",
    "8px",
    "overflowY",
    "div",
    "Enter\x20BM\x20ID\x20to\x20search:",
    "invited_email",
    "Full\x20control",
    "querySelectorAll",
    "error",
    "\x20hours\x20ago",
    "pointer",
    "bold",
    "Email",
    "bWF4dmlhODg=",
    "change",
    "&expiry_time=-99",
    "absolute",
    "6px\x2010px",
    "#1877f2",
    "Type\x20to\x20search\x20(Ctrl+F\x20or\x20/\x20to\x20focus)",
    "right",
    "hour",
    "bm_admin_tool_data",
    "head",
    "input[type=\x22checkbox\x22]:checked:not([disabled])",
    "\x20years\x20ago",
    "children",
    "Search\x20by\x20name\x20or\x20email",
    "abort",
    "has_next_page",
    "htmlFor",
    "backgroundColor",
    "%22%7D&server_timestamps=true&doc_id=6587364614658388&access_token=",
    "UserType",
    "translate(-50%,\x20-50%)",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner\x22\x20style=\x22border:\x203px\x20solid\x20#f3f3f3;\x20border-top:\x203px\x20solid\x20#4267B2;\x20border-radius:\x2050%;\x20width:\x2020px;\x20height:\x2020px;\x20animation:\x20spin\x201s\x20linear\x20infinite;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Loading\x20admins...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "fontFamily",
    "#155724",
    "CONFIRMED",
    "appendChild",
    "event",
    "8FFqrZO",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22opacity:\x200.8;\x22>Developed\x20by:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#0d5ed4;\x22><a\x20href=\x22https://t.me/noti_",
    "toLowerCase",
    "Failed\x20to\x20remove\x20your\x20access.\x20Please\x20try\x20again\x20later.",
    "fb-tool-error-close",
    "isConnected",
    "clientY",
    "500",
    "PENDING",
    "success",
    "BM\x20Admin\x20Tool\x20started.\x20Look\x20for\x20the\x20popup\x20on\x20the\x20page.",
    "bm-admin-tool-container",
    "removeItem",
    "9999",
    "Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20yourself\x20from\x20this\x20Business\x20Manager?\x0a\x0aYou\x20are\x20removing:\x20",
    "3206200YmWLBo",
    "href",
    "statusColumn",
    "floor",
    "style",
    "https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsRemovePendingUserMutation&variables=%7B%22businessRoleRequestID%22%3A%22",
    "boxShadow",
    "1qHKYCW",
    "rgba(255,255,255,0.3)",
    "orange",
    "100%",
    "linear-gradient(to\x20right,\x20#4267B2,\x20#5b7bd5)",
    "permitted_business_account_tasks_summary",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f8d7da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#721c24;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f5c6cb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "th\x20span:nth-child(2)",
    "clientX",
    "transparent",
    "Action",
    "Error:",
    "userType",
    "textContent",
    "fontWeight",
    "11px",
    "not-allowed",
    "#f5f6f7",
    "business_user_for_viewer",
    "position",
    "Error\x20saving\x20to\x20cache:",
    "second",
    "trim",
    "Error\x20initializing\x20tool.\x20Are\x20you\x20on\x20Facebook\x20Business\x20Manager?",
    "BM\x20ID:\x20",
    "disabled",
    "maxHeight",
    "lastActive",
    "3px",
    "80vh",
    "day",
    "rgba(255,255,255,0.8)",
    "28px",
    "getTime",
    "all\x200.2s",
    "6ZjtYcC",
    "key",
    "select",
    "#f8f9fa",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f8f9fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#e9ebee;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#65676b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "N/A",
    "textDecoration",
    "map",
    "Please\x20go\x20to\x20a\x20Facebook\x20Business\x20Manager\x20page\x20and\x20try\x20again.",
    "alignItems",
    "0\x202px\x205px\x20rgba(0,0,0,0.2)",
    "Search\x20BM\x20by\x20ID\x20(Ctrl+B)",
    "cells",
    "ctrlKey",
    "padding",
    "&#x21bb;",
    "linear-gradient(to\x20bottom,\x20#dc3545,\x20#c82333)",
    "checkbox",
    "option",
    "0.7",
    "page_info",
    "%2C%22first%22%3A",
    "borderCollapse",
    "input",
    "primary_access_summary",
    "green",
    "left",
    "16px",
    "GET",
    "Delete\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#e74c3c;\x20margin-top:\x200;\x20font-size:\x2018px;\x22>Initialization\x20Failed</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-bottom:\x2015px;\x20color:\x20#333;\x22>",
    "#d4edda",
    "color",
    "isYou",
    "#f8d7da",
    "borderBottom",
    "tbody",
    "log",
    "38px",
    "Code\x20by\x20hiubdn.com",
    "900352ewrhpl",
    "mouseout",
    "https://graph.facebook.com/v18.0/",
    "timeout",
    "\x20selected\x20admin(s)?",
    "950px",
    "businessID",
    "closest",
    "Error\x20removing\x20admin:",
    "center",
    "justifyContent",
    "@keyframes\x20spin\x20{\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x20}",
    "3491775KvkhDM",
    "&#x25B2;&#x25BC;",
    "table",
    "cursor",
    "addEventListener",
    "select-all",
    "offsetLeft",
    "ascending",
    "You\x20have\x20been\x20successfully\x20removed\x20from\x20this\x20Business\x20Manager.\x20This\x20window\x20will\x20close\x20in\x205\x20seconds...",
    "querySelector",
    "reload",
    "innerHTML",
    "top",
    "13296105baFAbg",
    "include",
    "click",
    "label",
    "No\x20email",
    "Removing\x20your\x20access...",
    "location",
    "flex",
    "input[type=\x22checkbox\x22]:not([disabled])",
    "#4267B2",
    "marginBottom",
    "business_settings_remove_business_user",
    "border",
    "\x20(You)",
    "WARNING:\x20This\x20action\x20cannot\x20be\x20undone.\x20Continue?",
    "https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BizKitSettingsRemoveBusinessUserMutation&variables=%7B%22businessID%22%3A%22",
    "Remove\x20Myself",
    "Delete\x20Selected\x20Admins",
    "User\x20Type",
    "setItem",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22font-size:\x2012px;\x20color:\x20#777;\x20margin-bottom:\x2015px;\x22>",
    "Error\x20loading\x20admin\x20data.\x20See\x20console\x20for\x20details.",
    "keydown",
    "forEach",
    "text",
    "none",
    "No\x20admin\x20data\x20found",
    "Confirmed",
    "Could\x20not\x20get\x20BM\x20ID\x20or\x20token.",
    "\x20minutes\x20ago",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner\x22\x20style=\x22border:\x203px\x20solid\x20#f3f3f3;\x20border-top:\x203px\x20solid\x20#4267B2;\x20border-radius:\x2050%;\x20width:\x2020px;\x20height:\x2020px;\x20animation:\x20spin\x201s\x20linear\x20infinite;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Refreshing...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getElementById",
    "flexDirection",
    "localeCompare",
    "%2C%22isBulkUserRemovalEnabled%22%3Atrue%2C%22isUnifiedSettings%22%3Atrue%2C%22orderBy%22%3A%22MOST_RECENTLY_CREATED%22%2C%22permissions%22%3A%5B%5D%2C%22searchTerm%22%3Anull%2C%22id%22%3A%22",
    "userId",
    "10px",
    "nameColumn",
    "body",
    "getItem",
    "dataset",
    "&#x25BC;",
    "gap",
    "cssText",
    "last_active_time",
  ];
  _0x1141 = function () {
    return _0x179b0c;
  };
  return _0x1141();
}
console[_0x16c676(0xa2)](_0x16c676(0x1a9)),
  console[_0x16c676(0xa2)](_0x16c676(0xa4));
