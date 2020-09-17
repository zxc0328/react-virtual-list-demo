import React, { useRef, useEffect, useState } from "react";

import { DIRECTION, SCROLL_PROP, SIZE_PROP, POSITION_PROP } from "./consts";
import SizeAndPositionManager from "./SizeAndPositionManager";
import "./index.css";

interface Props {
  /** list window height, required in vertical mode */
  height?: number;
  /** list window width, required in horizontal mode */
  width?: number;
  /** pre-render item count (prevent empty content when scroll fast) */
  overscanCount?: number;
  className?: string;
  itemSize: number;
  renderListItem: (
    data: any,
    index: number,
    style: React.CSSProperties
  ) => React.ReactNode;
  renderCellWarpper?: (
    items: React.ReactNode[],
    style: React.CSSProperties
  ) => React.ReactNode;
  dataSource: any[];
  scrollDirection?: DIRECTION;
  [key: string]: any;
}

interface IndexableHTMLDivElement extends HTMLDivElement {
  [key: string]: any;
}

const ITEM_STYLE: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
};

const getItemStyle = (
  manager: SizeAndPositionManager,
  index: number,
  scrollDirection: DIRECTION
) => {
  const { size, offset } = manager.getSizeAndPositionForIndex(index);

  return {
    ...ITEM_STYLE,
    [SIZE_PROP[scrollDirection]]: size,
    [POSITION_PROP[scrollDirection]]: offset,
  };
};

const VirtualList: React.FC<Props> = (props) => {
  const {
    dataSource,
    renderListItem,
    height,
    itemSize,
    width,
    overscanCount = 5,
    scrollDirection = DIRECTION.VERTICAL,
    className,
    renderCellWarpper,
  } = props;

  const listEl = useRef<HTMLDivElement>(null);
  const sizeAndPositionManager = useRef(
    new SizeAndPositionManager({
      itemCount: dataSource.length,
      itemSizeGetter: () => itemSize,
      estimatedItemSize: 50,
    })
  );

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const ele = listEl.current;
    const onScroll = () => {
      if (ele) {
        const currOffset: number = (ele as IndexableHTMLDivElement)[
          SCROLL_PROP[scrollDirection]
        ];

        if (currOffset < 0 || currOffset === offset) {
          return;
        }

        setOffset(currOffset);
      }
    };

    if (ele) {
      ele.addEventListener("scroll", onScroll, {
        passive: true,
      });
    }

    return () => {
      if (ele) {
        ele.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  const items: React.ReactNode[] = [];
  const { start, stop } = sizeAndPositionManager.current.getVisibleRange({
    containerSize: props[SIZE_PROP[scrollDirection]] || 0,
    offset,
    overscanCount,
  });

  if (typeof start !== "undefined" && typeof stop !== "undefined") {
    for (let index = start; index <= stop; index++) {
      items.push(
        renderListItem(
          dataSource[index],
          index,
          getItemStyle(sizeAndPositionManager.current, index, scrollDirection)
        )
      );
    }
  }

  const listStyle: React.CSSProperties = {};
  if (height) {
    listStyle.height = `${height}px`;
  }
  if (width) {
    listStyle.width = `${width}px`;
  }

  const cellWarpperStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100%",
    position: "relative",
    [SIZE_PROP[scrollDirection]]: sizeAndPositionManager.current.getTotalSize(),
  };

  return (
    <div ref={listEl} className={`virtual-list ${className}`} style={listStyle}>
      {renderCellWarpper ? (
        renderCellWarpper(items, cellWarpperStyle)
      ) : (
        <div className="virtual-list-container" style={cellWarpperStyle}>
          {items}
        </div>
      )}
    </div>
  );
};

export default VirtualList;
