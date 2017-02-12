///<reference types="react" />

export = Highlight;
export as namespace Highlight;
import * as React from "react";

declare namespace Highlight {
	interface HighlightProps extends React.Props<Highlight> {
    lang: string;
    value: string;
	}

}
declare class Highlight extends React.Component<Highlight.HighlightProps, any> {
  constructor(props:Highlight.HighlightProps);
}