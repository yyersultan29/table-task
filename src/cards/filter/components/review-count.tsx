import { ChangeEvent, FC, memo } from "react";
import { Input } from "../../../components/input/input";

interface IProps {
  reviewCount: number;
  handleChangeReviewCount: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ReviewCountComponent: FC<IProps> = ({
  reviewCount,
  handleChangeReviewCount,
}) => {
  return (
    <Input
      label="Number of reviews (from)"
      placeholder="For example, from 10"
      value={reviewCount}
      onChange={handleChangeReviewCount}
    />
  );
};

export const ReviewCount = memo(ReviewCountComponent);
