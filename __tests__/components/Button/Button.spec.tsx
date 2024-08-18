import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';

import Button from '@/app/components/Button';

describe('Button Component', () => {
  const onPressMock = jest.fn();
  const labelMock = 'Label';
  const accessibilityLabelMock = 'Accessibility Label';

  beforeEach(() => {
    onPressMock.mockReset();

    render(<Button label={labelMock} onPress={onPressMock} accessibilityLabel={accessibilityLabelMock} />);
  });

  it('should render correctly with the given label', () => {
    expect(screen.getByText(labelMock)).toBeTruthy();
  });

  it('should handle press events', () => {
    fireEvent.press(screen.getByText(labelMock));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should handle multiple press events', () => {
    fireEvent.press(screen.getByText(labelMock));
    fireEvent.press(screen.getByText(labelMock));
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });

  it('should apply custom props correctly', () => {
    expect(screen.getByLabelText(accessibilityLabelMock)).toBeTruthy();
  });

  it('should be disabled when the disabled prop is passed', () => {
    render(<Button label={labelMock} onPress={onPressMock} disabled />);
    fireEvent.press(screen.getByText(labelMock));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('should render without crashing if no onPress is provided', () => {
    render(<Button label={labelMock} />);
    fireEvent.press(screen.getByText(labelMock));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(<Button label={labelMock} onPress={onPressMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
