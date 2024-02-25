import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon({completed,onComplete}) {
    return (
        <TodoIcon
            type="check"
            color={completed?'green':'#eaeaea'}
            onClick={onComplete}
        />
    );
}
export { CompleteIcon };