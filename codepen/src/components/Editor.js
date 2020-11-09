import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor( displayName) {
    return (
        <div className="editor-container">
            <div className="editor-title">
            {displayName}
            <button>O/C</button>
            </div>
            <ControlledEditor
             onBeforeChange={handleChange}
            />
        </div>
    )
}
