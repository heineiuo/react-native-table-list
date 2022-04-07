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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DefaultCellAccessoryComponent } from '../default-components/DefaultCellAccessoryComponent';
import { DefaultCellImageComponent } from '../default-components/DefaultCellImageComponent';
import { EditableCellContext } from '../editable/EditableContext';
import { WidgetMap } from '../widgets/WidgetMap';
import { SectionCell } from './SectionCell';
export function WidgetCell(info) {
    var item = info.item, updateField = info.updateField;
    var _a = item.CellImageComponent, CellImageComponent = _a === void 0 ? DefaultCellImageComponent : _a, _b = item.CellAccessoryComponent, CellAccessoryComponent = _b === void 0 ? DefaultCellAccessoryComponent : _b;
    var Widget = function () { return null; };
    var widgetName = item.widgetName;
    if (widgetName in WidgetMap) {
        Widget = WidgetMap[widgetName];
    }
    return (_jsxs(SectionCell, __assign({}, info, { children: [_jsx(CellImageComponent, __assign({}, info)), _jsx(EditableCellContext.Provider, __assign({ value: __assign(__assign({}, item), { updateField: updateField }) }, { children: _jsx(Widget, __assign({}, info)) })), _jsx(CellAccessoryComponent, __assign({}, info))] })));
}
//# sourceMappingURL=WidgetCell.js.map