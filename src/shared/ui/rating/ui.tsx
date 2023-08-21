import classNames from 'classnames';
import styles from './styles.module.scss';

interface RatingProps {
  className?: string;
  size?: 'small' | 'medium';
  showState?: boolean;
  rating: number;
}

export const Rating = ({
  showState,
  size = 'medium',
  rating,
  className,
}: RatingProps) => {
  const isHighRating = rating >= 6;

  return (
    <span
      className={classNames(
        styles.rating,
        showState && isHighRating && styles.isHighRating,
        styles[size],
        className,
      )}
    >
      {rating.toFixed(1)}
    </span>
  );
};
