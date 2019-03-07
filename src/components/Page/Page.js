import React from 'react';
import Loader from 'react-loader-spinner'
import Wrapper from './styled/Page';
import Form from '../Form';
import GetRepositories from "../../containers/GetRepositories";
import List from "../List";

const Page = () => (
  <Wrapper>
    <GetRepositories>
      {({ repositories: { loading, items }, getRepositories }) => {

        if (loading) {
          return (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height="25"
              width="25"
            />
          )
        }

        return (
          <>
            <List items={items} />
            <Form onSubmit={getRepositories}/>
          </>
        );
      }}
    </GetRepositories>
  </Wrapper>
);

export default Page;