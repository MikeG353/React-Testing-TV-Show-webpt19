import React from 'react'
import { fireEvent,  render, wait } from '@testing-library/react'
import App from './App'
import { fetchShow as mockFetchShow } from './api/fetchShow'
import { showFixture } from './components/Episodes.test'
jest.mock("./api/fetchShow")


test("App renders with show data loaded.", async () => {
    mockFetchShow.mockResolvedValueOnce(showFixture)
    
    const { getByText } = render(<App />)    

    expect(getByText(/fetching data.../i)).toBeInTheDocument()
    await wait()
    fireEvent.click(getByText(/select a season/i))
    expect(getByText(/test show name/i)).toBeInTheDocument()
    expect(getByText(/test summary paragraph/i)).toBeInTheDocument()
    expect(getByText(/select a season/i)).toBeInTheDocument()
})



