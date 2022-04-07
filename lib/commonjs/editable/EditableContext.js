"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditableCell = exports.EditableCellContext = exports.EditableContext = void 0;
var react_1 = require("react");
exports.EditableContext = (0, react_1.createContext)({});
exports.EditableCellContext = (0, react_1.createContext)({
    fieldId: '',
});
function useEditableCell() {
    return (0, react_1.useContext)(exports.EditableCellContext);
}
exports.useEditableCell = useEditableCell;
//# sourceMappingURL=EditableContext.js.map