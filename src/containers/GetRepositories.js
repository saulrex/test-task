import { connect } from 'react-redux';
import toRenderProps from 'recompose/toRenderProps';
import {actionGetRepositories} from "../ducks/repositories";

const withGetRepositories = connect(
  (state) => {
    return state
  },
  (dispatch) => {
    return {
      getRepositories: (search) => {
        dispatch(actionGetRepositories({ search }))
      }
    }
  }
);

export default toRenderProps(withGetRepositories);