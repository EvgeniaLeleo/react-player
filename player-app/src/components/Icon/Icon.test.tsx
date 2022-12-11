import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('<Icon />', () => {
  it('should render successfully and match snapshot', () => {
    const { container } = render(<Icon type="like"></Icon>);

    expect(container).toMatchSnapshot();
  });
});
