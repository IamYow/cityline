// ==UserScript==
// @name         city line
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       Andre
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @include      /shows.cityline.com/
// @include      /venue.cityline.com/
// ==/UserScript==

(function() {
    'use strict';
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList") {
                // 当有子节点被添加或删除时，这个函数会被调用
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        console.log("Element added:", node);
                        // 在这里执行你的操作

                        if (window.location.host.startsWith('shows')) {
                            const _0x38f454 = a0_0x3a5f39;
                            let _0x3954d9 = _currEvent[_0x38f454(0x1fb)] + draftEnd
                            , _0xacc31a = _currEvent[_0x38f454(0x19a)][_0x38f454(0x1b1)] ? getHkDateMill(_currEvent[_0x38f454(0x19a)][_0x38f454(0x1b1)]) : '';
                            var _0x1623a6 = _0x38f454(0x1e0) + _currEvent[_0x38f454(0x1ad)] + '/' + _0x3954d9 + '.' + _0xacc31a + '.' + simpleHash(_0x3954d9 + _0xacc31a + _0x38f454(0x1f0)) + _0x38f454(0x210) + getHKDate()[_0x38f454(0x1ae)]();
                            const _0x5c4387 = _lang == 'En' ? 'EN' : 'TW', _0x54fbfa = isApp() ? '' : window[_0x38f454(0x1f5)]('');

                            $[_0x38f454(0x21e)](_0x1623a6, function(_0x258aa7, _0x2db20f, _0x1785d1) {
                                const _0x7bda1e = _0x38f454;
                                if (_0x1785d1['status'] == 0xc8) {
                                    var _0x14bcee = _0x258aa7[_0x5c4387];
                                    if (!_0x14bcee) {
                                        const _0x450eee = new URL(_0x258aa7['url']);
                                        _0x450eee['searchParams'][_0x7bda1e(0x1d4)](_0x7bda1e(0x206), [_0x5c4387]),
                                            _0x14bcee = _0x450eee[_0x7bda1e(0x1a6)]();
                                    }
                                    isApp() ? window[_0x7bda1e(0x1df)]['href'] = _0x14bcee : _0x54fbfa[_0x7bda1e(0x1df)] = _0x14bcee;
                                }
                            })[_0x38f454(0x194)](function(_0xb96d9a) {
                                const _0x5440c2 = _0x38f454;
                                console[_0x5440c2(0x211)](_0xb96d9a),
                                    _0x54fbfa[_0x5440c2(0x215)](),
                                    setTimeout(()=>{
                                    const _0x46addc = _0x5440c2;
                                    alert(_0x46addc(0x1e1));
                                }
                                               , 0x32);
                            });
                        }

                        if (window.location.host.startsWith('venue')) {
                            if($('.ticketCard').length > 0) {
                                $('.ticketCard button').click();
                            }
                        }
                    }
                });
                mutation.removedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        console.log("Element removed:", node);
                    }
                });
            }
        });
    });

    // 配置观察器
    var config = { childList: true, subtree: true };

    if ($('.buyTicketBox').length > 0) {
        // 开始观察目标元素
        observer.observe($('.buyTicketBox')[0], config);
    }

    if ($('.puchase-bottom').length > 0) {
        observer.observe($('.puchase-bottom')[0], config);
    }

})();