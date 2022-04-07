"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DefaultCellAccessoryComponent_1 = require("../default-components/DefaultCellAccessoryComponent");
var DefaultCellContentComponent_1 = require("../default-components/DefaultCellContentComponent");
var DefaultCellImageComponent_1 = require("../default-components/DefaultCellImageComponent");
var SectionCell_1 = require("./SectionCell");
function DefaultCell(info) {
    var item = info.item;
    var _a = item.CellContentComponent, CellContentComponent = _a === void 0 ? DefaultCellContentComponent_1.DefaultCellContentComponent : _a, _b = item.CellImageComponent, CellImageComponent = _b === void 0 ? DefaultCellImageComponent_1.DefaultCellImageComponent : _b, _c = item.CellAccessoryComponent, CellAccessoryComponent = _c === void 0 ? DefaultCellAccessoryComponent_1.DefaultCellAccessoryComponent : _c;
    return ((0, jsx_runtime_1.jsxs)(SectionCell_1.SectionCell, __assign({}, info, { children: [(0, jsx_runtime_1.jsx)(CellImageComponent, __assign({}, info)), (0, jsx_runtime_1.jsx)(CellContentComponent, __assign({}, info)), (0, jsx_runtime_1.jsx)(CellAccessoryComponent, __assign({}, info))] })));
}
exports.DefaultCell = DefaultCell;
//# sourceMappingURL=DefaultCell.js.map