"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableList = void 0;
var react_1 = require("react");
var TableList_new_1 = require("./TableList.new");
var TableList_old_1 = require("./TableList.old");
function TableList(props) {
    if (props.sections) {
        return (0, react_1.createElement)(TableList_old_1.TableList, props);
    }
    return (0, react_1.createElement)(TableList_new_1.TableList, props);
}
exports.TableList = TableList;
//# sourceMappingURL=TableList.js.map