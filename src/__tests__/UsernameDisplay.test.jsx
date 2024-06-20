import { describe, it, test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
    it('should render username', () => {
        const result = render(<UsernameDisplay username="User 1" />);
        expect(result.container).toMatchSnapshot();
        expect(screen.getByText("User 1")).toBeInTheDocument;
        expect(screen.getByText(/User/)).toBeInTheDocument;
        
        const elements = screen.getAllByText("User 1");
        elements.forEach((element) => expect(element).toBeInTheDocument());
    })
})
