import React, { useState } from "react";
import {
    Field,
} from "../../../../../components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "../../../../../components/ui/input-group";

export default function InputFieldComponent() {
    const [text, setText] = useState("");
    const maxChars = 380;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= maxChars) {
            setText(e.target.value);
        }
    };
    return (
        <Field>
            <InputGroup
                style={{
                    border:
                        text.length === maxChars
                            ? "1px solid red"
                            : "1px solid #ccc",
                }}
            >
                <InputGroupTextarea
                    id="block-end-textarea"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={handleChange}
                />
                <InputGroupAddon align="block-end">
                    <InputGroupText>
                        {text.length}/{maxChars}
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </Field>
    );
}
