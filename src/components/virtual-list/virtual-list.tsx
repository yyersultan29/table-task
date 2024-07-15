export type VirtualListProps = {
  count: number;
  itemHeight: number;
  viewportHeight: number;
  children: (index: number) => React.ReactNode;
};
