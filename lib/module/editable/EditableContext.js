import { createContext, useContext } from 'react';
export var EditableContext = createContext({});
export var EditableCellContext = createContext({
    fieldId: '',
});
export function useEditableCell() {
    return useContext(EditableCellContext);
}
//# sourceMappingURL=EditableContext.js.map