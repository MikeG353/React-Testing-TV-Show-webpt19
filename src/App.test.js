import React from 'react'
import { fireEvent, getByTestId, render, wait } from '@testing-library/react'
import App from './App'
import { fetchShow as mockFetchShow } from './api/fetchShow'
jest.mock("./api/fetchShow")

const showFixture = {
    // data: {
    //     id:2993,
    //     name:"Stranger Things",
    //     runtime:60,
    //     image:{
    //         medium:"http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    //         original:"http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    //     },
    //         summary:"<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    //         _embedded:{
    //             episodes:[
    //                 {id:553946,
    //                     name:"Chapter One: The Vanishing of Will Byers",
    //                     season:1,
    //                     number:1,
    //                     runtime:60,
    //                     image:{
    //                         medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    //                         original:"http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    //                     },
    //                     summary:"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    //                 }
    //             ]
    //         }
    //     }
    
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
                    name: "Test Episode Name",
                    image: {
                        original: "Test Original Image url",
                        medium: "Test Medium Image url"
                    }
                }
            ]
        }
    }
} 
test("App renders with show data loaded.", async () => {
    mockFetchShow.mockResolvedValueOnce(showFixture)
    
    const { getByText } = render(<App />)
    await wait()
    expect(getByText(/test show name/i)).toBeInTheDocument()
    
    
})

