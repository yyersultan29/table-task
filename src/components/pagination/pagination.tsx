import React from "react";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, maxPage, onChange } = props;
  if (maxPage === 0) return null;

  const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  };

  const paginationRange = React.useMemo(() => {
    const siblingCount = 1;
    const totalPageNumber = siblingCount + 5;

    if (totalPageNumber >= maxPage) {
      return range(1, maxPage);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, maxPage);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex <= maxPage - 2;

    const firstPageIndex = 1;
    const lastPageIndex = maxPage;

    // Show dots on the right side [1,2,3,4,5,..., 100]
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, "...", maxPage];
    }

    // Show dots on the left side [1,..., 96,97,98,99,100]
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(maxPage - rightItemCount + 1, maxPage);
      return [firstPageIndex, "...", ...rightRange];
    }

    // Show dots on the center [1,...,5,6,7,8,9,...,100]
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  }, [currentPage, maxPage]);

  const handleChange = (page: number): void => {
    if (page === currentPage) return;
    if (page >= 1 && page <= maxPage) {
      onChange(page);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
      }}
    >
      <button
        disabled={currentPage === 1}
        style={{ padding: "0 5px", fontWeight: 600 }}
        onClick={(): void => handleChange(currentPage - 1)}
      >
        prev
      </button>

      {paginationRange?.map((item, idx) => {
        if (item === "...") {
          return <div key={idx}> &#8230; </div>;
        }

        const isActive = currentPage === Number(item);
        return (
          <button
            key={idx}
            color={isActive ? "secondary" : "onyx"}
            onClick={(): void => handleChange(Number(item))}
            style={{ padding: 0, minWidth: "30px", fontWeight: 600 }}
          >
            {item}
          </button>
        );
      })}

      <button
        disabled={currentPage === maxPage}
        style={{ padding: "0 5px", fontWeight: 600 }}
        onClick={(): void => handleChange(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
};
