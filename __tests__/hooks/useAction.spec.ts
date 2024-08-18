import { useDispatch } from 'react-redux';
import { renderHook, act } from '@testing-library/react-native';

import { useAction } from '@/app/hooks/useAction';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('useAction Hook', () => {
  const dispatchMock = jest.fn();
  const mockAction = jest.fn((value: string) => ({ type: 'MOCK_ACTION', payload: value }));

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a function that dispatches the action', () => {
    const mockValue = 'MOCK_VALUE';

    const { result } = renderHook(() => useAction(mockAction));

    act(() => {
      result.current(mockValue);
    });

    expect(mockAction).toHaveBeenCalledWith(mockValue);
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'MOCK_ACTION', payload: mockValue });
  });

  it('should memoize the returned function', () => {
    const { result, rerender } = renderHook(() => useAction(mockAction));

    const firstCall = result.current;

    rerender(result);

    const secondCall = result.current;

    expect(firstCall).toBe(secondCall);
  });
});
