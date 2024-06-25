import { expect, it, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('App', () => {
    it('should render users', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    describe('Edit Button is clicked', () => {
        it('should render save button', async () => {
            render(<App />);
            // console.log(screen.getByText("Edit"));
            const editButton = screen.getByRole('button', { name: "Edit" });
            await userEvent.click(editButton);
            const saveButton = screen.getByRole('button', { name: "Save" });
            expect(saveButton).toBeInTheDocument();
        });
    
        it('should display username & email input fields', async () => {
            render(<App />);
            const editButton = screen.getByRole('button', { name: "Edit" });
            await userEvent.click(editButton);
            expect(screen.getByRole('textbox', { name: 'username' })).toBeInTheDocument();
            expect(screen.getByRole('textbox', { name: 'email' })).toBeInTheDocument();
        });
    })
});
