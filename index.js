// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var toasty_component_1 = require('./src/toasty.component');
var toast_component_1 = require('./src/toast.component');
var toasty_service_1 = require('./src/toasty.service');
__export(require('./src/toasty.component'));
__export(require('./src/toast.component'));
__export(require('./src/toasty.service'));
__export(require('./src/toasty.utils'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [toasty_service_1.ToastyConfig, toasty_service_1.ToastyService],
    directives: [toasty_component_1.ToastyComponent, toast_component_1.ToastComponent]
};
//# sourceMappingURL=index.js.map