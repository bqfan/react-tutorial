import { renderWithRouter } from "./utils/helpers";
import { expect, it, describe } from 'vitest';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it('should click on Users link and navigate to users route', async () => {
    renderWithRouter({ initialEntries: ["/"] });
    await userEvent.click(
        screen.getByRole('link', { name: 'Users'})
    );
    expect(screen.getByText('Welcome to Users Dashboard')).toBeInTheDocument();
})

it('should navigate to blogposts page and back to /', async () => {
    renderWithRouter({ initialEntries: ["/"] });
    await userEvent.click(
        screen.getByRole('link', { name: 'Blogs'})
    );
    expect(screen.getByText('Welcome to Blog Posts Page')).toBeInTheDocument();

    await userEvent.click(
        screen.getByRole('link', { name: 'Home'})
    );
    expect(screen.queryByText('Welcome to Blog Posts Page')).toBeNull();

})
