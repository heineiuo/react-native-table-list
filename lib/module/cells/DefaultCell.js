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
import { DefaultCellContentComponent } from '../default-components/DefaultCellContentComponent';
import { DefaultCellImageComponent } from '../default-components/DefaultCellImageComponent';
import { SectionCell } from './SectionCell';
export function DefaultCell(info) {
    var item = info.item;
    var _a = item.CellContentComponent, CellContentComponent = _a === void 0 ? DefaultCellContentComponent : _a, _b = item.CellImageComponent, CellImageComponent = _b === void 0 ? DefaultCellImageComponent : _b, _c = item.CellAccessoryComponent, CellAccessoryComponent = _c === void 0 ? DefaultCellAccessoryComponent : _c;
    return (_jsxs(SectionCell, __assign({}, info, { children: [_jsx(CellImageComponent, __assign({}, info)), _jsx(CellContentComponent, __assign({}, info)), _jsx(CellAccessoryComponent, __assign({}, info))] })));
}
//# sourceMappingURL=DefaultCell.js.map