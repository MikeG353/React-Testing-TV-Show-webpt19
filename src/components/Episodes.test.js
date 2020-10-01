import React from 'react'
import { queryAllByTestId,  render, rerender } from '@testing-library/react'
import Episodes from './Episodes'


export const showFixture = {
    data: {
        id: 0,
        name: "Test Show Name",
        image: {
            original: "Test Original Image url",
            medium: "Test Medium Image url"
        },
        summary:"<p>Test Summary Paragraph</p>",
        _embedded: {
            episodes:[
                {
                    id: 1,
                    name: "Test Episode One Name",
                    season: 1,
                    number: 1,
                    image: {
                        original: "Test Original Image url",
                        medium: "Test Medium Image url"
                    }
                },
                {
                    id: 2,
                    name: "Test Episode Two Name",
                    season: 1,
                    number: 2,
                    image: {
                        original: "Test Original Image url",
                        medium: "Test Medium Image url"
                    }
                }
            ]
        }
    }
}

test("Episodes renders with episode list", () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />) 
    expect(queryAllByTestId('episode')).toHaveLength(0)
    rerender(<Episodes episodes={showFixture.data._embedded.episodes} />)
    expect(queryAllByTestId('episode')).toHaveLength(2)
})