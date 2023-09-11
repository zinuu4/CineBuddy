import classNames from 'classnames';
import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

import { Icon } from '../icon';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, value, onClear, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnBlur = () => {
      if (value === '') {
        setIsFocus(false);
      }
    };

    return (
      <div className={styles.field}>
        <label className={styles.label}>
          <span
            className={classNames(
              styles.placeholder,
              isFocus && styles.isFocus,
            )}
          >
            {placeholder}
          </span>
          <input
            ref={ref}
            value={value}
            onBlur={handleOnBlur}
            className={classNames(
              'input-reset',
              styles.input,
              className,
              isFocus && styles.isFocus,
            )}
            onFocus={() => setIsFocus(true)}
            {...props}
          />
        </label>
        <button
          onClick={onClear}
          className={classNames(
            'btn-reset',
            value && styles.visible,
            styles.clearBtn,
          )}
          type="button"
        >
          <Icon name="close" />
        </button>
      </div>
    );
  },
);
