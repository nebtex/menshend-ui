///<reference types="react" />

// import * as React from "react";
// export = MonacoEditor;

// declare namespace MonacoEditor {
// 	interface MonacoEditorProps extends React.Props<MonacoEditor> {
//     width?: any;
//     height?: any;
//     value?: string;
//     defaultValue?: string;
//     language?: string;
//     theme?: string;
//     options?: any;
//     editorDidMount?: any;
//     editorWillMount?: any;
//     onChange?: any;
//     requireConfig?: any;
// 	}
// }

// declare class MonacoEditor extends React.Component<MonacoEditor.MonacoEditorProps, any> {
//   constructor(props:MonacoEditor.MonacoEditorProps);
// }

interface MonacoEditorProps {
  width?: any;
  height?: any;
  value?: string;
  defaultValue?: string;
  language?: string;
  theme?: string;
  options?: any;
  editorDidMount?: any;
  editorWillMount?: any;
  onChange?: any;
  requireConfig?: any;
}

declare function MonacoEditor(): React.Component< MonacoEditorProps, {}>;

declare namespace MonacoEditor { }

export default MonacoEditor;
