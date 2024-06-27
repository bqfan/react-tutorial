import { expect, it, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import { PostContainer } from '../components/PostContainer';
import { UserContext } from '../utils/contexts/UserContext';

describe('render context values', () => {
    it('should match snapshot', () => {
        const mockUserContextData = {
            id: 1001,
            username: "user1001",
            email: "user1001@example.com",
            displayName: "User1001",
            setUserData: () => {},
        };

        const { container } = render(
            <UserContext.Provider value={mockUserContextData}>
                <PostContainer />;
            </UserContext.Provider>
        );

        expect(container).toMatchSnapshot();
    })

    it('should display correct username', () => {
        const mockUserContextData = {
            id: 1001,
            username: "user1001",
            email: "user1001@example.com",
            displayName: "User1001",
            setUserData: () => {},
        };

        const { container } = render(
            <UserContext.Provider value={mockUserContextData}>
                <PostContainer />;
            </UserContext.Provider>
        );

        expect(screen.getByText('Username: user1001')).toBeInTheDocument();

    })
})
