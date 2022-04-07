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
exports.WidgetCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DefaultCellAccessoryComponent_1 = require("../default-components/DefaultCellAccessoryComponent");
var DefaultCellImageComponent_1 = require("../default-components/DefaultCellImageComponent");
var EditableContext_1 = require("../editable/EditableContext");
var WidgetMap_1 = require("../widgets/WidgetMap");
var SectionCell_1 = require("./SectionCell");
function WidgetCell(info) {
    var item = info.item, updateField = info.updateField;
    var _a = item.CellImageComponent, CellImageComponent = _a === void 0 ? DefaultCellImageComponent_1.DefaultCellImageComponent : _a, _b = item.CellAccessoryComponent, CellAccessoryComponent = _b === void 0 ? DefaultCellAccessoryComponent_1.DefaultCellAccessoryComponent : _b;
    var Widget = function () { return null; };
    var widgetName = item.widgetName;
    if (widgetName in WidgetMap_1.WidgetMap) {
        Widget = WidgetMap_1.WidgetMap[widgetName];
    }
    return ((0, jsx_runtime_1.jsxs)(SectionCell_1.SectionCell, __assign({}, info, { children: [(0, jsx_runtime_1.jsx)(CellImageComponent, __assign({}, info)), (0, jsx_runtime_1.jsx)(EditableContext_1.EditableCellContext.Provider, __assign({ value: __assign(__assign({}, item), { updateField: updateField }) }, { children: (0, jsx_runtime_1.jsx)(Widget, __assign({}, info)) })), (0, jsx_runtime_1.jsx)(CellAccessoryComponent, __assign({}, info))] })));
}
exports.WidgetCell = WidgetCell;
//# sourceMappingURL=WidgetCell.js.map