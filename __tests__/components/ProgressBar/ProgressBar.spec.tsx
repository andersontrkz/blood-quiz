import React from 'react';
import { Animated } from 'react-native';
import { render } from '@testing-library/react-native';

import ProgressBar from '@/app/components/ProgressBar';

describe('ProgressBar Component', () => {
  const progressMock = new Animated.Value(0);

  it('should render the progress bar correctly', () => {
    const { getByTestId } = render(
      <ProgressBar progress={progressMock} totalSteps={10} />
    );

    const progressBar = getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
  });

  it('should render correctly with at least 1 step', () => {
    const { getByTestId } = render(
      <ProgressBar progress={progressMock} totalSteps={1} />
    );

    const progressBar = getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
  });

  it('should render correctly with zero steps', () => {
    const { getByTestId } = render(
      <ProgressBar progress={progressMock} totalSteps={0} />
    );

    const progressBar = getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(
      <ProgressBar progress={progressMock} totalSteps={0} />
    );
  
    expect(toJSON()).toMatchSnapshot();
  });
});
