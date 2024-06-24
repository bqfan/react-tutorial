import { describe, it, test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
    it('should render username', async () => {
        const result = render(<UsernameDisplay username="User 1" />);
        // expect(result.container).toMatchSnapshot();
        // try {
        //     expect(screen.getByText("User 1"));  
        // } catch (err) {
        //     expect(err.toBeDefined);
        // }
        // expect(screen.queryByText("User 1")).toBeNull();
        // expect(screen.queryByText("User 1")).not.toBeInTheDocument();
        expect(await screen.findByText("User 1", {}, { timeout: 2000 })).toBeInTheDocument();

        // expect(screen.getByText(/User/)).toBeInTheDocument;
        
        // const elements = screen.getAllByText("User 1");
        // elements.forEach((element) => expect(element).toBeInTheDocument());
    })
})
