import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

/**
 * Кастомний хук для отримання dispatch.
 */
export const useAppDispatch = () => useDispatch();

/**
 * Кастомний хук для селекторів Redux.
 * Додає мемоізацію для оптимізації продуктивності.
 */
export const useAppSelector = (selector) => {
  return useSelector(selector, useMemo);
};
