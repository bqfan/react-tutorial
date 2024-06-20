import { describe, it, test, expect } from 'vitest';
import { render } from "@testing-library/react";
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
    it('should render username', () => {
        const result = render(<UsernameDisplay username="User 1" />);
        expect(result.container).toMatchSnapshot();
    })
})