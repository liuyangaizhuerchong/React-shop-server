import React from "react";
// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";

export default function RichBraftEditor({ editorState, setEditorState }) {
  // console.log(editorState);
  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <>
      {editorState ? (
        <div
          className="output-content"
          dangerouslySetInnerHTML={{ __html: editorState }}
        ></div>
      ) : (
        <BraftEditor
          className="editor-wrapper"
          value={editorState}
          onChange={handleEditorChange}
        />
      )}
    </>
  );
}
