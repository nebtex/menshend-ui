///<reference types="react" />

export = Highlight;
export as namespace Highlight;
import * as React from "react";

declare namespace Highlight {
	interface HighlightProps extends React.Props<Highlight> {
    innerHTML?: boolean,
    className?: string,
    element?: string
	}

	export class Highlight extends React.Component<HighlightProps, any> {
    constructor(props:HighlightProps);
	}
}