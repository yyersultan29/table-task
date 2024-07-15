import { FC, ForwardedRef, forwardRef } from "react";

export type VirtualListProps = {
  count: number;
  itemHeight: number;
  viewportHeight: number;
  children: (index: number) => React.ReactNode;
};

export const VirtualList = forwardRef<any, VirtualListProps>(
  (props, ref: ForwardedRef<any>) => {
    const { children } = props;

    return (
      <div
        ref={ref}
        className={`flex flex-col overflow-y-scroll h-[${props.viewportHeight}px] `}
      >
        <h1>Hello</h1>
        {props}
      </div>
    );
  },
);
