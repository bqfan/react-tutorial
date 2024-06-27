import { expect, it, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import App from "../App";

describe('when there is only 1 user', () => {
    it('should render users', () => {
        const { container } = render(<App usersData={[]} />);
        expect(container).toMatchSnapshot();
    });

    describe('Edit Button is clicked and display save button', () => {
        it('should render save button', async () => {
            render(<App usersData={[
                {
                    id: 1,
                    username: "user1",
                    email: "user1@example.com"
                },
            ]} />);
            // console.log(screen.getByText("Edit"));
            const editButton = screen.getByRole('button', { name: "Edit" });
            await userEvent.click(editButton);
            const saveButton = screen.getByRole('button', { name: "Save" });
            expect(saveButton).toBeInTheDocument();
        });
    
        it('should display username & email input fields', async () => {
            render(<App  usersData={[
                {
                    id: 1,
                    username: "user1",
                    email: "user1@example.com"
                },
            ]} />);
            const editButton = screen.getByRole('button', { name: "Edit" });
            await userEvent.click(editButton);
            // expect(screen.getByRole('textbox', { name: 'username' })).toBeInTheDocument();
            // expect(screen.getByRole('textbox', { name: 'email' })).toBeInTheDocument();
            expect(screen.getByLabelText('Username:')).toBeInTheDocument();
            expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        });
    })
});

describe('when there is only 2 user', () => {
    it('should have two users', () => {
        render(<App usersData={[
            {
                id: 1,
                username: "user1",
                email: "user1@example.com"
            },
            {
                id: 2,
                username: "user2",
                email: "user2@example.com"
            },
        ]} />);

        expect(screen.getByText('user1')).toBeInTheDocument();
        expect(screen.getByText('user2')).toBeInTheDocument();
    })

    it('should click edit button for 1st user', async () => {
        render(<App usersData={[
            {
                id: 1,
                username: "user1",
                email: "user1@example.com"
            },
            {
                id: 2,
                username: "user2",
                email: "user2@example.com"
            },
        ]} />);

        const userDetails = screen.getByTestId('user-details-1');
        expect(within(userDetails).getByText('user1')).toBeInTheDocument();
        expect(within(userDetails).queryByText('user2')).toBeNull();
        const editBtn = within(userDetails).getByRole('button', { name: "Edit" });
        await userEvent.click(editBtn);
        expect(within(userDetails).getByRole("button", { name: 'Save' })).toBeInTheDocument;
    })

    it('should edit 2nd username and save', async () => {
        render(<App usersData={[
            {
                id: 1,
                username: "user1",
                email: "user1@example.com"
            },
            {
                id: 2,
                username: "user2",
                email: "user2@example.com"
            },
        ]} />);
        
        const userDetails = screen.getByTestId('user-details-2');
        expect(within(userDetails).getByText('user2')).toBeInTheDocument();
        expect(within(userDetails).queryByText('user1')).toBeNull();

        await userEvent.click(
            within(userDetails).getByRole('button', { name: "Edit" })
        );

        await userEvent.type(
            within(userDetails).getByLabelText('Username:'),
            'edited'
        );

        await userEvent.click(
            within(userDetails).getByRole('button', { name: 'Save' })
        );

        expect(
            within(userDetails).queryByLabelText('Username:')
        ).toBeNull();

        expect(
            within(userDetails).getByText('user2edited')
        ).toBeInTheDocument();
    })
});

describe('Updating UserContext', () => {
    it('should update displayName', async () => {
        render(<App usersData={[]} />);

        await userEvent.type(
            screen.getByLabelText("Update Name:"),
            "Updated Display Name"
        );
        
        await userEvent.click(
            screen.getByRole("button", "Update Display Name")
        );

        expect(screen.getByText("Display Name: Updated Display Name")).toBeInTheDocument();
    })
})
