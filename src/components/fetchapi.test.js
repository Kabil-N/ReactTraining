import { assertExpressionStatement } from "@babel/types"
import { render,screen,fireEvent,waitFor } from "@testing-library/react"
import Fetch from './fetch';
import axios from 'axios'
jest.mock('axios')
test('mock the fetch api',async ()=>{
    
    const res={data:{greeting:'Hello'}}
    axios.get.mockResolvedValue(res);

    render(<Fetch url='/greetings' />);
    fireEvent.click(screen.getByText('Load Greeting'))

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent('Hello')
    expect(screen.getByRole('button')).toBeDisabled()


})