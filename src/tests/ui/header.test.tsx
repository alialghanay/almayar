import Header from '@/components/ui/header';
import { render, screen } from '@testing-library/react'

describe("Testing Header", () => {
    beforeEach(() => {
        render(<Header />);
    });
    it(
        'humbarger menu in small screens', () => {
            const humburgerMenu = screen.getAllByRole('button', { name: /menu/i });
            expect(humburgerMenu).toBeInTheDocument();
        }
    );
   
}
);