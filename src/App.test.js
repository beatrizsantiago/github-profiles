import React from 'react'
import { mount } from 'enzyme'
import toJson from "enzyme-to-json"
import { ApolloProvider } from '@apollo/react-hooks'

import client from './services/api'

import Profile from './pages/Profile'
import Repositories from './pages/Repositories'

it("should render the Profile page for the param user (beatrizsantiago)", () => {
    const props = {
        userName: "beatrizsantiago"
    }
    const app = mount(
        <ApolloProvider client={client}>
            <Profile {...props} />
        </ApolloProvider>
    )
    expect(toJson(app)).toMatchSnapshot()
})

it("should render the Repositories page for the param user (beatrizsantiago)", () => {
    const props = {
        userName: "beatrizsantiago"
    }
    const app = mount(
        <ApolloProvider client={client}>
            <Repositories {...props} />
        </ApolloProvider>
    )
    expect(toJson(app)).toMatchSnapshot()
})
