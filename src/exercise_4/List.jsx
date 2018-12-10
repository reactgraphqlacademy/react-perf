import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      availableHeight: 0,
      scrollTop: 0
    };
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    console.log("clientHeight", this.wrapper.current.clientHeight);

    this.setState({
      availableHeight: this.wrapper.current.clientHeight
    });
  }

  handleScroll = event => {
    this.setState({
      scrollTop: event.target.scrollTop
    });
  };

  render() {
    const { numRows, rowHeight } = this.props;
    const totalHeight = rowHeight * numRows;

    const { availableHeight, scrollTop } = this.state;
    const scrollBottom = scrollTop + availableHeight;

    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 20);
    const endIndex = Math.min(
      numRows,
      Math.ceil(scrollBottom / rowHeight) + 20
    );

    const items = [];
    // TODO the padding top should be a dynamic value
    const paddingTop = 0;

    let index = startIndex;
    while (index < endIndex) {
      items.push(<ListItem key={index} index={index} />);
      index++;
    }

    return (
      <div
        style={{ height: "100%", overflowY: "scroll" }}
        ref={this.wrapper}
        onScroll={this.handleScroll}
      >
        <ol
          style={{
            paddingTop,
            pointerEvents: "none",
            height: totalHeight
          }}
        >
          {items}
        </ol>
      </div>
    );
  }
}

export default List;
