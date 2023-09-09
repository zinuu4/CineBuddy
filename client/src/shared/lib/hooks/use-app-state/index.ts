/* eslint-disable boundaries/element-types */
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import {
  RootState,
  AppDispatch,
} from '@/app/providers/store-provider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
