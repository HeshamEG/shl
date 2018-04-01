//the action
import { USER } from "../actions/actionTypes";
export const user = user => {
  return {
    type: USER,
    user: user,
    // phone: user.phone,
    // email: user.email
  };
};
